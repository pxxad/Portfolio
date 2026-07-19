"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GitBranch, ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { pokemonAssets } from "@/data/pokemon";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
    const rotateX = ((y / height) - 0.5) * -6;
    const rotateY = ((x / width) - 0.5) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  const background = useMotionTemplate`
    radial-gradient(
      350px circle at ${mouseX}px ${mouseY}px,
      rgba(139, 92, 246, 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 shadow-[0_0_45px_rgba(139,92,246,0.06)] dark:shadow-[0_0_60px_rgba(139,92,246,0.04)] group flex flex-col h-full w-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-violet-500/30 dark:hover:border-violet-500/30 transition-all duration-300"
      style={{ transition: "transform 0.2s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out" }}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />

      {/* Premium Diagonal Reflective Streak */}
      <div
        className="absolute inset-y-0 -left-[100%] w-[80%] bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -skew-x-12 pointer-events-none z-20 transition-transform duration-700 ease-out group-hover:translate-x-[260%] motion-reduce:hidden"
      />

      {/* Visual Header / Thumbnail Area */}
      <div className="h-32 sm:h-40 md:h-48 w-full relative flex items-center justify-center select-none overflow-hidden border-b border-slate-100 dark:border-zinc-800/50 bg-slate-950">
        <div className="absolute inset-0 opacity-25 z-0" style={{ background: project.gradient }} />

        {project.banner && !imgError ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={project.banner}
              alt={project.title}
              fill
              className="object-cover opacity-100 dark:opacity-70 transition-transform duration-700 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 mix-blend-overlay">
            <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Code className="w-8 h-8 text-white/50" />
            </div>
          </div>
        )}

        {/* Dynamic Squirtle Companion Integration */}
        {/* Placed as an absolute decoration anchor inside the banner area so it naturally shifts without crushing card copy layout */}
        <div className="absolute bottom-2 right-3 w-10 h-10 md:w-14 md:h-14 z-20 pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] opacity-85 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
          <Image
            src={pokemonAssets.squirtle}
            alt="Squirtle Companion"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>

        {/* Clear bottom dark scrim to maximize white text readability over bright images */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Floating Project Title */}
        <motion.h4
          className="relative z-20 text-white font-bold text-2xl md:text-3xl font-mono tracking-widest drop-shadow-2xl text-center transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
          style={{ textShadow: "0px 4px 12px rgba(0,0,0,0.9)" }}
        >
          {project.title.toUpperCase()}
        </motion.h4>
      </div>

      {/* Project Content Box */}
      <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow relative z-20 bg-white dark:bg-zinc-900" style={{ zIndex: 30 }}>

        {/* Category Pill */}
        <div className="mb-4">
          <span className="text-[10px] font-bold font-mono tracking-wider text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/40 px-3 py-1.5 rounded-full uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 mb-1.5 md:mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-medium mb-4 md:mb-6 flex-grow">
          {project.longDescription}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-slate-600 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-800/40 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-zinc-800/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links Baseline */}
        <div className="flex items-center gap-2 sm:gap-4 mt-auto pt-3 md:pt-5 border-t border-slate-100 dark:border-zinc-800/60 w-full justify-between sm:justify-start">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <GitBranch className="w-4 h-4" /> Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors ml-auto"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}