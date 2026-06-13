"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", 
  "ArrowDown", "ArrowDown", 
  "ArrowLeft", "ArrowRight", 
  "ArrowLeft", "ArrowRight", 
  "b", "a"
];

export default function KonamiCode() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isUnlocked) return;

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      
      setInputSequence((prev) => {
        const newSequence = [...prev, key];
        // Keep only the last N characters where N is the length of KONAMI_CODE
        if (newSequence.length > KONAMI_CODE.length) {
          newSequence.shift();
        }

        // Check if sequence matches
        const matches = newSequence.every((k, i) => k === KONAMI_CODE[i].toLowerCase() || k === KONAMI_CODE[i]);
        
        if (newSequence.length === KONAMI_CODE.length && matches) {
          triggerAchievement();
          return [];
        }
        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isUnlocked]);

  const triggerAchievement = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      setIsUnlocked(false);
    }, 4000); // Hide after 4 seconds
  };

  return (
    <AnimatePresence>
      {isUnlocked && (
        <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center">
          {/* Particle Explosion */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(24)].map((_, i) => {
              const angle = (i / 24) * Math.PI * 2;
              const velocity = 150 + Math.random() * 100;
              const tx = Math.cos(angle) * velocity;
              const ty = Math.sin(angle) * velocity;
              
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#fde047" : "#38bdf8", // Yellow and sky blue
                    boxShadow: i % 2 === 0 ? "0 0 12px rgba(253, 224, 71, 0.8)" : "0 0 12px rgba(56, 189, 248, 0.8)",
                  }}
                  initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                  animate={{
                    x: tx,
                    y: ty,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.8 + Math.random() * 0.4, ease: "easeOut" }}
                />
              );
            })}
          </div>

          {/* Holographic Toast */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative px-8 py-6 rounded-2xl flex items-center gap-4 border border-white/20 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 40px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            {/* Holographic scanning line */}
            <motion.div
              className="absolute inset-0 w-full h-[2px] bg-sky-400/50 shadow-[0_0_10px_#38bdf8]"
              animate={{
                top: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-400/50 text-sky-400">
              <Trophy className="w-6 h-6" />
            </div>
            
            <div className="text-left relative z-10">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 font-black text-xl tracking-tight mb-1 uppercase font-mono">
                Achievement Unlocked
              </h3>
              <p className="text-slate-300 text-sm font-medium">
                Konami Code entered! True gamer recognized.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
