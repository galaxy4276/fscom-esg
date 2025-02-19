module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': ['google', 'prettier'],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'valid-jsdoc': 0,
    camelcase: 0,
  },
};
