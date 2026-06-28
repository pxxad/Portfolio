"use client";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[550px] flex flex-col justify-between overflow-hidden bg-[#09090b] px-6 py-12 md:px-16 z-10">

      {/* Background Image */}
      <img
        src="/images/pokemon/footer_car.jpg"
        className="absolute inset-0 w-full h-full object-cover object-[center_18%] pointer-events-none z-0"
        alt="Footer Background"
      />

      {/* Overlay Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#09090b]/40 to-transparent opacity-80 z-10 pointer-events-none" />

      {/* Top Section: 3-Column Content Matrix */}
      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start justify-between">

        {/* Column A: Personal Identity Brand */}
        <div className="flex flex-col items-start text-left space-y-2">
          <h3 className="text-2xl font-extrabold tracking-tight text-white">
            Prasad <span className="text-violet-500">JB</span>
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
            Information Technology Student at IIIT Lucknow. Architecting highly optimized, elegant web applications and exploring complex data architectures.
          </p>
        </div>

        {/* Column B: Navigation Index */}
        <div className="flex flex-col items-start space-y-2 text-xs font-medium tracking-wide text-zinc-400 md:mx-auto">
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Index Directory</span>
          <a href="#home" className="hover:text-violet-400 transition-colors duration-200">// index_root</a>
          <a href="#projects" className="hover:text-violet-400 transition-colors duration-200">// selected_works</a>
          <a href="#skills" className="hover:text-violet-400 transition-colors duration-200">// core_stack</a>
          <a href="#dsa" className="hover:text-violet-400 transition-colors duration-200">// algorithms</a>
        </div>

        {/* Column C: Connection Matrix Portal */}
        <div className="flex flex-col items-start md:items-end space-y-3 w-full">
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Availability Status</span>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/pxxad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/90 text-zinc-300 hover:border-violet-500/50 hover:text-white transition-all duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pxxad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/90 text-zinc-300 hover:border-violet-500/50 hover:text-white transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:pxxad@iiitl.ac.in"
              className="text-xs px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/90 text-zinc-300 hover:border-violet-500/50 hover:text-white transition-all duration-200"
            >
              Email
            </a>
          </div>

          <div className="flex items-center space-x-2 text-[11px] text-zinc-400 bg-zinc-950/60 px-3 py-1.5 rounded-full border border-zinc-800/50 backdrop-blur-sm mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>Available for summer internships</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Metadata Baseline */}
      <div className="relative z-20 w-full max-w-7xl mx-auto pt-6 border-t border-zinc-900/60 mt-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 tracking-wider gap-2">
        <div>© {new Date().getFullYear()} PJB.DEV • ALL RIGHTS RESERVED</div>
        <div className="text-zinc-700 italic">BUILT FROM THE GROUND UP</div>
      </div>
    </footer>
  );
}
