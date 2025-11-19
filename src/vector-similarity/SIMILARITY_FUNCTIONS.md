# Similarity and Distance Measures Guide

**For the current implementation status of these functions, please see [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md).**

Reference: "A Guide to Similarity Measures" (arXiv:2408.07706v1)

## Classification of Similarity Measures

Measures are organized into the following families:

---

## 1. Inner Product Based Measures

### 1.1 Inner Product Distance and Similarity
- **Formula (Similarity)**: `sim_IP(P,Q) = ⟨P,Q⟩`
- **Formula (Distance)**: `d_IP(P,Q) = ||P-Q||`
- **Type**: Metric space measure
- **Use Case**: Measures number of matches/overlap for binary vectors

### 1.2 Cosine Similarity
- **Formula**: `sim_Cos(P,Q) = ⟨P,Q⟩ / (||P|| · ||Q||)`
- **Distance Form**: `d_Cos(P,Q) = 1 - sim_Cos(P,Q)`
- **Range**: [-1, 1] for similarity
- **Note**: Not a metric (violates triangle inequality)
- **Interpretation**: Cosine of angle between vectors

### 1.3 Angular Distance
- **Formula (Distance)**: `d_Ang(P,Q) = arccos(sim_Cos(P,Q)) / π`
- **Formula (Similarity)**: `sim_Ang(P,Q) = 1 - d_Ang(P,Q)`
- **Range**: [0, 1]
- **Type**: Formal metric
- **Note**: Computationally expensive (arccos)

### 1.4 Jaccard Coefficient (Jaccard Index/Tanimoto)
- **Formula (Similarity)**: `sim_Jac(P,Q) = ⟨P,Q⟩ / (||P||² + ||Q||² - ⟨P,Q⟩)`
- **Formula (Distance)**: `d_Jac(P,Q) = 1 - sim_Jac(P,Q) = ||P-Q||² / (||P||² + ||Q||² - ⟨P,Q⟩)`
- **Type**: Formal metric
- **Use Case**: Measure overlap between sample sets

### 1.5 Dice Coefficient (Sørensen Distance)
- **Formula (Similarity)**: `sim_Dice(P,Q) = 2⟨P,Q⟩ / (||P||² + ||Q||²)`
- **Formula (Distance)**: `d_Dice(P,Q) = 1 - sim_Dice(P,Q) = ||P-Q||² / (||P||² + ||Q||²)`
- **Note**: Not a metric (violates triangle inequality)
- **Use Case**: Diversity of sample sets

---

## 2. The Minkowski Distance Family

### 2.1 L₂ Distance - Euclidean Distance
- **Formula**: `d_L₂(P,Q) = √(∑ᵢ |Pᵢ - Qᵢ|²)`
- **Type**: Formal metric
- **Properties**: Most common distance for numerical attributes

### 2.2 Squared Euclidean Distance
- **Formula**: `d_L₂²(P,Q) = ∑ᵢ (Pᵢ - Qᵢ)²`
- **Note**: Omits square root for computational efficiency

### 2.3 L₁ Distance - Manhattan Distance
- **Formula**: `d_L₁(P,Q) = ∑ᵢ |Pᵢ - Qᵢ|`
- **Also Known As**: Boxcar, City Block, Rectilinear, Absolute Value distance
- **Type**: Formal metric
- **Note**: Not normalized; increases with dimensions

#### 2.3a Gower Distance
- **Formula**: `d_Gow(P,Q) = (1/d) ∑ᵢ |Pᵢ - Qᵢ| / |Rᵢ|`
- **Normalization**: Each difference normalized by range size
- **Use Case**: Mixed feature types

#### 2.3b Soergel Distance (Ruzicka Distance)
- **Formula**: `d_Soer(P,Q) = ∑ᵢ |Pᵢ - Qᵢ| / ∑ᵢ max(Pᵢ, Qᵢ)`
- **Note**: Identical to Jaccard for binary variables

#### 2.3c Kulczynski Distance
- **Formula**: `d_Kul(P,Q) = ∑ᵢ |Pᵢ - Qᵢ| / ∑ᵢ min(Pᵢ, Qᵢ)`

#### 2.3d Canberra Distance
- **Formula**: `d_Can(P,Q) = ∑ᵢ |Pᵢ - Qᵢ| / (|Pᵢ| + |Qᵢ|)`
- **Property**: Sensitive to small changes near zero
- **Variant**: Adkins form (divided by n-Z)

