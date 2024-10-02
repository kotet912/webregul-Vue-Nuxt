import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    ignores: ['.config/*', '.nuxt/*'],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    plugins: {
      prettier: pluginPrettier,
    },
  },
  {
    rules: {
      // Правила ESLint и плагинов
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginVue.configs['vue3-essential'].rules,

      // Правила Prettier
      ...configPrettier.rules,
      'prettier/prettier': 'error',
      'no-undef': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    files: ['pages/index.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
