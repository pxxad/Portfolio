"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const introPlayed = sessionStorage.getItem("introPlayed");

    if (introPlayed) {
      // Subsequent visit in the same session
      setIsFirstVisit(false);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // 800ms loading transition for normal loader
      
      return () => clearTimeout(timer);
    } else {
      // First visit in session
      setIsFirstVisit(true);
      sessionStorage.setItem("introPlayed", "true");
      
      // 1. Instantly lock body scroll to keep the viewport perfectly static
      document.body.style.overflow = "hidden";
  
      // 2. Exact 6-second timeline window to play the uncut video track completely
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "unset";
      }, 6000);
  
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    }
  }, []);

  return (
    <AnimatePresence onExitComplete={() => setIsMounted(false)}>
      {isLoading && isMounted && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0A0F1F] select-none p-4"
        >
          {isFirstVisit === true ? (
            <>
              {/* Central Content Matrix - GIF LOADER */}
              <div className="flex flex-col items-center justify-center gap-8 max-w-full">
                
                {/* THE WIDESCREEN CONTAINER FRAME */}
                <div className="relative w-80 h-48 sm:w-[500px] sm:h-[280px] md:w-[680px] md:h-[380px] rounded-2xl border border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.25)] bg-black overflow-hidden flex items-center justify-center z-10">
                  <video 
                    src="https://res.cloudinary.com/li5wzmgq/video/upload/f_auto,q_auto/portfolio/thunder-pikachu-loader.mp4" 
                    autoPlay 
                    muted 
                    playsInline
                    className="w-full h-full object-contain -rotate-90 scale-[1.35]"
                    style={{ minWidth: '100%', minHeight: '100%' }}
                  />
                </div>
        
                {/* THE ISOLATED BRANDING FLOW */}
                <div className="flex flex-col items-center justify-center relative z-20">
                  <h1 className="text-4xl sm:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-mono mb-2">
                    PJB.DEV
                  </h1>
                  <p className="text-xs text-slate-400 font-mono tracking-[0.3em] uppercase font-bold animate-pulse">
                    System Initialization
                  </p>
                </div>
              </div>
        
              {/* THE AUTOMATED SYNC PROGRESS BAR */}
              <div className="absolute bottom-12 w-64 h-[3px] bg-white/10 rounded-full overflow-hidden z-20">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" 
                  style={{
                    animation: "progressAnimation 6s linear forwards"
                  }} 
                />
              </div>
            </>
          ) : isFirstVisit === false ? (
            // Normal lightweight loader
            <div className="flex flex-col items-center justify-center relative z-20">
              <h1 className="text-4xl sm:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-mono mb-4 animate-pulse">
                PJB.DEV
              </h1>
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </div>
            </div>
          ) : (
            // Initial empty state to prevent page flash
            <div className="flex flex-col items-center justify-center relative z-20 opacity-0">
              <h1 className="text-4xl sm:text-5xl font-black tracking-wider text-transparent font-mono mb-2">
                PJB.DEV
              </h1>
            </div>
          )}

          {/* Synchronized keyframes to match the full 12-second duration layout tracking seamlessly */}
          <style jsx global>{`
            @keyframes progressAnimation {
              0% { width: 0%; }
              100% { width: 100%; }
            }
          `}</style>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
