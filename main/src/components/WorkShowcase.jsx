import React, { useState } from "react";
import config from "../../portfolio.config";
import ProjectPreviewMockup from "./ProjectPreviewMockup";

export default function WorkShowcase() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="work-showcase-container">
      {/* 2x2 Grid for the 4 Selected Works */}
      <div className="work-grid-figma">
        {config.projects.map((project) => {
          const isHovered = hoveredId === project.id;

          return (
            <a
              key={project.id}
              href={project.github || `https://${project.url}`}
              target="_blank"
              rel="noreferrer"
              className={`work-card-figma ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* 1. Header Row */}
              <div className="work-card-header">
                <div className="work-card-title-group font-mono">
                  <span className="work-card-num">{project.num}</span>
                  <span className="work-card-name">{project.title}</span>
                </div>

                <div className="work-card-meta font-mono">
                  <span className="work-card-arrow">↗</span>
                  <span className="work-card-year">{project.year}</span>
                </div>
              </div>

              {/* 2. Middle Interactive Product UI Mockup Window */}
              <div className="work-card-blueprint-wrap">
                <ProjectPreviewMockup
                  projectId={project.id}
                  isHovered={isHovered}
                />
              </div>

              {/* 3. Description */}
              <p className="work-card-desc font-mono">
                {project.description}
              </p>

              {/* 4. Bottom Footer: Tags & Status */}
              <div className="work-card-footer">
                <div className="work-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="work-card-tag font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="work-card-status font-mono">
                  {project.status}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
