import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Ensure the app builds correctly on Heroku with the correct base path
  base: '/',

  build: {
    // Output directory for production build
    outDir: 'dist',

    // Rollup options to ensure correct input and output handling
    rollupOptions: {
      input: './index.html',
    },
  }
});
