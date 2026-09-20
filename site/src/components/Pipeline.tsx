"use client";

import { Container } from "./Container";

const steps = [
  { num: "01", label: "EXTRACT", detail: "Every font, color, spacing value and asset pulled from Figma automatically", color: "var(--gold)" },
  { num: "02", label: "IMPLEMENT", detail: "Mobile-first code, section by section, semantic HTML + CSS tokens", color: "var(--olive-light)" },
  { num: "03", label: "SCREENSHOT", detail: "Browser captures at 375px, 768px, 1440px — real pixels, not assumptions", color: "var(--burnt)" },
  { num: "04", label: "COMPARE", detail: "Side-by-side against Figma reference. Fonts, spacing, colors — everything checked", color: "var(--gold)" },
  { num: "05", label: "FIX & SHIP", detail: "Discrepancies corrected, responsive sweep at 12+ widths, anti-slop audit passed", color: "var(--olive-light)" },
];

export function Pipeline() {
  return (
    <section id="how-it-works" className="grid-bg" style={{ paddingTop: 112, paddingBottom: 112 }}>
      <Container>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 32, marginBottom: 80 }} className="animate-on-scroll">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.3em", marginTop: 12, flexShrink: 0 }}>
            PIPELINE
          </span>
          <h2 style={{ fontFamily: "'Estrella', cursive", fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.0 }}>
            How the
            <br />
            <span className="text-gradient-gold">magic works.</span>
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`animate-on-scroll stagger-${i + 1}`}
              style={{ display: "flex", alignItems: "flex-start", gap: "clamp(20px, 3vw, 40px)", paddingBottom: 40, paddingTop: i > 0 ? 40 : 0, borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              {/* Number */}
              <div
                className="neo-border"
                style={{ width: 64, height: 64, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 16, background: "var(--bg)", borderColor: step.color, color: step.color }}
              >
                {step.num}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(24px, 3vw, 40px)", color: step.color, letterSpacing: "-0.02em" }}>
                  {step.label}
                </h3>
                <p style={{ marginTop: 8, color: "var(--text-secondary)", fontSize: 15, maxWidth: 480, lineHeight: 1.6 }}>
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Loop indicator */}
        <div className="animate-on-scroll" style={{ marginTop: 64, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ height: 1, flex: 1, background: "var(--border-heavy)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.2em" }}>
            REPEAT UNTIL PERFECT
          </span>
          <div style={{ height: 1, flex: 1, background: "var(--border-heavy)" }} />
        </div>
      </Container>
    </section>
  );
}