#### 2.3e Lorentzian Distance
- **Formula**: `√(∑ᵢ₌₁^(d-1) |Pᵢ - Qᵢ|² - |Pₐ - Qₐ|²)`
- **Note**: Not a formal metric (violates positive definiteness)

### 2.4 Lₚ Distance - Minkowski Distance
- **Formula**: `d_Lₚ(P,Q) = ᵖ√(∑ᵢ |Pᵢ - Qᵢ|ᵖ)`
- **Note**: Generalizes L₁ (p=1) and L₂ (p=2)

### 2.5 L∞ Distance - Chebyshev Distance
- **Formula**: `d_L∞(P,Q) = maxᵢ |Pᵢ - Qᵢ|`
- **Also Known As**: Lattice, Chessboard, Minmax distance
- **Note**: Lₚ when p → ∞

---

## 3. Intersection Similarity Measures and Distances

### 3.1 Intersection Similarity and Distance
- **Formula (Similarity)**: `sim_IS(P,Q) = ∑ᵢ min(Pᵢ, Qᵢ)`
- **Formula (Distance)**: `d_IS(P,Q) = 1 - sim_IS(P,Q) = (1/2)∑ᵢ |Pᵢ - Qᵢ|`
- **Origin**: Histogram Intersection method
- **Use Case**: Image histograms, color matching

### 3.2 Wave Hedges Distance
- **Formula 1**: `d_WH(P,Q) = ∑ᵢ (1 - min(Pᵢ,Qᵢ)/max(Pᵢ,Qᵢ))`
- **Formula 2**: `d_WH(P,Q) = ∑ᵢ |Pᵢ - Qᵢ| / max(Pᵢ, Qᵢ)`
- **Note**: Source history uncertain; still widely used

### 3.3 Sørensen Distance (Bray-Curtis, Czekanowski)
- **Formula (Similarity)**: `sim_Sor(P,Q) = 2∑ᵢ min(Pᵢ,Qᵢ) / ∑ᵢ(Pᵢ + Qᵢ)`
- **Formula (Distance)**: `d_Sor(P,Q) = 1 - sim_Sor(P,Q) = ∑ᵢ |Pᵢ - Qᵢ| / ∑ᵢ(Pᵢ + Qᵢ)`
- **Use Case**: Ecology, vegetation analysis

#### 3.3a Motyka Similarity
- **Formula (Similarity)**: `sim_Mot(P,Q) = ∑ᵢ min(Pᵢ,Qᵢ) / ∑ᵢ(Pᵢ + Qᵢ)`
- **Note**: Half of Sørensen distance

### 3.4 Kulczynski Similarity
- **Formula (Similarity)**: `sim_Kul(P,Q) = ∑ᵢ min(Pᵢ,Qᵢ) / ∑ᵢ |Pᵢ - Qᵢ|`
- **Formula (Distance)**: `d_Kul(P,Q) = 1 / sim_Kul(P,Q)`
- **Use Case**: Floristic similarity

### 3.5 Jaccard (Tanimoto) Index (PDF Form)
- **Formula (Distance)**: `d_Jac(P,Q) = ∑ᵢ(max(Pᵢ,Qᵢ) - min(Pᵢ,Qᵢ)) / ∑ᵢ max(Pᵢ,Qᵢ)`
- **Formula (Ruzicka Similarity)**: `sim_Ruz(P,Q) = 1 - d_Jac(P,Q) = ∑ᵢ min(Pᵢ,Qᵢ) / ∑ᵢ max(Pᵢ,Qᵢ)`

---

## 4. Entropy Family Measures

### Shannon Entropy (Foundation)
- **Formula**: `SE(P) = ∑ᵢ Pᵢ ln(Pᵢ)`
- **Purpose**: Measure diversity and uncertainty

### 4.1 Kullback-Leibler Divergence (Relative Entropy)
- **Formula**: `d_KL(P,Q) = ∑ᵢ Pᵢ ln(Pᵢ/Qᵢ)`
- **Note**: Not a metric (asymmetric, violates triangle inequality)
- **Use Case**: Information gain in machine learning

### 4.2 Cross Entropy (CE)
- **Formula**: `CE(P,Q) = -∑ᵢ Pᵢ ln(Qᵢ) = d_KL(P,Q) - SE(P)`
- **Use Case**: Loss function in neural networks and logistic regression

### 4.3 Jeffreys-Divergence (J-Divergence)
- **Formula**: `d_J(P,Q) = ∑ᵢ Pᵢ ln(Pᵢ/Qᵢ) + ∑ᵢ Qᵢ ln(Qᵢ/Pᵢ) = ∑ᵢ(Pᵢ - Qᵢ) ln(Pᵢ/Qᵢ)`
- **Property**: Symmetric version of KL divergence
- **Use Case**: Change detection, radar clutter analysis

