
import fs from 'fs';
// A simple script to test noise resilience of vector similarity functions
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized.ts';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation.ts';
import { pearsonCorrelationSimilarity, cosineSimilarity, euclideanSimilarity, manhattanSimilarity, gowerSimilarity, soergelSimilarity, kulczynskiSimilarity, lorentzianSimilarity } from './similarity/classic.ts';
import { weightedMinkowskiSimilarity, canberraSimilarity, chebyshevSimilarity } from './similarity/heuristics.ts';
import { jaccardSimilarityBinary, jaccardSimilarityWeighted, jaccardSimilarityRealValued } from './similarity/jaccard.ts';
import { computeVectorSimilarityRobust } from './similarity/vectorSimilarityRobust.ts';
import { computeVectorSimilarityMeanStdPower } from './similarity/vectorSimilarityMeanStdPower.ts';
import { computeVectorSimilarityMetricLike } from './similarity/vectorSimilarityMetricLike.ts';
import { computeVectorSimilarityTunable } from './similarity/vectorSimilarityTunable.ts';
import { computeVectorSimilarityVarianceWeighted } from './similarity/vectorSimilarityVarianceWeighted.ts';
import { intersectionSimilarity, waveHedgesSimilarity, sorensenSimilarity, motykaSimilarity } from './similarity/intersection.ts';
import { kullbackLeiblerSimilarity, jeffreysSimilarity, kSimilarity, topsoeSimilarity } from './similarity/entropy.ts';
import { pearsonChiSquareDistance, neymanChiSquareDistance, additiveSymmetricChiSquareDistance, squaredChiSquareDistance } from './similarity/chi-square.ts';
import { normalizedPearsonChiSquareSimilarity, normalizedNeymanChiSquareSimilarity, normalizedAdditiveSymmetricChiSquareSimilarity, normalizedSquaredChiSquareSimilarity } from './similarity/normalized-chi-square.ts';
import { fidelitySimilarity, hellingerDistance, matusitaDistance, squaredChordDistance } from './similarity/fidelity.ts';
import { normalizedMatusitaSimilarity, normalizedSquaredChordSimilarity } from './similarity/normalized-fidelity.ts';

function addNoise(vector: number[], noiseLevel: number): number[] {
  return vector.map((x) => x + (Math.random() - 0.5) * noiseLevel);
}

const baseVector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const noiseLevels = [0.1, 0.5, 1.0, 2.0, 5.0];

const results: any = {
  baseVector,
  noiseLevels: {},
};

console.log('Base Vector:', baseVector);

