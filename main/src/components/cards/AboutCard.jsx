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
    <div className="story-about">
      <div className="story-about-main">
        {/* ── Photo (hover swaps to the second shot) ── */}
        <figure className="story-about-photo about-photo-frame">
          <img
            src="/about-photo-1.jpg"
            alt="Ivan Ezekiel"
            className="about-photo-img-main about-photo-img--primary"
          />
          <img
            src="/about-photo-2.jpg"
            alt=""
            aria-hidden="true"
            className="about-photo-img-main about-photo-img--hover"
          />
          <figcaption className="story-about-caption font-mono">
            IVAN EZEKIEL · DEVELOPER • DESIGNER
          </figcaption>
        </figure>

        {/* ── Story ── */}
        <div className="story-about-text">
          <h3 className="story-about-lede font-head">The person behind the code.</h3>
          <p>
            I'm a BS IT student at <strong>National University Manila (2023–2027)</strong>, and
            Developer Intern at <strong>3AM Media &amp; Technology</strong>.
          </p>
          <p>
            I started coding from a passion for building software that delivers tangible
            solutions — from SME inventory suites to AI-powered skill matching portals.
          </p>
          <p>
            I specialise across the full-stack MERN ecosystem with a focus on clean interfaces
            and reliable software systems. Lately deep into LLM-driven workflows and resilient
            API backends.
          </p>
          <p className="story-about-aside">
            <span className="font-mono">OUTSIDE OF CODE</span> AWS Legarda, sound design, and gaming.
          </p>
        </div>
      </div>

      {/* ── Facts + clocks strip ── */}
      <dl className="story-about-facts">
        {quickFacts.map((fact) => (
          <div key={fact.label} className="story-fact">
            <dt className="font-mono">{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
        <div className="story-fact story-fact--clock">
          <dt className="font-mono">MANILA (UTC+8)</dt>
          <dd className="font-mono">{hostTimeStr}</dd>
        </div>
        <div className="story-fact story-fact--clock">
          <dt className="font-mono">YOUR TIME</dt>
          <dd className="font-mono">{visitorTimeStr}</dd>
        </div>
      </dl>
    </div>
  );
}
