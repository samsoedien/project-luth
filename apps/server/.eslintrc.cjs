module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['standard-with-typescript', 'airbnb-base', 'airbnb-typescript/base', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/triple-slash-reference': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/triple-slash-reference': 'warn',
    'consistent-return': 'warn',
  },
}
