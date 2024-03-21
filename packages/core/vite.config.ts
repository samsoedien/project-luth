import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import dts from 'vite-plugin-dts'

import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ outDir: 'lib/types' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'core',
      fileName: (format) => `index.${format}.js`,
    },
    outDir: 'lib',
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', ...Object.keys((pkg as any).dependencies)],
      output: [
        {
          format: 'es',
          globals: {
            react: 'react',
          },
          dir: 'lib/esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: ({ name: fileName }) => `${fileName}.js`,
        },
        {
          format: 'cjs',
          globals: {
            react: 'react',
          },
          dir: 'lib/cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: ({ name: fileName }) => `${fileName}.js`,
        },
      ],
      // FIXME: Temp workaround for sourcemap warnings https://github.com/vitejs/vite/issues/15012
      onwarn(warning, defaultHandler) {
        if (warning.code === 'SOURCEMAP_ERROR') {
          return
        }

        defaultHandler(warning)
      },
    },
  },
})
