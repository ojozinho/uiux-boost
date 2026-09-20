"use client";

import { Container } from "./Container";

const banned = [
  { icon: "Aa", label: "Inter / Roboto", reason: "default AI fonts" },
  { icon: "~", label: "Purple Gradients", reason: "#1 AI color tell" },
  { icon: "|||", label: "3 Identical Cards", reason: "lazy grid pattern" },
  { icon: "{ }", label: "Glassmorphism", reason: "overused effect" },
  { icon: "r16", label: "Uniform Radius", reason: "16px on everything" },
  { icon: ":)", label: "Emoji Icons", reason: "no rockets or sparkles" },
];

const approved = [
  { label: "Distinctive typography", detail: "Fonts with personality" },
  { label: "Intentional color theory", detail: "60-30-10 rule, real palettes" },
  { label: "Asymmetric layouts", detail: "Rhythm, not repetition" },
  { label: "Purposeful animation", detail: "Choreographed, staggered, varied" },
];

export function AntiSlop() {
  return (
    <section style={{ paddingTop: 112, paddingBottom: 112, overflow: "hidden" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 32, marginBottom: 64 }} className="animate-on-scroll">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.3em", marginTop: 12, flexShrink: 0 }}>
            RULES
          </span>
          <h2 style={{ fontFamily: "'Estrella', cursive", fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.0 }}>
            Anti-slop
            <br />
            <span className="text-gradient-gold">manifesto.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 4vw, 64px)" }} className="!grid-cols-1 lg:!grid-cols-2">
          {/* Banned column */}
          <div className="animate-on-scroll from-left">
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--burnt)", fontSize: 18, marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span className="neo-border" style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, borderColor: "var(--burnt)" }}>
                &#10005;
              </span>
              BANNED
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {banned.map((item, i) => (
                <div
                  key={item.label}
                  className={`neo-border animate-on-scroll stagger-${i + 1}`}
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, background: "var(--bg-card)", transition: "border-color 0.3s" }}
                >
                  <span className="neo-border" style={{ width: 48, height: 48, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-card-alt)", color: "var(--burnt)", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, borderColor: "var(--border)" }}>
                    {item.icon}
                  </span>
                  <div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14 }}>
                      {item.label}
                    </span>
                    <span style={{ marginLeft: 8, color: "var(--text-muted)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
                      {item.reason}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approved column */}
          <div className="animate-on-scroll from-right">
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--olive-light)", fontSize: 18, marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span className="neo-border" style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, borderColor: "var(--olive)" }}>
                &#10003;
              </span>
              APPROVED
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {approved.map((item, i) => (
                <div
                  key={item.label}
                  className={`neo-border animate-on-scroll stagger-${i + 1}`}
                  style={{ padding: 24, background: "var(--bg-card)", transition: "border-color 0.3s" }}
                >
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
                    {item.label}
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="neo-border-gold animate-on-scroll scale" style={{ marginTop: 80, padding: "clamp(32px, 4vw, 48px)", background: "var(--bg-card)", textAlign: "center" }}>
          <blockquote style={{ fontFamily: "'Estrella', cursive", fontSize: "clamp(24px, 4vw, 48px)", lineHeight: 1.2 }}>
            &ldquo;If it looks like AI made it,
            <br />
            <span className="text-gradient-gold">we failed.&rdquo;</span>
          </blockquote>
          <p style={{ marginTop: 16, color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em" }}>
            THE ONLY RULE THAT MATTERS
          </p>
        </div>
      </Container>
    </section>
  );
}
