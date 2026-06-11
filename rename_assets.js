const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public', 'images', 'pokemon');

// Ensure directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Mapping of old files to new names based on user requirement
const fileMap = {
  // Existing files in public/images/pokemon
  "media__1780560625268.jpg": "squirtle-easteregg.jpg",
  "media__1780560625193.jpg": "pokemon-tower.jpg",
  "media__1780560625279.jpg": "ash-dsa.jpg",
  "media__1780560625187.jpg": "bulbasaur-about.jpg",
  "media__1780560625220.jpg": "chikorita-signature.jpg",
  "media__1780561800625.jpg": "snorlax-footer.jpg",
  "media__1780561800593.jpg": "psyduck-404.jpg"
};

// 1. Rename files inside public/images/pokemon
Object.entries(fileMap).forEach(([oldName, newName]) => {
  const oldPath = path.join(publicDir, oldName);
  const newPath = path.join(publicDir, newName);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${oldName} -> ${newName}`);
  }
});

// 2. Move root files (Pikachu, Gengar) to public/images/pokemon
const rootMap = {
  "Cute Pikachu Close-up.jfif": "spark-pikachu.jpg",
  "Moonlit Gengar avatar.jfif": "gengar-toggle.jpg"
};

Object.entries(rootMap).forEach(([oldName, newName]) => {
  const oldPath = path.join(__dirname, oldName);
  const newPath = path.join(publicDir, newName);
  
  if (fs.existsSync(oldPath)) {
    // copy and rename
    fs.copyFileSync(oldPath, newPath);
    // don't delete original just in case
    console.log(`Copied and Renamed: ${oldName} -> ${newName}`);
  }
});

console.log("Asset reorganization complete!");
