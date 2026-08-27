import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import config from "../../portfolio.config";

export default function FloatingCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    mode,
    setMode,
    accent,
    setAccent,
    scale,
    setScale,
    radius,
    setRadius,
    speed,
    setSpeed,
    copyCssVariables,
  } = useTheme();

  const handleCopy = () => {
    copyCssVariables();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const speedOptions = [
    { label: "Fast", value: "0.35s" },
    { label: "Normal", value: "0.65s" },
    { label: "Smooth", value: "1.0s" },
  ];

  return (
    <aside className="customizer" aria-label="Theme Customizer">
      {isOpen && (
        <div className="customizer__panel" role="region" aria-label="Customizer Panel">
          <div className="flex items-center justify-between">
            <span className="eyebrow" style={{ margin: 0 }}>
              Theme Studio
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="pill"
              style={{ padding: "2px 6px", fontSize: "0.6rem" }}
              title="Close Panel"
            >
              ✕
            </button>
          </div>

          {/* Mode (Dark / Light) */}
          <div className="customizer__row">
            <label className="customizer__label">Color Mode</label>
            <div className="speed-btns">
              <button
                className={`speed-btn ${mode === "dark" ? "active" : ""}`}
                onClick={() => setMode("dark")}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                Dark
              </button>
              <button
                className={`speed-btn ${mode === "light" ? "active" : ""}`}
                onClick={() => setMode("light")}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                Light
              </button>
            </div>
          </div>

          {/* Accent Palette */}
          <div className="customizer__row">
            <label className="customizer__label">Accent Color</label>
            <div className="accent-dots">
              {config.accentPalette.map((col) => (
                <button
                  key={col.value}
                  className={`accent-dot ${accent === col.value ? "active" : ""}`}
                  style={{ backgroundColor: col.value }}
                  onClick={() => setAccent(col.value)}
                  title={col.name}
                  aria-label={`Select ${col.name} accent`}
                />
              ))}
            </div>
          </div>

          {/* Typography Scale */}
          <div className="customizer__row">
            <div className="flex justify-between items-center">
              <label className="customizer__label">Scale</label>
              <span className="font-mono text-muted" style={{ fontSize: "0.65rem" }}>
                {scale.toFixed(2)}x
              </span>
            </div>
            <input
              type="range"
              min="0.85"
              max="1.2"
              step="0.05"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="customizer__slider"
              aria-label="Typography Scale Slider"
            />
          </div>

          {/* Border Radius */}
          <div className="customizer__row">
            <div className="flex justify-between items-center">
              <label className="customizer__label">Corner Radius</label>
              <span className="font-mono text-muted" style={{ fontSize: "0.65rem" }}>
                {radius}px
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="24"
              step="2"
              value={radius}
              onChange={(e) => setRadius(parseInt(e.target.value, 10))}
              className="customizer__slider"
              aria-label="Corner Radius Slider"
            />
          </div>

          {/* Transition Speed */}
          <div className="customizer__row">
            <label className="customizer__label">Transition Speed</label>
            <div className="speed-btns">
              {speedOptions.map((opt) => (
                <button
                  key={opt.value}
                  className={`speed-btn ${speed === opt.value ? "active" : ""}`}
                  onClick={() => setSpeed(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>


          {/* Copy Variables Button */}
          <button
            onClick={handleCopy}
            className="customizer__copy-btn font-mono"
          >
            {copied ? "✓ Copied to Clipboard" : "Copy CSS Variables"}
          </button>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="customizer__toggle"
        title="Open Theme Customizer"
        aria-label="Toggle Theme Customizer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>
    </aside>
  );
}
