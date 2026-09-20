"use client";

import { useEffect, useRef } from "react";

export function Logo({ size = 80, animate = true }: { size?: number; animate?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animate || !svgRef.current) return;
    const paths = svgRef.current.querySelectorAll(".draw-path");
    paths.forEach((path) => {
      const el = path as SVGPathElement;
      const length = el.getTotalLength();
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.style.animation = `dash-draw 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`;
    });
  }, [animate]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Outer frame — thick neo-brutal border */}
      <rect
        x="4" y="4" width="192" height="192"
        stroke="var(--gold)" strokeWidth="4" fill="var(--bg)"
        rx="0"
      />

      {/* Inner diamond rotated */}
      <rect
        x="100" y="30" width="100" height="100"
        transform="rotate(45 100 100)"
        stroke="var(--olive)" strokeWidth="2" fill="none"
        className="draw-path"
      />

      {/* Arrow up — the "boost" */}
      <path
        d="M100 45 L130 85 L115 85 L115 130 L85 130 L85 85 L70 85 Z"
        fill="var(--gold)"
        className="draw-path"
        stroke="var(--gold)"
        strokeWidth="1"
      />

      {/* Small decorative star */}
      <circle cx="155" cy="50" r="4" fill="var(--burnt)" />
      <circle cx="45" cy="150" r="3" fill="var(--olive-light)" />

      {/* Bottom text area */}
      <text
        x="100" y="165"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="800"
        fontSize="22"
        fill="var(--text-primary)"
        letterSpacing="4"
      >
        BOOST
      </text>

      <text
        x="100" y="180"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontWeight="400"
        fontSize="9"
        fill="var(--text-muted)"
        letterSpacing="2"
      >
        UI/UX
      </text>
    </svg>
  );
}
