"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";

const wallMessages = [
  { id: 1, text: "Your Codeforces journey section is motivating.", author: "Visitor", date: "Recently" },
  { id: 2, text: "Didn't expect a Pokémon-themed portfolio to look this clean.", author: "Anonymous", date: "Recently" },
  { id: 3, text: "Found this through GitHub. Nice work!", author: "Developer", date: "Recently" },
  { id: 4, text: "The Gengar dark mode transition is sick.", author: "Student", date: "Recently" },
  { id: 5, text: "Keep building. The growth from v1 is visible.", author: "Open Source Contributor", date: "Recently" },
  { id: 6, text: "IIIT Lucknow + Pokémon is a unique combination.", author: "Guest", date: "Recently" },
  { id: 7, text: "Looking forward to seeing more projects here.", author: "Visitor", date: "Recently" },
  { id: 8, text: "The portfolio feels personal instead of template-based.", author: "Reviewer", date: "Recently" },
];

export default function WallPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-bg text-text-primary pt-32 pb-24 selection:bg-soft-violet/30 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <FadeIn delay={0.1} yOffset={10}>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider uppercase mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Community Guestbook</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            The Wall
          </h1>
          <p className="text-text-secondary max-w-xl leading-relaxed text-lg">
            A space for thoughts, feedback, and notes left by visitors sharing the journey.
          </p>
        </FadeIn>

        {/* Masonry Grid for Messages */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {wallMessages.map((msg, idx) => (
            <FadeIn key={msg.id} delay={0.3 + (idx * 0.1)} yOffset={20} className="break-inside-avoid">
              <div className="glass-card p-6 rounded-3xl border border-white/10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md group relative overflow-hidden">
                {/* Subtle gradient hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <p className="text-sm md:text-base font-medium leading-relaxed text-text-primary mb-6 relative z-10">
                  &quot;{msg.text}&quot;
                </p>
                
                <div className="flex items-center justify-between text-xs text-text-secondary font-mono relative z-10">
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    — {msg.author}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="opacity-60">{msg.date}</span>
                    <Heart className="w-3.5 h-3.5 text-pink-500/50 group-hover:text-pink-500 transition-colors" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA to leave a message */}
        <FadeIn delay={0.8} yOffset={20} className="mt-24 text-center">
          <div className="inline-block p-8 rounded-3xl glass-card border border-white/10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Want to leave a note?</h3>
            <p className="text-text-secondary mb-6 text-sm">
              I&apos;m always happy to hear from fellow developers, students, or visitors. Drop a message through the contact section!
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-text-primary text-brand-bg font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
            >
              Sign the Guestbook
            </Link>
          </div>
        </FadeIn>
      </div>
      </div>
    </>
  );
}
