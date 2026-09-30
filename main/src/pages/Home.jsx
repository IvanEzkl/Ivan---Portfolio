import React, { useRef } from "react";
import HeroCard from "../components/cards/HeroCard";
import ExperienceCard from "../components/cards/ExperienceCard";
import WorkShowcase from "../components/WorkShowcase";
import StackCard from "../components/cards/StackCard";
import AboutCard from "../components/cards/AboutCard";
import ContactCard from "../components/cards/ContactCard";
import ChapterHeader from "../components/ChapterHeader";
import StoryProgress from "../components/StoryProgress";
import { useReveal } from "../hooks/useReveal";
import config from "../../portfolio.config";

const CHAPTERS = [
  { id: "work", num: "01", label: "Selected work", title: "Selected work" },
  { id: "stack", num: "02", label: "Toolkit", title: "Tech stack" },
  { id: "experience", num: "03", label: "Journey", title: "Experience" },
  { id: "about", num: "04", label: "About", title: "About me" },
  { id: "connect", num: "05", label: "Contact", title: "Let's build" },
];

const TOTAL = String(CHAPTERS.length).padStart(2, "0");

function ChapterHeaderFor({ id, aside }) {
  const chapter = CHAPTERS.find((c) => c.id === id);
  return <ChapterHeader num={chapter.num} total={TOTAL} label={chapter.label} title={chapter.title} aside={aside} />;
}

function Chapter({ id, aside, className = "", children }) {
  const chapter = CHAPTERS.find((c) => c.id === id);
  return (
    <section id={id} aria-label={chapter.label} className={`portfolio-section chapter ${className}`}>
      <ChapterHeaderFor id={id} aside={aside} />
      {children}
    </section>
  );
}

export default function Home() {
  const mainRef = useRef(null);
  useReveal(mainRef);

  return (
    <main ref={mainRef} className="portfolio-container">
      <StoryProgress chapters={CHAPTERS} />

      {/* ── 00. Hero ───────────────────────────────────────────────── */}
      <section
        id="overview"
        aria-label="Overview & Intro"
        className="portfolio-section portfolio-section--hero"
      >
        <HeroCard />
      </section>

      {/* ── 01. Work ───────────────────────────────────────────────── */}
      <Chapter
        id="work"
        aside={<span className="chapter-meta font-mono">{config.projects.length} projects</span>}
      >
        <div className="reveal">
          <WorkShowcase layout="track" />
        </div>
      </Chapter>

      {/* ── 02. Stack ──────────────────────────────────────────────── */}
      <Chapter id="stack">
        <div className="reveal w-full">
          <StackCard />
        </div>
      </Chapter>

      {/* ── 03. Experience ─────────────────────────────────────────── */}
      <Chapter
        id="experience"
        aside={
          <a
            href={config.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noreferrer"
            className="btn-trajectory-resume font-mono"
          >
            <span>VIEW FULL CV</span>
            <span className="btn-arrow">↗</span>
          </a>
        }
      >
        <div className="reveal">
          <ExperienceCard />
        </div>
      </Chapter>

      {/* ── 04. About ──────────────────────────────────────────────── */}
      <Chapter id="about">
        <div className="reveal">
          <AboutCard />
        </div>
      </Chapter>

      {/* ── 05. Contact ────────────────────────────────────────────── */}
      <section
        id="connect"
        aria-label="Contact"
        className="portfolio-section chapter portfolio-section--last portfolio-section--contact"
      >
        <ContactCard header={<ChapterHeaderFor id="connect" />} />
      </section>
    </main>
  );
}
