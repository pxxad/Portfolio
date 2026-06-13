"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

interface Particle {
  id: number;
  size: number;
  color: string;
  tx: number;
  ty: number;
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ripple, setRipple] = useState<{ active: boolean; isDarkTransition: boolean; x: number; y: number } | null>(null);

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

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = !isDark;

    // Accessibility check: prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsDark(newTheme);
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    if (newTheme) {
      // Light -> Dark (Gengar Transition)
      // 1. Purple Smoke Particles
      const smokeParticles = Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const speed = Math.random() * 50 + 25;
        return {
          id: Date.now() + i,
          size: Math.random() * 12 + 6,
          color: i % 2 === 0 ? "rgba(159, 122, 234, 0.75)" : "rgba(107, 70, 193, 0.6)",
          tx: Math.cos(angle) * speed,
          ty: Math.sin(angle) * speed,
        };
      });
      setParticles(smokeParticles);

      // 2. Expand Shadow Ripple
      setRipple({ active: true, isDarkTransition: true, x, y });

      // 3. Perform class toggle mid-ripple
      setTimeout(() => {
        setIsDark(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }, 250);

      // Clean up
      setTimeout(() => {
        setRipple(null);
        setParticles([]);
      }, 550);
    } else {
      // Dark -> Light (Spark Transition)
      // 1. Electric Yellow Sparks
      const sparks = Array.from({ length: 10 }).map((_, i) => {
        const angle = (i * 36 * Math.PI) / 180;
        const speed = Math.random() * 40 + 20;
        return {
          id: Date.now() + i,
          size: Math.random() * 7 + 4,
          color: "rgba(251, 191, 36, 0.95)",
          tx: Math.cos(angle) * speed,
          ty: Math.sin(angle) * speed,
        };
      });
      setParticles(sparks);

      // 2. Expand Light Ripple
      setRipple({ active: true, isDarkTransition: false, x, y });

      // 3. Perform class toggle mid-ripple
      setTimeout(() => {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }, 250);

      // Clean up
      setTimeout(() => {
        setRipple(null);
        setParticles([]);
      }, 550);
    }
  };

  if (!mounted) return <div className="w-11 h-11 rounded-full" />;

  return (
    <div className="relative group flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="relative w-11 h-11 rounded-full overflow-visible border-2 border-slate-200 dark:border-white/10 shadow-sm transition-transform duration-300 hover:scale-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
        aria-label="Toggle Theme"
      >
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

        {/* Smoke / Spark Particles container */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: 0, y: 0, scale: 0.4, opacity: 0.9 }}
            animate={{ x: p.tx, y: p.ty, scale: 1.6, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute rounded-full pointer-events-none z-50"
            style={{
              left: "50%",
              top: "50%",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              transform: "translate(-50%, -50%)",
              filter: "blur(1.5px)",
            }}
          />
        ))}
      </button>

      {/* Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-white text-white dark:text-slate-900 text-[10px] font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg">
        {isDark ? "👻 Night Shift Mode" : "⚡ Spark Mode"}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-white rotate-45" />
      </div>

      {/* Viewport Ripple Portal simulation */}
      {ripple && ripple.active && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: [1, 1, 0] }}
          transition={{ duration: 0.55, ease: "easeInOut", times: [0, 0.8, 1] }}
          style={{
            position: "fixed",
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
            width: "280vmax",
            height: "280vmax",
            borderRadius: "50%",
            backgroundColor: ripple.isDarkTransition ? "#0f1117" : "#f8f9fc",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
