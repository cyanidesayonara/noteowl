module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "jest",
    "prettier"
  ],
  "rules": {
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "multiline-ternary": 0,
    "prettier/prettier": [
      "error"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error", {
        "before": true,
        "after": true
      }
    ],
    "no-console": 0,
  }
}