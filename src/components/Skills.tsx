"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Settings, BrainCircuit } from "lucide-react";
import { skillsData, SkillCategory } from "@/data/skills";

const categoryIcons: Record<string, any> = {
  "Languages": Code2,
  "Frontend & UI": Layout,
  "Tools & OS": Settings,
  "Core & Focus": BrainCircuit
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-brand-bg relative overflow-hidden transition-colors duration-300">
      {/* Background visual detail */}
      <div className="absolute top-[10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-soft-blue/5 blur-[70px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[300px] h-[300px] rounded-full bg-soft-violet/5 blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.2em] font-mono text-sky-blue uppercase font-bold mb-2"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            Technical Skillset
          </motion.h2>
        </div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsData.map((category: SkillCategory) => {
            const Icon = categoryIcons[category.title] || Code2;
            
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="glass-card p-6 md:p-8 rounded-[32px] border border-white/50 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:bg-white/65 hover:translate-y-[-2px] group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-8 border-b border-black/[0.04] dark:border-white/[0.06] pb-4">
                  <div className="w-10 h-10 rounded-2xl bg-sky-blue/10 flex items-center justify-center text-sky-blue transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary font-mono tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5 group/item">
                      <div className="flex justify-between items-center text-xs font-mono font-medium text-text-secondary group-hover/item:text-text-primary transition-colors">
                        <span>{skill.name}</span>
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                          {skill.proficiency}%
                        </span>
                      </div>
                      
                      {/* Interactive Progress Bar */}
                      <div className="h-1.5 w-full bg-black/[0.05] dark:bg-white/[0.08] rounded-full overflow-hidden border border-black/[0.01] dark:border-white/[0.03]">
                        <motion.div
                          className="h-full bg-gradient-to-r from-sky-blue to-soft-violet rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
