# Vector Similarity — Naming & Alias Proposal

This document proposes a **backward-compatible** rename plan for public exports in `@mikbin80/algorithmsts/vector-similarity`. It addresses misleading names, inconsistent prefixes, and collisions between well-known classical measures and custom Google-derived metrics.

**Status:** Proposal only — no breaking changes until a major version (v1.0.0 or v2.0.0).

Related docs:

- [SIMILARITY_FUNCTIONS.md](./SIMILARITY_FUNCTIONS.md) — formulas as implemented
- [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md) — export catalog

---

## Goals

1. **Truth in naming** — names should reflect what the function computes (not imply Pearson when it does not).
2. **Consistent conventions** — one pattern for distances, similarities, divergences, and custom robust metrics.
3. **Backward compatibility** — old names remain as deprecated aliases for at least one major release cycle.
4. **Minimal churn** — rename only where confusion is high; classics with established names stay unchanged.

---

## Target naming conventions

### Pattern

| Kind | Pattern | Example |
|------|---------|---------|
| Distance | `{base}Distance` | `euclideanDistance` |
| Similarity (direct) | `{base}Similarity` | `hellingerSimilarity` |
| Divergence | `{base}Divergence` | `kullbackLeiblerDivergence` |
| Correlation coefficient | `{base}Correlation` | `pearsonCorrelation` |
| Similarity from divergence | `{base}Similarity` wrapping divergence | `kullbackLeiblerSimilarity` |
| Custom robust family | `{descriptor}Similarity` | `clippedRelativeAgreementSimilarity` |
| Options type | `{FunctionName}Options` | `ClippedRelativeAgreementOptions` |

### Rules

- **No `compute` prefix** on public exports — implementation functions may stay internal; the export is the noun form.
- **No `vectorSimilarity` prefix** on custom metrics — it duplicates the module name and obscures behavior.
- **Disambiguate “correlation”** — reserve `*Correlation` for Pearson, Kendall, distance correlation; custom metrics use `*Agreement*` or `*Relative*`.
- **Document dual implementations** — when two functions share a literature name (Canberra, Lorentzian), the name must encode the variant (`Sum` vs `Normalized`, `LogCompressed` vs survey Lorentzian).

### Shared primitive name (documentation only)

Most custom metrics build a per-coordinate **relative agreement** score:

```
agreement(i) = 1 − |Aᵢ − Bᵢ| / max(|Aᵢ|, |Bᵢ|)     (both zero → 1)
```

Variants use `2·max`, `0.5·(|Aᵢ|+|Bᵢ|)`, or clamping. Refer to this primitive as **max-relative agreement** in docs (not a required export name).

---

## Tier 1 — Misleading names (rename + deprecated alias)

These names actively suggest the wrong mathematical object. **New name becomes primary**; old name exported as deprecated alias.

| Current export | Proposed primary name | Why |
|----------------|----------------------|-----|
| `vectorSimilarityCorrelation` | `maxRelativeAgreementMeanStdPowerSimilarity` | Not Pearson or distance correlation; mean/std power transform of max-relative agreement |
| `vectorSimilarityCorrelationNoStd` | `maxRelativeAgreementMeanStdPowerSimilarityNoStd` | Variant with `stdWeight = 0` |
| `vectorSimilarityMeanStdPowerArithmeticMean` | `arithmeticMeanRelativeAgreementMeanStdPowerSimilarity` | Uses arithmetic-mean denominator, not “correlation” |
| `vectorSimilarityMeanStdPowerArithmeticMeanNoStd` | `arithmeticMeanRelativeAgreementMeanStdPowerSimilarityNoStd` | No-std variant |
| `lorentzianDistance` | `logCompressedL1Distance` | Implementation is `Σ log(1 + \|Δ\|)`, not survey Lorentzian §2.3e |
| `lorentzianSimilarity` | `logCompressedL1Similarity` | Wraps `logCompressedL1Distance` |
| `kSimilarity` | `kDivergenceSimilarity` | “K” is ambiguous; maps from `kDivergence` |
| `vectorSimilarityItakuraSaito` | `itakuraSaitoSimilarity` | Align with `hellingerSimilarity` / `fidelitySimilarity` pattern |

**Shorter aliases (optional, if names feel too long):**

| Long primary | Short alias (also exported) |
|--------------|----------------------------|
| `maxRelativeAgreementMeanStdPowerSimilarity` | `mraMeanStdPowerSimilarity` |
| `arithmeticMeanRelativeAgreementMeanStdPowerSimilarity` | `amraMeanStdPowerSimilarity` |
| `logCompressedL1Distance` | `logSumDistance` |

