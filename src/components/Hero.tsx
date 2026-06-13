"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Cpu, ArrowRight } from "lucide-react";
import GradientBlobs from "./GradientBlobs";
import ScrollIndicator from "./ScrollIndicator";
import PokemonEasterEgg from "./PokemonEasterEgg";
import SparkCompanion from "./SparkCompanion";

// ── Electric Particle Canvas ─────────────────────────────────────────────────
function ElectricParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    interface Spark {
      x: number; y: number; vx: number; vy: number;
      life: number; maxLife: number; size: number;
      color: string;
    }

    const COLORS = [
      "rgba(251,191,36,",   // amber / electric yellow
      "rgba(250,204,21,",   // yellow
      "rgba(147,197,253,",  // sky blue
      "rgba(196,181,253,",  // violet
    ];

    let sparks: Spark[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawn = () => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      sparks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.85,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(Math.random() * 0.6 + 0.2),
        life: 0,
        maxLife: Math.random() * 120 + 60,
        size: Math.random() * 1.8 + 0.6,
        color,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn a few new sparks each frame
      if (Math.random() < 0.35) spawn();

      sparks = sparks.filter(s => s.life < s.maxLife);
      for (const s of sparks) {
        const progress = s.life / s.maxLife;
        const alpha = progress < 0.15
          ? progress / 0.15 * 0.55
          : (1 - progress) * 0.55;

        ctx.beginPath();
        // Tiny electric bolt shape (elongated)
        ctx.ellipse(s.x, s.y, s.size * 0.6, s.size * 2.2, Math.atan2(s.vy, s.vx), 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${alpha.toFixed(2)})`;
        ctx.fill();

        s.x += s.vx;
        s.y += s.vy;
        s.life++;
      }
      raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}

// ── Cursor Reactive Glow ─────────────────────────────────────────────────────
function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handler = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    section.addEventListener("mousemove", handler);
    return () => section.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          left: pos.x - 300,
          top: pos.y - 300,
          background: "radial-gradient(circle, rgba(251,191,36,0.09) 0%, rgba(147,197,253,0.06) 40%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showStreak, setShowStreak] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    const played = sessionStorage.getItem("pjb_hero_streak_played");
    if (!played) {
      setShowStreak(true);
      sessionStorage.setItem("pjb_hero_streak_played", "true");
    }

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const cardsY  = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 overflow-hidden pt-32 pb-12"
      style={{
        background:
          "linear-gradient(135deg, #f0f4ff 0%, #fafbff 30%, #fff9f0 60%, #f5f0ff 100%)",
      }}
    >
      {/* Premium gradient layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[55%] h-[70%] rounded-full bg-sky-blue/8 blur-[120px]" />
        <div className="absolute top-[10%] right-[-8%] w-[45%] h-[60%] rounded-full bg-soft-violet/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[50%] h-[40%] rounded-full bg-amber-200/10 blur-[80px]" />
      </div>

      {/* Background parallax blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-full -z-10">
        <GradientBlobs />
      </motion.div>

      {/* Electric particles */}
      <ElectricParticles />

      {/* Cursor reactive glow */}
      <CursorGlow />

      {/* Floating Squirtle Easter Egg */}
      <PokemonEasterEgg />

      {/* Hero Content Area */}
      <div className="flex-1 w-full max-w-5xl mx-auto flex flex-col justify-center items-center relative z-10 mt-8">

        {/* Brand & Name Typography */}
        <motion.div
          style={{ y: textY, opacity }}
          className="text-center flex flex-col items-center select-none w-full"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm text-xs font-bold text-slate-700 tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Seeking Summer 2026 Internship Opportunities
            </div>
          </motion.div>

          {/* Name */}
          <div className="relative inline-block select-none mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight relative z-10"
              style={{
                background: "linear-gradient(135deg, #1a1a2e 0%, #2d3561 50%, #1a1a2e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              B Prasad
            </motion.h1>

            {showStreak && !reducedMotion && (
              <svg
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-[120%] left-[-10%] h-12 pointer-events-none -z-10 overflow-visible opacity-25 dark:opacity-15"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 0,10 Q 15,3 30,12 T 60,8 T 85,13 T 100,10"
                  fill="none"
                  stroke="url(#lightningGrad)"
                  strokeWidth="2"
                  filter="drop-shadow(0 0 5px #fbbf24)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.8, 0.8, 0] }}
                  transition={{
                    pathLength: { duration: 0.5, ease: "easeOut", delay: 1.3 },
                    opacity: { duration: 0.6, times: [0, 0.15, 0.85, 1], ease: "linear", delay: 1.3 }
                  }}
                />
                <defs>
                  <linearGradient id="lightningGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                    <stop offset="25%" stopColor="#fbbf24" stopOpacity="1" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                    <stop offset="75%" stopColor="#fbbf24" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 px-4"
          >
            Software Engineer <span className="mx-2 opacity-40">|</span>{" "}
            <span className="font-normal">IIIT Lucknow</span>
          </motion.h2>

          {/* CTA buttons + Spark Companion (inline) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 justify-center"
          >
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 px-7 py-3.5 font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a2e 0%, #2d3561 100%)",
                color: "white",
                boxShadow: "0 4px 24px rgba(26,26,46,0.25)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Shimmer overlay */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </button>

            <a
              href="#contact"
              className="px-7 py-3.5 font-bold rounded-full bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-sm hover:bg-white"
            >
              Get in Touch
            </a>

            <SparkCompanion />
          </motion.div>
        </motion.div>

        {/* Floating parallax cards */}
        <motion.div
          style={{ y: cardsY }}
          className="absolute inset-0 pointer-events-none hidden xl:block"
        >
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20, rotate: -4 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -4 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[35%] left-[5%] p-4 rounded-2xl w-56 flex items-center gap-4"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 8px 32px rgba(107,164,232,0.12)",
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 border border-sky-100">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Focus</p>
              <h4 className="text-xs font-bold text-slate-700">TypeScript / C++</h4>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20, rotate: 4 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
            transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[48%] right-[5%] p-4 rounded-2xl w-56 flex items-center gap-4"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 8px 32px rgba(184,169,232,0.12)",
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Studies</p>
              <h4 className="text-xs font-bold text-slate-700">IT Undergrad</h4>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="w-full flex justify-center mt-12 md:mt-24">
        <ScrollIndicator />
      </div>
    </section>
  );
}
