module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
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
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "react-hooks"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
