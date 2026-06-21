"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Award, Trophy, Milestone, Code2, BookOpen } from "lucide-react";
import { pokemonAssets } from "@/data/pokemon";
import FadeIn from "./FadeIn";

const dsaRoadmap = [
  { step: "01", name: "Arrays & Hashing", desc: "Linear systems, frequency tracking, and sliding windows." },
  { step: "02", name: "Two Pointers & Linked Lists", desc: "Sequence processing, pointer traversal, and nodes." },
  { step: "03", name: "Trees & Graphs", desc: "Hierarchies, BFS/DFS sweeps, and cyclical checks." },
  { step: "04", name: "Dynamic Programming", desc: "Subproblem caching, recursion trees, and memoization." },
];

const profiles = [
  {
    href: "https://leetcode.com/u/prasad__jb/",
    name: "LeetCode",
    handle: "@prasad__jb",
    icon: Trophy,
    color: "bg-amber-500/10 text-amber-600",
    delay: 0,
  },
  {
    href: "https://codeforces.com/profile/Prasad_jb",
    name: "Codeforces",
    handle: "@Prasad_jb",
    icon: Award,
    color: "bg-sky-blue/10 text-sky-blue",
    delay: 0.1,
  },
  {
    href: "https://www.codechef.com/users/prasad_jb",
    name: "CodeChef",
    handle: "@prasad_jb",
    icon: Code2,
    color: "bg-amber-800/10 text-amber-800",
    delay: 0.2,
  },
  {
    href: "https://www.tle-eliminators.com/my-profile",
    name: "TLE Eliminators",
    handle: "DSA Practice",
    icon: BookOpen,
    color: "bg-emerald-500/10 text-emerald-600",
    delay: 0.3,
  },
];


export default function DSA() {
  return (
    <section id="dsa" className="py-24 bg-brand-alt relative overflow-hidden transition-colors duration-300">
      {/* Glow effect matching Ash Aura */}
      <div className="absolute right-[10%] top-[20%] w-[250px] h-[250px] rounded-full bg-sky-blue/20 blur-[90px] -z-10 pointer-events-none" />
      <div className="absolute left-[5%] bottom-[20%] w-[180px] h-[180px] rounded-full bg-amber-300/15 blur-[70px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Ash Watermark (Competitive Programming Aura) */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none z-[-1] opacity-[0.28] dark:opacity-20"
        >
          <Image
            src={pokemonAssets.ashAura}
            alt="Ash Aura Watermark"
            width={400}
            height={400}
            className="absolute pointer-events-none z-0 object-contain"
            style={{ WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)", maskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)" }}
            priority
          />
        </motion.div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-[10px] tracking-[0.2em] font-mono text-soft-violet uppercase font-bold mb-2">
              Algorithms
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-soft-violet tracking-tight">
              DSA Journey
            </h2>
          </FadeIn>
        </div>

        {/* Content Layout */}
        <div className="w-full flex flex-col gap-12">

          {/* Narrative & Profiles */}
          <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full">
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xl font-bold text-text-primary font-mono mb-4"
              >
                Algorithmic Growth & Discipline
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xs md:text-sm text-text-secondary leading-relaxed font-light mb-8 max-w-2xl mx-auto"
              >
                Problem-solving is more than just passing tests—it's about training the mind to recognize patterns, optimize space complexity, and build reliable execution paths. I started with simple iterations and now tackle medium/hard graph problems and DP grids daily.
              </motion.p>
            </div>

            {/* Profile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {profiles.map(({ href, name, handle, icon: Icon, color, delay }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay }}
                  className="bg-white dark:bg-zinc-900/50 p-6 rounded-[24px] border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center"
                >
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white font-mono">{name}</h4>
                    <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{handle}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all absolute top-4 right-4" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Visual Topic Progression Path */}
        <div className="mt-20 border-t border-black/[0.04] dark:border-white/[0.06] pt-16">
          <h4 className="text-center text-xs font-mono tracking-[0.2em] text-text-secondary uppercase mb-12 font-semibold flex items-center justify-center gap-2">
            <Milestone className="w-4 h-4 text-sky-blue" /> Solving Path
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {dsaRoadmap.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card p-6 rounded-[24px] border border-white/50 shadow-sm transition-all duration-300 hover:bg-white/65 hover:shadow-md hover:translate-y-[-2px] relative group"
              >
                <span className="absolute top-4 right-4 text-2xl font-extrabold font-mono text-black/[0.04] dark:text-white/[0.06] group-hover:text-sky-blue/10 transition-colors">
                  {step.step}
                </span>
                <h5 className="text-sm font-bold text-text-primary font-mono mb-2">
                  {step.name}
                </h5>
                <p className="text-[11px] text-text-secondary leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
