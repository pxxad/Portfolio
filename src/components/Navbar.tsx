"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Skills", href: "#skills" },
  { label: "DSA", href: "#dsa" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-4" : "py-6"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center justify-between glass-navbar px-6 py-4 rounded-full shadow-sm">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-base font-bold font-mono tracking-wider text-text-primary dark:text-white hover:text-sky-blue transition-colors flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-sky-blue animate-pulse" />
              PJB.DEV
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold text-text-secondary dark:text-slate-300 hover:text-text-primary dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Action CTA & Theme */}
            <div className="hidden md:flex items-center gap-5">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all duration-300 hover:scale-105"
              >
                Connect <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-text-secondary hover:text-text-primary hover:bg-white/40 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/80 backdrop-blur-xl md:hidden pt-28 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 text-center">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-2.5 text-lg font-medium text-text-secondary hover:text-text-primary"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 text-sm font-semibold rounded-full bg-sky-blue text-white hover:bg-sky-blue/90"
                >
                  Connect <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
