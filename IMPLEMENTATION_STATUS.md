# Vector Similarity Implementation Status

**Project**: algorithmsts  
**Source**: A Guide to Similarity Measures (arXiv:2408.07706v1)  
**Total Measures in Literature**: 50+  
**Implemented in vector-similarity**: ~15-20 core functions across multiple variants

---

## ✅ IMPLEMENTED MEASURES

### 1. Inner Product Based Measures

| Measure | File | Status | Notes |
|---------|------|--------|-------|
| **Cosine Similarity** | `classic.ts` | ✅ | `cosineSimilarity()` - Full implementation |
| **Inner Product (Dot Product)** | `classic.ts` | ✅ | `dotProduct()` - Basic inner product |
| **Pearson Correlation** | `classic.ts` | ✅ | `pearsonCorrelation()` + `pearsonCorrelationSimilarity()` |
| **Jaccard Similarity** | `classic.ts`, `jaccard.ts` | ✅ | Binary, weighted, and real-valued variants |
| **Angular Distance** | `classic.ts` | ✅ | `angularDistance()` + `angularSimilarity()` |
| **Dice Coefficient** | `classic.ts` | ✅ | `diceCoefficient()` + `diceDistance()` |

### 2. Minkowski Distance Family

| Measure | File | Status | Notes |
|---------|------|--------|-------|
| **L₂ (Euclidean)** | `classic.ts` | ✅ | `euclideanDistance()` + `euclideanSimilarity()` |
| **L₂² (Squared Euclidean)** | `heuristics.ts` | ⚠️ | Via weighted Minkowski with p=2 |
| **L₁ (Manhattan)** | `classic.ts` | ✅ | `manhattanDistance()` + `manhattanSimilarity()` |
| **Lₚ (Minkowski)** | `heuristics.ts` | ✅ | `weightedMinkowskiSimilarity()` with configurable p |
| **L∞ (Chebyshev)** | `classic.ts` | ✅ | `chebyshevDistance()` + `chebyshevSimilarity()` |
| **Gower Distance** | `classic.ts` | ✅ | `gowerDistance()` + `gowerSimilarity()` |
| **Soergel Distance** | `classic.ts` | ✅ | `soergelDistance()` + `soergelSimilarity()` |
| **Kulczynski Distance** | `classic.ts` | ✅ | `kulczynskiDistance()` + `kulczynskiSimilarity()` |
| **Canberra Distance** | `classic.ts` | ✅ | `canberraDistance()` + `canberraSimilarity()` |
| **Lorentzian Distance** | `classic.ts` | ✅ | `lorentzianDistance()` + `lorentzianSimilarity()` |

### 3. Intersection Similarity Measures

| Measure | File | Status | Notes |
|---------|------|--------|-------|
| **Intersection Similarity** | `intersection.ts` | ✅ | `intersectionSimilarity()` |
| **Wave Hedges Distance** | `intersection.ts` | ✅ | `waveHedgesDistance()` + `waveHedgesSimilarity()` |
| **Sørensen Distance** | `intersection.ts` | ✅ | `sorensenDistance()` + `sorensenSimilarity()` |
| **Motyka Similarity** | `intersection.ts` | ✅ | `motykaSimilarity()` + `motykaDistance()` |
| **Kulczynski Similarity** | - | ❌ | Not implemented (PDF form) |
| **Jaccard (PDF form)** | - | ❌ | Not implemented (PDF form) |

### 4. Entropy Family Measures

| Measure | File | Status | Notes |
|---------|------|--------|-------|
| **Kullback-Leibler Divergence** | `entropy.ts` | ✅ | `kullbackLeiblerDivergence()` + `kullbackLeiblerSimilarity()` |
| **Cross Entropy** | `entropy.ts` | ✅ | `crossEntropy()` |
| **Jeffreys-Divergence** | `entropy.ts` | ✅ | `jeffreysDivergence()` + `jeffreysSimilarity()` |
| **K-Divergence** | `entropy.ts` | ✅ | `kDivergence()` + `kSimilarity()` |
| **Topsøe Divergence** | `entropy.ts` | ✅ | `topsoeDivergence()` + `topsoeSimilarity()` |

### 5. χ² (Chi-Square) Family

| Measure | File | Status | Notes |
|---------|------|--------|-------|
| **Pearson χ²** | - | ❌ | Not implemented |
| **Neyman χ²** | - | ❌ | Not implemented |
| **Additive Symmetric χ²** | - | ❌ | Not implemented |
| **Spearman Distance** | - | ❌ | Not implemented |
| **Squared χ²** | - | ❌ | Not implemented |

### 6. Fidelity Family (Squared-Chord Family)

| Measure | File | Status | Notes |
|---------|------|--------|-------|
| **Fidelity (Bhattacharyya)** | - | ❌ | Not implemented |
| **Hellinger Distance** | - | ❌ | Not implemented |
| **Matusita Distance** | - | ❌ | Not implemented |
| **Squared-Chord Distance** | - | ❌ | Not implemented |

### 7. String Similarity Measures

| Measure | File | Status | Notes |
|---------|------|--------|-------|
| **Hamming Distance** | - | ❌ | Not in vector-similarity (string-focused) |
| **Levenshtein Distance** | - | ❌ | Not in vector-similarity (string-focused) |
| **Swap Distance** | - | ❌ | Not in vector-similarity (string-focused) |
| **LCS (Longest Common Subsequence)** | - | ❌ | Not in vector-similarity (string-focused) |
| **Jaro Similarity** | - | ❌ | Not in vector-similarity (string-focused) |
| **N-Grams Similarity** | - | ❌ | Not in vector-similarity (string-focused) |

