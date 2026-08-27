import React from "react";
import { useClock } from "../../hooks/useClock";
import config from "../../../portfolio.config";

export default function AboutCard() {
  const { hostTimeStr, visitorTimeStr } = useClock(config.timezone);

  const quickFacts = [
    { label: "ROLE", value: "Dev Intern • 3AM" },
    { label: "STUDY", value: "BSIT • NU 2027" },
    { label: "LOCATION", value: "QC, PH" },
    { label: "FOCUS", value: "AI + Full-Stack" },
  ];

  return (
    <div className="about-figma-container">
      <div className="about-three-grid">
        {/* ── 1. Left Card: Photo & Identity ─────────────────── */}
        <div className="about-card about-card--photo">
          <div className="about-photo-frame">
            <img
              src="/about-photo-1.jpg"
              alt="Ivan Ezekiel"
              className="about-photo-img-main about-photo-img--primary"
            />
            <img
              src="/about-photo-2.jpg"
              alt="Ivan Ezekiel Hover"
              className="about-photo-img-main about-photo-img--hover"
            />
          </div>

          <div className="about-photo-caption">
            <h3 className="about-caption-name font-head">IVAN EZEKIEL</h3>
            <span className="about-caption-role font-mono">Developer • Designer</span>
          </div>
        </div>

        {/* ── 2. Middle Card: Narrative Story ─────────────────── */}
        <div className="about-card about-card--narrative">
          <div className="about-tag-pill font-mono">
            <span>A BIT ABOUT ME</span>
          </div>

          <h3 className="about-narrative-title font-head">
            The person behind the code.
          </h3>

          <div className="about-narrative-text font-mono">
            <p>
              I'm a BS IT student at{" "}
              <strong>National University Manila (2023–2027)</strong>, and
              Developer Intern at <strong>3AM Media & Technology</strong>.
            </p>
            <p>
              I started coding from a passion for building software that
              delivers tangible solutions — from SME inventory suites to
              AI-powered skill matching portals.
            </p>
            <p>
              I specialise across the full-stack MERN ecosystem with a focus on
              clean interfaces and reliable software systems. Lately deep into
              LLM-driven workflows and resilient API backends.
            </p>
            <p className="about-outside-code">
              Outside of code: GDG on Campus, AWS Learning Club, sound design,
              and gaming.
            </p>
          </div>
        </div>

        {/* ── 3. Right Card: Quick Facts & Live Clocks ─────────── */}
        <div className="about-card about-card--facts">
          {/* Quick Facts Section */}
          <div className="about-facts-section">
            <span className="about-facts-header font-mono">QUICK FACTS</span>

            <div className="about-facts-table font-mono">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="about-fact-row">
                  <span className="about-fact-label">{fact.label}</span>
                  <span className="about-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-divider" />

          {/* Manila Time Clock */}
          <div className="about-clock-block font-mono">
            <span className="about-clock-label">MANILA (UTC+8)</span>
            <div className="about-clock-digits font-head">{hostTimeStr}</div>
          </div>

          <div className="about-divider" />

          {/* Visitor Local Time Clock */}
          <div className="about-clock-block font-mono">
            <span className="about-clock-label">YOUR LOCAL TIME</span>
            <div className="about-clock-digits font-head">{visitorTimeStr}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
