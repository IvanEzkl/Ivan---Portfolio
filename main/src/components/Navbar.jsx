import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition";
import { useTheme } from "../context/ThemeContext";
import config from "../../portfolio.config";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { transitionTo } = usePageTransition();
  const { mode, toggleMode } = useTheme();

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const isManualScrollingRef = useRef(false);
  const lastScrollYRef = useRef(0);

  // Nav items in exact matching order with the landing page sections
  const navItems = [
    { label: "Experience", target: "experience" },
    { label: "Work", target: "work" },
    { label: "Stack", target: "stack" },
    { label: "About", target: "about" },
  ];

  // Scrollspy & dynamic scroll direction tracker
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = lastScrollYRef.current;
      const scrollDiff = currentScrollY - prevScrollY;

      // If near top of page, always keep expanded
      if (currentScrollY <= 80) {
        setIsScrollingDown(false);
      } else if (scrollDiff > 6) {
        // Scrolling DOWN -> collapse into compact badge
        setIsScrollingDown(true);
      } else if (scrollDiff < -6) {
        // Scrolling UP -> expand navbar back
        setIsScrollingDown(false);
      }

      lastScrollYRef.current = currentScrollY;

      // If user recently clicked a nav link, avoid scrollspy jitter
      if (isManualScrollingRef.current) return;

      if (location.pathname === "/") {
        const sections = [
          "overview",
          "experience",
          "work",
          "stack",
          "about",
          "connect",
        ];

        // Bottom of page check -> highlight Connect
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 120) {
          setActiveSection("connect");
          return;
        }

        const scrollPos = window.scrollY + 180;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const top = el.offsetTop;
            if (scrollPos >= top) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (target, e) => {
    e.preventDefault();
    // Instantly highlight the clicked section pill
    setActiveSection(target);
    isManualScrollingRef.current = true;

    if (location.pathname !== "/") {
      transitionTo("/", e);
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          isManualScrollingRef.current = false;
        }, 800);
      }, 550);
      return;
    }

    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 850);
  };

  // Compact when scrolling down AND not hovered; expands on scroll up or hover
  const isCompact = isScrollingDown && !isHovered;

  return (
    <div
      className="floating-nav-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <header
        className={`floating-nav ${isCompact ? "floating-nav--compact" : "floating-nav--expanded"}`}
        aria-label="Main Navigation Capsule"
      >
        {/* Brand Logo / Name */}
        <a
          href="/"
          onClick={(e) => handleNavClick("overview", e)}
          className="floating-nav__logo"
          title="Ivan Ezekiel"
        >
          {config.name}<span>.</span>
        </a>

        {/* Navigation Items (Visible when expanded or on hover / scrolling up) */}
        <div className="floating-nav__menu">
          <span className="floating-nav__divider" aria-hidden="true" />

          <nav aria-label="Landing Page Sections">
            <ul className="floating-nav__links">
              {navItems.map((item) => {
                const isActive = location.pathname === "/" && activeSection === item.target;
                return (
                  <li key={item.label}>
                    <a
                      href={`#${item.target}`}
                      onClick={(e) => handleNavClick(item.target, e)}
                      className={`floating-nav__pill ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <span className="floating-nav__divider" aria-hidden="true" />

          {/* Connect CTA Button */}
          <a
            href="#connect"
            onClick={(e) => handleNavClick("connect", e)}
            className={`floating-nav__connect ${activeSection === "connect" ? "active" : ""}`}
          >
            Connect
          </a>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleMode}
            className="floating-nav__theme-btn"
            title={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}
            aria-label={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}
          >
            {mode === "dark" ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </header>
    </div>
  );
}
