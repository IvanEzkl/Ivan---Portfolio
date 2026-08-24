import React, { createContext, useContext, useState, useEffect } from "react";
import config from "../../portfolio.config";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("portfolio_mode") || "dark";
  });

  const [accent, setAccent] = useState(() => {
    return localStorage.getItem("portfolio_accent") || config.accentPalette[0].value;
  });

  const [scale, setScale] = useState(() => {
    return parseFloat(localStorage.getItem("portfolio_scale")) || 1;
  });

  const [radius, setRadius] = useState(() => {
    return parseInt(localStorage.getItem("portfolio_radius"), 10) || 12;
  });

  const [speed, setSpeed] = useState(() => {
    return localStorage.getItem("portfolio_speed") || "0.65s";
  });

  const [gridSize, setGridSize] = useState(() => {
    return parseInt(localStorage.getItem("portfolio_grid_size"), 10) || 32;
  });

  const [patternType, setPatternType] = useState(() => {
    return localStorage.getItem("portfolio_pattern_type") || "dots"; // 'dots' | 'lines' | 'grid' | 'none'
  });

  const [collapsedRail, setCollapsedRail] = useState(() => {
    return localStorage.getItem("portfolio_collapsed_rail") === "true";
  });

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Apply CSS Variables and Theme to :root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", mode);
    root.style.setProperty("--accent", accent);
    root.style.setProperty("--scale", scale.toString());
    root.style.setProperty("--radius", `${radius}px`);
    root.style.setProperty("--speed", speed);
    root.style.setProperty("--grid-size", `${gridSize}px`);

    localStorage.setItem("portfolio_mode", mode);
    localStorage.setItem("portfolio_accent", accent);
    localStorage.setItem("portfolio_scale", scale.toString());
    localStorage.setItem("portfolio_radius", radius.toString());
    localStorage.setItem("portfolio_speed", speed);
    localStorage.setItem("portfolio_grid_size", gridSize.toString());
    localStorage.setItem("portfolio_pattern_type", patternType);
    localStorage.setItem("portfolio_collapsed_rail", collapsedRail.toString());
  }, [mode, accent, scale, radius, speed, gridSize, patternType, collapsedRail]);

  const copyCssVariables = () => {
    const cssText = `:root {
  --bg: #0f0f0f;
  --card: #171717;
  --border: #262626;
  --text: #ededed;
  --muted: #9a9a9a;
  --accent: ${accent};
  --radius: ${radius}px;
  --scale: ${scale};
  --speed: ${speed};
  --grid-size: ${gridSize}px;
}`;
    navigator.clipboard.writeText(cssText);
    return cssText;
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        accent,
        setAccent,
        scale,
        setScale,
        radius,
        setRadius,
        speed,
        setSpeed,
        gridSize,
        setGridSize,
        patternType,
        setPatternType,
        collapsedRail,
        setCollapsedRail,
        copyCssVariables,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
