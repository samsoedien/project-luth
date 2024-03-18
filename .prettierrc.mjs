/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'auto',
  printWidth: 100,
  trailingComma: 'all',
  semi: false,
}

export default config
