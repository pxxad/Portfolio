"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, GitFork, ArrowUpRight } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

// Fallback repositories in case the API rate limit is exceeded
const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "Portfolio",
    description: "PB.DEV Portfolio V2 — Premium Gen-Z developer portfolio built using Next.js 15, Tailwind v4, and Framer Motion.",
    html_url: "https://github.com/pxxad/Portfolio",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript"
  },
  {
    id: 2,
    name: "stdlib",
    description: "Standard library for JavaScript and Node.js numerical computation. Forked and contributed to mathematical packages.",
    html_url: "https://github.com/pxxad/stdlib",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript"
  },
  {
    id: 3,
    name: "gprMax",
    description: "Ground Penetrating Radar simulation engine using Finite-Difference Time-Domain (FDTD) wave propagation.",
    html_url: "https://github.com/pxxad/gprMax",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python"
  }
];

export default function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/pxxad/repos?sort=updated&per_page=6");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        
        // Map and filter repositories
        const formattedRepos = data
          .map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description provided.",
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language || "Web"
          }))
          // Place main repos first or sort
          .slice(0, 4);

        if (formattedRepos.length > 0) {
          setRepos(formattedRepos);
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        console.error("Error fetching GitHub repos, using fallback data:", err);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4ccf0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.2em] font-mono text-sky-blue uppercase font-bold mb-2"
          >
            Activity
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6"
          >
            GitHub Repositories
          </motion.h2>

          {/* GitHub Profile CTA */}
          <motion.a
            href="https://github.com/pxxad"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text-primary text-white hover:bg-text-primary/95 text-xs font-mono font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-1px]"
          >
            <GitBranch className="w-4 h-4" /> visit github profile <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Repository Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="glass-card p-6 md:p-8 rounded-[24px] border border-white/50 h-44 animate-pulse flex flex-col justify-between"
              >
                <div>
                  <div className="h-5 bg-black/[0.05] rounded-md w-1/3 mb-4" />
                  <div className="h-4 bg-black/[0.03] rounded-md w-full mb-2" />
                  <div className="h-4 bg-black/[0.03] rounded-md w-2/3" />
                </div>
                <div className="h-4 bg-black/[0.05] rounded-md w-1/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 md:p-8 rounded-[24px] border border-white/50 shadow-sm flex flex-col justify-between hover:bg-white/60 hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-text-primary font-mono group-hover:text-sky-blue transition-colors">
                      {repo.name}
                    </h3>
                    <span className="text-[10px] font-mono text-text-secondary bg-black/[0.03] px-2 py-0.5 rounded-md border border-black/[0.05]">
                      {repo.language}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-text-secondary font-light leading-relaxed mb-6">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto text-[10px] font-mono text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-sky-blue" />
                    {repo.forks_count}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 text-[9px] uppercase tracking-wider text-sky-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    view repo <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
