const path = require("path");

// Use next lint --fix on staged files instead of eslint
// https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged

/**
 * @type {(filenames: string[]) => string | string[] | Promise<string | string[]>}
 * @see https://github.com/lint-staged/lint-staged#function-signature
 */
const buildNextLintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

// Why with yarn prefix ?
// https://stackoverflow.com/questions/71412253/unable-to-commit-due-to-husky-failure-in-node-application
module.exports = {
  // "**/*.{js,jsx,ts,tsx}": ["yarn eslint --fix", "yarn prettier -w"],
  "**/*.{js,jsx,ts,tsx}": [buildNextLintCommand, "yarn prettier -w"],
  "**/*.{json,css,scss,md,webmanifest}": ["yarn prettier -w"],
};
