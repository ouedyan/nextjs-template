# {Example} React Next.js web app

For more info about the project initial configuration, features and tools head to https://github.com/ouedyan/nextjs-template.

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
