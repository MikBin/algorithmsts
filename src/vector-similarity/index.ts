/**
 * Public entry point for the vector-similarity module.
 *
 * Exports are explicit (no wildcard re-exports) to keep the public surface
 * unambiguous and to prevent silent name collisions between submodules.
 */

// Classic distances, similarities and correlation measures
export {
    cosineSimilarity,
    normalizedCosineSimilarity,
    euclideanDistance,
    squaredEuclideanDistance,
    manhattanDistance,
    pearsonCorrelation,
    pearsonCorrelationSimilarity,
    dotProduct,
    distanceToSimilarity,
    euclideanSimilarity,
    manhattanSimilarity,
    angularDistance,
    angularSimilarity,
    diceCoefficient,
    diceDistance,
    chebyshevDistance,
    chebyshevSimilarity,
    gowerDistance,
    gowerSimilarity,
    soergelDistance,
    soergelSimilarity,
    kulczynskiDistance,
    kulczynskiSimilarity,
    canberraDistance,
    lorentzianDistance,
    lorentzianSimilarity,
} from './similarity/classic';

// Jaccard family
export {
    jaccardSimilarityBinary,
    jaccardSimilarityWeighted,
    jaccardSimilarityRealValued,
} from './similarity/jaccard';

// Advanced heuristics
export {
    weightedMinkowskiSimilarity,
    canberraSimilarity,
    brayCurtisSimilarity,
    harmonicMeanSimilarity,
    kendallCorrelationSimilarity,
    geometricMeanSimilarity,
    ratioBasedSimilarity,
} from './similarity/heuristics';
export type { MinkowskiOptions, MeanSimilarityOptions } from './similarity/heuristics';

// Intersection family
export {
    intersectionSimilarity,
    waveHedgesDistance,
    sorensenDistance,
    motykaSimilarity,
    waveHedgesSimilarity,
    sorensenSimilarity,
    motykaDistance,
    intersectionSimilarityNormalized,
    intersectionDistance,
} from './similarity/intersection';

// Entropy / divergence family
export {
    kullbackLeiblerDivergence,
    crossEntropy,
    jeffreysDivergence,
    kDivergence,
    topsoeDivergence,
    kullbackLeiblerSimilarity,
    jeffreysSimilarity,
    kSimilarity,
    topsoeSimilarity,
    crossEntropySimilarity,
} from './similarity/entropy';

// Chi-square distances
export {
    pearsonChiSquareDistance,
    neymanChiSquareDistance,
    additiveSymmetricChiSquareDistance,
    squaredChiSquareDistance,
} from './similarity/chi-square';

// Normalized chi-square similarities
export {
    normalizedPearsonChiSquareSimilarity,
    normalizedNeymanChiSquareSimilarity,
    normalizedAdditiveSymmetricChiSquareSimilarity,
    normalizedSquaredChiSquareSimilarity,
} from './similarity/normalized-chi-square';

// Fidelity family
export {
    fidelitySimilarity,
    hellingerDistance,
    matusitaDistance,
    squaredChordDistance,
    hellingerSimilarity,
} from './similarity/fidelity';

// Normalized fidelity similarities
export {
    normalizedMatusitaSimilarity,
    normalizedSquaredChordSimilarity,
} from './similarity/normalized-fidelity';

// Non-linear kernel similarities
export {
    polynomialKernelSimilarity,
    rbfKernelSimilarity,
} from './similarity/nonLinear';

// Itakura-Saito
export {
    itakuraSaitoDistance,
    vectorSimilarityItakuraSaito,
} from './similarity/itakura-saito';

// Correlation distance & distance correlation
export { correlationDistance } from './similarity/correlationDistance';
export { distanceCorrelation } from './similarity/distanceCorrelation';

// Custom mean/std-based similarities
export {
    vectorSimilarityCorrelation,
    vectorSimilarityCorrelationNoStd,
} from './similarity/vectorSimilarityCorrelation';
export {
    vectorSimilarityMeanStdPowerArithmeticMean,
    vectorSimilarityMeanStdPowerArithmeticMeanNoStd,
} from './similarity/vectorSimilarityMeanStdPowerArithmeticMean';
export { computeVectorSimilarityMeanStdPenalized } from './similarity/vectorSimilarityMeanStdPenalized';
export type { VectorSimilarityPenalizedOptions } from './similarity/vectorSimilarityMeanStdPenalized';
export { computeVectorSimilarityMetricLike } from './similarity/vectorSimilarityMetricLike';
export type { VectorSimilarityMetricLikeOptions } from './similarity/vectorSimilarityMetricLike';
export { computeVectorSimilarityRobust } from './similarity/vectorSimilarityRobust';
export type { VectorSimilarityRobustOptions } from './similarity/vectorSimilarityRobust';
export { computeVectorSimilarityTunable } from './similarity/vectorSimilarityTunable';
export type { VectorSimilarityTunableOptions } from './similarity/vectorSimilarityTunable';
export { computeVectorSimilarityVarianceWeighted } from './similarity/vectorSimilarityVarianceWeighted';
export type { VectorSimilarityVarianceWeightedOptions } from './similarity/vectorSimilarityVarianceWeighted';
export { madPenalizedRelativeAgreementSimilarity } from './similarity/madPenalizedRelativeAgreementSimilarity';
export type { MadPenalizedRelativeAgreementOptions } from './similarity/madPenalizedRelativeAgreementSimilarity';
export {
    maxRelativeAgreementMedianMadPowerSimilarity,
    maxRelativeAgreementMedianMadPowerSimilarityNoMad,
} from './similarity/maxRelativeAgreementMedianMadPowerSimilarity';

// Distance-to-measure
export { distanceToMeasure } from './similarity/distanceToMeasure';
