# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2024-10-16

### Added

- **Next.js 15.1.6** upgrade from 13.4.4
- **React 19** upgrade from 18.2.0
- **TypeScript 5.7** upgrade from 5.1.3
- **Jest 29.7** for unit testing
- **React Testing Library 16.1** for component testing
- **Playwright 1.49** for E2E testing
- **Storybook 8.5** for component documentation
- JSON-based CMS structure for easy content management
- Custom GSAP hooks (useScrollAnimation, useGsapContext)
- Prettier configuration for code formatting
- Component tests and stories for ButtonArrow and Title
- .npmrc for better dependency resolution

### Changed

- Migrated from Cypress to modern testing stack (Jest + Playwright)
- Optimized components with React.memo for better performance
- Replaced img tags with Next.js Image component
- Improved TypeScript typing with strict interfaces
- Added proper cleanup in GSAP animations
- Updated ESLint configuration
- Replaced data-cy with data-testid for testing attributes

### Removed

- Cypress and all related configuration files
- Cypress test files and scripts
- Outdated dependencies

### Fixed

- GSAP animation memory leaks with proper cleanup
- TypeScript strict mode compatibility
- Component re-rendering optimization

## [0.8.0] - Previous version

Initial portfolio implementation with Next.js 13, React 18, and basic Cypress setup.
