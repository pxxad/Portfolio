"use client";

import Image from "next/image";
import { pokemonAssets, PokemonAssetKey } from "@/data/pokemon";

interface Props {
  bgKey?: PokemonAssetKey;
}

export default function FooterBackground({
  bgKey = "footerCar",
}: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">

      {/* Base background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0A0F1F] transition-colors duration-500" />

      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Footer Car */}
        <Image
          src={pokemonAssets.footerCar}
          alt="Footer Car"
          fill
          sizes="100vw"
          priority
          className={`
            object-cover
            object-[center_45%]
            scale-100
            opacity-[0.78]
            dark:opacity-[0.72]
          `}
        />

        {/* Snorlax Easter Egg */}
        <Image
          src={pokemonAssets.snorlax}
          alt="Footer Background Snorlax"
          fill
          sizes="100vw"
          priority
          className={`
            object-contain
            object-center
            scale-105
            transition-opacity
            duration-1000
            ${bgKey === "snorlax"
              ? "opacity-[0.18] dark:opacity-[0.14]"
              : "opacity-0"}
          `}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/0 dark:bg-[#0A0F1F]/10 transition-colors duration-500" />

      {/* Top Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-transparent dark:from-[#0A0F1F] transition-colors duration-500" />
    </div>
  );
}