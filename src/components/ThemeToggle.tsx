"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

// ── Gengar Hover Effects ────────────────────────────────────────────────────
function GengarHoverEffects({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; s: number; h: number }[]>([]);

  useEffect(() => {
    if (!active) { setParticles([]); return; }
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-15),
        {
          id: Date.now() + Math.random(),
          x: (Math.random() - 0.5) * 50,
          y: (Math.random() - 0.5) * 50,
          s: 0.5 + Math.random() * 1.5,
          h: Math.random() > 0.5 ? 270 : 285, // Purples
        }
      ]);
    }, 150);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ x: 0, y: 0, opacity: 0.8, scale: p.s }}
            animate={{ x: p.x, y: p.y - 30, opacity: 0, scale: p.s * 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-screen"
            style={{
              width: 8,
              height: 8,
              backgroundColor: `hsl(${p.h}, 80%, 60%)`,
              boxShadow: `0 0 ${10 * p.s}px hsl(${p.h}, 80%, 50%)`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}

// ── Pikachu Hover Effects ───────────────────────────────────────────────────
function PikachuHoverEffects({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; s: number; h: number; r: number }[]>([]);

  useEffect(() => {
    if (!active) { setParticles([]); return; }
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-15),
        {
          id: Date.now() + Math.random(),
          x: (Math.random() - 0.5) * 50,
          y: (Math.random() - 0.5) * 50,
          s: 0.5 + Math.random() * 1.5,
          h: 40 + Math.random() * 20, // Golds/Yellows
          r: Math.random() * 360,
        }
      ]);
    }, 150);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ x: 0, y: 0, opacity: 0.9, scale: 0.5, rotate: 0 }}
            animate={{ x: p.x, y: p.y - 30, opacity: 0, scale: p.s, rotate: p.r }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-screen"
            style={{
              width: 3,
              height: 12,
              backgroundColor: `hsl(${p.h}, 100%, 60%)`,
              boxShadow: `0 0 ${12 * p.s}px hsl(${p.h}, 100%, 50%)`,
              transform: `rotate(${p.r}deg)`,
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}

// ── Main ThemeToggle ────────────────────────────────────────────────────────
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

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
      setRipple({ active: true, isDarkTransition: true, x, y });

      setTimeout(() => {
        setIsDark(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }, 400); // Trigger theme midway

      setTimeout(() => {
        setRipple(null);
        setTransitioning(false);
      }, 900);
    } else {
      // ─── Pikachu: Lightning Burst ──────────────────────────────────
      setRipple({ active: true, isDarkTransition: false, x, y });

      setTimeout(() => {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }, 400);

      setTimeout(() => {
        setRipple(null);
        setTransitioning(false);
      }, 900);
    }
  }, [isDark, transitioning]);

  if (!mounted) return <div className="w-12 h-12 rounded-full" />;

  return (
    <div className="relative group flex items-center justify-center z-50">
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-12 h-12 rounded-full overflow-visible border-2 border-slate-200 dark:border-white/10 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)] dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-[#1A2333]"
        aria-label="Toggle Theme"
      >
        {/* Hover effects */}
        {isDark ? (
          <GengarHoverEffects active={isHovered} />
        ) : (
          <PikachuHoverEffects active={isHovered} />
        )}

        {/* Avatar image */}
        <div className="absolute inset-0 rounded-full overflow-hidden w-full h-full">
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="dark"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-0 w-full h-full bg-[#111827]"
              >
                <Image
                  src={pokemonAssets.gengar}
                  alt="Gengar Dark Mode"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
                <div className="absolute inset-0 rounded-full ring-inset ring-1 ring-white/10 pointer-events-none" />
              </motion.div>
            ) : (
              <motion.div
                key="light"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-0 w-full h-full bg-slate-50"
              >
                <Image
                  src={pokemonAssets.spark}
                  alt="Spark Light Mode"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
                <div className="absolute inset-0 rounded-full ring-inset ring-1 ring-black/5 pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      {/* Full-viewport ripple overlay */}
      {ripple && ripple.active && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: [1, 1, 0] }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], times: [0, 0.6, 1] }}
          style={{
            position: "fixed",
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
            width: "300vmax",
            height: "300vmax",
            borderRadius: "50%",
            background: ripple.isDarkTransition
              ? "radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(88, 28, 135, 0.9) 30%, #0A0F1F 70%)"
              : "radial-gradient(circle, rgba(250, 204, 21, 0.9) 0%, rgba(253, 224, 71, 0.9) 30%, #FFFFFF 70%)",
            zIndex: 9999,
            pointerEvents: "none",
            mixBlendMode: ripple.isDarkTransition ? "normal" : "screen",
          }}
        />
      )}
    </div>
  );
}
