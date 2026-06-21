"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  stagger?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7, // 700ms for more visible motion
  yOffset = 30, // Increased reveal distance
  className = "",
  stagger = false,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple-style custom spring/ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
