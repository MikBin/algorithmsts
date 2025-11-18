
// A simple demo script for comparing vector similarity functions
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation';
import { pearsonCorrelationSimilarity, cosineSimilarity, euclideanSimilarity, manhattanSimilarity } from './similarity/classic';
import { weightedMinkowskiSimilarity, canberraSimilarity, chebyshevSimilarity, brayCurtisSimilarity, harmonicMeanSimilarity, waveHedgesSimilarity, kendallCorrelationSimilarity } from './similarity/heuristics';
import { jaccardSimilarityBinary, jaccardSimilarityWeighted, jaccardSimilarityRealValued } from './similarity/jaccard';
import { computeVectorSimilarityRobust } from './similarity/vectorSimilarityRobust';
import { computeVectorSimilarityMeanStdPower } from './similarity/vectorSimilarityMeanStdPower';
import { computeVectorSimilarityMetricLike } from './similarity/vectorSimilarityMetricLike';
import { computeVectorSimilarityTunable } from './similarity/vectorSimilarityTunable';
import { computeVectorSimilarityVarianceWeighted } from './similarity/vectorSimilarityVarianceWeighted';

const vecA = [1, 2, 3, 4, 5];
const vecB = [1.1, 2.2, 3.3, 4.4, 5.5]; // Similar
const vecC = [1, 2, 100, 4, 5]; // Outlier
const vecD = [5, 4, 3, 2, 1]; // Negatively Correlated
const vecE = [1, 2, 3, 4, 5]; // Identical

const vectors = {
    A: vecA,
    B: vecB,
    C: vecC,
    D: vecD,
    E: vecE,
};

const similarityFunctions = {
  pearsonCorrelationSimilarity,
  cosineSimilarity,
  euclideanSimilarity,
  manhattanSimilarity,
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
  brayCurtisSimilarity,
  harmonicMeanSimilarity,
  waveHedgesSimilarity,
  kendallCorrelationSimilarity,
  jaccardSimilarityBinary,
  jaccardSimilarityWeighted,
  jaccardSimilarityRealValued,
  computeVectorSimilarityMeanStdPenalized,
  vectorSimilarityCorrelation,
  computeVectorSimilarityRobust,
  computeVectorSimilarityMeanStdPower,
  computeVectorSimilarityMetricLike,
  computeVectorSimilarityTunable,
  computeVectorSimilarityVarianceWeighted,
};

console.log('--- Vector Definitions ---');
Object.entries(vectors).forEach(([name, vector]) => {
    console.log(`Vector ${name}:`, vector);
});

console.log('\n--- Similarity Comparisons (A vs. Others) ---');

Object.entries(similarityFunctions).forEach(([name, func]) => {
    console.log(`\n--- ${name} ---`);
    Object.entries(vectors).forEach(([vecName, vector]) => {
        if (vecName !== 'A') {
            try {
                const result = func(vecA, vector);
                console.log(`Similarity(A, ${vecName}): ${result.toFixed(4)}`);
            } catch (e) {
                console.log(`Similarity(A, ${vecName}): Error - ${(e as Error).message}`);
            }
        }
    });
});
