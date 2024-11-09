import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}']
  },
  {
    languageOptions: { 
      globals: globals.node 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      'for-direction': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-compare-neg-zero': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-ex-assign': 'error',
      'no-unsafe-finally': 'error',
      'camelcase': ['warn', { properties: 'always' }],
      'quotes': ['error', 'single'],
      'brace-style': ['error', 'stroustrup', { 'allowSingleLine': false }],
      'curly': ['error', 'all'],
      'no-magic-numbers': ['warn', { 'ignore': [0, 1], 'ignoreArrayIndexes': true }],
    }
  }
];