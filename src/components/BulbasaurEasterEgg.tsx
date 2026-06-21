"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { pokemonAssets } from "@/data/pokemon";

// ── Bulbasaur Leaf Particles (hover) ──────────────────────────────────────────
function LeafParticles({ active }: { active: boolean }) {
  const [leaves, setLeaves] = useState<{ id: number; x: number; y: number; r: number; s: number; isOrb: boolean }[]>([]);

  useEffect(() => {
    if (!active) { setLeaves([]); return; }
    const interval = setInterval(() => {
      setLeaves(prev => [
        ...prev.slice(-8),
        {
          id: Date.now() + Math.random(),
          x: (Math.random() - 0.5) * 80,
          y: -(Math.random() * 40 + 20),
          r: Math.random() * 360,
          s: 0.6 + Math.random() * 0.6,
          isOrb: Math.random() > 0.6, // 40% chance to be a soft green orb instead of a leaf
        }
      ]);
    }, 250);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <AnimatePresence>
      {leaves.map(l => (
        l.isOrb ? (
          <motion.div
            key={l.id}
            initial={{ x: 0, y: 0, opacity: 0, scale: l.s }}
            animate={{ x: l.x, y: l.y, opacity: [0, 0.8, 0], scale: l.s * 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full bg-emerald-400 mix-blend-screen"
            style={{ width: 6, height: 6, boxShadow: "0 0 10px rgba(52, 211, 153, 0.8)", filter: "blur(1px)" }}
          />
        ) : (
          <motion.div
            key={l.id}
            initial={{ x: 0, y: 0, opacity: 0.9, rotate: 0, scale: l.s }}
            animate={{ x: l.x, y: l.y, opacity: 0, rotate: l.r }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-sm z-0"
          >
            🍃
          </motion.div>
        )
      ))}
    </AnimatePresence>
  );
}

export default function BulbasaurEasterEgg() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVineWhipActive, setIsVineWhipActive] = useState(false);

  const handleClick = () => {
    if (isVineWhipActive) return;
    setIsVineWhipActive(true);
    setTimeout(() => {
      setIsVineWhipActive(false);
    }, 800);
  };

  return (
    <div className="absolute top-[10%] left-[5%] hidden lg:block z-30">
      <motion.div
        className="relative cursor-pointer group"
        initial={{ opacity: 0.6, y: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0.85,
          y: [0, 10, 0],
          scale: isVineWhipActive ? [1, 1.1, 0.95, 1] : 1,
        }}
        transition={{
          y: {
            duration: 6,
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
        {/* Leaf Hover Effect */}
        <LeafParticles active={isHovered} />

        <div className="relative w-24 h-24 overflow-hidden rounded-full border border-white/60 dark:border-white/10 shadow-lg p-2 transition-all duration-500 z-10"
          style={{
            background: "rgba(255,255,255,0.4)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 10px 40px rgba(34,197,94,0.15), inset 0 0 20px rgba(255,255,255,0.8)"
          }}>
          <Image
            src={pokemonAssets.bulbasaur}
            alt="Bulbasaur"
            fill
            className="object-contain p-2 rounded-full transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>

        {/* Vine Whip Effect */}
        <AnimatePresence>
          {isVineWhipActive && (
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 pointer-events-none z-20">
              <motion.div
                className="w-16 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] origin-left"
                initial={{ scaleX: 0, rotate: 15 }}
                animate={{ scaleX: [0, 1.2, 0], rotate: [15, -15, 5] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.div
                className="w-12 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] origin-left absolute top-2"
                initial={{ scaleX: 0, rotate: -10 }}
                animate={{ scaleX: [0, 1, 0], rotate: [-10, 20, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              />
            </div>
          )}
        </AnimatePresence>

        {/* Speech Bubble / Tooltip */}
        <AnimatePresence>
          {(isHovered || isVineWhipActive) && (
            <motion.div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white/95 dark:bg-brand-alt/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-emerald-500/30 shadow-[0_8px_30px_rgba(16,185,129,0.2)] dark:shadow-none text-xs font-mono font-medium text-text-primary dark:text-text-primary whitespace-nowrap z-50"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {isVineWhipActive ? "Bulbasaur used Vine Whip! 🌱" : "Bulbasaur is sunbathing ☀️"}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-3 h-3 bg-white/95 dark:bg-brand-alt/95 border-r border-b border-emerald-500/30 transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
