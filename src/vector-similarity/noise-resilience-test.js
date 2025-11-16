// Noise Resilience Test for Similarity Functions in ./similarity
// Run with:
//   node similarity/noise-resilience-test.js
//
// This script:
// - Automatically discovers similarity functions from this directory.
// - Generates deterministic synthetic vectors.
// - Applies multiple noise models at multiple levels.
// - Measures how each similarity function responds to noise.
// - Computes summary statistics and rank-stability metrics.
// - Writes results to: similarity/noise-resilience-results.json
//
// Implementation: CommonJS (Node.js), no external deps.

/* ============================
 * Configuration
 * ============================
 */

const FS = require("fs");
const PATH = require("path");

/** Deterministic seed for all randomness. */
const SEED = 1337;

/** Dimensions to test. */
const DIMENSIONS = [64, 128, 256, 512, 1024, 2048];

/** Number of base vectors per dimension. */
const BASE_VECTOR_COUNT = 100;

/**
 * Number of candidate vectors used for rank stability:
 * For each base vector, we build a candidate set:
 *   - the true match (itself)
 *   - (RANK_STABILITY_CANDIDATES - 1) other random base vectors.
 */
const RANK_STABILITY_CANDIDATES = 10;

/** Noise model parameters. */
const GAUSSIAN_SIGMAS = [0.01, 0.05, 0.1, 0.2, 0.5];
const UNIFORM_AMPLITUDES = [0.01, 0.05, 0.1, 0.2, 0.5];
const SPARSE_FRACTIONS = [0.01, 0.05, 0.1];
const SPARSE_PERTURBATION_SCALE = 0.5; // magnitude scale for sparse noise
const SIGN_FLIP_FRACTIONS = [0.01, 0.05]; // optional exploratory noise model

/** Output JSON path. */
const OUTPUT_PATH = PATH.join(__dirname, "noise-resilience-results.json");

/** Log progress to stdout. */
const VERBOSE = true;

/** Directory to scan (this script lives inside it). */
const SIMILARITY_DIR = __dirname;

/** Explicitly included modules for testing (bypasses auto-discovery). */
const EXPLICIT_MODULES = [
  {
    path: "./jaccard-variants.js",
    importNames: ["jaccardSimilarityBinary", "jaccardSimilarityWeighted", "jaccardSimilarityRealValued"],
    cjsFallback: ["jaccardSimilarityBinary", "jaccardSimilarityWeighted", "jaccardSimilarityRealValued"],
  },
];

/** Filenames to ignore when auto-loading modules. */
const EXCLUDE_FILES = new Set([
  "benchmark-similarity.js",
  "noise-resilience-test.js",
  "index.js", // if present and not specifically designed as similarity-only index
]);

/* ============================
 * Deterministic PRNG
 * ============================
 *
 * We use a simple xorshift32-based generator and derive sub-seeds
 * deterministically so results are fully reproducible.
 */

function createXorShift32(seed) {
  let state = seed >>> 0 || 1;
  return function next() {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 0xffffffff;
  };
}

function hashMixString(seed, str) {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x45d9f3b);
    h ^= h >>> 13;
  }
  return h >>> 0;
}

function hashMixNumber(seed, num) {
  let h = seed >>> 0;
  h ^= (num | 0) >>> 0;
  h = Math.imul(h, 0x45d9f3b);
  h ^= h >>> 13;
  return h >>> 0;
}

/**
 * Create a deterministic sub-PRNG derived from the base seed and labels.
 */
function createLabeledPRNG(baseSeed, labels) {
  let s = baseSeed >>> 0;
  for (const label of labels) {
    if (typeof label === "number") {
      s = hashMixNumber(s, label);
    } else if (typeof label === "string") {
      s = hashMixString(s, label);
    } else {
      s = hashMixString(s, String(label));
    }
  }
  if (s === 0) s = 1;
  return createXorShift32(s);
}

/* ============================
 * Vector Generation
 * ============================
 */

/**
 * Generate a random vector of length dim with entries in [-1, 1].
 */
function generateBaseVector(dim, rng) {
  const v = new Array(dim);
  for (let i = 0; i < dim; i++) {
    v[i] = rng() * 2 - 1;
  }
  return v;
}

/**
 * Generate BASE_VECTOR_COUNT base vectors for a given dimension.
 * Deterministic per (SEED, dim).
 */
function generateBaseVectorsForDim(dim) {
  const rng = createLabeledPRNG(SEED, ["baseVectors", dim]);
  const vectors = new Array(BASE_VECTOR_COUNT);
  for (let i = 0; i < BASE_VECTOR_COUNT; i++) {
    vectors[i] = generateBaseVector(dim, rng);
  }
  return vectors;
}

