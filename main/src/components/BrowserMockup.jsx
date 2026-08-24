import React from "react";

export default function BrowserMockup({ url, type, title }) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "calc(var(--radius) - 2px)",
        border: "1px solid var(--border)",
        background: "var(--card)",
        overflow: "hidden",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.35)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Browser Chrome Header */}
      <div
        style={{
          background: "var(--code-bg)",
          borderBottom: "1px solid var(--border)",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* macOS-style Window Controls */}
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ef4444", opacity: 0.85, display: "inline-block" }} />
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#f59e0b", opacity: 0.85, display: "inline-block" }} />
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#22c55e", opacity: 0.85, display: "inline-block" }} />
        </div>

        {/* URL / Domain Pill */}
        <div
          style={{
            flex: 1,
            maxWidth: "200px",
            margin: "0 auto",
            background: "color-mix(in srgb, var(--card) 80%, transparent)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            padding: "2px 8px",
            fontSize: "0.65rem",
            fontFamily: "var(--font-mono)",
            color: "var(--muted)",
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {url || "project.app"}
        </div>
      </div>

      {/* Mockup Screen Content */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 10",
          position: "relative",
          overflow: "hidden",
          background: "var(--card)",
        }}
      >
        {type === "todago" && (
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", width: "100%", height: "100%" }}>
            {/* Admin Login Box */}
            <div
              style={{
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: "#ffffff",
                color: "#1e293b",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "6px",
                    background: "#22c55e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                  }}
                >
                  🛺
                </div>
                <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f172a" }}>TodaGo Admin</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ fontSize: "0.62rem", color: "#64748b", fontWeight: 600 }}>Username</div>
                <div style={{ height: "24px", background: "#f1f5f9", borderRadius: "4px", border: "1px solid #e2e8f0" }} />
                <div style={{ fontSize: "0.62rem", color: "#64748b", fontWeight: 600, marginTop: "2px" }}>Password</div>
                <div style={{ height: "24px", background: "#f1f5f9", borderRadius: "4px", border: "1px solid #e2e8f0" }} />
                <div
                  style={{
                    height: "26px",
                    background: "#22c55e",
                    borderRadius: "4px",
                    marginTop: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                  }}
                >
                  Log In
                </div>
              </div>
            </div>

            {/* Urban Tricycle Photo / Graphics Pattern */}
            <div
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "16px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                  opacity: 0.25,
                }}
              />
              <div style={{ position: "relative", zIndex: 2 }}>
                <span
                  style={{
                    background: "rgba(34, 197, 94, 0.25)",
                    color: "#4ade80",
                    border: "1px solid rgba(34, 197, 94, 0.4)",
                    borderRadius: "999px",
                    padding: "2px 6px",
                    fontSize: "0.55rem",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                  }}
                >
                  BPToda Molino
                </span>
                <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.78rem", marginTop: "4px" }}>
                  Real-Time Dispatch Engine
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "ricetrader" && (
          <div
            style={{
              padding: "16px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              background: "linear-gradient(145deg, #090d16 0%, #171f30 100%)",
              color: "#f8fafc",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#22c55e", fontWeight: 800, fontSize: "0.85rem" }}>🌾 Rice Trader</span>
                <span style={{ fontSize: "0.55rem", background: "rgba(34,197,94,0.15)", color: "#22c55e", padding: "1px 5px", borderRadius: "4px" }}>SME Suite</span>
              </div>
              <span style={{ fontSize: "0.6rem", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>Live Sync</span>
            </div>

            {/* Metric Stat Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "6px 8px" }}>
                <div style={{ fontSize: "0.55rem", color: "#94a3b8" }}>Total Stock</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f8fafc" }}>1,480 bags</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "6px 8px" }}>
                <div style={{ fontSize: "0.55rem", color: "#94a3b8" }}>Daily Sales</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#22c55e" }}>₱84,500</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "6px 8px" }}>
                <div style={{ fontSize: "0.55rem", color: "#94a3b8" }}>Suppliers</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#38bdf8" }}>12 Active</div>
              </div>
            </div>

            {/* Visual Mini Chart / Rows */}
            <div style={{ flex: 1, background: "rgba(0,0,0,0.3)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.06)", padding: "8px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.55rem", color: "#94a3b8" }}>
                <span>Recent Inventory Flow</span>
                <span style={{ color: "#22c55e" }}>+12.4% vs last week</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "36px", marginTop: "auto" }}>
                {[40, 65, 50, 85, 70, 95, 80].map((val, i) => (
                  <div key={i} style={{ flex: 1, height: `${val}%`, background: i === 5 ? "var(--accent, #22c55e)" : "rgba(255,255,255,0.15)", borderRadius: "2px" }} />
                ))}
              </div>
            </div>
          </div>
        )}

        {type === "skillmatch" && (
          <div
            style={{
              padding: "16px 20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              background: "linear-gradient(135deg, #090d16 0%, #171d34 100%)",
              color: "#ffffff",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "6px",
                    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                  }}
                >
                  ⚡
                </div>
                <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "#f8fafc" }}>SkillMatch AI</span>
                <span style={{ fontSize: "0.58rem", background: "rgba(99, 102, 241, 0.2)", color: "#818cf8", border: "1px solid rgba(99, 102, 241, 0.35)", padding: "1px 6px", borderRadius: "999px", fontFamily: "var(--font-mono)" }}>Prescriptive Engine</span>
              </div>
              <span style={{ fontSize: "0.62rem", color: "#38bdf8", fontFamily: "var(--font-mono)" }}>Match Accuracy: 96.4%</span>
            </div>

            {/* Candidate & Prescriptive Skill Match Visuals */}
            <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "10px", flex: 1 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "10px 12px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.62rem", color: "#cbd5e1", fontWeight: 600 }}>Candidate Skills Vector</span>
                  <span style={{ fontSize: "0.55rem", color: "#4ade80", background: "rgba(74, 222, 128, 0.15)", padding: "1px 4px", borderRadius: "3px" }}>Aligned</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.55rem", color: "#94a3b8", marginBottom: "2px" }}>
                      <span>Full Stack (React / Node)</span>
                      <span>95%</span>
                    </div>
                    <div style={{ height: "4px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                      <div style={{ height: "100%", width: "95%", background: "#6366f1", borderRadius: "2px" }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.55rem", color: "#94a3b8", marginBottom: "2px" }}>
                      <span>System API / Database</span>
                      <span>88%</span>
                    </div>
                    <div style={{ height: "4px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                      <div style={{ height: "100%", width: "88%", background: "#a855f7", borderRadius: "2px" }} />
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: "0.55rem", color: "#94a3b8" }}>Targeted Training Modules Generated</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "8px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", flex: 1 }}>
                  <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#38bdf8" }}>520+</div>
                  <div style={{ fontSize: "0.55rem", color: "#94a3b8" }}>City Job Openings</div>
                </div>
                <div style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "8px", padding: "6px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.58rem", color: "#c7d2fe" }}>Skill Gap Analysis</span>
                  <span style={{ fontSize: "0.58rem", color: "#818cf8", fontWeight: 700 }}>Ready →</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "cookithow" && (
          <div
            style={{
              padding: "16px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              background: "linear-gradient(135deg, #1c1917 0%, #292524 100%)",
              color: "#fafaf9",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "#f97316" }}>🍳 CookItHow</span>
              <span style={{ fontSize: "0.55rem", background: "rgba(249,115,22,0.2)", color: "#fb923c", padding: "1px 5px", borderRadius: "4px" }}>Recipe Hub</span>
            </div>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.82rem" }}>Interactive Cooking Guide</div>
                <div style={{ fontSize: "0.6rem", color: "#a8a29e", marginTop: "2px" }}>Step-by-step visual timers & ingredient scaling</div>
              </div>
              <div style={{ display: "flex", gap: "4px" }}>
                <span style={{ fontSize: "0.52rem", background: "#f97316", color: "white", padding: "2px 6px", borderRadius: "3px" }}>Prep: 15m</span>
                <span style={{ fontSize: "0.52rem", background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: "3px" }}>Cook: 25m</span>
              </div>
            </div>
          </div>
        )}

        {type === "karensderya" && (
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              background: "#ea580c",
              color: "#ffffff",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "16px 20px", background: "#c2410c", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.02em" }}>KAREN'S DERYA EATERY</span>
              <span style={{ fontSize: "0.6rem", background: "#ffffff", color: "#c2410c", padding: "2px 6px", borderRadius: "4px", fontWeight: 700 }}>POS Live</span>
            </div>
            <div style={{ padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1 }}>
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#ffedd5" }}>Digital Food Ordering & Inventory</div>
                <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.8)", marginTop: "2px" }}>Automated daily receipts and kitchen queue</div>
              </div>
              <div style={{ background: "#ffffff", color: "#c2410c", fontWeight: 800, fontSize: "0.65rem", padding: "4px 10px", borderRadius: "4px" }}>Order Now →</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
