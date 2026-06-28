"use client";

import React, { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0A0F1F] select-none p-4">
      
      {/* Central Content Matrix */}
      <div className="flex flex-col items-center justify-center gap-8 max-w-full">
        
        {/* THE WIDESCREEN CONTAINER FRAME */}
        {/* Horizontal presentation box, curved glass borders, and subtle purple shadow glow */}
        <div className="relative w-80 h-48 sm:w-[500px] sm:h-[280px] md:w-[680px] md:h-[380px] rounded-2xl border border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.25)] bg-black overflow-hidden flex items-center justify-center z-10">
          
          {/* THE NATIVE VIDEO CANVAS */}
          {/* Rotates exactly 90 degrees counter-clockwise to align perfectly right-side up */}
          {/* Uses object-contain to ensure NO character faces or clips are EVER cropped out */}
          <video 
            src="/images/pokemon/thunder-pikachu-loader.mp4" 
            autoPlay 
            muted 
            playsInline
            className="w-full h-full object-contain -rotate-90 scale-[1.35]"
            style={{ minWidth: '100%', minHeight: '100%' }}
          />
        </div>

        {/* THE ISOLATED BRANDING FLOW */}
        {/* Stays fixed perfectly underneath the presentation frame container */}
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

      {/* Synchronized keyframes to match the full 12-second duration layout tracking seamlessly */}
      <style jsx global>{`
        @keyframes progressAnimation {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

    </div>
  );
}