### 4.4 K-Divergence
- **Purpose**: Based on Kullback-Leibler divergence (details in paper)

### 4.5 Topsøe Divergence
- **Purpose**: Entropy family measure (details in paper)

---

## 5. χ² (Chi-Square) Family Measures

### 5.1 Pearson χ² Distance
- **Formula**: `d_χ²(P,Q) = ∑ᵢ (Pᵢ - Qᵢ)² / Qᵢ`
- **Type**: Not a metric

### 5.2 Neyman χ² Distance
- **Formula**: `d_χ²(P,Q) = ∑ᵢ (Pᵢ - Qᵢ)² / Pᵢ`

### 5.3 Additive Symmetric χ² Distance
- **Purpose**: Symmetric variant of χ² measures

### 5.4 Spearman Distance
- **Use Case**: Rank correlation measures

### 5.5 Squared χ² Distance
- **Formula**: Based on squared χ² values

---

## 6. Fidelity Family (Squared-Chord Family)

### 6.1 Fidelity (Bhattacharyya Coefficient)
- **Formula**: `sim_Fid(P,Q) = ∑ᵢ √(Pᵢ · Qᵢ)`
- **Range**: [0, 1]
- **Use Case**: Pattern recognition, distribution comparison

### 6.2 Hellinger Distance
- **Formula**: `d_Hell(P,Q) = √(1 - ∑ᵢ √(Pᵢ · Qᵢ)) = √(2 · d_χ²_squared)`
- **Type**: Formal metric
- **Range**: [0, 1]

### 6.3 Matusita Distance
- **Formula**: Based on Fidelity family
- **Type**: Formal metric

### 6.4 Squared-Chord Distance
- **Formula**: `d_sc(P,Q) = ∑ᵢ (√Pᵢ - √Qᵢ)²`
- **Type**: Formal metric

---

## 7. String Similarity Measures

### 7.1 String Rearrangement Measures

#### 7.1a Hamming Distance
- **Definition**: Count of positions where corresponding symbols differ
- **Use Case**: Error detection, binary strings
- **Note**: Requires equal-length strings

#### 7.1b Levenshtein Distance
- **Definition**: Minimum edit distance (insertions, deletions, substitutions)
- **Variants**: Multiple cost models available

#### 7.1c Swap Distance
- **Definition**: Edit distance allowing character swaps
- **Related To**: Damerau-Levenshtein

#### 7.1d String Interchange/Parallel-Interchange
- **Definition**: Rearrangement distances with specific operation costs

### 7.2 String Similarity Measures (N-Grams, Jaro, LCS)

#### 7.2a Longest Common Subsequence (LCS)
- **Definition**: Length of longest subsequence common to both strings
- **Use Case**: Sequence comparison

#### 7.2b Jaro Similarity
- **Formula**: Based on matching characters and transpositions
- **Range**: [0, 1]
- **Use Case**: Spelling correction, record linkage

#### 7.2c N-Grams Similarity
- **Definition**: Similarity based on common n-character substrings
- **Use Case**: Text analysis, spell checking

---

## 8. Additional Measures Mentioned

### Mahalanobis Distance
- **Purpose**: Multivariate distance considering covariance
- **Use Case**: Anomaly detection, imbalanced data, one-class classification
- **Note**: Underutilized in practice despite effectiveness

### SED (Structural Euclidean Distance)
- **Purpose**: Distance for unordered structures

### Clark Distance
- **Purpose**: Alternative normalization scheme

---

## Summary Table

| Family | Measures | Count |
|--------|----------|-------|
| Inner Product | IP, Cosine, Angular, Jaccard, Dice | 5 |
| Minkowski | L₂, L₂², L₁, Lₚ, L∞, + 5 variants | 11 |
| Intersection | IS, Wave Hedges, Sørensen, Kulczynski, Jaccard | 5 |
| Entropy | KL, CE, J-Divergence, K-Divergence, Topsøe | 5 |
| χ² | Pearson, Neyman, Add. Sym., Spearman, Squared | 5 |
| Fidelity | Fidelity, Hellinger, Matusita, Squared-Chord | 4 |
| String Rearrangement | Hamming, Levenshtein, Swap, Interchange, LCS | 5 |
| String Similarity | Jaro, N-Grams | 2 |
| Other | Mahalanobis, SED, Clark | 3 |

**Total: 50+ measures and variants**
