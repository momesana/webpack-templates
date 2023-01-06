/* eslint-env node */

module.exports = {
  extends: [
    "eslint:recommended",
    // prettier needs to come last
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-unused-vars": "error",
    "no-extra-boolean-cast": "off",
    eqeqeq: "error",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["./.eslintrc-typescript.cjs"],
    },
  ],
};
