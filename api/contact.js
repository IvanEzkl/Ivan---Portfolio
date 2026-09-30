// POST /api/contact — sends the portfolio contact form through Gmail.
// Env: GMAIL_USER, GMAIL_APP_PASSWORD, optional CONTACT_TO (defaults to GMAIL_USER).
import nodemailer from "nodemailer";
import { notificationEmail, autoReplyEmail } from "./_lib/emailTemplates.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_MS = 3000;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

// Best-effort per-IP limit; serverless instances don't share memory, so this only slows bursts
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

// Vercel parses JSON bodies; the local Vite dev route hands over a raw stream
async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  const chunks = [];
  for await (const chunk of req) chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function validate({ name, email, message }) {
  if (!name || name.length < 2 || name.length > 100) return "Please enter your name (2–100 characters).";
  if (!email || email.length > 200 || !EMAIL_RE.test(email)) return "Please enter a valid email address.";
  if (!message || message.length < 10) return "Please write a little more in your message (at least 10 characters).";
  if (message.length > 5000) return "Your message is too long (5,000 characters max).";
  return null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return send(res, 405, { ok: false, error: "Method not allowed." });
  }

  let data;
  try {
    data = await readBody(req);
  } catch {
    return send(res, 400, { ok: false, error: "Invalid request." });
  }

  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();

  // Spam traps: a hidden field humans never fill, and forms submitted faster than a person can type.
  // Answer bots with a normal success so they don't adapt.
  const startedAt = Number(data.startedAt) || 0;
  if (data.company || (startedAt && Date.now() - startedAt < MIN_FILL_MS)) {
    return send(res, 200, { ok: true });
  }

  const invalid = validate({ name, email, message });
  if (invalid) return send(res, 400, { ok: false, error: invalid });

  const ip = String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
  if (rateLimited(ip)) {
    return send(res, 429, { ok: false, error: "Too many messages in a short time. Please try again in a few minutes." });
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not set");
    return send(res, 500, { ok: false, error: "The contact form isn't set up yet. Please email me directly." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  const notice = notificationEmail({ name, email, message });
  const reply = autoReplyEmail({ name });

  try {
    await transporter.sendMail({
      from: { name: "Portfolio Contact", address: GMAIL_USER },
      to: CONTACT_TO || GMAIL_USER,
      replyTo: { name, address: email },
      subject: notice.subject,
      html: notice.html,
      text: notice.text,
    });
  } catch (err) {
    console.error("Contact form: notification failed:", err.code || err.message);
    return send(res, 502, { ok: false, error: "Your message couldn't be sent right now. Please try again or email me directly." });
  }

  // The visitor's copy is a courtesy; a failure here shouldn't undo a delivered message
  try {
    await transporter.sendMail({
      from: { name: "Ivan Ezekiel", address: GMAIL_USER },
      to: { name, address: email },
      replyTo: CONTACT_TO || GMAIL_USER,
      subject: reply.subject,
      html: reply.html,
      text: reply.text,
    });
  } catch (err) {
    console.error("Contact form: auto-reply failed:", err.code || err.message);
  }

  return send(res, 200, { ok: true });
}
