"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    // Hide native cursor when component is active
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.body.style.cursor = "auto";
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Target Point */}
      <div
        className="hidden md:block w-2 h-2 bg-red-500 rounded-full fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Companion Outer Aura Ring */}
      <div
        className={`hidden md:block w-6 h-6 border rounded-full fixed pointer-events-none z-[9998] transition-all duration-150 ${
          isHovering ? "scale-150 border-violet-500" : "border-red-500/30"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
