module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    "modules": true,
    "spread" : true,
    "restParams" : true
  },
  "parserOptions": {
    "sourceType": "module",
  },
  "parser": "babel-eslint"
};