noiseLevels.forEach((noiseLevel) => {
  const noisyVector = addNoise(baseVector, noiseLevel);
  const similarities = {
    noisyVector: noisyVector.map((x) => parseFloat(x.toFixed(4))),
    penalizedSimilarity: parseFloat(computeVectorSimilarityMeanStdPenalized(baseVector, noisyVector).toFixed(4)),
    correlationSimilarity: parseFloat(vectorSimilarityCorrelation(baseVector, noisyVector).toFixed(4)),
    pearsonSimilarity: parseFloat(pearsonCorrelationSimilarity(baseVector, noisyVector).toFixed(4)),
    cosineSimilarity: parseFloat(cosineSimilarity(baseVector, noisyVector).toFixed(4)),
    euclideanSimilarity: parseFloat(euclideanSimilarity(baseVector, noisyVector).toFixed(4)),
    manhattanSimilarity: parseFloat(manhattanSimilarity(baseVector, noisyVector).toFixed(4)),
    gowerSimilarity: parseFloat(gowerSimilarity(baseVector, noisyVector, Array(baseVector.length).fill(1)).toFixed(4)),
    soergelSimilarity: parseFloat(soergelSimilarity(baseVector, noisyVector).toFixed(4)),
    kulczynskiSimilarity: parseFloat(kulczynskiSimilarity(baseVector, noisyVector).toFixed(4)),
    lorentzianSimilarity: parseFloat(lorentzianSimilarity(baseVector, noisyVector).toFixed(4)),
    weightedMinkowskiSimilarity: parseFloat(weightedMinkowskiSimilarity(baseVector, noisyVector).toFixed(4)),
    canberraSimilarity: parseFloat(canberraSimilarity(baseVector, noisyVector).toFixed(4)),
    chebyshevSimilarity: parseFloat(chebyshevSimilarity(baseVector, noisyVector).toFixed(4)),
    intersectionSimilarity: parseFloat(intersectionSimilarity(baseVector, noisyVector).toFixed(4)),
    waveHedgesSimilarity: parseFloat(waveHedgesSimilarity(baseVector, noisyVector).toFixed(4)),
    sorensenSimilarity: parseFloat(sorensenSimilarity(baseVector, noisyVector).toFixed(4)),
    motykaSimilarity: parseFloat(motykaSimilarity(baseVector, noisyVector).toFixed(4)),
    kullbackLeiblerSimilarity: parseFloat(kullbackLeiblerSimilarity(baseVector, noisyVector).toFixed(4)),
    jeffreysSimilarity: parseFloat(jeffreysSimilarity(baseVector, noisyVector).toFixed(4)),
    kSimilarity: parseFloat(kSimilarity(baseVector, noisyVector).toFixed(4)),
    topsoeSimilarity: parseFloat(topsoeSimilarity(baseVector, noisyVector).toFixed(4)),
    pearsonChiSquareDistance: parseFloat(pearsonChiSquareDistance(baseVector, noisyVector).toFixed(4)),
    neymanChiSquareDistance: parseFloat(neymanChiSquareDistance(baseVector, noisyVector).toFixed(4)),
    additiveSymmetricChiSquareDistance: parseFloat(additiveSymmetricChiSquareDistance(baseVector, noisyVector).toFixed(4)),
    squaredChiSquareDistance: parseFloat(squaredChiSquareDistance(baseVector, noisyVector).toFixed(4)),
    normalizedPearsonChiSquareSimilarity: parseFloat(normalizedPearsonChiSquareSimilarity(baseVector, noisyVector).toFixed(4)),
    normalizedNeymanChiSquareSimilarity: parseFloat(normalizedNeymanChiSquareSimilarity(baseVector, noisyVector).toFixed(4)),
    normalizedAdditiveSymmetricChiSquareSimilarity: parseFloat(normalizedAdditiveSymmetricChiSquareSimilarity(baseVector, noisyVector).toFixed(4)),
    normalizedSquaredChiSquareSimilarity: parseFloat(normalizedSquaredChiSquareSimilarity(baseVector, noisyVector).toFixed(4)),
    fidelitySimilarity: parseFloat(fidelitySimilarity(baseVector, noisyVector).toFixed(4)),
    hellingerDistance: parseFloat(hellingerDistance(baseVector, noisyVector).toFixed(4)),
    matusitaDistance: parseFloat(matusitaDistance(baseVector, noisyVector).toFixed(4)),
    squaredChordDistance: parseFloat(squaredChordDistance(baseVector, noisyVector).toFixed(4)),
    normalizedMatusitaSimilarity: parseFloat(normalizedMatusitaSimilarity(baseVector, noisyVector).toFixed(4)),
    normalizedSquaredChordSimilarity: parseFloat(normalizedSquaredChordSimilarity(baseVector, noisyVector).toFixed(4)),
    jaccardSimilarityBinary: parseFloat(jaccardSimilarityBinary(baseVector, noisyVector).toFixed(4)),
    jaccardSimilarityWeighted: parseFloat(jaccardSimilarityWeighted(baseVector, noisyVector).toFixed(4)),
    jaccardSimilarityRealValued: parseFloat(jaccardSimilarityRealValued(baseVector, noisyVector).toFixed(4)),
    robustSimilarity: parseFloat(computeVectorSimilarityRobust(baseVector, noisyVector).toFixed(4)),
    meanStdPowerSimilarity: parseFloat(computeVectorSimilarityMeanStdPower(baseVector, noisyVector).toFixed(4)),
    metricLikeSimilarity: parseFloat(computeVectorSimilarityMetricLike(baseVector, noisyVector).toFixed(4)),
    tunableSimilarity: parseFloat(computeVectorSimilarityTunable(baseVector, noisyVector).toFixed(4)),
    varianceWeightedSimilarity: parseFloat(computeVectorSimilarityVarianceWeighted(baseVector, noisyVector).toFixed(4)),
  };
  results.noiseLevels[noiseLevel] = similarities;
});

fs.writeFileSync('noise-resilience-results.json', JSON.stringify(results, null, 2));
