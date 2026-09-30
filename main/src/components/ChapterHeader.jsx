import React from "react";

// Shared heading for every Scroll Story chapter on the home page.
export default function ChapterHeader({ num, total, label, title, aside }) {
  return (
    <header className="chapter-head reveal">
      <div className="chapter-head-text">
        <span className="chapter-label font-mono">
          <span className="chapter-num">{num}</span> / {total} — {label}
        </span>
        <h2 className="chapter-title">{title}</h2>
      </div>
      {aside && <div className="chapter-aside">{aside}</div>}
    </header>
  );
}
