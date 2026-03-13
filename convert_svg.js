const sharp = require('sharp');
const fs = require('fs');

const files = ['firebase', 'html5', 'css3', 'tailwind', 'vite'];

async function convert() {
  for (const file of files) {
    try {
      await sharp(`public/images/${file}.svg`)
        .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .webp({ quality: 90 })
        .toFile(`public/images/${file}.webp`);
      console.log(`Converted ${file}.svg to ${file}.webp`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
    }
  }
}

convert();
