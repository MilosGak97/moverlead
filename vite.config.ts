import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// Check if we're in a Heroku environment
const isHeroku = process.env.PORT !== undefined;

export default defineConfig({
  plugins: isHeroku ? [react()] : [react(), basicSsl()], // Disable SSL on Heroku
  server: {
    host: '0.0.0.0', // Allow external access (required on Heroku)
    port: process.env.PORT ? Number(process.env.PORT) : 3000, // Use Heroku’s dynamic port
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
});
