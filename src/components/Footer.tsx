"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full min-h-[550px] flex flex-col justify-end overflow-hidden bg-[#09090b] px-6 py-12 md:px-16 z-10 select-none">

      {/* Background Image */}
      <img
        src="/images/pokemon/footer_car.jpg"
        className="absolute inset-0 w-full h-full object-cover object-[center_18%] pointer-events-none z-0"
        alt="Footer Background"
      />

      {/* Overlay Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#09090b]/40 to-transparent opacity-80 z-10 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto flex flex-col gap-10 mt-auto font-sans text-white">
        
        {/* Top Balanced Content Layout Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-end gap-8 pb-4">
          
          {/* Left Column: Profile Bio info */}
          <div className="flex flex-col gap-2.5 max-w-sm justify-self-start w-full">
            <h1 className="text-2xl font-bold tracking-tight">
              Prasad <span className="text-indigo-400 drop-shadow-[0_0_12px_rgba(129,140,248,0.45)]">JB</span>
            </h1>
            <p className="text-[12px] leading-relaxed text-white/70 font-medium tracking-wide">
              Information Technology Student at IIIT Lucknow. Architecting highly optimized, elegant web applications and exploring complex data architectures.
            </p>
          </div>

          {/* Center Column: Enhanced Glass Panel Index Directory Buttons */}
          <div className="flex flex-col gap-2.5 justify-self-start md:justify-self-center items-start md:items-center w-full md:w-auto">
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-mono font-bold md:text-center">Index Directory</p>
            <nav className="flex flex-wrap items-center justify-start md:justify-center gap-2 text-xs font-mono w-full">
              <a href="#home" className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded bg-black/50 border border-white/10 text-white/90 font-medium hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-black/80 transition-all duration-200 shadow-md backdrop-blur-md active:scale-95">
                root_dir
              </a>
              <a href="#projects" className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded bg-black/50 border border-white/10 text-white/90 font-medium hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-black/80 transition-all duration-200 shadow-md backdrop-blur-md active:scale-95">
                selected_works
              </a>
              <a href="#skills" className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded bg-black/50 border border-white/10 text-white/90 font-medium hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-black/80 transition-all duration-200 shadow-md backdrop-blur-md active:scale-95">
                core_stack
              </a>
              <a href="#dsa" className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded bg-black/50 border border-white/10 text-white/90 font-medium hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-black/80 transition-all duration-200 shadow-md backdrop-blur-md active:scale-95">
                algorithms
              </a>
            </nav>
          </div>

          {/* Right Column: Social Redirections & Availability Badges */}
          <div className="flex flex-col gap-4 items-start md:items-end justify-self-start md:justify-self-end w-full md:w-auto">
            <div className="flex flex-col gap-2.5 items-start md:items-end w-full">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-mono font-bold">Social & Connect</p>
              <div className="flex flex-wrap items-center gap-2">
                <a href="https://github.com/pxxad" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-mono rounded bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/15 transition-all text-white/90 font-medium backdrop-blur-md active:scale-95">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/prasad-jb-a67416339/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-mono rounded bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/15 transition-all text-white/90 font-medium backdrop-blur-md active:scale-95">
                  LinkedIn
                </a>
                <a href="/Resume_prasadJB.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-mono rounded bg-rose-500/20 border border-rose-400/30 hover:border-rose-400/60 hover:bg-rose-500/30 transition-all text-white font-medium backdrop-blur-md active:scale-95">
                  Resume
                </a>
                <a href="mailto:pxxad@iiitl.ac.in" className="px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-mono rounded bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/15 transition-all text-white/90 font-medium backdrop-blur-md active:scale-95">
                  Email
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 items-start md:items-end">
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[11px] font-mono text-emerald-300 font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.08)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                Available for summer internships
              </span>
            </div>
          </div>

        </div>

        {/* High-Fidelity Thin Separation Rule */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom Legal Metadata Line */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-white/40 font-medium pb-8">
          <div>
            © {currentYear} PRASAD JB. ALL RIGHTS RESERVED.
          </div>
          <div className="uppercase tracking-[0.2em] text-white/50 font-bold">
            DESIGNED & BUILT FROM THE GROUND UP
          </div>
        </div>

      </div>
    </footer>
  );
}
