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
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      
      {/* Background Image with 10px blur */}
      <div className="absolute inset-0 blur-[10px]">
        {/* Default Car Background */}
        <Image
          src={pokemonAssets["footerCar"]}
          alt="Footer Background Car"
          fill
          className={`object-cover object-bottom scale-105 transition-opacity duration-1000 ${bgKey === "footerCar" ? "opacity-100" : "opacity-0"}`}
          priority
        />
        {/* Easter Egg Snorlax Background */}
        <Image
          src={pokemonAssets["snorlax"]}
          alt="Footer Background Snorlax"
          fill
          className={`object-cover object-bottom scale-105 transition-opacity duration-1000 ${bgKey === "snorlax" ? "opacity-100" : "opacity-0"}`}
          priority
        />
      </div>
      
      {/* White/Dark overlay at 92% opacity (rgba(255,255,255,0.92) / rgba(2,6,23,0.92)) */}
      <div className="absolute inset-0 bg-white/92 dark:bg-slate-950/92 transition-colors duration-1000" />
      
      {/* Top transition gradient to blend seamlessly with the preceding section */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-transparent dark:from-slate-950 transition-colors duration-1000" />
    </div>
  );
}

