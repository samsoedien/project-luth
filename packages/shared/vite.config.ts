import path, { resolve } from 'path'
import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), dts({ outDir: 'lib/types' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'shared',
      fileName: (format) => `index.${format}.js`,
    },
    outDir: 'lib',
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      external: ['preact', 'preact/hooks'],
      output: [
        {
          format: 'es',
          globals: {
            preact: 'preact',
          },
          dir: 'lib/esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: ({ name: fileName }) => `${fileName}.js`,
        },
        {
          format: 'cjs',
          globals: {
            preact: 'preact',
          },
          dir: 'lib/cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: ({ name: fileName }) => `${fileName}.js`,
        },
      ],
    },
  },
})
