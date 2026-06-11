"use client";

import { GitBranch, Link as LinkIcon, Mail } from "lucide-react";
import { pokemonAssets } from "@/data/pokemon";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 overflow-hidden pt-40 pb-12 px-6 transition-colors duration-300">
      {/* Integrated Snorlax Forest Background (Occupies ~70% from bottom) */}
      <div className="absolute inset-x-0 bottom-0 h-[70%] pointer-events-none opacity-20 dark:opacity-15 mix-blend-multiply dark:mix-blend-screen select-none z-0">
        <Image
          src={pokemonAssets.snorlax}
          alt="Snorlax Forest"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Gradient mask to blend the top of the image into the solid background */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-slate-50/40 to-slate-50 dark:via-slate-950/40 dark:to-slate-950 transition-colors duration-300" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center pt-10">
        {/* Top Section: Brand & Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 border-b border-slate-300 dark:border-white/10 pb-24 transition-colors duration-300">
          
          {/* Brand Info & Closing Statement */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-lg">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white">PJB.DEV</h2>
            <div className="flex flex-col gap-1">
              <p className="text-base font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase">Built by B Prasad</p>
              <p className="text-sm font-mono text-slate-500 dark:text-slate-400">Software Engineer @ IIIT Lucknow</p>
            </div>
            <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
              Building products, solving problems, and growing every day.
            </p>
          </div>

          {/* Social Links & Signature */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              <a href="https://github.com/pxxad" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm transition-all group border border-slate-200 dark:border-white/5">
                <GitBranch className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com/in/pxxad" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm transition-all group border border-slate-200 dark:border-white/5">
                <LinkIcon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </a>
              <a href="mailto:pxxad@iiitl.ac.in" className="p-3.5 rounded-full bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm transition-all group border border-slate-200 dark:border-white/5">
                <Mail className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Signature Mascot Integrated */}
            <div className="flex items-center gap-3 mt-6 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="w-10 h-10 relative overflow-hidden rounded-full border-2 border-white dark:border-white/20 shadow-sm">
                <Image src={pokemonAssets.chikorita} alt="Chikorita" fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">🌱 Chikorita</p>
                <p className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Growing one commit at a time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="w-full flex justify-center mt-8">
          <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
            &copy; {currentYear} B Prasad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
