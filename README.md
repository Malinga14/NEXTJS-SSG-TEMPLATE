# Next.js SSG Template

A [Next.js](https://nextjs.org) project template with special focus on SSG-first rendering.

**Live Demo**: [https://nextjs-ssg-template.vercel.app/](https://nextjs-ssg-template.vercel.app/)

**Author**: Malinga Pasindu

## Tech Stack

| Package      | Version |
| ------------ | ------- |
| Next.js      | 15.5.9  |
| React        | 19.0.0  |
| TypeScript   | 5.x     |
| Tailwind CSS | 4.x     |
| OGL          | 1.0.11  |
| ESLint       | 9.x     |
| Prettier     | 3.5.3   |
| Husky        | 9.1.7   |
| lint-staged  | 16.1.2  |

## Architecture

This project is built on the **Jamstack architecture**, leveraging Next.js's powerful Static Site Generation (SSG) capabilities. By pre-rendering pages at build time, the application delivers:

- **Lightning-fast performance**: Static HTML files served directly from CDN
- **Enhanced security**: No server-side runtime reduces attack surface
- **Scalability**: Static files can be distributed globally with minimal infrastructure
- **SEO optimization**: Fully rendered HTML improves search engine indexing

### Next.js SSG Configuration

The project is configured with SSG-first rendering, meaning pages are generated as static HTML at build time.

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
};
```

## Getting Started

First, run the development server (with Turbopack enabled):

```bash
npm run dev
```

## Code Quality

This project enforces code quality standards automatically using Git hooks and lint-staged:

### Pre-commit Hooks

The project uses [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged) to run quality checks on staged files before each commit:

- **Prettier**: Automatically formats all staged files
- **ESLint**: Lints and fixes JavaScript/TypeScript files
- **Next.js lint**: Runs Next.js-specific linting rules
- **Unused imports**: Automatically removes unused imports

Configuration is defined in `.lintstagedrc.mjs` using ES module syntax.

### Manual Commands

You can also run these commands manually:

```bash
# Start development server with Turbopack
npm run dev

# Build for production (static export)
npm run build

# Lint and fix issues
npm run lint:fix

# Format all files
npm run format

# Check formatting without changes
npm run format:check

# Type check
npm run type-check

# Run all validation checks
npm run validate
```

## TypeScript Configuration

Strict TypeScript is enabled with the following key settings:

- `strict: true`
- `strictNullChecks: true`
- `noUncheckedIndexedAccess: true`
- Path aliases: `@/*` maps to `./src/*`

## Production

### Cloudflare Static Hosting

This template is optimized for deployment on **Cloudflare Pages** as Next.js static site deployment
