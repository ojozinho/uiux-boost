"use client";

import { useEffect, useState, useRef } from "react";

interface Line {
  text: string;
  color?: string;
  delay: number;
}

const demoLines: Line[] = [
  { text: "$ /figma-faithful", color: "var(--text-primary)", delay: 0 },
  { text: "", delay: 600 },
  { text: "  ┌────────────────────────────────────────────┐", color: "var(--accent)", delay: 800 },
  { text: "  │  U I / U X   B O O S T                    │", color: "var(--accent)", delay: 100 },
  { text: "  │  figma-faithful v1.0                       │", color: "var(--text-muted)", delay: 100 },
  { text: "  └────────────────────────────────────────────┘", color: "var(--accent)", delay: 100 },
  { text: "", delay: 400 },
  { text: "  mode? [A] Figma link  [B] From scratch", color: "var(--text-secondary)", delay: 300 },
  { text: "  > A", color: "var(--text-primary)", delay: 800 },
  { text: "", delay: 300 },
  { text: "  paste the figma link:", color: "var(--text-secondary)", delay: 200 },
  { text: "  > figma.com/design/xK92m...", color: "var(--text-primary)", delay: 1000 },
  { text: "", delay: 400 },
  { text: "  ┌─ DESIGN TOKENS ────────────────────────────┐", color: "var(--accent)", delay: 300 },
  { text: "  │  fonts:    Syne 800 / Space Grotesk 400    │", color: "var(--text-secondary)", delay: 200 },
  { text: "  │  palette:  #0A0A0A #F5F2ED #C8BFE7 #1A1A1A│", color: "var(--text-secondary)", delay: 200 },
  { text: "  │  spacing:  4px base, 8/16/24/32/48/64      │", color: "var(--text-secondary)", delay: 200 },
  { text: "  │  radius:   0px / 2px / 8px                 │", color: "var(--text-secondary)", delay: 200 },
  { text: "  └────────────────────────────────────────────┘", color: "var(--accent)", delay: 100 },
  { text: "", delay: 500 },
  { text: "  ┌─ PHASE 2 ─ BUILD ─────────────────────────┐", color: "var(--accent)", delay: 300 },
  { text: "  │  + header            done                  │", color: "var(--green)", delay: 400 },
  { text: "  │  > hero              building...            │", color: "var(--accent)", delay: 800 },
  { text: "  │  + hero              done                  │", color: "var(--green)", delay: 600 },
  { text: "  │  > features          building...            │", color: "var(--accent)", delay: 600 },
  { text: "  │  + features          done                  │", color: "var(--green)", delay: 500 },
  { text: "  └────────────────────────────────────────────┘", color: "var(--accent)", delay: 100 },
  { text: "", delay: 400 },
  { text: "  ┌─ SCREENSHOT CHECK ─────────────────────────┐", color: "var(--accent)", delay: 300 },
  { text: "  │  375px   + match                           │", color: "var(--green)", delay: 400 },
  { text: "  │  768px   + match                           │", color: "var(--green)", delay: 300 },
  { text: "  │  1440px  + match                           │", color: "var(--green)", delay: 300 },
  { text: "  │  2560px  + match                           │", color: "var(--green)", delay: 300 },
  { text: "  └────────────────────────────────────────────┘", color: "var(--accent)", delay: 100 },
  { text: "", delay: 400 },
  { text: "  ┌─ ANTI-SLOP SCAN ──────────────────────────┐", color: "var(--accent)", delay: 300 },
  { text: "  │  + no Inter/Roboto                         │", color: "var(--green)", delay: 200 },
  { text: "  │  + no purple gradients                     │", color: "var(--green)", delay: 200 },
  { text: "  │  + no identical cards                      │", color: "var(--green)", delay: 200 },
  { text: "  │  + no emoji icons                          │", color: "var(--green)", delay: 200 },
  { text: "  │  0 patterns detected                       │", color: "var(--green)", delay: 200 },
  { text: "  └────────────────────────────────────────────┘", color: "var(--accent)", delay: 100 },
  { text: "", delay: 500 },
  { text: "  done. shipped.", color: "var(--green)", delay: 300 },
];

export function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isRunning) return;

    let i = visibleLines;
    let timeout: NodeJS.Timeout;

    const showNext = () => {
      if (i >= demoLines.length) {
        setIsRunning(false);
        setHasRun(true);
        return;
      }
      i++;
      setVisibleLines(i);
      timeout = setTimeout(showNext, demoLines[i]?.delay ?? 300);
    };

    timeout = setTimeout(showNext, demoLines[i]?.delay ?? 300);
    return () => clearTimeout(timeout);
  }, [isRunning, visibleLines]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const startDemo = () => {
    setVisibleLines(0);
    setIsRunning(true);
    setHasRun(false);
  };

  return (
    <div ref={containerRef} data-reveal style={{ maxWidth: 600, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: isRunning ? "var(--green)" : "var(--red)" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)" }} />
          <span className="font-mono" style={{ marginLeft: 8, fontSize: 9, color: "var(--text-muted)" }}>
            {isRunning ? "running..." : hasRun ? "done" : "terminal"}
          </span>
        </div>
        <button
          onClick={startDemo}
          disabled={isRunning}
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.1em",
            background: isRunning ? "var(--bg-card)" : "var(--accent)",
            color: isRunning ? "var(--text-muted)" : "var(--bg)",
            border: "none",
            padding: "6px 16px",
            cursor: isRunning ? "default" : "pointer",
            transition: "all 0.3s",
          }}
        >
          {isRunning ? "RUNNING" : hasRun ? "REPLAY" : "RUN DEMO"}
        </button>
      </div>

      <div
        ref={scrollRef}
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          padding: "clamp(12px, 2vw, 20px)",
          height: 360,
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          scrollbarColor: "var(--accent-dim) transparent",
        }}
      >
        {!isRunning && !hasRun && (
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>
              press RUN DEMO to see it in action
            </span>
          </div>
        )}
        {(isRunning || hasRun) && demoLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className="font-mono"
            style={{
              fontSize: "clamp(9px, 1.2vw, 11px)",
              lineHeight: 1.8,
              color: line.color || "var(--text-secondary)",
              whiteSpace: "pre",
              minHeight: line.text === "" ? 8 : undefined,
              animation: "fade-in-up 0.2s ease-out",
            }}
          >
            {line.text}
          </div>
        ))}
        {isRunning && (
          <span className="font-mono" style={{ fontSize: 11, color: "var(--accent)", animation: "pulse-glow 1s ease-in-out infinite" }}>_</span>
        )}
      </div>
    </div>
  );
}
