// A simple script for comparing different similarity functions
import { cosineSimilarity, pearsonCorrelationSimilarity } from './similarity/classic';
import { jaccardSimilarityBinary } from './similarity/jaccard';
import { computeVectorSimilarityMeanStdPenalized } from './similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation';

const vecA = [1, 1, 0, 1];
const vecB = [1, 0, 1, 1];
const vecC = [0.5, 0.8, 0.2, 0.9];
const vecD = [0.6, 0.7, 0.1, 1.0];

console.log('--- Binary Vectors ---');
console.log('vecA:', vecA);
console.log('vecB:', vecB);
console.log('Cosine Similarity:', cosineSimilarity(vecA, vecB).toFixed(4));
console.log(
  'Jaccard Similarity:',
  jaccardSimilarityBinary(vecA, vecB).toFixed(4)
);
console.log(
  'Custom Similarity:',
  computeVectorSimilarityMeanStdPenalized(vecA, vecB).toFixed(4)
);
console.log(
  'vectorSimilarityCorrelation:',
  vectorSimilarityCorrelation(vecA, vecB).toFixed(4)
);
console.log(
  'pearsonCorrelationSimilarity:',
  pearsonCorrelationSimilarity(vecA, vecB).toFixed(4)
);

console.log('\n--- Continuous Vectors ---');
console.log('vecC:', vecC.map((x) => x.toFixed(2)).join(', '));
console.log('vecD:', vecD.map((x) => x.toFixed(2)).join(', '));
console.log('Cosine Similarity:', cosineSimilarity(vecC, vecD).toFixed(4));
console.log(
  'Custom Similarity:',
  computeVectorSimilarityMeanStdPenalized(vecC, vecD).toFixed(4)
);
console.log(
  'vectorSimilarityCorrelation:',
  vectorSimilarityCorrelation(vecC, vecD).toFixed(4)
);
console.log(
  'pearsonCorrelationSimilarity:',
  pearsonCorrelationSimilarity(vecC, vecD).toFixed(4)
);
