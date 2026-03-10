import fs from 'fs';
import path from 'path';

const outDir = 'd:/RiyadhStone®/E-Factory/RiyadhStone_Startup/apps/riyadhstone-site/src/site/assets/placeholders';

// Hero Marble Light
const heroSvg = `<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FCFBEE"/>
      <stop offset="100%" stop-color="#F3DDB2"/>
    </linearGradient>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.05 0" />
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#g1)"/>
  <!-- gold veining -->
  <path d="M 0 200 Q 400 300, 800 100 T 1920 400" fill="none" stroke="#CEAA6A" stroke-width="2" opacity="0.3"/>
  <path d="M 0 800 Q 500 700, 1000 900 T 1920 800" fill="none" stroke="#CEAA6A" stroke-width="1.5" opacity="0.2"/>
  <rect width="100%" height="100%" filter="url(#noise)"/>
</svg>`;

fs.writeFileSync(path.join(outDir, 'hero-marble-light.svg'), heroSvg);

// Menu Images
const menuTopics = ['about', 'solutions', 'engineering', 'supports', 'contact'];
menuTopics.forEach(topic => {
  const svg = `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#24201C"/>
    <circle cx="200" cy="150" r="100" fill="none" stroke="#CEAA6A" stroke-width="2" opacity="0.4"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FCFBEE" font-family="sans-serif" font-size="24" font-weight="bold" opacity="0.8">${topic.toUpperCase()}</text>
  </svg>`;
  fs.writeFileSync(path.join(outDir, \`menu-\${topic}.svg\`), svg);
});
console.log('Code 3 SVG Placeholders generated.');
