"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { pokemonAssets } from "@/data/pokemon";

export default function PokemonEasterEgg() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute top-[20%] right-[8%] hidden md:block z-20">
      <motion.div
        className="relative cursor-pointer group"
        initial={{ opacity: 0.25, y: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0.25,
          y: [0, -12, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: { duration: 0.3 }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-20 h-20 overflow-hidden rounded-full border border-white/40 shadow-inner glass-card p-2">
          <Image
            src={pokemonAssets.squirtle}
            alt="Squirtle"
            width={80}
            height={80}
            className="w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>

        {/* Speech Bubble / Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute bottom-full right-1/2 translate-x-1/2 mb-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-sky-blue/20 shadow-lg text-[10px] font-mono text-text-primary whitespace-nowrap"
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              Squirtle is chilling! 😎
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-4 border-transparent border-t-white/90" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
