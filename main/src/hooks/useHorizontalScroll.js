import { useEffect, useState } from "react";

const HEADER_OFFSET = 72;

// Live media-query match, e.g. to switch a pinned layout off on small screens.
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

// Pins `stickyRef` inside `outerRef` and slides `trackRef` sideways as the page scrolls.
// Sets the outer height from the track overflow and writes `--p` (0 → 1) and `--shift`.
export function useHorizontalScroll(outerRef, stickyRef, trackRef, enabled) {
  useEffect(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!enabled || !outer || !sticky || !track) return;

    let shift = 0;
    let frame = null;

    const measure = () => {
      shift = Math.max(track.scrollWidth - sticky.clientWidth, 0);
      outer.style.height = `${shift + sticky.offsetHeight}px`;
      outer.style.setProperty("--shift", `${shift}px`);
      update();
    };

    const update = () => {
      frame = null;
      const scrolled = HEADER_OFFSET - outer.getBoundingClientRect().top;
      const p = shift > 0 ? Math.min(Math.max(scrolled / shift, 0), 1) : 0;
      outer.style.setProperty("--p", p.toFixed(4));
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    ro.observe(sticky);
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      ro.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      outer.style.removeProperty("height");
      outer.style.removeProperty("--p");
      outer.style.removeProperty("--shift");
    };
  }, [outerRef, stickyRef, trackRef, enabled]);
}
