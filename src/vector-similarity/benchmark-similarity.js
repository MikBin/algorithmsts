// Benchmark all similarity functions in this directory on high-dimensional data.
// Run with: `node similarity/benchmark-similarity.js`
//
// This script is self-contained, uses deterministic synthetic data,
// measures only the similarity computation (not data generation),
// and writes machine-readable JSON results to disk.
//
// It discovers similarity functions from known modules in this directory.
// To extend, add new files & exports to `SIMILARITY_MODULES` or improve
// dynamic discovery logic accordingly.

/* ============================
 * Configuration
 * ============================
 */

/**
 * Dimensions to test (high-dimensional scenarios).
 * Adjust as needed.
 * @type {number[]}
 */
const DIMENSIONS = [64, 128, 256, 512, 1024, 2048];

/**
 * Dataset sizes (number of vector pairs).
 * For very large sizes, the script can downsample via MAX_OPS_PER_CONFIG.
 * @type {number[]}
 */
const DATASET_SIZES = [1e3, 1e4, 1e5];

/**
 * Number of benchmark runs per function/dimension/dataset configuration.
 * Results are aggregated per configuration.
 * @type {number}
 */
const RUNS_PER_CONFIG = 3;

/**
 * Maximum number of similarity computations per configuration.
 * If dimension * datasetSize would exceed this, we keep datasetSize
 * but only evaluate a subset of pairs up to this limit.
 * This keeps runtime manageable for very heavy functions.
 * Set to Infinity to always run full.
 * @type {number}
 */
const MAX_OPS_PER_CONFIG = 5e6;

/**
 * Fixed seed for deterministic pseudo-random number generation.
 * Change to any integer for a different deterministic sequence.
 * @type {number}
 */
const BASE_RANDOM_SEED = 123456789;

/**
 * Output path for the JSON results (relative to project root).
 * @type {string}
 */
const OUTPUT_PATH = require("path").join(__dirname, "benchmark-similarity-results.json");

/**
 * Whether to log progress to stdout.
 * @type {boolean}
 */
const VERBOSE = true;

/* ============================
 * Similarity function discovery
 * ============================
 *
 * We explicitly list modules in this directory and collect all
 * exported similarity functions. This works for both:
 *  - ES module-style exports, and
 *  - CommonJS module.exports
 *
 * Each entry:
 *   path: relative to this file
 *   importNames: array of named exports to pick if available
 *   cjsFallback: property names to look up from CommonJS require()
 */

const SIMILARITY_MODULES = [
  {
    path: "./similarity-functions.js",
    importNames: ["cosineSimilarity", "euclideanSimilarity", "manhattanSimilarity", "jaccardSimilarity", "pearsonCorrelation"],
    cjsFallback: ["cosineSimilarity", "euclideanSimilarity", "manhattanSimilarity", "jaccardSimilarity", "pearsonCorrelation"],
  },
  {
    path: "./jaccard-variants.js",
    importNames: ["jaccardSimilarityBinary", "jaccardSimilarityWeighted", "jaccardSimilarityRealValued"],
    cjsFallback: ["jaccardSimilarityBinary", "jaccardSimilarityWeighted", "jaccardSimilarityRealValued"],
  },
  {
    path: "./vectorSimilarityMeanStdPower.js",
    importNames: ["computeVectorSimilarityMeanStdPower"],
    cjsFallback: ["computeVectorSimilarityMeanStdPower"],
  },
  {
    path: "./vectorSimilarityMeanStdPenalized.js",
    importNames: ["computeVectorSimilarityMeanStdPenalized"],
    cjsFallback: ["computeVectorSimilarityMeanStdPenalized"],
  },
  {
    path: "./vectorSimilarityMetricLike.js",
    importNames: ["computeVectorSimilarityMetricLike"],
    cjsFallback: ["computeVectorSimilarityMetricLike"],
  },
  {
    path: "./vectorSimilarityRobust.js",
    importNames: ["computeVectorSimilarityRobust"],
    cjsFallback: ["computeVectorSimilarityRobust"],
  },
  {
    path: "./vectorSimilarityVarianceWeighted.js",
    importNames: ["computeVectorSimilarityVarianceWeighted"],
    cjsFallback: ["computeVectorSimilarityVarianceWeighted"],
  },
  {
    path: "./similarity_heuristics.js",
    importNames: ["weightedMinkowskiSimilarity", "canberraSimilarity", "chebyshevSimilarity", "brayCurtisSimilarity", "harmonicMeanSimilarity", "geometricMeanSimilarity", "ratioBasedSimilarity"],
    cjsFallback: ["weightedMinkowskiSimilarity", "canberraSimilarity", "chebyshevSimilarity", "brayCurtisSimilarity", "harmonicMeanSimilarity", "geometricMeanSimilarity", "ratioBasedSimilarity"],
  },
  // Deprecated wrapper (still benchmarked for compatibility / regression):
  {
    path: "./vectorSimilarity.js",
    importNames: ["computeVectorSimilarity", "computeVectorSimilarityPenalized"],
    cjsFallback: ["computeVectorSimilarity", "computeVectorSimilarityPenalized"],
  },
];

