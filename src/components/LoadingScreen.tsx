"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

// Electric Particle System for Loader
function LoaderParticles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; r: number; s: number; h: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-15),
        {
          id: Date.now() + Math.random(),
          x: Math.random() * 100, // percentage
          y: Math.random() * 100, // percentage
          r: Math.random() * 360,
          s: 0.5 + Math.random() * 1.5,
          h: 40 + Math.random() * 30, // yellow/gold hues
        }
      ]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0], scale: p.s, y: -20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: 3 * p.s,
              height: 12 * p.s,
              backgroundColor: `hsl(${p.h}, 100%, 60%)`,
              boxShadow: `0 0 ${10 * p.s}px hsl(${p.h}, 100%, 50%)`,
              transform: `rotate(${p.r}deg)`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionHandler);

    const hasLoaded = sessionStorage.getItem("pjb_portfolio_loaded_v2");
    if (hasLoaded) {
      setIsLoading(false);
      mediaQuery.removeEventListener("change", motionHandler);
      return;
    }

    setIsLoading(true);
    sessionStorage.setItem("pjb_portfolio_loaded_v2", "true");

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Slightly faster sequence

    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener("change", motionHandler);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.4, ease: "circIn" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0F1F] overflow-hidden select-none"
        >
          {/* Background Energy Layer - Smoother Glow */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.2, 0.5, 0.3], scale: [0.8, 1, 1.1, 1] }}
            transition={{
              duration: 3.5,
              times: [0, 0.3, 0.6, 1],
              ease: "easeInOut",
            }}
          >
            <div className="w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[100px]" />
          </motion.div>

          {/* Electric Particles */}
          {!reducedMotion && <LoaderParticles />}

          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-64">
            {/* Thunder Pikachu GIF - Refined scaling and smooth glow */}
            <motion.div 
              className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8, filter: "drop-shadow(0 0 0px rgba(250,204,21,0))" }}
              animate={{ 
                opacity: 1, 
                scale: [0.8, 1.15, 1],
                filter: [
                  "drop-shadow(0 0 0px rgba(250,204,21,0))",
                  "drop-shadow(0 0 40px rgba(250,204,21,0.6))",
                  "drop-shadow(0 0 20px rgba(250,204,21,0.3))"
                ]
              }}
              transition={{ 
                duration: 2.5, 
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Image
                src={pokemonAssets.thunderPikachuLoader}
                alt="Loading Pikachu"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </motion.div>

            {/* Large Branding with Accent Gradient */}
            <motion.div
              className="absolute flex flex-col items-center justify-center mt-56"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.5,
                ease: "easeOut"
              }}
            >
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                PJB.DEV
              </h1>

              {/* Loading text */}
              <motion.p 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-xs sm:text-sm text-slate-300 font-mono tracking-widest uppercase font-medium"
              >
                System Initialization
              </motion.p>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-12 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.2, ease: "circOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
