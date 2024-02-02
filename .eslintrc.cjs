module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  },
}
