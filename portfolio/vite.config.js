import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  root: ".", // Ensures Vite picks the project root
  plugins: [react()],
});
