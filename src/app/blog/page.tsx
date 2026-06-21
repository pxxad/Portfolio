"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Terminal, Cpu, GraduationCap, GitBranch, Layout, Lightbulb } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";

const categories = [
  {
    title: "Codeforces Journey",
    description: "Strategies, editorials, and lessons learned from competitive programming.",
    icon: Terminal,
    count: 0
  },
  {
    title: "GSoC 2026 Preparation",
    description: "Documenting the path to Google Summer of Code, proposal writing, and contributions.",
    icon: Lightbulb,
    count: 0
  },
  {
    title: "Open Source",
    description: "Deep dives into massive codebases and writing production-grade PRs.",
    icon: GitBranch,
    count: 0
  },
  {
    title: "IIIT Lucknow",
    description: "Life, academics, and projects from the campus of Indian Institute of Information Technology.",
    icon: GraduationCap,
    count: 0
  },
  {
    title: "Portfolio Development",
    description: "Behind the scenes of building this exact site: animations, architecture, and design.",
    icon: Layout,
    count: 0
  },
  {
    title: "System Design Notes",
    description: "Breaking down complex systems, scalability, and backend architecture.",
    icon: Cpu,
    count: 0
  },
  {
    title: "DSA Learnings",
    description: "Pattern recognition, dynamic programming matrices, and advanced data structures.",
    icon: BookOpen,
    count: 0
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-bg text-text-primary pt-32 pb-24 selection:bg-soft-violet/30 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <FadeIn delay={0.1} yOffset={10}>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </FadeIn>

        {/* Hero Section */}
        <FadeIn delay={0.2} className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider uppercase mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Garden</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Writing & Reflections
          </h1>
          <p className="text-text-secondary max-w-xl leading-relaxed text-lg">
            A structured space for long-form thoughts on competitive programming, open-source engineering, and the journey through IIIT Lucknow.
          </p>
        </FadeIn>

        {/* Categories Grid */}
        <div className="mb-16">
          <FadeIn delay={0.3} yOffset={20}>
            <h2 className="text-2xl font-bold mb-8 font-mono tracking-tight text-text-primary">
              Categories
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <FadeIn key={cat.title} delay={0.4 + (idx * 0.05)} yOffset={20}>
                  <Link href={`/blog?category=${encodeURIComponent(cat.title)}`} className="block group h-full">
                    <div className="h-full glass-card p-6 rounded-3xl border border-white/10 shadow-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-md hover:border-white/20 relative overflow-hidden flex flex-col">
                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                      
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-text-primary group-hover:text-purple-400 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-text-secondary bg-white/5 px-2.5 py-1 rounded-md">
                          {cat.count} posts
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-text-primary mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {cat.title}
                      </h3>
                      
                      <p className="text-sm text-text-secondary leading-relaxed font-medium relative z-10 flex-grow">
                        {cat.description}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Empty State / Coming Soon */}
        <FadeIn delay={0.8} yOffset={20} className="mt-20">
          <div className="p-8 rounded-3xl glass-card border border-white/10 text-center border-dashed border-2">
            <h3 className="text-xl font-bold mb-2 text-text-primary">Content Pipeline Syncing...</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto">
              The blog structure is currently being finalized. Check back soon for the first batch of articles regarding the GSoC 2026 preparation and Codeforces editorials.
            </p>
          </div>
        </FadeIn>
      </div>
      </div>
    </>
  );
}
