const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/site/assets/placeholders');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const templates = {
  light: (title) => `<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FCFBEE;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F3DDB2;stop-opacity:1" />
    </linearGradient>
    <filter id="noiseL"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter>
  </defs>
  <rect width="1200" height="800" fill="url(#gradL)" />
  <rect width="1200" height="800" filter="url(#noiseL)" opacity="0.04" mix-blend-mode="multiply" />
  <!-- Instrument Accents -->
  <path d="M40 40 L80 40 M40 40 L40 80" stroke="#CEAA6A" stroke-width="2" fill="none" opacity="0.5" />
  <path d="M1160 760 L1120 760 M1160 760 L1160 720" stroke="#CEAA6A" stroke-width="2" fill="none" opacity="0.5" />
  <circle cx="1140" cy="60" r="4" fill="#CEAA6A" opacity="0.8" />
  <line x1="0" y1="400" x2="1200" y2="400" stroke="#CEAA6A" stroke-width="1" opacity="0.1" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="bold" letter-spacing="4" fill="#4E3E2F" opacity="0.4">${title.toUpperCase()}</text>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" letter-spacing="4" fill="#625C55" opacity="0.5">LOCAL ASSET</text>
</svg>`,
  dark: (title) => `<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradD" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#24201C;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1A1714;stop-opacity:1" />
    </linearGradient>
    <filter id="noiseD"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter>
    <pattern id="gridD" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#CEAA6A" opacity="0.15" />
    </pattern>
  </defs>
  <rect width="1200" height="800" fill="url(#gradD)" />
  <rect width="1200" height="800" filter="url(#noiseD)" opacity="0.03" />
  <rect width="1200" height="800" fill="url(#gridD)" />
  <!-- Instrument Accents -->
  <path d="M40 40 L80 40 M40 40 L40 80" stroke="#CEAA6A" stroke-width="2" fill="none" opacity="0.3" />
  <path d="M1160 760 L1120 760 M1160 760 L1160 720" stroke="#CEAA6A" stroke-width="2" fill="none" opacity="0.3" />
  <circle cx="1140" cy="60" r="4" fill="#CEAA6A" opacity="0.5" />
  <line x1="0" y1="400" x2="1200" y2="400" stroke="#CEAA6A" stroke-width="1" opacity="0.1" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="bold" letter-spacing="4" fill="#FCFBEE" opacity="0.2">${title.toUpperCase()}</text>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" letter-spacing="4" fill="#CEAA6A" opacity="0.3">LOCAL ASSET</text>
</svg>`
};

const files = [
  { name: 'hero-stone-light.svg', type: 'light', title: 'Cinematic Hero Light' },
  { name: 'hero-stone-dark.svg', type: 'dark', title: 'Cinematic Hero Dark' },
  { name: 'facade-detail-light.svg', type: 'light', title: 'Facade Detail Light' },
  { name: 'facade-detail-dark.svg', type: 'dark', title: 'Facade Detail Dark' },
  { name: 'texture-honed.svg', type: 'light', title: 'Honed Texture' },
  { name: 'texture-bushhammered.svg', type: 'light', title: 'Bush Hammered Texture' },
  { name: 'texture-sandblasted.svg', type: 'light', title: 'Sandblasted Texture' },
  { name: 'texture-sawn.svg', type: 'light', title: 'Sawn Texture' },
  { name: 'sample-board.svg', type: 'light', title: 'Validation Sample Board' },
  { name: 'inspection-caliper.svg', type: 'dark', title: 'Quality Inspection' },
  { name: 'workshop-floor.svg', type: 'dark', title: 'Processing Workshop' },
  { name: 'pointcloud-exterior.svg', type: 'dark', title: 'Exterior Pointcloud' },
  { name: 'pointcloud-interior.svg', type: 'dark', title: 'Interior Pointcloud' },
  { name: 'before-raw.svg', type: 'light', title: 'Raw Material Baseline' },
  { name: 'after-finished.svg', type: 'light', title: 'Finished Element' },
  { name: 'before-photo.svg', type: 'light', title: 'Site Condition Photo' },
  { name: 'after-pointcloud.svg', type: 'dark', title: 'Site Digital Twin' },
  { name: 'docs-scattered.svg', type: 'light', title: 'Unstructured Data' },
  { name: 'docs-structured.svg', type: 'dark', title: 'Structured Approval Pack' },
  { name: 'cinematic-tile-1.svg', type: 'dark', title: 'Architectural Shot 01' },
  { name: 'cinematic-tile-2.svg', type: 'light', title: 'Architectural Shot 02' },
  { name: 'cinematic-tile-3.svg', type: 'dark', title: 'Architectural Shot 03' }
];

files.forEach(f => {
  fs.writeFileSync(path.join(dir, f.name), templates[f.type](f.title));
});
console.log('Generated 22 placeholder SVGs successfully.');
