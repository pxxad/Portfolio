"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Settings, BrainCircuit } from "lucide-react";
import { skillsData, SkillCategory } from "@/data/skills";

const categoryIcons: Record<string, any> = {
  "Languages": Code2,
  "Frameworks & Tech": Layout,
  "Developer Tools": Settings,
  "Coursework": BrainCircuit
};

import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-brand-bg relative overflow-hidden transition-colors duration-300">
      {/* Background visual detail */}
      <div className="absolute top-[10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-sky-blue/5 dark:bg-sky-500/10 blur-[70px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[300px] h-[300px] rounded-full bg-soft-violet/5 dark:bg-purple-500/10 blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-[10px] tracking-[0.2em] font-mono text-soft-violet uppercase font-bold mb-2">
              Capabilities
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-soft-violet tracking-tight">
              Technical Skillset
            </h2>
          </FadeIn>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category: SkillCategory, idx: number) => {
            const Icon = categoryIcons[category.title] || Code2;
            
            return (
              <FadeIn key={category.title} delay={idx * 0.1} yOffset={30} duration={0.6} className="h-full">
                <div className="relative p-[1px] overflow-hidden rounded-2xl bg-slate-200/60 dark:bg-zinc-800/80 z-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(124,92,252,0.15)] group h-full">
                  {/* The Beam Loop */}
                  <div className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin [animation-duration:4s] bg-[conic-gradient(from_0deg,transparent_60%,#8b5cf6_100%)] z-0" />
                  
                  {/* The Content Mask Shield */}
                  <div className="w-full h-full bg-white dark:bg-[#09090b] rounded-[15px] p-4 md:p-6 relative z-10 flex flex-col">
                    
                    {/* Category Header */}
                    <div className="flex items-center gap-2 md:gap-3.5 mb-4 md:mb-8 border-b border-slate-100 dark:border-white/5 pb-2 md:pb-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-sky-100 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white font-mono tracking-wide">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-col gap-3 md:gap-5">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col gap-1 md:gap-1.5 group/item">
                          <div className="flex justify-between items-center text-xs font-mono font-medium text-slate-500 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                            <span>{skill.name}</span>
                            <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                              {skill.proficiency}%
                            </span>
                          </div>
                          
                          {/* Interactive Progress Bar */}
                          <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden border border-slate-200 dark:border-white/5 group-hover/item:shadow-[0_0_10px_rgba(124,92,252,0.5)] transition-shadow duration-300">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-400 via-soft-violet to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: false, margin: "-50px" }}
                              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
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
