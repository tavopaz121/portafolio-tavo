module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-console': 'warn',
    'no-use-before-define': 'warn',
    'spaced-comment': 'warn',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    quotes: 'off',
    semi: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off'
  }
}
