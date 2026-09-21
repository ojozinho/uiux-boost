"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/ModelViewer").then((m) => m.ModelViewer), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor").then((m) => m.CustomCursor), { ssr: false });

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches || "ontouchstart" in window);
  }, []);
  return isTouch;
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const run = () => document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    run();
    const mo = new MutationObserver(run);
    mo.observe(document.body, { childList: true, subtree: true });

    const handleScroll = () => setHeaderVisible(window.scrollY > 100);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });

    return () => { observer.disconnect(); mo.disconnect(); window.removeEventListener("scroll", handleScroll); window.removeEventListener("mousemove", handleMouse); };
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("/figma-faithful");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grain" style={{ minHeight: "100vh" }}>
      {!isTouch && <CustomCursor />}
      <ModelViewer />

      {/* ═══ STICKY HEADER ═══ */}
      <header
        className="header-blur"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 clamp(20px, 4vw, 60px)",
          height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
          transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.15em" }}>UI/UX BOOST</span>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a href="#features" style={{ fontSize: 12, color: "var(--text-secondary)", textDecoration: "none", letterSpacing: "0.05em" }}>Features</a>
          <a href="#install" style={{ fontSize: 12, color: "var(--text-secondary)", textDecoration: "none", letterSpacing: "0.05em" }}>Install</a>
          <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none", fontWeight: 600, letterSpacing: "0.05em" }}>GitHub</a>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

        {/* Radial glow — follows mouse */}
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: `translate(calc(-50% + ${mousePos.x * 2}px), calc(-50% + ${mousePos.y * 2}px))`, width: 700, height: 700, background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)", zIndex: 0, pointerEvents: "none", transition: "transform 0.3s ease-out" }} />

        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px clamp(20px, 4vw, 60px)", position: "relative", zIndex: 10 }}>
          <span className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.15em" }}>UI/UX BOOST</span>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em" }}>2026</span>
            <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" className="font-mono" style={{ fontSize: 10, color: "var(--text-secondary)", textDecoration: "none" }}>GITHUB &#8599;</a>
          </div>
        </nav>

        {/* Hero content */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 clamp(20px, 4vw, 60px)", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", maxWidth: 900 }}>
            <div data-reveal style={{ marginBottom: 20 }}>
              <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--accent-dim)" }}>CLAUDE CODE SKILL</span>
            </div>

            <div data-reveal className="delay-1">
              <img src="/logo.png" alt="UI/UX BOOST" style={{ width: "clamp(300px, 55vw, 750px)", height: "auto", margin: "0 auto", display: "block", filter: "brightness(1.1) contrast(1.1)", animation: "glow-pulse 4s ease-in-out infinite", transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`, transition: "transform 0.2s ease-out" }} />
            </div>

            <p data-reveal className="delay-2" style={{ fontSize: "clamp(15px, 1.6vw, 19px)", color: "var(--text-secondary)", marginTop: 28, lineHeight: 1.7, maxWidth: 500, margin: "28px auto 0" }}>
              Pixel-perfect from Figma. Fully responsive.
              <br />
              Screenshot-verified. <span style={{ color: "var(--accent)" }}>Zero AI slop.</span>
            </p>

            {/* CTA Buttons */}
            <div data-reveal className="delay-3" style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
              <a href="#install" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "var(--bg)", padding: "14px 32px", fontWeight: 600, fontSize: 14, letterSpacing: "0.05em", textDecoration: "none", border: "none", transition: "all 0.3s", cursor: "pointer" }}>
                Get Started
                <span style={{ fontSize: 16 }}>&#8595;</span>
              </a>
              <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--text-primary)", padding: "14px 32px", fontWeight: 500, fontSize: 14, letterSpacing: "0.05em", textDecoration: "none", border: "1px solid var(--border-accent)", transition: "all 0.3s" }}>
                Source Code &#8599;
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ textAlign: "center", paddingBottom: 32, position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "float 3s ease-in-out infinite" }}>
            <span className="font-mono" style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--text-muted)" }}>SCROLL</span>
            <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, var(--text-muted), transparent)" }} />
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "12px 0", overflow: "hidden", background: "var(--bg)" }}>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 35s linear infinite" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="font-mono" style={{ margin: "0 40px", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: "var(--text-muted)" }}>
              PIXEL-PERFECT <span style={{ color: "var(--accent-dim)" }}>&#9670;</span> ANTI-SLOP <span style={{ color: "var(--accent-dim)" }}>&#9670;</span> RESPONSIVE <span style={{ color: "var(--accent-dim)" }}>&#9670;</span> SCREENSHOT-VERIFIED <span style={{ color: "var(--accent-dim)" }}>&#9670;</span> FIGMA-FAITHFUL
            </span>
          ))}
        </div>
      </div>

      {/* ═══ GIANT TYPOGRAPHY SECTION — Opium style ═══ */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0", overflow: "hidden", position: "relative" }}>
        {/* Radial glow behind */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Full-width stretched text lines */}
        <div data-reveal style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <div className="font-display" style={{ fontSize: "clamp(60px, 12vw, 180px)", fontWeight: 800, lineHeight: 0.85, letterSpacing: "-0.03em", textTransform: "uppercase", color: "var(--text-primary)" }}>
            SCREENSHOT
          </div>
          <div className="font-display" style={{ fontSize: "clamp(60px, 12vw, 180px)", fontWeight: 800, lineHeight: 0.85, letterSpacing: "-0.03em", textTransform: "uppercase", color: "transparent", WebkitTextStroke: "1px var(--text-primary)" }}>
            VERIFIED
          </div>
        </div>

        {/* Ticker band */}
        <div style={{ marginTop: 40, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "8px 0", overflow: "hidden", background: "var(--text-primary)", color: "var(--bg)" }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 20s linear infinite reverse" }}>
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="font-mono" style={{ margin: "0 24px", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em" }}>
                UI/UX BOOST &#9670; ANTAGONIST TO AI SLOP &#9670; PIXEL PERFECT &#9670; 2026
              </span>
            ))}
          </div>
        </div>

        {/* Second text block */}
        <div data-reveal className="delay-1" style={{ textAlign: "center", marginTop: 40, position: "relative", zIndex: 2 }}>
          <div className="font-display" style={{ fontSize: "clamp(60px, 12vw, 180px)", fontWeight: 800, lineHeight: 0.85, letterSpacing: "-0.03em", textTransform: "uppercase", color: "transparent", WebkitTextStroke: "1px var(--accent-dim)" }}>
            FIGMA
          </div>
          <div className="font-estrella" style={{ fontSize: "clamp(50px, 10vw, 150px)", lineHeight: 0.9, color: "var(--accent)", marginTop: -10 }}>
            to Code
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" style={{ padding: "clamp(80px, 10vw, 140px) clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div data-reveal style={{ marginBottom: 60 }}>
            <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--accent-dim)" }}>WHAT IT DOES</span>
            <h2 className="font-estrella" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.95, marginTop: 12 }}>
              Not another
              <br /><span className="text-gradient">code generator.</span>
            </h2>
          </div>

          {/* Feature cards — horizontal scroll on mobile, grid on desktop */}
          <div className="scroll-x grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>

            {/* Card: Terminal */}
            <div data-reveal className="card" style={{ padding: "clamp(24px, 3vw, 40px)", minHeight: 360, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)" }} />
                <span className="font-mono" style={{ marginLeft: 8, fontSize: 9, color: "var(--text-muted)" }}>terminal</span>
              </div>
              <div className="font-mono" style={{ fontSize: 11, lineHeight: 2.2, flex: 1 }}>
                <div><span style={{ color: "var(--green)" }}>$</span> /figma-faithful</div>
                <div style={{ color: "var(--accent)" }}>&#9670; UI/UX BOOST activated</div>
                <div style={{ color: "var(--text-muted)" }}>bora meter bronca. manda o link.</div>
                <div style={{ marginTop: 6 }}><span style={{ color: "var(--green)" }}>$</span> figma.com/design/abc...</div>
                <div style={{ color: "var(--text-muted)" }}>&#9654; extracting tokens...</div>
                <div style={{ color: "var(--text-muted)" }}>&#9654; typography: <span style={{ color: "var(--text-primary)" }}>Estrella + DM Sans</span></div>
                <div style={{ color: "var(--accent)", marginTop: 6 }}>&#9670; building 1/5...</div>
                <div style={{ color: "var(--green)" }}>&#10003; 375px matches</div>
                <div style={{ color: "var(--green)" }}>&#10003; 1440px matches</div>
              </div>
            </div>

            {/* Card: Screenshot Loop */}
            <div data-reveal className="delay-1 card" style={{ padding: "clamp(24px, 3vw, 40px)", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--accent-dim)" }}>SCREENSHOT LOOP</span>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: 22, marginTop: 12 }}>Build. Capture. Compare.</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 12, lineHeight: 1.7 }}>
                  Every viewport is screenshotted and compared against your Figma. Differences are caught, fixed, and re-verified.
                </p>
              </div>
              <div style={{ marginTop: 24 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ flex: 1, background: "var(--accent-dim)", border: "1px solid var(--border)", height: 70, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="font-mono" style={{ fontSize: 8, color: "var(--text-primary)", letterSpacing: "0.15em" }}>FIGMA</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", color: "var(--text-muted)", fontSize: 14 }}>&#8644;</div>
                  <div style={{ flex: 1, background: "var(--surface)", border: "1px solid var(--border)", height: 70, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="font-mono" style={{ fontSize: 8, color: "var(--text-muted)", letterSpacing: "0.15em" }}>BUILD</span>
                  </div>
                </div>
                <div className="font-mono" style={{ textAlign: "center", fontSize: 11, color: "var(--green)", marginTop: 10 }}>&#10003; 98% pixel match</div>
              </div>
            </div>

            {/* Card: Anti-slop */}
            <div data-reveal className="delay-2 card" style={{ padding: "clamp(24px, 3vw, 40px)", minHeight: 360, display: "flex", flexDirection: "column" }}>
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--red)" }}>ANTI-SLOP ENGINE</span>
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: 22, marginTop: 12 }}>40+ AI patterns banned.</h3>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                {["Inter / Roboto", "Purple gradients", "3 identical cards", "Glassmorphism", "Emoji as icons", "Uniform radius", "Stock hero images"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderLeft: "2px solid var(--red)" }}>
                    <span style={{ color: "var(--red)", fontSize: 10, fontWeight: 700 }}>&#10005;</span>
                    <span className="font-mono" style={{ fontSize: 11, color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PIPELINE ═══ */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>

            {/* Left: title */}
            <div data-reveal>
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--accent-dim)" }}>THE PIPELINE</span>
              <h2 className="font-estrella" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, marginTop: 12 }}>
                How the
                <br /><span className="text-gradient">magic works.</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, marginTop: 20, lineHeight: 1.7, maxWidth: 400 }}>
                Five phases, one loop. Every step is verified with real screenshots before moving forward.
              </p>
            </div>

            {/* Right: steps */}
            <div>
              {[
                { n: "01", label: "EXTRACT", desc: "Pull every token from Figma", color: "var(--accent)" },
                { n: "02", label: "IMPLEMENT", desc: "Build mobile-first with your stack", color: "var(--green)" },
                { n: "03", label: "SCREENSHOT", desc: "Capture at every viewport", color: "var(--gold)" },
                { n: "04", label: "COMPARE", desc: "Pixel-diff against Figma source", color: "var(--accent)" },
                { n: "05", label: "FIX & SHIP", desc: "Correct and deploy", color: "var(--green)" },
              ].map((s, i) => (
                <div data-reveal key={s.n} className={`delay-${i + 1}`} style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "20px 0", borderBottom: i < 4 ? "1px solid var(--border)" : "none" }}>
                  <span className="font-mono" style={{ fontSize: 11, color: s.color, fontWeight: 700, marginTop: 2 }}>{s.n}</span>
                  <div>
                    <span className="font-display" style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", color: s.color }}>{s.label}</span>
                    <p className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TICKER BAND ═══ */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "8px 0", overflow: "hidden", background: "var(--accent)", color: "var(--bg)" }}>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 25s linear infinite" }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="font-mono" style={{ margin: "0 24px", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em" }}>
              EXTRACT &#9670; IMPLEMENT &#9670; SCREENSHOT &#9670; COMPARE &#9670; SHIP
            </span>
          ))}
        </div>
      </div>

      {/* ═══ QUOTE ═══ */}
      <section style={{ padding: "clamp(100px, 12vw, 180px) clamp(20px, 4vw, 60px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <blockquote data-reveal="scale" className="font-display" style={{ fontSize: "clamp(40px, 7vw, 100px)", lineHeight: 0.95, fontWeight: 800, textTransform: "uppercase" }}>
            &ldquo;If it looks like
            <br />AI made it,
            <br /><span style={{ color: "var(--accent)", animation: "glow-pulse 4s ease-in-out infinite" }}>we failed.&rdquo;</span>
          </blockquote>
          <p data-reveal className="delay-2 font-mono" style={{ marginTop: 32, fontSize: 10, letterSpacing: "0.3em", color: "var(--text-muted)" }}>
            THE ONLY RULE THAT MATTERS
          </p>
        </div>
      </section>

      {/* ═══ MORE FEATURES ═══ */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid-responsive" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>

            {[
              { title: "Figma Extraction", desc: "Every font, color, spacing value and asset pulled automatically.", icon: "&#9635;" },
              { title: "12+ Viewports", desc: "Stress-tested from 320px to 2560px. Fluid in between.", icon: "&#9641;" },
              { title: "Mode B", desc: "No Figma? Guided design with live previews and real-time decisions.", icon: "&#9673;" },
              { title: "Smart Animations", desc: "Scroll, hover, transitions — choreographed and staggered.", icon: "&#9656;" },
            ].map((f, i) => (
              <div data-reveal key={f.title} className={`delay-${i + 1} card`} style={{ padding: "clamp(24px, 2vw, 36px)" }}>
                <div style={{ fontSize: 28, color: "var(--accent)", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: f.icon }} />
                <h4 className="font-display" style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{f.title}</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTALL ═══ */}
      <section id="install" style={{ padding: "clamp(80px, 10vw, 140px) clamp(20px, 4vw, 60px)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>

          <span data-reveal className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--accent-dim)" }}>GET STARTED</span>
          <h2 data-reveal className="delay-1 font-estrella" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, marginTop: 12 }}>
            One command.
            <br /><span className="text-gradient">Zero drama.</span>
          </h2>
          <p data-reveal className="delay-2" style={{ color: "var(--text-secondary)", fontSize: 15, marginTop: 20, lineHeight: 1.7 }}>
            Copy the skill folder to <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: 13 }}>~/.claude/skills/</span> and run the command.
          </p>

          {/* Install command */}
          <div data-reveal className="delay-3" style={{ marginTop: 40 }}>
            <div
              className={`copy-btn ${copied ? "copied" : ""}`}
              onClick={copyCommand}
              style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "var(--bg-card)", border: "1px solid var(--border)", padding: "14px clamp(16px, 4vw, 32px)", cursor: "pointer", position: "relative", maxWidth: "100%" }}
            >
              <span className="copied-toast font-mono">Copied!</span>
              <span className="font-mono" style={{ fontSize: 15 }}>
                <span style={{ color: "var(--green)" }}>$</span> /figma-faithful
              </span>
              <span style={{ color: "var(--text-muted)", fontSize: 12, borderLeft: "1px solid var(--border)", paddingLeft: 16 }}>
                {copied ? "&#10003;" : "Copy"}
              </span>
            </div>
          </div>

          {/* Download link */}
          <div data-reveal className="delay-4" style={{ marginTop: 24, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://github.com/ojozinho/uiux-boost/archive/refs/heads/main.zip" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--accent)", fontSize: 14, textDecoration: "none", fontWeight: 500, transition: "opacity 0.3s" }}>
              &#8595; Download ZIP
            </a>
            <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", fontSize: 14, textDecoration: "none", transition: "opacity 0.3s" }}>
              View on GitHub &#8599;
            </a>
          </div>

          {/* Quick install steps */}
          <div data-reveal className="delay-5" style={{ marginTop: 48, textAlign: "left", maxWidth: 500, margin: "48px auto 0" }}>
            <div className="font-mono" style={{ fontSize: "clamp(10px, 2.5vw, 12px)", lineHeight: 2.2, color: "var(--text-secondary)", background: "var(--bg-card)", border: "1px solid var(--border)", padding: "clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)", overflowX: "auto", wordBreak: "break-all" }}>
              <div style={{ color: "var(--text-muted)", marginBottom: 8 }}># clone the skill</div>
              <div><span style={{ color: "var(--green)" }}>$</span> git clone https://github.com/ojozinho/uiux-boost</div>
              <div><span style={{ color: "var(--green)" }}>$</span> cp -r uiux-boost/skills/figma-faithful ~/.claude/skills/</div>
              <div style={{ color: "var(--text-muted)", marginTop: 8 }}># open claude code and run</div>
              <div><span style={{ color: "var(--green)" }}>$</span> /figma-faithful</div>
              <div style={{ color: "var(--accent)", marginTop: 8 }}>&#9670; UI/UX BOOST activated</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "24px clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.05em" }}>
            2026 UI/UX BOOST &mdash; built for humans who design
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", animation: "pulse-glow 2s ease-in-out infinite" }} />
            <span className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)" }}>SKILL ACTIVE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
