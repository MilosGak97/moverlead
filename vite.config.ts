import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// Check if we're running on Heroku
const isHeroku = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: isHeroku ? [react()] : [react(), basicSsl()], // Disable SSL on Heroku
  server: {
    host: true, // Allow external connections (important for Heroku)
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000, // Use Heroku's port
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
});
