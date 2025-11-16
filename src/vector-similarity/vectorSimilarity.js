/**
 * Deprecated compatibility wrapper for vector similarity functions.
 *
 * The concrete implementations have been moved into:
 *   - ./similarity/vectorSimilarityMeanStdPower.js
 *   - ./similarity/vectorSimilarityMeanStdPenalized.js
 *
 * This module re-exports the same APIs to avoid breaking existing imports.
 * New code should import directly from the files in the ./similarity directory.
 */

import { computeVectorSimilarityMeanStdPower } from "./vectorSimilarityMeanStdPower.js";
import { computeVectorSimilarityMeanStdPenalized } from "./vectorSimilarityMeanStdPenalized.js";

/**
 * @deprecated Use computeVectorSimilarityMeanStdPower from
 * "./similarity/vectorSimilarityMeanStdPower.js" instead.
 */
const computeVectorSimilarity = computeVectorSimilarityMeanStdPower;

/**
 * @deprecated Use computeVectorSimilarityMeanStdPenalized from
 * "./similarity/vectorSimilarityMeanStdPenalized.js" instead.
 */
const computeVectorSimilarityPenalized = computeVectorSimilarityMeanStdPenalized;

export {
  computeVectorSimilarity,
  computeVectorSimilarityPenalized,
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    computeVectorSimilarity,
    computeVectorSimilarityPenalized,
  };
}