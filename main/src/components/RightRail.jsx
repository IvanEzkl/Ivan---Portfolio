import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function RightRail() {
  const {
    gridSize,
    setGridSize,
    patternType,
    setPatternType,
    collapsedRail,
    setCollapsedRail,
    accent,
  } = useTheme();

  // Density buttons (1-7) map to grid sizes in px
  const densitySteps = [
    { level: 1, size: 16 },
    { level: 2, size: 24 },
    { level: 3, size: 32 },
    { level: 4, size: 40 },
    { level: 5, size: 48 },
    { level: 6, size: 56 },
    { level: 7, size: 64 },
  ];

  const patterns = ["dots", "lines", "grid", "none"];

  const cyclePattern = () => {
    const nextIdx = (patterns.indexOf(patternType) + 1) % patterns.length;
    setPatternType(patterns[nextIdx]);
  };

  // Determine current active density level
  const currentDensity = densitySteps.find((d) => d.size === gridSize)?.level || 3;

  // Background SVG pattern rendering
  const renderPattern = () => {
    if (patternType === "none") return null;

    if (patternType === "dots") {
      return (
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="bg-dots-pattern"
              x="0"
              y="0"
              width={gridSize}
              height={gridSize}
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx={gridSize / 2}
                cy={gridSize / 2}
                r="2"
                fill={accent}
                fillOpacity="0.65"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-dots-pattern)" />
        </svg>
      );
    }

    if (patternType === "lines") {
      return (
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="bg-lines-pattern"
              x="0"
              y="0"
              width={gridSize}
              height={gridSize}
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1={gridSize}
                x2={gridSize}
                y2="0"
                stroke={accent}
                strokeWidth="1.5"
                strokeOpacity="0.45"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-lines-pattern)" />
        </svg>
      );
    }

    if (patternType === "grid") {
      return (
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="bg-grid-pattern"
              x="0"
              y="0"
              width={gridSize}
              height={gridSize}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
                fill="none"
                stroke={accent}
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-grid-pattern)" />
        </svg>
      );
    }

    return null;
  };

  return (
    <>
      {/* Masked Right-Edge Pattern */}
      <div id="bg-right" aria-hidden="true">
        <div className="pattern-inner">{renderPattern()}</div>
      </div>

      {/* Vertical Rail Control */}
      <div className="right-rail" role="toolbar" aria-label="Pattern & Grid Density Controls">
        {/* Collapse toggle */}
        <button
          className="rail-btn"
          onClick={() => setCollapsedRail(!collapsedRail)}
          title={collapsedRail ? "Expand Rail" : "Collapse Rail"}
          aria-label={collapsedRail ? "Expand Rail" : "Collapse Rail"}
        >
          {collapsedRail ? "›" : "‹"}
        </button>

        {!collapsedRail && (
          <>
            <div className="rail-divider" />

            {/* Pattern Cycle Button */}
            <button
              className="rail-btn"
              onClick={cyclePattern}
              title={`Pattern: ${patternType} (click to cycle)`}
              aria-label={`Cycle pattern, currently ${patternType}`}
            >
              {patternType === "dots" && "•"}
              {patternType === "lines" && "╱"}
              {patternType === "grid" && "#"}
              {patternType === "none" && "∅"}
            </button>

            <div className="rail-divider" />

            {/* Density Steps (1-7) */}
            {densitySteps.map((step) => (
              <button
                key={step.level}
                className={`rail-btn ${currentDensity === step.level ? "active" : ""}`}
                onClick={() => setGridSize(step.size)}
                title={`Grid Density Level ${step.level} (${step.size}px)`}
                aria-label={`Set grid density to level ${step.level}`}
              >
                {step.level}
              </button>
            ))}
          </>
        )}
      </div>
    </>
  );
}
