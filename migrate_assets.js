/**
 * Asset Migration Script
 * Moves and renames all Pokémon assets from the project root into
 * public/images/pokemon/ with clean, semantic filenames.
 * NO media_*.jpg filenames are used anywhere.
 */

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const destDir = path.join(rootDir, 'public', 'images', 'pokemon');

// Ensure destination exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 1. Delete ALL existing media_*.jpg files in dest to start clean
const existing = fs.existsSync(destDir) ? fs.readdirSync(destDir) : [];
existing.forEach(file => {
  if (file.startsWith('media_')) {
    fs.unlinkSync(path.join(destDir, file));
    console.log(`  [DEL] Removed old media asset: ${file}`);
  }
});

// 2. Root-level files to move → semantic name
const rootAssets = [
  { src: 'Ash Aura.jfif',                       dest: 'ash-dsa.jpg' },
  { src: 'Bulbasaur close-up (winking).jfif',   dest: 'bulbasaur-about.jpg' },
  { src: 'Chikorita i be-leaf in you.jpeg',     dest: 'chikorita-signature.jpg' },
  { src: 'Confused Psyduck.jpeg',               dest: 'psyduck-confused.jpg' },
  { src: 'Cool Psyduck.jpeg',                   dest: 'psyduck-404.jpg' },
  { src: 'Cute Pikachu Close-up.jfif',          dest: 'spark-pikachu.jpg' },
  { src: 'Moonlit Gengar avatar.jfif',          dest: 'gengar-toggle.jpg' },
  { src: 'Pikachu Crowd Image.jfif',            dest: 'pikachu-crowd.jpg' },
  { src: 'Pokemon Tower Stack.jfif',            dest: 'pokemon-tower.jpg' },
  { src: 'Snorlax Forest.jpeg',                 dest: 'snorlax-footer.jpg' },
  { src: 'Squirtle with sunglasses.jpeg',       dest: 'squirtle-easteregg.jpg' },
  { src: 'Thunder Pikachu.jfif',               dest: 'thunder-pikachu.jpg' },
];

let moved = 0;
let skipped = 0;

rootAssets.forEach(({ src, dest }) => {
  const srcPath = path.join(rootDir, src);
  const destPath = path.join(destDir, dest);

  if (fs.existsSync(srcPath)) {
    // If already exists at destination, remove it first
    if (fs.existsSync(destPath)) {
      fs.unlinkSync(destPath);
    }
    fs.renameSync(srcPath, destPath);
    console.log(`  [OK] Moved: "${src}" → public/images/pokemon/${dest}`);
    moved++;
  } else if (fs.existsSync(destPath)) {
    console.log(`  [SKIP] Already at dest: ${dest}`);
    skipped++;
  } else {
    console.log(`  [WARN] Source not found: "${src}"`);
    skipped++;
  }
});

console.log(`\n✅ Migration complete: ${moved} moved, ${skipped} skipped.`);
console.log(`📁 Assets in: ${destDir}`);
console.log('\nFinal assets:');
fs.readdirSync(destDir).forEach(f => console.log(`  - ${f}`));
