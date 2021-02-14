module.exports = {
  extends: [
    'airbnb-base'
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  plugins: [
    'import'
  ],
  rules: {
    'semi':0,
    'no-console': 0,
    'comma-dangle': 0,
    'func-names': 0,
    'no-debugger': 0
  }
}