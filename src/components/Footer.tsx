"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black/[0.03] pt-20 pb-12 relative overflow-hidden">
      {/* Background Soft Blob */}
      <div className="absolute bottom-[-10%] left-[40%] w-[300px] h-[300px] rounded-full bg-soft-blue/5 blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center relative">
          
          {/* Cozy Snorlax Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-48 h-36 relative mb-8 cursor-pointer group"
          >
            <Image
              src={pokemonAssets.snorlax}
              alt="Cozy Sleeping Snorlax"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
            {/* Sleeping bubble */}
            <div className="absolute top-[10%] right-[15%] text-xs font-bold font-mono text-text-secondary select-none animate-bounce">
              Zzz...
            </div>
          </motion.div>

          {/* Brand Header */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg font-bold font-mono tracking-widest text-text-primary mb-3 uppercase"
          >
            PB.DEV
          </motion.h3>

          {/* Story / Signature */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[10px] font-mono tracking-widest text-text-secondary uppercase mb-8"
          >
            B Prasad · Software Engineer · IIIT Lucknow
          </motion.p>

          {/* Links & Details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 border-t border-black/[0.04] pt-8 w-full justify-between text-xs text-text-secondary font-mono"
          >
            <p className="order-2 sm:order-1">
              &copy; {currentYear} PB.DEV. All rights reserved.
            </p>
            <div className="flex gap-6 order-1 sm:order-2">
              <a href="#home" className="hover:text-text-primary transition-colors">
                Back to Top
              </a>
              <a href="#projects" className="hover:text-text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-text-primary transition-colors">
                Contact
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}
