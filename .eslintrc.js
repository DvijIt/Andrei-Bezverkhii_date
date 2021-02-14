module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['eslint-config-google'],
  rules: {
    'require-jsdoc': ['off', {}],
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'comma-dangle': ['off', {}],
    'arrow-parens': 'off'
  },
};
