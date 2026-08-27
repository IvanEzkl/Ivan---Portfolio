import React from "react";
import { useTypewriter } from "../../hooks/useTypewriter";
import config from "../../../portfolio.config";
import ThreeHeroCore from "../ThreeHeroCore";

export default function HeroCard() {
  const currentRole = useTypewriter(config.roles);

  return (
    <div className="hero-figma-container">
      {/* Top Status & Location Badges */}
      <div className="hero-top-bar">
        <div className="hero-status-row">
          <div className="hero-status-tag font-mono">
            <span className="hero-status-dot" aria-hidden="true" />
            <span>AVAILABLE FOR WORK</span>
          </div>
          <span className="hero-loc-tag font-mono">{config.bio.basedIn}</span>
        </div>

        <div className="hero-3d-core">
          <ThreeHeroCore />
        </div>
      </div>

      {/* Eyebrow Line */}
      <div className="hero-portfolio-tag font-mono">
        IVAN EZEKIEL — PORTFOLIO  
      </div>

      {/* Huge Brutalist Headline */}
      <h1 className="hero-brutalist-title font-head">
        <span className="title-white">BUILDING</span>
        <span className="title-orange">ROBUST</span>
        <span className="title-white">SYSTEMS</span>
      </h1>

      {/* Dynamic Typewriter Role */}
      <div className="hero-subrole font-mono">
        <span className="hero-dash">—</span>
        <span className="hero-typing-role">{currentRole}</span>
        <span className="hero-cursor" aria-hidden="true">|</span>
      </div>

      {/* Description & Action Buttons Row */}
      <div className="hero-middle-row">
        <p className="hero-para font-mono">
          {config.bio.line1}{" "}
          <span className="hero-highlight">{config.bio.highlight}</span>
        </p>

        <div className="hero-btn-group">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("work");
              if (el) {
                const elementRect = el.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                if (el.offsetHeight < window.innerHeight - 80) {
                  const middle = absoluteElementTop - (window.innerHeight / 2) + (el.offsetHeight / 2);
                  window.scrollTo({ top: Math.max(0, middle), behavior: "smooth" });
                } else {
                  window.scrollTo({ top: Math.max(0, absoluteElementTop - 30), behavior: "smooth" });
                }
              }
            }}
            className="btn-explore font-mono"
          >
            <span>EXPLORE WORK</span>
            <span className="btn-arrow">→</span>
          </a>
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("connect");
              if (el) {
                const elementRect = el.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                if (el.offsetHeight < window.innerHeight - 80) {
                  const middle = absoluteElementTop - (window.innerHeight / 2) + (el.offsetHeight / 2);
                  window.scrollTo({ top: Math.max(0, middle), behavior: "smooth" });
                } else {
                  window.scrollTo({ top: Math.max(0, absoluteElementTop - 30), behavior: "smooth" });
                }
              }
            }}
            className="btn-connect font-mono"
          >
            <span>CONNECT</span>
          </a>
          <a
            href={config.resumeUrl || "/Resume - Regodon.pdf"}
            target="_blank"
            rel="noreferrer"
            className="btn-resume font-mono"
          >
            <span>RESUME</span>
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
