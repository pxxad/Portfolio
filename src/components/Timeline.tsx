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
      return <GraduationCap className="w-5 h-5 text-sky-600" />;
    case "opensource":
      return <Award className="w-5 h-5 text-amber-500" />;
    case "project":
      return <Briefcase className="w-5 h-5 text-rose-500" />;
    default:
      return <Calendar className="w-5 h-5 text-indigo-500" />;
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
    <section id="timeline" ref={containerRef} className="py-32 bg-white dark:bg-[#0f1117] relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-soft-blue/5 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.25em] font-semibold text-sky-600 uppercase mb-4"
          >
            Milestones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-[#D6D9E0] tracking-tight"
          >
            My Timeline
          </motion.h2>
        </div>

        {/* Timeline Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          
          {/* Timeline Column */}
          <div className="lg:col-span-8 relative">
            
            {/* Center Vertical Line (Background) */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 dark:bg-white/5 -translate-x-1/2" />
            
            {/* Growing Progress Line (Foreground) */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-sky-500 dark:bg-[#9F7AEA] -translate-x-1/2 z-10"
            />

            {/* Timeline Cards */}
            <div className="flex flex-col gap-16">
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
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 2.2, opacity: [0, 0.4, 0] }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute w-12 h-12 rounded-full bg-sky-400 dark:bg-[#9F7AEA] pointer-events-none"
                      />
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: [0.8, 1.15, 1] }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-12 h-12 rounded-full border-[3px] border-white dark:border-[#0f1117] bg-slate-50 dark:bg-[#171a22] shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.05)] dark:shadow-none flex items-center justify-center relative z-10"
                      >
                        <EventIcon category={event.category} />
                      </motion.div>
                    </div>

                    {/* Timeline Card Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                        isLeft ? "md:text-right md:pr-14" : "md:text-left md:pl-14"
                      }`}
                    >
                      <div className="bg-white dark:bg-[#171a22] p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-slate-300 dark:hover:border-white/20 hover:translate-y-[-4px] inline-block text-left w-full">
                        {/* Year Banner */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[11px] font-bold font-mono tracking-wider text-sky-600 dark:text-[#9F7AEA] bg-sky-50 dark:bg-[#9F7AEA]/10 border border-sky-100 dark:border-[#9F7AEA]/20 px-3 py-1.5 rounded-full uppercase">
                            {event.year}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-[#D6D9E0] mb-1.5 font-sans tracking-tight">
                          {event.title}
                        </h3>
                        <p className="text-xs font-semibold font-mono text-slate-500 dark:text-[#9F7AEA]/80 mb-4 tracking-wide">
                          {event.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
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
          <div className="lg:col-span-4 sticky top-[30vh] hidden lg:flex flex-col items-center self-start h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6 text-center group w-full"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-48 h-80 relative cursor-pointer opacity-90 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={pokemonAssets.pokemonTower}
                  alt="Pokemon Stack Tower"
                  fill
                  className="object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </motion.div>
              
              <div className="bg-white/60 dark:bg-[#171a22]/80 backdrop-blur-sm px-5 py-3 rounded-2xl border border-slate-200/60 dark:border-white/5 shadow-sm max-w-[240px]">
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-relaxed tracking-wide">
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
