"use client";

const items = [
  "PIXEL-PERFECT",
  "ANTI-SLOP",
  "RESPONSIVE",
  "SCREENSHOT-VERIFIED",
  "FIGMA-FAITHFUL",
  "NEO-BRUTAL",
  "MOBILE-FIRST",
  "ZERO GENERIC",
];

export function Marquee() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gold overflow-hidden h-8 flex items-center">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-xs font-bold tracking-[0.2em] text-bg font-[family-name:var(--font-mono)]"
          >
            {item}
            <span className="ml-6 text-burnt">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
