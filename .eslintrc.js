module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier', 'plugin:jest/recommended', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'react-hooks'],
  rules: {
    'no-console': 'error',
    'require-jsdoc': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
