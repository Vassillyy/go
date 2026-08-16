import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { readFileSync, writeFileSync } from 'fs';

const spaFallback404: Plugin = {
  name: 'spa-fallback404',
  apply: 'build',
  closeBundle() {
    const outDir = path.resolve(__dirname, 'dist');
    writeFileSync(
      path.resolve(outDir, '404.html'),
      readFileSync(path.resolve(outDir, 'index.html'), 'utf-8'),
    );
  },
};

export default defineConfig({
  base: '/go/',
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
      include: '**/*.svg',
    }),
    spaFallback404,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
