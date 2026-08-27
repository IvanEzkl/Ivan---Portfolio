import React from "react";
import { useCardGlow } from "../../hooks/useCardGlow";
import { useTheme } from "../../context/ThemeContext";
import config from "../../../portfolio.config";

export default function ThemeCard() {
  const cardRef = useCardGlow();
  const { accent, setAccent, mode, setMode } = useTheme();

  const activeColorName =
    config.accentPalette.find(
      (col) => col.value.toLowerCase() === accent.toLowerCase()
    )?.name || "Accent";

  return (
    <div
      ref={cardRef}
      className="card flex flex-col justify-center"
      style={{
        padding: "26px 28px",
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        gap: "18px",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow" style={{ margin: 0 }}>
          Appearance & Accent
        </span>
        <span className="font-mono text-accent" style={{ fontSize: "0.68rem", fontWeight: 600 }}>
          {activeColorName} • {mode === "dark" ? "Dark" : "Light"}
        </span>
      </div>

      <div className="theme-card-grid">
        {/* Color Mode Buttons */}
        <div className="flex flex-col gap-1.5">
          <span
            className="font-mono text-muted"
            style={{
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: 600,
            }}
          >
            Mode
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4px",
              background: "var(--code-bg, rgba(0, 0, 0, 0.2))",
              border: "1px solid var(--border)",
              borderRadius: "calc(var(--radius) - 6px)",
              padding: "3px",
            }}
          >
            <button
              onClick={() => setMode("dark")}
              className={`pill ${mode === "dark" ? "pill--accent" : ""}`}
              style={{
                justifyContent: "center",
                gap: "5px",
                padding: "6px 0",
                fontSize: "0.72rem",
                borderRadius: "calc(var(--radius) - 8px)",
                border: "none",
                fontWeight: 600,
              }}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <span>Dark</span>
            </button>
            <button
              onClick={() => setMode("light")}
              className={`pill ${mode === "light" ? "pill--accent" : ""}`}
              style={{
                justifyContent: "center",
                gap: "5px",
                padding: "6px 0",
                fontSize: "0.72rem",
                borderRadius: "calc(var(--radius) - 8px)",
                border: "none",
                fontWeight: 600,
              }}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <span>Light</span>
            </button>
          </div>
        </div>

        {/* Accent Palette Swatches */}
        <div className="flex flex-col gap-1.5">
          <span
            className="font-mono text-muted"
            style={{
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: 600,
            }}
          >
            Palette
          </span>
          <div
            className="flex items-center justify-between"
            style={{
              background: "var(--code-bg, rgba(0, 0, 0, 0.2))",
              border: "1px solid var(--border)",
              borderRadius: "calc(var(--radius) - 6px)",
              padding: "7px 10px",
            }}
          >
            {config.accentPalette.map((col) => {
              const isActive = accent.toLowerCase() === col.value.toLowerCase();
              return (
                <button
                  key={col.value}
                  onClick={() => setAccent(col.value)}
                  className={`accent-dot ${isActive ? "active" : ""}`}
                  style={{
                    backgroundColor: col.value,
                    width: "20px",
                    height: "20px",
                  }}
                  title={col.name}
                  aria-label={`Select ${col.name} accent`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
