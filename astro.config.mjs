import { defineConfig } from 'astro/config';

// Static output — pure static site, deployed on Vercel.
export default defineConfig({
  output: 'static',
  // Keep CSS values byte-identical to the original index.html (no color/number
  // rewriting by the minifier), so the page stays pixel-for-pixel the same.
  vite: {
    build: {
      cssMinify: false,
    },
  },
});
