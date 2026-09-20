"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );
    const run = () => document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    run();
    const mo = new MutationObserver(run);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>

      {/* ═══════ HERO SECTION ═══════ */}
      <section style={{ minHeight: "85vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

        {/* Top bar */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px clamp(20px, 4vw, 60px)", position: "relative", zIndex: 10 }}>
          <div className="font-display" style={{ fontWeight: 800, fontSize: 14, letterSpacing: "0.1em" }}>UI/UX BOOST</div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <span className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>2026</span>
            <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" className="font-mono" style={{ fontSize: 11, color: "var(--text-secondary)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>GITHUB</a>
          </div>
        </nav>

        {/* Hero content */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 clamp(20px, 4vw, 60px)" }}>
          <div style={{ maxWidth: 1400, width: "100%", position: "relative" }}>

            {/* Decorative circles */}
            <div className="circle-deco" style={{ position: "absolute", width: 320, height: 320, background: "var(--bg-lavender)", top: -40, right: "10%", zIndex: 0, opacity: 0.6 }} />
            <div className="circle-deco" style={{ position: "absolute", width: 160, height: 160, background: "var(--bg-lavender-light)", bottom: -20, left: "5%", zIndex: 0 }} />

            {/* Logo + Title composition */}
            <div data-reveal style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
              <img src="/logo.png" alt="UI/UX BOOST" style={{ width: "clamp(280px, 50vw, 700px)", height: "auto", margin: "0 auto", display: "block", filter: "invert(1)", mixBlendMode: "multiply" }} />
              <p className="font-display" style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "var(--text-secondary)", marginTop: 24, maxWidth: 520, margin: "24px auto 0", lineHeight: 1.7 }}>
                Pixel-perfect from Figma. Fully responsive. Screenshot-verified. Zero AI slop.
              </p>
            </div>

            {/* Floating labels */}
            <div data-reveal className="delay-2" style={{ position: "absolute", top: "15%", left: 0, zIndex: 3 }}>
              <div style={{ background: "var(--bg-dark)", color: "var(--text-white)", padding: "8px 16px", border: "2px solid var(--border-heavy)", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                CLAUDE CODE SKILL
              </div>
            </div>
            <div data-reveal="right" className="delay-3" style={{ position: "absolute", bottom: "20%", right: 0, zIndex: 3 }}>
              <div style={{ background: "var(--bg-lavender)", padding: "8px 16px", border: "2px solid var(--border-heavy)", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                FIGMA &#8594; CODE
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div style={{ borderTop: "2px solid var(--border-heavy)", borderBottom: "2px solid var(--border-heavy)", padding: "10px 0", overflow: "hidden", background: "var(--bg-dark)", color: "var(--text-white)" }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 30s linear infinite" }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="font-mono" style={{ margin: "0 32px", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em" }}>
                PIXEL-PERFECT <span style={{ color: "var(--bg-lavender)" }}>&#9670;</span> ANTI-SLOP <span style={{ color: "var(--bg-lavender)" }}>&#9670;</span> RESPONSIVE <span style={{ color: "var(--bg-lavender)" }}>&#9670;</span> SCREENSHOT-VERIFIED <span style={{ color: "var(--bg-lavender)" }}>&#9670;</span> FIGMA-FAITHFUL
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SLIDES GRID ═══════ */}
      <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>

          {/* Row 1: 3 slides */}
          <div className="grid-bento" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, marginBottom: 16 }}>

            {/* Slide: Terminal Demo */}
            <div data-reveal className="card-dark span-full-tablet" style={{ gridColumn: "span 5", padding: "clamp(28px, 3vw, 48px)", minHeight: 400, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#E55" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ED5" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#5E5" }} />
                <span className="font-mono" style={{ marginLeft: 12, fontSize: 10, color: "#666", letterSpacing: "0.05em" }}>terminal</span>
              </div>
              <div className="font-mono" style={{ fontSize: 12, lineHeight: 2.2, flex: 1 }}>
                <div><span style={{ color: "#8BA460" }}>$</span> /figma-faithful</div>
                <div style={{ color: "var(--bg-lavender)" }}>&#9670; UI/UX BOOST activated</div>
                <div style={{ color: "#9A9595" }}>bora meter bronca. manda o link.</div>
                <div style={{ marginTop: 8 }}><span style={{ color: "#8BA460" }}>$</span> figma.com/design/abc...</div>
                <div style={{ color: "#9A9595" }}>&#9654; extracting tokens...</div>
                <div style={{ color: "#9A9595" }}>&#9654; typography: <span style={{ color: "#F5F2ED" }}>Estrella</span> + <span style={{ color: "#F5F2ED" }}>DM Sans</span></div>
                <div style={{ color: "#9A9595" }}>&#9654; palette: <span style={{ color: "#F5F2ED" }}>6 colors</span> &#8594; CSS vars</div>
                <div style={{ color: "var(--bg-lavender)", marginTop: 8 }}>&#9670; building 1/5...</div>
                <div style={{ color: "#8BA460" }}>&#10003; 375px screenshot matches</div>
                <div style={{ color: "#8BA460" }}>&#10003; 1440px screenshot matches</div>
              </div>
              <div className="font-mono" style={{ fontSize: 9, color: "#555", marginTop: 16 }}>tip: Alt+V cola screenshots no terminal</div>
            </div>

            {/* Slide: Big typography */}
            <div data-reveal className="delay-1 card-lavender span-full-tablet" style={{ gridColumn: "span 4", padding: "clamp(28px, 3vw, 48px)", minHeight: 400, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div className="circle-deco" style={{ position: "absolute", width: 180, height: 180, background: "var(--bg-lavender-dark)", top: -30, right: -30, opacity: 0.3 }} />
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--bg-dark)", opacity: 0.5, marginBottom: 16 }}>WHAT IT DOES</span>
              <h2 className="font-estrella" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.95, color: "var(--bg-dark)" }}>
                Figma
                <br />
                <span style={{ fontStyle: "italic" }}>to</span>
                <br />
                Code
              </h2>
              <p style={{ marginTop: 20, fontSize: 14, color: "var(--bg-dark)", opacity: 0.7, lineHeight: 1.6, maxWidth: 240 }}>
                Every font, color, spacing value — extracted and implemented automatically.
              </p>
            </div>

            {/* Slide: Stats */}
            <div data-reveal className="delay-2 card-brutal span-full-tablet" style={{ gridColumn: "span 3", padding: "clamp(24px, 2vw, 36px)", minHeight: 400, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--text-muted)" }}>BY THE NUMBERS</span>
              <div>
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: 16, marginBottom: 16 }}>
                  <div className="font-estrella" style={{ fontSize: 48, lineHeight: 1 }}>40+</div>
                  <div className="font-mono" style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 4 }}>AI patterns banned</div>
                </div>
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: 16, marginBottom: 16 }}>
                  <div className="font-estrella" style={{ fontSize: 48, lineHeight: 1 }}>12+</div>
                  <div className="font-mono" style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 4 }}>viewports tested</div>
                </div>
                <div>
                  <div className="font-estrella" style={{ fontSize: 48, lineHeight: 1 }}>5</div>
                  <div className="font-mono" style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 4 }}>phase pipeline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: 4 slides */}
          <div className="grid-bento" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, marginBottom: 16 }}>

            {/* Slide: Pipeline */}
            <div data-reveal className="card-brutal" style={{ gridColumn: "span 3", padding: "clamp(24px, 2vw, 36px)", minHeight: 320 }}>
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--text-muted)", display: "block", marginBottom: 24 }}>PIPELINE</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { n: "01", label: "EXTRACT", color: "var(--bg-lavender-dark)" },
                  { n: "02", label: "IMPLEMENT", color: "var(--olive)" },
                  { n: "03", label: "SCREENSHOT", color: "var(--burnt)" },
                  { n: "04", label: "COMPARE", color: "var(--bg-lavender-dark)" },
                  { n: "05", label: "FIX & SHIP", color: "var(--olive)" },
                ].map((s, i) => (
                  <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 4 ? "1px solid var(--border)" : "none" }}>
                    <span className="font-mono" style={{ fontSize: 10, color: s.color, fontWeight: 700, width: 20 }}>{s.n}</span>
                    <span className="font-display" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", color: s.color }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="font-mono" style={{ marginTop: 16, fontSize: 9, color: "var(--text-muted)", letterSpacing: "0.2em", textAlign: "center" }}>LOOP UNTIL PERFECT</div>
            </div>

            {/* Slide: Banned */}
            <div data-reveal className="delay-1 card-brutal" style={{ gridColumn: "span 3", padding: "clamp(24px, 2vw, 36px)", minHeight: 320 }}>
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--burnt)", display: "block", marginBottom: 20 }}>&#10005; BANNED</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["Inter / Roboto", "Purple gradients", "3 identical cards", "Glassmorphism", "Emoji as icons", "Uniform radius"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--burnt)", fontSize: 11, fontWeight: 700 }}>&#10005;</span>
                    <span className="font-mono" style={{ fontSize: 11, color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide: Quote */}
            <div data-reveal="scale" className="delay-2 card-lavender" style={{ gridColumn: "span 3", padding: "clamp(28px, 3vw, 44px)", minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <blockquote className="font-estrella" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", lineHeight: 1.15, color: "var(--bg-dark)" }}>
                &ldquo;If it looks
                <br />like AI made it,
                <br />
                <span style={{ color: "var(--bg-lavender-dark)" }}>we failed.&rdquo;</span>
              </blockquote>
              <p className="font-mono" style={{ marginTop: 20, fontSize: 9, letterSpacing: "0.25em", color: "var(--bg-dark)", opacity: 0.4 }}>
                THE ONLY RULE
              </p>
            </div>

            {/* Slide: Screenshot comparison */}
            <div data-reveal className="delay-3 card-dark" style={{ gridColumn: "span 3", padding: "clamp(24px, 2vw, 36px)", minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--bg-lavender)" }}>SCREENSHOT LOOP</span>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 12, marginTop: 20 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ flex: 1, background: "var(--bg-lavender)", border: "1px solid #333", height: 80, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <span className="font-mono" style={{ fontSize: 8, color: "var(--bg-dark)", letterSpacing: "0.1em" }}>FIGMA</span>
                    <div style={{ position: "absolute", top: 4, left: 4, display: "flex", gap: 2 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#666" }} />
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#666" }} />
                    </div>
                  </div>
                  <div style={{ flex: 1, background: "#222", border: "1px solid #333", height: 80, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <span className="font-mono" style={{ fontSize: 8, color: "#888", letterSpacing: "0.1em" }}>BUILD</span>
                    <div style={{ position: "absolute", top: 4, left: 4, display: "flex", gap: 2 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#666" }} />
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#666" }} />
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span className="font-mono" style={{ fontSize: 10, color: "#8BA460" }}>&#10003; 98% match</span>
                </div>
                <div style={{ display: "flex", gap: 6, justifyContent: "center", alignItems: "flex-end", marginTop: 8 }}>
                  <div style={{ width: 16, height: 28, border: "1px solid #444", borderRadius: 2 }} />
                  <div style={{ width: 24, height: 20, border: "1px solid #444", borderRadius: 2 }} />
                  <div style={{ width: 36, height: 22, border: "1px solid #444", borderRadius: 2 }} />
                  <div style={{ width: 48, height: 24, border: "1px solid #444", borderRadius: 2 }} />
                </div>
                <div className="font-mono" style={{ fontSize: 9, color: "#555", textAlign: "center" }}>375 &bull; 768 &bull; 1024 &bull; 1440</div>
              </div>
            </div>
          </div>

          {/* Row 3: 2 wide slides */}
          <div className="grid-bento" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, marginBottom: 16 }}>

            {/* Slide: Features */}
            <div data-reveal className="card-brutal span-full-tablet" style={{ gridColumn: "span 7", padding: "clamp(32px, 4vw, 56px)", minHeight: 300, position: "relative", overflow: "hidden" }}>
              <div className="circle-deco" style={{ position: "absolute", width: 200, height: 200, background: "var(--bg-lavender-light)", top: -60, right: -40, opacity: 0.4 }} />
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--text-muted)", position: "relative", zIndex: 2 }}>FEATURES</span>
              <h2 className="font-estrella" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1, marginTop: 16, marginBottom: 32, position: "relative", zIndex: 2 }}>
                Not another
                <br />code generator.
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px", position: "relative", zIndex: 2 }}>
                {[
                  "Figma token extraction",
                  "Mobile-first responsive",
                  "Screenshot verification",
                  "Color theory validation",
                  "Animation choreography",
                  "Accessibility checks",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 6, height: 6, background: "var(--bg-lavender-dark)", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide: Mode B */}
            <div data-reveal className="delay-1 card-lavender span-full-tablet" style={{ gridColumn: "span 5", padding: "clamp(32px, 3vw, 48px)", minHeight: 300, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div className="circle-deco" style={{ position: "absolute", width: 120, height: 120, background: "var(--bg-white)", bottom: -30, left: -30, opacity: 0.5 }} />
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--bg-dark)", opacity: 0.5 }}>MODE B</span>
              <h3 className="font-estrella" style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1, marginTop: 12, marginBottom: 16, color: "var(--bg-dark)" }}>
                No Figma?
                <br />No problem.
              </h3>
              <p style={{ fontSize: 14, color: "var(--bg-dark)", opacity: 0.7, lineHeight: 1.6 }}>
                Guided visual design with live screenshots. React to real implementations, not static mockups.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" }}>
                <div style={{ padding: "6px 12px", border: "1.5px solid var(--bg-dark)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", background: "var(--bg-white)" }}>guided</div>
                <div style={{ padding: "6px 12px", border: "1.5px solid var(--bg-dark)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", background: "var(--bg-white)" }}>interactive</div>
                <div style={{ padding: "6px 12px", border: "1.5px solid var(--bg-dark)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", background: "var(--bg-white)" }}>visual</div>
              </div>
            </div>
          </div>

          {/* Row 4: CTA */}
          <div className="grid-bento" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}>

            {/* CTA dark */}
            <div data-reveal className="card-dark span-full-tablet" style={{ gridColumn: "span 8", padding: "clamp(32px, 4vw, 56px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
              <div>
                <h3 className="font-estrella" style={{ fontSize: "clamp(24px, 3vw, 40px)", lineHeight: 1.1 }}>
                  Ready to build
                  <br />something <span style={{ color: "var(--bg-lavender)" }}>real</span>?
                </h3>
                <p style={{ color: "#666", fontSize: 14, marginTop: 8 }}>One command. Zero setup drama.</p>
              </div>
              <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--bg-lavender)", color: "var(--bg-dark)", padding: "14px 40px", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", border: "2px solid var(--bg-lavender)", transition: "all 0.2s" }}>
                Get the Skill
              </a>
            </div>

            {/* Quick start */}
            <div data-reveal className="delay-1 card-brutal span-full-tablet" style={{ gridColumn: "span 4", padding: "clamp(24px, 3vw, 40px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.2em", marginBottom: 16 }}>QUICK START</span>
              <div style={{ background: "var(--bg-dark)", border: "2px solid var(--border-heavy)", padding: "14px 20px" }}>
                <span className="font-mono" style={{ fontSize: 13, color: "#F5F2ED" }}>
                  <span style={{ color: "#8BA460" }}>$</span> /figma-faithful
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer style={{ borderTop: "2px solid var(--border-heavy)", padding: "24px clamp(20px, 4vw, 60px)", maxWidth: 1400, margin: "0 auto", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>
          2026 UI/UX BOOST &mdash; built for humans who design
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA460", animation: "pulse-dot 2s ease-in-out infinite" }} />
          <span className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>SKILL ACTIVE</span>
        </div>
      </footer>
    </div>
  );
}
