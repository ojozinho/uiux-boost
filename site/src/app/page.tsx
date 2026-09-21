"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/ModelViewer").then((m) => m.ModelViewer), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor").then((m) => m.CustomCursor), { ssr: false });


const t = {
  en: {
    skill: "CLAUDE CODE SKILL",
    tagline: ["Turns Figma into code.", "Checks every pixel with screenshots."],
    slop: "No AI look.",
    cta: "Install",
    source: "Source Code",
    scroll: "SCROLL",
    whatItDoes: "FEATURES",
    notAnother: "What it",
    codeGen: "actually does.",
    terminal: "terminal",
    activated: "UI/UX BOOST activated",
    sendLink: "send the figma link.",
    extracting: "reading tokens...",
    typography: "fonts:",
    building: "building 1/5...",
    matches375: "375px ok",
    matches1440: "1440px ok",
    screenshotLoop: "SCREENSHOT LOOP",
    buildCapture: "Build. Check. Fix.",
    screenshotDesc: "Takes screenshots at every screen size and compares them to your Figma. Fixes what doesn't match.",
    pixelMatch: "98% match",
    antiSlop: "AI PATTERN FILTER",
    patternsBanned: "Blocks 40+ AI patterns.",
    pipeline: "HOW IT WORKS",
    howMagic: "Step by",
    magicWorks: "step.",
    pipelineDesc: "Five steps. Each one is checked with screenshots before moving on.",
    steps: [
      { n: "01", label: "EXTRACT", desc: "Reads fonts, colors, spacing from Figma" },
      { n: "02", label: "BUILD", desc: "Writes the code, mobile-first" },
      { n: "03", label: "SCREENSHOT", desc: "Takes screenshots at each size" },
      { n: "04", label: "COMPARE", desc: "Compares screenshots to Figma" },
      { n: "05", label: "FIX & SHIP", desc: "Fixes differences and deploys" },
    ],
    quote: "IF IT LOOKS LIKE AI MADE IT, IT'S WRONG.",
    quoteRule: "",
    features: [
      { title: "Figma Reading", desc: "Pulls fonts, colors, spacing, and assets from your Figma file." },
      { title: "All Screen Sizes", desc: "Tested from 320px to 2560px. Works on everything." },
      { title: "No Figma Mode", desc: "Don't have Figma? It guides you through building from scratch." },
      { title: "Animations", desc: "Adds scroll, hover, and transition effects automatically." },
    ],
    getStarted: "INSTALL",
    oneCommand: "One command.",
    zeroDrama: "That's it.",
    installDesc: "Copy the skill folder to",
    andRun: "and run it.",
    copy: "Copy",
    copied: "Copied!",
    downloadZip: "Download ZIP",
    viewGithub: "View on GitHub",
    cloneComment: "# clone the repo",
    runComment: "# open claude code and run",
    footer: "2026 UI/UX BOOST",
    skillActive: "ACTIVE",
  },
  pt: {
    skill: "SKILL DO CLAUDE CODE",
    tagline: ["Transforma Figma em código.", "Confere cada pixel com screenshots."],
    slop: "Sem cara de IA.",
    cta: "Instalar",
    source: "Código Fonte",
    scroll: "ROLAR",
    whatItDoes: "FUNCIONALIDADES",
    notAnother: "O que ele",
    codeGen: "faz de verdade.",
    terminal: "terminal",
    activated: "UI/UX BOOST ativado",
    sendLink: "manda o link do figma.",
    extracting: "lendo tokens...",
    typography: "fontes:",
    building: "construindo 1/5...",
    matches375: "375px ok",
    matches1440: "1440px ok",
    screenshotLoop: "LOOP DE SCREENSHOT",
    buildCapture: "Constrói. Confere. Corrige.",
    screenshotDesc: "Tira screenshot em cada tamanho de tela e compara com o Figma. Corrige o que não bate.",
    pixelMatch: "98% match",
    antiSlop: "FILTRO DE PADRÃO IA",
    patternsBanned: "Bloqueia 40+ padrões de IA.",
    pipeline: "COMO FUNCIONA",
    howMagic: "Passo a",
    magicWorks: "passo.",
    pipelineDesc: "Cinco etapas. Cada uma é conferida com screenshots antes de seguir.",
    steps: [
      { n: "01", label: "EXTRAIR", desc: "Lê fontes, cores, espaçamentos do Figma" },
      { n: "02", label: "CONSTRUIR", desc: "Escreve o código, mobile-first" },
      { n: "03", label: "SCREENSHOT", desc: "Tira screenshot em cada tamanho" },
      { n: "04", label: "COMPARAR", desc: "Compara screenshots com o Figma" },
      { n: "05", label: "CORRIGIR", desc: "Corrige diferenças e faz deploy" },
    ],
    quote: "SE PARECE QUE IA FEZ, TÁ ERRADO.",
    quoteRule: "",
    features: [
      { title: "Leitura do Figma", desc: "Puxa fontes, cores, espaçamentos e assets do seu arquivo." },
      { title: "Todos os Tamanhos", desc: "Testado de 320px a 2560px. Funciona em tudo." },
      { title: "Sem Figma", desc: "Não tem Figma? Ele te guia pra construir do zero." },
      { title: "Animações", desc: "Adiciona efeitos de scroll, hover e transição automaticamente." },
    ],
    getStarted: "INSTALAR",
    oneCommand: "Um comando.",
    zeroDrama: "Só isso.",
    installDesc: "Copie a pasta da skill para",
    andRun: "e rode.",
    copy: "Copiar",
    copied: "Copiado!",
    downloadZip: "Baixar ZIP",
    viewGithub: "Ver no GitHub",
    cloneComment: "# clonar o repo",
    runComment: "# abrir claude code e rodar",
    footer: "2026 UI/UX BOOST",
    skillActive: "ATIVA",
  },
} as const;

