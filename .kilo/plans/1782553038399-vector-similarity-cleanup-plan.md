# Vector Similarity Module Cleanup Plan

**Target module:** `src/vector-similarity/` → ships as `@mikbin80/algorithmsts/vector-similarity`
**Version:** `0.0.1` → `0.1.0` (breaking, pre-1.0 SemVer)
**Goal:** Eliminate duplicate/divergent implementations, unify validation, move tooling out of the published build, reach 100% line+branch coverage on similarity logic, and bring the module fully into compliance with `AGENTS.md`.

## Locked Decisions

1. **Duplicate resolution** — one canonical location per function; losers deleted.
   - `canberraSimilarity` → canonical in `heuristics.ts` (per-coordinate normalized form, already public). Delete from `classic.ts`. `classic.ts` keeps raw `canberraDistance`.
   - `chebyshevSimilarity` → canonical in `classic.ts` next to `chebyshevDistance`. Delete the `heuristics.ts` copy.
   - `waveHedgesSimilarity` → canonical in `intersection.ts` (already public). Delete the `heuristics.ts` copy.
2. **Public API** — broad but curated. Re-export all distance functions + the 5 unique `heuristics.ts` similarities. Remove only the redundant legacy `jaccardSimilarity` from `classic.ts`.
3. **Tooling** — move to `tools/vector-similarity/`, exclude from the Rollup build, inject an RNG into the generator and unit-test it. The 555-line report script stays intentionally untested (documented as out of scope).
4. **Validation** — new shared `validateVectors` helper, retrofitted into every similarity file. Standardized on `TypeError` (non-array / non-finite element) and `RangeError` (empty / mismatched length).
5. **Coverage** — mandatory 100% line **and** branch on `src/vector-similarity/` (excluding `tools/`). Rewrite `range-check.test.ts` to assert the correct documented range per function (not the no-op logs it has today).
6. **Versioning** — bump to `0.1.0`, add `CHANGELOG.md`, no backward-compat aliases; include migration notes.

## Global constraints
- Pure functions only (AGENTS.md): no input mutation, deterministic outputs. The only exception is the generator, which becomes deterministic via injected RNG.
- No comments in code unless requested (per repo conventions). JSDoc is the documentation mechanism.
- Every phase must end green: `npm test`, `npm run lint`, `npm run build`.

---

## Phase 0 — Foundations (no behavior change)

### Task 0.1 — Create shared validation helper
- New file: `src/vector-similarity/similarity/internal/validateVectors.ts` (not re-exported from `index.ts`).
- Export a `validateVectors(a, b, opts)` function and supporting signatures:
  - Throws `TypeError` if either argument is not an array, or any element is not `Number.isFinite`.
  - Throws `RangeError` if arrays are empty or of mismatched length.
  - `opts` supports: `{ allowEmpty?: boolean }` (default false), and for functions with extra arrays (weights/ranges) a `validateThird(c, a)` variant.
- Provide a thin per-element finiteness check reused everywhere.
- Add `test/vector-similarity/internal/validateVectors.test.ts` covering: non-array inputs, empty arrays, mismatched lengths, `NaN`/`Infinity`/`-Infinity` elements, valid inputs, the `allowEmpty` flag. Target 100% line+branch on this file.

### Task 0.2 — Scaffold tools directory
- Create `tools/vector-similarity/` (empty for now). Confirm `tools/` is **not** currently part of the Rollup input (verify `rollup.config.ts`).

**Acceptance:** `npm test` green; new helper file at 100% coverage.

---

## Phase 1 — Resolve duplicate functions (P0)

### Task 1.1 — Remove `canberraSimilarity` from `classic.ts`
- Delete the `canberraSimilarity` function (lines ~416-419). Keep `canberraDistance`.
- Update `test/vector-similarity/classic.test.ts` to remove the direct `canberraSimilarity` import + its tests from that file (they will be re-homed in Phase 5).

### Task 1.2 — Remove `chebyshevSimilarity` from `heuristics.ts`
- Delete the `chebyshevSimilarity` function (lines ~167-194). Canonical stays in `classic.ts`.

### Task 1.3 — Remove `waveHedgesSimilarity` from `heuristics.ts`
- Delete the `waveHedgesSimilarity` function (lines ~314-348). Canonical stays in `intersection.ts`.

### Task 1.4 — Update `index.ts` re-exports for duplicates
- `chebyshevSimilarity` now comes from `./similarity/classic` (was heuristics).
- `canberraSimilarity` stays from `./similarity/heuristics`.
- `waveHedgesSimilarity` stays from `./similarity/intersection`.
- Verify no two wildcard/named exports collide by running `npm run build` and inspecting the generated `.d.ts`.

**Acceptance:** No duplicate symbol across the module; build produces a clean `index.d.ts` with each name declared exactly once.

---

## Phase 2 — Curate the public API

