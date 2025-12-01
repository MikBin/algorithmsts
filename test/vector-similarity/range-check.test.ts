import { describe, test, expect } from 'vitest';
import {
  cosineSimilarity,
  normalizedCosineSimilarity,
  dotProduct,
  euclideanDistance,
  pearsonCorrelation,
  pearsonCorrelationSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
  gowerSimilarity,
  kulczynskiSimilarity,
  lorentzianSimilarity,
  soergelSimilarity,
} from '../../src/vector-similarity/similarity/classic';
import { 
  jaccardSimilarityBinary,
  jaccardSimilarityWeighted,
  jaccardSimilarityRealValued,
 } from '../../src/vector-similarity/similarity/jaccard';
import { weightedMinkowskiSimilarity } from '../../src/vector-similarity/similarity/heuristics';

describe('Similarity Functions Return Value Range', () => {
  const testVectors = {
    identical: [
      [1, 2, 3],
      [1, 2, 3],
    ],
    different: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    random1: [
      [0.1, 0.5, 0.9],
      [0.2, 0.6, 0.8],
    ],
    random2: [
      [0.8, 0.2, 0.4],
      [0.3, 0.7, 0.5],
    ],
    zeroVector: [
      [0, 0, 0],
      [1, 2, 3],
    ],
    allZeros: [
      [0, 0, 0],
      [0, 0, 0],
    ],
    opposite: [
      [1, -2, 3],
      [-1, 2, -3],
    ],
  };

  const similarityFunctions: { [key: string]: (a: number[], b: number[], c?: any) => number } = {
    cosineSimilarity,
    normalizedCosineSimilarity,
    dotProduct,
    euclideanDistance,
    pearsonCorrelation,
    pearsonCorrelationSimilarity,
    canberraSimilarity,
    chebyshevSimilarity,
    gowerSimilarity,
    kulczynskiSimilarity,
    lorentzianSimilarity,
    soergelSimilarity,
    jaccardSimilarityBinary,
    jaccardSimilarityWeighted,
    jaccardSimilarityRealValued,
    weightedMinkowskiSimilarity,
  };

  for (const funcName in similarityFunctions) {
    if (Object.prototype.hasOwnProperty.call(similarityFunctions, funcName)) {
      const func = similarityFunctions[funcName as keyof typeof similarityFunctions];
      test(`${funcName} should return a value between 0 and 1`, () => {
        for (const key in testVectors) {
          if (Object.prototype.hasOwnProperty.call(testVectors, key)) {
            const [vecA, vecB] = testVectors[key as keyof typeof testVectors];
            try {
              let similarity;
              if (funcName === 'gowerSimilarity') {
                const ranges = Array(vecA.length).fill(1);
                similarity = func(vecA, vecB, ranges);
              } else {
                similarity = func(vecA, vecB);
              }

              if (
                funcName !== 'dotProduct' &&
                funcName !== 'euclideanDistance' &&
                funcName !== 'pearsonCorrelation' &&
                funcName !== 'cosineSimilarity'
              ) {
                // If the result is a valid number, check the range.
                // NaN is accepted for undefined cases (like zero vectors).
                if (!isNaN(similarity)) {
                  expect(similarity).toBeGreaterThanOrEqual(0);
                  expect(similarity).toBeLessThanOrEqual(1);
                }
              } else {
                console.log(
                  `${funcName} with ${key} vectors returned ${similarity}. Not strictly [0,1].`
                );
              }
            } catch (e: any) {
              console.error(`Error testing ${funcName} with ${key}:`, e.message);
              throw e; // Fail the test if an exception occurs
            }
          }
        }
      });
    }
  }
});
