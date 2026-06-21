"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasVisited = sessionStorage.getItem("pjb_visited");
    
    if (hasVisited) {
      setShow(false);
      return;
    }

    // Set visited flag
    sessionStorage.setItem("pjb_visited", "true");

    // Total sequence is 3.0s
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950"
        >
          {/* Main loader container */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Ice-blue pulsing glow behind the loader (Intensifies at 1s) */}
            <motion.div
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{ opacity: [0.2, 0.8, 0.6], scale: [0.8, 1.2, 1] }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-sky-500 blur-[40px] z-0"
            />

            {/* Smooth scaling Pikachu loader (Appears at 0s) */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{
                scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.8 },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
              className="relative w-24 h-24 z-10"
            >
              <video
                src={pokemonAssets.thunderPikachuLoader}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain drop-shadow-md rounded-full"
              />
            </motion.div>

            {/* PJB.DEV Brand Reveal (Appears at 2s) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
              className="absolute -bottom-12"
            >
              <span className="text-white text-xs md:text-sm font-mono tracking-[0.3em] font-bold">
                PJB.DEV
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
