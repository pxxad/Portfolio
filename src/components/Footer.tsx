"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-bg transition-colors duration-500 text-text-secondary overflow-hidden pt-24 pb-8 px-8 border-t border-black/5 dark:border-white/5">
      {/* Background Soft Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-soft-violet/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] rounded-full bg-sky-blue/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center gap-6">

        {/* Brand & Identity */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-3xl font-black tracking-tight text-text-primary font-mono">
            PJB.DEV
          </h2>
          <p className="text-xs md:text-sm font-mono text-text-secondary">
            B. Prasad | B.Tech IT Student @ IIIT Lucknow
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 mt-4">
          <a href="https://github.com/pxxad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-soft-violet transition-colors duration-300 font-mono text-xs uppercase tracking-wider group">
            <GitBranch className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> GitHub
          </a>
          <a href="https://linkedin.com/in/pxxad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-sky-blue transition-colors duration-300 font-mono text-xs uppercase tracking-wider group">
            <LinkedinIcon className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> LinkedIn
          </a>
          <a href="mailto:pxxad@iiitl.ac.in" className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-300 font-mono text-xs uppercase tracking-wider group">
            <Mail className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> Email
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] font-mono mt-8 opacity-60">
          &copy; {currentYear} B Prasad. All rights reserved.
        </p>
      </div>

      {/* Minimal Snorlax Silhouette */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-16 h-16 opacity-30 dark:opacity-20 pointer-events-none"
      >
        <Image
          src={pokemonAssets.snorlax}
          alt="Sleeping Snorlax"
          fill
          className="object-contain"
        />
      </motion.div>
    </footer>
  );
}
