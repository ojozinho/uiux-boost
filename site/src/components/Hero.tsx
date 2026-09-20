"use client";

import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-12 overflow-hidden dot-bg">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Decorative shapes */}
      <div className="absolute top-28 right-[12%] w-20 h-20 neo-border-gold opacity-15 hidden lg:block" style={{ animation: "float 6s ease-in-out infinite", transform: "rotate(45deg)" }} />
      <div className="absolute bottom-36 left-[6%] w-14 h-14 rounded-full border-2 opacity-15 hidden lg:block" style={{ borderColor: "var(--olive)", animation: "float 8s ease-in-out infinite 2s" }} />
      <div className="absolute top-[20%] right-[30%] hidden lg:block" style={{ animation: "spin-slow 20s linear infinite" }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27Z" fill="var(--gold)" opacity="0.12" />
        </svg>
      </div>

      <div className="relative z-10" style={{ width: "100%", maxWidth: 1320, margin: "0 auto", paddingLeft: "clamp(24px, 5vw, 64px)", paddingRight: "clamp(24px, 5vw, 64px)" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }}>
          {/* Left — Brand */}
          <div>
            <div className="animate-on-scroll">
              <Logo size={90} />
            </div>

            <h1 className="mt-10 animate-on-scroll stagger-1" style={{ lineHeight: 0.88 }}>
              <span className="block" style={{ fontFamily: "'Estrella', cursive", fontSize: "clamp(72px, 12vw, 160px)" }}>
                UI/UX
              </span>
              <span className="block text-gradient-gold" style={{ fontFamily: "'Estrella', cursive", fontSize: "clamp(72px, 12vw, 160px)" }}>
                BOOST
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl max-w-md leading-relaxed animate-on-scroll stagger-2" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
              Pixel-perfect implementation from Figma.
              <br />
              <span style={{ color: "var(--text-muted)" }}>Fully responsive. Zero AI slop.</span>
            </p>

            <div className="mt-12 flex flex-wrap gap-4 animate-on-scroll stagger-3">
              <a
                href="https://github.com/ojozinho/uiux-boost"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-border-gold hover-lift"
                style={{
                  display: "inline-block",
                  background: "var(--gold)",
                  color: "var(--bg)",
                  padding: "16px 40px",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Get the Skill
              </a>
              <a
                href="#how-it-works"
                className="neo-border"
                style={{
                  display: "inline-block",
                  padding: "16px 40px",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.3s, border-color 0.3s",
                }}
              >
                How it works
              </a>
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="animate-on-scroll from-right stagger-2">
            <div className="neo-border neo-shadow overflow-hidden" style={{ background: "var(--bg-card)" }}>
              {/* Window chrome */}
              <div className="flex items-center gap-2" style={{ padding: "12px 20px", borderBottom: "2px solid var(--border-heavy)", background: "var(--bg-card-alt)" }}>
                <div className="w-3 h-3 rounded-full" style={{ background: "var(--burnt)" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "var(--gold)" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "var(--olive)" }} />
                <span style={{ marginLeft: 16, fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
                  claude-code &mdash; figma-faithful
                </span>
              </div>

              {/* Terminal body */}
              <div style={{ padding: "28px 32px", fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 2.2 }}>
                <div style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--olive-light)" }}>$</span> /figma-faithful
                </div>
                <div style={{ marginTop: 12, color: "var(--gold)", fontWeight: 700 }}>
                  &#9670; UI/UX BOOST activated
                </div>
                <div style={{ color: "var(--text-secondary)" }}>
                  bora meter bronca. manda o link do Figma.
                </div>
                <div style={{ marginTop: 12, color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--olive-light)" }}>$</span>{" "}
                  <span style={{ color: "var(--text-primary)" }}>figma.com/design/abc...</span>
                </div>
                <div style={{ marginTop: 12, color: "var(--text-secondary)" }}>&#9654; extracting design tokens...</div>
                <div style={{ color: "var(--text-secondary)" }}>&#9654; typography: <span style={{ color: "var(--text-primary)" }}>Syne 800</span> + <span style={{ color: "var(--text-primary)" }}>DM Sans 400</span></div>
                <div style={{ color: "var(--text-secondary)" }}>&#9654; palette: <span style={{ color: "var(--text-primary)" }}>6 colors</span> mapped to CSS vars</div>
                <div style={{ color: "var(--text-secondary)" }}>&#9654; spacing: <span style={{ color: "var(--text-primary)" }}>8px</span> base grid detected</div>
                <div style={{ marginTop: 12, color: "var(--gold)", fontWeight: 700 }}>&#9670; building section 1/5...</div>
                <div style={{ color: "var(--olive-light)" }}>&#10003; screenshot @ 375px &mdash; matches Figma</div>
                <div style={{ color: "var(--olive-light)" }}>&#10003; screenshot @ 1440px &mdash; matches Figma</div>
                <div style={{ marginTop: 12, color: "var(--burnt-light)", fontSize: 11, opacity: 0.7 }}>
                  {"// tip: Alt+V pastes screenshots here"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-24 flex justify-center animate-on-scroll stagger-4">
          <div className="flex flex-col items-center gap-3" style={{ color: "var(--text-muted)" }}>
            <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
            <div style={{ width: 1, height: 56, background: "linear-gradient(to bottom, var(--border-heavy), transparent)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
