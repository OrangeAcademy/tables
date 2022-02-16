module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["plugin:react/recommended"],
  globals: {},
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    requireConfigFile: false,
    // sourceType: "module",
  },
  plugins: ["react", "import", "react-hooks"],
  ignorePatterns: ["node_modules/"],
  rules: {},
  settings: {
    react: {
      version: "latest", // "detect" automatically picks the version you have installed.
    },
  },
};