import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function RightRail() {
  const { accent } = useTheme();
  const gridSize = 40;

  return (
    <div id="bg-right" aria-hidden="true">
      <div className="pattern-inner">
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
      </div>
    </div>
  );
}
