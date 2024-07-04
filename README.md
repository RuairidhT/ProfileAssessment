# React + TypeScript + Vite + React Router Dom + Vitest + Tailwindcss

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
    git clone https://github.com/RuairidhT/ProfileAssessment.git
   ```
2. Navigate to the project directory:

   ```bash
    cd ProfileAssessment
   ```

3. Navigate to the project directory:
   ```bash
    npm install
   ```

### Available Scripts

In the project directory, you can run the following commands:

#### npm run dev

Runs the development server using Vite. This is used for development purposes. It serves your project and supports hot module replacement (HMR) for a smooth development experience.

```bash
npm run dev
```

#### npm run build

Builds the project for production. This command first runs the TypeScript compiler in build mode (tsc -b) to ensure all TypeScript files are correctly compiled, and then it runs the Vite build command to bundle your project.

```bash
npm run build
```

#### npm run test

Runs the tests using Vitest. Vitest is a Vite-native unit test framework. This script will execute all the tests defined in your project.

```bash
npm run test
```

#### npm run lint

Lints your code using ESLint. This command checks your TypeScript and TSX files for code quality issues and adheres to the defined coding standards. It also ensures there are no unused ESLint disable directives and that the maximum number of warnings allowed is zero.

```bash
npm run lint
```

#### npm run preview

Previews the production build locally using Vite. This is useful for testing the build locally before deploying.

```bash
npm run preview
```

#### npm run format

Formats your code using Prettier. This command will format all the files in the ./src directory according to the Prettier configuration defined in your project.

```bash
npm run format
```
