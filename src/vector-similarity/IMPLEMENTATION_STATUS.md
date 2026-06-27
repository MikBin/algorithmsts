# Vector Similarity — Implementation Status

This document maps every **public export** from `src/vector-similarity/index.ts` to its implementation file, test coverage, and formula reference.

For exact formulas as implemented in code, see [SIMILARITY_FUNCTIONS.md](./SIMILARITY_FUNCTIONS.md).  
For analysis/benchmark methodology, see [vector-similarity-analysis.md](./vector-similarity-analysis.md).  
For proposed export renames and deprecation plan, see [NAMING_PROPOSAL.md](./NAMING_PROPOSAL.md).

**Legend**

| Column | Meaning |
|--------|---------|
| **Implemented** | Function body exists and is exported |
| **Tested** | Covered in `test/vector-similarity/` |
| **Analysis** | Included in `vector-similarity-analysis.ts` benchmark/compare suite (46 similarity fns) |
| **Doc** | Formula documented in `SIMILARITY_FUNCTIONS.md` |

---

## Classic (`similarity/classic.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `cosineSimilarity` | similarity | yes | — | yes |
| `normalizedCosineSimilarity` | similarity | yes | yes | yes |
| `euclideanDistance` | distance | yes | — | yes |
| `squaredEuclideanDistance` | distance | yes | — | yes |
| `manhattanDistance` | distance | yes | — | yes |
| `pearsonCorrelation` | correlation | yes | — | yes |
| `pearsonCorrelationSimilarity` | similarity | yes | yes | yes |
| `dotProduct` | utility | yes | — | yes |
| `distanceToSimilarity` | utility | yes | — | yes |
| `euclideanSimilarity` | similarity | yes | yes | yes |
| `manhattanSimilarity` | similarity | yes | yes | yes |
| `angularDistance` | distance | yes | — | yes |
| `angularSimilarity` | similarity | yes | — | yes |
| `diceCoefficient` | similarity | yes | — | yes |
| `diceDistance` | distance | yes | — | yes |
| `chebyshevDistance` | distance | yes | — | yes |
| `chebyshevSimilarity` | similarity | yes | yes | yes |
| `gowerDistance` | distance | yes | — | yes |
| `gowerSimilarity` | similarity | yes | yes | yes |
| `soergelDistance` | distance | yes | — | yes |
| `soergelSimilarity` | similarity | yes | yes | yes |
| `kulczynskiDistance` | distance | yes | — | yes |
| `kulczynskiSimilarity` | similarity | yes | yes | yes |
| `canberraDistance` | distance | yes | — | yes |
| `lorentzianDistance` | distance | yes | — | yes |
| `lorentzianSimilarity` | similarity | yes | yes | yes |

---

## Jaccard (`similarity/jaccard.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `jaccardSimilarityBinary` | similarity | yes | yes | yes |
| `jaccardSimilarityWeighted` | similarity | yes | yes | yes |
| `jaccardSimilarityRealValued` | similarity (alias) | yes | yes | yes |

---

## Heuristics (`similarity/heuristics.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `weightedMinkowskiSimilarity` | similarity | yes | yes | yes |
| `canberraSimilarity` | similarity | yes | yes | yes |
| `brayCurtisSimilarity` | similarity | yes | — | yes |
| `harmonicMeanSimilarity` | similarity | yes | — | yes |
| `kendallCorrelationSimilarity` | similarity | yes | — | yes |
| `geometricMeanSimilarity` | similarity | yes | — | yes |
| `ratioBasedSimilarity` | similarity | yes | — | yes |

Types: `MinkowskiOptions`, `MeanSimilarityOptions`

---

## Intersection (`similarity/intersection.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `intersectionSimilarity` | similarity | yes | yes | yes |
| `intersectionSimilarityNormalized` | similarity (alias) | yes | yes | yes |
| `intersectionDistance` | distance | yes | — | yes |
| `waveHedgesDistance` | distance | yes | — | yes |
| `waveHedgesSimilarity` | similarity | yes | yes | yes |
| `sorensenDistance` | distance | yes | — | yes |
| `sorensenSimilarity` | similarity | yes | yes | yes |
| `motykaSimilarity` | similarity | yes | yes | yes |
| `motykaDistance` | distance | yes | — | yes |

---

## Entropy (`similarity/entropy.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `kullbackLeiblerDivergence` | divergence | yes | — | yes |
| `crossEntropy` | divergence | yes | — | yes |
| `jeffreysDivergence` | divergence | yes | — | yes |
| `kDivergence` | divergence | yes | — | yes |
| `topsoeDivergence` | divergence | yes | — | yes |
| `kullbackLeiblerSimilarity` | similarity | yes | yes | yes |
| `jeffreysSimilarity` | similarity | yes | yes | yes |
| `kSimilarity` | similarity | yes | yes | yes |
| `topsoeSimilarity` | similarity | yes | yes | yes |
| `crossEntropySimilarity` | similarity | yes | — | yes |

---

## Chi-square (`similarity/chi-square.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `pearsonChiSquareDistance` | distance | yes | — | yes |
| `neymanChiSquareDistance` | distance | yes | — | yes |
| `additiveSymmetricChiSquareDistance` | distance | yes | — | yes |
| `squaredChiSquareDistance` | distance | yes | — | yes |

