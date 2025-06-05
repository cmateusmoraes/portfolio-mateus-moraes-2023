# Agent Guidelines for portfolio-mateus-moraes-2023

This repository contains the personal portfolio of Mateus Moraes. It is built with **Next.js 13** using the App Router, **TypeScript**, and **CSS Modules** with **SASS**. Animations rely on **GSAP** and automated tests are written with **Cypress**. Husky and lint-staged run ESLint before each commit.

## Repository conventions

- **Language**: all source code is TypeScript. When adding new files, prefer `tsx`/`ts` extensions and keep strict typing enabled.
- **Paths**: use the alias `@/*` to reference files inside `src`.
- **Components**: place React components under `src/components/ComponentName/`. Each component folder should contain an `index.tsx` file and a `*.module.scss` stylesheet if styles are needed.
- **Styles**: global styles live in `src/styles/`. Component styles use SCSS modules and follow the pattern `component-name.module.scss` in kebab case.
- **Commit messages**: write concise commits in English using the imperative mood (e.g. `fix: correct typo` or `feat: add new section`).

## Validation

After modifying the code, run the following commands before committing:

```bash
npm run lint    # checks linting via lint-staged
npm run build   # ensures Next.js builds successfully
npm run cy:run  # executes Cypress component tests when present
```

These steps help keep the project stable. Test commands are optional if no tests are affected.
