"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

// ── Gengar Smoke Particles (hover) ──────────────────────────────────────────
function GengarSmoke({ active }: { active: boolean }) {
  const [puffs, setPuffs] = useState<{ id: number; x: number; y: number; s: number }[]>([]);

  useEffect(() => {
    if (!active) { setPuffs([]); return; }
    const interval = setInterval(() => {
      setPuffs(prev => [
        ...prev.slice(-6),
        {
          id: Date.now() + Math.random(),
          x: (Math.random() - 0.5) * 40,
          y: -(Math.random() * 20 + 8),
          s: 0.5 + Math.random() * 0.6,
        }
      ]);
    }, 200);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <AnimatePresence>
      {puffs.map(p => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 0.7, scale: p.s }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: p.s * 2.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 14,
            height: 14,
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.5), rgba(88, 28, 135, 0.2))",
            filter: "blur(3px)",
          }}
        />
      ))}
    </AnimatePresence>
  );
}

// ── Pikachu Sparks (hover) ──────────────────────────────────────────────────
function PikachuSparks({ active }: { active: boolean }) {
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number; r: number }[]>([]);

  useEffect(() => {
    if (!active) { setSparks([]); return; }
    const interval = setInterval(() => {
      setSparks(prev => [
        ...prev.slice(-6),
        {
          id: Date.now() + Math.random(),
          x: (Math.random() - 0.5) * 50,
          y: (Math.random() - 0.5) * 50,
          r: Math.random() * 360,
        }
      ]);
    }, 180);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <AnimatePresence>
      {sparks.map(s => (
        <motion.div
          key={s.id}
          initial={{ x: 0, y: 0, opacity: 0.9, scale: 0.3, rotate: 0 }}
          animate={{ x: s.x, y: s.y, opacity: 0, scale: 1, rotate: s.r }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-[8px]"
        >
          ⚡
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

// ── Main ThemeToggle ────────────────────────────────────────────────────────
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  // Smoke / spark burst particles for the click explosion
  const [burstParticles, setBurstParticles] = useState<
    { id: number; size: number; color: string; tx: number; ty: number; delay: number }[]
  >([]);

  // Ripple overlay
  const [ripple, setRipple] = useState<{
    active: boolean;
    isDarkTransition: boolean;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (transitioning) return;
    const newTheme = !isDark;

    // Reduced motion: instant swap
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsDark(newTheme);
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return;
    }

    setTransitioning(true);
    const x = e.clientX;
    const y = e.clientY;

    if (newTheme) {
      // ─── Gengar: Dark Smoke Explosion ───────────────────────────────
      const smokeCount = 18;
      const smokeBurst = Array.from({ length: smokeCount }).map((_, i) => {
        const angle = (i * (360 / smokeCount) + Math.random() * 15) * (Math.PI / 180);
        const speed = 30 + Math.random() * 60;
        return {
          id: Date.now() + i,
          size: 10 + Math.random() * 16,
          color: i % 3 === 0
            ? "rgba(88, 28, 135, 0.65)"
            : i % 3 === 1
            ? "rgba(139, 92, 246, 0.55)"
            : "rgba(30, 10, 60, 0.5)",
          tx: Math.cos(angle) * speed,
          ty: Math.sin(angle) * speed,
          delay: Math.random() * 0.08,
        };
      });
      setBurstParticles(smokeBurst);

      // Purple edge flames
      setRipple({ active: true, isDarkTransition: true, x, y });

      // Toggle mid-explosion
      setTimeout(() => {
        setIsDark(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }, 300);

      // Cleanup
      setTimeout(() => {
        setRipple(null);
        setBurstParticles([]);
        setTransitioning(false);
      }, 750);
    } else {
      // ─── Pikachu: Lightning Burst ──────────────────────────────────
      const sparkCount = 16;
      const sparkBurst = Array.from({ length: sparkCount }).map((_, i) => {
        const angle = (i * (360 / sparkCount) + Math.random() * 10) * (Math.PI / 180);
        const speed = 25 + Math.random() * 55;
        return {
          id: Date.now() + i,
          size: 6 + Math.random() * 10,
          color: i % 2 === 0
            ? "rgba(251, 191, 36, 0.9)"
            : "rgba(250, 204, 21, 0.75)",
          tx: Math.cos(angle) * speed,
          ty: Math.sin(angle) * speed,
          delay: Math.random() * 0.06,
        };
      });
      setBurstParticles(sparkBurst);

      // Golden energy wave
      setRipple({ active: true, isDarkTransition: false, x, y });

      // Toggle mid-explosion
      setTimeout(() => {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }, 300);

      // Cleanup
      setTimeout(() => {
        setRipple(null);
        setBurstParticles([]);
        setTransitioning(false);
      }, 750);
    }
  }, [isDark, transitioning]);

  if (!mounted) return <div className="w-11 h-11 rounded-full" />;

  return (
    <div className="relative group flex items-center justify-center">
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-11 h-11 rounded-full overflow-visible border-2 border-slate-200 dark:border-white/10 shadow-sm transition-transform duration-300 hover:scale-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-soft-blue"
        aria-label="Toggle Theme"
      >
        {/* Gengar shadow aura (hover in dark mode) */}
        {isDark && isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        )}

        {/* Pikachu yellow aura (hover in light mode) */}
        {!isDark && isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(251, 191, 36, 0.25) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        )}

        {/* Avatar image */}
        <div className="absolute inset-0 rounded-full overflow-hidden w-full h-full">
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="dark"
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={pokemonAssets.gengar}
                  alt="Gengar Dark Mode"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
                {/* Glowing red eyes overlay on hover */}
                {isHovered && (
                  <div className="absolute inset-0 rounded-full" style={{
                    background: "radial-gradient(ellipse at 35% 40%, rgba(239, 68, 68, 0.4) 0%, transparent 30%), radial-gradient(ellipse at 65% 40%, rgba(239, 68, 68, 0.4) 0%, transparent 30%)",
                  }} />
                )}
                <div className="absolute inset-0 rounded-full ring-inset ring-1 ring-white/10 pointer-events-none" />
              </motion.div>
            ) : (
              <motion.div
                key="light"
                initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={pokemonAssets.spark}
                  alt="Spark Light Mode"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
                <div className="absolute inset-0 rounded-full ring-inset ring-1 ring-black/5 pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover effects: Gengar smoke or Pikachu sparks */}
        {isDark ? (
          <GengarSmoke active={isHovered} />
        ) : (
          <PikachuSparks active={isHovered} />
        )}

        {/* Click burst particles */}
        {burstParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: 0, y: 0, scale: 0.3, opacity: 0.95 }}
            animate={{ x: p.tx, y: p.ty, scale: 2, opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: p.delay }}
            className="absolute rounded-full pointer-events-none z-50"
            style={{
              left: "50%",
              top: "50%",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              transform: "translate(-50%, -50%)",
              filter: "blur(2px)",
            }}
          />
        ))}
      </button>

      {/* Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-white text-white dark:text-slate-900 text-[10px] font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg">
        {isDark ? "👻 Night Shift Mode" : "⚡ Spark Mode"}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-white rotate-45" />
      </div>

      {/* Full-viewport ripple overlay */}
      {ripple && ripple.active && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: [1, 1, 0] }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], times: [0, 0.75, 1] }}
          style={{
            position: "fixed",
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
            width: "280vmax",
            height: "280vmax",
            borderRadius: "50%",
            background: ripple.isDarkTransition
              ? "radial-gradient(circle, rgba(88, 28, 135, 0.6) 0%, #0A0F1F 40%)"
              : "radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, #FAFBFF 40%)",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
