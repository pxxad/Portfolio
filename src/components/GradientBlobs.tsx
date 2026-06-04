"use client";

import { motion } from "framer-motion";

export default function GradientBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Blob 1: Soft Blue, Top Left */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168, 197, 240, 0.45) 0%, rgba(232, 240, 254, 0.1) 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2: Soft Violet, Center Right */}
      <motion.div
        className="absolute top-[25%] right-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(184, 169, 232, 0.35) 0%, rgba(212, 204, 240, 0.05) 75%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3: Ice Blue, Bottom Left */}
      <motion.div
        className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232, 240, 254, 0.5) 0%, rgba(168, 197, 240, 0.15) 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 30, -40, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 4: Lavender, Top Right */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212, 204, 240, 0.3) 0%, rgba(232, 240, 254, 0) 65%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