### 8. Custom/Advanced Implementations

| Measure | File | Status | Notes |
|---------|------|--------|-------|
| **Weighted Minkowski** | `heuristics.ts` | ✅ | Configurable weights & p-norm |
| **Metric-Like Similarity** | `vectorSimilarityMetricLike.ts` | ✅ | Relative difference based |
| **Mean-Std Power** | `vectorSimilarityMeanStdPower.ts` | ✅ | Custom heuristic |
| **Mean-Std Penalized** | `vectorSimilarityMeanStdPenalized.ts` | ✅ | Variance-penalized variant |
| **Variance Weighted** | `vectorSimilarityVarianceWeighted.ts` | ✅ | Variance-aware weighting |
| **Robust Similarity** | `vectorSimilarityRobust.ts` | ✅ | Outlier-resistant measure |
| **Tunable Similarity** | `vectorSimilarityTunable.ts` | ✅ | Configurable parameters |
| **Correlation-Based** | `vectorSimilarityCorrelation.ts` | ✅ | Correlation-like metric |

---

## 📊 IMPLEMENTATION SUMMARY

### By Category

```
Inner Product Based:     5/6 implemented (83%)
Minkowski Family:        3/11 implemented (27%)
Intersection:           4/6 implemented (67%)
Entropy:                5/5 implemented (100%)
Chi-Square:             0/5 implemented (0%)
Fidelity:               0/4 implemented (0%)
String Measures:        0/6 implemented (0%)
Custom/Advanced:        8/8 implemented (100%)
────────────────────────────────────
TOTAL:                  25/52 (48%)
```

### Core Coverage

| Category | Count | Coverage |
|----------|-------|----------|
| **Well Covered** | 8 | Custom/advanced measures |
| **Partially Covered** | 2 | Inner Product, Minkowski |
| **Not Covered** | 4 | Intersection, Entropy, χ², Fidelity |
| **Out of Scope** | 1 | String measures (different domain) |

---

## 🎯 RECOMMENDED ADDITIONS

### High Priority (Most Useful)
1. **Hellinger Distance** - Fidelity family, metric properties
2. **Sørensen Distance** - Ecology, popular in practice
3. **Chebyshev (L∞)** - Complete Minkowski family
4. **KL Divergence** - Information theory, ML applications
5. **Chi-Square Distance** - Common in statistics

### Medium Priority (Useful)
6. **Canberra Distance** - Image retrieval applications
7. **Wave Hedges Distance** - Histogram comparison
8. **Bhattacharyya Coefficient** - Distribution comparison
9. **Gower Distance** - Mixed data types
10. **Spearman Distance** - Rank-based correlation

### Lower Priority (Specialized)
11. String distance measures (Hamming, Levenshtein, Jaro, LCS)
12. Entropy-based measures (Topsøe, K-Divergence)
13. Mahalanobis Distance - Requires covariance matrix

---

## 📁 FILE ORGANIZATION

```
src/vector-similarity/similarity/
├── classic.ts                          ✅ Core measures
├── jaccard.ts                          ✅ Jaccard variants
├── heuristics.ts                       ✅ Advanced weighted measures
├── vectorSimilarityMetricLike.ts       ✅ Custom metric-like
├── vectorSimilarityMeanStdPower.ts     ✅ Mean/Std based
├── vectorSimilarityMeanStdPenalized.ts ✅ Variance penalized
├── vectorSimilarityVarianceWeighted.ts ✅ Variance weighted
├── vectorSimilarityRobust.ts           ✅ Robust measures
├── vectorSimilarityTunable.ts          ✅ Configurable
├── vectorSimilarityCorrelation.ts      ✅ Correlation-based
├── intersection.ts                     ✅ Intersection measures
├── entropy.ts                          ✅ Entropy-based measures
└── index.ts                             Exports all modules
```

---

## 🔄 EXPORTS FROM INDEX.TS

### Classic Measures
- `cosineSimilarity()`
- `euclideanDistance()`, `euclideanSimilarity()`
- `manhattanDistance()`, `manhattanSimilarity()`
- `jaccardSimilarity()`
- `pearsonCorrelation()`, `pearsonCorrelationSimilarity()`
- `dotProduct()`
- `distanceToSimilarity()`

### Jaccard Variants
- `jaccardSimilarityBinary()`
- `jaccardSimilarityWeighted()`
- `jaccardSimilarityRealValued()`

### Advanced/Custom
- `weightedMinkowskiSimilarity()` - Minkowski with weights
- `computeVectorSimilarityMetricLike()` - Metric-like similarity
- Plus 6+ other custom implementations

---

## 📝 NOTES

1. **Vector-Similarity Focus**: Project is specialized for numeric vector comparison, not PDFs/distributions or strings
2. **Custom Extensions**: Includes many non-standard measures optimized for specific use cases
3. **String Measures**: Implemented in separate modules (likely under `suffixTree` or similar)
4. **Weighted Variants**: Strong support via multiple custom implementations
5. **PDF Measures**: Would require probability density function representations

---

## 🚀 NEXT STEPS

To increase coverage:
1. Add missing Minkowski variants (L∞, Canberra, Soergel, Kulczynski, Gower)
2. Implement Fidelity family (Hellinger, Bhattacharyya, Matusita)
3. Add entropy-based measures (KL, Jeffreys, Topsøe)
4. Implement chi-square family
5. Consider Mahalanobis distance (with covariance option)

---

**Status Last Updated**: 2025-11-18  
**Literature Source**: arXiv:2408.07706v1 - "A Guide to Similarity Measures"
