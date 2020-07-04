module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    semi: [2, 'never'],
    'comma-dangle': ['error', 'never']
  }
}