/* ============================
 * Noise Models
 * ============================
 */

function applyGaussianNoise(vec, sigma, rng) {
  const dim = vec.length;
  const out = new Array(dim);
  // Box-Muller transform for Gaussian(0,1)
  for (let i = 0; i < dim; i++) {
    // Generate Gaussian by two uniforms
    const u1 = Math.max(rng(), 1e-12);
    const u2 = rng();
    const mag = Math.sqrt(-2.0 * Math.log(u1));
    const z = mag * Math.cos(2 * Math.PI * u2);
    out[i] = vec[i] + z * sigma;
  }
  return out;
}

function applyUniformNoise(vec, amplitude, rng) {
  const dim = vec.length;
  const out = new Array(dim);
  for (let i = 0; i < dim; i++) {
    const noise = (rng() * 2 - 1) * amplitude;
    out[i] = vec[i] + noise;
  }
  return out;
}

function applySparseNoise(vec, fraction, scale, rng) {
  const dim = vec.length;
  const out = vec.slice();
  const count = Math.max(1, Math.floor(dim * fraction));
  for (let k = 0; k < count; k++) {
    const idx = Math.floor(rng() * dim);
    const delta = (rng() * 2 - 1) * scale;
    out[idx] += delta;
  }
  return out;
}

function applySignFlipNoise(vec, fraction, rng) {
  const dim = vec.length;
  const out = vec.slice();
  const count = Math.max(1, Math.floor(dim * fraction));
  for (let k = 0; k < count; k++) {
    const idx = Math.floor(rng() * dim);
    out[idx] = -out[idx];
  }
  return out;
}

/* ============================
 * Statistics Helpers
 * ============================
 */

function computeStats(values) {
  const n = values.length;
  if (!n) {
    return {
      mean: null,
      std: null,
      median: null,
      min: null,
      max: null,
    };
  }

  let sum = 0;
  let min = values[0];
  let max = values[0];

  for (let i = 0; i < n; i++) {
    const v = values[i];
    if (v < min) min = v;
    if (v > max) max = v;
    sum += v;
  }

  const mean = sum / n;

  let varSum = 0;
  for (let i = 0; i < n; i++) {
    const diff = values[i] - mean;
    varSum += diff * diff;
  }
  const std = n > 1 ? Math.sqrt(varSum / (n - 1)) : 0;

  const sorted = values.slice().sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const median =
    n % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];

  return { mean, std, median, min, max };
}

/* ============================
 * Similarity Function Loader
 * ============================
 */

function isLikelySimilarityExportName(name) {
  // Heuristic: include all function exports; we will validate by calling.
  // Could filter by "similarity" substring etc., but keep general.
  return typeof name === "string" && name.length > 0;
}

/**
 * Discover and load all similarity functions from the similarity directory.
 *
 * Rules:
 * - Include all `.js` files except excluded ones.
 * - For each file:
 *   - Accept default export if it's a function.
 *   - Accept every named export that is a function.
 * - Each function is registered with:
 *   {
 *     name: stable name,
 *     file: filename,
 *     fn: function
 *   }
 */
