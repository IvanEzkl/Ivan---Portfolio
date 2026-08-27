import React from "react";
import config from "../../../portfolio.config";

export default function ExperienceCard() {
  const { experience, education, organizations } = config.trajectory;

  return (
    <div className="trajectory-grid">
      {/* ── 1. Column: EXPERIENCE ────────────────────────────── */}
      <div className="trajectory-col">
        <div className="trajectory-col-header">
          <span className="trajectory-col-title font-mono">EXPERIENCE</span>
          <span className="trajectory-col-count font-mono">
            {experience.length} records
          </span>
        </div>

        <div className="trajectory-items-list">
          {experience.map((item, idx) => (
            <div key={item.id || idx} className="trajectory-item">
              {item.isCurrent && (
                <div className="trajectory-tag-current font-mono">
                  CURRENT
                </div>
              )}

              <h3 className="trajectory-item-title font-head">
                {item.role}
              </h3>

              <div className="trajectory-item-meta font-mono">
                <span className="trajectory-company">{item.company}</span>
                {item.location && <span className="trajectory-dot">• {item.location}</span>}
              </div>
              <div className="trajectory-item-period font-mono">
                {item.period}
              </div>

              <p className="trajectory-item-desc font-mono">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 2. Column: EDUCATION ─────────────────────────────── */}
      <div className="trajectory-col">
        <div className="trajectory-col-header">
          <span className="trajectory-col-title font-mono">EDUCATION</span>
          <span className="trajectory-col-count font-mono">
            {education.length} record
          </span>
        </div>

        <div className="trajectory-items-list">
          {education.map((item, idx) => (
            <div key={item.id || idx} className="trajectory-item">
              {item.isCurrent && (
                <div className="trajectory-tag-current font-mono">
                  CURRENT
                </div>
              )}

              <h3 className="trajectory-item-title font-head">
                {item.degree}
              </h3>

              <div className="trajectory-item-meta font-mono">
                <span className="trajectory-company">{item.school}</span>
                {item.location && <span className="trajectory-dot">• {item.location}</span>}
              </div>
              <div className="trajectory-item-period font-mono">
                {item.period}
              </div>

              <p className="trajectory-item-desc font-mono">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. Column: ORGANIZATIONS ─────────────────────────── */}
      <div className="trajectory-col">
        <div className="trajectory-col-header">
          <span className="trajectory-col-title font-mono">ORGANIZATIONS</span>
          <span className="trajectory-col-count font-mono">
            {organizations.length} records
          </span>
        </div>

        <div className="trajectory-items-list">
          {organizations.map((item, idx) => (
            <div key={item.id || idx} className="trajectory-item">
              <h3 className="trajectory-item-title font-head">
                {item.role}
              </h3>

              <div className="trajectory-item-meta font-mono">
                <span className="trajectory-company">{item.org}</span>
              </div>
              <div className="trajectory-item-period font-mono">
                {item.period}
              </div>

              <p className="trajectory-item-desc font-mono">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
