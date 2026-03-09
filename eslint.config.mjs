import tsParser from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  { ignores: ['node_modules/**', '.next/**'] },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mjs'],
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort
    },
    languageOptions: { parser: tsParser },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'jsx-quotes': ['error', 'prefer-single'],
      'unused-imports/no-unused-imports': 'error',
      'simple-import-sort/imports': ['error', {
        groups: [[
          '^react',
          '^@?\\w',
          '^@/',
          '^\\.',
          '\\.(css|scss)$'
        ]]
      }]
    }
  }
]
