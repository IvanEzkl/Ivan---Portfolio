import React from "react";
import { useCardGlow } from "../../hooks/useCardGlow";
import { useClock } from "../../hooks/useClock";
import config from "../../../portfolio.config";

export default function ClockCard() {
  const cardRef = useCardGlow();
  const {
    hostTimeStr,
    hostDateStr,
    hostDayStr,
    visitorTimeStr,
    visitorDateStr,
    visitorDayStr,
    visitorTz,
    visitorOffset,
    isSameTz,
  } = useClock(config.timezone);

  return (
    <div
      ref={cardRef}
      className="card flex flex-col justify-center"
      style={{
        padding: "26px 28px",
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        gap: "16px",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow" style={{ margin: 0 }}>
          Global Presence
        </span>
        <span
          className="project-status"
          style={{
            fontSize: "0.65rem",
            padding: "2px 7px",
          }}
        >
          ● Live Sync
        </span>
      </div>

      {/* Dual Clocks Side-by-Side (Responsive Grid) */}
      <div className="clock-dual-grid">
        {/* Host Manila Time */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span
              className="font-mono text-muted"
              style={{
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontWeight: 600,
              }}
            >
              Manila (UTC+8)
            </span>
          </div>

          <div
            className="clock-time"
            style={{
              fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: "2px 0",
            }}
          >
            {hostTimeStr}
          </div>

          <div className="clock-date" style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
            {hostDayStr}, {hostDateStr}
          </div>

          <div style={{ marginTop: "6px" }}>
            <span
              className="clock-tz"
              style={{
                fontSize: "0.68rem",
                padding: "2px 8px",
              }}
            >
              {config.timezone}
            </span>
          </div>
        </div>

        {/* Visitor Local Time */}
        <div className="flex flex-col gap-1 clock-dual-col-divider">
          <div className="flex items-center justify-between">
            <span
              className="font-mono text-muted"
              style={{
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontWeight: 600,
              }}
            >
              Your Local Time
            </span>
            <span className="font-mono text-muted" style={{ fontSize: "0.65rem" }}>
              {visitorOffset}
            </span>
          </div>

          <div
            className="clock-time"
            style={{
              fontSize: "clamp(1.5rem, 2.2vw, 1.85rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: "2px 0",
            }}
          >
            {visitorTimeStr}
          </div>

          <div className="clock-date" style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
            {visitorDayStr}, {visitorDateStr}
          </div>

          <div style={{ marginTop: "6px" }}>
            <span
              className="clock-tz"
              style={{
                fontSize: "0.68rem",
                padding: "2px 8px",
              }}
            >
              {visitorTz} {isSameTz ? "(Same TZ)" : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
