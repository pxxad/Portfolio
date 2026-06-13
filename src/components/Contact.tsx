"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, Link as LinkIcon, FileText, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] rounded-full bg-soft-blue/5 blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-soft-violet/5 blur-[100px] -z-10 pointer-events-none" />

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
            Let&apos;s Connect
          </motion.h2>
        </div>

        {/* Social Links Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 md:p-12 rounded-[36px] border border-white/60 shadow-lg backdrop-blur-2xl text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-text-primary font-mono mb-4">
            Have an idea or a collaboration in mind?
          </h3>
          <p className="text-sm md:text-base text-text-secondary font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Currently seeking internships, open-source opportunities, and exciting engineering projects.
          </p>

          {/* Social Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {/* Email */}
            <a
              href="mailto:pxxad@iiitl.ac.in"
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/70 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-blue/10 text-sky-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold font-mono tracking-wider text-text-primary uppercase">Email</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/pxxad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/70 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-black/[0.05] text-text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <GitBranch className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold font-mono tracking-wider text-text-primary uppercase">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/pxxad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/70 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LinkIcon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold font-mono tracking-wider text-text-primary uppercase">LinkedIn</span>
            </a>

            {/* Resume */}
            <a
              href="#contact"
              onClick={(e) => e.preventDefault()}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/70 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group cursor-not-allowed"
              title="Resume will be available soon"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold font-mono tracking-wider text-text-primary uppercase">Resume</span>
            </a>
          </div>

          {/* CTA */}
          <a
            href="mailto:pxxad@iiitl.ac.in"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-full bg-sky-blue text-white hover:bg-sky-blue/90 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] text-sm font-mono tracking-wider"
          >
            Say Hello <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
