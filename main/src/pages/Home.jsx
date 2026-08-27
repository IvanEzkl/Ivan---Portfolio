import React from "react";
import HeroCard from "../components/cards/HeroCard";
import ExperienceCard from "../components/cards/ExperienceCard";
import WorkShowcase from "../components/WorkShowcase";
import StackCard from "../components/cards/StackCard";
import AboutCard from "../components/cards/AboutCard";
import ClockCard from "../components/cards/ClockCard";
import ThemeCard from "../components/cards/ThemeCard";
import ContactCard from "../components/cards/ContactCard";

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

      {/* ── 2. Experience Section ──────────────────────────────────── */}
      <section
        id="experience"
        aria-label="Experience & Deployments"
        className="portfolio-section"
      >
        <div className="portfolio-section__header">
          <span className="section-eyebrow">career</span>
          <h2 className="section-heading">Where I've deployed.</h2>
        </div>

        <ExperienceCard />
      </section>

      {/* ── 3. Work Section (Full Showcase) ────────────────────────── */}
      <section
        id="work"
        aria-label="Selected Work & Projects"
        className="portfolio-section"
      >
        <div className="portfolio-section__header">
          <span className="section-eyebrow">selected work</span>
          <h2 className="section-heading">Things I've shipped</h2>
        </div>

        <WorkShowcase />
      </section>

      {/* ── 4. Stack Section ───────────────────────────────────────── */}
      <section
        id="stack"
        aria-label="Stack & Technologies"
        className="portfolio-section"
      >
        <div className="portfolio-section__header">
          <span className="section-eyebrow">stack & tools</span>
          <h2 className="section-heading">Software & Technologies</h2>
        </div>

        <div className="w-full">
          <StackCard />
        </div>
      </section>

      {/* ── 5. About Section ───────────────────────────────────────── */}
      <section
        id="about"
        aria-label="About & Presence"
        className="portfolio-section"
      >
        <div className="portfolio-section__header">
          <span className="section-eyebrow">biography</span>
          <h2 className="section-heading">About & Presence</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
          {/* Top Full-Width Rectangular About Banner */}
          <AboutCard />

          {/* Bottom 2-Column Grid: Compact Time & Appearance Widgets */}
          <div className="responsive-two-grid">
            <ClockCard />
            <ThemeCard />
          </div>
        </div>
      </section>

      {/* ── 6. Connect Section ─────────────────────────────────────── */}
      <section
        id="connect"
        aria-label="Get In Touch"
        className="portfolio-section portfolio-section--last"
      >
        <div className="w-full">
          <ContactCard />
        </div>
      </section>
    </main>
  );
}
