"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GitBranch, ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  
  // Spotlight effect coordinates
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
    
    // Calculate 3D tilt (max 3 degrees)
    const rotateX = ((y / height) - 0.5) * -6; // -3 to 3
    const rotateY = ((x / width) - 0.5) * 6; // -3 to 3
    
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
      rgba(159, 122, 234, 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl overflow-hidden bg-white dark:bg-soft-blue border border-slate-200 dark:border-white/10 shadow-[0_0_45px_rgba(139,92,246,0.06)] dark:shadow-[0_0_60px_rgba(139,92,246,0.04)] group flex flex-col h-full w-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:border-slate-300 dark:hover:border-white/20 transition-colors duration-300"
      style={{ transition: "transform 0.2s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out" }}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />

      {/* Premium Diagonal Reflective Streak */}
      <div 
        className="absolute inset-y-0 -left-[100%] w-[80%] bg-gradient-to-r from-transparent via-white/25 dark:via-white/12 to-transparent -skew-x-12 pointer-events-none z-20 transition-transform duration-700 ease-out group-hover:translate-x-[260%] motion-reduce:hidden" 
      />

      {/* Visual Header/Thumbnail Area */}
      <div 
        className="h-48 w-full relative flex items-center justify-center select-none overflow-hidden border-b border-slate-100 dark:border-white/5"
      >
        <div className="absolute inset-0 opacity-15 z-0" style={{ background: project.gradient }} />
        {project.banner && !imgError ? (
          <div className="absolute inset-0 z-0 bg-slate-900">
            <Image
              src={project.banner}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-90 dark:opacity-70"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 mix-blend-overlay">
            <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Code className="w-8 h-8 text-white/50" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-white/10 dark:bg-soft-blue/20 backdrop-blur-[1px] z-10" />
        
        {/* Project Initial Display Logo / Floating Title */}
        <motion.h4 
          className="relative z-20 text-slate-800 dark:text-zinc-100 font-bold text-2xl md:text-3xl font-mono tracking-widest drop-shadow-lg text-center transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
          style={{ textShadow: "0px 4px 10px rgba(0,0,0,0.5)" }}
        >
          {project.title.toUpperCase()}
        </motion.h4>
      </div>

      {/* Project Content */}
      <div className="p-8 flex flex-col flex-grow relative z-20 bg-white dark:bg-soft-blue" style={{ zIndex: 30 }}>
        
        {/* Category Pill */}
        <div className="mb-4">
          <span className="text-[10px] font-bold font-mono tracking-wider text-sky-600 dark:text-soft-violet bg-sky-50 dark:bg-soft-violet/10 border border-sky-100 dark:border-soft-violet/20 px-3 py-1.5 rounded-full uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-text-primary mb-3 group-hover:text-sky-600 dark:group-hover:text-soft-violet transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-6 flex-grow">
          {project.longDescription}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-white/5 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 mt-auto pt-5 border-t border-slate-100 dark:border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <GitBranch className="w-4 h-4" /> Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-soft-violet hover:text-sky-500 dark:hover:text-soft-violet/80 transition-colors ml-auto"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
