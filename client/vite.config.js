import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The dev server runs inside Docker. Requests are proxied to the `api` service
// so the whole site stays on a single origin (host port 3000).
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    // The preview is served through a proxy host that rotates, so allow any host.
    allowedHosts: true,
    proxy: {
      '/api': {
        target: process.env.API_PROXY_TARGET || 'http://api:8000',
        changeOrigin: true,
      },
    },
  },
});
