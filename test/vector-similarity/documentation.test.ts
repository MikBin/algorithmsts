import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as VectorSimilarity from '../../src/vector-similarity/index.ts';

const DOC_DIR = resolve(__dirname, '../../src/vector-similarity');
const implementationStatus = readFileSync(
  resolve(DOC_DIR, 'IMPLEMENTATION_STATUS.md'),
  'utf-8'
);
const namingProposal = readFileSync(
  resolve(DOC_DIR, 'NAMING_PROPOSAL.md'),
  'utf-8'
);
const similarityFunctions = readFileSync(
  resolve(DOC_DIR, 'SIMILARITY_FUNCTIONS.md'),
  'utf-8'
);

/** Public function exports from index.ts (excludes types). */
const EXPORTED_FUNCTIONS = Object.keys(VectorSimilarity).filter(
  (key) => typeof (VectorSimilarity as Record<string, unknown>)[key] === 'function'
);

/** Functions referenced in the analysis benchmark suite. */
const ANALYSIS_FUNCTIONS = [
  'pearsonCorrelationSimilarity',
  'normalizedCosineSimilarity',
  'euclideanSimilarity',
  'manhattanSimilarity',
  'gowerSimilarity',
  'soergelSimilarity',
  'kulczynskiSimilarity',
  'lorentzianSimilarity',
  'weightedMinkowskiSimilarity',
  'canberraSimilarity',
  'chebyshevSimilarity',
  'intersectionSimilarity',
  'waveHedgesSimilarity',
  'sorensenSimilarity',
  'motykaSimilarity',
  'kullbackLeiblerSimilarity',
  'jeffreysSimilarity',
  'kSimilarity',
  'topsoeSimilarity',
  'normalizedPearsonChiSquareSimilarity',
  'normalizedNeymanChiSquareSimilarity',
  'normalizedAdditiveSymmetricChiSquareSimilarity',
  'normalizedSquaredChiSquareSimilarity',
  'fidelitySimilarity',
  'hellingerSimilarity',
  'normalizedMatusitaSimilarity',
  'normalizedSquaredChordSimilarity',
  'jaccardSimilarityBinary',
  'jaccardSimilarityWeighted',
  'jaccardSimilarityRealValued',
  'computeVectorSimilarityMeanStdPenalized',
  'vectorSimilarityCorrelation',
  'vectorSimilarityCorrelationNoStd',
  'computeVectorSimilarityRobust',
  'vectorSimilarityMeanStdPowerArithmeticMean',
  'vectorSimilarityMeanStdPowerArithmeticMeanNoStd',
  'computeVectorSimilarityMetricLike',
  'computeVectorSimilarityTunable',
  'computeVectorSimilarityVarianceWeighted',
  'polynomialKernelSimilarity',
  'rbfKernelSimilarity',
  'itakuraSaitoDistance',
  'vectorSimilarityItakuraSaito',
  'madPenalizedRelativeAgreementSimilarity',
  'maxRelativeAgreementMedianMadPowerSimilarity',
  'maxRelativeAgreementMedianMadPowerSimilarityNoMad',
];

describe('vector similarity documentation', () => {
  it('IMPLEMENTATION_STATUS.md exists and lists analysis-suite functions', () => {
    expect(implementationStatus).toContain('# Vector Similarity — Implementation Status');
    for (const name of ANALYSIS_FUNCTIONS) {
      expect(implementationStatus, `missing ${name} in IMPLEMENTATION_STATUS.md`).toContain(
        `\`${name}\``
      );
    }
  });

  it('NAMING_PROPOSAL.md defines rename tiers and key proposed names', () => {
    expect(namingProposal).toContain('# Vector Similarity — Naming & Alias Proposal');
    expect(namingProposal).toContain('maxRelativeAgreementMeanStdPowerSimilarity');
    expect(namingProposal).toContain('clippedRelativeAgreementSimilarity');
    expect(namingProposal).toContain('logCompressedL1Distance');
    expect(namingProposal).toContain('Phase 3');
  });

  it('SIMILARITY_FUNCTIONS.md documents every exported function', () => {
    expect(similarityFunctions).toContain('# Vector Similarity Functions — Library Reference');
    for (const name of EXPORTED_FUNCTIONS) {
      expect(similarityFunctions, `missing ${name} in SIMILARITY_FUNCTIONS.md`).toContain(
        `\`${name}\``
      );
    }
  });

  it('SIMILARITY_FUNCTIONS.md clarifies Lorentzian implementation form', () => {
    expect(similarityFunctions).toMatch(/log\(1 \+ \|A/i);
    expect(similarityFunctions).toMatch(/not the paper-specific Lorentzian/i);
  });

  it('IMPLEMENTATION_STATUS.md lists not-implemented survey measures separately', () => {
    expect(implementationStatus).toContain('Not implemented');
    expect(implementationStatus).toContain('Hamming');
    expect(implementationStatus).toContain('Mahalanobis');
  });
});
