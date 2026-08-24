import React from "react";
import { useCardGlow } from "../../hooks/useCardGlow";
import config from "../../../portfolio.config";

export default function StackCard() {
  const cardRef1 = useCardGlow();
  const cardRef2 = useCardGlow();
  const cardRef3 = useCardGlow();
  const cardRef4 = useCardGlow();

  const cardRefs = [cardRef1, cardRef2, cardRef3, cardRef4];

  const categoryMeta = [
    {
      category: "Frontend",
      title: "Client & UI Architecture",
      desc: "Component-driven interfaces, reactive state management, and modern styling libraries.",
      badge: "User Interface",
      items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      title: "Server & API Systems",
      desc: "Scalable backend services, RESTful & GraphQL APIs, authentication, and async pipelines.",
      badge: "Runtime & API",
      items: ["Node.js", "Express", "REST APIs", "GraphQL", "Python", "FastAPI"],
    },
    {
      category: "Database",
      title: "Data Modeling & Storage",
      desc: "Document & relational database schemas, indexing, caching, and ORM abstractions.",
      badge: "Persistence",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Mongoose"],
    },
    {
      category: "Workflow",
      title: "DevOps & Tooling",
      desc: "Version control, containerized environments, UI/UX prototyping, and CI/CD hosting.",
      badge: "Ecosystem",
      items: ["Git", "GitHub", "Docker", "Figma", "VS Code", "Postman", "Vercel", "Linux"],
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
        gap: "24px",
        width: "100%",
      }}
    >
      {categoryMeta.map((group, index) => (
        <div
          key={group.category}
          ref={cardRefs[index]}
          className="card flex flex-col justify-between"
          style={{
            padding: "32px 30px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            minHeight: "260px",
            gap: "20px",
          }}
        >
          {/* Card Header */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="eyebrow" style={{ margin: 0 }}>
                {group.category}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  padding: "3px 9px",
                  borderRadius: "999px",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
              >
                {group.badge}
              </span>
            </div>

            <h3
              className="font-head"
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "8px",
              }}
            >
              {group.title}
            </h3>

            <p
              className="text-muted"
              style={{ fontSize: "0.88rem", lineHeight: 1.55, marginBottom: "18px" }}
            >
              {group.desc}
            </p>

            {/* Large Tech Pills */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((tool) => (
                <span
                  key={tool}
                  className="pill"
                  style={{
                    fontSize: "0.82rem",
                    padding: "6px 14px",
                    fontWeight: 500,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div
            className="flex items-center justify-between pt-3 font-mono text-muted"
            style={{ fontSize: "0.72rem", borderTop: "1px solid var(--border)" }}
          >
            <span>{group.items.length} Production Technologies</span>
            <span className="text-accent">Active Suite</span>
          </div>
        </div>
      ))}
    </div>
  );
}
