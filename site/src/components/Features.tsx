"use client";

import { Container } from "./Container";

const features = [
  {
    tag: "01",
    title: "Figma Extraction",
    desc: "Pulls every token from your Figma file — fonts, colors, spacing, assets. Nothing is guessed, everything is extracted.",
    accent: "var(--gold)",
    span: "md:col-span-2",
  },
  {
    tag: "02",
    title: "Screenshot Loop",
    desc: "Takes browser screenshots at every viewport and compares against Figma. Fix, re-shoot, repeat until pixel-perfect.",
    accent: "var(--burnt)",
    span: "md:col-span-1",
  },
  {
    tag: "03",
    title: "Anti-Slop Engine",
    desc: "40+ banned AI patterns. No Inter. No purple gradients. No identical cards. Every choice is intentional.",
    accent: "var(--olive-light)",
    span: "md:col-span-1",
  },
  {
    tag: "04",
    title: "Responsive by Default",
    desc: "Mobile-first always. Pixel-perfect at Figma widths, fluid in between. Stress-tested at 12+ viewport sizes.",
    accent: "var(--gold)",
    span: "md:col-span-2",
  },
  {
    tag: "05",
    title: "No Figma? No Problem.",
    desc: "Mode B guides you through design decisions with live screenshots. React to real implementations, not mockups.",
    accent: "var(--burnt)",
    span: "md:col-span-3",
  },
];

export function Features() {
  return (
    <section style={{ paddingTop: 112, paddingBottom: 112, overflow: "hidden" }}>
      <Container>
        {/* Section header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 32, marginBottom: 80 }}>
          <span className="animate-on-scroll" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.3em", marginTop: 12, flexShrink: 0 }}>
            FEATURES
          </span>
          <h2 className="animate-on-scroll stagger-1" style={{ fontFamily: "'Estrella', cursive", fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.0 }}>
            Not another
            <br />
            <span className="text-gradient-gold">code generator.</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="!grid-cols-1 md:!grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.tag}
              className={`${f.span} neo-border hover-lift animate-on-scroll stagger-${i + 1}`}
              style={{ background: "var(--bg-card)", padding: "clamp(28px, 3vw, 48px)" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", fontWeight: 700, color: f.accent }}>
                  {f.tag}
                </span>
                <div
                  className="hover-lift"
                  style={{ width: 10, height: 10, background: f.accent, transition: "transform 0.5s" }}
                />
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px, 2vw, 28px)", marginBottom: 16, lineHeight: 1.2 }}>
                {f.title}
              </h3>

              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: 15 }}>
                {f.desc}
              </p>

              <div style={{ marginTop: 40, height: 2, width: 0, background: f.accent, transition: "width 0.7s ease-out" }} className="group-hover:w-full" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
