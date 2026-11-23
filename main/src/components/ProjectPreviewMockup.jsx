import React from "react";

const COURTS = ["A", "B", "C", "D"];
const COURT_SLOTS = [
  { time: "6PM", cells: ["booked", "open", "booked", "open"] },
  { time: "7PM", cells: ["booked", "booked", "open", "booked"] },
  { time: "8PM", cells: ["peak", "open", "booked", "peak"] },
  { time: "9PM", cells: ["open", "booked", "booked", "open"] },
];

export default function ProjectPreviewMockup({ projectId, isHovered }) {
  const renderContent = () => {
    switch (projectId) {
      case "skillmatch":
        return (
          <div className="mockup-ui mockup-skillmatch">
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="mockup-url-pill font-mono">api.skillmatch.app/v2/analytics</span>
              <span className="mockup-badge-live font-mono">AI ENGINE ACTIVE</span>
            </div>

            <div className="mockup-body mockup-grid-two">
              {/* Metric 1: Match Score */}
              <div className="mockup-stat-card">
                <div className="mockup-stat-label font-mono">MATCH COMPATIBILITY</div>
                <div className="mockup-stat-val-group">
                  <span className="mockup-stat-number font-head">96.4%</span>
                  <span className="mockup-stat-sub font-mono">HIGH CONFIDENCE</span>
                </div>
                <div className="mockup-progress-bar">
                  <div className="mockup-progress-fill" style={{ width: isHovered ? "96%" : "85%" }} />
                </div>
              </div>

              {/* Metric 2: Skills Breakdown */}
              <div className="mockup-stat-card mockup-stat-card--secondary">
                <div className="mockup-stat-label font-mono">TOP MATCHED VECTORS</div>
                <div className="mockup-pill-stack font-mono">
                  <span className="mockup-tag">Python & FastAPI</span>
                  <span className="mockup-tag">Vector DB</span>
                  <span className="mockup-tag mockup-tag--accent">React 19</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "rice-trader":
        return (
          <div className="mockup-ui mockup-ricetrader">
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="mockup-url-pill font-mono">armonyxfitness.com/plans</span>
              <span className="mockup-badge-live font-mono">OPEN 24/7</span>
            </div>

            <div className="mockup-body mockup-ledger">
              <div className="mockup-ledger-row font-mono">
                <span className="ledger-sku">01 MO</span>
                <span className="ledger-name">Single Branch</span>
                <span className="ledger-qty">MAKATI</span>
                <span className="ledger-status ledger-status--optimal">JOIN</span>
              </div>
              <div className="mockup-ledger-row font-mono">
                <span className="ledger-sku">06 MO</span>
                <span className="ledger-name">All Branches</span>
                <span className="ledger-qty">4 GYMS</span>
                <span className="ledger-status ledger-status--optimal">JOIN</span>
              </div>
              <div className="mockup-ledger-row mockup-ledger-row--dim font-mono">
                <span className="ledger-sku">12 MO</span>
                <span className="ledger-name">Best Value</span>
                <span className="ledger-qty">₱25,080</span>
                <span className="ledger-status ledger-status--low">POPULAR</span>
              </div>
            </div>
          </div>
        );

      case "court-reservation":
        return (
          <div className="mockup-ui mockup-court">
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="mockup-url-pill font-mono">venue/slots?date=today</span>
              <span className="mockup-badge-live font-mono">
                <span className="court-rec-dot" /> REC ARMED
              </span>
            </div>

            <div className="mockup-body court-body font-mono">
              <div className="court-grid">
                <span />
                {COURTS.map((c) => (
                  <span key={c} className="court-col-label">{c}</span>
                ))}
                {COURT_SLOTS.map(({ time, cells }, row) => (
                  <React.Fragment key={time}>
                    <span className="court-time">{time}</span>
                    {cells.map((state, col) => {
                      const isPick = isHovered && row === 2 && col === 1;
                      return (
                        <span
                          key={col}
                          className={`court-slot court-slot--${isPick ? "picked" : state}`}
                        />
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>

              <div className={`court-summary ${isHovered ? "court-summary--active" : ""}`}>
                <span className="court-summary-label">
                  {isHovered ? "COURT B · 8:00 PM" : "SELECT A SLOT"}
                </span>
                <span className="court-summary-price">
                  {isHovered ? "₱650/hr" : "—"}
                </span>
                <span className="court-summary-tag">{isHovered ? "PEAK RATE" : "4 OPEN"}</span>
              </div>
            </div>
          </div>
        );

      case "portfolio-v3":
      default:
        return (
          <div className="mockup-ui mockup-skillmatch">
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="mockup-url-pill font-mono">3ammediatech.com/web</span>
              <span className="mockup-badge-live font-mono">3AM</span>
            </div>

            <div className="mockup-body mockup-grid-two">
              <div className="mockup-stat-card">
                <div className="mockup-stat-label font-mono">MEDIA. TECHNOLOGY.</div>
                <div className="mockup-stat-val-group">
                  <span className="mockup-stat-number font-head">Possibilities</span>
                  <span className="mockup-stat-sub font-mono">QUEZON CITY</span>
                </div>
                <div className="mockup-progress-bar">
                  <div className="mockup-progress-fill" style={{ width: isHovered ? "100%" : "66%" }} />
                </div>
              </div>

              <div className="mockup-stat-card mockup-stat-card--secondary">
                <div className="mockup-stat-label font-mono">CAPABILITIES</div>
                <div className="mockup-pill-stack font-mono">
                  <span className="mockup-tag">01 Media</span>
                  <span className="mockup-tag">02 Technology</span>
                  <span className="mockup-tag mockup-tag--accent">03 Events</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`project-preview-mockup-wrapper ${isHovered ? "hovered" : ""}`}>
      {renderContent()}
    </div>
  );
}
