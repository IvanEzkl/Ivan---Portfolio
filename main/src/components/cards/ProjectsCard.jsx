import React from "react";
import { useCardGlow } from "../../hooks/useCardGlow";
import { usePageTransition } from "../../hooks/usePageTransition";
import config from "../../../portfolio.config";

export default function ProjectsCard() {
  const cardRef = useCardGlow();
  const { transitionTo } = usePageTransition();

  const handleClick = (e) => {
    transitionTo("/projects", e);
  };

  const featured = config.projects.slice(0, 2);

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className="card card--clickable col-span-2 flex flex-col justify-between"
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e);
        }
      }}
      aria-label="Navigate to Projects page"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="eyebrow" style={{ margin: 0 }}>
            Featured Work
          </span>
          <span
            className="font-mono text-muted flex items-center gap-1"
            style={{ fontSize: "0.8rem" }}
          >
            <span>All Projects</span>
            <span className="text-accent" style={{ fontSize: "1rem" }}>
              ↗
            </span>
          </span>
        </div>

        <h2
          className="font-head"
          style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "14px" }}
        >
          Selected Deployments
        </h2>

        <div className="flex flex-col gap-2">
          {featured.map((proj) => (
            <div
              key={proj.title}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--border)",
                borderRadius: "calc(var(--radius) - 6px)",
                padding: "10px 14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: 500, fontSize: "0.85rem", color: "var(--text)" }}>
                  {proj.title}
                </div>
                <div
                  className="text-muted"
                  style={{
                    fontSize: "0.72rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "240px",
                  }}
                >
                  {proj.description}
                </div>
              </div>
              <span className="project-status" style={{ fontSize: "0.62rem" }}>
                {proj.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 font-mono text-muted" style={{ fontSize: "0.7rem" }}>
        <span>Explore all builds & repositories</span>
        <span className="text-accent">View gallery →</span>
      </div>
    </div>
  );
}
