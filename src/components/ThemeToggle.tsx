"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage or system preference
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

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return <div className="w-11 h-11 rounded-full" />;

  return (
    <div className="relative group flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/10 shadow-sm transition-transform duration-300 hover:scale-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
        aria-label="Toggle Theme"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="dark"
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              transition={{ duration: 0.3 }}
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
              transition={{ duration: 0.3 }}
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
      </button>

      {/* Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-white text-white dark:text-slate-900 text-[10px] font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg">
        {isDark ? "👻 Night Shift Mode" : "⚡ Spark Mode"}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-white rotate-45" />
      </div>
    </div>
  );
}
