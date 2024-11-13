# Next.js React Web Project Template

A production-grade Next.js starter template designed for building scalable enterprise applications. Combines modern development practices with battle-tested tooling and utilities.

[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com)

## Why This Template?

- 🏢 **Enterprise-Ready**: Built with scalability and maintainability in mind
- 🔒 **Type-Safe**: Comprehensive TypeScript setup with strict mode
- 🚀 **Performance-First**: Optimized for Core Web Vitals
- 📱 **Full-Stack Features**: From API layer to UI components
- 🛠️ **Developer Experience**: Extensive tooling and utilities included

## Key Features

### Core Framework

- ⚡️ Next.js 14 with App Router and React Server Components
- 🎯 TypeScript with strict mode
- 🎨 TailwindCSS with advanced features:
  - Automatic class merging with tailwind-merge
  - Class sorting with prettier-plugin-tailwindcss
  - Container queries and form plugins
- 🎭 Dark mode support with next-themes

### State & Data Management

- 📡 TanStack Query v5 with devtools
- 🔄 Jotai for atomic state management
- 📝 React Hook Form with validation
- 🔍 Zod schema validation

### Developer Experience

- 📚 Storybook 8 with Next.js integration
- 🎯 ESLint & Prettier with custom rules
- 🔒 Git hooks with Husky
- 📏 Conventional commits enforcement
- 🐳 Docker support with standalone output

### Production Features

- 🌍 Advanced i18n with next-international
- 🔍 SEO optimization with next-seo
- 🗺️ Automatic sitemap generation
- 📱 PWA configuration and assets
- 🖼️ SVGR for SVG as components
- 🎯 Comprehensive error handling
- 🚀 Performance optimizations

### Additional Utilities & Helpers

- 🛡️ Flicker-resistant and error-handling Image component
- 🎯 RSC (React Server Component) utilities and type-safe helpers
- 📊 SEO utilities for dynamic metadata generation
- 🔄 Custom hooks for common patterns
- 🎨 Advanced Tailwind utilities and components
- 🚀 Performance optimization helpers
- 📱 Responsive design utilities
- 🔍 Type-safe API layer setup
- 🎭 Advanced error boundary configurations

## Quick Start

Start using this template with [Create Next App](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```bash
pnpm dlx create-next-app -e https://github.com/ouedyan/nextjs-template
```

Then search for "TODO" comments to complete project setup.
You can delete this README and use the simplified README.prod instead in your project.

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
