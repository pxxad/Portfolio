/**
 * pokemon.ts — Single source of truth for all Pokémon asset paths.
 * All images live at /images/pokemon/<semantic-name>.jpg
 * Migration: run migrate_assets.bat in the project root.
 */

export const pokemonAssets = {
  // Hero / UI
  spark:        "/images/pokemon/spark-pikachu.jpg",
  thunderPikachu: "/images/pokemon/thunder-pikachu.jpg",
  pikachuCrowd: "/images/pokemon/pikachu-crowd.jpg",

  // Theme toggle
  gengar:       "/images/pokemon/gengar-toggle.jpg",

  // Footer
  snorlax:      "/images/pokemon/snorlax-footer.jpg",
  chikorita:    "/images/pokemon/chikorita-signature.jpg",

  // Easter egg
  squirtle:     "/images/pokemon/squirtle-easteregg.jpg",

  // Timeline
  pokemonTower: "/images/pokemon/pokemon-tower.jpg",

  // 404 page
  psyduck:      "/images/pokemon/psyduck-404.jpg",
  psyduckConfused: "/images/pokemon/psyduck-confused.jpg",

  // DSA section
  ashAura:      "/images/pokemon/ash-dsa.jpg",

  // About section
  bulbasaur:    "/images/pokemon/bulbasaur-about.jpg",
} as const;

export type PokemonAssetKey = keyof typeof pokemonAssets;
