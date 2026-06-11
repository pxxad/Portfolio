"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, GitBranch, Link as LinkIcon, FileText, ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSendNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;
    setSending(true);
    // Encode and open mail client with prefilled body
    const subject = encodeURIComponent(`Note from ${name || "a visitor"} via PJB.DEV`);
    const body = encodeURIComponent(`${note}\n\n—${name || "Anonymous"}`);
    window.open(`mailto:pxxad@iiitl.ac.in?subject=${subject}&body=${body}`, "_blank");
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setSent(true);
    setNote("");
    setName("");
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] rounded-full bg-soft-blue/5 blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-soft-violet/5 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Left: Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 md:p-10 rounded-[36px] border border-white/60 shadow-lg backdrop-blur-2xl"
          >
            <h3 className="text-xl font-bold text-text-primary font-mono mb-3">
              Have an idea or a collaboration in mind?
            </h3>
            <p className="text-xs md:text-sm text-text-secondary font-light leading-relaxed mb-8">
              I&apos;m always open to discussing new opportunities, internship offers, open-source
              projects, or just talking algorithms and web tech.
            </p>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
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

            {/* CTA */}
            <a
              href="mailto:pxxad@iiitl.ac.in"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full bg-sky-blue text-white hover:bg-sky-blue/90 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] text-xs font-mono tracking-wider"
            >
              Send an Email <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: Leave a Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 md:p-10 rounded-[36px] border border-white/60 shadow-lg backdrop-blur-2xl flex flex-col"
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] font-mono text-sky-blue uppercase font-bold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-blue inline-block" />
                New
              </span>
              <h3 className="text-xl font-bold text-text-primary font-mono mb-2">
                Leave a Note ✉️
              </h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                A quick thought, feedback, or just saying hi—drop it here and I'll get it via email.
              </p>
            </div>

            <form onSubmit={handleSendNote} className="flex flex-col gap-4 flex-1">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="note-name" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-text-secondary">
                  Your name <span className="text-text-secondary/50">(optional)</span>
                </label>
                <input
                  id="note-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ash Ketchum"
                  maxLength={60}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-white/70 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue/40 transition-all font-mono"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label htmlFor="note-message" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-text-secondary">
                  Your note <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="note-message"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Hey! I just wanted to say..."
                  maxLength={500}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/70 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue/40 transition-all resize-none font-light leading-relaxed flex-1"
                />
                <p className="text-[10px] text-text-secondary/60 text-right font-mono">{note.length}/500</p>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between gap-4">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-xs font-mono text-emerald-600 font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Note sent — thank you!
                    </motion.span>
                  ) : (
                    <motion.span key="idle" className="text-[10px] text-text-secondary/60 font-mono">
                      Opens your mail client
                    </motion.span>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={sending || !note.trim()}
                  className="flex items-center gap-2 px-6 py-2.5 font-bold rounded-full text-xs font-mono tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: note.trim()
                      ? "linear-gradient(135deg, #6ba4e8 0%, #b8a9e8 100%)"
                      : undefined,
                    backgroundColor: !note.trim() ? "rgba(107,164,232,0.3)" : undefined,
                    color: "white",
                    boxShadow: note.trim() ? "0 4px 20px rgba(107,164,232,0.3)" : "none",
                  }}
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-3.5 h-3.5" />
                      Send Note
                    </span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
