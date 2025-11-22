export {
    pearsonCorrelationSimilarity,
    cosineSimilarity,
    euclideanSimilarity,
    manhattanSimilarity,
    gowerSimilarity,
    soergelSimilarity,
    kulczynskiSimilarity,
    lorentzianSimilarity
} from './similarity/classic';
export {
    jaccardSimilarityBinary,
    jaccardSimilarityWeighted,
    jaccardSimilarityRealValued
} from './similarity/jaccard';
export * from './similarity/vectorSimilarityMeanStdPower';
export * from './similarity/vectorSimilarityMeanStdPowerArithmeticMean';
export * from './similarity/vectorSimilarityMeanStdPenalized';
export * from './similarity/vectorSimilarityMetricLike';
export * from './similarity/vectorSimilarityRobust';
export * from './similarity/vectorSimilarityTunable';
export * from './similarity/vectorSimilarityVarianceWeighted';
export {
    intersectionSimilarity,
    waveHedgesSimilarity,
    sorensenSimilarity,
    motykaSimilarity
} from './similarity/intersection';
export * from './similarity/entropy';
export {
    weightedMinkowskiSimilarity,
    canberraSimilarity,
    chebyshevSimilarity
} from './similarity/heuristics';
export * from './similarity/vectorSimilarityCorrelation';
