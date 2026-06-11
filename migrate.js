const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const publicDir = path.join(__dirname, 'public', 'images', 'pokemon');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Delete all media_*.jpg files in public/images/pokemon
const filesInPublic = fs.readdirSync(publicDir);
filesInPublic.forEach(file => {
  if (file.startsWith('media_') && file.endsWith('.jpg')) {
    fs.unlinkSync(path.join(publicDir, file));
    console.log(`Deleted old asset: ${file}`);
  }
});

// 2. Map of root files to new standardized names
const fileMap = {
  "Ash Aura.jfif": "ash-dsa.jpg",
  "Bulbasaur close-up (winking).jfif": "bulbasaur-about.jpg",
  "Chikorita i be-leaf in you.jpeg": "chikorita-signature.jpg",
  "Confused Psyduck.jpeg": "psyduck-confused.jpg",
  "Cool Psyduck.jpeg": "psyduck-404.jpg",
  "Cute Pikachu Close-up.jfif": "spark-pikachu.jpg",
  "Moonlit Gengar avatar.jfif": "gengar-toggle.jpg",
  "Pikachu Crowd Image.jfif": "pikachu-crowd.jpg",
  "Pokemon Tower Stack.jfif": "pokemon-tower.jpg",
  "Snorlax Forest.jpeg": "snorlax-footer.jpg",
  "Squirtle with sunglasses.jpeg": "squirtle-easteregg.jpg",
  "Thunder Pikachu.jfif": "thunder-pikachu.jpg"
};

// 3. Move and rename
Object.entries(fileMap).forEach(([oldName, newName]) => {
  const oldPath = path.join(rootDir, oldName);
  const newPath = path.join(publicDir, newName);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath); // move it
    console.log(`Moved & Renamed: ${oldName} -> ${newName}`);
  } else {
    console.log(`Warning: Could not find ${oldName} in root.`);
  }
});

console.log('Migration complete!');
