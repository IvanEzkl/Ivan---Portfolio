// Prints a safe fingerprint of the Gmail credentials in the local .env, in the same format the
// contact API logs on Vercel when Gmail rejects a login. Matching lines = matching values.
// Usage (from the repo root): node scripts/env-fingerprint.mjs
import fs from "node:fs";
import { credentialFingerprint } from "../api/contact.js";

const text = fs.readFileSync(new URL("../.env", import.meta.url), "utf8");
const read = (key) => {
  const match = text.match(new RegExp(`^${key}=(.*)$`, "m"));
  return String(match ? match[1] : "").trim().replace(/^(["'])(.*)\1$/, "$2").trim();
};

const user = read("GMAIL_USER");
const password = read("GMAIL_APP_PASSWORD").replace(/\s+/g, "");

console.log("Local .env:", credentialFingerprint(user, password));
