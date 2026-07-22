"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GitBranch } from "lucide-react";

import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";
import ScrollIndicator from "./ScrollIndicator";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// ── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center px-6 overflow-hidden pt-40 pb-20 bg-brand-bg transition-colors duration-500"
    >
      {/* Atmospheric Parallax Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Dynamic Image Background */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], y: [0, -15, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 z-0 opacity-[0.45] dark:opacity-[0.55] mix-blend-overlay"
        >
          <Image src="/images/pokemon/hero-bg-light.jpg" alt="Hero background" fill sizes="100vw" className="object-cover object-[62%_center] w-full h-full dark:hidden" priority />
          <Image src="/images/pokemon/hero-bg-dark.jpg" alt="Hero background dark" fill sizes="100vw" className="object-cover object-[62%_center] w-full h-full hidden dark:block" priority />
        </motion.div>

        {/* Layer 1: Deep Background Mist */}
        <motion.div
          animate={{ x: [0, 30, -10, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full bg-sky-300/15 dark:bg-sky-500/10 blur-[120px]"
        />
        {/* Layer 2: Soft Violet Cloud */}
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 30, -10, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-soft-violet/10 dark:bg-soft-violet/10 blur-[150px]"
        />
        {/* Layer 3: Central Highlight */}
        <motion.div
          animate={{ scale: [1, 1.1, 0.9, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-white/30 dark:bg-white/5 blur-[100px]"
        />
      </div>



      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">

        {/* Left Column: Typography & Content */}
        <motion.div
          style={{ y: textY, opacity }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Status badge */}
          <motion.div variants={fadeUpVariant} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 shadow-sm text-[11px] uppercase tracking-wider font-mono font-bold text-slate-700 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
              Available for Summer Internship 2027
            </div>
          </motion.div>

          {/* Name */}
          <div className="relative inline-block select-none mb-4">
            <motion.h1
              variants={fadeUpVariant}
              className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight relative z-10 text-slate-900 dark:text-white drop-shadow-sm font-mono"
            >
              B Prasad
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.h2
            variants={fadeUpVariant}
            className="text-lg md:text-xl lg:text-2xl font-medium text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed mb-6"
          >
            B.Tech Information Technology @ IIIT Lucknow
          </motion.h2>

          {/* Short Bio */}
          <motion.p
            variants={fadeUpVariant}
            className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed"
          >
            I build robust, high-performance web applications and contribute to complex open-source infrastructure. Passionate about system design, clean architecture, and tackling challenging engineering problems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 w-full"
          >
            <a
              href="/Resume_prasadJB.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-mono font-bold tracking-wider text-xs rounded-full bg-text-primary text-brand-bg hover:bg-text-secondary transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              Resume
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-6 py-3 font-mono font-bold uppercase tracking-wider text-xs rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              Projects
            </button>

            <a
              href="https://github.com/pxxad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-mono font-bold uppercase tracking-wider text-xs rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <GitBranch className="w-4 h-4" /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/pxxad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-mono font-bold uppercase tracking-wider text-xs rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full flex justify-center lg:justify-end items-center relative mt-4 lg:mt-0"
        >
          {/* Glassmorphic Container (Abstract Tech Visual / Blueprint) */}
          <div className="relative w-[65%] max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[340px] aspect-square lg:aspect-square rounded-[2rem] border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md shadow-xl overflow-hidden flex items-center justify-center group transition-opacity duration-500 mx-auto lg:mx-0">

            {/* Tech Wireframe / Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.12] dark:opacity-[0.07] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Glowing abstract core */}
            <div className="absolute w-32 h-32 bg-[#7C5CFC]/30 rounded-full blur-[50px] group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute w-40 h-40 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-56 h-56 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Minimalist Code Block visual */}
            <div className="absolute z-10 w-max max-w-xs bg-[#0A0F1F]/80 border border-white/10 rounded-lg p-4 font-mono text-[10px] text-slate-400 shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 flex flex-col gap-2">
              <div className="flex gap-1 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <p><span className="text-[#6EA8FE]">const</span> <span className="text-[#7C5CFC]">builder</span> = {"{"}</p>
              <p className="pl-4">name: <span className="text-emerald-400">"Prasad"</span>,</p>
              <p className="pl-4">role: <span className="text-emerald-400">"B.Tech IT Student @ IIIT Lucknow"</span>,</p>
              <p className="pl-4">focus: <span className="text-emerald-400">"Open Source & Systems Engineering"</span></p>
              <p>{"};"}</p>
            </div>

            {/* Subtle Squirtle Easter Egg */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 opacity-40 hover:opacity-80 max-w-[90px] w-[90px] h-[90px] transition-opacity duration-500 z-20"
            >
              <Image
                src={pokemonAssets.squirtle}
                alt="Squirtle"
                fill
                sizes="90px"
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <ScrollIndicator />
      </div>
    </section>
  );
}
