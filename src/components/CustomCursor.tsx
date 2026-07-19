"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [angle, setAngle] = useState(0);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const lastX = useRef(0);
  const lastY = useRef(0);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.35 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const deltaX = e.clientX - lastX.current;
      const deltaY = e.clientY - lastY.current;
      
      if (Math.abs(deltaX) > 0.5 || Math.abs(deltaY) > 0.5) {
        const radians = Math.atan2(deltaY, deltaX);
        const degrees = radians * (180 / Math.PI);
        setAngle(degrees + 90); 
      }

      lastX.current = e.clientX;
      lastY.current = e.clientY;

      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"]');
      setIsHovering(!!isClickable);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          body, a, button, [role="button"], input, select, textarea {
            cursor: none !important;
          }
        }
      `}} />

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999999] hidden md:block will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Style A: Sharp Solid Beak Vector (NO GLOW) */}
        <motion.div
          animate={{ 
            rotate: angle,
            scale: isHovering ? 0.8 : 1
          }}
          transition={{ type: "tween", ease: "linear", duration: 0 }}
          className="w-full h-full flex items-center justify-center"
        >
          <svg viewBox="0 0 40 40" className="w-5 h-5 fill-cyan-400" stroke="none">
            {/* Crisp Sharp Solid Triangle Beak (style A) */}
            <polygon points="20,2 35,35 20,26 5,35" />
          </svg>
        </motion.div>

        {/* Snappy Micro-Thunder Strike Click Discharge (NO GLOW) */}
        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 1, 0.2, 1, 0], scale: [0.6, 1.4, 1.1, 1.7, 1.3] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center mix-blend-screen"
            >
              <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-cyan-300 fill-none">
                {/* Micro arcs emitting outwards from tip on click */}
                <path d="M50,25 L45,10 L54,0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M62,40 L84,32 L96,38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38,40 L16,32 L4,38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