### Task 2.1 — Remove legacy `jaccardSimilarity` from `classic.ts`
- Delete `jaccardSimilarity` (lines ~92-109) — superseded by `jaccardSimilarityBinary` in `jaccard.ts`.
- Remove its tests from `classic.test.ts`.

### Task 2.2 — Rewrite `index.ts` to broad-but-curated surface
- Re-export from `classic.ts`: `cosineSimilarity`, `normalizedCosineSimilarity`, `euclideanDistance`, `euclideanSimilarity`, `manhattanDistance`, `manhattanSimilarity`, `pearsonCorrelation`, `pearsonCorrelationSimilarity`, `dotProduct`, `distanceToSimilarity`, `angularDistance`, `angularSimilarity`, `diceCoefficient`, `diceDistance`, `chebyshevDistance`, `chebyshevSimilarity`, `gowerDistance`, `gowerSimilarity`, `soergelDistance`, `soergelSimilarity`, `kulczynskiDistance`, `kulczynskiSimilarity`, `canberraDistance`, `lorentzianDistance`, `lorentzianSimilarity`.
- From `heuristics.ts`: `weightedMinkowskiSimilarity`, `canberraSimilarity`, `brayCurtisSimilarity`, `harmonicMeanSimilarity`, `kendallCorrelationSimilarity`, `geometricMeanSimilarity`, `ratioBasedSimilarity`.
- Keep all existing exports from jaccard/intersection/entropy/chi-square/fidelity/normalized-*/nonLinear/itakura-saito/correlation variants/mean-std variants.
- Keep using explicit named exports (avoid `export *` to prevent silent collisions) — convert any remaining `export *` lines to explicit named lists.

### Task 2.3 — Dedupe `nonLinear.ts` internal helpers
- Remove the local `dotProduct` and `squaredEuclideanDistance`; import `dotProduct` from `classic.ts` and add/export a shared `squaredEuclideanDistance` (place it in `classic.ts` alongside the other distances, or in `internal/`). Keep behavior identical.

### Task 2.4 — Collapse `jaccardSimilarityRealValued`
- Replace its body with a re-export alias: `export { jaccardSimilarityWeighted as jaccardSimilarityRealValued } from ...` (or keep the wrapper but reference it as documented alias). Remove dead duplicate logic.

**Acceptance:** `index.ts` lists every intended export explicitly; `npm run build` succeeds; `dist/types/vector-similarity/index.d.ts` matches the curated surface.

---

## Phase 3 — Relocate tooling & inject RNG

### Task 3.1 — Move the two tooling files
- Move `src/vector-similarity/vectorGenerationService.ts` → `tools/vector-similarity/vectorGenerationService.ts`.
- Move `src/vector-similarity/vector-similarity-analysis.ts` → `tools/vector-similarity/vector-similarity-analysis.ts`.
- Fix all internal import paths in both files.

### Task 3.2 — Exclude `tools/` from the build
- Update `rollup.config.ts` so the vector-similarity entry only bundles `src/vector-similarity/**`, never `tools/`.
- Update `package.json` script `analyze-similarity` to point at the new `tools/vector-similarity/vector-similarity-analysis.ts` path (`tsx ...`).

### Task 3.3 — Inject RNG into `VectorGenerationService`
- Add a constructor param `rng: () => number = Math.random`; replace all `Math.random()` calls with `this.rng()`. Make the class deterministic given a seeded RNG.
- Add `test/vector-similarity/...` → actually place test at `test/vector-similarity-vectorGenerationService.test.ts` (or appropriate) covering: deterministic output with a stub RNG, each generator type, each noise type, each anomaly type, the `linspace` helper, and shape params. Target 100% line+branch on the generator.

**Acceptance:** `npm run build` does not emit the tooling files into `dist`; `npm run analyze-similarity` still runs; generator test green at 100%.

---

## Phase 4 — Retrofit the shared validation helper

### Task 4.1 — Retrofit across all similarity files
- Replace per-file ad-hoc guards in: `classic.ts`, `heuristics.ts`, `jaccard.ts`, `intersection.ts`, `entropy.ts`, `chi-square.ts`, `normalized-chi-square.ts`, `fidelity.ts`, `normalized-fidelity.ts`, `nonLinear.ts`, `itakura-saito.ts`, `correlationDistance.ts`, `distanceCorrelation.ts`, `vectorSimilarityCorrelation.ts`, `distanceToMeasure.ts`, and all `vectorSimilarityMeanStd*.ts` / `vectorSimilarity{Robust,Tunable,MetricLike,VarianceWeighted}.ts`.
- Preserve each function's documented contract (e.g., functions that currently accept empty arrays and return 1, like `jaccardSimilarityBinary`, must pass `allowEmpty: true`).
- Ensure error types now are `TypeError`/`RangeError` consistently.

**Acceptance:** No remaining inline "must be an array" / finiteness boilerplate; behavior verified by Phase 5 tests.

---

## Phase 5 — Tests: close the coverage gap to 100%

