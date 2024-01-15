# Next.js React Web Project Template (App directory, Typescript, Sass, Tailwind Css, SVGR, Prettier, Storybook, SEO, RSC helpers and other generally used features and tools in production.)

This is a React [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).To the default setup
have been added:

- [Prettier](https://prettier.io/) - Popular opinionated code formatter.
- [Sass](https://sass-lang.com/guide) - Popular Css extension.
- [Tailwind Css](https://tailwindcss.com/) - Utility-first CSS framework.
  Added to utilities such as :
  - [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
  - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) A Prettier plugin that automatically sorts Tailwind classes based on recommended class order.
- [Storybook](https://storybook.js.org/) - Frontend workshop for previewing and testing your UI components and pages in isolation.
- [SVGR](https://react-svgr.com/) - Tool box for using SVGs in React directly as components like in Create React App.
- Automatic [Sitemap](https://developers.google.com/search/docs/advanced/sitemaps/overview) generation with [next-sitemap](https://www.npmjs.com/package/next-sitemap).
- [Conventional Commits Linting](https://www.conventionalcommits.org/en/v1.0.0/#summary) - Set of rules for enforcing
  the creation of more human and machine-readable explicit commits.

## Quick Start

Start using this template with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```bash
yarn create next-app -e https://github.com/ouedyan/nextjs-template
```

Then check all TODO sections (by doing a global search for e.g.) to complete the project's setup.
You can delete this README and use the simplified README.prod instead in your project.

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

Run Storybook server

```bash
yarn storybook
```

Build Storybook as a static web application

```bash
yarn build-storybook
```

## Project directory structure

Main folder structure

```
📂 components
  📂 hooks
  utils.ts
  ...📄 {Component}.tsx
  ...📂 {page}
     ...📄 {Component}.tsx

📂 lib
  📂 data
    ...📄 {service}.ts
  📂 types
    ...📄 {type}.ts
  📂 utils
    ...📄 {context}.ts

📂 app
  📂 test
    📂 api
      ...📄 {apiPath}.ts
  ...📄 {path}.ts
  layout.tsx
  page.client.tsx
  page.tsx
  not-found.tsx
  error.tsx
  global-error.tsx
  favicon.ico
  ...📄 favicon-{size}x{size}.png
  📄 browserconfig.xml
  📄 site.webmanifest
  ...📄 {other-pwa-assets}
  📄 robots.txt

📂 public
  📂 favicons
  📂 icons
  📂 images

📂 stories
  📂 examples
  ...📄 {Component}.stories.tsx
  ...📂 {page}
     ...📄 {Component}.stories.tsx

📂 styles
  📄 globals.scss

📂 i18n
  📂 locales
    ...📂 {locale}
      📄 common.ts
      ...📄 {namespace}.ts
```

## Project's main tech stack useful resources

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
