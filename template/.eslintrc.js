const wascConfig = require('@wasc/tools/eslint');

module.exports = Object.assign(wascConfig, {
  env: {
    browser: true,
  },
  settings: {
    react: {
      pragma: 'h',
    },
  },
  parserOptions: Object.assign(wascConfig.parserOptions, {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  }),
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unknown-property': 'off',
    'react/no-unused-state': 'off',
    'react/destructuring-assignment': 'off',
  },
});
