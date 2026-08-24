import React from "react";
import { useCardGlow } from "../../hooks/useCardGlow";
import { usePageTransition } from "../../hooks/usePageTransition";
import config from "../../../portfolio.config";

export default function AboutCard() {
  const cardRef = useCardGlow();
  const { transitionTo } = usePageTransition();

  const handleClick = (e) => {
    transitionTo("/about", e);
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className="card card--clickable w-full flex flex-col justify-between"
      style={{
        padding: "36px 40px",
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
      }}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e);
        }
      }}
      aria-label="Navigate to About Me page"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "36px",
          alignItems: "center",
        }}
      >
        {/* Left: Bio & Story */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between mb-1">
            <span className="eyebrow" style={{ margin: 0 }}>
              Biography & Philosophy
            </span>
          </div>

          <h3
            className="font-head"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            Engineering clean & resilient systems
          </h3>

          <p className="text-muted" style={{ fontSize: "1rem", lineHeight: 1.68 }}>
            {config.bio.line1}{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              {config.bio.highlight}.
            </strong>
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="pill pill--accent" style={{ fontSize: "0.78rem", padding: "4px 12px" }}>
              BSIT @ NU Manila
            </span>
            <span className="pill" style={{ fontSize: "0.78rem", padding: "4px 12px" }}>
              2023 — 2027
            </span>
            <span className="pill" style={{ fontSize: "0.78rem", padding: "4px 12px" }}>
              Full Stack Focus
            </span>
          </div>
        </div>

        {/* Right: Terminal Specs Box & Expanded CTA */}
        <div className="flex flex-col gap-3">
          <div
            style={{
              background: "var(--code-bg)",
              border: "1px solid var(--border)",
              borderRadius: "calc(var(--radius) - 4px)",
              padding: "20px 24px",
            }}
          >
            <div className="terminal" style={{ fontSize: "0.85rem", gap: "10px" }}>
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-key" style={{ minWidth: "115px" }}>based_in</span>
                <span className="terminal-value">"{config.bio.basedIn}"</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-key" style={{ minWidth: "115px" }}>focused_on</span>
                <span className="terminal-value">"{config.bio.focusedOn}"</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-key" style={{ minWidth: "115px" }}>learning</span>
                <span className="terminal-value">"{config.bio.learning}"</span>
              </div>
            </div>
          </div>

          {/* Expanded, Prominent Call-to-Action Footer */}
          <div
            className="flex items-center justify-between pt-2.5"
            style={{
              borderTop: "1px solid var(--border)",
              marginTop: "4px",
            }}
          >
            <div className="flex items-center gap-2 font-mono" style={{ fontSize: "0.95rem", color: "var(--text)", fontWeight: 600 }}>
              <span className="text-accent" style={{ fontSize: "1.2rem", lineHeight: 1 }}>
                ↳
              </span>
              <span>Click card for detailed story</span>
            </div>

            <span
              className="pill pill--accent font-mono"
              style={{
                fontSize: "0.84rem",
                padding: "6px 14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: 700,
              }}
            >
              <span>Read Story</span>
              <span style={{ fontSize: "0.95rem" }}>↗</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