/* ============================
 * Utility: Environment & Imports
 * ============================
 */

let fs;
let pathModule;
let isNodeLike = false;

try {
  // eslint-disable-next-line no-undef
  if (typeof process !== "undefined" && process.versions && process.versions.node) {
    isNodeLike = true;
  }
} catch {
  isNodeLike = false;
}

if (isNodeLike) {
  // Lazy require so the file still parses in non-Node environments.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  fs = require("fs");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  pathModule = require("path");
}

/**
 * Dynamically load all similarity functions from known modules.
 * Supports both ESM-style named exports (when transpiled/loaded as such)
 * and CommonJS `module.exports`.
 *
 * Returns a map: { functionName: fn }
 */
function loadSimilarityFunctions() {
  const functions = {};

  for (const mod of SIMILARITY_MODULES) {
    let loaded = null;

    // Try require() for Node (CJS interop); fall back gracefully if missing.
    if (isNodeLike) {
      const resolvedPath = pathModule.resolve(__dirname, mod.path.replace(/^\.\//, ""));
      if (!fs.existsSync(resolvedPath)) {
        if (VERBOSE) {
          console.warn(
            `[benchmark] Skipping module ${mod.path} (resolved: ${resolvedPath}) because it does not exist.`
          );
        }
        continue;
      }

      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const cjsModule = require(resolvedPath);

        // Collect by explicit names first.
        if (mod.importNames && Array.isArray(mod.importNames)) {
          for (const name of mod.importNames) {
            if (typeof cjsModule[name] === "function") {
              functions[name] = cjsModule[name];
            }
          }
        }

        // Also try cjsFallback names (often same as importNames).
        if (mod.cjsFallback && Array.isArray(mod.cjsFallback)) {
          for (const name of mod.cjsFallback) {
            if (typeof cjsModule[name] === "function") {
              functions[name] = cjsModule[name];
            }
          }
        }

        loaded = cjsModule;
      } catch (err) {
        if (VERBOSE) {
          console.error(
            `[benchmark] Failed to require module ${mod.path}: ${err && err.message}`
          );
        }
      }
    }

    // If not in Node or CJS loading failed, we could attempt dynamic import.
    // Omitted for now as primary target is Node.js CLI usage.
    if (!loaded && VERBOSE && !isNodeLike) {
      console.warn(
        `[benchmark] Non-Node environment detected; dynamic loading for ${mod.path} is not implemented.`
      );
    }
  }

  if (VERBOSE) {
    const names = Object.keys(functions).sort();
    console.log(
      `[benchmark] Loaded similarity functions: ${names.length ? names.join(", ") : "(none)"}`
    );
  }

  return functions;
}

/* ============================
 * Deterministic PRNG & Data Generation
 * ============================
 */

/**
 * Xorshift32 pseudo-random generator (deterministic)
 * State must be non-zero 32-bit unsigned int.
 */
function createXorShift32(seed) {
  let state = seed >>> 0 || 1;
  return function next() {
    // xorshift32
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    // Force uint32, then to [0,1)
    return (state >>> 0) / 0xffffffff;
  };
}

/**
 * Generate one deterministic vector of given dimension using provided PRNG.
 * Values are in a reasonable numeric range for similarity functions.
 *
 * @param {number} dim
 * @param {() => number} rand
 * @returns {number[]}
 */
function generateVector(dim, rand) {
  const v = new Array(dim);
  for (let i = 0; i < dim; i++) {
    // Generate in [-1e3, 1e3] to exercise relative differences
    const r = rand();
    v[i] = (r * 2 - 1) * 1e3;
  }
  return v;
}

/**
 * Generate an array of vector pairs (A, B) for benchmarking.
 * Deterministic given base seed, function name, dimension, dataset size, run index.
 *
 * @param {string} functionName
 * @param {number} dim
 * @param {number} pairCount
 * @param {number} runIndex
 * @returns {{A: number[], B: number[]}[]}
 */
function generateVectorPairs(functionName, dim, pairCount, runIndex) {
  // Derive a stable seed from base seed + function/dim/size/run.
  let hash = BASE_RANDOM_SEED >>> 0;
  hash = hashMixString(hash, functionName);
  hash = hashMixNumber(hash, dim);
  hash = hashMixNumber(hash, pairCount);
  hash = hashMixNumber(hash, runIndex);
  const rand = createXorShift32(hash || 1);

  const pairs = new Array(pairCount);
  for (let i = 0; i < pairCount; i++) {
    const A = generateVector(dim, rand);
    const B = generateVector(dim, rand);
    pairs[i] = { A, B };
  }
  return pairs;
}

/**
 * Simple 32-bit mixing with string input.
 */
function hashMixString(seed, str) {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x45d9f3b);
    h ^= h >>> 13;
  }
  return h >>> 0;
}

