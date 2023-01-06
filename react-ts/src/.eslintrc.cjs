/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "../.eslintrc-typescript.cjs",
    "../.eslintrc.cjs",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    // prettier needs to come last
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./src/tsconfig.json"],
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/no-unknown-property": [
      "error",
      {
        ignore: ["css"],
      },
    ],
    "react/prop-types": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
