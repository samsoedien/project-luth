module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['standard-with-typescript', 'airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-extraneous-dependencies': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/require-default-props': 'warn',
  },
}