/**
 * Simple 32-bit mixing with numeric input.
 */
function hashMixNumber(seed, num) {
  let h = seed >>> 0;
  h ^= num | 0;
  h = Math.imul(h, 0x45d9f3b);
  h ^= h >>> 13;
  return h >>> 0;
}

/* ============================
 * High-resolution Timing
 * ============================
 */

/**
 * Get high-resolution time in nanoseconds as BigInt.
 */
function nowNs() {
  if (isNodeLike && typeof process.hrtime === "function" && process.hrtime.bigint) {
    return process.hrtime.bigint();
  }
  // Fallback (less precise, but keeps API consistent)
  const ms = (typeof performance !== "undefined" && performance.now)
    ? performance.now()
    : Date.now();
  return BigInt(Math.floor(ms * 1e6));
}

/**
 * Compute elapsed nanoseconds between two BigInt timestamps.
 */
function elapsedNs(startNs, endNs) {
  return endNs - startNs;
}

/* ============================
 * Benchmark Core
 * ============================
 */

/**
 * Validate input vectors for a similarity function.
 * Lightweight sanity check to catch gross shape/type errors.
 *
 * @param {string} functionName
 * @param {Function} fn
 * @param {number[]} A
 * @param {number[]} B
 */
function validateInputs(functionName, fn, A, B) {
  if (!Array.isArray(A) || !Array.isArray(B)) {
    throw new Error(
      `[${functionName}] Expected array inputs; got ${typeof A} and ${typeof B}`
    );
  }
  if (A.length !== B.length) {
    throw new Error(
      `[${functionName}] Input length mismatch: ${A.length} vs ${B.length}`
    );
  }
  if (A.length === 0) {
    throw new Error(
      `[${functionName}] Zero-length vectors are not supported by this benchmark`
    );
  }
  if (typeof fn !== "function") {
    throw new Error(
      `[${functionName}] Not a function during validation`
    );
  }
}

/**
 * Run benchmark for a single similarity function and configuration.
 *
 * @param {string} functionName
 * @param {Function} fn
 * @param {number} dim
 * @param {number} datasetSize
 * @param {number} runIndex
 * @returns {{
 *   ok: boolean,
 *   error?: string,
 *   totalTimeNs?: bigint,
 *   ops?: number
 * }}
 */
function runSingleBenchmark(functionName, fn, dim, datasetSize, runIndex) {
  const totalOpsPlanned = datasetSize;
  const ops =
    MAX_OPS_PER_CONFIG === Infinity
      ? totalOpsPlanned
      : Math.min(totalOpsPlanned, MAX_OPS_PER_CONFIG);

  // Pre-generate data (not included in timing)
  const pairs = generateVectorPairs(functionName, dim, ops, runIndex);

  // Validation on first pair to ensure basic compatibility.
  try {
    const { A, B } = pairs[0];
    validateInputs(functionName, fn, A, B);
    // Also probe-call once outside the timed section to fail fast.
    const probe = fn(A, B);
    if (typeof probe !== "number" || !Number.isFinite(probe)) {
      throw new Error(
        `[${functionName}] Probe call did not return a finite number`
      );
    }
  } catch (err) {
    return {
      ok: false,
      error: String(err && err.message ? err.message : err),
    };
  }

  // Timed execution loop
  const startNs = nowNs();
  let last = 0;
  try {
    for (let i = 0; i < ops; i++) {
      const { A, B } = pairs[i];
      const v = fn(A, B);
      // Minimal use of the result to avoid dead-code elimination in some engines.
      last += v;
    }
  } catch (err) {
    return {
      ok: false,
      error: `[${functionName}] Runtime error during benchmark: ${
        String(err && err.message ? err.message : err)
      }`,
    };
  }
  const endNs = nowNs();
  const totalTimeNs = elapsedNs(startNs, endNs);

  // Use last so JS engine cannot trivially eliminate loop.
  if (!Number.isFinite(last)) {
    return {
      ok: false,
      error: `[${functionName}] Non-finite accumulated result; potential numerical issue.`,
    };
  }

  return {
    ok: true,
    totalTimeNs,
    ops,
  };
}

