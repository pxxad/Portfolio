"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

const messages = [
  "⚡ Time for another commit?",
  "⚡ Keep shipping.",
  "⚡ One bug less than yesterday.",
  "⚡ Ready for the next project?",
  "⚡ You've got this, trainer!",
];

export default function SparkCompanion() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 4000);
  };

  return (
    <div className="relative flex items-center gap-3 z-20">
      {/* Speech Bubble — appears above the avatar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 px-4 py-2 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 whitespace-nowrap"
            style={{ boxShadow: "0 4px 20px rgba(107,164,232,0.15)" }}
          >
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              {messages[messageIndex]}
            </p>
            {/* Tail pointing down */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-slate-700 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spark Avatar */}
      <motion.button
        onClick={handleClick}
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-11 h-11 rounded-full overflow-hidden cursor-pointer"
        style={{
          border: "2px solid rgba(251,191,36,0.5)",
          boxShadow: "0 0 14px rgba(251,191,36,0.25), 0 2px 8px rgba(0,0,0,0.08)",
          background: "white",
        }}
        aria-label="Talk to Spark"
        title="Click Spark!"
      >
        <Image src={pokemonAssets.spark} alt="Spark — Pikachu companion" fill className="object-cover" sizes="44px" />
      </motion.button>
    </div>
  );
}
