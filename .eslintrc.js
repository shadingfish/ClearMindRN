module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
