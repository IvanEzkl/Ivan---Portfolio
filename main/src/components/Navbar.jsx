import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useTheme } from "../context/ThemeContext";
import config from "../../portfolio.config";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, setMode, accent, setAccent } = useTheme();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);

  const navLinks = [
    { label: "WORK", target: "work" },
    { label: "STACK", target: "stack" },
    { label: "EXPERIENCE", target: "experience" },
    { label: "ABOUT", target: "about" },
  ];

  // Chapters listed in the phone menu
  const menuChapters = [
    { num: "01", label: "Selected work", target: "work" },
    { num: "02", label: "Tech stack", target: "stack" },
    { num: "03", label: "Experience", target: "experience" },
    { num: "04", label: "About me", target: "about" },
    { num: "05", label: "Contact", target: "connect" },
  ];
  const activeChapter = useScrollSpy(menuChapters.map((c) => c.target));

  // Phone menu: lock page scroll, close on Escape, move focus in and back out
  useEffect(() => {
    if (!isMenuOpen) return;
    const btn = menuBtnRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      btn?.focus();
    };
  }, [isMenuOpen]);

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
        const elementRect = el.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        if (el.offsetHeight < window.innerHeight - 80) {
          const middle = absoluteElementTop - (window.innerHeight / 2) + (el.offsetHeight / 2);
          window.scrollTo({ top: Math.max(0, middle), behavior: "smooth" });
        } else {
          window.scrollTo({ top: Math.max(0, absoluteElementTop - 30), behavior: "smooth" });
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

  const handleMenuClick = (target, e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    // Let the scroll lock release before scrolling
    setTimeout(() => handleNavClick(target, { preventDefault() {} }), 40);
  };

  // Find active accent palette name
  const currentAccentObj =
    config.accentPalette.find(
      (p) => p.value.toLowerCase() === accent.toLowerCase()
    ) || config.accentPalette[0];

  return (
    <>
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

            {/* Phone menu button */}
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="site-header__icon-btn site-header__menu-btn"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
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

      {/* ── Phone menu (portal: the header's backdrop-filter would trap a fixed child) ── */}
      {isMenuOpen &&
        createPortal(
          <div
            id="mobile-menu"
            ref={menuRef}
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="mobile-menu__top font-mono">
              <span>MENU</span>
              <button
                type="button"
                className="mobile-menu__close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                CLOSE ✕
              </button>
            </div>

            <nav aria-label="Chapters">
              <ol className="mobile-menu__list">
                {menuChapters.map((c) => (
                  <li key={c.target}>
                    <a
                      href={`#${c.target}`}
                      onClick={(e) => handleMenuClick(c.target, e)}
                      className={`mobile-menu__link ${activeChapter === c.target ? "is-active" : ""}`}
                      aria-current={activeChapter === c.target ? "true" : undefined}
                    >
                      <span className="mobile-menu__num font-mono">{c.num}</span>
                      <span className="mobile-menu__label">{c.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mobile-menu__foot font-mono">
              <a href={config.resumeUrl} target="_blank" rel="noreferrer">RESUME ↗</a>
              <a href={config.contact.github} target="_blank" rel="noreferrer">GITHUB</a>
              <a href={config.contact.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
              <a href={`mailto:${config.contact.email}`}>EMAIL</a>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
