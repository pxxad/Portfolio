"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Calendar, Briefcase, GraduationCap, Award } from "lucide-react";
import { timelineData, TimelineEvent } from "@/data/timeline";
import { pokemonAssets } from "@/data/pokemon";

function EventIcon({ category }: { category: TimelineEvent["category"] }) {
  switch (category) {
    case "education":
      return <GraduationCap className="w-4 h-4 text-sky-blue" />;
    case "opensource":
      return <Award className="w-4 h-4 text-amber-600" />;
    case "project":
      return <Briefcase className="w-4 h-4 text-rose-500" />;
    default:
      return <Calendar className="w-4 h-4 text-soft-violet" />;
  }
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Scale height of vertical line
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" ref={containerRef} className="py-24 bg-brand-alt relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-soft-violet/10 blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.2em] font-mono text-sky-blue uppercase font-bold mb-2"
          >
            Milestones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            My Timeline
          </motion.h2>
        </div>

        {/* Timeline Layout Grid: left column contains the timeline, right contains sticky pokemon tower */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Timeline Column */}
          <div className="lg:col-span-8 relative">
            
            {/* Center Vertical Line (Background) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/[0.05] -translate-x-1/2" />
            
            {/* Growing Progress Line (Foreground) */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-sky-blue -translate-x-1/2 z-10"
            />

            {/* Timeline Cards */}
            <div className="flex flex-col gap-12">
              {timelineData.map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={event.year}
                    className={`flex flex-col md:flex-row items-start relative w-full ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Circle Node on Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-sky-blue/30 bg-white shadow-sm flex items-center justify-center -translate-x-1/2 z-20">
                      <EventIcon category={event.category} />
                    </div>

                    {/* Timeline Card Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                        isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
                      }`}
                    >
                      <div className="glass-card p-6 md:p-8 rounded-[24px] border border-white/50 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/65 hover:translate-y-[-2px] inline-block text-left w-full">
                        {/* Year Banner */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-bold font-mono tracking-wider text-sky-blue bg-sky-blue/10 px-2.5 py-1 rounded-full uppercase">
                            {event.year}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-base font-bold text-text-primary mb-1 font-mono">
                          {event.title}
                        </h3>
                        <p className="text-xs font-mono font-medium text-text-secondary mb-3">
                          {event.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sticky Pokemon Tower Stack Column (Desktop only, hidden on mobile) */}
          <div className="lg:col-span-4 sticky top-36 hidden lg:flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-4 text-center group"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-48 h-64 relative cursor-pointer"
              >
                <Image
                  src={pokemonAssets.pokemonTower}
                  alt="Pokemon Stack Tower"
                  fill
                  className="object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </motion.div>
              
              <div className="glass-card px-4 py-2 rounded-2xl border border-white/60 shadow-sm max-w-[200px]">
                <p className="text-[10px] font-mono text-text-secondary leading-normal">
                  Balancing work, academics, and side projects like...
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
