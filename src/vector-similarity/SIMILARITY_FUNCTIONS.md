# Vector Similarity Functions — Library Reference

This document describes **every public function** exported from `@mikbin80/algorithmsts/vector-similarity`, with formulas **as implemented in source code** (not generic textbook variants).

- Implementation catalog: [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md)
- Analysis methodology: [vector-similarity-analysis.md](./vector-similarity-analysis.md)
- Naming / rename proposal: [NAMING_PROPOSAL.md](./NAMING_PROPOSAL.md)
- External survey reference: [A Guide to Similarity Measures](https://arxiv.org/abs/2408.07706) (arXiv:2408.07706v1)

## Conventions

### Input validation

All pairwise vector functions call `validateVectors(A, B)` unless noted:

- Both arguments must be finite numeric arrays of equal length
- Most require non-empty vectors; Jaccard and some correlation helpers allow empty (return `1`)
- Throws `TypeError` / `RangeError` on invalid input

### Distance → similarity conversion

Many similarities wrap a distance via `distanceToSimilarity(d)`:

```
sim = 1 / (1 + d)     when maxDistance is null (default)
sim = 1 - d / max     when maxDistance is provided
```

Used by: `euclideanSimilarity`, `manhattanSimilarity`, `lorentzianSimilarity`, `waveHedgesSimilarity`, entropy similarities, etc.

Chi-square and Itakura–Saito normalized similarities use the same `1 / (1 + d)` mapping directly.

### Signed inputs

| Module | Handling |
|--------|----------|
| Entropy | Normalizes `\|x\|` to a probability distribution internally |
| Chi-square, Itakura–Saito | Uses `\|P[i]\|`, `\|Q[i]\|` per coordinate |
| Jaccard weighted | Uses `\|a[i]\|`, `\|b[i]\|` as weights |
| Intersection family | Uses absolute values throughout |
| Classic Lp | Uses signed differences where applicable |

---

## 1. Classic measures (`similarity/classic.ts`)

### Cosine similarity

```
sim = (A·B) / (‖A‖ · ‖B‖)
```

Range: **[-1, 1]**. Returns `0` if either vector has zero norm.

### Normalized cosine similarity

```
sim = (cosine + 1) / 2
```

Range: **[0, 1]**.

### Euclidean distance

```
d = √(Σ (Aᵢ − Bᵢ)²)
```

### Squared Euclidean distance

```
d = Σ (Aᵢ − Bᵢ)²
```

### Manhattan (L₁) distance

```
d = Σ |Aᵢ − Bᵢ|
```

### Pearson correlation

```
r = Σ(Aᵢ − Ā)(Bᵢ − B̄) / √[Σ(Aᵢ − Ā)² · Σ(Bᵢ − B̄)²]
```

Returns `1` for constant identical vectors; `0` when either vector is constant and they differ.

### Pearson correlation similarity

```
sim = (r + 1) / 2
```

Range: **[0, 1]**.

### Dot product

```
A·B = Σ Aᵢ Bᵢ
```

### Angular distance / similarity

```
d = arccos(clamp(cosine, -1, 1)) / π
sim = 1 − d
```

Range: distance **[0, 1]**, similarity **[0, 1]**.

### Dice coefficient / distance

```
sim = 2·Σ min(|Aᵢ|, |Bᵢ|) / (Σ|Aᵢ| + Σ|Bᵢ|)
d = 1 − sim
```

### Chebyshev (L∞) distance / similarity

```
d = maxᵢ |Aᵢ − Bᵢ|
sim = 1 / (1 + d)
```

### Gower distance / similarity

Requires a `ranges` array (one positive range per dimension):

```
d = (1/n) Σ |Aᵢ − Bᵢ| / ranges[i]
sim = 1 / (1 + d)
```

The analysis script passes `ranges = [1, 1, …, 1]`.

### Soergel distance / similarity

```
d = Σ|Aᵢ − Bᵢ| / Σ max(|Aᵢ|, |Bᵢ|)
sim = 1 / (1 + d)
```

### Kulczynski distance / similarity

```
d = Σ|Aᵢ − Bᵢ| / Σ min(|Aᵢ|, |Bᵢ|)
sim = 1 / (1 + d)
```

### Canberra distance (classic)

```
d = Σ |Aᵢ − Bᵢ| / (|Aᵢ| + |Bᵢ|)    (skip terms where both are 0)
```

### Lorentzian distance / similarity

> **Note:** This implementation uses the **log-compression form**, not the paper-specific Lorentzian metric from arXiv:2408.07706 §2.3e.

```
d = Σ log(1 + |Aᵢ − Bᵢ|)
sim = 1 / (1 + d)
```

### Euclidean / Manhattan similarity

Wrap respective distance with `distanceToSimilarity`.

---

## 2. Jaccard family (`similarity/jaccard.ts`)

### Binary Jaccard

Non-zero → 1, zero → 0 per coordinate:

```
sim = |A ∩ B| / |A ∪ B|
```

Union size 0 → returns `1`.

### Weighted / real-valued Jaccard

```
sim = Σ min(|Aᵢ|, |Bᵢ|) / Σ max(|Aᵢ|, |Bᵢ|)
```

`jaccardSimilarityRealValued` is an alias of `jaccardSimilarityWeighted`.

---

## 3. Heuristics (`similarity/heuristics.ts`)

### Weighted Minkowski similarity

```
d = (Σ wᵢ |Aᵢ − Bᵢ|ᵖ)^(1/p)     defaults: p=2, wᵢ=1
sim = 1 / (1 + d)
```

Options: `MinkowskiOptions { p?, weights? }`.

### Canberra similarity (heuristic form)

```
d = (1/n) Σ |Aᵢ − Bᵢ| / (|Aᵢ| + |Bᵢ|)    (skip zero/zero terms)
sim = 1 / (1 + d)
```

Differs from `canberraDistance` in classic.ts (raw sum vs normalized + similarity mapping).

### Bray–Curtis similarity

```
sim = 1 − Σ|Aᵢ − Bᵢ| / Σ(|Aᵢ| + |Bᵢ|)
```

Equivalent to `1 − sorensenDistance`.

### Harmonic mean similarity

Per-coordinate `sᵢ = 1 − |Aᵢ−Bᵢ| / (|Aᵢ|+|Bᵢ|+ε)`, then harmonic mean of positive `sᵢ`.

### Kendall correlation similarity

Tau-a: `(C − D) / (C + D)` over coordinate pairs, mapped to `[0,1]` via `(1 + τ) / 2`.

Complexity: **O(n²)**.

### Geometric mean similarity

Geometric mean of per-coordinate similarities `1 − |Aᵢ−Bᵢ|/(|Aᵢ|+|Bᵢ|+ε)`.

### Ratio-based similarity

```
sim = (2 Σ min(|Aᵢ|,|Bᵢ|)) / (Σ|Aᵢ| + Σ|Bᵢ|)
```

---

## 4. Intersection family (`similarity/intersection.ts`)

All functions use absolute values.

### Intersection similarity

```
sim = 2 Σ min(|Aᵢ|, |Bᵢ|) / (Σ|Aᵢ| + Σ|Bᵢ|)
```

Sørensen–Dice normalization. `intersectionSimilarityNormalized` is an alias.

### Intersection distance

```
d = 1 − intersectionSimilarity
```

### Wave Hedges distance / similarity

```
d = Σ |Aᵢ − Bᵢ| / max(|Aᵢ|, |Bᵢ|)    (skip when max = 0)
sim = 1 / (1 + d)
```

### Sørensen (Bray–Curtis) distance / similarity

```
d = Σ|Aᵢ − Bᵢ| / (Σ|Aᵢ| + Σ|Bᵢ|)
sim = 1 − d
```

### Motyka similarity / distance

```
sim = Σ min(|Aᵢ|,|Bᵢ|) / Σ max(|Aᵢ|,|Bᵢ|)
d = 1 − sim
```

---

## 5. Entropy family (`similarity/entropy.ts`)

Inputs are converted to distributions: `Pᵢ = |xᵢ| / Σ|xⱼ|` (uniform if sum is 0).

### Kullback–Leibler divergence

```
D_KL(P‖Q) = Σ Pᵢ ln(Pᵢ / Qᵢ)     (nats)
```

Returns `Infinity` when `Qᵢ = 0` and `Pᵢ > 0`.

### Cross entropy

```
CE(P,Q) = −Σ Pᵢ ln(Qᵢ)
```

### Jeffreys divergence

```
D_J = D_KL(P‖Q) + D_KL(Q‖P)
```

### K-divergence

```
D_K(P,Q) = D_KL(P ‖ M),   M = (P + Q) / 2
```

### Topsøe divergence

```
D_T(P,Q) = D_KL(P‖M) + D_KL(Q‖M),   M = (P + Q) / 2
```

### Similarity wrappers

`kullbackLeiblerSimilarity`, `jeffreysSimilarity`, `kSimilarity`, `topsoeSimilarity`, `crossEntropySimilarity` — each applies `distanceToSimilarity` to the corresponding divergence.

---

## 6. Chi-square family

### Raw distances (`similarity/chi-square.ts`)

Uses `p = |P[i]|`, `q = |Q[i]|`:

| Function | Formula |
|----------|---------|
| Pearson χ² | `Σ (p−q)² / q` |
| Neyman χ² | `Σ (p−q)² / p` |
| Additive symmetric | `Σ (p−q)²(p+q) / (pq)` |
| Squared χ² | `Σ (p−q)² / (p+q)` |

Returns `Infinity` on invalid zero denominators (except both-zero skip).

### Normalized similarities (`similarity/normalized-chi-square.ts`)

```
sim = 1 / (1 + distance)
```

For each chi-square distance variant above.

---

## 7. Fidelity family

### Fidelity (Bhattacharyya coefficient) — `similarity/fidelity.ts`

```
sim = Σ √(Pᵢ Qᵢ)     (uses |Pᵢ|, |Qᵢ|)
```

### Hellinger distance / similarity

```
d = √[0.5 Σ (√Pᵢ − √Qᵢ)²]
sim = 1 / (1 + d)
```

### Matusita distance

```
d = √[Σ (√Pᵢ − √Qᵢ)²]
```

### Squared chord distance

```
d = Σ (√Pᵢ − √Qᵢ)²
```

### Normalized similarities — `similarity/normalized-fidelity.ts`

```
normalizedMatusitaSimilarity      = 1 / (1 + matusitaDistance)
normalizedSquaredChordSimilarity  = 1 / (1 + squaredChordDistance)
```

---

## 8. Kernel similarities (`similarity/nonLinear.ts`)

### Polynomial kernel (normalized)

```
K(a,b) = (a·b + c)^d
sim = K(a,b) / √(K(a,a) · K(b,b))
```

Defaults: `d=2`, `c=1`. Range: **[-1, 1]** (typically [0,1] for non-negative vectors).

### RBF kernel

```
sim = exp(−γ · ‖a − b‖²)
```

Default: `γ=0.01`. Range: **(0, 1]**.

---

## 9. Itakura–Saito (`similarity/itakura-saito.ts`)

### Distance

```
d = Σ [ (p/q) − ln(p/q) − 1 ]     p=|P[i]|, q=|Q[i]|
```

Skip `p=q=0`; return `Infinity` if exactly one of `p,q` is zero.

### Similarity

```
sim = 1 / (1 + d)
```

---

## 10. Correlation measures

### Correlation distance — `correlationDistance.ts`

```
d = 1 − pearsonCorrelation(A, B)     range [0, 2]
```

### Distance correlation — `distanceCorrelation.ts`

Measures dependence via double-centered distance matrices (dCor). Range **[0, 1]**; `1` when both vectors are constant and equal, `0` when one is constant.

Algorithm: Euclidean distance matrices → double center → ratio of distance covariances.

---

## 11. Custom robust metrics

These share a per-coordinate agreement vector **C** in most variants.

### Per-coordinate agreement (max-denominator form)

Used by `vectorSimilarityCorrelation`, penalized, tunable, variance-weighted:

```
C[i] = 1 − |Aᵢ − Bᵢ| / max(|Aᵢ|, |Bᵢ|)     if not both zero
C[i] = 1                                    if Aᵢ = Bᵢ = 0
```

Penalized/tunable clamp `C[i]` to [0, 1].

### Per-coordinate agreement (arithmetic-mean form)

Used by `vectorSimilarityMeanStdPowerArithmeticMean`:

```
C[i] = 1 − |Aᵢ − Bᵢ| / (0.5 · (|Aᵢ| + |Bᵢ|))
```

### vectorSimilarityCorrelation

1. Build C as above (max-denominator)
2. `mean = avg(C)`, `std = sampleStd(C)`
3. `exponent = 1 + std · stdWeight`  (default `stdWeight=1`)
4. `raw = 1 + sign(mean) · |mean|^exponent^sign(mean)`
5. `sim = raw / 2`

`vectorSimilarityCorrelationNoStd` sets `stdWeight=0`.

Empty vectors → `1`.

### vectorSimilarityMeanStdPowerArithmeticMean

Same exponent scheme as above but C uses arithmetic-mean denominator.

`vectorSimilarityMeanStdPowerArithmeticMeanNoStd` sets `stdWeight=0`.

### computeVectorSimilarityMeanStdPenalized

C uses half-max denominator: `1 − |A−B| / (2·max(|A|,|B|))`, clamped to [0,1].

```
sim = mean(C) · (1 − α · std(C)^stdPower)
```

Defaults: `α=0.75`, `stdPower=1`.

### computeVectorSimilarityTunable

Same C as penalized (half-max), then:

```
sim = mean(C)^α     default α=1.5
```

### computeVectorSimilarityRobust

Per coordinate:

```
rᵢ = min(|Aᵢ−Bᵢ| / max(|Aᵢ|,|Bᵢ|), clipMax)     default clipMax=4
dᵢ = rᵢ / (rᵢ + k)                               default k=1
D = avg(dᵢ)
sim = 1 − D / (clipMax / (clipMax + k))
```

### computeVectorSimilarityMetricLike

```
dᵢ = min(|Aᵢ−Bᵢ| / max(|Aᵢ|,|Bᵢ|), 1)
D = avg(dᵢ)
sim = (exp(−λD) − exp(−λ)) / (1 − exp(−λ))     default λ=3
```

### computeVectorSimilarityVarianceWeighted

Same C as tunable (half-max), then:

```
sNorm = std(C) / √(n / (4(n−1)))
sim = mean(C) · (1 − β · sNorm^γ)
```

Defaults: `β=0.85`, `γ=2`.

---

## 12. Distance to measure (`similarity/distanceToMeasure.ts`)

Not a pairwise vector similarity. Computes empirical **Distance-to-Measure** for a query point:

```
DTM(x) = √[(1/k) Σ_{i=1..k} ‖x − pᵢ‖²]
```

where `pᵢ` are the k nearest neighbors of `x` in `dataset` (KD-tree).

---

## Quick selection guide

| Need | Consider |
|------|----------|
| Fast baseline, embeddings | `normalizedCosineSimilarity` |
| Scale-invariant trend | `pearsonCorrelationSimilarity` |
| Outlier-heavy data | `canberraSimilarity`, `computeVectorSimilarityRobust`, `vectorSimilarityCorrelation` |
| Probability / histogram data | `hellingerSimilarity`, `kullbackLeiblerSimilarity` |
| Binary presence/absence | `jaccardSimilarityBinary` |
| Sparse overlap | `intersectionSimilarity`, custom robust metrics |
| Nonlinear geometry | `polynomialKernelSimilarity` |
| Hot loop, minimal overhead | `euclideanSimilarity`, `vectorSimilarityMeanStdPowerArithmeticMeanNoStd` |

See the [vector similarity dashboard](../../visualization/vector-similarity/index.html) for empirical comparisons on fixed test vectors.

---

## Appendix: export name index

Every public function export and its primary section:

| Export | Section |
|--------|---------|
| `cosineSimilarity` | §1 Cosine similarity |
| `normalizedCosineSimilarity` | §1 Normalized cosine similarity |
| `euclideanDistance` | §1 Euclidean distance |
| `squaredEuclideanDistance` | §1 Squared Euclidean distance |
| `manhattanDistance` | §1 Manhattan distance |
| `pearsonCorrelation` | §1 Pearson correlation |
| `pearsonCorrelationSimilarity` | §1 Pearson correlation similarity |
| `dotProduct` | §1 Dot product |
| `distanceToSimilarity` | Conventions |
| `euclideanSimilarity` | §1 Euclidean similarity |
| `manhattanSimilarity` | §1 Manhattan similarity |
| `angularDistance` | §1 Angular distance |
| `angularSimilarity` | §1 Angular similarity |
| `diceCoefficient` | §1 Dice coefficient |
| `diceDistance` | §1 Dice distance |
| `chebyshevDistance` | §1 Chebyshev distance |
| `chebyshevSimilarity` | §1 Chebyshev similarity |
| `gowerDistance` | §1 Gower distance |
| `gowerSimilarity` | §1 Gower similarity |
| `soergelDistance` | §1 Soergel distance |
| `soergelSimilarity` | §1 Soergel similarity |
| `kulczynskiDistance` | §1 Kulczynski distance |
| `kulczynskiSimilarity` | §1 Kulczynski similarity |
| `canberraDistance` | §1 Canberra distance (classic) |
| `lorentzianDistance` | §1 Lorentzian distance |
| `lorentzianSimilarity` | §1 Lorentzian similarity |
| `jaccardSimilarityBinary` | §2 Binary Jaccard |
| `jaccardSimilarityWeighted` | §2 Weighted Jaccard |
| `jaccardSimilarityRealValued` | §2 Weighted Jaccard (alias) |
| `weightedMinkowskiSimilarity` | §3 Weighted Minkowski |
| `canberraSimilarity` | §3 Canberra similarity (heuristic) |
| `brayCurtisSimilarity` | §3 Bray–Curtis |
| `harmonicMeanSimilarity` | §3 Harmonic mean |
| `kendallCorrelationSimilarity` | §3 Kendall correlation |
| `geometricMeanSimilarity` | §3 Geometric mean |
| `ratioBasedSimilarity` | §3 Ratio-based |
| `intersectionSimilarity` | §4 Intersection similarity |
| `intersectionSimilarityNormalized` | §4 Intersection similarity (alias) |
| `intersectionDistance` | §4 Intersection distance |
| `waveHedgesDistance` | §4 Wave Hedges distance |
| `waveHedgesSimilarity` | §4 Wave Hedges similarity |
| `sorensenDistance` | §4 Sørensen distance |
| `sorensenSimilarity` | §4 Sørensen similarity |
| `motykaSimilarity` | §4 Motyka similarity |
| `motykaDistance` | §4 Motyka distance |
| `kullbackLeiblerDivergence` | §5 KL divergence |
| `crossEntropy` | §5 Cross entropy |
| `jeffreysDivergence` | §5 Jeffreys divergence |
| `kDivergence` | §5 K-divergence |
| `topsoeDivergence` | §5 Topsøe divergence |
| `kullbackLeiblerSimilarity` | §5 Similarity wrappers |
| `jeffreysSimilarity` | §5 Similarity wrappers |
| `kSimilarity` | §5 Similarity wrappers |
| `topsoeSimilarity` | §5 Similarity wrappers |
| `crossEntropySimilarity` | §5 Similarity wrappers |
| `pearsonChiSquareDistance` | §6 Pearson χ² |
| `neymanChiSquareDistance` | §6 Neyman χ² |
| `additiveSymmetricChiSquareDistance` | §6 Additive symmetric |
| `squaredChiSquareDistance` | §6 Squared χ² |
| `normalizedPearsonChiSquareSimilarity` | §6 Normalized similarities |
| `normalizedNeymanChiSquareSimilarity` | §6 Normalized similarities |
| `normalizedAdditiveSymmetricChiSquareSimilarity` | §6 Normalized similarities |
| `normalizedSquaredChiSquareSimilarity` | §6 Normalized similarities |
| `fidelitySimilarity` | §7 Fidelity |
| `hellingerDistance` | §7 Hellinger distance |
| `hellingerSimilarity` | §7 Hellinger similarity |
| `matusitaDistance` | §7 Matusita distance |
| `squaredChordDistance` | §7 Squared chord distance |
| `normalizedMatusitaSimilarity` | §7 Normalized fidelity |
| `normalizedSquaredChordSimilarity` | §7 Normalized fidelity |
| `polynomialKernelSimilarity` | §8 Polynomial kernel |
| `rbfKernelSimilarity` | §8 RBF kernel |
| `itakuraSaitoDistance` | §9 Itakura–Saito distance |
| `vectorSimilarityItakuraSaito` | §9 Itakura–Saito similarity |
| `correlationDistance` | §10 Correlation distance |
| `distanceCorrelation` | §10 Distance correlation |
| `vectorSimilarityCorrelation` | §11 Custom robust |
| `vectorSimilarityCorrelationNoStd` | §11 Custom robust |
| `vectorSimilarityMeanStdPowerArithmeticMean` | §11 Custom robust |
| `vectorSimilarityMeanStdPowerArithmeticMeanNoStd` | §11 Custom robust |
| `computeVectorSimilarityMeanStdPenalized` | §11 Custom robust |
| `computeVectorSimilarityMetricLike` | §11 Custom robust |
| `computeVectorSimilarityRobust` | §11 Custom robust |
| `computeVectorSimilarityTunable` | §11 Custom robust |
| `computeVectorSimilarityVarianceWeighted` | §11 Custom robust |
| `distanceToMeasure` | §12 Distance to measure |
