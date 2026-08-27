import React, { useState } from "react";
import { useCardGlow } from "../../hooks/useCardGlow";
import config from "../../../portfolio.config";

export default function ExperienceCard() {
  const cardRef = useCardGlow();
  // Default to the active item expanded
  const [expandedId, setExpandedId] = useState("3am-intern");

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      ref={cardRef}
      className="card col-span-4 flex flex-col gap-5"
      style={{ padding: "28px 32px" }}
    >
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <span className="eyebrow" style={{ margin: 0 }}>
          the change-log
        </span>
        <h2
          className="font-head"
          style={{
            fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginTop: "4px",
          }}
        >
          My <span className="text-muted" style={{ opacity: 0.8 }}>Experience.</span>
        </h2>
      </div>

      {/* Accordion Deployments List */}
      <div className="flex flex-col gap-3" style={{ width: "100%", marginTop: "4px" }}>
        {config.experience.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              style={{
                background: isExpanded
                  ? "color-mix(in srgb, var(--card) 90%, var(--accent) 5%)"
                  : "var(--code-bg, rgba(0, 0, 0, 0.25))",
                border: `1px solid ${isExpanded ? "color-mix(in srgb, var(--accent) 40%, var(--border))" : "var(--border)"}`,
                borderRadius: "calc(var(--radius) - 2px)",
                transition: "all 0.25s ease",
                overflow: "hidden",
              }}
            >
              {/* Accordion Header Row */}
              <button
                type="button"
                onClick={() => toggleExpand(item.id)}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "left",
                  background: "transparent",
                  cursor: "pointer",
                }}
                aria-expanded={isExpanded}
                aria-controls={`exp-content-${item.id}`}
              >
                <div className="flex items-center gap-4">
                  {/* Badge */}
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "calc(var(--radius) - 4px)",
                      background: isExpanded ? "var(--accent-10)" : "color-mix(in srgb, var(--text) 6%, transparent)",
                      border: `1px solid ${isExpanded ? "var(--accent-40)" : "var(--border)"}`,
                      color: isExpanded ? "var(--accent)" : "var(--text)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                  >
                    {item.badge}
                  </div>

                  {/* Title & Period */}
                  <div className="flex flex-col">
                    <div
                      className="font-head"
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.role}
                    </div>
                    <div
                      className="font-mono text-muted"
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginTop: "2px",
                      }}
                    >
                      {item.period} • {item.company}
                    </div>
                  </div>
                </div>

                {/* Plus / Minus Icon */}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isExpanded ? "var(--accent)" : "var(--muted)",
                    background: isExpanded ? "var(--accent-10)" : "transparent",
                    transition: "all 0.2s ease",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    {isExpanded ? (
                      <line x1="5" y1="12" x2="19" y2="12" />
                    ) : (
                      <>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </>
                    )}
                  </svg>
                </div>
              </button>

              {/* Accordion Expandable Content */}
              {isExpanded && (
                <div
                  id={`exp-content-${item.id}`}
                  className="exp-content-block"
                  style={{
                    animation: "fadeIn 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: "14px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        color: "var(--text)",
                        marginBottom: "8px",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.headline}
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {item.points.map((pt, idx) => (
                        <li
                          key={idx}
                          className="text-muted flex items-start gap-2.5"
                          style={{ fontSize: "0.85rem", lineHeight: 1.6 }}
                        >
                          <span
                            style={{
                              color: "var(--accent)",
                              fontSize: "0.75rem",
                              marginTop: "2px",
                              lineHeight: 1,
                            }}
                          >
                            ▪
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
