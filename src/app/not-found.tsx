"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { pokemonAssets } from "@/data/pokemon";
import GradientBlobs from "@/components/GradientBlobs";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-radial from-white via-brand-alt to-white">
      {/* Background blobs */}
      <GradientBlobs />

      <div className="max-w-md mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Confused Psyduck Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-48 h-48 relative mb-8 cursor-pointer group"
        >
          <Image
            src={pokemonAssets.psyduck}
            alt="Confused Psyduck 404"
            fill
            sizes="192px"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            priority
          />
          {/* Confused question marks */}
          <div className="absolute top-[10%] left-[10%] text-2xl font-bold font-mono text-soft-violet animate-bounce">
            ?
          </div>
          <div className="absolute top-[5%] right-[15%] text-xl font-bold font-mono text-sky-blue animate-bounce [animation-delay:0.3s]">
            ?
          </div>
        </motion.div>

        {/* 404 Headings */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-mono font-bold tracking-widest text-sky-blue bg-sky-blue/10 px-3 py-1 rounded-full uppercase mb-4"
        >
          404 Error
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight font-mono mb-3"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs md:text-sm text-text-secondary leading-relaxed font-light mb-8"
        >
          Looks like even Psyduck is confused. The page you are looking for doesn't exist or has been moved.
        </motion.p>

        {/* Back to Home CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full bg-sky-blue text-white hover:bg-sky-blue/90 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] text-xs font-mono"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
