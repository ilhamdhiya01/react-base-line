# Modern React + TypeScript Project Template

A modern React project template with TypeScript, ESLint, Prettier.

## Features

### Core

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React 18](https://reactjs.org/) - JavaScript library for user interfaces
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- 🌐 [TanStack Router](https://tanstack.com/router) - Router for React
- 📊 [TanStack Query](https://tanstack.com/query) - Data fetching library

### Code Quality

- 📝 [ESLint](https://eslint.org/) - Linting utility
- 💖 [Prettier](https://prettier.io/) - Code formatter
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📋 [lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files
- 📏 [commitlint](https://commitlint.js.org/) - Lint commit messages
- 🧪 [Vitest](https://vitest.dev/) - Testing framework

### Development Features

- 🔄 Hot Module Replacement
- ⚡️ Auto Import Sorting
- 🔍 TypeScript strict mode
- 🧹 Auto-fix on save
- 💪 Enforced code style

## Getting Started

### Prerequisites

- Node.js 16+
- Yarn

### Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/your-repo.git
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Build for production:

```bash
yarn build
```

5. Open your browser and navigate to `http://localhost:5173` to see the app in action.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Check for linting errors
- `yarn lint:fix` - Fix linting errors
- `yarn format` - Format code with Prettier
- `yarn test` - Run unit tests
- `yarn test:ui` - Run UI tests

### Git Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add new feature"
```

### Format

type(scope?): description

- feat: A new feature
- fix: A bug fix
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests

### Unit Test Placement

Unit test files should be placed next to the file being tested, using the `.test.ts` or `.test.tsx` suffix.  
Example:
- `src/components/ui/Button/Button.test.tsx`
- `src/hooks/useAuth.test.ts`
- `src/utils/formatDate.test.ts`

### Project Structure

```bash
src/
├── components/        # Reusable components
│   ├── ui/            # UI components (buttons, inputs, cards, etc)
│   ├── module/        # Module-specific components
│   └── shared/        # Shared/global components
├── pages/             # Page components
├── hooks/             # Custom hooks
│   ├── module/        # Module-specific hooks
│   └── shared/        # Shared/global hooks
├── utils/             # Helper functions
├── lib/               # Library code, third-party wrappers, or custom utilities
├── services/          # API calls
├── context/           # React context providers (global state, theme, auth, etc)
├── stores/            # State management (e.g. Zustand, Redux)
│   ├── module/        # Module-specific stores
│   └── shared/        # Shared/global stores
├── schema/            # Validation schemas (e.g. Zod, Yup)
├── types/             # TypeScript types
│   ├── api/           # API types
│   ├── module/        # Module-specific types
│   └── shared/        # Shared/global types
├── styles/            # Styles, Tailwind config, etc
├── assets/            # Static assets (images, fonts, etc)
├── routes/            # App route definitions (TanStack Router)
├── layouts/           # Layout wrappers for pages (e.g. MainLayout, AuthLayout)
├── constants/         # Project-wide constants (e.g. app config, enums, etc)
├── test/              # Test setup files and global test utilities
│   └── setup.ts       # [Do not modify] Global test setup for Vitest
```
