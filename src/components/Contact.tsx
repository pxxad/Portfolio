"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GitBranch, Link as LinkIcon, FileText, ArrowRight, Send } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newNote = {
      id: `wall-note-${Date.now()}`,
      text: message.trim(),
      author: name.trim() || "Anonymous",
      date: "Just now",
    };

    try {
      const stored = localStorage.getItem("pjb_wall_notes");
      const existing = stored ? JSON.parse(stored) : [];
      localStorage.setItem("pjb_wall_notes", JSON.stringify([newNote, ...existing]));
    } catch (err) {
      console.error(err);
    }

    setSent(true);
    setName("");
    setMessage("");

    // Redirect to the Wall page after brief feedback
    setTimeout(() => {
      window.location.href = "/wall";
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        handleSubmit(e);
      }
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 dark:bg-brand-alt relative overflow-hidden transition-colors duration-300">
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] rounded-full bg-soft-blue/5 blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-soft-violet/5 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[10px] tracking-[0.2em] font-mono text-sky-blue uppercase font-bold mb-2">
              Get In Touch
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-soft-violet tracking-tight">
              Open to Opportunities
            </h2>
          </FadeIn>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Column: Leave a Note + Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Leave a Note headline */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary font-mono mb-3">
                Leave a Note ✉️
              </h3>
              <p className="text-sm md:text-base text-text-secondary font-light leading-relaxed">
                Drop a thought, feedback, or just say hi.
                <br />
                <span className="text-xs text-text-secondary/70">Currently seeking internships, open-source opportunities, and exciting engineering projects.</span>
              </p>
            </div>

            {/* Social Grid — compact */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="mailto:prasadjb24@gmail.com"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-blue/10 text-sky-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold font-mono tracking-wider text-text-primary uppercase">Email</span>
              </a>

              <a
                href="https://github.com/pxxad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-black/[0.05] dark:bg-white/5 text-text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GitBranch className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold font-mono tracking-wider text-text-primary uppercase">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/prasad-jb-a67416339/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LinkIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold font-mono tracking-wider text-text-primary uppercase">LinkedIn</span>
              </a>

              <a
                href="/Resume_prasadJB.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-sm hover:translate-y-[-2px] transition-all duration-300 group"
                title="View Resume"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold font-mono tracking-wider text-text-primary uppercase">Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Leave a Note Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 rounded-[28px] border border-white/60 dark:border-white/[0.06] shadow-lg flex flex-col gap-5"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="note-name" className="text-[11px] font-bold font-mono tracking-wider text-text-secondary uppercase">
                  Name
                </label>
                <input
                  id="note-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Anonymous by default"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/8 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-sky-blue/40 transition-all font-mono"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="note-message" className="text-[11px] font-bold font-mono tracking-wider text-text-secondary uppercase">
                  Message
                </label>
                <textarea
                  id="note-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Drop a thought, feedback, or just say hi 👋"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/8 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-sky-blue/40 transition-all resize-none font-mono"
                />
              </div>

              {/* Send CTA */}
              <button
                type="submit"
                disabled={!message.trim()}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:translate-y-[-2px] text-sm font-mono tracking-wider disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {sent ? (
                  <>Sent! ✨</>
                ) : (
                  <>
                    Send Note <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
