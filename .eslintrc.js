module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['eslint-config-google'],
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'comma-dangle': ['off', {}],
    'arrow-parens': 'off'
  },
};
