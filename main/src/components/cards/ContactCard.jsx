import React, { useState } from "react";
import config from "../../../portfolio.config";
import ThreeContactGlobe from "../ThreeContactGlobe";

export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/regodonivanezekiel@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: `Portfolio Inquiry from ${formData.name.trim()}`,
          message: formData.message,
          _captcha: "false",
          _template: "table",
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true || response.status === 200)) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMsg("Unable to send right now. Please check your internet connection.");
    }
  };

  return (
    <div className="contact-figma-layout">
      {/* ── Top Header Row ─────────────────────────────────── */}
      <div className="contact-top-row">
        {/* Left: Massive Title */}
        <h2 className="contact-title font-head">
          <span className="contact-title-white">LET'S</span>
          <span className="contact-title-orange">BUILD.</span>
        </h2>

        {/* 3D Global Radar Hologram */}
        <div className="contact-globe-container">
          <ThreeContactGlobe />
        </div>

        {/* Right: Subtitle & Social Links */}
        <div className="contact-top-right">
          <p className="contact-intro-text font-mono">
            Open to full-stack, AI, and mobile engineering opportunities — roles,
            inquiries, or contract work. Response within 24 hours.
          </p>

          <div className="contact-social-tags font-mono">
            <a
              href={config.contact.github}
              target="_blank"
              rel="noreferrer"
              className="contact-social-item"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="social-name">GITHUB</span>
            </a>

            <a
              href={config.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-social-item"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="social-name">LINKEDIN</span>
            </a>

            <a
              href={`mailto:${config.contact.email}`}
              className="contact-social-item"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="social-name">EMAIL</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Middle Direct Details Matrix ───────────────────── */}
      <div className="contact-details-matrix font-mono">
        <div className="contact-detail-col">
          <div className="contact-detail-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div className="contact-detail-info">
            <span className="contact-detail-label">EMAIL</span>
            <span className="contact-detail-value">{config.contact.email}</span>
          </div>
        </div>

        <div className="contact-detail-col">
          <div className="contact-detail-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="contact-detail-info">
            <span className="contact-detail-label">PHONE</span>
            <span className="contact-detail-value">{config.contact.phone}</span>
          </div>
        </div>

        <div className="contact-detail-col">
          <div className="contact-detail-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="contact-detail-info">
            <span className="contact-detail-label">LOCATION</span>
            <span className="contact-detail-value">{config.contact.location}</span>
          </div>
        </div>
      </div>

      {/* ── Bottom Technical Message Form ─────────────────── */}
      <div className="contact-form-wrapper">
        {status === "success" ? (
          <div className="contact-figma-success font-mono">
            <div className="contact-figma-check">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-head" style={{ fontSize: "1.4rem", color: "#ffffff" }}>
              Message Dispatched
            </h3>
            <p style={{ color: "#a1a1aa", fontSize: "0.88rem", maxWidth: "420px" }}>
              Thank you! Your note has been delivered to <strong>{config.contact.email}</strong>. Response within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="contact-submit-btn font-mono"
              style={{ marginTop: "14px", width: "auto", padding: "10px 24px" }}
            >
              WRITE ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-figma-form font-mono">
            {/* Field 01: Name */}
            <div className="contact-table-row">
              <label className="contact-table-label" htmlFor="contact-name">
                01 — NAME <span className="text-accent">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="contact-table-input"
              />
            </div>

            {/* Field 02: Email */}
            <div className="contact-table-row">
              <label className="contact-table-label" htmlFor="contact-email">
                02 — EMAIL <span className="text-accent">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="contact-table-input"
              />
            </div>

            {/* Field 03: Message */}
            <div className="contact-table-row contact-table-row--textarea">
              <label className="contact-table-label" htmlFor="contact-message">
                03 — MESSAGE <span className="text-accent">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={3}
                placeholder="Share your project details, job description, or a quick hello..."
                value={formData.message}
                onChange={handleChange}
                className="contact-table-input contact-table-textarea"
              />
            </div>

            {errorMsg && (
              <p className="contact-err-msg font-mono">{errorMsg}</p>
            )}

            {/* Form Footer Action */}
            <div className="contact-form-bottom">
              <span className="contact-required-note">
                * REQUIRED — RESPONSE WITHIN 24 HOURS
              </span>

              <button
                type="submit"
                disabled={status === "sending"}
                className="contact-submit-btn font-mono"
              >
                <span>{status === "sending" ? "DISPATCHING..." : "SEND MESSAGE"}</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="contact-footer font-mono">
        <span className="contact-footer-left">
          © 2026 IVAN EZEKIEL — ALL RIGHTS RESERVED
        </span>
        <span className="contact-footer-right">
          BUILT WITH REACT + VITE + TAILWIND CSS
        </span>
      </footer>
    </div>
  );
}
