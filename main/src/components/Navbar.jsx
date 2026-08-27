import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import config from "../../portfolio.config";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, setMode, accent, setAccent } = useTheme();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);

  const navLinks = [
    { label: "WORK", target: "work" },
    { label: "STACK", target: "stack" },
    { label: "EXPERIENCE", target: "experience" },
    { label: "ABOUT", target: "about" },
  ];

  // Close popover on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    }
    if (isSettingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingsOpen]);

  const handleNavClick = (target, e) => {
    e.preventDefault();
    const doScroll = () => {
      if (target === "overview") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(target);
      if (el) {
        if (el.offsetHeight < window.innerHeight - 70) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 80);
      return;
    }

    doScroll();
  };

  // Find active accent palette name
  const currentAccentObj =
    config.accentPalette.find(
      (p) => p.value.toLowerCase() === accent.toLowerCase()
    ) || config.accentPalette[0];

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        {/* Left: Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick("overview", e)}
          className="site-header__logo font-mono"
        >
          <img
            src="/logo.png"
            alt="Ivan Ezekiel Logo"
            className="site-header__logo-img"
          />
          <span>{config.name.toUpperCase()}</span>
        </a>

        {/* Center: Nav links */}
        <nav className="site-header__nav" aria-label="Main Navigation">
          <ul className="site-header__links font-mono">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.target}`}
                  onClick={(e) => handleNavClick(item.target, e)}
                  className="site-header__link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Settings gear & Contact CTA */}
        <div className="site-header__actions" ref={settingsRef}>
          {/* Gear button */}
          <button
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            className={`site-header__icon-btn ${isSettingsOpen ? "active" : ""}`}
            title="Appearance Settings"
            aria-label="Toggle Appearance Settings"
            aria-expanded={isSettingsOpen}
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
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>

          {/* Contact Button */}
          <a
            href="#connect"
            onClick={(e) => handleNavClick("connect", e)}
            className="site-header__contact-btn font-mono"
          >
            CONTACT
          </a>

          {/* ── Settings Popover Modal (Figma Match) ─────────── */}
          {isSettingsOpen && (
            <div
              className="settings-popover font-mono"
              role="dialog"
              aria-label="Appearance Settings"
            >
              <div className="settings-popover__header">
                <span>APPEARANCE</span>
              </div>

              {/* Mode Section */}
              <div className="settings-popover__section">
                <span className="settings-popover__label">MODE</span>
                <div className="settings-mode-grid">
                  <button
                    type="button"
                    onClick={() => setMode("light")}
                    className={`settings-mode-btn ${
                      mode === "light" ? "active" : ""
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                    <span>LIGHT</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("dark")}
                    className={`settings-mode-btn ${
                      mode === "dark" ? "active" : ""
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                    <span>DARK</span>
                  </button>
                </div>
              </div>

              <div className="settings-popover__divider" />

              {/* Accent Section */}
              <div className="settings-popover__section">
                <span className="settings-popover__label">ACCENT</span>
                <div className="settings-swatches-grid">
                  {config.accentPalette.map((palette) => {
                    const isSelected =
                      accent.toLowerCase() === palette.value.toLowerCase();

                    return (
                      <button
                        key={palette.name}
                        type="button"
                        onClick={() => setAccent(palette.value)}
                        className={`settings-swatch-btn ${
                          isSelected ? "active" : ""
                        }`}
                        style={{ backgroundColor: palette.value }}
                        title={palette.name}
                        aria-label={`Select ${palette.name} Accent`}
                      />
                    );
                  })}
                </div>

                <div className="settings-status-line">
                  <span>
                    {currentAccentObj.name.toUpperCase()} • {mode.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
