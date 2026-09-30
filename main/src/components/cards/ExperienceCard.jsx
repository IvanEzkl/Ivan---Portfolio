import React, { useEffect, useRef } from "react";
import config from "../../../portfolio.config";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// "Aug 2025 — Present" → sortable number (2025.07)
function startOf(period) {
  const [month = "", year = "0"] = period.split("—")[0].trim().split(/\s+/);
  return Number(year) + MONTHS.indexOf(month.slice(0, 3).toLowerCase()) / 100;
}

function buildTimeline({ experience, education, organizations }) {
  return [
    ...experience.map((e) => ({ ...e, type: "Work", title: e.role, org: e.company })),
    ...education.map((e) => ({ ...e, type: "Education", title: e.degree, org: e.school })),
    ...organizations.map((e) => ({ ...e, type: "Community", title: e.role, org: e.org })),
  ].sort((a, b) => startOf(b.period) - startOf(a.period));
}

export default function ExperienceCard() {
  const entries = buildTimeline(config.trajectory);
  const listRef = useRef(null);

  // Draw the line down to wherever the middle of the viewport has reached
  useEffect(() => {
    const list = listRef.current;
    if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = null;

    const update = () => {
      frame = null;
      const rect = list.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - rect.top) / rect.height;
      list.style.setProperty("--line", Math.min(Math.max(p, 0), 1).toFixed(4));
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

  let lastYear = null;

  return (
    <div ref={listRef} className="timeline">
      <span className="timeline-line" aria-hidden="true"><i /></span>

      <ol className="timeline-list">
        {entries.map((item) => {
          const year = Math.floor(startOf(item.period));
          const showYear = year !== lastYear;
          lastYear = year;

          return (
            <li key={item.id} className={`timeline-item ${item.isCurrent ? "is-current" : ""}`}>
              <div className="timeline-when">
                {showYear && <span className="timeline-year">{year}</span>}
                <span className="timeline-period font-mono">{item.period}</span>
              </div>

              <span className="timeline-node" aria-hidden="true" />

              <div className="timeline-body">
                <div className="timeline-tags font-mono">
                  <span className="timeline-type">{item.type}</span>
                  {item.isCurrent && <span className="timeline-now">NOW</span>}
                </div>
                <h3 className="timeline-title font-head">{item.title}</h3>
                <p className="timeline-org">
                  {item.org}
                  {item.location && <span className="timeline-loc"> · {item.location}</span>}
                </p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
