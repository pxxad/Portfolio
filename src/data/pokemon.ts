/**
 * pokemon.ts — Single source of truth for all Pokémon asset paths.
 * All images live at /images/pokemon/<semantic-name>.jpg
 * Migration: run migrate_assets.bat in the project root.
 */

export const pokemonAssets = {
  // Hero / UI
  spark:        "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/spark-pikachu.jpg",
  thunderPikachuLoader: "https://res.cloudinary.com/li5wzmgq/video/upload/f_auto,q_auto/portfolio/thunder-pikachu-loader.mp4",

  // Theme toggle
  gengar:       "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/gengar-toggle.jpg",

  // Footer
  snorlax:      "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/snorlax-footer.jpg",
  chikorita:    "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/chikorita-signature.jpg",
  footerCar:    "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/footer_car.jpg",

  // Easter egg
  squirtle:     "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/squirtle-easteregg.jpg",

  // Timeline
  pokemonTower: "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/pokemon-tower.jpg",

  // 404 page
  psyduck:      "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/psyduck-404.jpg",

  // DSA section
  ashAura:      "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/ash-dsa-new.png",

  // About section
  bulbasaur:    "https://res.cloudinary.com/li5wzmgq/image/upload/f_auto,q_auto/portfolio/bulbasaur-about.jpg",
} as const;

export type PokemonAssetKey = keyof typeof pokemonAssets;
