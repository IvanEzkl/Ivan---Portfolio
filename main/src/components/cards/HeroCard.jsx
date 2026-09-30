import React, { useRef } from "react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useScrollProgress } from "../../hooks/useScrollSpy";
import config from "../../../portfolio.config";
import ThreeHeroCore from "../ThreeHeroCore";

const scrollToChapter = (id) => (e) => {
  e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
};

export default function HeroCard() {
  const currentRole = useTypewriter(config.roles);
  const storyRef = useRef(null);
  // The hero only pins (and animates out) where there's room for it
  const pinned = typeof window !== "undefined" && window.matchMedia("(min-width: 769px)").matches;
  useScrollProgress(storyRef, { enabled: pinned });

  return (
    <div ref={storyRef} className="hero-story">
      <div className="hero-stage">
        {/* Label row */}
        <div className="hero-top-row">
          <span className="hero-portfolio-tag font-mono">
            IVAN EZEKIEL — PORTFOLIO {config.bio.subtitle.replace(/\D/g, "")}
          </span>
          <div className="hero-3d-core-anchor">
            <ThreeHeroCore />
          </div>
        </div>

        {/* Full-width condensed headline */}
        <h1 className="hero-story-title">
          <span className="hero-line hero-line--1">
            <span className="hero-word">{config.bio.heroHeadline.line1}</span>{" "}
            <span className="hero-word-accent">{config.bio.heroHeadline.line2}</span>
          </span>
          <span className="hero-line hero-line--3">{config.bio.heroHeadline.line3}</span>
        </h1>

        {/* Intro + actions */}
        <div className="hero-bottom-row">
          <div className="hero-intro">
            <div className="hero-subrole font-mono" aria-live="off">
              <span className="hero-dash">—</span>
              <span className="hero-typing-role">{currentRole}</span>
              <span className="hero-cursor" aria-hidden="true">|</span>
            </div>
            <p className="hero-para">
              {config.bio.line1} {config.bio.highlight}
            </p>
          </div>

          <div className="hero-actions">
            <a href="#work" onClick={scrollToChapter("work")} className="hero-cta font-mono">
              <span>EXPLORE WORK</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="#connect" onClick={scrollToChapter("connect")} className="hero-link font-mono">
              CONTACT
            </a>
            <a
              href={config.resumeUrl || "/Resume - Regodon.pdf"}
              target="_blank"
              rel="noreferrer"
              className="hero-link font-mono"
            >
              RESUME ↗
            </a>
          </div>
        </div>

        <span className="hero-scroll-cue font-mono" aria-hidden="true">SCROLL ↓</span>
      </div>
    </div>
  );
}
