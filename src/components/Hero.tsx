"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Cpu, ArrowRight } from "lucide-react";
import GradientBlobs from "./GradientBlobs";
import FloatingParticles from "./FloatingParticles";
import ScrollIndicator from "./ScrollIndicator";
import PokemonEasterEgg from "./PokemonEasterEgg";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 overflow-hidden pt-32 pb-12 bg-radial from-white via-brand-alt to-white"
    >
      {/* Background visual elements with scroll parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-full -z-10">
        <GradientBlobs />
        <FloatingParticles />
      </motion.div>

      {/* Floating Squirtle Easter Egg */}
      <PokemonEasterEgg />

      {/* Hero Content Area */}
      <div className="flex-1 w-full max-w-6xl mx-auto flex flex-col justify-center items-center relative z-10">
        
        {/* Floating status tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/50 text-[10px] md:text-xs font-mono font-medium text-sky-blue uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Internships
          </div>
        </motion.div>

        {/* Brand & Name Typography */}
        <motion.div
          style={{ y: textY, opacity }}
          className="text-center flex flex-col items-center select-none"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs md:text-sm font-mono tracking-[0.3em] text-text-secondary uppercase mb-3 font-semibold"
          >
            SOFTWARE ENGINEER · IIIT LUCKNOW
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-text-primary via-text-primary to-text-primary/70 mb-6 uppercase"
          >
            B Prasad
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl md:text-2xl font-light text-text-secondary max-w-xl mx-auto leading-relaxed mb-10 px-4"
          >
            Designing high-fidelity user experiences and engineering robust systems at IIIT Lucknow.
          </motion.h2>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 px-6 py-3 font-semibold rounded-full bg-sky-blue text-white hover:bg-sky-blue/90 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="#contact"
              className="px-6 py-3 font-semibold rounded-full glass-card hover:bg-white/60 text-text-primary transition-all duration-300 hover:translate-y-[-2px] border border-white/60"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Floating cards / Parallax details */}
        <motion.div
          style={{ y: cardsY }}
          className="absolute inset-0 pointer-events-none hidden lg:block"
        >
          {/* Card left: Code snippet */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: -6 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[35%] left-[5%] glass-card p-4 rounded-2xl w-60 border border-white/50 shadow-lg flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-blue/10 flex items-center justify-center text-sky-blue">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Language Focus</p>
              <h4 className="text-xs font-mono font-bold text-text-primary">TypeScript & C++</h4>
            </div>
          </motion.div>

          {/* Card right: Tech specs */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[48%] right-[5%] glass-card p-4 rounded-2xl w-60 border border-white/50 shadow-lg flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-soft-violet/10 flex items-center justify-center text-soft-violet">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Degree Focus</p>
              <h4 className="text-xs font-mono font-bold text-text-primary">B.Tech IT (2024–28)</h4>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Down indicator */}
      <div className="w-full flex justify-center mt-6">
        <ScrollIndicator />
      </div>
    </section>
  );
}
