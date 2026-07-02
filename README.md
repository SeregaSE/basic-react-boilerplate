### Simple, small and extendable project skeleton for React
Made with:
<p align="center">
  <a href="https://github.com/facebook/react">
    <img alt="react logo" src="https://github.com/SeregaSE/basic-react-boilerplate/blob/master/docs/react.svg" width="144">
  </a>
</p>

#### Out of the box:
- React 19 with `react-router-dom` v7;
- Written in TypeScript (type-check with `tsc --noEmit`);
- [Vite](https://vite.dev) dev server & build (esbuild-powered) with Fast Refresh / HMR;
- Modern CSS + CSS Modules (`*.module.css`), autoprefixed and minified by [Lightning CSS](https://lightningcss.dev) using `.browserslistrc`;
- [Biome](https://biomejs.dev) for linting & formatting (JS/TS + CSS) — one tool, one config;
- Pre-commit hook (husky + lint-staged) running type-check and Biome autofix;
- Tests with [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/react);

Just do something awesome!

#### Quick start

```sh
git clone https://github.com/SeregaSE/basic-react-boilerplate.git my-app
cd my-app
npm install
npm run dev
```

Go to [http://localhost:5173](http://localhost:5173)
![alt text](https://github.com/SeregaSE/basic-react-boilerplate/blob/master/docs/preview.png "Example app screenshot")

#### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check the project with TypeScript |
| `npm run check` | Lint & format-check with Biome |
| `npm run check:fix` | Apply Biome autofixes |
| `npm test` | Run the test suite once with Vitest |
| `npm run test:watch` | Run Vitest in watch mode |

When you are ready to deploy to production, create a bundle with `npm run build`.
