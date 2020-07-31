module.exports = {
  "root": true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
