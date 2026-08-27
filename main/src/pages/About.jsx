import React, { useState } from "react";
import { useCardGlow } from "../hooks/useCardGlow";
import { usePageTransition } from "../hooks/usePageTransition";
import BackButton from "../components/BackButton";
import config from "../../portfolio.config";

export default function About() {
  const { transitionTo } = usePageTransition();
  const [openPhilosophy, setOpenPhilosophy] = useState(0);

  const togglePhilosophy = (idx) => {
    setOpenPhilosophy((prev) => (prev === idx ? null : idx));
  };

  const capabilities = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Full-Stack Development",
      desc: "MERN Stack • React, Node.js, Express & MongoDB",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Frontend & UI Engineering",
      desc: "Responsive web interfaces, Tailwind CSS & micro-interactions",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      ),
      title: "AI & NLP Integrations",
      desc: "LLM prompt pipelines & prescriptive skill-gap algorithms",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
      title: "Secure API Architecture",
      desc: "RESTful endpoints, JWT auth & deterministic data flows",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      title: "Database Systems",
      desc: "MongoDB document stores, PostgreSQL & relational modeling",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Technical Leadership",
      desc: "AWS Legarda & developer community workshops & infra",
    },
  ];

  const philosophies = [
    {
      num: "01",
      title: "Build for tangible impact.",
      desc: "Software only matters when it delivers measurable value to real users — solving bottlenecks rather than creating complexity.",
    },
    {
      num: "02",
      title: "High-contrast, intuitive interfaces.",
      desc: "Clean typography, intentional spacing, and fluid feedback transform complex data systems into effortless user experiences.",
    },
    {
      num: "03",
      title: "Resilient backend contracts.",
      desc: "Deterministic data flows, typed API schemas, and robust error boundaries ensure systems hold up reliably in production.",
    },
    {
      num: "04",
      title: "Relentless technical curiosity.",
      desc: "Constantly expanding across modern tech stacks — from LLM orchestration and NLP pipelines to scalable cloud deployments.",
    },
  ];

  const marqueeItems = [
    "FULL-STACK MERN",
    "NLP & AI PIPELINES",
    "RESPONSIVE UI DESIGN",
    "SHIPPING SKILLMATCH",
    "SECURE REST APIS",
    "AWS LEGARDA",
    "CONTINUOUS ITERATION",
  ];

  return (
    <main className="portfolio-container" style={{ maxWidth: "1260px", paddingTop: "60px", paddingBottom: "80px", gap: "110px" }}>
      {/* ── Top Back Button ─────────────────────────────────────── */}
      <div style={{ marginBottom: "-70px" }}>
        <BackButton />
      </div>

      {/* ── 1. Hero & Biography Section ─────────────────────────── */}
      <section className="about-grid">
        {/* Left Column: Portrait Card with Interactive Hover Crossfade */}
        <div className="about-photo-wrapper">
          <div className="about-photo-card" title="Hover to view alternative pose">
            {/* Primary Image 1 */}
            <img
              src="/about-photo-1.jpg"
              alt="Ivan Ezekiel Regodon"
              className="about-photo-img about-photo-img--primary"
            />
            {/* Hover Reveal Image 2 */}
            <img
              src="/about-photo-2.jpg"
              alt="Ivan Ezekiel Regodon (Hover Pose)"
              className="about-photo-img about-photo-img--hover"
            />
            {/* Live Availability Floating Pill */}
            <div className="about-status-pill">
              <span className="live-dot" />
              <span>Available for work</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Story & Metadata Card with background surface */}
        <div
          className="card flex flex-col gap-6"
          style={{
            padding: "42px 48px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div>
            <span className="section-eyebrow" style={{ letterSpacing: "0.14em", marginBottom: "6px" }}>
              a bit about me
            </span>
            <h1
              className="font-head"
              style={{
                fontSize: "clamp(2.4rem, 4.2vw, 3.4rem)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                marginBottom: "20px",
              }}
            >
              The person <span style={{ color: "var(--muted)" }}>behind the code.</span>
            </h1>

            <div className="flex flex-col gap-4 text-muted" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              <p>
                I'm a BS Information Technology student specializing in <strong style={{ color: "var(--text)" }}>Mobile & Web Applications</strong> at{" "}
                <strong style={{ color: "var(--text)" }}>National University Manila (2023–2027)</strong>, and a Developer Intern at{" "}
                <strong style={{ color: "var(--text)" }}>3am Media & Technology (NLP Business)</strong>. I started coding out of a passion for building software that delivers tangible solutions — from SME inventory suites to AI-powered skill matching portals.
              </p>
              <p>
                I specialize across the full-stack MERN ecosystem with a focus on clean interfaces and scalable architectures. Lately, I've been deep into LLM-driven workflows, prompt engineering, and building resilient API backends.
              </p>
              <p>
                When I'm not writing code, you can find me contributing to tech events with AWS Legarda, exploring sound design, or gaming.
              </p>
            </div>
          </div>

          {/* Education Box */}
          <div
            style={{
              padding: "18px 22px",
              background: "var(--code-bg)",
              border: "1px solid var(--border)",
              borderRadius: "calc(var(--radius) - 2px)",
            }}
          >
            <span
              className="font-mono text-muted"
              style={{
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "8px",
                display: "block",
              }}
            >
              Education
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-head)",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                NU
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span className="font-head" style={{ fontWeight: 700, fontSize: "1.02rem", color: "var(--text)" }}>
                  BS Information Technology
                </span>
                <span className="text-muted font-mono" style={{ fontSize: "0.82rem" }}>
                  National University Manila • 2023 — 2027
                </span>
              </div>
            </div>
          </div>

          {/* 3-Pill Stat Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
            }}
          >
            <div
              style={{
                padding: "12px 14px",
                background: "var(--code-bg)",
                border: "1px solid var(--border)",
                borderRadius: "calc(var(--radius) - 4px)",
              }}
            >
              <span className="font-mono text-muted" style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.08em", display: "block" }}>
                Current Role
              </span>
              <span className="font-head" style={{ fontWeight: 700, fontSize: "0.86rem", color: "var(--text)", marginTop: "2px", display: "block" }}>
                Developer Intern
              </span>
            </div>

            <div
              style={{
                padding: "12px 14px",
                background: "var(--code-bg)",
                border: "1px solid var(--border)",
                borderRadius: "calc(var(--radius) - 4px)",
              }}
            >
              <span className="font-mono text-muted" style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.08em", display: "block" }}>
                Location
              </span>
              <span className="font-head" style={{ fontWeight: 700, fontSize: "0.86rem", color: "var(--text)", marginTop: "2px", display: "block" }}>
                Manila, PH
              </span>
            </div>

            <div
              style={{
                padding: "12px 14px",
                background: "var(--code-bg)",
                border: "1px solid var(--border)",
                borderRadius: "calc(var(--radius) - 4px)",
              }}
            >
              <span className="font-mono text-muted" style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.08em", display: "block" }}>
                Focus
              </span>
              <span className="font-head" style={{ fontWeight: 700, fontSize: "0.86rem", color: "var(--text)", marginTop: "2px", display: "block" }}>
                AI + Full-Stack
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. What I Do (Capabilities Section) ─────────────────── */}
      <section className="about-grid" style={{ alignItems: "flex-start" }}>
        {/* Left Column: Heading & CTA wrapped in card surface */}
        <div
          className="card flex flex-col gap-6"
          style={{
            padding: "36px 32px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            position: "sticky",
            top: "100px",
          }}
        >
          <div>
            <span className="section-eyebrow" style={{ letterSpacing: "0.14em", marginBottom: "6px" }}>
              what i do
            </span>
            <h2
              className="font-head"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              Building systems <br />
              <span style={{ color: "var(--muted)" }}>that hold up.</span>
            </h2>
            <p className="text-muted" style={{ fontSize: "0.92rem", lineHeight: 1.6 }}>
              Translating business workflows into clean frontend interfaces, responsive mobile solutions, and resilient backend services.
            </p>
          </div>

          <div>
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                transitionTo("/projects", e);
              }}
              className="pill pill--accent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 22px",
                fontSize: "0.88rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <span>Explore my work</span>
              <span style={{ fontSize: "1rem" }}>↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Capabilities List wrapped in card */}
        <div
          className="card flex flex-col"
          style={{
            padding: "12px 28px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
          }}
        >
          {capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className="flex items-center gap-4 py-4"
              style={{
                borderBottom: idx < capabilities.length - 1 ? "1px solid var(--border)" : "none",
                padding: "18px 0",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "var(--code-bg)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                {cap.icon}
              </div>

              <div className="flex flex-col">
                <span className="font-head" style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text)" }}>
                  {cap.title}
                </span>
                <span className="font-mono text-muted" style={{ fontSize: "0.82rem", marginTop: "2px" }}>
                  {cap.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Design Philosophy & LinkedIn Section ─────────────── */}
      <section className="about-grid" style={{ alignItems: "flex-start" }}>
        {/* Left Column: Interactive Philosophy Accordion wrapped in card */}
        <div
          className="card flex flex-col gap-6"
          style={{
            padding: "36px 36px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
          }}
        >
          <div>
            <span className="section-eyebrow" style={{ letterSpacing: "0.14em", marginBottom: "6px" }}>
              design philosophy
            </span>
            <h2
              className="font-head"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.6rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "8px",
              }}
            >
              How I think <span style={{ color: "var(--muted)" }}>about my work</span>
            </h2>
          </div>

          <div className="flex flex-col" style={{ borderTop: "1px solid var(--border)" }}>
            {philosophies.map((phil, idx) => {
              const isOpen = openPhilosophy === idx;
              return (
                <div key={phil.num} className="philosophy-item">
                  <button
                    type="button"
                    onClick={() => togglePhilosophy(idx)}
                    className="philosophy-btn"
                    aria-expanded={isOpen}
                  >
                    <div className="philosophy-header-left">
                      <span className="philosophy-num">
                        {phil.num}
                      </span>
                      <span
                        className="philosophy-title"
                        style={{
                          color: isOpen ? "var(--accent)" : "var(--text)",
                        }}
                      >
                        {phil.title}
                      </span>
                    </div>

                    <span className={`philosophy-icon ${isOpen ? "open" : ""}`} aria-hidden="true">
                      +
                    </span>
                  </button>

                  <div className={`philosophy-content-wrapper ${isOpen ? "open" : ""}`}>
                    <div className="philosophy-content-inner">
                      <p className="philosophy-desc">
                        {phil.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: LinkedIn Connect Card */}
        <div>
          <div
            className="card"
            style={{
              padding: "36px 32px",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--text)",
                color: "var(--bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-head)",
                fontWeight: 800,
                fontSize: "1.1rem",
              }}
            >
              IE
            </div>

            <div>
              <span className="font-mono text-muted" style={{ fontSize: "0.82rem", display: "block", marginBottom: "4px" }}>
                Curious about my work?
              </span>
              <h3 className="font-head" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)" }}>
                Find me on LinkedIn
              </h3>
            </div>

            <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
              Always up for a conversation about full-stack engineering, AI integrations, or whatever you're building.
            </p>

            <a
              href={config.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="pill pill--accent"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px 20px",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                marginTop: "6px",
              }}
            >
              <span>Connect on LinkedIn</span>
              <span style={{ fontSize: "0.95rem" }}>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Infinite Running Marquee Ticker ───────────────────── */}
      <div className="about-marquee-wrapper">
        <div className="about-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="about-marquee-item">
              ✦ {item}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
