"use client";

import { useEffect, useState } from "react";

const words = [
  "PIXEL", "PERFECT", "ANTI", "SLOP", "FIGMA",
  "FAITHFUL", "SCREENSHOT", "VERIFIED", "BOOST",
  "DESIGN", "CODE", "ZERO", "AI", "HUMAN",
];

export function CRTText() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        opacity: 0.07,
      }}
    >
      {/* CRT scanlines overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating words */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        {words.map((word, i) => {
          const row = Math.floor(i / 2);
          const col = i % 2;
          const yBase = row * 14 + 5;
          const xBase = col === 0 ? -5 : 40;
          const parallax = scrollY * (0.05 + i * 0.008);
          const rotation = (i % 3 === 0 ? -3 : i % 3 === 1 ? 2 : -1);

          return (
            <div
              key={i}
              className="font-display"
              style={{
                position: "absolute",
                top: `${yBase}%`,
                left: `${xBase}%`,
                fontSize: `clamp(60px, ${10 + (i % 4) * 3}vw, 220px)`,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.6)",
                transform: `translateY(${-parallax}px) rotate(${rotation}deg)`,
                whiteSpace: "nowrap",
                transition: "transform 0.1s linear",
                animation: i % 3 === 0 ? "crt-flicker 4s ease-in-out infinite" : undefined,
              }}
            >
              {word}
            </div>
          );
        })}

        {/* Solid glitch words */}
        {["BOOST", "OPIUM", "SLOP"].map((word, i) => {
          const positions = [
            { top: "15%", left: "25%", size: "18vw" },
            { top: "55%", left: "10%", size: "14vw" },
            { top: "75%", left: "50%", size: "16vw" },
          ];
          const p = positions[i];
          const parallax = scrollY * (0.12 + i * 0.02);

          return (
            <div
              key={`solid-${i}`}
              className="font-display"
              style={{
                position: "absolute",
                top: p.top,
                left: p.left,
                fontSize: `clamp(50px, ${p.size}, 200px)`,
                fontWeight: 900,
                letterSpacing: "-0.05em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.15)",
                transform: `translateY(${-parallax}px)`,
                whiteSpace: "nowrap",
                filter: "blur(1px)",
                animation: `crt-glitch ${3 + i}s ease-in-out infinite`,
              }}
            >
              {word}
            </div>
          );
        })}
      </div>

      {/* Chromatic aberration layers */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          mixBlendMode: "screen",
          opacity: 0.4,
        }}
      >
        <div
          className="font-display"
          style={{
            position: "absolute",
            top: "35%",
            left: "15%",
            fontSize: "clamp(80px, 20vw, 300px)",
            fontWeight: 900,
            color: "rgba(0,255,200,0.08)",
            transform: `translateX(3px) translateY(${-scrollY * 0.06}px)`,
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
          }}
        >
          UI/UX
        </div>
        <div
          className="font-display"
          style={{
            position: "absolute",
            top: "35%",
            left: "15%",
            fontSize: "clamp(80px, 20vw, 300px)",
            fontWeight: 900,
            color: "rgba(255,0,100,0.06)",
            transform: `translateX(-3px) translateY(${-scrollY * 0.06 + 2}px)`,
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
          }}
        >
          UI/UX
        </div>
      </div>

      {/* VHS tracking bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "clamp(20px, 4vh, 60px)",
          background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.03), transparent)",
          zIndex: 4,
          animation: "vhs-track 8s linear infinite",
        }}
      />
    </div>
  );
}
