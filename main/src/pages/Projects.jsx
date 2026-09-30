import React, { useState } from "react";
import WorkShowcase from "../components/WorkShowcase";
import BackButton from "../components/BackButton";
import config from "../../portfolio.config";

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");

  // Collect unique tags
  const allTags = ["All", ...Array.from(new Set(config.projects.flatMap((p) => p.tags)))];

  const filteredProjects =
    selectedTag === "All"
      ? config.projects
      : config.projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <main className="main-content">
      {/* Header Section matching reference image */}
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div style={{ marginBottom: "16px" }}>
          <BackButton />
        </div>
        <span className="eyebrow" style={{ letterSpacing: "0.14em" }}>
          selected work
        </span>
        <h1
          className="section-title"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginTop: "6px",
          }}
        >
          Things I've <span style={{ fontWeight: 800, color: "var(--text)" }}>shipped</span>
        </h1>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`pill ${selectedTag === tag ? "pill--accent" : ""}`}
              style={{ cursor: "pointer" }}
              aria-pressed={selectedTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <WorkShowcase projects={filteredProjects} showStats={false} />
      ) : (
        <div className="bento-empty font-mono">
          <span>No projects tagged {selectedTag} yet.</span>
          <button type="button" className="pill pill--accent" onClick={() => setSelectedTag("All")}>
            Show all
          </button>
        </div>
      )}
    </main>
  );
}