Recommendation: ship **long descriptive primary names** in docs/IDE; add **short aliases** only if user feedback demands it.

---

## Tier 2 — Inconsistent but not wrong (rename + alias)

| Current export | Proposed primary name | Why |
|----------------|----------------------|-----|
| `computeVectorSimilarityRobust` | `clippedRelativeAgreementSimilarity` | Describes clip + soft aggregate; drop `compute` |
| `computeVectorSimilarityMeanStdPenalized` | `stdPenalizedRelativeAgreementSimilarity` | Mean agreement penalized by std of C |
| `computeVectorSimilarityTunable` | `powerMeanRelativeAgreementSimilarity` | `mean(C)^α` |
| `computeVectorSimilarityMetricLike` | `expMeanRelativeErrorSimilarity` | Exponential of mean relative error |
| `computeVectorSimilarityVarianceWeighted` | `varianceWeightedRelativeAgreementSimilarity` | Normalized std penalty variant |
| `canberraDistance` | `canberraDistanceSum` | Raw sum `Σ \|Δ\|/( \|A\|+\|B\| )`; disambiguate from heuristic |
| `canberraSimilarity` | `canberraSimilarityNormalized` | Uses `(1/n)` sum then `1/(1+d)` |

Option types rename in lockstep:

| Current type | Proposed type |
|--------------|---------------|
| `VectorSimilarityRobustOptions` | `ClippedRelativeAgreementOptions` |
| `VectorSimilarityPenalizedOptions` | `StdPenalizedRelativeAgreementOptions` |
| `VectorSimilarityTunableOptions` | `PowerMeanRelativeAgreementOptions` |
| `VectorSimilarityMetricLikeOptions` | `ExpMeanRelativeErrorOptions` |
| `VectorSimilarityVarianceWeightedOptions` | `VarianceWeightedRelativeAgreementOptions` |

---

## Tier 3 — Keep unchanged (well-known classics)

No rename. Optional **doc aliases** (see Tier 4) only.

- All cosine / Euclidean / Manhattan / Chebyshev / Gower / Soergel / Kulczynski exports
- `pearsonCorrelation`, `pearsonCorrelationSimilarity`, `correlationDistance`, `distanceCorrelation`
- Jaccard, intersection, Wave Hedges, Sørensen, Motyka, Bray–Curtis
- Entropy family except `kSimilarity` (Tier 1)
- Chi-square and normalized chi-square
- Fidelity, Hellinger, Matusita, squared chord
- `polynomialKernelSimilarity`, `rbfKernelSimilarity`
- `itakuraSaitoDistance`, `distanceToMeasure`, `distanceToSimilarity`, `dotProduct`
- `weightedMinkowskiSimilarity`, `harmonicMeanSimilarity`, `geometricMeanSimilarity`, `ratioBasedSimilarity`, `kendallCorrelationSimilarity`

---

## Tier 4 — Documentation aliases only (no code rename)

Clarify in JSDoc and `SIMILARITY_FUNCTIONS.md` without changing exports:

| Export | Suggested doc alias / note |
|--------|---------------------------|
| `topsoeDivergence` | Also known as **symmetric Jensen–Shannon divergence** (mixture midpoint form) |
| `kDivergence` | `D_KL(P ‖ (P+Q)/2)` — related to capacitory / half-JSD literature |
| `sorensenDistance` | Equivalent to **Bray–Curtis distance** |
| `sorensenSimilarity` | Equivalent to **Bray–Curtis similarity** (`brayCurtisSimilarity`) |
| `kulczynskiSimilarity` | Distinct from Kulczynski distance in intersection §3.4 of surveys |
| `intersectionSimilarityNormalized` | **Deprecated alias** of `intersectionSimilarity` — mark in docs, remove in major version |
| `jaccardSimilarityRealValued` | Document as alias of `jaccardSimilarityWeighted` |
| `normalizedCosineSimilarity` | Doc: `(cosine + 1) / 2` |
| `kullbackLeiblerDivergence` | Accept `klDivergence` as future optional alias |

---

## Deprecation strategy

### Phase 0 — Documentation (immediate, no code change)

- [x] Accurate formulas in `SIMILARITY_FUNCTIONS.md`
- [x] Export catalog in `IMPLEMENTATION_STATUS.md`
- [ ] Add `@deprecated` JSDoc tags pointing to proposed names (can be done before aliases exist)
- [ ] Dashboard methodology links to this proposal

