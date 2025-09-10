import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: true, // allow external access (e.g. from ngrok)
      allowedHosts: ['39615a1efb93.ngrok-free.app'],
      port: 5173, // dev server port
    },
    build: {
      outDir: 'docs', // 👈 GitHub Pages will serve from /docs
      rollupOptions: {
        input: {
          main: './index.html'
        },
        output: {
          assetFileNames: (assetInfo) => {
            // Keep PDF files without hash
            if (assetInfo.name && assetInfo.name.endsWith('.pdf')) {
              return 'assets/[name][extname]';
            }
            // Add hash to other assets
            return 'assets/[name]-[hash][extname]';
          }
        }
      },
      assetsInclude: ['**/*.pdf']
    },
    base: '/me/', // 👈 IMPORTANT: matches your repo name
  };
});
