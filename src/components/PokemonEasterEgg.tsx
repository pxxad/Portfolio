"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { pokemonAssets } from "@/data/pokemon";

export default function PokemonEasterEgg() {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaterGunActive, setIsWaterGunActive] = useState(false);

  const handleClick = () => {
    if (isWaterGunActive) return;
    setIsWaterGunActive(true);
    // Reset after animation
    setTimeout(() => {
      setIsWaterGunActive(false);
    }, 800);
  };

  return (
    <div className="absolute top-[15%] right-[10%] hidden lg:block z-30">
      <motion.div
        className="relative cursor-pointer group"
        initial={{ opacity: 0.6, y: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0.85,
          y: [0, -15, 0],
          scale: isWaterGunActive ? [1, 0.9, 1.1, 1] : 1, // subtle squish on click
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: { duration: 0.3 },
          scale: { duration: 0.4 }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Water Droplets Hover Effect */}
        <AnimatePresence>
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none z-0">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0, scale: 0.5 }}
                  animate={{ y: -30, opacity: [0, 1, 0], scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute left-1/2 rounded-full bg-blue-300 dark:bg-blue-400"
                  style={{
                    width: 4 + Math.random() * 4,
                    height: 4 + Math.random() * 4,
                    left: `${20 + Math.random() * 60}%`,
                    boxShadow: "0 0 8px rgba(96, 165, 250, 0.6)"
                  }}
                />
              ))}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              />
            </div>
          )}
        </AnimatePresence>

        <div className="relative w-24 h-24 overflow-hidden rounded-full border border-white/60 dark:border-white/10 shadow-lg p-2 transition-all duration-500 z-10"
          style={{
            background: "rgba(255,255,255,0.4)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 10px 40px rgba(107,164,232,0.3), inset 0 0 20px rgba(255,255,255,0.8)"
          }}>
          <Image
            src={pokemonAssets.squirtle}
            alt="Squirtle"
            fill
            className="object-contain p-2 rounded-full transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>

        {/* Water Gun Particles */}
        <AnimatePresence>
          {isWaterGunActive && (
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-8 pointer-events-none">
              {[...Array(8)].map((_, i) => {
                // Randomize trajectories spreading leftwards
                const angle = (Math.random() - 0.5) * (Math.PI / 2); // -45 to 45 degrees
                const velocity = 80 + Math.random() * 60;
                const tx = -Math.cos(angle) * velocity;
                const ty = Math.sin(angle) * velocity;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-sky-400 dark:bg-sky-500 opacity-90"
                    initial={{ x: 0, y: 0, scale: 0.5, opacity: 1 }}
                    animate={{
                      x: tx,
                      y: ty,
                      scale: 0,
                      opacity: 0,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 + Math.random() * 0.3, ease: "easeOut" }}
                    style={{
                      boxShadow: "0 0 12px rgba(56, 189, 248, 0.8)",
                    }}
                  />
                );
              })}
            </div>
          )}
        </AnimatePresence>

        {/* Speech Bubble / Tooltip */}
        <AnimatePresence>
          {(isHovered || isWaterGunActive) && (
            <motion.div
              className="absolute bottom-full right-1/2 translate-x-1/2 mb-4 bg-white/95 dark:bg-brand-alt/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-sky-blue/30 dark:border-sky-500/30 shadow-[0_8px_30px_rgba(107,164,232,0.2)] dark:shadow-none text-xs font-mono font-medium text-text-primary dark:text-text-primary whitespace-nowrap z-50"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {isWaterGunActive ? "Squirtle used Water Gun! 💦" : "Squirtle is chilling 😎"}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-3 h-3 bg-white/95 dark:bg-brand-alt/95 border-r border-b border-sky-blue/30 dark:border-sky-500/30 transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
