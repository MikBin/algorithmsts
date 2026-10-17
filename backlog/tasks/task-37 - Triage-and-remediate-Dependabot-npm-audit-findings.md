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
- Targeted fixes applied using safe overrides for deep dependencies like `basic-ftp`, `tinypool`, `tmp`, `ip-address`, `picomatch`, `postcss-selector-parser`, reducing findings to 49 vulnerabilities (4 critical, 33 high, 12 moderate).
- Also bumped `@rollup/plugin-terser` to `1.0.0` directly, which completely eliminated the `serialize-javascript` vulnerability (successfully validated in CI/Node 22 without EBADENGINE problems).
- Production dependencies are completely clean (`npm audit --omit=dev` reports 0 vulnerabilities).

### Accepted Exceptions / Risk Statement
All remaining vulnerabilities are restricted strictly to the dev tooling chain (not shipped or exercised on untrusted inputs) and require major bumps that either fail peer dependencies (breaking `npm ci`) or are incompatible with the strict Node 22 environment. The toolchain remains perfectly green using the secured pinned versions (overrides and out-of-range pins), making the residual risk acceptable.

| Dependency Chain | Advisory / Vulnerability | Major Fix Available | Concrete Blocker |
| :--- | :--- | :--- | :--- |
| `vitest` -> `@vitest/*` | Arbitrary file read / XSS (via UI server & mocker) | `vitest@5.0.5` | Breaking `npm ci` peer dependencies (Vitest v5 is incompatible with the rest of the 2.x ecosystem plugins here). |
| `commitizen` -> `cz-conventional-changelog` / `findup-sync` | ReDoS (`minimatch`) | `commitizen@4.3.2` | This is the actual installed version, but the ReDoS vulnerability requires a major bump of `findup-sync` and `find-node-modules` which hasn't been backported or released by upstream in the 4.x tree. |
| `del` -> `globby` -> `fast-glob` -> `micromatch` -> `braces` | Stack exhaustion (`braces`) | `del@8.0.1` | The `rollup-plugin-delete` depends on `del`, requiring a major bump of `rollup-plugin-delete` to v3/v4 which has breaking API/rollup peer dependencies. |
| `lint-staged` -> `micromatch` -> `braces` | Stack exhaustion (`braces`) | `lint-staged@17.6.0` | `lint-staged@17` specifies breaking engine requirements incompatible with our current Node 22 CI setup (strict engine config in dependent tools). |
| `release-it` -> `@release-it/conventional-changelog` | ReDoS (`conventional-recommended-bump`) | `release-it@21` | Throws `EBADENGINE` in our `npm 10 / Node 22` container context. |
| `semantic-release` -> plugins | Assorted ReDoS / Command Injection | `semantic-release@25` | `semantic-release@25` specifies strict engine dependencies which fail `npm ci` directly without `--force`. |

*(Also applied out-of-range override pins for `tinypool`, `basic-ftp`, `picomatch`, `tmp` which are confirmed working on exercised paths; the unexercised FTP path in `get-uri` is noted).*
