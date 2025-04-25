import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import turboConfig from 'eslint-config-turbo/flat'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    ignores: [
      '**/dist/*',
      '**/lib/*',
      '**/build/*',
      '**/out/*',
      '**/public/*',
      '**/.next/*',
      '**/ui/*',
      '**/prisma/*',
      '**/_generated/*',
      'coverage/**',
      'node_modules/**',
    ],
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  ...turboConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
])
