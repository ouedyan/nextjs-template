// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// chore: Installing new dependencies, or bumping deps
// ci: Changes to our CI configuration files and scripts (Ex: GitHub workflows, Husky, Travis, Circle)
// docs: Documentation only changes. Ex: README.md
// feat: Changes about feature addition or removal. Ex: `feat: add table on landing page`, `feat: remove table from landing page`
// fix: Bug fix, followed by the bug. Ex: `fix: illustration overflows in mobile view`
// perf : Code change regarding performance (deriving state, using memo, callback)
// refactor: A code change that neither fixes a bug nor adds a feature
// revert : When reverting commits
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, removing comments etc.)
// test: Adding missing tests or correcting existing tests

module.exports = {
  extends: ["@commitlint/config-conventional"],
  // See https://commitlint.js.org/#/reference-rules
  // Default: https://www.npmjs.com/package/@commitlint/config-conventional#rules
  rules: {
    "body-leading-blank": [0, "always"], //
    "body-max-line-length": [0, "always", 100], //
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [0, "always", 100], //
    "header-max-length": [0, "always", 100], //
    "subject-case": [
      1,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ], //
    "subject-empty": [0, "never"], //
    "subject-full-stop": [1, "never", "."], //
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