/**
 * Run the full benchmark suite for all loaded similarity functions.
 *
 * @returns {Promise<object[]>} results array
 */
async function runBenchmarks() {
  const similarityFunctions = loadSimilarityFunctions();
  const functionNames = Object.keys(similarityFunctions).sort();

  if (functionNames.length === 0) {
    if (VERBOSE) {
      console.error("[benchmark] No similarity functions found; aborting.");
    }
    return [];
  }

  const results = [];

  for (const functionName of functionNames) {
    const fn = similarityFunctions[functionName];

    for (const dim of DIMENSIONS) {
      for (const datasetSize of DATASET_SIZES) {
        let aggregateTimeNs = BigInt(0);
        let aggregateOps = 0;
        let runsOk = 0;
        /** @type {string[]} */
        const errors = [];

        for (let runIndex = 0; runIndex < RUNS_PER_CONFIG; runIndex++) {
          const r = runSingleBenchmark(
            functionName,
            fn,
            dim,
            datasetSize,
            runIndex
          );

          if (!r.ok) {
            errors.push(r.error || "Unknown error");
            if (VERBOSE) {
              console.error(
                `[benchmark] Error for ${functionName}, dim=${dim}, size=${datasetSize}, run=${runIndex}: ${r.error}`
              );
            }
            // Do not stop other runs or configurations.
            continue;
          }

          runsOk += 1;
          aggregateTimeNs += r.totalTimeNs;
          aggregateOps += r.ops;
        }

        if (runsOk === 0) {
          // Entire configuration failed; record as error entry.
          results.push({
            functionName,
            dimensionality: dim,
            datasetSize,
            runs: RUNS_PER_CONFIG,
            successfulRuns: 0,
            totalOps: 0,
            totalTimeNs: null,
            avgTimePerOpNs: null,
            throughputOpsPerSec: null,
            errors,
          });
        } else {
          const avgTimeNs = aggregateTimeNs / BigInt(runsOk);
          const totalOps = aggregateOps; // across all successful runs
          const avgTimePerOpNs =
            totalOps > 0
              ? Number(aggregateTimeNs / BigInt(totalOps))
              : null;

          const totalTimeSec =
            Number(aggregateTimeNs) / 1e9; // may lose precision for huge values
          const throughputOpsPerSec =
            totalTimeSec > 0 && totalOps > 0
              ? totalOps / totalTimeSec
              : null;

          results.push({
            functionName,
            dimensionality: dim,
            datasetSize,
            runs: RUNS_PER_CONFIG,
            successfulRuns: runsOk,
            totalOps,
            totalTimeNs: aggregateTimeNs.toString(),
            avgTimePerOpNs,
            throughputOpsPerSec,
            errors: errors.length ? errors : null,
          });

          if (VERBOSE) {
            console.log(
              `[benchmark] ${functionName} dim=${dim} size=${datasetSize} ` +
              `runsOk=${runsOk}/${RUNS_PER_CONFIG} ` +
              `ops=${totalOps} ` +
              `avgTimePerOpNs=${avgTimePerOpNs} ` +
              `throughput=${throughputOpsPerSec ? throughputOpsPerSec.toFixed(2) : "n/a"} ops/s`
            );
          }
        }
      }
    }
  }

  return results;
}

/* ============================
 * Entry point
 * ============================
 */

async function main() {
  if (!isNodeLike) {
    console.error(
      "[benchmark] This script is intended to be run under Node.js."
    );
    return;
  }

  const results = await runBenchmarks();

  try {
    const json = JSON.stringify(
      {
        meta: {
          generatedAt: new Date().toISOString(),
          dimensions: DIMENSIONS,
          datasetSizes: DATASET_SIZES,
          runsPerConfig: RUNS_PER_CONFIG,
          maxOpsPerConfig: MAX_OPS_PER_CONFIG,
          baseRandomSeed: BASE_RANDOM_SEED,
          nodeVersion: process.version,
        },
        results,
      },
      null,
      2
    );

    fs.writeFileSync(OUTPUT_PATH, json, "utf8");

    if (VERBOSE) {
      console.log(`[benchmark] Results written to ${OUTPUT_PATH}`);
    }
  } catch (err) {
    console.error(
      `[benchmark] Failed to write results to ${OUTPUT_PATH}: ${
        String(err && err.message ? err.message : err)
      }`
    );
  }
}

// Run if executed directly via Node
if (isNodeLike && require.main === module) {
  // eslint-disable-next-line no-void
  void main();
}

// Export for potential programmatic usage.
module.exports = {
  runBenchmarks,
};