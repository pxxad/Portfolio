"use client";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[500px] flex flex-col justify-between overflow-hidden bg-[#09090b] px-6 py-12 md:px-16">
      
      {/* Background Image Layer */}
      <img
        src="/images/pokemon/footer_car.jpg"
        className="absolute inset-0 w-full h-full object-cover object-[center_18%] pointer-events-none z-0"
        alt="Footer Atmosphere"
      />

      {/* Transition Underglow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#09090b]/50 to-transparent opacity-80 z-10 pointer-events-none" />

      {/* 3-Column Content Layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end h-full pt-32 pb-4 space-y-12 md:space-y-0 font-sans">

        {/* Column 1: Personal Dev Branding */}
        <div className="flex flex-col items-start text-left">
          <h3 className="text-2xl font-extrabold tracking-tight text-white">
            Prasad B<span className="text-violet-500">.</span>
          </h3>
          <p className="text-xs text-zinc-300 mt-2 max-w-xs leading-relaxed">
            Information Technology Student at IIIT Lucknow. Building interactive, highly optimized web applications and exploring complex data architectures.
          </p>
        </div>

        {/* Column 2: Navigation Index */}
        <div className="flex flex-col items-start space-y-2 text-xs tracking-wide text-zinc-400">
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Index</span>
          <a href="#home" className="hover:text-violet-400 transition-colors duration-200">// index_root</a>
          <a href="#projects" className="hover:text-violet-400 transition-colors duration-200">// selected_works</a>
          <a href="#skills" className="hover:text-violet-400 transition-colors duration-200">// core_stack</a>
          <a href="#dsa" className="hover:text-violet-400 transition-colors duration-200">// algorithms</a>
        </div>

        {/* Column 3: Connection Gate */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right">
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-3">Availability</span>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/pxxad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-violet-500/50 hover:text-white transition-all duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pxxad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-violet-500/50 hover:text-white transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:pxxad@iiitl.ac.in"
              className="text-xs px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-violet-500/50 hover:text-white transition-all duration-200"
            >
              Email
            </a>
          </div>

          {/* Active Status Indicator */}
          <div className="flex items-center space-x-2 text-[11px] text-zinc-400 mt-4 bg-zinc-950/40 px-3 py-1.5 rounded-full border border-zinc-800/40 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>Available for summer internships</span>
          </div>
        </div>
      </div>

      {/* Baseline Production Tag */}
      <div className="w-full text-center md:text-left text-[10px] text-zinc-600 tracking-wider pt-8 border-t border-zinc-900/40 mt-8 relative z-20">
        © {new Date().getFullYear()} PJB.DEV • BUILT FROM SCRATCH
      </div>
    </footer>
  );
}
