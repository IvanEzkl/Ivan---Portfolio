import React, { useMemo } from "react";
import { usePageTransition } from "../hooks/usePageTransition";
import { useTheme } from "../context/ThemeContext";

export default function PageTransitionOverlay() {
  const { transitionState } = usePageTransition();
  const { speed } = useTheme();
  const { active, x, y, expanding } = transitionState;

  const speedMs = parseFloat(speed) * 1000 || 650;

  // Generate pixel grid dimensions (approx 55px per pixel tile)
  const gridConfig = useMemo(() => {
    const cols = 14;
    const rows = 9;
    const total = cols * rows;

    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    const h = typeof window !== "undefined" ? window.innerHeight : 800;

    const cellWidth = w / cols;
    const cellHeight = h / rows;

    const maxDist = Math.max(
      Math.hypot(x, y),
      Math.hypot(w - x, y),
      Math.hypot(x, h - y),
      Math.hypot(w - x, h - y)
    ) || 1;

    const tiles = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cellCenterX = (c + 0.5) * cellWidth;
        const cellCenterY = (r + 0.5) * cellHeight;

        const dist = Math.hypot(cellCenterX - x, cellCenterY - y);
        const normDist = Math.min(1, dist / maxDist);

        // Pseudo-random deterministic jitter
        const jitter = (((c * 17 + r * 31) % 13) / 13) * 0.25;
        const enterDelay = (normDist * 0.65 + jitter) * (speedMs * 0.7);
        const exitDelay = ((1 - normDist) * 0.65 + jitter) * (speedMs * 0.7);

        tiles.push({
          id: `${r}-${c}`,
          enterDelay: Math.round(enterDelay),
          exitDelay: Math.round(exitDelay),
        });
      }
    }

    return { cols, rows, tiles };
  }, [active, x, y, speedMs]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: "none",
        display: "grid",
        gridTemplateColumns: `repeat(${gridConfig.cols}, 1fr)`,
        gridTemplateRows: `repeat(${gridConfig.rows}, 1fr)`,
        width: "100vw",
        height: "100vh",
      }}
    >
      {gridConfig.tiles.map((tile) => (
        <div
          key={tile.id}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "var(--accent)",
            outline: "1px solid rgba(0, 0, 0, 0.12)",
            transform: expanding ? "scale(1.02)" : "scale(0)",
            opacity: expanding ? 1 : 0,
            transition: `transform ${speedMs * 0.7}ms cubic-bezier(0.2, 0.85, 0.35, 1) ${
              expanding ? tile.enterDelay : tile.exitDelay
            }ms, opacity ${speedMs * 0.65}ms ease ${
              expanding ? tile.enterDelay : tile.exitDelay
            }ms`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}

