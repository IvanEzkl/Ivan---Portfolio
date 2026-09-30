// Email templates for the portfolio contact form. Email clients ignore most modern CSS,
// so these use tables and inline styles; every visitor-provided value is escaped.
import config from "../../main/portfolio.config.js";

const SITE_URL = "https://ivanezekiel.dev";
const ACCENT = "#ff6b00";
const INK = "#0e0e11";
const PAPER = "#f6f5f2";
const MUTED = "#6b6b73";
const LINE = "#e3e2dd";

// Auto-reply copy, shared by the HTML and plain-text versions
export const AUTO_REPLY_PARAGRAPHS = [
  "Thank you for getting in touch through my portfolio. I've received your message and appreciate you taking the time to reach out.",
  "I read every inquiry personally and will get back to you within <strong>24 hours</strong>. If your request is time-sensitive, feel free to reply to this email with any additional details, such as your timeline, budget or relevant links.",
  "In the meantime, you're welcome to browse my recent work:",
];
export const SIGNATURE_ROLE = "Full-Stack Developer · Quezon City, Philippines";

const DISPLAY ="Anton, Impact, 'Arial Narrow Bold', 'Helvetica Neue', Arial, sans-serif";
const BODY = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// "maria  santos-cruz!!" → "Maria". Letters only, so the auto-reply can't carry arbitrary text.
export function firstName(name) {
  const word = (String(name).trim().split(/\s+/)[0] || "").replace(/[^\p{L}'-]/gu, "").slice(0, 30);
  return word ? word[0].toUpperCase() + word.slice(1) : "there";
}

function formatManilaTime(date) {
  return new Intl.DateTimeFormat("en-PH", {
    timeZone: config.timezone || "Asia/Manila",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

// Shared shell: dark header band with the chapter label + display title, paper body, quiet footer
function layout({ preheader, label, title, body, footer }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#e9e8e4;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e9e8e4;">
  <tr>
    <td align="center" style="padding:32px 12px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
        <tr>
          <td style="background:${INK};padding:32px 36px 30px;border-radius:10px 10px 0 0;">
            <div style="font-family:${MONO};font-size:11px;font-weight:700;letter-spacing:2px;color:#8e8e96;">
              <span style="color:${ACCENT};">05</span> / 05 &mdash; ${escapeHtml(label)}
            </div>
            <div style="font-family:${DISPLAY};font-size:44px;line-height:1;letter-spacing:0.5px;color:#f4f4f6;text-transform:uppercase;padding-top:12px;">
              ${escapeHtml(title)}
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:${PAPER};padding:32px 36px;font-family:${BODY};font-size:16px;line-height:1.6;color:${INK};">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="background:${PAPER};border-top:1px solid ${LINE};padding:18px 36px 24px;border-radius:0 0 10px 10px;font-family:${MONO};font-size:11px;letter-spacing:1px;line-height:1.7;color:${MUTED};">
            ${footer}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function button(href, text) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
  <tr>
    <td style="background:${INK};border-radius:4px;">
      <a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 24px;font-family:${MONO};font-size:13px;font-weight:700;letter-spacing:1.5px;color:#ffffff;text-decoration:none;">${escapeHtml(text)}</a>
    </td>
  </tr>
</table>`;
}

function detailRow(label, valueHtml) {
  return `<tr>
  <td style="padding:10px 0;border-bottom:1px solid ${LINE};font-family:${MONO};font-size:11px;font-weight:700;letter-spacing:1.5px;color:${MUTED};width:110px;vertical-align:top;">${label}</td>
  <td style="padding:10px 0;border-bottom:1px solid ${LINE};font-size:15px;color:${INK};">${valueHtml}</td>
</tr>`;
}

// ── 1. Notification to Ivan ──────────────────────────────
export function notificationEmail({ name, email, message, receivedAt = new Date() }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const replyHref = `mailto:${email}?subject=${encodeURIComponent("Re: your message on my portfolio")}`;

  const body = `
    <p style="margin:0 0 6px;font-size:22px;font-weight:700;line-height:1.3;">New message from ${safeName}</p>
    <p style="margin:0 0 24px;color:${MUTED};font-size:15px;">Someone reached out through the contact form on your portfolio.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${LINE};">
      ${detailRow("NAME", safeName)}
      ${detailRow("EMAIL", `<a href="mailto:${safeEmail}" style="color:${INK};">${safeEmail}</a>`)}
      ${detailRow("RECEIVED", escapeHtml(formatManilaTime(receivedAt)) + " (Manila)")}
    </table>

    <div style="margin-top:26px;font-family:${MONO};font-size:11px;font-weight:700;letter-spacing:1.5px;color:${MUTED};">MESSAGE</div>
    <div style="margin-top:10px;padding:18px 20px;background:#ffffff;border-left:3px solid ${ACCENT};border-radius:0 6px 6px 0;font-size:16px;line-height:1.65;color:${INK};white-space:pre-wrap;word-break:break-word;">${escapeHtml(message)}</div>

    ${button(replyHref, `REPLY TO ${firstName(name).toUpperCase()} →`)}`;

  const footer = `Sent from the contact form on <a href="${SITE_URL}" style="color:${MUTED};">ivanezekiel.dev</a>.<br>
    Hitting Reply in your inbox answers ${safeName} directly.`;

  return {
    subject: `New message from ${String(name).slice(0, 80)} · Portfolio`,
    html: layout({
      preheader: `${name}: ${String(message).slice(0, 110)}`,
      label: "NEW MESSAGE",
      title: "Let's build",
      body,
      footer,
    }),
    text: [
      `New message from ${name}`,
      `Email: ${email}`,
      `Received: ${formatManilaTime(receivedAt)} (Manila)`,
      "",
      message,
      "",
      "Reply to this email to answer them directly.",
    ].join("\n"),
  };
}

// ── 2. Auto-reply to the visitor ─────────────────────────
// Deliberately contains no visitor text beyond a sanitised first name.
export function autoReplyEmail({ name }) {
  const first = escapeHtml(firstName(name));
  const { github, linkedin, email } = config.contact;

  const link = (href, text) =>
    `<a href="${escapeHtml(href)}" style="color:${INK};font-weight:700;text-decoration:underline;">${text}</a>`;

  const body = `
    <p style="margin:0 0 18px;font-size:18px;font-weight:700;">Hi ${first},</p>
    ${AUTO_REPLY_PARAGRAPHS.map((p) => `<p style="margin:0 0 16px;">${p}</p>`).join("")}
    <p style="margin:0 0 4px;">${link(SITE_URL + "/projects", "Selected work")} &nbsp;·&nbsp; ${link(github, "GitHub")} &nbsp;·&nbsp; ${link(linkedin, "LinkedIn")}</p>
    <p style="margin:28px 0 0;">Kind regards,<br><strong>Ivan Ezekiel</strong><br><span style="color:${MUTED};font-size:14px;">${SIGNATURE_ROLE}</span></p>`;

  const footer = `You're receiving this because this address was entered in the contact form on
    <a href="${SITE_URL}" style="color:${MUTED};">ivanezekiel.dev</a>. If that wasn't you, you can ignore this email.<br>
    Need to add something? Just reply, or write to ${escapeHtml(email)}.`;

  return {
    subject: "Thank you for your message · Ivan Ezekiel",
    html: layout({
      preheader: "Thank you for reaching out. I'll get back to you within 24 hours.",
      label: "MESSAGE RECEIVED",
      title: "Thank you",
      body,
      footer,
    }),
    text: [
      `Hi ${firstName(name)},`,
      "",
      ...AUTO_REPLY_PARAGRAPHS.map((p) => p.replace(/<[^>]+>/g, "") + "\n"),
      `Selected work: ${SITE_URL}/projects`,
      `GitHub: ${github}`,
      `LinkedIn: ${linkedin}`,
      "",
      "Kind regards,",
      "Ivan Ezekiel",
      SIGNATURE_ROLE,
    ].join("\n"),
  };
}
