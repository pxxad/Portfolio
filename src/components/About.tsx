"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Code, BrainCircuit, HeartHandshake, Rocket } from "lucide-react";
import { pokemonAssets } from "@/data/pokemon";

const stories = [
  {
    icon: GraduationCap,
    title: "Stepping into IIIT Lucknow",
    description: "In 2024, I joined IIIT Lucknow to pursue my B.Tech in Information Technology. Stepping onto campus opened up a world of computer science fundamentals, low-level architecture, and collaborative engineering environments.",
    color: "bg-sky-blue/10 text-sky-blue"
  },
  {
    icon: Code,
    title: "Fascinated by Web Engineering",
    description: "I quickly picked up React and fell in love with crafting fluid interfaces. Moving beyond basic markup, I began building responsive full-stack applications, standardizing design systems, and understanding modern client-server performance patterns.",
    color: "bg-soft-violet/10 text-soft-violet"
  },
  {
    icon: BrainCircuit,
    title: "Algorithm Grind",
    description: "Problem solving is a daily ritual. I started grinding algorithms seriously to think structurally. Breaking down complex graphs, dynamic programming matrices, and trees has trained me to approach development with performance in mind.",
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    icon: HeartHandshake,
    title: "Open Source Contributions",
    description: "I believe in open collaboration. Contributing to JavaScript standard library (stdlib) and exploring high-fidelity simulation environments (gprMax) has taught me to navigate complex, production-grade repositories and write clean, verified code.",
    color: "bg-amber-500/10 text-amber-600"
  },
  {
    icon: Rocket,
    title: "The Vision Ahead",
    description: "I aim to combine my engineering discipline and visual storytelling to build tools that users love. Whether as an intern or full-time software engineer, I am driven to ship scalable code and premium products that leave a lasting impact.",
    color: "bg-rose-500/10 text-rose-600"
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-brand-alt overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] rounded-full bg-soft-blue/10 blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-lavender/15 blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.2em] font-mono text-sky-blue uppercase font-bold mb-2"
          >
            My Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            A Little About Me
          </motion.h2>
        </div>

        {/* Stories Grid */}
        <div className="flex flex-col gap-6 relative">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 md:p-8 rounded-3xl border border-white/50 shadow-sm flex flex-col md:flex-row gap-5 items-start transition-all duration-300 hover:shadow-md hover:bg-white/60 hover:translate-y-[-2px] group"
              >
                <div className={`p-3 rounded-2xl ${story.color} flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary font-mono tracking-wide mb-2">
                    {story.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bulbasaur Companion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="absolute right-[-4%] bottom-[-50px] pointer-events-none hidden xl:block w-32 h-32"
        >
          <div className="relative w-full h-full group">
            <Image
              src={pokemonAssets.bulbasaur}
              alt="Bulbasaur Companion"
              width={128}
              height={128}
              className="object-contain drop-shadow-lg transition-transform duration-500 hover:scale-115"
            />
            {/* Tiny hover message */}
            <div className="absolute right-full bottom-1/2 translate-y-1/2 mr-2 bg-white/90 px-2.5 py-1 rounded-xl shadow-md border border-emerald-500/10 text-[9px] font-mono text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Bulba! 🌱
            </div>
          </div>
        </motion.div>

        {/* Chikorita Mascot Small Placement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-[-100px] top-[10%] pointer-events-none hidden xl:block w-24 h-24"
        >
          <Image
            src={pokemonAssets.chikorita}
            alt="Chikorita Mascot"
            width={96}
            height={96}
            className="object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
