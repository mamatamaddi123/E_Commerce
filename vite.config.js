import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/organic',
  


  // server: {
  //   hmr: {
  //     protocol: 'ws',
  //     host: 'localhost',
  //     port: 5173,
  //   },
  // },
});
