"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Just a quick, normal loader - NO GIF, NO VIDEO
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms loading transition
    
    return () => clearTimeout(timer);
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
          {/* Normal lightweight loader */}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
