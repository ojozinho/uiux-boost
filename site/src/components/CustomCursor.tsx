"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;

      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;

      requestAnimationFrame(tick);
    };

    const onEnterLink = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.marginLeft = "-8px";
      ring.style.marginTop = "-8px";
      ring.style.borderColor = "rgba(255,255,255,0.6)";
      dot.style.opacity = "0";
    };
    const onLeaveLink = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.marginLeft = "0";
      ring.style.marginTop = "0";
      ring.style.borderColor = "rgba(255,255,255,0.3)";
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", move, { passive: true });
    tick();

    const links = document.querySelectorAll("a, button, .copy-btn, [role='button']");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    const mo = new MutationObserver(() => {
      const newLinks = document.querySelectorAll("a, button, .copy-btn, [role='button']");
      newLinks.forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10001,
          transition: "opacity 0.2s",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          transition: "width 0.3s, height 0.3s, margin 0.3s, border-color 0.3s",
        }}
      />
    </>
  );
}
