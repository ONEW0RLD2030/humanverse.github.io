import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { injectManifest } from 'workbox-build';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ONEW0RLD2030.github.io/humanverse.github.io/',
  adapter: '@astrojs/netlify',
  vite: {
    plugins: [{
      name: 'pwa',
      async closeBundle() {
        await injectManifest({
          swSrc: 'public/sw.js',
          swDest: 'dist/sw.js',
          globDirectory: 'dist',
          globPatterns: ['**/*.{html,js,css,json}'],
        });
      }
    }]
  }
});
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    build: {
      assetsInlineLimit: 0 // لضمان عدم تكسير ملفات SW
    }
  }
});
