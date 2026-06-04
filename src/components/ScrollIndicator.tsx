"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToAbout}
      className="flex flex-col items-center gap-2 cursor-pointer z-10 focus:outline-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      whileHover={{ y: 2 }}
    >
      <span className="text-[10px] tracking-[0.2em] font-mono text-text-secondary uppercase">
        Scroll Down
      </span>
      <div className="w-5 h-8 rounded-full border border-text-secondary/30 flex justify-center p-1">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-sky-blue"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.button>
  );
}
