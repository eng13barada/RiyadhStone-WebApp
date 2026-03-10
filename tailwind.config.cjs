/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Calibri", "Carlito", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        "rs-ivory": "#FCFBEE",
        "rs-sand": "#F3DDB2",
        "rs-gold": "#CEAA6A",
        "rs-brown": "#4E3E2F",
        "rs-brown2": "#524435",
        "rs-ink": "#24201C",
        "rs-muted": "#625C55",
        "rs-border": "#A19D94",
        "rs-cool": "#305264",
      },
      fontSize: {
        'HERO': ['7rem', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '800' }],
        'H1': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'H2': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'H3': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'base': ['1.125rem', { lineHeight: '1.5' }],
        'lg': ['1.25rem', { lineHeight: '1.5' }],
        'xl': ['1.5rem', { lineHeight: '1.5' }],
        'tiny': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '700' }],
      },
      borderRadius: {
        "rs-1": "1rem",
        "rs-2": "2rem",
        "rs-3": "3rem",
      },
    },
  },
  plugins: [],
};
