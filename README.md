# Next js react Web App Template (Typescript, Sass, Tailwind Css, SVGR, Prettier , SEO and On-Demand ISR pre-configs and other generally used features and tools in production.)

This is a React [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). To the default setup have been added:

- [Sass](https://sass-lang.com/guide) - Popular Css extension.
- [Tailwind Css](https://tailwindcss.com/) - Utility-first CSS framework.
- [SVGR](https://react-svgr.com/) - Tool box for using SVGs in React directly as components like in Create React App.
- [Prettier](https://prettier.io/) - Popular opinionated code formatter.
- [SEO configs](https://developers.google.com/search/)
  - [Sitemap](https://developers.google.com/search/docs/advanced/sitemaps/overview) - Automatic sitemap generation.
- [Next js On-Demand ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation-beta) - Next js On-demand Incremental Static Regeneration api config to revalidate static stale pages on demand.
- [Conventional Commits Linting](https://www.conventionalcommits.org/en/v1.0.0/#summary) - Set of rules for enforcing creation of more human and machine-readable explicit commits.
- [Semantic versioning and changelog generation](https://github.com/conventional-changelog/standard-version) - Automatic semantic versioning and changelog generation.

## Project Config roadmap (Just Informative. Don't repeat these steps.)

All the necessary config and dependencies have already been set and ready for use but there is an explanation of each step if you want to know more about the pre-config or customize it.

Initialize Next js with Typescript default scaffold

```bash
npx create-next-app --typescript .
```

Yarn has been enforced in the project instead of npm:

**.npmrc**

```
engine-strict=true
```

**package.json**

```json lines
{
  "engines": {
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  }
}
```

Install and config Sass, Tailwind Css and Prettier

```bash
yarn add -D sass tailwindcss postcss autoprefixer prettier eslint-config-prettier
npx tailwindcss init -p
```

Rename your .css files to sass files (.sass or .scss)

Configure **tailwind.config.js** content sources

```json lines
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  //...
}
```

Add prettier-plugin-tailwindcss dependency to automatically sort tailwind classes on Prettier format

```bash
yarn add -D prettier-plugin-tailwindcss
```

Add tailwind-merge dependency: utility function to efficiently merge Tailwind CSS classes in JS without style conflicts (Example: in custom components).

```bash
yarn add tailwind-merge
```

Add tailwind directives to **globals.scss**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add prettier to **.eslintrc.json** extensions.

```json lines
{
  "extends": ["next/core-web-vitals", /*...,*/ "prettier"]
  //...
}
```

Create an empty Prettier config file to let editors and other tools know we are using Prettier
**.prettierrc.json**

```json
{}
```

Create a **.prettierignore** file to let the Prettier CLI and editors know which files to not format.
Base your **.prettierignore** on **.gitignore** and **.eslintignore** (if you have one).

```bash
cat .gitignore >> .prettierignore
```

This will automatically install husky and lint-staged, then add a configuration to the project’s **package.json** that will automatically format supported files in a pre-commit hook.

```bash
npx mrm@2 lint-staged
```

Configure the generated lint-stage section in **package.json** to include more extensions supported by your projects if necessary.

```json lines
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,css,scss,md}": "prettier --write"
  }
}
```

Add sharp dependency to be used by Next js for image optimization in production

```bash
yarn add sharp
```

Add SVGR dependency to be able to import SVGs directly as React components (like in Create react App)

```bash
yarn add -D @svgr/webpack
```

Configure SVGR in **next.config.js**

```js
const nextConfig = {
  //..
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [{ name: "removeViewBox", active: false }],
            },
            typescript: true,
          },
        },
      ],
    });
    return config;
  },
};
```

Add a hook to husky to run `yarn` every time we pull remote changes (in case of remote dependency change)

```bash
npx husky add .husky/post-merge 'yarn'
```

Add `@commitlint/config-conventional` to check if commit messages follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) rules on commit

```bash
yarn add -D @commitlint/config-conventional @commitlint/cli
```

Add a **commitlint.config.js** file like this and configure the rules as you want

```json lines
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    // 'type-enum': [2,' always', ['build', ...] ],
  },
}
```

Then add the commit message check to Husky

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

Add `standard-version` dependency to manage versioning and generate changelogs on release

```bash
yarn add -D standard-version
```

Then add a release script for when we want to deploy a new release.

**package.json**

```json lines
{
  "scripts": {
    //...
    "release": "standard-version"
  }
}
```

Add `next-sitemap` dependency for sitemap generation

```bash
yarn add -D next-sitemap
```

Add a **next-sitemap.config.js** file like this and configure it as your needs.

```json lines
module.exports = {
  siteUrl: "https://example.com",
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      // { userAgent: "*", disallow: "/admin" },
      // ...
    ],
  },
}
```

Then add next-sitemap as your post-build script

**package.json**

```json lines
{
  "scripts": {
    //...
    "postbuild": "next-sitemap --config next-sitemap.config.js"
  }
}
```

Add absolute imports config in **tsconfig.json**

```json lines
{
  "compilerOptions": {
    //...
    "baseUrl": ".",
    "paths": {
      "@/*": ["*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
  //...
}
```

## Scripts

Run the development server

```bash
yarn dev
```

Building for production

```bash
yarn build
```

Run in production mode

```bash
yarn start
```

Generate your changelog for the first release. This will tag a release without bumping the version

```bash
yarn run release --first-release
```

Generate typical changelog and bump version

```bash
yarn run release
```

## Project directory structure

Main folder structure

```
📂 components
  ...📄 {component}.tsx
  ...📂 {page}
     ...📄 {component}.tsx

📂 lib
  📂 data
    ...📄 {service}.ts
  📂 types
    ...📄 {type}.ts

📂 pages
  📂 api
    ...📄 {apiPath}.ts
  _app.tsx ?
  _document.tsx ?
  ...📄 {path}.ts

📂 public
  📂 icons
  📂 images
  📄 favicon.ico
  📄 robots.txt

📂 styles
  📄 globals.scss
```

## Project tech stack useful resources

### React

- [W3Schools React tutorial](https://www.w3schools.com/react) - Step-by-step guide to learning React.
- [React new Docs](https://beta.reactjs.org/learn) - react official documentation (in beta).
- [React old Docs](https://reactjs.org/docs) - react official documentation (to be replaced).

### Next.js

- [Learn Next.js](https://nextjs.org/learn) - the best way to start with next.js if you are new.
- [Next.js Docs](https://nextjs.org/docs) - learn about Next.js features and API.

### Tailwind Css

- [Tailwind Docs](https://tailwindcss.com/docs) - Tailwind Css official documentation and reference.
- [Tailwind with Next.js guide](https://tailwindcss.com/docs/guides/nextjs) - Tailwind installation guide with Next.js.

### Typescript

- [W3Schools Typescript tutorial](https://www.w3schools.com/typescript/) - Step-by-step guide to learning Typescript.
