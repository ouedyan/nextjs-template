/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [
    "prettier-plugin-tailwindcss",
    // Why another prettier sorter when already sort fixable eslint-plugin-jsonc ?
    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html#rule-details
    // ℹ️ To fully sort long files, you may need to run ESLint's --fix option multiple times.
    // The rule sorts keys incrementally, and ESLint limits the number of fixes to 10 per run.
    "prettier-plugin-sort-json",
  ],
  tailwindFunctions: ["clsx", "twMerge", "twJoin", "cva", "cn"],
};

export default config;
