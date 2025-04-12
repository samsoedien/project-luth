export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-replace': {
      pattern: /(--tw|\*, ::before, ::after)/g,
      data: {
        '--tw': '--luth', // Prefixing
        '*, ::before, ::after': ':root', // So variables does not pollute every element
      },
    },
  },
}
