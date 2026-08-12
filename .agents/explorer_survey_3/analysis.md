# Comprehensive Survey Report: Build, Test, Lint & Environment Analysis

**Repository**: `desert-bloom-diary` (`/home/matthias/github/desert-bloom-diary`)  
**Surveyed By**: Explorer 3 (`teamwork_preview_explorer`)  
**Date**: 2026-08-12  

---

## Executive Summary

The `desert-bloom-diary` project is a Next.js 16.3.0 web application running on React 19.2.8 and TypeScript 5 with pnpm 10.32.1. The production build (`pnpm build`) succeeds cleanly without errors. There are currently no automated test suites or runners configured. Running `pnpm lint` fails due to 36 pre-existing ESLint errors (unescaped quotes in JSX and `setState` inside `useEffect`). No em dashes (`—`), `&mdash;`, or `\u2014` exist in the codebase outside `node_modules`, `.next`, or `.git`.

---

## 1. Package Manager & Engine Constraints

- **Package Manager**: `pnpm@10.32.1` declared in `package.json` (`packageManager`).
- **Workspace Config**: `pnpm-workspace.yaml` ignores built dependencies `sharp` and `unrs-resolver`.
- **Node Engine**: `"node": ">=20.0.0"` in `package.json`. `.nvmrc` specifies `24` (enforcing Node 24 active LTS).
- **Port Assignment**: `dev` and `start` scripts bind to port `8400` (`next dev -p 8400`, `next start -p 8400`).

---

## 2. Dependencies & Build Scripts

### Scripts (`package.json`):
```json
"scripts": {
  "dev": "next dev -p 8400",
  "build": "next build",
  "start": "next start -p 8400",
  "lint": "eslint ."
}
```

### Core Dependencies:
- `next`: `16.3.0`
- `react`: `19.2.8`
- `react-dom`: `19.2.8`
- `lucide-react`: `^1.31.0`
- `date-fns`: `^4.4.0`
- `@vercel/analytics`: `^2.0.1`
- `@vercel/speed-insights`: `^2.0.0`
- `clsx`: `^2.1.1`
- `tailwind-merge`: `^3.6.0`

### Dev Dependencies:
- `typescript`: `^5`
- `eslint`: `^9`
- `eslint-config-next`: `16.3.0`
- `tailwindcss`: `^4`
- `@tailwindcss/postcss`: `^4`

---

## 3. Test Setup Assessment

- **Automated Test Runners**: None installed or configured (no Vitest, Jest, Playwright, or Cypress).
- **Test Scripts**: Missing from `package.json`.
- **Test Files**: 0 test or spec files found in the repository (excluding `docs/cast_and_locations_spec.md` which is character documentation).
- **Recommendation**: To add unit testing, Vitest can be installed alongside `@testing-library/react`.

---

## 4. Linting & Formatting Rules

- **ESLint Setup**: `eslint.config.mjs` uses ESLint v9 flat config with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- **Prettier Setup**: No `.prettierrc` or Prettier configuration found.
- **Lint Execution Result**: `pnpm lint` fails with exit code 1 (36 errors, 38 warnings).
  - Main Error 1: `react/no-unescaped-entities` across `src/app/kitchen-sink/page.tsx`, `src/app/page.tsx`, `src/components/MomDocCareWidget.tsx`, `src/components/SearchModal.tsx`.
  - Main Error 2: `react-hooks/set-state-in-effect` at `src/components/EntryCard.tsx:31:11`.
  - Warnings: `@typescript-eslint/no-unused-vars` and `@next/next/no-img-element`.

---

## 5. TypeScript Constraints

- **tsconfig.json**:
  - Target: `ES2017`
  - Strict Mode: `true` (`"strict": true`)
  - Module Resolution: `bundler`
  - Path Alias: `"@/*": ["./src/*"]`
  - No Emit: `true`
  - Next.js Plugin: Enabled (`"plugins": [{"name": "next"}]`)
- **TypeScript Verification**: Passes cleanly during `next build` (`Finished TypeScript in 1748ms`).

---

## 6. Em Dash Audit

- Searched repository using `grep_search` for `—`, `&mdash;`, and `\u2014`.
- **Results**: 0 occurrences found across all code, content, and documentation files outside ignored directories (`node_modules`, `.next`, `.git`).
- Clean adherence to zero em dash rule.

---

## 7. Build Execution Verification (`pnpm build`)

- Command: `pnpm build`
- Command Output:
```
> desert-bloom-diary@1.4.1 build /home/matthias/github/desert-bloom-diary
> next build

▲ Next.js 16.3.0 (Turbopack)
- Environments: .env.local
✓ Running next.config.ts took 21ms

  Creating an optimized production build ...
✓ Compiled successfully in 311ms
  Finished TypeScript in 1748ms    ✓ Finished TypeScript in 1748ms 
  Collecting page data using 11 workers in 683ms    ✓ Collecting page data using 11 workers in 683ms 
✓ Generating static pages using 11 workers (25/25) in 519ms
  Finalizing page optimization in 8ms    ✓ Finalizing page optimization in 8ms 

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├   /entry/[id]
│ ├ ● /entry/week-5
│ ├ ● /entry/week-7
│ ├ ● /entry/week-9
│ └ ● [+10 more paths]
├ ○ /kitchen-sink
├ ○ /manifest.webmanifest
├ ○ /momdoc-tempe
├ ○ /my-care
├ ○ /robots.txt
├ ○ /sitemap.xml
└ ○ /tracker

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```
- Status: Exit code 0 (Pass).
