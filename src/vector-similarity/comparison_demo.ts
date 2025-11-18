// A simple demo script for comparing vector similarity functions
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation';
import { pearsonCorrelationSimilarity } from './similarity/classic';

const vecA = [1, 2, 3];
const vecB = [1, 2, 4];
const vecC = [1, 2, 10];
const vecD = [1, 2, 3];

console.log('vecA:', vecA);
console.log('vecB:', vecB);
console.log('vecC:', vecC);
console.log('vecD:', vecD);

console.log(
  'Similarity(A, B):',
  computeVectorSimilarityMeanStdPenalized(vecA, vecB).toFixed(4)
);
console.log(
  'Similarity(A, C):',
  computeVectorSimilarityMeanStdPenalized(vecA, vecC).toFixed(4)
);
console.log(
  'Similarity(A, D):',
  computeVectorSimilarityMeanStdPenalized(vecA, vecD).toFixed(4)
);

console.log(
  'PenalizedSimilarity(A, B):',
  computeVectorSimilarityMeanStdPenalized(vecA, vecB).toFixed(4)
);
console.log(
  'PenalizedSimilarity(A, C):',
  computeVectorSimilarityMeanStdPenalized(vecA, vecC).toFixed(4)
);
console.log(
  'PenalizedSimilarity(A, D):',
  computeVectorSimilarityMeanStdPenalized(vecA, vecD).toFixed(4)
);

console.log(
  'vectorSimilarityCorrelation(A, B):',
  vectorSimilarityCorrelation(vecA, vecB).toFixed(4)
);
console.log(
  'vectorSimilarityCorrelation(A, C):',
  vectorSimilarityCorrelation(vecA, vecC).toFixed(4)
);
console.log(
  'vectorSimilarityCorrelation(A, D):',
  vectorSimilarityCorrelation(vecA, vecD).toFixed(4)
);

console.log(
  'pearsonCorrelationSimilarity(A, B):',
  pearsonCorrelationSimilarity(vecA, vecB).toFixed(4)
);
console.log(
  'pearsonCorrelationSimilarity(A, C):',
  pearsonCorrelationSimilarity(vecA, vecC).toFixed(4)
);
console.log(
  'pearsonCorrelationSimilarity(A, D):',
  pearsonCorrelationSimilarity(vecA, vecD).toFixed(4)
);
