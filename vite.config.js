// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['module-name'], // Add the problematic module name here
    },
  },
};
