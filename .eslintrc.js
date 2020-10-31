module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended"
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'indent': ['error', 2],
    'semi': ['warn'],
    "no-var": 'error',
    "eqeqeq": 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};