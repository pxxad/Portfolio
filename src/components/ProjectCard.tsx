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
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(168, 197, 240, 0.25),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm group flex flex-col h-full w-full transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-slate-300"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* Visual Header/Thumbnail Area */}
      <div 
        className="h-48 w-full relative flex items-center justify-center p-6 select-none overflow-hidden"
      >
        <div className="absolute inset-0 opacity-15" style={{ background: project.gradient }} />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        
        {/* Project Initial Display Logo / Floating Title */}
        <motion.h4 
          className="relative z-20 text-slate-800 text-2xl md:text-3xl font-black font-mono tracking-widest drop-shadow-sm text-center transition-all duration-500 group-hover:scale-105 group-hover:text-slate-900"
        >
          {project.title.toUpperCase()}
        </motion.h4>
      </div>

      {/* Project Content */}
      <div className="p-8 flex flex-col flex-grow relative z-20 bg-white">
        
        {/* Category Pill */}
        <div className="mb-4">
          <span className="text-[10px] font-bold font-mono tracking-wider text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Short & Long descriptions */}
        <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6 flex-grow">
          {project.longDescription}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 mt-auto pt-5 border-t border-slate-100">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <GitBranch className="w-4 h-4" /> Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-500 transition-colors ml-auto"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
