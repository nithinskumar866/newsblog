module.exports = {
  root: true,
  env: {
    node: true,
    es6: true, // Use es6 instead of es2022
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    ecmaVersion: 'latest', // This handles modern JS features
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'error',
    'no-undef': 'off'
  }
}