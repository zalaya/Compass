import tsParser from '@typescript-eslint/parser'

export default [
  { ignores: ['node_modules/**', '.next/**'] },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mjs'],
    languageOptions: { parser: tsParser },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'eol-last': ['error', 'always']
    }
  }
]
