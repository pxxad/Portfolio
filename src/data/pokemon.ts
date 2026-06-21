/**
 * pokemon.ts — Single source of truth for all Pokémon asset paths.
 * All images live at /images/pokemon/<semantic-name>.jpg
 * Migration: run migrate_assets.bat in the project root.
 */

export const pokemonAssets = {
  // Hero / UI
  spark:        "/images/pokemon/spark-pikachu.jpg",
  thunderPikachuLoader: "/images/pokemon/thunder-pikachu-loader.mp4",

  // Theme toggle
  gengar:       "/images/pokemon/gengar-toggle.jpg",

  // Footer
  snorlax:      "/images/pokemon/snorlax-footer.jpg",
  chikorita:    "/images/pokemon/chikorita-signature.jpg",
  footerCar:    "/images/pokemon/footer_car.jpg",

  // Easter egg
  squirtle:     "/images/pokemon/squirtle-easteregg.jpg",

  // Timeline
  pokemonTower: "/images/pokemon/pokemon-tower.jpg",

  // 404 page
  psyduck:      "/images/pokemon/psyduck-404.jpg",

  // DSA section
  ashAura:      "/images/pokemon/ash-dsa-new.png",

  // About section
  bulbasaur:    "/images/pokemon/bulbasaur-about.jpg",
} as const;

export type PokemonAssetKey = keyof typeof pokemonAssets;
