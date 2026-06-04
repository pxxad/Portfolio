"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Award, Trophy, Milestone } from "lucide-react";
import { pokemonAssets } from "@/data/pokemon";

const dsaRoadmap = [
  { step: "01", name: "Arrays & Hashing", desc: "Linear systems, frequency tracking, and sliding windows." },
  { step: "02", name: "Two Pointers & Linked Lists", desc: "Sequence processing, pointer traversal, and nodes." },
  { step: "03", name: "Trees & Graphs", desc: "Hierarchies, BFS/DFS sweeps, and cyclical checks." },
  { step: "04", name: "Dynamic Programming", desc: "Subproblem caching, recursion trees, and memoization." }
];

export default function DSA() {
  return (
    <section id="dsa" className="py-24 bg-brand-alt relative overflow-hidden">
      {/* Glow effect matching Ash Aura */}
      <div className="absolute right-[10%] top-[20%] w-[250px] h-[250px] rounded-full bg-sky-blue/20 blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.2em] font-mono text-sky-blue uppercase font-bold mb-2"
          >
            Algorithms
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            DSA Journey
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Profiles */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
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
                className="text-xs md:text-sm text-text-secondary leading-relaxed font-light mb-6"
              >
                Problem-solving is more than just passing tests—it's about training the mind to recognize patterns, optimize space complexity, and build reliable execution paths. I started with simple iterations and now tackle medium/hard graph problems and DP grids daily.
              </motion.p>
            </div>

            {/* Profile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LeetCode Profile */}
              <motion.a
                href="https://leetcode.com/u/pxxad/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card p-6 rounded-[24px] border border-white/50 shadow-sm flex items-center justify-between hover:bg-white/60 hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary font-mono">LeetCode</h4>
                    <p className="text-[10px] font-mono text-text-secondary">@pxxad</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              {/* Codeforces Profile */}
              <motion.a
                href="https://codeforces.com/profile/pxxad"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="glass-card p-6 rounded-[24px] border border-white/50 shadow-sm flex items-center justify-between hover:bg-white/60 hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-blue/10 text-sky-blue flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary font-mono">Codeforces</h4>
                    <p className="text-[10px] font-mono text-text-secondary">@pxxad</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </div>

          {/* Right Column: Ash Aura artwork (Training Mascot) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-56 h-72 cursor-pointer group"
            >
              <Image
                src={pokemonAssets.ashAura}
                alt="Ash Aura Training mascot"
                fill
                className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Subtle pulsing background ring */}
              <div className="absolute inset-0 bg-sky-blue/10 rounded-full filter blur-xl scale-75 animate-pulse -z-10" />
            </motion.div>
          </div>

        </div>

        {/* Visual Topic Progression Path */}
        <div className="mt-20 border-t border-black/[0.04] pt-16">
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
                <span className="absolute top-4 right-4 text-2xl font-extrabold font-mono text-black/[0.04] group-hover:text-sky-blue/10 transition-colors">
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
