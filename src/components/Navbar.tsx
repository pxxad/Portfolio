"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Skills", href: "/#skills" },
  { label: "DSA", href: "/#dsa" },
  { label: "Wall", href: "/wall" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const elementId = href.replace("/#", "#");
      const element = document.querySelector(elementId);
      if (element) {
        setIsMobileMenuOpen(false);
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-3 md:py-4" : "py-4 md:py-6"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between glass-navbar px-4 md:px-6 py-3.5 md:py-4 rounded-full shadow-sm max-w-6xl mx-auto">
            {/* Logo */}
            <Link
              href="/#home"
              onClick={(e) => handleNavClick(e, "/#home")}
              className="text-sm md:text-base font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 hover:opacity-80 flex items-center gap-2 z-50 shrink-0 font-mono"
            >
              <div className="relative flex items-center justify-center w-2 h-2 md:w-2.5 md:h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-violet-600 dark:bg-violet-400 animate-pulse opacity-40" />
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 md:w-2 md:h-2 bg-violet-600 dark:bg-violet-400" />
              </div>
              <span>PJB<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-cyan-400">.DEV</span></span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (pathname === "/" && item.href === "/#home");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive 
                        ? "bg-black/5 dark:bg-white/10 text-text-primary dark:text-white" 
                        : "text-text-secondary dark:text-slate-300 hover:text-text-primary dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Action CTA & Theme */}
            <div className="flex items-center gap-3 md:gap-5 z-50">
              <ThemeToggle />
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="hidden md:flex items-center gap-1.5 px-5 py-2 text-xs font-bold rounded-full bg-text-primary text-brand-bg hover:scale-110 active:scale-95 transition-all duration-200 shadow-md"
              >
                Connect <ArrowUpRight className="w-4 h-4" />
              </Link>
              
              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-text-secondary hover:text-text-primary bg-black/5 dark:bg-white/5 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <motion.div animate={{ rotate: isMobileMenuOpen ? 45 : 0 }} className="absolute">
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Premium Glass Panel Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-bg/90 dark:bg-[#0A0F1F]/90 backdrop-blur-2xl lg:hidden overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col min-h-screen pt-32 px-6 pb-12">
              <div className="flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block py-4 text-2xl font-bold tracking-tight text-text-secondary hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all border-b border-black/5 dark:border-white/5"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.2, duration: 0.3 }}
                className="mt-12"
              >
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-text-primary text-brand-bg font-bold text-lg shadow-lg active:scale-95 transition-transform"
                >
                  Connect With Me <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
