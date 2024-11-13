# {Project Name}

A Next.js application built with modern tooling and best practices. For detailed documentation about initial configuration, features and architecture, visit the [template repository](https://github.com/ouedyan/nextjs-template).

## Scripts

Run the development server

```bash
pnpm dev
```

Building for production

```bash
pnpm build
```

Run in production mode

```bash
pnpm start
```

Run Storybook server

```bash
pnpm storybook
```

Build Storybook as a static web application

```bash
pnpm build-storybook
```

## Project directory structure

The template follows a modular architecture with clear separation of concerns:

Main folder structure

```
📂 app
  📂 [locale]
    ...📂 {path}
      📄 page.client.tsx
      📄 page.tsx
    📄 page.client.tsx
    📄 page.tsx
    📄 layout.tsx
    📄 error.tsx

  📂 api
    📂 test
      📄 route.ts
    ...📂 {other-apis}

  📄 actions.ts
  📄 layout.tsx
  📄 not-found.tsx
  📄 error.tsx
  📄 global-error.tsx
  📄 providers.tsx

📂 components
  📂 common
  📂 layout
  📂 hooks
  📄 utils.ts
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
      📄 common.json
      ...📄 {namespace}.json
  📄 client.ts
  📄 server.ts
  📄 utils.ts
```

## Project's main tech stack useful resources

### React

- [React Documentation](https://react.dev) - Official React documentation
- [W3Schools React tutorial](https://www.w3schools.com/react) - Step-by-step guide to learning React.

### Next.js

- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial, the best way to start with next.js if you are new.
- [Next.js Documentation](https://nextjs.org/docs) - Features and API reference

### Tooling

- [TanStack Query](https://tanstack.com/query/latest) - Data fetching & caching
- [Jotai Documentation](https://jotai.org) - Atomic state management
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS
- [TypeScript Handbook](https://www.typescriptlang.org/docs) - TypeScript guide
