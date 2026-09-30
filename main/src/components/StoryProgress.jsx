import React, { useEffect, useRef } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

// Page-wide reading progress bar plus a sticky chapter index.
export default function StoryProgress({ chapters }) {
  const barRef = useRef(null);
  const activeId = useScrollSpy(chapters.map((c) => c.id));
  const inChapter = chapters.some((c) => c.id === activeId);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let frame = null;

    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = (id, e) => {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <div className="story-progress" aria-hidden="true">
        <div ref={barRef} className="story-progress-bar" />
      </div>

      <nav className={`story-index ${inChapter ? "is-visible" : ""}`} aria-label="Chapters">
        <ol>
          {chapters.map((c) => {
            const isActive = c.id === activeId;
            return (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  onClick={(e) => goTo(c.id, e)}
                  className={isActive ? "is-active" : ""}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="story-index-num font-mono">{c.num}</span>
                  <span className="story-index-label font-mono">{c.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
