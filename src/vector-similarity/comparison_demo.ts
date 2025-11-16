// A simple demo script for comparing vector similarity functions
import {
  computeVectorSimilarity,
  computeVectorSimilarityPenalized,
} from './vectorSimilarity';

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
  computeVectorSimilarity(vecA, vecB).toFixed(4)
);
console.log(
  'Similarity(A, C):',
  computeVectorSimilarity(vecA, vecC).toFixed(4)
);
console.log(
  'Similarity(A, D):',
  computeVectorSimilarity(vecA, vecD).toFixed(4)
);

console.log(
  'PenalizedSimilarity(A, B):',
  computeVectorSimilarityPenalized(vecA, vecB).toFixed(4)
);
console.log(
  'PenalizedSimilarity(A, C):',
  computeVectorSimilarityPenalized(vecA, vecC).toFixed(4)
);
console.log(
  'PenalizedSimilarity(A, D):',
  computeVectorSimilarityPenalized(vecA, vecD).toFixed(4)
);
