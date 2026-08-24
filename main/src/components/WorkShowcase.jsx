import React from "react";
import { useCardGlow } from "../hooks/useCardGlow";
import BrowserMockup from "./BrowserMockup";
import config from "../../portfolio.config";

export default function WorkShowcase() {
  const featuredProject = config.projects.find((p) => p.featured) || config.projects[0];
  const otherProjects = config.projects.filter((p) => p.id !== featuredProject.id);

  const featuredCardRef = useCardGlow();
  const cardRef1 = useCardGlow();
  const cardRef2 = useCardGlow();

  const otherRefs = [cardRef1, cardRef2];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* 1. Featured Spotlight Project (Full-Width Top Showcase - SkillMatch) */}
      <div
        ref={featuredCardRef}
        className="card col-span-4"
        style={{
          padding: "32px 36px",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "center",
          }}
        >
          {/* Left Browser Mockup */}
          <div>
            <BrowserMockup
              url={featuredProject.url}
              type={featuredProject.mockType}
              title={featuredProject.title}
            />
          </div>

          {/* Right Project Details */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h3
                className="font-head"
                style={{
                  fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {featuredProject.title}
              </h3>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  padding: "3px 9px",
                  borderRadius: "999px",
                  border: "1px solid var(--accent-40)",
                  background: "var(--accent-10)",
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                {featuredProject.status}
              </span>
            </div>

            <p
              className="text-muted"
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.68,
              }}
            >
              {featuredProject.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="pill"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "0.68rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              {featuredProject.github && (
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pill"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>GitHub Repo</span>
                </a>
              )}
              <a
                href={`https://${featuredProject.url}`}
                target="_blank"
                rel="noreferrer"
                className="pill pill--accent"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 18px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <span>View project</span>
                <span style={{ fontSize: "0.95rem" }}>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Grid of Secondary Projects (Rice Trader & CookItHow) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "24px",
        }}
      >
        {otherProjects.map((project, idx) => (
          <div
            key={project.id}
            ref={otherRefs[idx]}
            className="card flex flex-col justify-between"
            style={{
              padding: "24px",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              gap: "18px",
            }}
          >
            {/* Top Browser Preview */}
            <BrowserMockup
              url={project.url}
              type={project.mockType}
              title={project.title}
            />

            {/* Bottom Project Details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3
                  className="font-head"
                  style={{ fontSize: "1.25rem", fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "2px 7px",
                    borderRadius: "999px",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {project.status}
                </span>
              </div>

              <p
                className="text-muted"
                style={{ fontSize: "0.86rem", lineHeight: 1.55 }}
              >
                {project.description}
              </p>

              {/* Tags & Action Links */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="pill"
                      style={{ fontSize: "0.65rem", padding: "2px 7px" }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span
                      className="pill"
                      style={{ fontSize: "0.65rem", padding: "2px 6px" }}
                    >
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-muted flex items-center gap-1.5"
                      style={{ fontSize: "0.75rem", transition: "color 0.2s" }}
                      title="View GitHub Repository"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}

                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-accent"
                    style={{ fontSize: "0.75rem", display: "inline-flex", alignItems: "center", gap: "3px" }}
                  >
                    <span>Explore</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