### Phase 1 — Add aliases (minor release, e.g. v0.2.0)

For each Tier 1 & 2 rename:

1. Implement new export as the **same function reference** (no duplication of logic).
2. Keep old export; attach `@deprecated Use \`newName\` instead`.
3. Re-export both from `index.ts`.
4. Update analysis script keys **only** if we want cleaner JSON — otherwise keep old keys for dashboard stability and map labels in UI.
5. Add tests asserting `oldName === newName` (reference equality or numeric equality on fixtures).

Example (conceptual):

```typescript
/** @deprecated Use `clippedRelativeAgreementSimilarity` instead. */
export const computeVectorSimilarityRobust = clippedRelativeAgreementSimilarity;
```

### Phase 2 — Migrate internals (minor releases)

- Update `tools/vector-similarity/vector-similarity-analysis.ts` to register **new names** alongside old (or switch with JSON key migration).
- Update dashboard `similarity-data.js` generation labels (optional cosmetic).
- Update visualization calculator: show new names in UI, accept old names in deep links if any.

### Phase 3 — Remove deprecated exports (major release)

- Remove Tier 1 & 2 old names from `index.ts`.
- Remove `intersectionSimilarityNormalized` duplicate.
- Bump major version; publish migration guide in CHANGELOG.

Suggested timeline:

| Release | Action |
|---------|--------|
| v0.x (next minor) | Phase 1 aliases + JSDoc `@deprecated` |
| v0.x+1 | Phase 2 analysis/dashboard label migration |
| v1.0.0 | Phase 3 removals |

---

## Full mapping table (Tier 1 + 2)

| # | Current | Proposed primary | Tier |
|---|---------|------------------|------|
| 1 | `vectorSimilarityCorrelation` | `maxRelativeAgreementMeanStdPowerSimilarity` | 1 |
| 2 | `vectorSimilarityCorrelationNoStd` | `maxRelativeAgreementMeanStdPowerSimilarityNoStd` | 1 |
| 3 | `vectorSimilarityMeanStdPowerArithmeticMean` | `arithmeticMeanRelativeAgreementMeanStdPowerSimilarity` | 1 |
| 4 | `vectorSimilarityMeanStdPowerArithmeticMeanNoStd` | `arithmeticMeanRelativeAgreementMeanStdPowerSimilarityNoStd` | 1 |
| 5 | `lorentzianDistance` | `logCompressedL1Distance` | 1 |
| 6 | `lorentzianSimilarity` | `logCompressedL1Similarity` | 1 |
| 7 | `kSimilarity` | `kDivergenceSimilarity` | 1 |
| 8 | `vectorSimilarityItakuraSaito` | `itakuraSaitoSimilarity` | 1 |
| 9 | `computeVectorSimilarityRobust` | `clippedRelativeAgreementSimilarity` | 2 |
| 10 | `computeVectorSimilarityMeanStdPenalized` | `stdPenalizedRelativeAgreementSimilarity` | 2 |
| 11 | `computeVectorSimilarityTunable` | `powerMeanRelativeAgreementSimilarity` | 2 |
| 12 | `computeVectorSimilarityMetricLike` | `expMeanRelativeErrorSimilarity` | 2 |
| 13 | `computeVectorSimilarityVarianceWeighted` | `varianceWeightedRelativeAgreementSimilarity` | 2 |
| 14 | `canberraDistance` | `canberraDistanceSum` | 2 |
| 15 | `canberraSimilarity` | `canberraSimilarityNormalized` | 2 |

**15 renames**, **~71 exports unchanged**.

---

## File / module renames (optional, internal)

Public API can alias without moving files immediately. Long-term cleanup:

| Current file | Suggested file (internal) |
|--------------|-------------------------|
| `vectorSimilarityCorrelation.ts` | `maxRelativeAgreementMeanStdPower.ts` |
| `vectorSimilarityRobust.ts` | `clippedRelativeAgreement.ts` |
| `vectorSimilarityMeanStdPenalized.ts` | `stdPenalizedRelativeAgreement.ts` |
| `vectorSimilarityTunable.ts` | `powerMeanRelativeAgreement.ts` |
| `vectorSimilarityMetricLike.ts` | `expMeanRelativeError.ts` |
| `vectorSimilarityVarianceWeighted.ts` | `varianceWeightedRelativeAgreement.ts` |
| `vectorSimilarityMeanStdPowerArithmeticMean.ts` | `arithmeticMeanRelativeAgreementMeanStdPower.ts` |

