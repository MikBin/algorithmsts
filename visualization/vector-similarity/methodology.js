/**
 * Methodology descriptions for each comparison section shown in the dashboard.
 * Content mirrors the procedures in tools/vector-similarity/vector-similarity-analysis.ts.
 */
export const methodologySections = [
  {
    id: 'calculator',
    title: 'Interactive Similarity Calculator',
    procedure:
      'You supply two comma-separated numeric vectors of equal length. On each calculation, every exported two-argument function from the vector-similarity library is invoked on the pair. Results are rounded to four decimal places; functions that throw (e.g. length mismatch handled client-side, non-finite values, domain violations) surface as error messages in the table.',
    rationale:
      'Provides ad-hoc exploration beyond the fixed test vectors baked into the offline analysis. It uses the same live TypeScript implementations that ship in the library, so scores here match what application code would compute.',
    interpretation:
      'Similarity metrics (names containing "Similarity" or "Correlation") typically range in [0, 1] or [-1, 1]; higher usually means more alike. Distance and divergence metrics are lower when vectors match. Row highlighting applies a simple heuristic: high similarity scores appear green, low ones red.'
  },
  {
    id: 'vector-visualization',
    title: 'Vector Visualization',
    procedure:
      'Plots the five reference vectors from the Comparison Demo (A–E) as line charts: x-axis = component index, y-axis = value. Vector A = [1, 2, 3, 4, 5]; B is a small proportional perturbation; C injects a single large outlier at index 2; D is the reverse of A; E is identical to A.',
    rationale:
      'Visual grounding for the demo matrix below. Seeing shape differences (smooth trend vs. spike vs. reversal vs. identity) makes it easier to interpret why certain metrics diverge on the same pair of vectors.',
    interpretation:
      'Use this chart to connect geometric intuition with tabular scores. For example, C\'s spike should depress magnitude-sensitive metrics, while D\'s reversal should drive correlation-based metrics toward zero.'
  },
  {
    id: 'benchmark',
    title: 'Performance Benchmark',
    procedure:
      'Two random vectors of length 1,000 are generated once (uniform in [0, 1)). Each similarity function is timed over 10 consecutive calls using high-resolution process timers; the reported value is the average elapsed time in milliseconds per call. Functions that throw during benchmarking are omitted.',
    rationale:
      'Computational cost matters when comparing millions of pairs. This micro-benchmark isolates pure function overhead on dense, moderate-length vectors—representative of batch analytics workloads without I/O or allocation noise from repeated vector generation inside the timed loop.',
    interpretation:
      'Bars are sorted fastest-to-slowest. Entropy-, chi-square-, and custom robust metrics tend to be slower; simple Lp norms and intersections are faster. Use this to shortlist candidates before evaluating accuracy on your domain data.'
  },
  {
    id: 'outlier-resiliency',
    title: 'Outlier Resiliency',
    procedure:
      'Two fixed scenarios, each evaluated across all 43 similarity functions:\n' +
      '• Short Vectors with a Single Outlier — vecA = [1, 34000, -0.0001], vecB = [1.1, 37800, -0.00015]. The first and third components agree closely; the second differs by ~11% but dominates magnitude.\n' +
      '• Longer Vectors with Multiple Outliers — vecC = [1…10], vecD matches on most entries but replaces index 4 with 50,000 and index 7 with -20,000.',
    rationale:
      'Real-world feature vectors often contain bad sensors, typos, or heavy-tailed dimensions. These hand-crafted cases expose whether a metric follows the bulk of the vector or is hijacked by a few extreme coordinates—critical when choosing metrics for robust search or anomaly-tolerant matching.',
    interpretation:
      'Correlation-style metrics may stay high when the overall trend is preserved despite outliers. Lp distances and magnitude-weighted measures often collapse toward zero similarity. Compare both test cases: a function that handles a single dominant outlier may still fail when multiple outliers appear.'
  },
  {
    id: 'stress-tests',
    title: 'Stress Tests',
    procedure:
      'Four controlled perturbations applied to fixed base vectors:\n' +
      '• Noise Resilience — baseVec = [1…10]; noisyVec adds uniform noise in ±0.05 per component.\n' +
      '• Scale Invariance — scaleVec = baseVec × 100 (identical direction, different magnitude).\n' +
      '• Sparse Vectors — sparseVecA = [1,0,0,0,5,0,0,8,0,10], sparseVecB = [0,0,3,0,5,0,7,0,9,0] (mostly zeros, partial overlap).\n' +
      '• High Dynamic Range — seven components spanning 1e-9 to 1e9, with vecB = 1.1 × vecA component-wise.',
    rationale:
      'Each scenario isolates a common data pathology: measurement noise, unit changes, sparsity, and mixed-scale features. Together they reveal whether a metric measures shape, magnitude, overlap, or log-scale agreement.',
    interpretation:
      'Scale-invariant metrics (cosine, Pearson correlation, angular) should score scale and noise cases similarly to the base vector. Canberra and Lorentzian often behave well under scale change. Sparse overlap favors set-based Jaccard/intersection measures. High dynamic range punishes metrics that treat absolute differences equally across orders of magnitude.'
  },
  {
    id: 'similarity-compare',
    title: 'Similarity Comparison (Binary vs Continuous)',
    procedure:
      'The same 43 functions are run on two datatype-specific pairs:\n' +
      '• Binary — vecA = [1, 1, 0, 1], vecB = [1, 0, 1, 1] (presence/absence style, three of four positions overlap).\n' +
      '• Continuous — vecC = [0.5, 0.8, 0.2, 0.9], vecD = [0.6, 0.7, 0.1, 1.0] (small real-valued differences).',
    rationale:
      'Many functions were designed for either binary/set data or dense continuous features. Side-by-side comparison shows which implementations generalize across representations and which require non-negative inputs or treat zeros specially.',
    interpretation:
      'Functions marked "N/A (Invalid Input)" on continuous data often require non-negative probability-like inputs (entropy, KL, chi-square). Jaccard binary should reflect partial overlap (~0.5–0.67 range). Continuous scores should remain high because the vectors are close in every dimension.'
  },
  {
    id: 'comparison-demo',
    title: 'Comparison Demo Matrix',
    procedure:
      'Vector A is compared against B, C, D, and E using every similarity function. Each row is one function; columns are A_vs_B, A_vs_C, A_vs_D, A_vs_E. Scores are rounded to four decimal places.',
    rationale:
      'Summarizes behavioral profiles on canonical relationships in one view: near-duplicate (B), single outlier (C), reversed trend (D), and identity (E). This matrix is the quantitative counterpart to the Vector Visualization chart.',
    interpretation:
      'A_vs_E should be perfect (or distance zero) for most metrics. Large drops in A_vs_C highlight outlier sensitivity; A_vs_D near zero on correlation metrics confirms sign-awareness; high A_vs_B scores indicate tolerance to small proportional drift.'
  },
  {
    id: 'nonlinear-analysis',
    title: 'Nonlinear Analysis',
    procedure:
      'Vector pairs are generated by VectorGenerationService across three experiment families:\n' +
      '1. Functional & geometric diversity — 29 generator types (polynomial, trig, conic, 3-D curves) × sizes {10, 50, 100} × Gaussian noise levels {0.1, 0.5}.\n' +
      '2. Noise robustness — sin, circle, and sphere at size 200 with Gaussian, uniform, or impulsive noise (levels 0.1, 0.5; impulsive probability 0.1).\n' +
      '3. Anomaly resilience — same three types at size 200 with low Gaussian noise (0.05) plus injected peaks, discontinuities, or high-frequency oscillation (intensity 5, probability 0.02).\n' +
      'For each case, ten representative metrics are scored and timed. Filters on this dashboard subset the detailed results table and bar charts.',
    rationale:
      'Real embeddings and time-series features rarely lie on straight lines. Nonlinear ground truth lets kernel and correlation-based measures compete on curves, spirals, and surfaces under realistic noise—closer to scientific and signal-processing use cases than random uniform vectors.',
    interpretation:
      'Compare polynomial/RBF kernel scores against cosine and Pearson on circular or helix generators. Watch impulsive-noise scenarios for robust custom metrics. The auto-generated Key Insights summarize the strongest patterns found in the full result set (e.g. best metric under impulsive noise).'
  }
];

