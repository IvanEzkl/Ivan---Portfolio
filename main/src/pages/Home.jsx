import React from "react";
import HeroCard from "../components/cards/HeroCard";
import ExperienceCard from "../components/cards/ExperienceCard";
import WorkShowcase from "../components/WorkShowcase";
import StackCard from "../components/cards/StackCard";
import AboutCard from "../components/cards/AboutCard";
import ClockCard from "../components/cards/ClockCard";
import ThemeCard from "../components/cards/ThemeCard";
import ContactCard from "../components/cards/ContactCard";
import config from "../../portfolio.config";

export default function Home() {
  return (
    <main className="portfolio-container">
      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <section
        id="overview"
        aria-label="Overview & Intro"
        className="portfolio-section portfolio-section--hero"
      >
        <HeroCard />
      </section>

      {/* ── 2. Work Section (Full Showcase) ────────────────────────── */}
      <section
        id="work"
        aria-label="Selected Work & Projects"
        className="portfolio-section"
      >
        <div className="work-header-row">
          <div>
            <span className="section-eyebrow">SELECTED PROJECTS</span>
            <h2 className="section-heading work-heading">
              SELECTED<br />WORKS
            </h2>
          </div>
          <div className="work-records-count font-mono">
            <span>4 RECORDS</span>
          </div>
        </div>

        <WorkShowcase />
      </section>

      {/* ── 3. Stack Section ───────────────────────────────────────── */}
      <section
        id="stack"
        aria-label="Stack & Technologies"
        className="portfolio-section"
      >
        <div className="stack-header-row">
          <div>
            <span className="section-eyebrow">TOOLKIT</span>
            <h2 className="section-heading stack-heading">
              TECH<br />STACK
            </h2>
          </div>
        </div>

        <div className="w-full">
          <StackCard />
        </div>
      </section>

      {/* ── 4. Experience & Trajectory Section ──────────────────────── */}
      <section
        id="experience"
        aria-label="Trajectory & Journey"
        className="portfolio-section"
      >
        <div className="trajectory-header-row">
          <div>
            <span className="section-eyebrow">CAREER</span>
            <h2 className="section-heading trajectory-heading">
              EXPERIENCE<br />& JOURNEY
            </h2>
            <p className="trajectory-subheading font-mono">
              My academic foundation, industry experience, and active participation in developer communities.
            </p>
          </div>

          <a
            href={config.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noreferrer"
            className="btn-trajectory-resume font-mono"
          >
            <span>VIEW FULL CV</span>
            <span className="btn-arrow">↗</span>
          </a>
        </div>

        <ExperienceCard />
      </section>

      {/* ── 5. About Section ───────────────────────────────────────── */}
      <section
        id="about"
        aria-label="About Me"
        className="portfolio-section"
      >
        <div className="about-header-row">
          <div>
            <span className="section-eyebrow">BIOGRAPHY</span>
            <h2 className="section-heading about-heading">
              ABOUT<br />ME
              
            </h2>
          </div>
        </div>

        <AboutCard />
      </section>

      {/* ── Marquee Divider Between About & Contact ──────────────── */}
      <div className="section-marquee-divider font-mono" aria-hidden="true">
        <div className="section-marquee-track">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="ticker-dot">✦</span>
              <span>LET'S WORK TOGETHER</span>
              <span className="ticker-dot">✦</span>
              <span>START A PROJECT</span>
              <span className="ticker-dot">✦</span>
              <span>GET IN TOUCH</span>
              <span className="ticker-dot">✦</span>
              <span className="ticker-accent">● OPEN TO WORK</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── 6. Connect Section ─────────────────────────────────────── */}
      <section
        id="connect"
        aria-label="Get In Touch"
        className="portfolio-section portfolio-section--last portfolio-section--contact"
      >
        <div className="contact-full-wrapper">
          <ContactCard />
        </div>
      </section>
    </main>
  );
}
