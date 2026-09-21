"use client";

import { useEffect, useState } from "react";

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
      }}
    >
      {/* CRT scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)",
          pointerEvents: "none",
        }}
      />

      {/* Single massive word — like the SUPERSTAR TV reference */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          transform: `translateY(${-scrollY * 0.15}px)`,
        }}
      >
        <div
          className="font-display"
          style={{
            fontSize: "clamp(120px, 28vw, 450px)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.04)",
            whiteSpace: "nowrap",
            lineHeight: 0.85,
            textAlign: "center",
          }}
        >
          UI/UX
          <br />
          BOOST
        </div>
      </div>

      {/* VHS tracking bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 40,
          background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.02), transparent)",
          zIndex: 4,
          animation: "vhs-track 8s linear infinite",
        }}
      />
    </div>
  );
}
