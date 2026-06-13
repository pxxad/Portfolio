"use client";

import Image from "next/image";
import { pokemonAssets, PokemonAssetKey } from "@/data/pokemon";

interface Props {
  bgKey?: PokemonAssetKey;
}

export default function FooterBackground({ bgKey = "footerCar" }: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Base background color */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0A0F1F] transition-colors duration-500" />
      
      {/* Background Image – visible through overlay */}
      <div className="absolute inset-0 blur-[8px]">
        {/* Default Car Background — 15-18% opacity light, 10-12% dark */}
        <Image
          src={pokemonAssets["footerCar"]}
          alt="Footer Background Car"
          fill
          className={`object-cover object-bottom scale-105 transition-opacity duration-1000 opacity-[0.16] dark:opacity-[0.11] ${bgKey !== "footerCar" ? "!opacity-0" : ""}`}
          priority
        />
        {/* Easter Egg Snorlax Background */}
        <Image
          src={pokemonAssets["snorlax"]}
          alt="Footer Background Snorlax"
          fill
          className={`object-cover object-bottom scale-105 transition-opacity duration-1000 ${bgKey === "snorlax" ? "opacity-[0.16] dark:opacity-[0.11]" : "opacity-0"}`}
          priority
        />
      </div>
      
      {/* Overlay: rgba(255,255,255,0.85) light, proportional dark */}
      <div className="absolute inset-0 bg-white/85 dark:bg-[#0A0F1F]/85 transition-colors duration-500" />
      
      {/* Top transition gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-transparent dark:from-[#0A0F1F] transition-colors duration-500" />
    </div>
  );
}
