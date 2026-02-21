# Testing

Requirements:
- Node.js 18+ and a package manager (`npm`, `pnpm`, or `yarn`).

Install dependencies:

```bash
cd /home/abhishek/Projects/next-portfolio
npm install
# or with pnpm: pnpm install
```

Run tests (unit):

```bash
npm test
# or: pnpm test
```

Run tests with coverage (CI):

```bash
npm run test:ci
```

Notes:
- The project is configured to use Vitest with a `jsdom` environment and includes basic unit tests for `src/lib/utils.ts` and `src/lib/posts.ts`.
- If you prefer `pnpm` or `yarn`, the scripts are compatible; swap the install command accordingly.