### Task 5.1 — Add tests for the `heuristics.ts` unique functions
- New/expanded test coverage for: `brayCurtisSimilarity`, `harmonicMeanSimilarity`, `kendallCorrelationSimilarity`, `geometricMeanSimilarity`, `ratioBasedSimilarity`, plus `weightedMinkowskiSimilarity` (currently only incidentally tested). Cover normal, edge (identical, opposite, zero, single-element), and error cases. This lifts `heuristics.ts` from ~11% → 100%.

### Task 5.2 — Rewrite `range-check.test.ts`
- Replace the no-op `console.log` checks with real assertions keyed to each function's **documented** range:
  - `[0,1]`: similarity functions (`euclideanSimilarity`, `canberraSimilarity`, `brayCurtisSimilarity`, dice/soergel/kulczynski similarities, jaccard family, etc.)
  - `[-1,1]`: `cosineSimilarity`, `pearsonCorrelation`, `polynomialKernelSimilarity`.
  - `[0,∞)`: raw distances (`euclideanDistance`, `manhattanDistance`, `chebyshevDistance`, `canberraDistance`, `lorentzianDistance`, `kulczynskiDistance`).
  - `dotProduct`: unbounded (assert against expected computed value, not a range).
- Use a representative fixture set (identical, different, orthogonal/opposite, zero, all-zero, random).

### Task 5.3 — Validation-branch coverage to 100% across all files
- Add edge-case + error tests for every similarity file to exercise: empty arrays, mismatched lengths, non-array inputs, non-finite elements, and the special-case branches (denominator-zero, single-element, all-zero). Drive every file to **100% line and branch**.
- Re-home the `canberraSimilarity` tests removed in Task 1.1 into a `heuristics` test file.

### Task 5.4 — Add a vitest coverage threshold
- Add `vitest` coverage config (`coverage.thresholds`) gating **100% line + 100% branch** for `src/vector-similarity/**` so regressions fail CI. Confirm `npm run test:prod` enforces it.

**Acceptance:** `npm run test:prod` reports 100% line+branch on `src/vector-similarity/`; threshold check passes.

---

## Phase 6 — Documentation

### Task 6.1 — Complete JSDoc on `classic.ts` and `intersection.ts`
- Add `@param`, `@returns`, `@throws` (with the new `TypeError`/`RangeError` types) to every public function missing them.
- Add **time and space complexity** to every public function's JSDoc (AGENTS.md requirement) across the module — at minimum `classic.ts`, `intersection.ts`, `heuristics.ts`, `nonLinear.ts`, `jaccard.ts`.

**Acceptance:** `npm run lint` green; no public function lacks complexity annotation.

---

## Phase 7 — Versioning, CHANGELOG, final validation

### Task 7.1 — Bump version & write CHANGELOG
- `package.json` version `0.0.1` → `0.1.0`.
- Create/append `CHANGELOG.md` with a `## [0.1.0]` section listing **Breaking**, **Added**, **Changed**, **Removed**:
  - Breaking: `classic.ts` errors are now `TypeError`/`RangeError`; removed `jaccardSimilarity` (use `jaccardSimilarityBinary`); `chebyshevSimilarity` now imported from `classic`; tooling moved out of `dist`.
  - Added: distances + `brayCurtis`/`harmonicMean`/`kendallCorrelation`/`geometricMean`/`ratioBased` similarities now public; `squaredEuclideanDistance`; `validateVectors` (internal).
  - Changed: unified validation, deduplicated implementations, deterministic generator via injected RNG.
  - Removed: duplicate `canberraSimilarity`/`chebyshevSimilarity`/`waveHedgesSimilarity` definitions.
  - Migration notes for deep-importers.

### Task 7.2 — Final full validation
- Run: `npm run lint`, `npm test`, `npm run test:prod` (confirm 100% threshold), `npm run build`, `npm run analyze-similarity`.
- Confirm `dist/` contains no `tools/` artifacts and `dist/types/vector-similarity/index.d.ts` matches the curated surface.

**Acceptance:** all green; `0.1.0` artifacts consistent with this plan.

---

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| Error-type change (`TypeError`/`RangeError`) breaks exact-type catchers | `TypeError`/`RangeError` extend `Error`; document in CHANGELOG. |
| `canberraSimilarity` behavior differs between the two old copies | Canonical is the already-public `heuristics` version, so public consumers see **no** behavior change; only deep-importers of `classic.ts` are affected (documented). |
| Wildcard→named conversion misses an export | Task 2.2 + Task 7.2 diff the generated `.d.ts` against intent. |
| Generator move breaks `analyze-similarity` | Task 3.2 updates the script path; Task 7.2 re-runs it. |
| 100% branch target infeasible on defensive code | `validateVectors` centralizes guards so per-file branches collapse to the shared helper (already 100%). |

## Out of scope
- Testing the 555-line `vector-similarity-analysis.ts` report script (documented as intentionally untested; it's a local dashboarding tool, not library code).
- Refactoring other modules (`algorithms/`, `graphs/`, etc.).
- Performance benchmarking / API redesign beyond dedup + validation unification.
