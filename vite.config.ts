import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/') || 
              id.includes('node_modules/react-router-dom/')) {
            return 'react-vendor';
          }
          
          // UI libraries
          if (id.includes('node_modules/framer-motion/') || 
              id.includes('node_modules/lucide-react/')) {
            return 'ui-vendor';
          }
          
          // Utility libraries
          if (id.includes('node_modules/clsx/') || 
              id.includes('node_modules/tailwind-merge/') || 
              id.includes('node_modules/class-variance-authority/')) {
            return 'utils';
          }
          
          // Lazy-loaded page components
          if (id.includes('/src/pages/') && !id.includes('/src/pages/Home')) {
            const pageName = id.split('/src/pages/')[1].split('.')[0];
            return pageName;
          }
        },
      },
    },
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
