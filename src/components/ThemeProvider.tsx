"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "light" | "dark";
type ThemeContextType = { theme: Theme; toggleTheme: () => void; };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fxType, setFxType] = useState<"thunder" | "void">("void");

  // Sync state with HTML tag on initial load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    if (isTransitioning) return;
    
    const currentTheme = theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    
    // CRITICAL FIX: Set the effect based on the CURRENT theme so it is visible!
    setFxType(currentTheme === "dark" ? "thunder" : "void");
    setIsTransitioning(true);

    // Physical DOM class flip happens right at the 400ms peak of the transition
    setTimeout(() => {
      setTheme(nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
    }, 400);

    // Unmount animation overlays after 800ms total
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}

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
            initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)' }}
            animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 z-[999999] bg-[#0A0F1F] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
