module.exports = {
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  'plugins': [
    'prettier',
    '@typescript-eslint',
    'react',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'project': './tsconfig.json',
  },
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'rules': {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'es5',
        'semi': false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
  },
}