---

## Normalized chi-square (`similarity/normalized-chi-square.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `normalizedPearsonChiSquareSimilarity` | similarity | yes | yes | yes |
| `normalizedNeymanChiSquareSimilarity` | similarity | yes | yes | yes |
| `normalizedAdditiveSymmetricChiSquareSimilarity` | similarity | yes | yes | yes |
| `normalizedSquaredChiSquareSimilarity` | similarity | yes | yes | yes |

---

## Fidelity (`similarity/fidelity.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `fidelitySimilarity` | similarity | yes | yes | yes |
| `hellingerDistance` | distance | yes | — | yes |
| `hellingerSimilarity` | similarity | yes | yes | yes |
| `matusitaDistance` | distance | yes | — | yes |
| `squaredChordDistance` | distance | yes | — | yes |

---

## Normalized fidelity (`similarity/normalized-fidelity.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `normalizedMatusitaSimilarity` | similarity | yes | yes | yes |
| `normalizedSquaredChordSimilarity` | similarity | yes | yes | yes |

---

## Non-linear kernels (`similarity/nonLinear.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `polynomialKernelSimilarity` | similarity | yes | yes | yes |
| `rbfKernelSimilarity` | similarity | yes | yes | yes |

---

## Itakura–Saito (`similarity/itakura-saito.ts`)

| Export | Type | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `itakuraSaitoDistance` | distance | yes | yes | yes |
| `vectorSimilarityItakuraSaito` | similarity | yes | yes | yes |

---

## Correlation measures

| Export | File | Type | Tested | Analysis | Doc |
|--------|------|------|--------|----------|-----|
| `correlationDistance` | `correlationDistance.ts` | distance | yes | — | yes |
| `distanceCorrelation` | `distanceCorrelation.ts` | dependence | yes | — | yes |

---

## Custom robust metrics (Google-derived)

| Export | File | Tested | Analysis | Doc |
|--------|------|--------|----------|-----|
| `vectorSimilarityCorrelation` | `vectorSimilarityCorrelation.ts` | yes | yes | yes |
| `vectorSimilarityCorrelationNoStd` | `vectorSimilarityCorrelation.ts` | yes | yes | yes |
| `vectorSimilarityMeanStdPowerArithmeticMean` | `vectorSimilarityMeanStdPowerArithmeticMean.ts` | yes | yes | yes |
| `vectorSimilarityMeanStdPowerArithmeticMeanNoStd` | `vectorSimilarityMeanStdPowerArithmeticMean.ts` | yes | yes | yes |
| `computeVectorSimilarityMeanStdPenalized` | `vectorSimilarityMeanStdPenalized.ts` | yes | yes | yes |
| `computeVectorSimilarityMetricLike` | `vectorSimilarityMetricLike.ts` | yes | yes | yes |
| `computeVectorSimilarityRobust` | `vectorSimilarityRobust.ts` | yes | yes | yes |
| `computeVectorSimilarityTunable` | `vectorSimilarityTunable.ts` | yes | yes | yes |
| `computeVectorSimilarityVarianceWeighted` | `vectorSimilarityVarianceWeighted.ts` | yes | yes | yes |
| `madPenalizedRelativeAgreementSimilarity` | `madPenalizedRelativeAgreementSimilarity.ts` | yes | yes | yes |
| `maxRelativeAgreementMedianMadPowerSimilarity` | `maxRelativeAgreementMedianMadPowerSimilarity.ts` | yes | yes | yes |
| `maxRelativeAgreementMedianMadPowerSimilarityNoMad` | `maxRelativeAgreementMedianMadPowerSimilarity.ts` | yes | yes | yes |

Option types: `VectorSimilarityPenalizedOptions`, `VectorSimilarityMetricLikeOptions`, `VectorSimilarityRobustOptions`, `VectorSimilarityTunableOptions`, `VectorSimilarityVarianceWeightedOptions`, `MadPenalizedRelativeAgreementOptions`

---

## Other

| Export | File | Type | Tested | Analysis | Doc |
|--------|------|------|--------|----------|-----|
| `distanceToMeasure` | `distanceToMeasure.ts` | utility | yes | — | yes |

---

## Not implemented (listed in literature only)

The following appear in survey literature (e.g. arXiv:2408.07706) but are **not** exported from this module:

- String measures: Hamming, Levenshtein, Jaro, n-grams, LCS
- Mahalanobis, Clark, SED (structural Euclidean)
- Spearman rank distance (Kendall Tau **is** implemented)
- Raw inner-product similarity as a standalone export

---

## Summary

| Category | Export count |
|----------|-------------|
| Classic + utilities | 26 |
| Jaccard | 3 |
| Heuristics | 7 |
| Intersection | 9 |
| Entropy | 10 |
| Chi-square + normalized | 8 |
| Fidelity + normalized | 7 |
| Kernels | 2 |
| Itakura–Saito | 2 |
| Correlation | 2 |
| Custom robust | 9 |
| Distance-to-measure | 1 |
| **Total function exports** | **~89** |
| **Analysis suite (pairwise similarity)** | **46** |
