import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "https://purpledmango.github.io/web-portfolio/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Preserve the original file name and extension for all assets
        assetFileNames: '[name][extname]',
      },
    },
  },
  assetsInclude: ["**/*.docx"],
  // Include .docx files as assets
  assets: {
    include: ["**/*.docx"],
  },
});
