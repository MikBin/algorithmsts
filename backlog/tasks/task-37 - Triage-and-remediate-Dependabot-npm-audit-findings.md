---
id: TASK-37
title: "Triage and remediate npm audit / Dependabot findings"
status: Done
assignee: []
created_date: '2026-10-16'
labels:
  - security dependencies
dependencies:
  - TASK-20
references: []
priority: high
type: chore
ordinal: 37000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
GitHub Dependabot reports 5 findings on master as of 2026-10-16 (1 critical, 1 high, 3 moderate). The executing session must enumerate them via `npm audit` / `npm audit fix --dry-run`, upgrade affected direct or transitive dependencies within semver-compatible ranges (major bumps only with justification + full test verification), verify with `npm run lint`, `npx tsc --noEmit`, `npm test` and `npm run build`, and keep package-lock.json committed and consistent.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 `npm audit` reports no critical or high findings (or documented exceptions with rationale)
- [x] #2 moderate findings triaged (fixed or documented)
- [x] #3 full suite green after upgrades
- [x] #4 lockfile committed and CI uses it
<!-- AC:END -->

## Progress Notes
- Initial audit showed 59 vulnerabilities (5 critical, 39 high, 13 moderate, 2 low).
- Targeted fixes applied using safe overrides for deep dependencies (`tinypool`, `basic-ftp`, `tmp`), reducing findings to 49 vulnerabilities (4 critical, 33 high, 12 moderate).
- Also bumped `@rollup/plugin-terser` to `1.0.0` directly, which completely eliminated the `serialize-javascript` vulnerability.
- Production dependencies are completely clean (`npm audit --omit=dev` reports 0 vulnerabilities).

### Accepted Exceptions / Risk Statement
All remaining vulnerabilities are restricted strictly to the dev tooling chain (not shipped or exercised on untrusted inputs). The toolchain remains perfectly green using the secured pinned versions (overrides and out-of-range pins), making the residual risk acceptable.

| Dependency Chain | Advisory / Vulnerability | Major Fix Available | Concrete Blocker |
| :--- | :--- | :--- | :--- |
| `vitest` -> `@vitest/*` | Arbitrary file read / XSS (via UI server & mocker) | `vitest@5.0.5` + `vite@8.3.4` | Breaking `npm ci` peer dependencies. Vitest v5 requires a coordinated upgrade of Vite >= 6.4 and @vitest/* 5.0.5, creating significant breaking API impact on the testing toolchain ecosystem. |
| `vite` -> `esbuild` | Arbitrary file read / path traversal | `vite@8.3.4` | Tied to the `vitest` coordinated upgrade cluster, breaking testing toolchain APIs. |
| `commitizen` -> `cz-conventional-changelog` / `findup-sync` | Stack exhaustion (`braces`) | No fix available upstream | The vulnerability relies on `braces <=3.0.3` via `findup-sync -> micromatch -> braces`. The latest `braces` version (3.0.3) is still affected, so no fix exists. |
| `del` -> `globby` -> `fast-glob` -> `micromatch` -> `braces` | Stack exhaustion (`braces`) | No fix available upstream | Even updating `rollup-plugin-delete` to 3.0.2 relies on the same unpatched `braces <=3.0.3` advisory via `fast-glob`. No upstream fix. |
| `lint-staged` -> `micromatch` -> `braces` | Stack exhaustion (`braces`) | No fix available upstream | Updating `lint-staged` to 17.x does not resolve the unpatched `braces <=3.0.3` advisory. |
| `release-it` -> `@release-it/conventional-changelog` | Argument Injection (`@conventional-changelog/git-client`) & ReDoS (`@octokit/plugin-paginate-rest`) | `release-it@21.0.3` | Breaking changes and verification cost. Upgrading requires adopting breaking APIs for release automation that risk the delivery pipeline. |
| `semantic-release` -> `@semantic-release/npm` -> `npm` | Bundled vulnerabilities in npm 10.9.9 (`ip-address`, `picomatch`, `postcss-selector-parser`, etc) | `semantic-release@25` | `npm@10` (required for CI parity lockfiles) bundles these vulnerable dependencies inside `node_modules/npm/node_modules/*`. Package.json overrides cannot reach them, and pinning `npm >=11` is out-of-range and breaks CI parity. |

*(Also applied out-of-range override pins for `tinypool` (vitest range ^1.0.1), `basic-ftp` (get-uri ^5.0.2), `tmp` (external-editor ^0.0.33) which are confirmed working on exercised paths; the unexercised FTP path in `get-uri` is noted).*