function loadSimilarityFunctions() {
  const entries = [];

  // First, load explicitly included modules
  for (const mod of EXPLICIT_MODULES) {
    const resolvedPath = PATH.resolve(__dirname, mod.path.replace(/^\.\//, ""));
    if (!FS.existsSync(resolvedPath)) {
      if (VERBOSE) {
        console.warn(
          `[noise] Skipping explicit module ${mod.path} (resolved: ${resolvedPath}) because it does not exist.`
        );
      }
      continue;
    }

    try {
      const cjsModule = require(resolvedPath);

      // Collect by explicit names first.
      if (mod.importNames && Array.isArray(mod.importNames)) {
        for (const name of mod.importNames) {
          if (typeof cjsModule[name] === "function") {
            entries.push({
              name,
              file: mod.path,
              fn: cjsModule[name],
            });
          }
        }
      }

      // Also try cjsFallback names (often same as importNames).
      if (mod.cjsFallback && Array.isArray(mod.cjsFallback)) {
        for (const name of mod.cjsFallback) {
          if (typeof cjsModule[name] === "function") {
            entries.push({
              name,
              file: mod.path,
              fn: cjsModule[name],
            });
          }
        }
      }
    } catch (err) {
      if (VERBOSE) {
        console.error(
          `[noise] Failed to require explicit module ${mod.path}: ${err && err.message}`
        );
      }
    }
  }

  // Then, auto-discover other modules
  let files;
  try {
    files = FS.readdirSync(SIMILARITY_DIR);
  } catch (err) {
    console.error(
      `[noise] Failed to read directory ${SIMILARITY_DIR}: ${err.message || err}`
    );
    return entries; // Return what we have so far
  }

  for (const file of files) {
    if (!file.endsWith(".js")) continue;
    if (EXCLUDE_FILES.has(file)) continue;

    const fullPath = PATH.join(SIMILARITY_DIR, file);

    let mod;
    try {
      mod = require(fullPath);
    } catch (err) {
      console.warn(
        `[noise] Skipping ${file}: failed to require - ${err.message || err}`
      );
      continue;
    }

    const candidates = [];

    // Default export (CommonJS style: module.exports = fn)
    if (typeof mod === "function") {
      candidates.push({
        rawName: mod.name || "default",
        fn: mod,
      });
    }

    // Named exports: keys on module object
    if (mod && typeof mod === "object") {
      for (const key of Object.keys(mod)) {
        const val = mod[key];
        if (typeof val === "function" && isLikelySimilarityExportName(key)) {
          candidates.push({
            rawName: key,
            fn: val,
          });
        }
      }
    }

    if (!candidates.length) {
      if (VERBOSE) {
        console.warn(
          `[noise] No function exports discovered in ${file}; skipping.`
        );
      }
      continue;
    }

    for (const c of candidates) {
      const stableName = deriveStableFunctionName(c.rawName, c.fn, file);
      entries.push({
        name: stableName,
        file,
        fn: c.fn,
      });
    }
  }

  // Deduplicate by (name, file) to avoid duplicates through CJS/ESM interop
  const unique = [];
  const seen = new Set();
  for (const e of entries) {
    const key = `${e.file}::${e.name}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(e);
    }
  }

  // Sort deterministically by name then file
  unique.sort((a, b) => {
    if (a.name === b.name) {
      return a.file.localeCompare(b.file);
    }
    return a.name.localeCompare(b.name);
  });

  if (VERBOSE) {
    console.log(
      `[noise] Loaded similarity functions: ${
        unique.length
          ? unique.map((e) => `${e.name} (${e.file})`).join(", ")
          : "(none found)"}`
    );
  }

  return unique;
}

/**
 * Derive a stable, human-readable function name.
 */
function deriveStableFunctionName(rawName, fn, file) {
  if (rawName && rawName !== "default") {
    return String(rawName);
  }
  if (fn && typeof fn.name === "string" && fn.name.length > 0) {
    return fn.name;
  }
  const base = PATH.basename(file, ".js");
  return `fn_${base}`;
}

/* ============================
 * Rank Stability
 * ============================
 */

/**
 * Compute rank stability metrics.
 *
 * For each base vector v:
 * - Construct candidate set: [v, some other base vectors].
 * - Compute similarities to candidates (clean).
 * - Add noise to v => v_noisy.
 * - Compute similarities from v_noisy to same candidates.
 * - Measure:
 *   - Whether the true match remains top-1 (top1Preservation).
 *   - Whether the true match remains within top-3 (top3Preservation).
 *
 * Returns an object with { top1Preservation, top3Preservation } in [0,1].
 */
function computeRankStability(fn, baseVectors, noiseModel, noiseLevel, dim, rng) {
  const n = baseVectors.length;
  if (n === 0) {
    return {
      top1Preservation: null,
      top3Preservation: null,
    };
  }

  let top1Count = 0;
  let top3Count = 0;
  let trials = 0;

  for (let i = 0; i < n; i++) {
    const v = baseVectors[i];

    // Select candidate indices: always include i, plus random others.
    const candidateIndices = [i];
    while (candidateIndices.length < Math.min(RANK_STABILITY_CANDIDATES, n)) {
      const idx = Math.floor(rng() * n);
      if (!candidateIndices.includes(idx)) {
        candidateIndices.push(idx);
      }
    }

    // Clean similarities
    const cleanScores = [];
    for (const idx of candidateIndices) {
      const c = baseVectors[idx];
      let s;
      try {
        s = fn(v, c);
      } catch {
        return {
          top1Preservation: null,
          top3Preservation: null,
        };
      }
      if (!Number.isFinite(s)) {
        return {
          top1Preservation: null,
          top3Preservation: null,
        };
      }
      cleanScores.push(s);
    }

    // Apply noise to v
    const vNoisy = applyNoiseModel(v, noiseModel, noiseLevel, dim, rng);
    if (!vNoisy) {
      continue;
    }

    const noisyScores = [];
    for (const idx of candidateIndices) {
      const c = baseVectors[idx];
      let s;
      try {
        s = fn(vNoisy, c);
      } catch {
        return {
          top1Preservation: null,
          top3Preservation: null,
        };
      }
      if (!Number.isFinite(s)) {
        return {
          top1Preservation: null,
          top3Preservation: null,
        };
      }
      noisyScores.push(s);
    }

    // Ranking: higher similarity is better.
    const cleanIdxSorted = candidateIndices
      .map((idx, k) => ({ idx, score: cleanScores[k] }))
      .sort((a, b) => b.score - a.score)
      .map((e) => e.idx);

    const noisyIdxSorted = candidateIndices
      .map((idx, k) => ({ idx, score: noisyScores[k] }))
      .sort((a, b) => b.score - a.score)
      .map((e) => e.idx);

    const trueIdx = i;
    const cleanTop1 = cleanIdxSorted[0];
    if (cleanTop1 !== trueIdx) {
      // Even clean ranking doesn't put true vector at top; skip this trial.
      continue;
    }

    trials += 1;

    if (noisyIdxSorted[0] === trueIdx) {
      top1Count += 1;
    }

    if (noisyIdxSorted.slice(0, 3).includes(trueIdx)) {
      top3Count += 1;
    }
  }

  if (trials === 0) {
    return {
      top1Preservation: null,
      top3Preservation: null,
    };
  }

  return {
    top1Preservation: top1Count / trials,
    top3Preservation: top3Count / trials,
  };
}

/**
 * Apply a specific noise model/level to a vector.
 */
function applyNoiseModel(vec, noiseModel, noiseLevel, dim, rng) {
  switch (noiseModel) {
    case "gaussian":
      return applyGaussianNoise(vec, noiseLevel, rng);
    case "uniform":
      return applyUniformNoise(vec, noiseLevel, rng);
    case "sparse":
      return applySparseNoise(vec, noiseLevel, SPARSE_PERTURBATION_SCALE, rng);
    case "signflip":
      return applySignFlipNoise(vec, noiseLevel, rng);
    default:
      return null;
  }
}

/* ============================
 * Core Noise Resilience Runner
 * ============================
 */

async function runNoiseResilienceTests() {
  const functions = loadSimilarityFunctions();
  if (!functions.length) {
    console.error("[noise] No similarity functions discovered. Exiting.");
    return {
      meta: buildMeta(),
      functions: [],
    };
  }

  // Pre-generate base vectors per dimension (shared across functions).
  const baseVectorsByDim = {};
  for (const dim of DIMENSIONS) {
    baseVectorsByDim[dim] = generateBaseVectorsForDim(dim);
  }

  const functionResults = [];

  for (const fnEntry of functions) {
    const { name: fnName, file: fnFile, fn } = fnEntry;
    if (VERBOSE) {
      console.log(`[noise] Testing function: ${fnName} (${fnFile})`);
    }

    const results = [];
    const errors = [];

    for (const dim of DIMENSIONS) {
      const baseVectors = baseVectorsByDim[dim];

      // Baseline similarities: sim(v, v)
      const baselineSims = [];
      let baselineValid = true;
      for (let i = 0; i < baseVectors.length; i++) {
        const v = baseVectors[i];
        let s;
        try {
          s = fn(v, v);
        } catch (err) {
          baselineValid = false;
          errors.push({
            dimension: dim,
            noiseModel: "baseline",
            noiseLevel: 0,
            message: String(err && err.message ? err.message : err),
          });
          break;
        }
        if (!Number.isFinite(s)) {
          baselineValid = false;
          errors.push({
            dimension: dim,
            noiseModel: "baseline",
            noiseLevel: 0,
            message: "Non-finite baseline similarity for (v, v)",
          });
          break;
        }
        baselineSims.push(s);
      }

      if (!baselineValid || !baselineSims.length) {
        // Skip all noise configs for this dimension for this function.
        continue;
      }

      const baselineStats = computeStats(baselineSims);
      const baselineMean = baselineStats.mean;

      // Define all noise configurations in deterministic order.
      const noiseConfigs = [];

      for (const sigma of GAUSSIAN_SIGMAS) {
        noiseConfigs.push({
          model: "gaussian",
          level: sigma,
        });
      }
      for (const amp of UNIFORM_AMPLITUDES) {
        noiseConfigs.push({
          model: "uniform",
          level: amp,
        });
      }
      for (const frac of SPARSE_FRACTIONS) {
        noiseConfigs.push({
          model: "sparse",
          level: frac,
        });
      }
      for (const frac of SIGN_FLIP_FRACTIONS) {
        noiseConfigs.push({
          model: "signflip",
          level: frac,
        });
      }

      for (const cfg of noiseConfigs) {
        const { model, level } = cfg;

        if (VERBOSE) {
          console.log(
            `[noise] Function=${fnName} dim=${dim} model=${model} level=${level}`
          );
        }

        const rng = createLabeledPRNG(SEED, [
          "noise",
          fnName,
          fnFile,
          dim,
          model,
          level,
        ]);

        const sims = [];
        let anyError = null;

        for (let i = 0; i < baseVectors.length; i++) {
          const v = baseVectors[i];
          const noisy = applyNoiseModel(v, model, level, dim, rng);
          if (!noisy) {
            anyError = `Unknown noise model: ${model}`;
            break;
          }

          let s;
          try {
            s = fn(v, noisy);
          } catch (err) {
            anyError = String(err && err.message ? err.message : err);
            break;
          }
          if (!Number.isFinite(s)) {
            anyError = "Non-finite similarity for noisy pair";
            break;
          }

          sims.push(s);
        }

        if (anyError || !sims.length) {
          errors.push({
            dimension: dim,
            noiseModel: model,
            noiseLevel: level,
            message: anyError || "No valid samples",
          });
          continue;
        }

        const stats = computeStats(sims);

        // meanDropFromClean = baselineMean - meanSimilarity
        const meanDropFromClean =
          baselineMean != null && stats.mean != null
            ? baselineMean - stats.mean
            : null;

        // Rank stability
        const rankRng = createLabeledPRNG(SEED, [
          "rank",
          fnName,
          fnFile,
          dim,
          model,
          level,
        ]);
        const rank = computeRankStability(
          fn,
          baseVectors,
          model,
          level,
          dim,
          rankRng
        );

        results.push({
          dimension: dim,
          noiseModel: model,
          noiseLevel: level,
          meanSimilarity: safeNumber(stats.mean),
          stdSimilarity: safeNumber(stats.std),
          medianSimilarity: safeNumber(stats.median),
          minSimilarity: safeNumber(stats.min),
          maxSimilarity: safeNumber(stats.max),
          meanDropFromClean: safeNumber(meanDropFromClean),
          top1Preservation: safeNumber(rank.top1Preservation),
          top3Preservation: safeNumber(rank.top3Preservation),
          samples: sims.length,
        });
      }
    }

    // Sort results deterministically: by dim, then model, then level
    results.sort((a, b) => {
      if (a.dimension !== b.dimension) {
        return a.dimension - b.dimension;
      }
      if (a.noiseModel !== b.noiseModel) {
        return a.noiseModel.localeCompare(b.noiseModel);
      }
      return a.noiseLevel - b.noiseLevel;
    });

    functionResults.push({
      name: fnName,
      file: fnFile,
      results,
      errors: errors.length ? errors : [],
    });
  }

  // Sort functions deterministically by name
  functionResults.sort((a, b) => a.name.localeCompare(b.name));

  return {
    meta: buildMeta(),
    functions: functionResults,
  };
}

/* ============================
 * Helpers
 * ============================
 */

function buildMeta() {
  return {
    generatedAt: new Date().toISOString(),
    seed: SEED,
    dimensions: DIMENSIONS.slice(),
    noiseModels: {
      gaussian: { sigmas: GAUSSIAN_SIGMAS.slice() },
      uniform: { amplitudes: UNIFORM_AMPLITUDES.slice() },
      sparse: {
        fractions: SPARSE_FRACTIONS.slice(),
        perturbationScale: SPARSE_PERTURBATION_SCALE,
      },
      signflip: {
        fractions: SIGN_FLIP_FRACTIONS.slice(),
      },
    },
    baseVectorCount: BASE_VECTOR_COUNT,
    rankStabilityCandidates: RANK_STABILITY_CANDIDATES,
  };
}

function safeNumber(value) {
  if (value == null) return null;
  if (!Number.isFinite(value)) return null;
  return value;
}

/* ============================
 * Entry Point
 * ============================
 */

async function main() {
  const report = await runNoiseResilienceTests();

  try {
    const json = JSON.stringify(report, null, 2);
    FS.writeFileSync(OUTPUT_PATH, json, "utf8");
    console.log(`[noise] Results written to ${OUTPUT_PATH}`);
  } catch (err) {
    console.error(
      `[noise] Failed to write results to ${OUTPUT_PATH}: ${err.message || err}`
    );
  }
}

if (require.main === module) {
  // eslint-disable-next-line no-void
  void main();
}

module.exports = {
  runNoiseResilienceTests,
};