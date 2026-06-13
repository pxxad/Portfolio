"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Link as LinkIcon, Mail } from "lucide-react";
import { pokemonAssets, PokemonAssetKey } from "@/data/pokemon";
import Image from "next/image";
import FooterBackground from "./FooterBackground";

// ── Chikorita Leaf Particles ────────────────────────────────────────────────
function ChikoritaLeaves({ active }: { active: boolean }) {
  const [leaves, setLeaves] = useState<{ id: number; x: number; y: number; r: number; s: number }[]>([]);
  
  useEffect(() => {
    if (!active) { setLeaves([]); return; }
    const interval = setInterval(() => {
      setLeaves(prev => [
        ...prev.slice(-8),
        { id: Date.now(), x: Math.random() * 60 - 30, y: -(Math.random() * 30 + 15), r: Math.random() * 360, s: Math.random() * 0.5 + 0.6 }
      ]);
    }, 300);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <AnimatePresence>
        {leaves.map(l => (
          <motion.span
            key={l.id}
            initial={{ x: 0, y: 0, opacity: 0.9, rotate: 0, scale: l.s }}
            animate={{ x: l.x, y: l.y, opacity: 0, rotate: l.r }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute left-1/2 top-0 text-[10px]"
          >
            🍃
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

// ── Snorlax Zzz Particles ───────────────────────────────────────────────────
function SnorlaxZzz({ active }: { active: boolean }) {
  const [zees, setZees] = useState<{ id: number; x: number }[]>([]);

  useEffect(() => {
    if (!active) { setZees([]); return; }
    const interval = setInterval(() => {
      setZees(prev => [
        ...prev.slice(-4),
        { id: Date.now(), x: Math.random() * 20 - 10 }
      ]);
    }, 600);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <AnimatePresence>
        {zees.map(z => (
          <motion.span
            key={z.id}
            initial={{ x: 0, y: 0, opacity: 0.8, scale: 0.6 }}
            animate={{ x: z.x, y: -35, opacity: 0, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-1/2 -top-2 text-sm font-bold text-soft-violet/60 dark:text-soft-violet/40 font-mono"
          >
            z
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [clickCount, setClickCount] = useState(0);
  const [bgKey, setBgKey] = useState<PokemonAssetKey>("footerCar");
  const [chikoHover, setChikoHover] = useState(false);
  const [snorlaxHover, setSnorlaxHover] = useState(false);

  const handleCopyrightClick = () => {
    if (bgKey === "snorlax") return;
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setBgKey("snorlax");
    }
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-[#0A0F1F] text-slate-900 dark:text-slate-200 overflow-hidden pt-32 pb-10 px-6 transition-colors duration-500">
      <FooterBackground bgKey={bgKey} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top: Brand & Personal Message */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 mb-16">
          {/* Left: Brand + Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-3 max-w-lg"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white transition-colors">
              PJB.DEV
            </h2>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase">
              Built by B Prasad
            </p>
            <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
              Software Engineer @ IIIT Lucknow
            </p>
            <p className="text-base md:text-lg font-medium text-slate-600 dark:text-slate-400 leading-relaxed mt-2 italic">
              &ldquo;Building products, solving problems, and growing every day.&rdquo;
            </p>
          </motion.div>

          {/* Right: Social + Chikorita Signature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center md:items-end gap-6"
          >
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://github.com/pxxad" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 shadow-sm transition-all group border border-slate-200/60 dark:border-white/5 hover:scale-110 hover:shadow-md">
                <GitBranch className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com/in/pxxad" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 shadow-sm transition-all group border border-slate-200/60 dark:border-white/5 hover:scale-110 hover:shadow-md">
                <LinkIcon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </a>
              <a href="mailto:pxxad@iiitl.ac.in" className="p-3 rounded-full bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 shadow-sm transition-all group border border-slate-200/60 dark:border-white/5 hover:scale-110 hover:shadow-md">
                <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Chikorita Signature with leaf hover */}
            <div
              className="relative flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200/60 dark:border-white/8 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.03]"
              onMouseEnter={() => setChikoHover(true)}
              onMouseLeave={() => setChikoHover(false)}
            >
              <ChikoritaLeaves active={chikoHover} />
              <div className="w-10 h-10 relative overflow-hidden rounded-full border-2 border-white dark:border-white/20 shadow-sm">
                <Image src={pokemonAssets.chikorita} alt="Chikorita" fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">🌱 Chikorita</p>
                <p className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Growing one commit at a time.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200/60 dark:border-white/[0.06] mb-6 transition-colors" />

        {/* Bottom: Copyright with Snorlax Zzz */}
        <div className="w-full flex justify-center">
          <div
            className="relative cursor-pointer select-none"
            onMouseEnter={() => setSnorlaxHover(true)}
            onMouseLeave={() => setSnorlaxHover(false)}
            onClick={handleCopyrightClick}
            title={bgKey === "snorlax" ? "💤 Snorlax is sleeping..." : "Click me..."}
          >
            <SnorlaxZzz active={snorlaxHover || bgKey === "snorlax"} />
            <p className="text-xs text-slate-500 dark:text-slate-500 font-mono transition-colors hover:text-slate-700 dark:hover:text-slate-300">
              &copy; {currentYear} B Prasad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
