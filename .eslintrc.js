module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard-with-typescript',
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint-config-turbo',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.base.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'warn',
    'no-param-reassign': 'warn',
    '@typescript-eslint/triple-slash-reference': 'warn',
  },
}
