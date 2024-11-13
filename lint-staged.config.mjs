import path from "path";

// Use next lint --fix on staged files instead of eslint
// https://nextjs.org/docs/app/api-reference/config/eslint#running-lint-on-staged-files

/**
 * @type {(filenames: string[]) => string | string[] | Promise<string | string[]>}
 * @see https://github.com/lint-staged/lint-staged#function-signature
 */
const buildNextLintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => `'${path.relative(process.cwd(), f)}'`)
    .join(" --file ")}`;

// Why with 'pnpm run' prefix ?
// https://stackoverflow.com/questions/71412253/unable-to-commit-due-to-husky-failure-in-node-application
export default {
  // "**/*.{js,jsx,ts,tsx}": ["pnpm eslint --fix", "pnpm prettier -w"],
  "**/*.{js,jsx,ts,tsx}": [buildNextLintCommand, "pnpm prettier -w"],
  "**/*.{json,css,scss,md,webmanifest}": ["pnpm prettier -w"],
};
