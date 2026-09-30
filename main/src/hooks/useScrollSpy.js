import { useEffect, useState } from "react";

// Returns the id of the section currently crossing the middle of the viewport.
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(null);
  const key = ids.join("|");

  useEffect(() => {
    const els = key.split("|").map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}

// Writes `--p` (0 → 1) on a pinned chapter as the page scrolls through it: 0 when its top
// hits the viewport top, 1 when its bottom hits the viewport bottom. Off under reduced motion.
export function useScrollProgress(ref, { enabled = true } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = null;

    const update = () => {
      frame = null;
      const rect = el.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const p = range > 0 ? Math.min(Math.max(-rect.top / range, 0), 1) : rect.top <= 0 ? 1 : 0;
      el.style.setProperty("--p", p.toFixed(4));
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
      el.style.removeProperty("--p");
    };
  }, [ref, enabled]);
}