Defer file renames until Phase 2 to avoid git churn in a single PR.

---

## Consumer migration guide (for CHANGELOG)

### TypeScript / ESM

```typescript
// Before
import {
  vectorSimilarityCorrelation,
  computeVectorSimilarityRobust,
  lorentzianSimilarity,
} from '@mikbin80/algorithmsts/vector-similarity';

// After (v0.x with aliases — both work)
import {
  maxRelativeAgreementMeanStdPowerSimilarity,
  clippedRelativeAgreementSimilarity,
  logCompressedL1Similarity,
} from '@mikbin80/algorithmsts/vector-similarity';
```

### Search-and-replace checklist

```
vectorSimilarityCorrelation          → maxRelativeAgreementMeanStdPowerSimilarity
vectorSimilarityCorrelationNoStd     → maxRelativeAgreementMeanStdPowerSimilarityNoStd
computeVectorSimilarityRobust        → clippedRelativeAgreementSimilarity
computeVectorSimilarityMeanStdPenalized → stdPenalizedRelativeAgreementSimilarity
computeVectorSimilarityTunable       → powerMeanRelativeAgreementSimilarity
computeVectorSimilarityMetricLike    → expMeanRelativeErrorSimilarity
computeVectorSimilarityVarianceWeighted → varianceWeightedRelativeAgreementSimilarity
lorentzianDistance                   → logCompressedL1Distance
lorentzianSimilarity                 → logCompressedL1Similarity
kSimilarity                          → kDivergenceSimilarity
vectorSimilarityItakuraSaito         → itakuraSaitoSimilarity
canberraDistance                     → canberraDistanceSum
canberraSimilarity                   → canberraSimilarityNormalized
```

---

## Dashboard & analysis impact

| Area | Impact | Recommendation |
|------|--------|----------------|
| `similarity-data.js` keys | JSON uses current function names | Regenerate with new keys in Phase 2; keep old keys one release for cached builds |
| Dashboard tables | Display function names as-is | Add display-name map: `{ vectorSimilarityCorrelation: 'MRA mean-std power sim.' }` |
| `vector-similarity-analysis.ts` | Iterates `similarityFunctions` record | Add new keys as duplicates pointing to same fn; deprecate old keys in comments |
| E2E tests | String selectors on function names | Update when UI labels change |
| UMD bundle `VectorSimilarity` global | External consumers | Must keep old names on global until major |

---

## Testing requirements (when implementing Phase 1)

1. **Alias parity test** — for each rename pair, assert identical outputs on fixed vectors (including outlier/stress fixtures from analysis).
2. **Export surface test** — extend `documentation.test.ts` to require proposed names exist once aliases land.
3. **Deprecation lint** — optional ESLint rule or test that deprecated exports list their replacement in JSDoc.
4. **No coverage regression** — alias lines are re-exports; no new branches needed.

---

## Recommended implementation order

1. **Quick win:** Tier 1 `vectorSimilarityCorrelation*` → `maxRelativeAgreement*` (highest confusion).
2. **Quick win:** `computeVectorSimilarity*` → drop `compute`, descriptive suffix (Tier 2).
3. **Medium:** Canberra + Lorentzian disambiguation (Tier 2) — update docs first, then aliases.
4. **Low urgency:** `kSimilarity`, `vectorSimilarityItakuraSaito`, type renames.
5. **Major release:** remove deprecated exports and `intersectionSimilarityNormalized`.

---

## Open questions

1. **Name length vs clarity** — adopt long primary names, or primary short + long in docs only?
2. **Analysis JSON stability** — breaking dashboard cache vs dual keys for one release?
3. **Google upstream** — if these metrics originated internally at Google, align naming with any upstream package before public rename?
4. **`package.json` exports map** — subpath exports unchanged; only symbol names inside module affected.

---

## Summary

| Category | Count |
|----------|-------|
| Proposed renames (with deprecated aliases) | 15 |
| Unchanged classic exports | ~71 |
| Doc-only clarifications | 9 |
| Custom metrics grouped under | **relative agreement** family |

The custom functions are **not renamed to claim novelty** — they are renamed to describe **composition** (max-relative agreement + std penalty + clipping) so users can choose them alongside **known** classics (Canberra, Hellinger, Pearson) without mistaking them for standard correlation coefficients.
