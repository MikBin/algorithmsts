/**
 * Deprecated compatibility wrapper for vector similarity functions.
 *
 * The concrete implementations have been moved into:
 *   - ./similarity/vectorSimilarityMeanStdPower.ts
 *   - ./similarity/vectorSimilarityMeanStdPenalized.ts
 *
 * This module re-exports the same APIs to avoid breaking existing imports.
 * New code should import directly from the files in the ./similarity directory.
 */

import { computeVectorSimilarityMeanStdPower } from "./vectorSimilarityMeanStdPower";
import { computeVectorSimilarityMeanStdPenalized } from "./vectorSimilarityMeanStdPenalized";

/**
 * @deprecated Use computeVectorSimilarityMeanStdPower from
 * "./similarity/vectorSimilarityMeanStdPower.ts" instead.
 */
const computeVectorSimilarity = computeVectorSimilarityMeanStdPower;

/**
 * @deprecated Use computeVectorSimilarityMeanStdPenalized from
 * "./similarity/vectorSimilarityMeanStdPenalized.ts" instead.
 */
const computeVectorSimilarityPenalized = computeVectorSimilarityMeanStdPenalized;

export {
  computeVectorSimilarity,
  computeVectorSimilarityPenalized,
};
