import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },

  // FINAL FIX: do not auto-discover PostCSS configs anywhere
  css: { postcss: { plugins: [tailwindcss as any, autoprefixer as any] } },

  server: {
    proxy: {
      "/efactory": {
        target: process.env.VITE_EFACTORY_BASE_URL || "http://localhost:3000",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/efactory/, "/public"),
      },
    },
  },
});
