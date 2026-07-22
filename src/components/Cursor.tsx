"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth trailing
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on desktop devices (pointer: fine)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const updateHoverState = () => {
      // Find what's currently being hovered
      const hoveredElement = document.elementFromPoint(mouseX.get(), mouseY.get());
      if (hoveredElement) {
        // Check if it's a clickable element
        const isClickable =
          hoveredElement.tagName.toLowerCase() === "a" ||
          hoveredElement.tagName.toLowerCase() === "button" ||
          hoveredElement.closest("a") ||
          hoveredElement.closest("button") ||
          hoveredElement.closest(".group"); // Assuming .group on cards makes them interactive
          
        setIsPointer(!!isClickable);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", updateHoverState);
    
    // Check hover state periodically during mouse movement just in case
    const hoverInterval = setInterval(updateHoverState, 100);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", updateHoverState);
      clearInterval(hoverInterval);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: isPointer ? 1.5 : 1,
        rotate: isPointer ? -5 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99999] origin-top-left hidden sm:flex"
    >
      <img
        src="/cursor.png"
        alt="cursor"
        className="w-full h-full object-contain pointer-events-none drop-shadow-md"
      />
    </motion.div>
  );
}
