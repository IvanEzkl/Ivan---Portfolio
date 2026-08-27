import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ProjectPreviewMockup({ projectId, isHovered }) {
  const { mode } = useTheme();
  const isLight = mode === "light";

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
              <span className="mockup-url-pill font-mono">pos.ricetrader.local/inventory</span>
              <span className="mockup-badge-live font-mono">LIVE LEDGER</span>
            </div>

            <div className="mockup-body mockup-ledger">
              <div className="mockup-ledger-row font-mono">
                <span className="ledger-sku">SKU-9024</span>
                <span className="ledger-name">Jasmine Rice (50kg)</span>
                <span className="ledger-qty">142 BAGS</span>
                <span className="ledger-status ledger-status--optimal">IN STOCK</span>
              </div>
              <div className="mockup-ledger-row font-mono">
                <span className="ledger-sku">SKU-8119</span>
                <span className="ledger-name">Sinandomeng Special</span>
                <span className="ledger-qty">88 BAGS</span>
                <span className="ledger-status ledger-status--optimal">IN STOCK</span>
              </div>
              <div className="mockup-ledger-row mockup-ledger-row--dim font-mono">
                <span className="ledger-sku">SKU-4031</span>
                <span className="ledger-name">Brown Rice Premium</span>
                <span className="ledger-qty">16 BAGS</span>
                <span className="ledger-status ledger-status--low">LOW STOCK</span>
              </div>
            </div>
          </div>
        );

      case "cookithow":
        return (
          <div className="mockup-ui mockup-cookithow">
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="mockup-url-pill font-mono">cookithow.web/recipe/garlic-pasta</span>
              <span className="mockup-badge-live font-mono">TIMER 14:20</span>
            </div>

            <div className="mockup-body mockup-recipe-steps">
              <div className="recipe-step-header font-mono">
                <span className="step-badge">STEP 03 / 06</span>
                <span className="step-title">Simmer garlic in olive oil at 180°C</span>
              </div>
              <div className="recipe-timer-strip">
                <div className="timer-track">
                  <div className="timer-bar" style={{ width: isHovered ? "65%" : "40%" }} />
                </div>
                <div className="recipe-checklist font-mono">
                  <span className="check-item check-item--done">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    4 Cloves Minced Garlic
                  </span>
                  <span className="check-item check-item--done">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    2 tbsp EV Olive Oil
                  </span>
                  <span className="check-item">
                    <span style={{ opacity: 0.6, marginRight: "4px" }}>[ ]</span>
                    Red Pepper Flakes
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "portfolio-v3":
      default:
        return (
          <div className="mockup-ui mockup-portfolio">
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="mockup-url-pill font-mono">localhost:5173 • Vite HMR</span>
              <span className="mockup-badge-live font-mono">60.0 FPS</span>
            </div>

            <div className="mockup-body mockup-terminal font-mono">
              <div className="terminal-line">
                <span className="t-prompt">&gt;</span> <span className="t-cmd">render &lt;FullStackApp /&gt;</span>
                <span className="t-ok">[100% OK]</span>
              </div>
              <div className="terminal-line">
                <span className="t-prompt">&gt;</span> <span className="t-cmd">themeState.sync(&quot;{mode}&quot;)</span>
                <span className="t-status">[ACTIVE]</span>
              </div>
              <div className="terminal-line terminal-line--accent">
                <span className="t-prompt">&gt;</span> <span className="t-cmd">glassmorphism.refract(level: 16px)</span>
                <span className="t-ready">MOUNTED</span>
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
