"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorAura() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values to prevent React re-renders on every mouse move
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for the trailing effect
  const springConfig = { stiffness: 180, damping: 22, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only mount on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) return;
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group") || // General cards
        target.closest(".glass-card") || // Project cards
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  const size = isHovering ? 56 : 24;

  return (
    <motion.div
      className="hidden md:block fixed pointer-events-none z-[999] rounded-full transition-colors duration-300 bg-[rgba(124,92,255,0.12)] dark:bg-[rgba(139,92,246,0.18)]"
      style={{
        left: cursorX,
        top: cursorY,
        x: "-50%",
        y: "-50%",
        width: size,
        height: size,
        filter: "blur(12px)",
      }}
      animate={{
        width: size,
        height: size,
        opacity: isHovering ? 0.8 : 0.5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    />
  );
}
