import React from "react";
import { useCardGlow } from "../../hooks/useCardGlow";
import { useTypewriter } from "../../hooks/useTypewriter";
import config from "../../../portfolio.config";

export default function HeroCard() {
  const cardRef = useCardGlow();
  const currentRole = useTypewriter(config.roles);

  return (
    <div
      ref={cardRef}
      className="card col-span-4 flex flex-col justify-between"
      style={{ padding: "32px 32px" }}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="eyebrow" style={{ margin: 0 }}>
            {config.title}
          </span>
          <span className="project-status">Available for hire</span>
        </div>

        <h1
          className="font-head"
          style={{
            fontSize: "clamp(2rem, 4.2vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          {config.name}
        </h1>
      </div>

      {/* Middle: Expanded Typing Hero Section */}
      <div
        className="flex-1 flex flex-col justify-center"
        style={{ padding: "10px 0 14px 0" }}
      >
        <div style={{ marginBottom: "6px" }}>
          <span
            className="font-mono text-muted"
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            I am a
          </span>
        </div>

        {/* Typing Animation Line */}
        <div
          className="font-head text-accent"
          style={{
            fontSize: "clamp(2.6rem, 5.8vw, 3.9rem)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
            minHeight: "clamp(5.5rem, 10vw, 7.5rem)",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span>{currentRole}</span>
          <span
            className="cursor"
            style={{
              height: "0.95em",
              width: "6px",
              marginLeft: "8px",
              borderRadius: "2px",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bio text at the bottom */}
      <div style={{ paddingTop: "12px" }}>
        <p
          className="text-muted"
          style={{ fontSize: "1.05rem", lineHeight: 1.65, maxWidth: "720px" }}
        >
          {config.bio.line1}
        </p>
      </div>
    </div>
  );
}
