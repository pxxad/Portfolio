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
      className="relative glass-card rounded-[32px] overflow-hidden border border-white/50 shadow-md group flex flex-col h-full transition-shadow duration-500 hover:shadow-xl hover:bg-white/65"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />

      {/* Visual Header/Thumbnail Area */}
      <div 
        className="h-44 w-full relative flex items-center justify-center p-6 select-none"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Project Initial Display Logo / Floating Title */}
        <motion.h4 
          className="text-white text-2xl md:text-3xl font-extrabold font-mono tracking-widest drop-shadow-md text-center opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
        >
          {project.title.toUpperCase()}
        </motion.h4>
      </div>

      {/* Project Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
        
        {/* Category Pill */}
        <div className="mb-3">
          <span className="text-[9px] font-bold font-mono tracking-wider text-sky-blue bg-sky-blue/10 px-2.5 py-1 rounded-full uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-2.5 group-hover:text-sky-blue transition-colors duration-300 font-mono">
          {project.title}
        </h3>

        {/* Short & Long descriptions */}
        <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light mb-5 flex-grow">
          {project.longDescription}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-text-secondary bg-black/[0.03] px-2 py-0.5 rounded-md border border-black/[0.05]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/[0.04]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold font-mono text-text-secondary hover:text-text-primary transition-colors"
          >
            <GitBranch className="w-4 h-4" /> Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold font-mono text-sky-blue hover:text-sky-blue/80 transition-colors ml-auto"
            >
              Live Demo <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
