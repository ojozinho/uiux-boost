"use client";

import { useEffect, useRef } from "react";

export function WireSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const points: { theta: number; phi: number }[] = [];
    const count = 160;
    for (let i = 0; i < count; i++) {
      points.push({
        theta: Math.acos(1 - 2 * (i + 0.5) / count),
        phi: Math.PI * (1 + Math.sqrt(5)) * i,
      });
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.38;

      ctx.clearRect(0, 0, w, h);
      time += 0.003;

      const projected: { x: number; y: number; z: number }[] = [];

      for (const p of points) {
        const st = Math.sin(p.theta);
        const ct = Math.cos(p.theta);
        const sp = Math.sin(p.phi + time);
        const cp = Math.cos(p.phi + time);

        let x = r * st * cp;
        let y = r * ct;
        let z = r * st * sp;

        const ry = time * 0.5;
        const x2 = x * Math.cos(ry) - z * Math.sin(ry);
        const z2 = x * Math.sin(ry) + z * Math.cos(ry);
        x = x2;
        z = z2;

        projected.push({ x: cx + x, y: cy + y, z });
      }

      projected.sort((a, b) => a.z - b.z);

      for (const pt of projected) {
        const depth = (pt.z + r) / (2 * r);
        const alpha = 0.1 + depth * 0.7;
        const size = 1 + depth * 2;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 191, 231, ${alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            const alpha = (1 - dist / 60) * 0.15;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = `rgba(200, 191, 231, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    />
  );
}
