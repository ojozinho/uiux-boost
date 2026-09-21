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
      {/* Dark organic texture */}
      <div
        style={{
          position: "absolute",
          inset: "-20%",
          backgroundImage: "url(/bg-texture.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.18,
          filter: "grayscale(1) contrast(1.3) brightness(0.7)",
          mixBlendMode: "screen",
          transform: `scale(1.1) translateY(${-scrollY * 0.08}px)`,
          transition: "transform 0.1s linear",
        }}
      />

      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.12) 1px, rgba(0,0,0,0.12) 2px)",
          pointerEvents: "none",
        }}
      />

      {/* VHS tracking bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 40,
          background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.015), transparent)",
          zIndex: 3,
          animation: "vhs-track 10s linear infinite",
        }}
      />
    </div>
  );
}
