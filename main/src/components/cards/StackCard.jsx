import React, { useState } from "react";
import config from "../../../portfolio.config";

export default function StackCard() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="tech-stack-container">
      {/* Tabular Matrix of Tech Rows */}
      <div className="tech-matrix">
        {config.tools.map((group) => (
          <div key={group.category} className="tech-matrix-row">
            {/* Category Column */}
            <div className="tech-category-col">
              <span className="tech-category-name font-mono">
                {group.category}
              </span>
            </div>

            {/* Badges Column */}
            <div className="tech-badges-col">
              {group.items.map((tech) => {
                const isActive = activeItem === tech;

                return (
                  <button
                    key={tech}
                    type="button"
                    className={`tech-badge font-mono ${isActive ? "active" : ""}`}
                    onMouseEnter={() => setActiveItem(tech)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <span>{tech}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
