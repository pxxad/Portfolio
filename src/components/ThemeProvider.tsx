"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "light" | "dark";
type ThemeContextType = { theme: Theme; toggleTheme: () => void; };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fxType, setFxType] = useState<"thunder" | "void">("void");

  useEffect(() => {
    setMounted(true);
    const savedTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    if (isTransitioning) return;
    
    const currentTheme = theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    
    setFxType(currentTheme === "dark" ? "thunder" : "void");
    setIsTransitioning(true);

    setTimeout(() => {
      setTheme(nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
    }, 450);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 900);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {mounted && (
      <AnimatePresence>
        {isTransitioning && fxType === "thunder" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.1, 1, 0.1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="fixed inset-0 z-[999999] bg-cyan-400/20 mix-blend-screen pointer-events-none flex items-center justify-center"
          >
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-white" style={{ filter: "drop-shadow(0 0 20px rgba(34,211,238,1))" }}>
              <path d="M50,0 L42,30 L58,45 L35,70 L55,80 L45,100" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        )}

        {isTransitioning && fxType === "void" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="fixed inset-0 z-[999999] pointer-events-none flex flex-col justify-start"
          >
            {/* Layer 1: Fluid Ink Spill Wave Cover */}
            <motion.svg 
              viewBox="0 0 1440 800" 
              preserveAspectRatio="none" 
              className="w-full h-[120vh] fill-[#0A0F1F]"
              style={{ filter: "drop-shadow(0 20px 30px rgba(10,15,31,0.7))" }}
            >
              <motion.path 
                initial={{ d: "M0,0 L1440,0 L1440,0 Q720,0 0,0 Z" }}
                animate={{ 
                  d: [
                    "M0,0 L1440,0 L1440,50 Q720,150 0,50 Z", 
                    "M0,0 L1440,0 L1440,500 Q720,800 0,500 Z", 
                    "M0,0 L1440,0 L1440,1200 Q720,1200 0,1200 Z"
                  ] 
                }}
                transition={{ 
                  duration: 0.6, 
                  times: [0, 0.5, 1],
                  ease: "easeInOut" 
                }}
              />
            </motion.svg>
            
            {/* Layer 2: Seamless background safety block matching the ink color */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1] }}
              transition={{ duration: 0.8, times: [0, 0.5, 0.6, 1] }}
              className="absolute inset-0 bg-[#0A0F1F] z-[-1]"
            />
          </motion.div>
        )}
      </AnimatePresence>
      )}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
