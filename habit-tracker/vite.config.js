import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/habit-tracker/'  // wajib agar cocok dengan GitHub Pages
});
