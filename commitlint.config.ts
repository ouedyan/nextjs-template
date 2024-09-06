import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

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

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  // See https://commitlint.js.org/#/reference-rules
  // Default: https://www.npmjs.com/package/@commitlint/config-conventional#rules
  rules: {
    "body-leading-blank": [RuleConfigSeverity.Disabled, "always"], //
    "body-max-line-length": [RuleConfigSeverity.Disabled, "always", 100], //
    "footer-leading-blank": [RuleConfigSeverity.Warning, "always"],
    "footer-max-line-length": [RuleConfigSeverity.Disabled, "always", 100], //
    "header-max-length": [RuleConfigSeverity.Disabled, "always", 100], //
    "subject-case": [
      RuleConfigSeverity.Warning,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ], //
    "subject-empty": [RuleConfigSeverity.Disabled, "never"], //
    "subject-full-stop": [RuleConfigSeverity.Warning, "never", "."], //
    "type-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "type-empty": [RuleConfigSeverity.Error, "never"],
    "type-enum": [
      RuleConfigSeverity.Error,
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

export default config;
