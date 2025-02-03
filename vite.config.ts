import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    // Parse process.env.PORT to a number, fallback to 3000 if not set
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  },
  build: {
    // Output directory for production build
    outDir: 'dist',

    // Rollup options to ensure correct input and output handling
    rollupOptions: {
      input: './index.html',
    },
  },
});
