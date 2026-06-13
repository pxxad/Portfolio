"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Spotlight effect coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top } = card.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
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
      className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#171A22] border border-slate-200 dark:border-white/10 shadow-sm group flex flex-col h-full w-full transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-slate-300 dark:hover:border-white/20"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* Premium Diagonal Reflective Streak */}
      <div 
        className="absolute inset-y-0 -left-[100%] w-[80%] bg-gradient-to-r from-transparent via-white/25 dark:via-white/12 to-transparent -skew-x-12 pointer-events-none z-20 transition-transform duration-700 ease-out group-hover:translate-x-[260%] motion-reduce:hidden" 
      />

      {/* Visual Header/Thumbnail Area */}
      <div 
        className="h-48 w-full relative flex items-center justify-center p-6 select-none overflow-hidden border-b border-slate-100 dark:border-white/5"
      >
        <div className="absolute inset-0 opacity-15" style={{ background: project.gradient }} />
        <div className="absolute inset-0 bg-white/40 dark:bg-[#171A22]/40 backdrop-blur-[2px]" />
        
        {/* Project Initial Display Logo / Floating Title */}
        <motion.h4 
          className="relative z-20 text-slate-800 dark:text-[#D6D9E0]/95 text-2xl md:text-3xl font-black font-mono tracking-widest drop-shadow-sm text-center transition-all duration-500 group-hover:scale-105 group-hover:text-slate-900 dark:group-hover:text-white"
        >
          {project.title.toUpperCase()}
        </motion.h4>
      </div>

      {/* Project Content */}
      <div className="p-8 flex flex-col flex-grow relative z-20 bg-white dark:bg-[#171A22]">
        
        {/* Category Pill */}
        <div className="mb-4">
          <span className="text-[10px] font-bold font-mono tracking-wider text-sky-600 dark:text-[#9F7AEA] bg-sky-50 dark:bg-[#9F7AEA]/10 border border-sky-100 dark:border-[#9F7AEA]/20 px-3 py-1.5 rounded-full uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-[#D6D9E0] mb-3 group-hover:text-sky-600 dark:group-hover:text-[#9F7AEA] transition-colors duration-300">
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
              className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-white/5"
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
              className="flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-[#9F7AEA] hover:text-sky-500 dark:hover:text-[#9F7AEA]/80 transition-colors ml-auto"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
