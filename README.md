# Next js React Web Project Template (Typescript, Sass, Tailwind Css, SVGR, Prettier, Storybook, SEO, On-Demand ISR pre-configs and other generally used features and tools in production.)

This is a React [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). To the default setup
have been added:

- [Prettier](https://prettier.io/) - Popular opinionated code formatter.
- [Sass](https://sass-lang.com/guide) - Popular Css extension.
- [Tailwind Css](https://tailwindcss.com/) - Utility-first CSS framework.
  Added to utilities such as :
    - [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
    - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) A Prettier plugin that automatically sorts Tailwind classes based on recommended class order.
- [Storybook](https://storybook.js.org/) - Frontend workshop for previewing and testing your UI components and pages in isolation.
- [SVGR](https://react-svgr.com/) - Tool box for using SVGs in React directly as components like in Create React App.
- Easy [SEO management](https://developers.google.com/search/) with [next-seo](https://www.npmjs.com/package/next-seo)
    - Automatic [Sitemap](https://developers.google.com/search/docs/advanced/sitemaps/overview) generation with [next-sitemap](https://www.npmjs.com/package/next-sitemap).
- [Next js On-Demand ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation-beta)
    - Next js On-demand Incremental Static Regeneration api config to revalidate static stale pages on demand.
- [Conventional Commits Linting](https://www.conventionalcommits.org/en/v1.0.0/#summary) - Set of rules for enforcing
  creation of more human and machine-readable explicit commits.
- Absolute imports. See [Additional notes](#additional-notes-about-the-template) section.

## Quick Start

Start using this template with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```bash
yarn create next-app -e https://github.com/ouedyan/nextjs-template
```

Then check all TODO sections (by doing a global search for e.g.) to complete the project's setup.
You can delete this README and use the simplified README.prod instead in your project.

## Additional notes about the template

Absolute imports have been configured in **tsconfig.json**

```json lines
{
  "compilerOptions": {
    //...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ]
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
  ...📄 {Component}.tsx
  ...📂 {page}
     ...📄 {Component}.tsx

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
  
📂 stories
  ...📄 {Component}.stories.tsx
  ...📂 {page}
     ...📄 {Component}.stories.tsx

📂 styles
  📄 globals.scss
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
