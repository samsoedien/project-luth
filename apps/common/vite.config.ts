import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // preact(),
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

    // alias: {
    //   '@': resolve(__dirname, './src'),
    //   react: 'preact/compat',
    //   'react-dom': 'preact/compat',
    //   'react/jsx-runtime': 'preact/jsx-runtime',
    //   'react-reconciler': 'preact-reconciler',
    // },
  },
  optimizeDeps: {
    //   exclude: ['react-reconciler'],
  },
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
