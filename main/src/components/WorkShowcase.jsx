import React, { useRef, useState } from "react";
import config from "../../portfolio.config";
import ProjectPreviewMockup from "./ProjectPreviewMockup";
import { usePageTransition } from "../hooks/usePageTransition";
import { useHorizontalScroll, useMediaQuery } from "../hooks/useHorizontalScroll";

function topTag(projects) {
  const counts = {};
  projects.flatMap((p) => p.tags).forEach((t) => (counts[t] = (counts[t] || 0) + 1));
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
}

export default function WorkShowcase({ projects = config.projects, showStats = true, layout = "grid" }) {
  const [activeId, setActiveId] = useState(null);
  const { transitionTo } = usePageTransition();

  // "track" pins the chapter and slides the bento sideways; grid everywhere it can't
  const canTrack = useMediaQuery("(min-width: 1025px) and (prefers-reduced-motion: no-preference)");
  const isTrack = layout === "track" && canTrack;
  const outerRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);
  useHorizontalScroll(outerRef, stickyRef, trackRef, isTrack);

  const inProgress = projects.filter((p) => p.status === "IN PROGRESS").length;

  return (
    <div className="work-showcase-container">
      <div ref={outerRef} className={isTrack ? "work-track-outer" : undefined}>
        <div ref={stickyRef} className={isTrack ? "work-track-sticky" : undefined}>
          <div
            ref={trackRef}
            className={`bento-grid ${showStats ? "" : "bento-grid--no-stats"} ${isTrack ? "bento-grid--track" : ""}`}
          >
            {projects.map((project) => {
              const isActive = activeId === project.id;
              const href = project.github || (project.url && `https://${project.url}`);
              const Tile = href ? "a" : "article";
              const linkProps = href
                ? { href, target: "_blank", rel: "noreferrer" }
                : { tabIndex: 0, "aria-label": `${project.title}, private client project` };

              return (
                <Tile
                  key={project.id}
                  {...linkProps}
                  className={`bento-tile bento-tile--${project.size || "default"} ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveId(project.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(project.id)}
                  onBlur={() => setActiveId(null)}
                >
                  {/* 1. Top Meta Row */}
                  <div className="bento-top font-mono">
                    <span className="bento-num">{project.num}</span>
                    <span className="bento-year">{project.year}</span>
                    {href ? (
                      <span className="bento-arrow" aria-hidden="true">↗</span>
                    ) : (
                      <span className="bento-private">PRIVATE · CLIENT WORK</span>
                    )}
                  </div>

                  {/* 2. Visual-First Product Mockup */}
                  <div className="bento-media" aria-hidden="true">
                    <div className="bento-window">
                      <ProjectPreviewMockup projectId={project.id} isHovered={isActive} />
                    </div>
                  </div>

                  {/* 3. Info Panel: Always-On Header + Revealed Story */}
                  <div className="bento-info">
                    <div className="bento-title-row">
                      <h3 className="bento-title font-head">{project.title}</h3>
                      <span className="bento-status font-mono">{project.status}</span>
                    </div>
                    <span className="bento-role font-mono">{project.role}</span>

                    <div className="bento-reveal">
                      <div className="bento-reveal-inner">
                        <p className="bento-problem">{project.problem}</p>
                        <div className="bento-highlights">
                          {project.highlights.map((h) => (
                            <span key={h} className="bento-chip font-mono">{h}</span>
                          ))}
                        </div>
                        <div className="bento-tags font-mono">{project.tags.join(" · ")}</div>
                      </div>
                    </div>
                  </div>
                </Tile>
              );
            })}

            {/* Stats Tile */}
            {showStats && (
              <button
                type="button"
                className="bento-tile bento-tile--stats"
                onClick={(e) => transitionTo("/projects", e)}
              >
                <span className="bento-stats-eyebrow font-mono">BY THE NUMBERS</span>
                <div className="bento-stats-list">
                  <div className="bento-stat">
                    <span className="bento-stat-value font-head">{String(projects.length).padStart(2, "0")}</span>
                    <span className="bento-stat-label font-mono">SELECTED BUILDS</span>
                  </div>
                  <div className="bento-stat">
                    <span className="bento-stat-value font-head">{String(inProgress).padStart(2, "0")}</span>
                    <span className="bento-stat-label font-mono">IN PROGRESS</span>
                  </div>
                  <div className="bento-stat">
                    <span className="bento-stat-value font-head">{topTag(projects)}</span>
                    <span className="bento-stat-label font-mono">MOST USED</span>
                  </div>
                </div>
                <span className="bento-stats-cta font-mono">
                  VIEW ALL PROJECTS <span aria-hidden="true">→</span>
                </span>
              </button>
            )}
          </div>

          {isTrack && (
            <div className="work-track-foot font-mono" aria-hidden="true">
              <span className="work-track-cue">SCROLL →</span>
              <span className="work-track-line"><i /></span>
              <span>{String(projects.length).padStart(2, "0")} PROJECTS</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
