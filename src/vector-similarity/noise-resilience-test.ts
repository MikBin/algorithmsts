// A simple script to test noise resilience of vector similarity functions
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation';
import { pearsonCorrelationSimilarity } from './similarity/classic';

function addNoise(vector: number[], noiseLevel: number): number[] {
  return vector.map((x) => x + (Math.random() - 0.5) * noiseLevel);
}

const baseVector = [1, 2, 3, 4, 5];
const noiseLevels = [0.1, 0.5, 1.0];

console.log('Base Vector:', baseVector);

noiseLevels.forEach((noiseLevel) => {
  console.log(`\n--- Noise Level: ${noiseLevel} ---`);
  const noisyVector = addNoise(baseVector, noiseLevel);
  console.log('Noisy Vector:', noisyVector.map((x) => x.toFixed(4)).join(', '));

  const sim = computeVectorSimilarityMeanStdPenalized(baseVector, noisyVector);
  const penalizedSim = computeVectorSimilarityMeanStdPenalized(
    baseVector,
    noisyVector
  );
  const correlationSim = vectorSimilarityCorrelation(baseVector, noisyVector);
  const pearsonSim = pearsonCorrelationSimilarity(baseVector, noisyVector);

  console.log(`Similarity: ${sim.toFixed(4)}`);
  console.log(`Penalized Similarity: ${penalizedSim.toFixed(4)}`);
  console.log(`Correlation Similarity: ${correlationSim.toFixed(4)}`);
  console.log(`Pearson Similarity: ${pearsonSim.toFixed(4)}`);
});
