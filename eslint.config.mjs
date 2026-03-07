import tsParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mjs'],
    languageOptions: { parser: tsParser },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'indent': ['error', 2]
    }
  }
]
