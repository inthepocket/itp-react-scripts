const { ifAnyDep } = require('../utils');

module.exports = {
  parser: ifAnyDep(
    ['babel-cli', 'babel-core', 'babel-eslint', 'babel-loader'], 'babel-eslint',
    ifAnyDep('typescript', '@typescript-eslint/parser')
  ),

  extends: [
    require.resolve('eslint-config-airbnb'),
    // Dependencies
    ifAnyDep('jest', 'plugin:jest/recommended'),
    ifAnyDep('flow-bin', 'plugin:flowtype/recommended'),
    ifAnyDep('react-native', 'plugin:react-native/all'),
    // Eslint + Prettier
    require.resolve('eslint-config-prettier'),
    ifAnyDep('flow-bin', 'eslint-config-prettier/flowtype'),
    require.resolve('eslint-config-prettier/react'),
  ].filter(Boolean),

  plugins: [
    ifAnyDep('typescript', '@typescript-eslint'),
  ].filter(Boolean),

  settings: {
    "import/extensions": ['.js', '.jsx', ...ifAnyDep('typescript', ['.ts', '.tsx'])],
    "import/resolver": {
      node: {
        extensions: ['.js', '.jsx', ...ifAnyDep('typescript', ['.ts', '.tsx'])]
      }
    },
    ...ifAnyDep('typescript', {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
    })
  },

  rules: {
    ...ifAnyDep('react-native', { 'jsx-a11y/accessible-emoji': 'off' }),
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', ifAnyDep('typescript', '.tsx')]
      },
    ],
  },

  globals: {
    fetch: false,
    alert: false,
    __DEV__: true,
  },
};
