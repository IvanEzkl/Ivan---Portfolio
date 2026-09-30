import React, { useState } from "react";
import {
  siReact, siNextdotjs, siTypescript, siVite, siTailwindcss, siHtml5, siCss,
  siNodedotjs, siExpress, siPython, siFastapi,
  siMongodb, siPostgresql, siMysql, siRedis, siPrisma,
  siGit, siGithub, siDocker, siVercel, siLinux, siFigma,
  siTrpc, siBun,
} from "simple-icons";
import config from "../../../portfolio.config";

const ICONS = {
  "React": siReact, "Next.js": siNextdotjs, "TypeScript": siTypescript, "Vite": siVite,
  "Tailwind CSS": siTailwindcss, "HTML5": siHtml5, "CSS3": siCss,
  "Node.js": siNodedotjs, "Express": siExpress, "Python": siPython, "FastAPI": siFastapi,
  "MongoDB": siMongodb, "PostgreSQL": siPostgresql, "MySQL": siMysql, "Redis": siRedis, "Prisma": siPrisma,
  "Git": siGit, "GitHub": siGithub, "Docker": siDocker, "Vercel": siVercel, "Linux": siLinux, "Figma": siFigma,
  "tRPC": siTrpc, "Bun": siBun,
};

// Bento placement per category; anything unlisted falls back to a default tile
const TILE_SIZES = { FRONTEND: "hero", DEVOPS: "wide", LEARNING: "learning" };

// "Tailwind CSS" ↔ "TAILWIND", "Node.js" ↔ "NODE.JS"
const normalize = (s) => s.toLowerCase().replace(/\s*css$/, "").replace(/\.js$/, "").replace(/[^a-z0-9]/g, "");

const projectsUsing = (tool) =>
  config.projects.filter((p) => p.tags.some((t) => normalize(t) === normalize(tool)));

function ToolIcon({ name }) {
  const icon = ICONS[name];
  if (!icon) {
    const initials = name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    return <span className="stack-monogram font-mono" aria-hidden="true">{initials}</span>;
  }
  return (
    <svg className="stack-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

export default function StackCard() {
  const [active, setActive] = useState(null);

  return (
    <div className="stack-bento">
      {config.tools.map((group) => {
        const activeHere = active && group.items.includes(active) ? active : null;
        const usedIn = activeHere ? projectsUsing(activeHere) : [];
        const size = TILE_SIZES[group.category] || "default";

        return (
          <div key={group.category} className={`stack-tile stack-tile--${size}`}>
            <div className="stack-tile-head font-mono">
              <span className="stack-tile-name">{group.category}</span>
              <span className="stack-tile-count">
                {size === "learning" ? "CURRENTLY LEARNING" : `${String(group.items.length).padStart(2, "0")} TOOLS`}
              </span>
            </div>

            <div className="stack-tools">
              {group.items.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  className={`stack-tool ${active === tech ? "is-active" : ""}`}
                  onMouseEnter={() => setActive(tech)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(tech)}
                  onBlur={() => setActive(null)}
                >
                  <ToolIcon name={tech} />
                  <span className="stack-tool-name font-mono">{tech}</span>
                </button>
              ))}
            </div>

            <div className="stack-tile-foot font-mono" aria-live="polite">
              {activeHere ? (
                usedIn.length ? (
                  <>
                    <span className="stack-foot-label">USED IN</span>
                    {usedIn.map((p) => (
                      <span key={p.id} className="stack-foot-project">{p.title}</span>
                    ))}
                  </>
                ) : (
                  <span className="stack-foot-label">NOT IN FEATURED PROJECTS YET</span>
                )
              ) : (
                <span className="stack-foot-hint">HOVER A TOOL TO SEE WHERE I USED IT</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
