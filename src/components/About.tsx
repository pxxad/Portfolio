"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, BrainCircuit, HeartHandshake, Rocket } from "lucide-react";
import FadeIn from "./FadeIn";

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
    <section id="about" className="relative py-24 bg-brand-alt overflow-hidden transition-colors duration-300">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] rounded-full bg-soft-blue/10 blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-lavender/15 blur-[90px] -z-10 pointer-events-none" />



      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[10px] tracking-[0.2em] font-mono text-soft-violet uppercase font-bold mb-2">
              My Story
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-soft-violet tracking-tight">
              A Little About Me
            </h2>
          </FadeIn>
        </div>

        {/* Stories Grid */}
        <div className="flex flex-col gap-6 relative">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <FadeIn
                key={story.title}
                delay={index * 0.1}
                duration={0.5}
                yOffset={20}
                stagger={true}
              >
                <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/50 shadow-sm flex flex-col md:flex-row gap-5 items-start transition-all duration-300 hover:shadow-md hover:bg-white/60 hover:translate-y-[-2px] group">
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
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
