"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionHandler);

    // Only show loader on the first page load of the session
    const hasLoaded = sessionStorage.getItem("pjb_portfolio_loaded");
    if (hasLoaded) {
      setIsLoading(false);
      mediaQuery.removeEventListener("change", motionHandler);
      return;
    }

    setIsLoading(true);
    sessionStorage.setItem("pjb_portfolio_loaded", "true");

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0F1117] text-slate-900 dark:text-[#D6D9E0] overflow-hidden select-none"
        >
          {/* Subtle electric pulsing background glow */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            animate={
              reducedMotion
                ? { opacity: 0.1 }
                : {
                    opacity: [0.08, 0.16, 0.08],
                    scale: [0.95, 1.05, 0.95],
                  }
            }
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-[80px]" />
          </motion.div>

          {/* Core Content: Scaled and Faded */}
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Thunder Pikachu GIF */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-5">
              <Image
                src={pokemonAssets.thunderPikachuLoader}
                alt="Loading Pikachu"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            {/* Large Branding */}
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 font-mono">
              PJB.DEV
            </h1>

            {/* Loading text */}
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#9F7AEA]/80 font-mono tracking-wide font-medium">
              ⚡ Initializing PJB.DEV...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

