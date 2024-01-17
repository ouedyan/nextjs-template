module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:jsonc/recommended-with-json",
    "plugin:jsonc/prettier",
  ],
  rules: {
    "react/jsx-curly-brace-presence": 1,
    quotes: [1, "double"],
    "@tanstack/query/exhaustive-deps": 1,
    "@tanstack/query/stable-query-client": 1,
    "@tanstack/query/no-rest-destructuring": 1,
  },
  overrides: [
    {
      files: ["i18n/locales/**/*.json"],
      rules: {
        "jsonc/sort-keys": [1],
      },
    },
  ],
};
