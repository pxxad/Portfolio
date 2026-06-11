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
    <section id="timeline" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
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
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight"
          >
            My Timeline
          </motion.h2>
        </div>

        {/* Timeline Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          
          {/* Timeline Column */}
          <div className="lg:col-span-8 relative">
            
            {/* Center Vertical Line (Background) */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2" />
            
            {/* Growing Progress Line (Foreground) */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-sky-500 -translate-x-1/2 z-10"
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
                    <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full border-[3px] border-white bg-slate-50 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_12px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center -translate-x-1/2 z-20">
                      <EventIcon category={event.category} />
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
                      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-slate-300 hover:translate-y-[-4px] inline-block text-left w-full">
                        {/* Year Banner */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[11px] font-bold font-mono tracking-wider text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full uppercase">
                            {event.year}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-xl font-bold text-slate-900 mb-1.5 font-sans tracking-tight">
                          {event.title}
                        </h3>
                        <p className="text-xs font-semibold font-mono text-slate-500 mb-4 tracking-wide">
                          {event.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
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
              
              <div className="bg-white/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-slate-200/60 shadow-sm max-w-[240px]">
                <p className="text-[11px] font-semibold text-slate-500 leading-relaxed tracking-wide">
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
