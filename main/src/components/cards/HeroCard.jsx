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
                if (el.offsetHeight < window.innerHeight - 70) {
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                } else {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
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
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="btn-connect font-mono"
          >
            <span>CONNECT</span>
          </a>
          <a
            href={config.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noreferrer"
            className="btn-resume font-mono"
          >
            <span>RESUME</span>
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      </div>

      {/* 4-Column Bottom Stats Box */}
      <div className="hero-stats-box">
        {config.stats.map((stat, idx) => (
          <div key={idx} className="hero-stat-cell">
            <div className="stat-num font-head">{stat.value}</div>
            <div className="stat-desc font-mono">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
