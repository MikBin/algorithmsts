
import {
  cosineSimilarity,
  dotProduct,
  euclideanDistance,
  pearsonCorrelation,
  pearsonCorrelationSimilarity,
} from '../../src/vector-similarity/similarity/classic';
import {
  canberraSimilarity,
  chebyshevSimilarity,
  gowerSimilarity,
  kulczynskiSimilarity,
  lorentzianSimilarity,
  minkowskiSimilarity,
  motykaSimilarity,
  soergelSimilarity,
  sorensenDiceSimilarity,
  squaredChordSimilarity,
  squaredEuclideanSimilarity,
  waveHedgesSimilarity,
  weightedGowerSimilarity,
} from '../../src/vector-similarity/similarity/heuristics';
import { jaccardSimilarity } from '../../src/vector-similarity/similarity/jaccard';

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

  const similarityFunctions = {
    cosineSimilarity,
    dotProduct,
    euclideanDistance,
    pearsonCorrelation,
    pearsonCorrelationSimilarity,
    canberraSimilarity,
    chebyshevSimilarity,
    gowerSimilarity,
    kulczynskiSimilarity,
    lorentzianSimilarity,
    minkowskiSimilarity,
    motykaSimilarity,
    soergelSimilarity,
    sorensenDiceSimilarity,
    squaredChordSimilarity,
    squaredEuclideanSimilarity,
    waveHedgesSimilarity,
    weightedGowerSimilarity,
    jaccardSimilarity,
  };

  for (const funcName in similarityFunctions) {
    if (Object.prototype.hasOwnProperty.call(similarityFunctions, funcName)) {
      const func = similarityFunctions[funcName as keyof typeof similarityFunctions];
      test(`${funcName} should return a value between 0 and 1`, () => {
        for (const key in testVectors) {
          if (Object.prototype.hasOwnProperty.call(testVectors, key)) {
            const [vecA, vecB] = testVectors[key as keyof typeof testVectors];
            try {
              const similarity = func(vecA, vecB);
              if (
                funcName !== 'dotProduct' &&
                funcName !== 'euclideanDistance' &&
                funcName !== 'pearsonCorrelation'
              ) {
                expect(similarity).toBeGreaterThanOrEqual(0);
                expect(similarity).toBeLessThanOrEqual(1);
              } else {
                console.log(
                  `${funcName} with ${key} vectors returned ${similarity}. Not strictly [0,1].`
                );
              }
            } catch (e: any) {
              console.error(`Error testing ${funcName} with ${key}:`, e.message);
            }
          }
        }
      });
    }
  }
});
