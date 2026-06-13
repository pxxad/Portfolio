"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * CursorTrail — velocity-based particle trail.
 * Only spawns particles when cursor moves quickly.
 * Reduced intensity (50%). Desktop only. Barely noticeable.
 */
export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const particles = useRef<{ x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number; hue: number }[]>([]);
  const raf = useRef<number>(0);
  const isMobile = useRef(false);

  useEffect(() => {
    // Disable on mobile
    isMobile.current = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    if (isMobile.current) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      lastPos.current = { x: e.clientX, y: e.clientY };

      // Only spawn when cursor moves fast enough (velocity threshold)
      if (speed < 8) return;

      // Spawn 1-2 particles based on speed (50% reduced)
      const count = Math.min(Math.floor(speed / 20), 2);
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.3,
          life: 0,
          maxLife: 18 + Math.random() * 10, // ~300ms at 60fps
          size: 1.5 + Math.random() * 1.5,
          hue: 210 + Math.random() * 30, // Subtle blue range
        });
      }
    };

    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter(p => p.life < p.maxLife);

      for (const p of particles.current) {
        const progress = p.life / p.maxLife;
        const alpha = (1 - progress) * 0.35; // Very subtle

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 70%, ${alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.life++;
      }

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9998]"
      aria-hidden="true"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
