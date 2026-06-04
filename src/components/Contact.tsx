"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, GitBranch, Link as LinkIcon, FileText, ArrowRight } from "lucide-react";
import { pokemonAssets } from "@/data/pokemon";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-brand-alt relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-[-10%] w-[350px] h-[350px] rounded-full bg-soft-blue/10 blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] rounded-full bg-soft-violet/10 blur-[70px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.2em] font-mono text-sky-blue uppercase font-bold mb-2"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            Let's Connect
          </motion.h2>
        </div>

        {/* Contact Layout Card */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 md:p-12 rounded-[40px] border border-white/60 shadow-lg text-center max-w-2xl mx-auto backdrop-blur-2xl relative z-10"
          >
            <h3 className="text-xl md:text-2xl font-bold text-text-primary font-mono mb-4">
              Have an idea or a collaboration in mind?
            </h3>
            <p className="text-xs md:text-sm text-text-secondary font-light leading-relaxed max-w-md mx-auto mb-10">
              I'm always open to discussing new opportunities, internship offers, open-source projects, or just talking algorithms and web tech.
            </p>

            {/* Social Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {/* Email */}
              <a
                href="mailto:pxxad@iiitl.ac.in"
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/70 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-blue/10 text-sky-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold font-mono tracking-wider text-text-primary">Email</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/pxxad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/70 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-black/[0.05] text-text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GitBranch className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold font-mono tracking-wider text-text-primary">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/pxxad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/70 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LinkIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold font-mono tracking-wider text-text-primary">LinkedIn</span>
              </a>

              {/* Resume */}
              <a
                href="#contact"
                onClick={(e) => e.preventDefault()}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/70 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group cursor-not-allowed"
                title="Resume will be available soon"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold font-mono tracking-wider text-text-primary">Resume</span>
              </a>
            </div>

            {/* CTA button */}
            <a
              href="mailto:pxxad@iiitl.ac.in"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full bg-sky-blue text-white hover:bg-sky-blue/90 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] text-xs font-mono tracking-wider"
            >
              Send an Email <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Chikorita Mascot Placement (Floating beside contact card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="absolute left-[-2%] bottom-[-50px] pointer-events-none hidden lg:block w-28 h-28 z-20 group"
          >
            <div className="relative w-full h-full">
              <Image
                src={pokemonAssets.chikorita}
                alt="Chikorita I be-leaf in you"
                width={112}
                height={112}
                className="object-contain drop-shadow-md transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white/95 px-2.5 py-1 rounded-xl shadow-md border border-sky-blue/10 text-[9px] font-mono text-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                I be-leaf in you! 🍃
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
