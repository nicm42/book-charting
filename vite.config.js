import { defineConfig } from 'vite';

const port = process.env.PORT || 8000;

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${port}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist/app',
  },
});