export const generalMethodology = {
  title: 'Shared Methodology',
  items: [
    {
      label: 'Function catalog',
      text:
        'All offline comparisons evaluate the same 43 functions registered in vector-similarity-analysis.ts. The full export list (~86 functions) is in IMPLEMENTATION_STATUS.md.'
    },
    {
      label: 'Formula reference',
      text:
        'Exact formulas as implemented in code are in src/vector-similarity/SIMILARITY_FUNCTIONS.md. The export catalog and test/analysis coverage matrix is in IMPLEMENTATION_STATUS.md.'
    },
    {
      label: 'Score formatting',
      text:
        'Numeric outputs are stored and displayed rounded to four decimal places. Domain errors (e.g. negative inputs to entropy-based measures) appear as "N/A (Invalid Input)" rather than silent failures.'
    },
    {
      label: 'Reproducing results',
      text:
        'Run npm run analyze-similarity to regenerate tmp/vector-similarity-analysis.json and visualization/vector-similarity/similarity-data.js. Benchmark and stress-test noise use randomness, so those sections may vary slightly between runs; vector fixtures and nonlinear generator seeds are otherwise deterministic given the same RNG.'
    },
    {
      label: 'Reading distances vs similarities',
      text:
        'The library exports both similarity scores (higher = closer) and distance/divergence values (lower = closer). Tables list each function under its exported name—check the name suffix when comparing magnitudes across rows.'
    }
  ]
};
