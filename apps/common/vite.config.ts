import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe_common',
      filename: 'remoteEntry.js',
      exposes: {
        // './Three': './src/features/Three',
      },
      shared: ['react'],
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {},
  build: {
    manifest: true,
    target: 'esnext',
    minify: true,
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        minifyInternalExports: false,
      },
    },
  },
})