type Lang = keyof typeof t;

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches || "ontouchstart" in window);
  }, []);
  return isTouch;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [copied, setCopied] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const s = t[lang];

  useEffect(() => {
    const userLang = navigator.language || "";
    if (userLang.startsWith("pt")) setLang("pt");
  }, []);

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
    const blockContext = (e: MouseEvent) => e.preventDefault();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    document.addEventListener("contextmenu", blockContext);

    return () => { observer.disconnect(); mo.disconnect(); window.removeEventListener("scroll", handleScroll); window.removeEventListener("mousemove", handleMouse); document.removeEventListener("contextmenu", blockContext); };
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("/figma-faithful");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stepColors = ["var(--accent)", "var(--green)", "var(--gold)", "var(--accent)", "var(--green)"];
  const icons = ["▣", "┙", "◉", "▸"];

  const LangSwitch = ({ size = 10 }: { size?: number }) => (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      <button
        onClick={() => setLang("en")}
        className="font-mono"
        style={{
          fontSize: size, letterSpacing: "0.08em", background: "none", border: "none",
          color: lang === "en" ? "var(--text-primary)" : "var(--text-muted)",
          fontWeight: lang === "en" ? 700 : 400, padding: "4px 6px",
          textDecoration: lang === "en" ? "underline" : "none",
          textUnderlineOffset: 3,
        }}
      >EN</button>
      <span style={{ color: "var(--text-muted)", fontSize: size }}>/</span>
      <button
        onClick={() => setLang("pt")}
        className="font-mono"
        style={{
          fontSize: size, letterSpacing: "0.08em", background: "none", border: "none",
          color: lang === "pt" ? "var(--text-primary)" : "var(--text-muted)",
          fontWeight: lang === "pt" ? 700 : 400, padding: "4px 6px",
          textDecoration: lang === "pt" ? "underline" : "none",
          textUnderlineOffset: 3,
        }}
      >PT</button>
    </div>
  );

  return (
    <div className="grain" style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {!isTouch && <CustomCursor />}
      <ModelViewer />

      {/* ═══ STICKY HEADER ═══ */}
      <header
        className="header-blur"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 clamp(16px, 4vw, 60px)",
          height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
          transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.15em" }}>UI/UX BOOST</span>
        <div style={{ display: "flex", gap: "clamp(12px, 3vw, 24px)", alignItems: "center" }}>
          <a href="#features" className="hide-mobile" style={{ fontSize: 12, color: "var(--text-secondary)", textDecoration: "none", letterSpacing: "0.05em" }}>Features</a>
          <a href="#install" className="hide-mobile" style={{ fontSize: 12, color: "var(--text-secondary)", textDecoration: "none", letterSpacing: "0.05em" }}>Install</a>
          <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none", fontWeight: 600, letterSpacing: "0.05em" }}>GitHub</a>
          <LangSwitch size={10} />
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: `translate(calc(-50% + ${mousePos.x * 2}px), calc(-50% + ${mousePos.y * 2}px))`, width: "min(700px, 90vw)", height: "min(700px, 90vw)", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)", zIndex: 0, pointerEvents: "none", transition: "transform 0.3s ease-out" }} />

        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px clamp(16px, 4vw, 60px)", position: "relative", zIndex: 10 }}>
          <span className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.15em" }}>UI/UX BOOST</span>
          <div style={{ display: "flex", gap: "clamp(12px, 3vw, 20px)", alignItems: "center" }}>
            <LangSwitch size={10} />
            <span className="font-mono hide-mobile" style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em" }}>2026</span>
            <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" className="font-mono" style={{ fontSize: 10, color: "var(--text-secondary)", textDecoration: "none" }}>GITHUB &#8599;</a>
          </div>
        </nav>

        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 clamp(16px, 4vw, 60px)", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", maxWidth: 900, width: "100%" }}>
            <div data-reveal style={{ marginBottom: 20 }}>
              <span className="font-mono" style={{ fontSize: "clamp(9px, 2vw, 11px)", letterSpacing: "0.3em", color: "var(--accent-dim)" }}>{s.skill}</span>
            </div>

            <div data-reveal className="delay-1">
              <img src="/logo.png" alt="UI/UX BOOST" style={{ width: "clamp(240px, 55vw, 750px)", maxWidth: "100%", height: "auto", margin: "0 auto", display: "block", filter: "brightness(1.1) contrast(1.1)", animation: "glow-pulse 4s ease-in-out infinite", transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`, transition: "transform 0.2s ease-out" }} />
            </div>

            <p data-reveal className="delay-2" style={{ fontSize: "clamp(14px, 1.6vw, 19px)", color: "var(--text-secondary)", marginTop: 28, lineHeight: 1.7, maxWidth: 500, margin: "28px auto 0", padding: "0 8px" }}>
              {s.tagline[0]}
              <br />
              {s.tagline[1]} <span style={{ color: "var(--accent)" }}>{s.slop}</span>
            </p>

            <div data-reveal className="delay-3" style={{ display: "flex", gap: "clamp(8px, 2vw, 16px)", justifyContent: "center", marginTop: "clamp(24px, 4vw, 40px)", flexWrap: "wrap" }}>
              <a href="#install" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "var(--bg)", padding: "12px clamp(20px, 4vw, 32px)", fontWeight: 600, fontSize: "clamp(12px, 1.5vw, 14px)", letterSpacing: "0.05em", textDecoration: "none", border: "none", transition: "all 0.3s" }}>
                {s.cta} <span style={{ fontSize: 16 }}>&#8595;</span>
              </a>
              <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--text-primary)", padding: "12px clamp(20px, 4vw, 32px)", fontWeight: 500, fontSize: "clamp(12px, 1.5vw, 14px)", letterSpacing: "0.05em", textDecoration: "none", border: "1px solid var(--border-accent)", transition: "all 0.3s" }}>
                {s.source} &#8599;
              </a>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", paddingBottom: 32, position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "float 3s ease-in-out infinite" }}>
            <span className="font-mono" style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--text-muted)" }}>{s.scroll}</span>
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

      {/* ═══ GIANT TYPOGRAPHY — Opium style ═══ */}
      <section style={{ padding: "clamp(40px, 8vw, 100px) 0", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(800px, 100vw)", height: 400, background: "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div data-reveal style={{ textAlign: "center", position: "relative", zIndex: 2, padding: "0 clamp(8px, 2vw, 20px)" }}>
          <div className="font-display" style={{ fontSize: "clamp(36px, 10vw, 160px)", fontWeight: 800, lineHeight: 0.85, letterSpacing: "-0.04em", textTransform: "uppercase", color: "var(--text-primary)", wordBreak: "break-word" }}>
            SCREENSHOT
          </div>
          <div className="font-display" style={{ fontSize: "clamp(36px, 10vw, 160px)", fontWeight: 800, lineHeight: 0.85, letterSpacing: "-0.04em", textTransform: "uppercase", color: "transparent", WebkitTextStroke: "1px var(--text-primary)", wordBreak: "break-word" }}>
            VERIFIED
          </div>
        </div>

        <div style={{ marginTop: 40, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "8px 0", overflow: "hidden", background: "var(--text-primary)", color: "var(--bg)" }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 20s linear infinite reverse" }}>
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="font-mono" style={{ margin: "0 24px", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em" }}>
                UI/UX BOOST &#9670; ANTAGONIST TO AI SLOP &#9670; PIXEL PERFECT &#9670; 2026
              </span>
            ))}
          </div>
        </div>

        <div data-reveal className="delay-1" style={{ textAlign: "center", marginTop: 40, position: "relative", zIndex: 2, padding: "0 clamp(8px, 2vw, 20px)" }}>
          <div className="font-display" style={{ fontSize: "clamp(36px, 10vw, 160px)", fontWeight: 800, lineHeight: 0.85, letterSpacing: "-0.04em", textTransform: "uppercase", color: "transparent", WebkitTextStroke: "1px var(--accent-dim)", wordBreak: "break-word" }}>
            FIGMA
          </div>
          <div className="font-estrella" style={{ fontSize: "clamp(36px, 8vw, 130px)", lineHeight: 0.9, color: "var(--accent)", marginTop: -10 }}>
            to Code
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" style={{ padding: "clamp(60px, 10vw, 140px) clamp(16px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: "clamp(32px, 5vw, 60px)" }}>
            <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--accent-dim)" }}>{s.whatItDoes}</span>
            <h2 className="font-estrella" style={{ fontSize: "clamp(32px, 6vw, 80px)", lineHeight: 0.95, marginTop: 12 }}>
              {s.notAnother}
              <br /><span className="text-gradient">{s.codeGen}</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Row 1: 2 cards on mobile, 3 on desktop */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 16 }}>

              {/* Card: Terminal */}
              <div data-reveal className="card" style={{ padding: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)" }} />
                  <span className="font-mono" style={{ marginLeft: 8, fontSize: 9, color: "var(--text-muted)" }}>{s.terminal}</span>
                </div>
                <div className="font-mono" style={{ fontSize: "clamp(10px, 1.2vw, 11px)", lineHeight: 2.2, flex: 1 }}>
                  <div><span style={{ color: "var(--green)" }}>$</span> /figma-faithful</div>
                  <div style={{ color: "var(--accent)" }}>&#9670; {s.activated}</div>
                  <div style={{ color: "var(--text-muted)" }}>{s.sendLink}</div>
                  <div style={{ marginTop: 6 }}><span style={{ color: "var(--green)" }}>$</span> figma.com/design/abc...</div>
                  <div style={{ color: "var(--text-muted)" }}>&#9654; {s.extracting}</div>
                  <div style={{ color: "var(--text-muted)" }}>&#9654; {s.typography} <span style={{ color: "var(--text-primary)" }}>Estrella + DM Sans</span></div>
                  <div style={{ color: "var(--accent)", marginTop: 6 }}>&#9670; {s.building}</div>
                  <div style={{ color: "var(--green)" }}>&#10003; {s.matches375}</div>
                  <div style={{ color: "var(--green)" }}>&#10003; {s.matches1440}</div>
                </div>
              </div>

              {/* Card: Screenshot Loop */}
              <div data-reveal className="delay-1 card" style={{ padding: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--accent-dim)" }}>{s.screenshotLoop}</span>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(18px, 2vw, 22px)", marginTop: 12 }}>{s.buildCapture}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "clamp(12px, 1.4vw, 14px)", marginTop: 12, lineHeight: 1.7 }}>
                    {s.screenshotDesc}
                  </p>
                </div>
                <div style={{ marginTop: 24 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{ flex: 1, background: "var(--accent-dim)", border: "1px solid var(--border)", height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="font-mono" style={{ fontSize: 8, color: "var(--text-primary)", letterSpacing: "0.15em" }}>FIGMA</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", color: "var(--text-muted)", fontSize: 14 }}>&#8644;</div>
                    <div style={{ flex: 1, background: "var(--surface)", border: "1px solid var(--border)", height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="font-mono" style={{ fontSize: 8, color: "var(--text-muted)", letterSpacing: "0.15em" }}>BUILD</span>
                    </div>
                  </div>
                  <div className="font-mono" style={{ textAlign: "center", fontSize: 11, color: "var(--green)", marginTop: 10 }}>&#10003; {s.pixelMatch}</div>
                </div>
              </div>

              {/* Card: Anti-slop */}
              <div data-reveal className="delay-2 card" style={{ padding: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column" }}>
                <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--red)" }}>{s.antiSlop}</span>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(18px, 2vw, 22px)", marginTop: 12 }}>{s.patternsBanned}</h3>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                  {["Inter / Roboto", "Purple gradients", "3 identical cards", "Glassmorphism", "Emoji as icons", "Uniform radius", "Stock hero images"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 10px", borderLeft: "2px solid var(--red)" }}>
                      <span style={{ color: "var(--red)", fontSize: 10, fontWeight: 700 }}>&#10005;</span>
                      <span className="font-mono" style={{ fontSize: "clamp(10px, 1.2vw, 11px)", color: "var(--text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PIPELINE ═══ */}
      <section style={{ padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 60px)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(32px, 6vw, 80px)", alignItems: "start" }}>

            <div data-reveal>
              <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--accent-dim)" }}>{s.pipeline}</span>
              <h2 className="font-estrella" style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1, marginTop: 12 }}>
                {s.howMagic}
                <br /><span className="text-gradient">{s.magicWorks}</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, marginTop: 20, lineHeight: 1.7, maxWidth: 400 }}>
                {s.pipelineDesc}
              </p>
            </div>

            <div>
              {s.steps.map((step, i) => (
                <div data-reveal key={step.n} className={`delay-${i + 1}`} style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "16px 0", borderBottom: i < 4 ? "1px solid var(--border)" : "none" }}>
                  <span className="font-mono" style={{ fontSize: 11, color: stepColors[i], fontWeight: 700, marginTop: 2 }}>{step.n}</span>
                  <div>
                    <span className="font-display" style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.08em", color: stepColors[i] }}>{step.label}</span>
                    <p className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>{step.desc}</p>
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
      <section style={{ padding: "clamp(60px, 12vw, 180px) clamp(16px, 4vw, 60px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(600px, 90vw)", height: "min(600px, 90vw)", background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <blockquote data-reveal="scale" className="font-display" style={{ fontSize: "clamp(24px, 5vw, 72px)", lineHeight: 1.05, fontWeight: 800, textTransform: "uppercase" }}>
            {s.quote}
          </blockquote>
        </div>
      </section>

      {/* ═══ MORE FEATURES ═══ */}
      <section style={{ padding: "clamp(40px, 8vw, 100px) clamp(16px, 4vw, 60px)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 16 }}>
            {s.features.map((f, i) => (
              <div data-reveal key={f.title} className={`delay-${i + 1} card`} style={{ padding: "clamp(20px, 2vw, 36px)" }}>
                <div style={{ fontSize: 28, color: "var(--accent)", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: icons[i] }} />
                <h4 className="font-display" style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{f.title}</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTALL ═══ */}
      <section id="install" style={{ padding: "clamp(60px, 10vw, 140px) clamp(16px, 4vw, 60px)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <span data-reveal className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--accent-dim)" }}>{s.getStarted}</span>
          <h2 data-reveal className="delay-1 font-estrella" style={{ fontSize: "clamp(28px, 5vw, 64px)", lineHeight: 1, marginTop: 12 }}>
            {s.oneCommand}
            <br /><span className="text-gradient">{s.zeroDrama}</span>
          </h2>
          <p data-reveal className="delay-2" style={{ color: "var(--text-secondary)", fontSize: "clamp(13px, 1.5vw, 15px)", marginTop: 20, lineHeight: 1.7 }}>
            {s.installDesc} <span className="font-mono" style={{ color: "var(--text-primary)", fontSize: "clamp(11px, 1.3vw, 13px)" }}>~/.claude/skills/</span> {s.andRun}
          </p>

          <div data-reveal className="delay-3" style={{ marginTop: "clamp(24px, 4vw, 40px)" }}>
            <div
              className={`copy-btn ${copied ? "copied" : ""}`}
              onClick={copyCommand}
              style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "var(--bg-card)", border: "1px solid var(--border)", padding: "12px clamp(16px, 3vw, 32px)", cursor: "pointer", position: "relative", maxWidth: "100%" }}
            >
              <span className="copied-toast font-mono">{s.copied}</span>
              <span className="font-mono" style={{ fontSize: "clamp(12px, 1.5vw, 15px)" }}>
                <span style={{ color: "var(--green)" }}>$</span> /figma-faithful
              </span>
              <span style={{ color: "var(--text-muted)", fontSize: 12, borderLeft: "1px solid var(--border)", paddingLeft: 12 }}>
                {copied ? "✓" : s.copy}
              </span>
            </div>
          </div>

          <div data-reveal className="delay-4" style={{ marginTop: 24, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://github.com/ojozinho/uiux-boost/archive/refs/heads/main.zip" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--accent)", fontSize: 14, textDecoration: "none", fontWeight: 500, transition: "opacity 0.3s" }}>
              &#8595; {s.downloadZip}
            </a>
            <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", fontSize: 14, textDecoration: "none", transition: "opacity 0.3s" }}>
              {s.viewGithub} &#8599;
            </a>
          </div>

          <div data-reveal className="delay-5" style={{ marginTop: 48, textAlign: "left", maxWidth: 500, margin: "48px auto 0" }}>
            <div className="font-mono" style={{ fontSize: "clamp(9px, 2vw, 12px)", lineHeight: 2.2, color: "var(--text-secondary)", background: "var(--bg-card)", border: "1px solid var(--border)", padding: "clamp(16px, 3vw, 24px)", overflowX: "auto" }}>
              <div style={{ color: "var(--text-muted)", marginBottom: 8 }}>{s.cloneComment}</div>
              <div style={{ wordBreak: "break-all" }}><span style={{ color: "var(--green)" }}>$</span> git clone https://github.com/ojozinho/uiux-boost</div>
              <div style={{ wordBreak: "break-all" }}><span style={{ color: "var(--green)" }}>$</span> cp -r uiux-boost/skills/figma-faithful ~/.claude/skills/</div>
              <div style={{ color: "var(--text-muted)", marginTop: 8 }}>{s.runComment}</div>
              <div><span style={{ color: "var(--green)" }}>$</span> /figma-faithful</div>
              <div style={{ color: "var(--accent)", marginTop: 8 }}>&#9670; {s.activated}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "24px clamp(16px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.05em" }}>
            {s.footer}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", animation: "pulse-glow 2s ease-in-out infinite" }} />
            <span className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)" }}>{s.skillActive}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
