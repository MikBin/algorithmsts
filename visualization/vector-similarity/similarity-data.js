export const analysisResults = {
  "outliersResiliencyTest": [
    {
      "testCase": "Short Vectors with a Single Outlier",
      "vecA": [
        1,
        34000,
        -0.0001
      ],
      "vecB": [
        1.1,
        37800,
        -0.00015
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.0003,
        "manhattanSimilarity": 0.0003,
        "gowerSimilarity": 0.6333,
        "soergelSimilarity": 0.8995,
        "kulczynskiSimilarity": 0.8995,
        "lorentzianSimilarity": 0.1071,
        "weightedMinkowskiSimilarity": 0.0003,
        "canberraSimilarity": 0.9089,
        "chebyshevSimilarity": 0.0003,
        "intersectionSimilarity": 0.9471,
        "waveHedgesSimilarity": 0.6558,
        "sorensenSimilarity": 0.9471,
        "motykaSimilarity": 0.8995,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 1,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.0026,
        "normalizedNeymanChiSquareSimilarity": 0.0023,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.0012,
        "normalizedSquaredChiSquareSimilarity": 0.0049,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 1,
        "normalizedMatusitaSimilarity": 1,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.8995,
        "jaccardSimilarityRealValued": 0.8995,
        "computeVectorSimilarityMeanStdPenalized": 0.8656,
        "vectorSimilarityCorrelation": 0.9018,
        "vectorSimilarityCorrelationNoStd": 0.9125,
        "computeVectorSimilarityRobust": 0.8231,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.8847,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.8998,
        "computeVectorSimilarityMetricLike": 0.5703,
        "computeVectorSimilarityTunable": 0.8717,
        "computeVectorSimilarityVarianceWeighted": 0.9028,
        "madPenalizedRelativeAgreementSimilarity": 0.9463,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9493,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9497,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0,
        "itakuraSaitoDistance": 0.082,
        "vectorSimilarityItakuraSaito": 0.9243
      }
    },
    {
      "testCase": "Longer Vectors with Multiple Outliers",
      "vecC": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "vecD": [
        1.1,
        2.2,
        3.3,
        4.4,
        50000,
        6.6,
        7.7,
        -20000,
        9.9,
        10.1
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 0.4222,
        "normalizedCosineSimilarity": 0.5427,
        "euclideanSimilarity": 0,
        "manhattanSimilarity": 0,
        "gowerSimilarity": 0.47,
        "soergelSimilarity": 0.0006,
        "kulczynskiSimilarity": 0.0008,
        "lorentzianSimilarity": 0.0411,
        "weightedMinkowskiSimilarity": 0,
        "canberraSimilarity": 0.8105,
        "chebyshevSimilarity": 0,
        "intersectionSimilarity": 0.0016,
        "waveHedgesSimilarity": 0.2742,
        "sorensenSimilarity": 0.0013,
        "motykaSimilarity": 0.0008,
        "kullbackLeiblerSimilarity": 0.1635,
        "jeffreysSimilarity": 0.1286,
        "kSimilarity": 0.7484,
        "topsoeSimilarity": 0.5489,
        "normalizedPearsonChiSquareSimilarity": 0,
        "normalizedNeymanChiSquareSimilarity": 0,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0,
        "normalizedSquaredChiSquareSimilarity": 0,
        "fidelitySimilarity": 0.4808,
        "hellingerSimilarity": 0.2794,
        "normalizedMatusitaSimilarity": 0.2794,
        "normalizedSquaredChordSimilarity": 0.4808,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.0008,
        "jaccardSimilarityRealValued": 0.0008,
        "computeVectorSimilarityMeanStdPenalized": 0.7413,
        "vectorSimilarityCorrelation": 0.8263,
        "vectorSimilarityCorrelationNoStd": 0.8677,
        "computeVectorSimilarityRobust": 0.8008,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.66,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.7662,
        "computeVectorSimilarityMetricLike": 0.4234,
        "computeVectorSimilarityTunable": 0.8082,
        "computeVectorSimilarityVarianceWeighted": 0.7675,
        "madPenalizedRelativeAgreementSimilarity": 0.9545,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9545,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9545,
        "polynomialKernelSimilarity": 0.0073,
        "rbfKernelSimilarity": 0,
        "itakuraSaitoDistance": 15.0657,
        "vectorSimilarityItakuraSaito": 0.0622
      }
    }
  ],
  "benchmark": [
    {
      "name": "pearsonCorrelationSimilarity",
      "avgTime": 0.0884,
      "iterations": 10
    },
    {
      "name": "normalizedCosineSimilarity",
      "avgTime": 0.06149,
      "iterations": 10
    },
    {
      "name": "euclideanSimilarity",
      "avgTime": 0.00264,
      "iterations": 10
    },
    {
      "name": "manhattanSimilarity",
      "avgTime": 0.06612,
      "iterations": 10
    },
    {
      "name": "gowerSimilarity",
      "avgTime": 0.07999,
      "iterations": 10
    },
    {
      "name": "soergelSimilarity",
      "avgTime": 0.07252,
      "iterations": 10
    },
    {
      "name": "kulczynskiSimilarity",
      "avgTime": 0.07046,
      "iterations": 10
    },
    {
      "name": "lorentzianSimilarity",
      "avgTime": 0.05806,
      "iterations": 10
    },
    {
      "name": "weightedMinkowskiSimilarity",
      "avgTime": 0.10616,
      "iterations": 10
    },
    {
      "name": "canberraSimilarity",
      "avgTime": 0.05192,
      "iterations": 10
    },
    {
      "name": "chebyshevSimilarity",
      "avgTime": 0.0424,
      "iterations": 10
    },
    {
      "name": "intersectionSimilarity",
      "avgTime": 0.05731,
      "iterations": 10
    },
    {
      "name": "waveHedgesSimilarity",
      "avgTime": 0.07699,
      "iterations": 10
    },
    {
      "name": "sorensenSimilarity",
      "avgTime": 0.1654,
      "iterations": 10
    },
    {
      "name": "motykaSimilarity",
      "avgTime": 0.1381,
      "iterations": 10
    },
    {
      "name": "kullbackLeiblerSimilarity",
      "avgTime": 0.17579,
      "iterations": 10
    },
    {
      "name": "jeffreysSimilarity",
      "avgTime": 0.21157,
      "iterations": 10
    },
    {
      "name": "kSimilarity",
      "avgTime": 0.20273,
      "iterations": 10
    },
    {
      "name": "topsoeSimilarity",
      "avgTime": 0.29614,
      "iterations": 10
    },
    {
      "name": "normalizedPearsonChiSquareSimilarity",
      "avgTime": 0.05098,
      "iterations": 10
    },
    {
      "name": "normalizedNeymanChiSquareSimilarity",
      "avgTime": 0.03696,
      "iterations": 10
    },
    {
      "name": "normalizedAdditiveSymmetricChiSquareSimilarity",
      "avgTime": 0.04651,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChiSquareSimilarity",
      "avgTime": 0.04474,
      "iterations": 10
    },
    {
      "name": "fidelitySimilarity",
      "avgTime": 0.17932,
      "iterations": 10
    },
    {
      "name": "hellingerSimilarity",
      "avgTime": 0.19132,
      "iterations": 10
    },
    {
      "name": "normalizedMatusitaSimilarity",
      "avgTime": 0.25114,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChordSimilarity",
      "avgTime": 0.2321,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityBinary",
      "avgTime": 0.06923,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityWeighted",
      "avgTime": 0.06762,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityRealValued",
      "avgTime": 0.03747,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMeanStdPenalized",
      "avgTime": 0.16487,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelation",
      "avgTime": 0.124,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelationNoStd",
      "avgTime": 0.03539,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityRobust",
      "avgTime": 0.14222,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMean",
      "avgTime": 0.09813,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMeanNoStd",
      "avgTime": 0.01083,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMetricLike",
      "avgTime": 0.09358,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityTunable",
      "avgTime": 0.13702,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityVarianceWeighted",
      "avgTime": 0.20493,
      "iterations": 10
    },
    {
      "name": "madPenalizedRelativeAgreementSimilarity",
      "avgTime": 0.30792,
      "iterations": 10
    },
    {
      "name": "maxRelativeAgreementMedianMadPowerSimilarity",
      "avgTime": 0.18181,
      "iterations": 10
    },
    {
      "name": "maxRelativeAgreementMedianMadPowerSimilarityNoMad",
      "avgTime": 0.10587,
      "iterations": 10
    },
    {
      "name": "polynomialKernelSimilarity",
      "avgTime": 0.07382,
      "iterations": 10
    },
    {
      "name": "rbfKernelSimilarity",
      "avgTime": 0.03357,
      "iterations": 10
    },
    {
      "name": "itakuraSaitoDistance",
      "avgTime": 0.06063,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityItakuraSaito",
      "avgTime": 0.02348,
      "iterations": 10
    }
  ],
  "similarityCompare": {
    "binary": {
      "vecA": [
        1,
        1,
        0,
        1
      ],
      "vecB": [
        1,
        0,
        1,
        1
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 0.3333,
        "normalizedCosineSimilarity": 0.8333,
        "euclideanSimilarity": 0.4142,
        "manhattanSimilarity": 0.3333,
        "gowerSimilarity": 0.5,
        "soergelSimilarity": 0.5,
        "kulczynskiSimilarity": 0.5,
        "lorentzianSimilarity": 0.4191,
        "weightedMinkowskiSimilarity": 0.4142,
        "canberraSimilarity": 0.6667,
        "chebyshevSimilarity": 0.5,
        "intersectionSimilarity": 0.6667,
        "waveHedgesSimilarity": 0.3333,
        "sorensenSimilarity": 0.6667,
        "motykaSimilarity": 0.5,
        "kullbackLeiblerSimilarity": 0,
        "jeffreysSimilarity": 0,
        "kSimilarity": 0.8123,
        "topsoeSimilarity": 0.6839,
        "normalizedPearsonChiSquareSimilarity": 0,
        "normalizedNeymanChiSquareSimilarity": 0,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0,
        "normalizedSquaredChiSquareSimilarity": 0.3333,
        "fidelitySimilarity": 0.6667,
        "hellingerSimilarity": 0.4226,
        "normalizedMatusitaSimilarity": 0.4226,
        "normalizedSquaredChordSimilarity": 0.6667,
        "jaccardSimilarityBinary": 0.5,
        "jaccardSimilarityWeighted": 0.5,
        "jaccardSimilarityRealValued": 0.5,
        "computeVectorSimilarityMeanStdPenalized": 0.5876,
        "vectorSimilarityCorrelation": 0.6675,
        "vectorSimilarityCorrelationNoStd": 0.75,
        "computeVectorSimilarityRobust": 0.6875,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.5,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.5,
        "computeVectorSimilarityMetricLike": 0.1824,
        "computeVectorSimilarityTunable": 0.6495,
        "computeVectorSimilarityVarianceWeighted": 0.5906,
        "madPenalizedRelativeAgreementSimilarity": 0.6094,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.6768,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.75,
        "polynomialKernelSimilarity": 0.5625,
        "rbfKernelSimilarity": 0.9802,
        "itakuraSaitoDistance": null,
        "vectorSimilarityItakuraSaito": 0
      }
    },
    "continuous": {
      "vecC": [
        0.5,
        0.8,
        0.2,
        0.9
      ],
      "vecD": [
        0.6,
        0.7,
        0.1,
        1
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 0.9789,
        "normalizedCosineSimilarity": 0.9947,
        "euclideanSimilarity": 0.8333,
        "manhattanSimilarity": 0.7143,
        "gowerSimilarity": 0.9,
        "soergelSimilarity": 0.8462,
        "kulczynskiSimilarity": 0.8462,
        "lorentzianSimilarity": 0.724,
        "weightedMinkowskiSimilarity": 0.8333,
        "canberraSimilarity": 0.8804,
        "chebyshevSimilarity": 0.9091,
        "intersectionSimilarity": 0.9167,
        "waveHedgesSimilarity": 0.5286,
        "sorensenSimilarity": 0.9167,
        "motykaSimilarity": 0.8462,
        "kullbackLeiblerSimilarity": 0.9758,
        "jeffreysSimilarity": 0.9556,
        "kSimilarity": 0.9947,
        "topsoeSimilarity": 0.9887,
        "normalizedPearsonChiSquareSimilarity": 0.8765,
        "normalizedNeymanChiSquareSimilarity": 0.9144,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.81,
        "normalizedSquaredChiSquareSimilarity": 0.9484,
        "fidelitySimilarity": 0.9942,
        "hellingerSimilarity": 0.9241,
        "normalizedMatusitaSimilarity": 0.9241,
        "normalizedSquaredChordSimilarity": 0.9942,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.8462,
        "jaccardSimilarityRealValued": 0.8462,
        "computeVectorSimilarityMeanStdPenalized": 0.8263,
        "vectorSimilarityCorrelation": 0.8707,
        "vectorSimilarityCorrelationNoStd": 0.8885,
        "computeVectorSimilarityRobust": 0.7881,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.8347,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.8641,
        "computeVectorSimilarityMetricLike": 0.4868,
        "computeVectorSimilarityTunable": 0.8376,
        "computeVectorSimilarityVarianceWeighted": 0.8688,
        "madPenalizedRelativeAgreementSimilarity": 0.9155,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9248,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9271,
        "polynomialKernelSimilarity": 0.9862,
        "rbfKernelSimilarity": 0.9996,
        "itakuraSaitoDistance": 0.3372,
        "vectorSimilarityItakuraSaito": 0.7478
      }
    }
  },
  "comparisonDemo": {
    "vectors": {
      "A": [
        1,
        2,
        3,
        4,
        5
      ],
      "B": [
        1.1,
        2.2,
        3.3,
        4.4,
        5.5
      ],
      "C": [
        1,
        2,
        100,
        4,
        5
      ],
      "D": [
        5,
        4,
        3,
        2,
        1
      ],
      "E": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    "comparisons": {
      "pearsonCorrelationSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.5182123079278668,
        "A_vs_D": 0,
        "A_vs_E": 1
      },
      "normalizedCosineSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.7327384681170538,
        "A_vs_D": 0.8181818181818181,
        "A_vs_E": 1
      },
      "euclideanSimilarity": {
        "A_vs_B": 0.5741781139787415,
        "A_vs_C": 0.01020408163265306,
        "A_vs_D": 0.1365270594958143,
        "A_vs_E": 1
      },
      "manhattanSimilarity": {
        "A_vs_B": 0.3999999999999999,
        "A_vs_C": 0.01020408163265306,
        "A_vs_D": 0.07692307692307693,
        "A_vs_E": 1
      },
      "gowerSimilarity": {
        "A_vs_B": 0.7,
        "A_vs_C": 0.8,
        "A_vs_D": 0.19999999999999996,
        "A_vs_E": 1
      },
      "soergelSimilarity": {
        "A_vs_B": 0.9090909090909091,
        "A_vs_C": 0.1339285714285714,
        "A_vs_D": 0.4285714285714286,
        "A_vs_E": 1
      },
      "kulczynskiSimilarity": {
        "A_vs_B": 0.9090909090909091,
        "A_vs_C": 0.13392857142857142,
        "A_vs_D": 0.4285714285714286,
        "A_vs_E": 1
      },
      "lorentzianSimilarity": {
        "A_vs_B": 0.4382248946239691,
        "A_vs_C": 0.17905207215961028,
        "A_vs_D": 0.1558579101499758,
        "A_vs_E": 1
      },
      "weightedMinkowskiSimilarity": {
        "A_vs_B": 0.5741781139787415,
        "A_vs_C": 0.01020408163265306,
        "A_vs_D": 0.1365270594958143,
        "A_vs_E": 1
      },
      "canberraSimilarity": {
        "A_vs_B": 0.9545454545454545,
        "A_vs_C": 0.8415032679738561,
        "A_vs_D": 0.7142857142857143,
        "A_vs_E": 1
      },
      "chebyshevSimilarity": {
        "A_vs_B": 0.6666666666666666,
        "A_vs_C": 0.01020408163265306,
        "A_vs_D": 0.2,
        "A_vs_E": 1
      },
      "intersectionSimilarity": {
        "A_vs_B": 0.9523809523809523,
        "A_vs_C": 0.23622047244094488,
        "A_vs_D": 0.6,
        "A_vs_E": 1
      },
      "waveHedgesSimilarity": {
        "A_vs_B": 0.6875,
        "A_vs_C": 0.5076142131979695,
        "A_vs_D": 0.2777777777777778,
        "A_vs_E": 1
      },
      "sorensenSimilarity": {
        "A_vs_B": 0.9523809523809523,
        "A_vs_C": 0.2362204724409449,
        "A_vs_D": 0.6,
        "A_vs_E": 1
      },
      "motykaSimilarity": {
        "A_vs_B": 0.9090909090909091,
        "A_vs_C": 0.13392857142857142,
        "A_vs_D": 0.42857142857142855,
        "A_vs_E": 1
      },
      "kullbackLeiblerSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.43306220493143005,
        "A_vs_D": 0.6572016194177505,
        "A_vs_E": 1
      },
      "jeffreysSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.2915839807150135,
        "A_vs_D": 0.4894268781682488,
        "A_vs_E": 1
      },
      "kSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.7981164922083155,
        "A_vs_D": 0.8931062608272236,
        "A_vs_E": 1
      },
      "topsoeSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.6507208493871529,
        "A_vs_D": 0.8068581736623389,
        "A_vs_E": 1
      },
      "normalizedPearsonChiSquareSimilarity": {
        "A_vs_B": 0.8799999999999999,
        "A_vs_C": 0.01051635292880429,
        "A_vs_D": 0.04310344827586207,
        "A_vs_E": 1
      },
      "normalizedNeymanChiSquareSimilarity": {
        "A_vs_B": 0.8695652173913042,
        "A_vs_C": 0.00031874203144921374,
        "A_vs_D": 0.04310344827586207,
        "A_vs_E": 1
      },
      "normalizedAdditiveSymmetricChiSquareSimilarity": {
        "A_vs_B": 0.7773851590106006,
        "A_vs_C": 0.00030946115591994034,
        "A_vs_D": 0.022026431718061675,
        "A_vs_E": 1
      },
      "normalizedSquaredChiSquareSimilarity": {
        "A_vs_B": 0.9333333333333333,
        "A_vs_C": 0.010828427249789739,
        "A_vs_D": 0.13043478260869565,
        "A_vs_E": 1
      },
      "fidelitySimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.7153471492488184,
        "A_vs_D": 0.8752660136327972,
        "A_vs_E": 1
      },
      "hellingerSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.46647132152884074,
        "A_vs_D": 0.6468230098559608,
        "A_vs_E": 1
      },
      "normalizedMatusitaSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.46647132152884074,
        "A_vs_D": 0.6468230098559609,
        "A_vs_E": 1
      },
      "normalizedSquaredChordSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.7153471492488183,
        "A_vs_D": 0.8752660136327973,
        "A_vs_E": 1
      },
      "jaccardSimilarityBinary": {
        "A_vs_B": 1,
        "A_vs_C": 1,
        "A_vs_D": 1,
        "A_vs_E": 1
      },
      "jaccardSimilarityWeighted": {
        "A_vs_B": 0.9090909090909091,
        "A_vs_C": 0.13392857142857142,
        "A_vs_D": 0.42857142857142855,
        "A_vs_E": 1
      },
      "jaccardSimilarityRealValued": {
        "A_vs_B": 0.9090909090909091,
        "A_vs_C": 0.13392857142857142,
        "A_vs_D": 0.42857142857142855,
        "A_vs_E": 1
      },
      "computeVectorSimilarityMeanStdPenalized": {
        "A_vs_B": 0.9545454545454544,
        "A_vs_C": 0.7561054273371121,
        "A_vs_D": 0.6492273788524315,
        "A_vs_E": 1
      },
      "vectorSimilarityCorrelation": {
        "A_vs_B": 0.9545454545454546,
        "A_vs_C": 0.8670062419582996,
        "A_vs_D": 0.688774151449793,
        "A_vs_E": 1
      },
      "vectorSimilarityCorrelationNoStd": {
        "A_vs_B": 0.9545454545454546,
        "A_vs_C": 0.903,
        "A_vs_D": 0.74,
        "A_vs_E": 1
      },
      "computeVectorSimilarityRobust": {
        "A_vs_B": 0.8958333333333334,
        "A_vs_C": 0.8769035532994924,
        "A_vs_D": 0.6111111111111112,
        "A_vs_E": 1
      },
      "vectorSimilarityMeanStdPowerArithmeticMean": {
        "A_vs_B": 0.9523809523809523,
        "A_vs_C": 0.7092843288014058,
        "A_vs_D": 0.5407505203245806,
        "A_vs_E": 1
      },
      "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
        "A_vs_B": 0.9523809523809523,
        "A_vs_C": 0.8116504854368932,
        "A_vs_D": 0.6,
        "A_vs_E": 1
      },
      "computeVectorSimilarityMetricLike": {
        "A_vs_B": 0.748793554205663,
        "A_vs_C": 0.5356616433757743,
        "A_vs_D": 0.16875060051800897,
        "A_vs_E": 1
      },
      "computeVectorSimilarityTunable": {
        "A_vs_B": 0.9325989472402855,
        "A_vs_C": 0.8580875986751005,
        "A_vs_D": 0.6365720697611543,
        "A_vs_E": 1
      },
      "computeVectorSimilarityVarianceWeighted": {
        "A_vs_B": 0.9545454545454545,
        "A_vs_C": 0.7874499528000002,
        "A_vs_D": 0.6861576,
        "A_vs_E": 1
      },
      "madPenalizedRelativeAgreementSimilarity": {
        "A_vs_B": 0.9545454545454545,
        "A_vs_C": 1,
        "A_vs_D": 0.6656249999999999,
        "A_vs_E": 1
      },
      "maxRelativeAgreementMedianMadPowerSimilarity": {
        "A_vs_B": 0.9545454545454546,
        "A_vs_C": 1,
        "A_vs_D": 0.7030630990890588,
        "A_vs_E": 1
      },
      "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
        "A_vs_B": 0.9545454545454546,
        "A_vs_C": 1,
        "A_vs_D": 0.75,
        "A_vs_E": 1
      },
      "polynomialKernelSimilarity": {
        "A_vs_B": 0.9998546050544571,
        "A_vs_C": 0.21401022337869158,
        "A_vs_D": 0.413265306122449,
        "A_vs_E": 1
      },
      "rbfKernelSimilarity": {
        "A_vs_B": 0.9945150973089191,
        "A_vs_C": 1.371614910949349e-41,
        "A_vs_D": 0.6703200460356393,
        "A_vs_E": 1
      },
      "itakuraSaitoDistance": {
        "A_vs_B": 0.0220054444761697,
        "A_vs_C": 2.5365578973199816,
        "A_vs_D": 3.6999999999999997,
        "A_vs_E": 0
      },
      "vectorSimilarityItakuraSaito": {
        "A_vs_B": 0.9784683686421567,
        "A_vs_C": 0.28276081688293697,
        "A_vs_D": 0.21276595744680854,
        "A_vs_E": 1
      }
    }
  },
  "stressTests": [
    {
      "testCase": "Noise Resilience",
      "baseVec": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "noisyVec": [
        0.9772663896974317,
        2.036994584928809,
        3.0204860828365834,
        3.9602696808200912,
        4.98108598105812,
        6.038481410935824,
        6.968587249634345,
        7.9763281888533,
        9.036040505053927,
        9.962491256039353
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.9092,
        "manhattanSimilarity": 0.7657,
        "gowerSimilarity": 0.9694,
        "soergelSimilarity": 0.9945,
        "kulczynskiSimilarity": 0.9945,
        "lorentzianSimilarity": 0.7686,
        "weightedMinkowskiSimilarity": 0.9092,
        "canberraSimilarity": 0.9958,
        "chebyshevSimilarity": 0.9618,
        "intersectionSimilarity": 0.9972,
        "waveHedgesSimilarity": 0.9234,
        "sorensenSimilarity": 0.9972,
        "motykaSimilarity": 0.9945,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 1,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.9975,
        "normalizedNeymanChiSquareSimilarity": 0.9975,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9949,
        "normalizedSquaredChiSquareSimilarity": 0.9987,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 0.9976,
        "normalizedMatusitaSimilarity": 0.9976,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9945,
        "jaccardSimilarityRealValued": 0.9945,
        "computeVectorSimilarityMeanStdPenalized": 0.9933,
        "vectorSimilarityCorrelation": 0.9958,
        "vectorSimilarityCorrelationNoStd": 0.9959,
        "computeVectorSimilarityRobust": 0.9898,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9958,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9958,
        "computeVectorSimilarityMetricLike": 0.9741,
        "computeVectorSimilarityTunable": 0.9938,
        "computeVectorSimilarityVarianceWeighted": 0.9958,
        "madPenalizedRelativeAgreementSimilarity": 0.9967,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9973,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9973,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999,
        "itakuraSaitoDistance": 0.0006,
        "vectorSimilarityItakuraSaito": 0.9994
      }
    },
    {
      "testCase": "Scale Invariance",
      "baseVec": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "scaleVec": [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        1000
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.0005,
        "manhattanSimilarity": 0.0002,
        "gowerSimilarity": 0,
        "soergelSimilarity": 0.01,
        "kulczynskiSimilarity": 0.01,
        "lorentzianSimilarity": 0.0161,
        "weightedMinkowskiSimilarity": 0.0005,
        "canberraSimilarity": 0.505,
        "chebyshevSimilarity": 0.001,
        "intersectionSimilarity": 0.0198,
        "waveHedgesSimilarity": 0.0917,
        "sorensenSimilarity": 0.0198,
        "motykaSimilarity": 0.01,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 1,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.0002,
        "normalizedNeymanChiSquareSimilarity": 0,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0,
        "normalizedSquaredChiSquareSimilarity": 0.0002,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 1,
        "normalizedMatusitaSimilarity": 1,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.01,
        "jaccardSimilarityRealValued": 0.01,
        "computeVectorSimilarityMeanStdPenalized": 0.505,
        "vectorSimilarityCorrelation": 0.505,
        "vectorSimilarityCorrelationNoStd": 0.505,
        "computeVectorSimilarityRobust": 0.3781,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.0198,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.0198,
        "computeVectorSimilarityMetricLike": 0.0016,
        "computeVectorSimilarityTunable": 0.3589,
        "computeVectorSimilarityVarianceWeighted": 0.505,
        "madPenalizedRelativeAgreementSimilarity": 0.505,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.505,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.505,
        "polynomialKernelSimilarity": 0.9975,
        "rbfKernelSimilarity": 0,
        "itakuraSaitoDistance": 36.1517,
        "vectorSimilarityItakuraSaito": 0.0269
      }
    },
    {
      "testCase": "Sparse Vectors",
      "sparseVecA": [
        1,
        0,
        0,
        0,
        5,
        0,
        0,
        8,
        0,
        10
      ],
      "sparseVecB": [
        0,
        0,
        3,
        0,
        5,
        0,
        7,
        0,
        9,
        0
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 0.3627,
        "normalizedCosineSimilarity": 0.5708,
        "euclideanSimilarity": 0.0542,
        "manhattanSimilarity": 0.0256,
        "gowerSimilarity": 0.4,
        "soergelSimilarity": 0.1163,
        "kulczynskiSimilarity": 0.1163,
        "lorentzianSimilarity": 0.0829,
        "weightedMinkowskiSimilarity": 0.0542,
        "canberraSimilarity": 0.5385,
        "chebyshevSimilarity": 0.0909,
        "intersectionSimilarity": 0.2083,
        "waveHedgesSimilarity": 0.1429,
        "sorensenSimilarity": 0.2083,
        "motykaSimilarity": 0.1163,
        "kullbackLeiblerSimilarity": 0,
        "jeffreysSimilarity": 0,
        "kSimilarity": 0.6457,
        "topsoeSimilarity": 0.4768,
        "normalizedPearsonChiSquareSimilarity": 0,
        "normalizedNeymanChiSquareSimilarity": 0,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0,
        "normalizedSquaredChiSquareSimilarity": 0.0256,
        "fidelitySimilarity": 0.2083,
        "hellingerSimilarity": 0.1102,
        "normalizedMatusitaSimilarity": 0.1102,
        "normalizedSquaredChordSimilarity": 0.2083,
        "jaccardSimilarityBinary": 0.1429,
        "jaccardSimilarityWeighted": 0.1163,
        "jaccardSimilarityRealValued": 0.1163,
        "computeVectorSimilarityMeanStdPenalized": 0.5644,
        "vectorSimilarityCorrelation": 0.6246,
        "vectorSimilarityCorrelationNoStd": 0.7,
        "computeVectorSimilarityRobust": 0.625,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.2735,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.4,
        "computeVectorSimilarityMetricLike": 0.1216,
        "computeVectorSimilarityTunable": 0.5857,
        "computeVectorSimilarityVarianceWeighted": 0.5572,
        "madPenalizedRelativeAgreementSimilarity": 0.5,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.5,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.5,
        "polynomialKernelSimilarity": 0.0215,
        "rbfKernelSimilarity": 0.0478,
        "itakuraSaitoDistance": null,
        "vectorSimilarityItakuraSaito": 0
      }
    },
    {
      "testCase": "High Dynamic Range",
      "highRangeVecA": [
        1e-9,
        0.000001,
        0.001,
        1,
        1000,
        1000000,
        1000000000
      ],
      "highRangeVecB": [
        1.1e-9,
        0.0000011,
        0.0011,
        1.1,
        1100,
        1100000,
        1100000000
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0,
        "manhattanSimilarity": 0,
        "gowerSimilarity": 0.5571,
        "soergelSimilarity": 0.9091,
        "kulczynskiSimilarity": 0.9091,
        "lorentzianSimilarity": 0.0281,
        "weightedMinkowskiSimilarity": 0,
        "canberraSimilarity": 0.9545,
        "chebyshevSimilarity": 0,
        "intersectionSimilarity": 0.9524,
        "waveHedgesSimilarity": 0.6111,
        "sorensenSimilarity": 0.9524,
        "motykaSimilarity": 0.9091,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 1,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0,
        "normalizedNeymanChiSquareSimilarity": 0,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0,
        "normalizedSquaredChiSquareSimilarity": 0,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 1,
        "normalizedMatusitaSimilarity": 1,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9091,
        "jaccardSimilarityRealValued": 0.9091,
        "computeVectorSimilarityMeanStdPenalized": 0.9545,
        "vectorSimilarityCorrelation": 0.9545,
        "vectorSimilarityCorrelationNoStd": 0.9545,
        "computeVectorSimilarityRobust": 0.8958,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9524,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9524,
        "computeVectorSimilarityMetricLike": 0.7488,
        "computeVectorSimilarityTunable": 0.9326,
        "computeVectorSimilarityVarianceWeighted": 0.9545,
        "madPenalizedRelativeAgreementSimilarity": 0.9545,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9545,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9545,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0,
        "itakuraSaitoDistance": 0.0308,
        "vectorSimilarityItakuraSaito": 0.9701
      }
    }
  ],
  "noiseResilienceLevelsTest": {
    "baseVector": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "noiseLevels": {
      "1": {
        "noisyVector": [
          0.9395,
          2.2453,
          2.8328,
          3.6941,
          4.5357,
          6.0897,
          7.1322,
          7.5926,
          9.3408,
          10.1252
        ],
        "pearsonCorrelationSimilarity": 0.998,
        "normalizedCosineSimilarity": 0.9995,
        "euclideanSimilarity": 0.5403,
        "manhattanSimilarity": 0.2995,
        "gowerSimilarity": 0.7662,
        "soergelSimilarity": 0.9582,
        "kulczynskiSimilarity": 0.9582,
        "lorentzianSimilarity": 0.3285,
        "weightedMinkowskiSimilarity": 0.5403,
        "canberraSimilarity": 0.9734,
        "chebyshevSimilarity": 0.6829,
        "intersectionSimilarity": 0.9787,
        "waveHedgesSimilarity": 0.6545,
        "sorensenSimilarity": 0.9787,
        "motykaSimilarity": 0.9582,
        "kullbackLeiblerSimilarity": 0.9987,
        "jeffreysSimilarity": 0.9973,
        "kSimilarity": 0.9997,
        "topsoeSimilarity": 0.9993,
        "normalizedPearsonChiSquareSimilarity": 0.8673,
        "normalizedNeymanChiSquareSimilarity": 0.8706,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.7683,
        "normalizedSquaredChiSquareSimilarity": 0.93,
        "fidelitySimilarity": 0.9997,
        "hellingerSimilarity": 0.9817,
        "normalizedMatusitaSimilarity": 0.9817,
        "normalizedSquaredChordSimilarity": 0.9997,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9582,
        "jaccardSimilarityRealValued": 0.9582,
        "computeVectorSimilarityMeanStdPenalized": 0.9615,
        "vectorSimilarityCorrelation": 0.9728,
        "vectorSimilarityCorrelationNoStd": 0.9736,
        "computeVectorSimilarityRobust": 0.9384,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9717,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9726,
        "computeVectorSimilarityMetricLike": 0.8459,
        "computeVectorSimilarityTunable": 0.9607,
        "computeVectorSimilarityVarianceWeighted": 0.9728,
        "madPenalizedRelativeAgreementSimilarity": 0.9628,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9726,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9733,
        "polynomialKernelSimilarity": 0.9981,
        "rbfKernelSimilarity": 0.9928,
        "itakuraSaitoDistance": 0.0207,
        "vectorSimilarityItakuraSaito": 0.9797
      },
      "2": {
        "noisyVector": [
          0.5391,
          2.4259,
          3.4749,
          4.8619,
          4.123,
          5.5848,
          7.8967,
          7.1946,
          8.4689,
          9.6508
        ],
        "pearsonCorrelationSimilarity": 0.9875,
        "normalizedCosineSimilarity": 0.9974,
        "euclideanSimilarity": 0.329,
        "manhattanSimilarity": 0.1409,
        "gowerSimilarity": 0.3902,
        "soergelSimilarity": 0.8942,
        "kulczynskiSimilarity": 0.8942,
        "lorentzianSimilarity": 0.1761,
        "weightedMinkowskiSimilarity": 0.329,
        "canberraSimilarity": 0.9208,
        "chebyshevSimilarity": 0.5272,
        "intersectionSimilarity": 0.9442,
        "waveHedgesSimilarity": 0.3995,
        "sorensenSimilarity": 0.9442,
        "motykaSimilarity": 0.8942,
        "kullbackLeiblerSimilarity": 0.9905,
        "jeffreysSimilarity": 0.9815,
        "kSimilarity": 0.9977,
        "topsoeSimilarity": 0.9953,
        "normalizedPearsonChiSquareSimilarity": 0.4669,
        "normalizedNeymanChiSquareSimilarity": 0.5035,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.3197,
        "normalizedSquaredChiSquareSimilarity": 0.6597,
        "fidelitySimilarity": 0.9976,
        "hellingerSimilarity": 0.9515,
        "normalizedMatusitaSimilarity": 0.9515,
        "normalizedSquaredChordSimilarity": 0.9976,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.8942,
        "jaccardSimilarityRealValued": 0.8942,
        "computeVectorSimilarityMeanStdPenalized": 0.8831,
        "vectorSimilarityCorrelation": 0.9166,
        "vectorSimilarityCorrelationNoStd": 0.9248,
        "computeVectorSimilarityRobust": 0.8459,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9017,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.914,
        "computeVectorSimilarityMetricLike": 0.618,
        "computeVectorSimilarityTunable": 0.8894,
        "computeVectorSimilarityVarianceWeighted": 0.9146,
        "madPenalizedRelativeAgreementSimilarity": 0.9194,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9345,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9374,
        "polynomialKernelSimilarity": 0.9895,
        "rbfKernelSimilarity": 0.9593,
        "itakuraSaitoDistance": 0.3205,
        "vectorSimilarityItakuraSaito": 0.7573
      },
      "5": {
        "noisyVector": [
          2.7245,
          3.0521,
          1.9823,
          1.9181,
          4.687,
          5.5792,
          5.6917,
          8.9433,
          10.0247,
          11.7389
        ],
        "pearsonCorrelationSimilarity": 0.963,
        "normalizedCosineSimilarity": 0.9906,
        "euclideanSimilarity": 0.198,
        "manhattanSimilarity": 0.0792,
        "gowerSimilarity": 0.1323,
        "soergelSimilarity": 0.8109,
        "kulczynskiSimilarity": 0.8109,
        "lorentzianSimilarity": 0.1192,
        "weightedMinkowskiSimilarity": 0.198,
        "canberraSimilarity": 0.8629,
        "chebyshevSimilarity": 0.3245,
        "intersectionSimilarity": 0.8956,
        "waveHedgesSimilarity": 0.2847,
        "sorensenSimilarity": 0.8956,
        "motykaSimilarity": 0.8109,
        "kullbackLeiblerSimilarity": 0.9581,
        "jeffreysSimilarity": 0.919,
        "kSimilarity": 0.9893,
        "topsoeSimilarity": 0.9789,
        "normalizedPearsonChiSquareSimilarity": 0.1652,
        "normalizedNeymanChiSquareSimilarity": 0.1475,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.0845,
        "normalizedSquaredChiSquareSimilarity": 0.2972,
        "fidelitySimilarity": 0.9891,
        "hellingerSimilarity": 0.8956,
        "normalizedMatusitaSimilarity": 0.8956,
        "normalizedSquaredChordSimilarity": 0.9891,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.8109,
        "jaccardSimilarityRealValued": 0.8109,
        "computeVectorSimilarityMeanStdPenalized": 0.8087,
        "vectorSimilarityCorrelation": 0.8533,
        "vectorSimilarityCorrelationNoStd": 0.8744,
        "computeVectorSimilarityRobust": 0.7702,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.8047,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.8411,
        "computeVectorSimilarityMetricLike": 0.4428,
        "computeVectorSimilarityTunable": 0.8176,
        "computeVectorSimilarityVarianceWeighted": 0.8475,
        "madPenalizedRelativeAgreementSimilarity": 0.8815,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9086,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9162,
        "polynomialKernelSimilarity": 0.9629,
        "rbfKernelSimilarity": 0.8487,
        "itakuraSaitoDistance": 0.9484,
        "vectorSimilarityItakuraSaito": 0.5133
      },
      "0.1": {
        "noisyVector": [
          1.0329,
          2.0379,
          2.9539,
          3.986,
          5.0085,
          6.0174,
          7.042,
          7.9681,
          9.0046,
          10.0483
        ],
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.9077,
        "manhattanSimilarity": 0.7791,
        "gowerSimilarity": 0.9717,
        "soergelSimilarity": 0.9949,
        "kulczynskiSimilarity": 0.9949,
        "lorentzianSimilarity": 0.7822,
        "weightedMinkowskiSimilarity": 0.9077,
        "canberraSimilarity": 0.9955,
        "chebyshevSimilarity": 0.9539,
        "intersectionSimilarity": 0.9974,
        "waveHedgesSimilarity": 0.9182,
        "sorensenSimilarity": 0.9974,
        "motykaSimilarity": 0.9949,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 0.9999,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.9968,
        "normalizedNeymanChiSquareSimilarity": 0.9968,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9936,
        "normalizedSquaredChiSquareSimilarity": 0.9984,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 0.9974,
        "normalizedMatusitaSimilarity": 0.9974,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9949,
        "jaccardSimilarityRealValued": 0.9949,
        "computeVectorSimilarityMeanStdPenalized": 0.9918,
        "vectorSimilarityCorrelation": 0.9955,
        "vectorSimilarityCorrelationNoStd": 0.9955,
        "computeVectorSimilarityRobust": 0.9891,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9955,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9955,
        "computeVectorSimilarityMetricLike": 0.9722,
        "computeVectorSimilarityTunable": 0.9933,
        "computeVectorSimilarityVarianceWeighted": 0.9955,
        "madPenalizedRelativeAgreementSimilarity": 0.997,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9978,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9978,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999,
        "itakuraSaitoDistance": 0.0009,
        "vectorSimilarityItakuraSaito": 0.9991
      },
      "0.5": {
        "noisyVector": [
          0.8369,
          1.9402,
          2.8802,
          3.9873,
          5.042,
          6.2275,
          7.0535,
          8.0429,
          9.1339,
          9.9526
        ],
        "pearsonCorrelationSimilarity": 0.9998,
        "normalizedCosineSimilarity": 0.9999,
        "euclideanSimilarity": 0.7403,
        "manhattanSimilarity": 0.5256,
        "gowerSimilarity": 0.9097,
        "soergelSimilarity": 0.9837,
        "kulczynskiSimilarity": 0.9837,
        "lorentzianSimilarity": 0.5414,
        "weightedMinkowskiSimilarity": 0.7403,
        "canberraSimilarity": 0.9838,
        "chebyshevSimilarity": 0.8147,
        "intersectionSimilarity": 0.9918,
        "waveHedgesSimilarity": 0.7614,
        "sorensenSimilarity": 0.9918,
        "motykaSimilarity": 0.9837,
        "kullbackLeiblerSimilarity": 0.9996,
        "jeffreysSimilarity": 0.9991,
        "kSimilarity": 0.9999,
        "topsoeSimilarity": 0.9998,
        "normalizedPearsonChiSquareSimilarity": 0.9523,
        "normalizedNeymanChiSquareSimilarity": 0.9569,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9131,
        "normalizedSquaredChiSquareSimilarity": 0.9769,
        "fidelitySimilarity": 0.9999,
        "hellingerSimilarity": 0.9896,
        "normalizedMatusitaSimilarity": 0.9896,
        "normalizedSquaredChordSimilarity": 0.9999,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9837,
        "jaccardSimilarityRealValued": 0.9837,
        "computeVectorSimilarityMeanStdPenalized": 0.9665,
        "vectorSimilarityCorrelation": 0.9836,
        "vectorSimilarityCorrelationNoStd": 0.9843,
        "computeVectorSimilarityRobust": 0.9642,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9826,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9835,
        "computeVectorSimilarityMetricLike": 0.9056,
        "computeVectorSimilarityTunable": 0.9766,
        "computeVectorSimilarityVarianceWeighted": 0.9826,
        "madPenalizedRelativeAgreementSimilarity": 0.9914,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9942,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9942,
        "polynomialKernelSimilarity": 0.9997,
        "rbfKernelSimilarity": 0.9988,
        "itakuraSaitoDistance": 0.019,
        "vectorSimilarityItakuraSaito": 0.9813
      }
    }
  },
  "nonLinearAnalysis": {
    "detailedResults": [
      {
        "type": "quadratic",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "quadratic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.1764
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.114
          },
          "euclideanSimilarity": {
            "score": 0.5035,
            "timeMs": 0.0863
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.1307
          },
          "rbfKernelSimilarity": {
            "score": 0.9903,
            "timeMs": 0.0795
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9507,
            "timeMs": 0.1414
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9613,
            "timeMs": 0.0628
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9694,
            "timeMs": 0.1477
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9735,
            "timeMs": 0.0641
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9975,
            "timeMs": 0.5741
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9984,
            "timeMs": 0.276
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9984,
            "timeMs": 0.1702
          }
        }
      },
      {
        "type": "quadratic",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "quadratic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0229
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0282
          },
          "euclideanSimilarity": {
            "score": 0.1608,
            "timeMs": 0.0122
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0543
          },
          "rbfKernelSimilarity": {
            "score": 0.7616,
            "timeMs": 0.0107
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9269,
            "timeMs": 0.0272
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9432,
            "timeMs": 0.0194
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9496,
            "timeMs": 0.028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9577,
            "timeMs": 0.0211
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9895,
            "timeMs": 0.0501
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9932,
            "timeMs": 0.0443
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9933,
            "timeMs": 0.058
          }
        }
      },
      {
        "type": "quadratic",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "quadratic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0076
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0084
          },
          "euclideanSimilarity": {
            "score": 0.6275,
            "timeMs": 0.0133
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0219
          },
          "rbfKernelSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9863,
            "timeMs": 0.0108
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9874,
            "timeMs": 0.0099
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9882,
            "timeMs": 0.0115
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.989,
            "timeMs": 0.0152
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9987,
            "timeMs": 0.019
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0132
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9991,
            "timeMs": 0.0135
          }
        }
      },
      {
        "type": "quadratic",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "quadratic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0091
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0079
          },
          "euclideanSimilarity": {
            "score": 0.2173,
            "timeMs": 0.0046
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0362
          },
          "rbfKernelSimilarity": {
            "score": 0.8783,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9117,
            "timeMs": 0.0104
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9335,
            "timeMs": 0.0096
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9388,
            "timeMs": 0.0109
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9503,
            "timeMs": 0.0101
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.99,
            "timeMs": 0.0229
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9936,
            "timeMs": 0.0136
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9937,
            "timeMs": 0.0122
          }
        }
      },
      {
        "type": "quadratic",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "quadratic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.7334,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.007
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9652,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9699,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9724,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9755,
            "timeMs": 0.0026
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0064
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0043
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9986,
            "timeMs": 0.0038
          }
        }
      },
      {
        "type": "quadratic",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "quadratic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.4742,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.9878,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9786,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9801,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9804,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9816,
            "timeMs": 0.0026
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9881,
            "timeMs": 0.0056
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9925,
            "timeMs": 0.0041
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9926,
            "timeMs": 0.0037
          }
        }
      },
      {
        "type": "cubic",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cubic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0114
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.012
          },
          "euclideanSimilarity": {
            "score": 0.4993,
            "timeMs": 0.0065
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0111
          },
          "rbfKernelSimilarity": {
            "score": 0.99,
            "timeMs": 0.0063
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9411,
            "timeMs": 0.0178
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.955,
            "timeMs": 0.018
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9654,
            "timeMs": 0.0199
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9707,
            "timeMs": 0.0188
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0321
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0524
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9997,
            "timeMs": 0.0242
          }
        }
      },
      {
        "type": "cubic",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cubic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0115
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.012
          },
          "euclideanSimilarity": {
            "score": 0.1845,
            "timeMs": 0.0067
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0117
          },
          "rbfKernelSimilarity": {
            "score": 0.8225,
            "timeMs": 0.0064
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8972,
            "timeMs": 0.0287
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9261,
            "timeMs": 0.0192
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9323,
            "timeMs": 0.0198
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9474,
            "timeMs": 0.0203
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0301
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0335
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9989,
            "timeMs": 0.0222
          }
        }
      },
      {
        "type": "cubic",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cubic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0076
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0069
          },
          "euclideanSimilarity": {
            "score": 0.5765,
            "timeMs": 0.0045
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0093
          },
          "rbfKernelSimilarity": {
            "score": 0.9946,
            "timeMs": 0.0045
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9185,
            "timeMs": 0.0217
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9413,
            "timeMs": 0.0097
          },
          "vectorSimilarityCorrelation": {
            "score": 0.944,
            "timeMs": 0.0216
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9566,
            "timeMs": 0.0107
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0175
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0136
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9998,
            "timeMs": 0.0123
          }
        }
      },
      {
        "type": "cubic",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cubic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0079
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0073
          },
          "euclideanSimilarity": {
            "score": 0.2545,
            "timeMs": 0.0046
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.008
          },
          "rbfKernelSimilarity": {
            "score": 0.9178,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8937,
            "timeMs": 0.0095
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9236,
            "timeMs": 0.0093
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9346,
            "timeMs": 0.0103
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9486,
            "timeMs": 0.01
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0165
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.999,
            "timeMs": 0.0136
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.999,
            "timeMs": 0.0288
          }
        }
      },
      {
        "type": "cubic",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cubic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0025
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.7405,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9528,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9615,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9672,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9719,
            "timeMs": 0.0026
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0054
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0039
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9997,
            "timeMs": 0.0036
          }
        }
      },
      {
        "type": "cubic",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cubic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.4799,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.9883,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8352,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8911,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9034,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9287,
            "timeMs": 0.0036
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0051
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0039
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9995,
            "timeMs": 0.0037
          }
        }
      },
      {
        "type": "exponential",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "exponential [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0104
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0199
          },
          "euclideanSimilarity": {
            "score": 0.5123,
            "timeMs": 0.007
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0118
          },
          "rbfKernelSimilarity": {
            "score": 0.991,
            "timeMs": 0.007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9912,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9915,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9915,
            "timeMs": 0.0192
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9917,
            "timeMs": 0.0265
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0301
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0227
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9971,
            "timeMs": 0.0229
          }
        }
      },
      {
        "type": "exponential",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "exponential [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0109
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0114
          },
          "euclideanSimilarity": {
            "score": 0.1542,
            "timeMs": 0.0161
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0.7402,
            "timeMs": 0.0269
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9402,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9491,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9519,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9573,
            "timeMs": 0.005
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9815,
            "timeMs": 0.0281
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9888,
            "timeMs": 0.0208
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.989,
            "timeMs": 0.0318
          }
        }
      },
      {
        "type": "exponential",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "exponential [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0083
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0071
          },
          "euclideanSimilarity": {
            "score": 0.5699,
            "timeMs": 0.0075
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0086
          },
          "rbfKernelSimilarity": {
            "score": 0.9943,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9919,
            "timeMs": 0.0105
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9921,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9921,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9923,
            "timeMs": 0.0027
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0268
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9977,
            "timeMs": 0.011
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9977,
            "timeMs": 0.0065
          }
        }
      },
      {
        "type": "exponential",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "exponential [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0082
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0084
          },
          "euclideanSimilarity": {
            "score": 0.2198,
            "timeMs": 0.0074
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0071
          },
          "rbfKernelSimilarity": {
            "score": 0.8816,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9602,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9642,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9651,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9681,
            "timeMs": 0.0031
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.984,
            "timeMs": 0.0168
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.99,
            "timeMs": 0.0076
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9902,
            "timeMs": 0.0068
          }
        }
      },
      {
        "type": "exponential",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "exponential [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0031
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.7523,
            "timeMs": 0.0375
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0045
          },
          "rbfKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9902,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9905,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9906,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9909,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0062
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0027
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9978,
            "timeMs": 0.0023
          }
        }
      },
      {
        "type": "exponential",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "exponential [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.003
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.4135,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9801,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9391,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9483,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9507,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9566,
            "timeMs": 0.0009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9667,
            "timeMs": 0.005
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9792,
            "timeMs": 0.0025
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9799,
            "timeMs": 0.0023
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "logarithmic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0119
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0118
          },
          "euclideanSimilarity": {
            "score": 0.5384,
            "timeMs": 0.006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0.9927,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.925,
            "timeMs": 0.0614
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9431,
            "timeMs": 0.0296
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9449,
            "timeMs": 0.0492
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9551,
            "timeMs": 0.0197
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.977,
            "timeMs": 0.0338
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9844,
            "timeMs": 0.0421
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9847,
            "timeMs": 0.0257
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "logarithmic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9819,
            "timeMs": 0.0269
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9503,
            "timeMs": 0.0213
          },
          "euclideanSimilarity": {
            "score": 0.1767,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 0.9291,
            "timeMs": 0.0087
          },
          "rbfKernelSimilarity": {
            "score": 0.8048,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7252,
            "timeMs": 0.0185
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7973,
            "timeMs": 0.0173
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8117,
            "timeMs": 0.0193
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8513,
            "timeMs": 0.02
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8717,
            "timeMs": 0.0559
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9045,
            "timeMs": 0.0237
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9141,
            "timeMs": 0.0223
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "logarithmic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9994,
            "timeMs": 0.013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0061
          },
          "euclideanSimilarity": {
            "score": 0.6376,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.9968,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9617,
            "timeMs": 0.0099
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9652,
            "timeMs": 0.0096
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9659,
            "timeMs": 0.0103
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9684,
            "timeMs": 0.0099
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9665,
            "timeMs": 0.086
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9754,
            "timeMs": 0.0182
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.976,
            "timeMs": 0.0154
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "logarithmic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9781,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.961,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.2157,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9147,
            "timeMs": 0.0063
          },
          "rbfKernelSimilarity": {
            "score": 0.8762,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7268,
            "timeMs": 0.0098
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7924,
            "timeMs": 0.0205
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8009,
            "timeMs": 0.0102
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.841,
            "timeMs": 0.0099
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8401,
            "timeMs": 0.0153
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8695,
            "timeMs": 0.0167
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8824,
            "timeMs": 0.0167
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "logarithmic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.7111,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9956,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9466,
            "timeMs": 0.0046
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9532,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9544,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.959,
            "timeMs": 0.0052
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9671,
            "timeMs": 0.0072
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9777,
            "timeMs": 0.0038
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9784,
            "timeMs": 0.0153
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "logarithmic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9804,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9786,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.3717,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.925,
            "timeMs": 0.009
          },
          "rbfKernelSimilarity": {
            "score": 0.9718,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6867,
            "timeMs": 0.005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7639,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelation": {
            "score": 0.801,
            "timeMs": 0.0129
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8374,
            "timeMs": 0.0071
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8927,
            "timeMs": 0.015
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9095,
            "timeMs": 0.0089
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9143,
            "timeMs": 0.0071
          }
        }
      },
      {
        "type": "sqrt",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sqrt [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0054
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9959,
            "timeMs": 0.0053
          },
          "euclideanSimilarity": {
            "score": 0.5137,
            "timeMs": 0.0047
          },
          "polynomialKernelSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0435
          },
          "rbfKernelSimilarity": {
            "score": 0.9911,
            "timeMs": 0.0054
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9773,
            "timeMs": 0.036
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9782,
            "timeMs": 0.0345
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9783,
            "timeMs": 0.0386
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9791,
            "timeMs": 0.0381
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9794,
            "timeMs": 0.0824
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9859,
            "timeMs": 0.0439
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9862,
            "timeMs": 0.0442
          }
        }
      },
      {
        "type": "sqrt",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sqrt [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9864,
            "timeMs": 0.0059
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9071,
            "timeMs": 0.0051
          },
          "euclideanSimilarity": {
            "score": 0.1586,
            "timeMs": 0.0064
          },
          "polynomialKernelSimilarity": {
            "score": 0.9466,
            "timeMs": 0.0209
          },
          "rbfKernelSimilarity": {
            "score": 0.7548,
            "timeMs": 0.0051
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8382,
            "timeMs": 0.0367
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8728,
            "timeMs": 0.0357
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8796,
            "timeMs": 0.0446
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8986,
            "timeMs": 0.0379
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9029,
            "timeMs": 0.0563
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9269,
            "timeMs": 0.0429
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9321,
            "timeMs": 0.0396
          }
        }
      },
      {
        "type": "sqrt",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sqrt [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9941,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.5492,
            "timeMs": 0.0026
          },
          "polynomialKernelSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0111
          },
          "rbfKernelSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9752,
            "timeMs": 0.0207
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9761,
            "timeMs": 0.016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9762,
            "timeMs": 0.0203
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.977,
            "timeMs": 0.0179
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9732,
            "timeMs": 0.0295
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9817,
            "timeMs": 0.023
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9822,
            "timeMs": 0.0215
          }
        }
      },
      {
        "type": "sqrt",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sqrt [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9858,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.895,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.2081,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.9443,
            "timeMs": 0.0097
          },
          "rbfKernelSimilarity": {
            "score": 0.8651,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8318,
            "timeMs": 0.0193
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.866,
            "timeMs": 0.0194
          },
          "vectorSimilarityCorrelation": {
            "score": 0.876,
            "timeMs": 0.0217
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8934,
            "timeMs": 0.024
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.874,
            "timeMs": 0.0894
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9026,
            "timeMs": 0.0531
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9113,
            "timeMs": 0.025
          }
        }
      },
      {
        "type": "sqrt",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sqrt [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.8001,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9806,
            "timeMs": 0.0068
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9812,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9812,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9817,
            "timeMs": 0.0043
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9805,
            "timeMs": 0.0057
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9848,
            "timeMs": 0.4024
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.985,
            "timeMs": 0.0058
          }
        }
      },
      {
        "type": "sqrt",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sqrt [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9913,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9433,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4203,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9661,
            "timeMs": 0.0061
          },
          "rbfKernelSimilarity": {
            "score": 0.9812,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8367,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8691,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8782,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8961,
            "timeMs": 0.0027
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9078,
            "timeMs": 0.0035
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9266,
            "timeMs": 0.0036
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9308,
            "timeMs": 0.003
          }
        }
      },
      {
        "type": "sin",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sin [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.995,
            "timeMs": 0.0025
          },
          "euclideanSimilarity": {
            "score": 0.4997,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.9798,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0.99,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8168,
            "timeMs": 0.0183
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8658,
            "timeMs": 0.017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8576,
            "timeMs": 0.0194
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8907,
            "timeMs": 0.0189
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9225,
            "timeMs": 0.0213
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9443,
            "timeMs": 0.0249
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9477,
            "timeMs": 0.0239
          }
        }
      },
      {
        "type": "sin",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sin [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8963,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8963,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.1627,
            "timeMs": 0.0023
          },
          "polynomialKernelSimilarity": {
            "score": 0.6333,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0.7672,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5213,
            "timeMs": 0.0179
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5732,
            "timeMs": 0.0176
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6454,
            "timeMs": 0.0202
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7075,
            "timeMs": 0.0187
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7019,
            "timeMs": 0.0173
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7292,
            "timeMs": 0.0243
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7628,
            "timeMs": 0.0224
          }
        }
      },
      {
        "type": "sin",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sin [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.5796,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9788,
            "timeMs": 0.0415
          },
          "rbfKernelSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.852,
            "timeMs": 0.0097
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8811,
            "timeMs": 0.009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.89,
            "timeMs": 0.0099
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9045,
            "timeMs": 0.0099
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9095,
            "timeMs": 0.0092
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9258,
            "timeMs": 0.0121
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9296,
            "timeMs": 0.0108
          }
        }
      },
      {
        "type": "sin",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sin [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8973,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9002,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.2158,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.6414,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0.8762,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5195,
            "timeMs": 0.0092
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5733,
            "timeMs": 0.0088
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6254,
            "timeMs": 0.0101
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6989,
            "timeMs": 0.0113
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6242,
            "timeMs": 0.0096
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6612,
            "timeMs": 0.012
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7143,
            "timeMs": 0.0113
          }
        }
      },
      {
        "type": "sin",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sin [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.996,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.996,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.7429,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9857,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8929,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9043,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9074,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9157,
            "timeMs": 0.0024
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9034,
            "timeMs": 0.0029
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9201,
            "timeMs": 0.0033
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9242,
            "timeMs": 0.003
          }
        }
      },
      {
        "type": "sin",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sin [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8891,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9092,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.3068,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.6325,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.9502,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5295,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5908,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6202,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6912,
            "timeMs": 0.0026
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7543,
            "timeMs": 0.0028
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7783,
            "timeMs": 0.0033
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8012,
            "timeMs": 0.0032
          }
        }
      },
      {
        "type": "cos",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cos [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.5024,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.9817,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0.9902,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.878,
            "timeMs": 0.0177
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.902,
            "timeMs": 0.0189
          },
          "vectorSimilarityCorrelation": {
            "score": 0.908,
            "timeMs": 0.0198
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9206,
            "timeMs": 0.019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9235,
            "timeMs": 0.0181
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9439,
            "timeMs": 0.0718
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9472,
            "timeMs": 0.0236
          }
        }
      },
      {
        "type": "cos",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cos [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8967,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9036,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.1645,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.6346,
            "timeMs": 0.0081
          },
          "rbfKernelSimilarity": {
            "score": 0.7726,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.522,
            "timeMs": 0.0385
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5791,
            "timeMs": 0.0175
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6533,
            "timeMs": 0.0208
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.717,
            "timeMs": 0.0438
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6873,
            "timeMs": 0.0165
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7211,
            "timeMs": 0.0241
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7618,
            "timeMs": 0.0423
          }
        }
      },
      {
        "type": "cos",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cos [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.995,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.5794,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9807,
            "timeMs": 0.0064
          },
          "rbfKernelSimilarity": {
            "score": 0.9947,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8548,
            "timeMs": 0.0102
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8881,
            "timeMs": 0.0196
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8954,
            "timeMs": 0.0102
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9125,
            "timeMs": 0.0153
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9268,
            "timeMs": 0.0176
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9462,
            "timeMs": 0.0245
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9492,
            "timeMs": 0.0239
          }
        }
      },
      {
        "type": "cos",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cos [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8792,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.878,
            "timeMs": 0.0026
          },
          "euclideanSimilarity": {
            "score": 0.2125,
            "timeMs": 0.0026
          },
          "polynomialKernelSimilarity": {
            "score": 0.5878,
            "timeMs": 0.0109
          },
          "rbfKernelSimilarity": {
            "score": 0.8717,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5204,
            "timeMs": 0.0208
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5749,
            "timeMs": 0.0173
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6335,
            "timeMs": 0.0193
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7039,
            "timeMs": 0.0176
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6981,
            "timeMs": 0.0152
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7331,
            "timeMs": 0.0264
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7723,
            "timeMs": 0.0598
          }
        }
      },
      {
        "type": "cos",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cos [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9959,
            "timeMs": 0.0102
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9968,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.7773,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9864,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8743,
            "timeMs": 0.0054
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8996,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9063,
            "timeMs": 0.0054
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9203,
            "timeMs": 0.0051
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9491,
            "timeMs": 0.0054
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.959,
            "timeMs": 0.0067
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9602,
            "timeMs": 0.006
          }
        }
      },
      {
        "type": "cos",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cos [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9547,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.964,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.5217,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.8566,
            "timeMs": 0.0055
          },
          "rbfKernelSimilarity": {
            "score": 0.9916,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6793,
            "timeMs": 0.0053
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7544,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7922,
            "timeMs": 0.0281
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8298,
            "timeMs": 0.0051
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8458,
            "timeMs": 0.0056
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8754,
            "timeMs": 0.0065
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8876,
            "timeMs": 0.0057
          }
        }
      },
      {
        "type": "tan",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "tan [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0043
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.004
          },
          "euclideanSimilarity": {
            "score": 0.5047,
            "timeMs": 0.004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0283
          },
          "rbfKernelSimilarity": {
            "score": 0.9904,
            "timeMs": 0.0039
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.833,
            "timeMs": 0.006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8775,
            "timeMs": 0.0113
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8903,
            "timeMs": 0.0105
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9115,
            "timeMs": 0.0335
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9444,
            "timeMs": 0.0336
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9634,
            "timeMs": 0.0304
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9653,
            "timeMs": 0.0228
          }
        }
      },
      {
        "type": "tan",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "tan [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.998,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.998,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.1658,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.992,
            "timeMs": 0.0128
          },
          "rbfKernelSimilarity": {
            "score": 0.7765,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6055,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6988,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelation": {
            "score": 0.72,
            "timeMs": 0.0054
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7861,
            "timeMs": 0.005
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8124,
            "timeMs": 0.0169
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8599,
            "timeMs": 0.0234
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8808,
            "timeMs": 0.0231
          }
        }
      },
      {
        "type": "tan",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "tan [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.6137,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0058
          },
          "rbfKernelSimilarity": {
            "score": 0.996,
            "timeMs": 0.266
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.921,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9377,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelation": {
            "score": 0.938,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.948,
            "timeMs": 0.0028
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9638,
            "timeMs": 0.0108
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9769,
            "timeMs": 0.0129
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9777,
            "timeMs": 0.0112
          }
        }
      },
      {
        "type": "tan",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "tan [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.2145,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.8745,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.575,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6604,
            "timeMs": 0.0266
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6938,
            "timeMs": 0.0053
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7608,
            "timeMs": 0.0022
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7349,
            "timeMs": 0.0129
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7806,
            "timeMs": 0.0057
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.817,
            "timeMs": 0.0048
          }
        }
      },
      {
        "type": "tan",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "tan [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.7933,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0065
          },
          "rbfKernelSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9539,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9574,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9577,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9606,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9709,
            "timeMs": 0.0045
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9809,
            "timeMs": 0.002
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9815,
            "timeMs": 0.0018
          }
        }
      },
      {
        "type": "tan",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "tan [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.3842,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9932,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9746,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5426,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6323,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6273,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.719,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.751,
            "timeMs": 0.0028
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8055,
            "timeMs": 0.0017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8407,
            "timeMs": 0.002
          }
        }
      },
      {
        "type": "csc",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "csc [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.5028,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9903,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9762,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9772,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9773,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9783,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9785,
            "timeMs": 0.0159
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9854,
            "timeMs": 0.0095
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9856,
            "timeMs": 0.0089
          }
        }
      },
      {
        "type": "csc",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "csc [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.1543,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.7404,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8017,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8474,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8625,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8851,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8713,
            "timeMs": 0.013
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9055,
            "timeMs": 0.0084
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9153,
            "timeMs": 0.0078
          }
        }
      },
      {
        "type": "csc",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "csc [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.6024,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9957,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.977,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.978,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.978,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9789,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9776,
            "timeMs": 0.0074
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9853,
            "timeMs": 0.005
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9856,
            "timeMs": 0.0044
          }
        }
      },
      {
        "type": "csc",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "csc [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.2632,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9246,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8589,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8839,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8912,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9055,
            "timeMs": 0.0021
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9021,
            "timeMs": 0.0074
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9279,
            "timeMs": 0.0051
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9335,
            "timeMs": 0.0047
          }
        }
      },
      {
        "type": "csc",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "csc [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.843,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9839,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9845,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9846,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9851,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9912,
            "timeMs": 0.0024
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.994,
            "timeMs": 0.0017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9941,
            "timeMs": 0.0015
          }
        }
      },
      {
        "type": "csc",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "csc [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9932,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9935,
            "timeMs": 0.0003
          },
          "euclideanSimilarity": {
            "score": 0.4148,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9734,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9803,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.813,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8477,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8588,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8791,
            "timeMs": 0.0005
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8662,
            "timeMs": 0.0033
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8942,
            "timeMs": 0.0018
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9036,
            "timeMs": 0.0016
          }
        }
      },
      {
        "type": "sec",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sec [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5073,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.9906,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9717,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9729,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.973,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9741,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9727,
            "timeMs": 0.0147
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9826,
            "timeMs": 0.0091
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.983,
            "timeMs": 0.0085
          }
        }
      },
      {
        "type": "sec",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sec [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1622,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0033
          },
          "rbfKernelSimilarity": {
            "score": 0.7658,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7941,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8402,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8531,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8769,
            "timeMs": 0.0037
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8587,
            "timeMs": 0.0152
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8924,
            "timeMs": 0.0097
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9037,
            "timeMs": 0.0088
          }
        }
      },
      {
        "type": "sec",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sec [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.5813,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9715,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9729,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.973,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9741,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9715,
            "timeMs": 0.0078
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9809,
            "timeMs": 0.0052
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9814,
            "timeMs": 0.0046
          }
        }
      },
      {
        "type": "sec",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sec [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.228,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.8917,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.856,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.883,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8909,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.905,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8988,
            "timeMs": 0.0078
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.924,
            "timeMs": 0.0052
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9298,
            "timeMs": 0.0048
          }
        }
      },
      {
        "type": "sec",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sec [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.7574,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.971,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9724,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9725,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9737,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9638,
            "timeMs": 0.0026
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9724,
            "timeMs": 0.0017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9731,
            "timeMs": 0.0015
          }
        }
      },
      {
        "type": "sec",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sec [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.3757,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9939,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9728,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7999,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.851,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8686,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8914,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9068,
            "timeMs": 0.0026
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9305,
            "timeMs": 0.0019
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9354,
            "timeMs": 0.0016
          }
        }
      },
      {
        "type": "cot",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cot [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.4861,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.9889,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.891,
            "timeMs": 0.0122
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9148,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9162,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9304,
            "timeMs": 0.0036
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9567,
            "timeMs": 0.015
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9727,
            "timeMs": 0.01
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9739,
            "timeMs": 0.009
          }
        }
      },
      {
        "type": "cot",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cot [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1717,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.7925,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6228,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7165,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7143,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7855,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7942,
            "timeMs": 0.0151
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8422,
            "timeMs": 0.022
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8667,
            "timeMs": 0.0102
          }
        }
      },
      {
        "type": "cot",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cot [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.587,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9142,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9322,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9375,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.946,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9572,
            "timeMs": 0.0082
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9717,
            "timeMs": 0.0053
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9728,
            "timeMs": 0.0048
          }
        }
      },
      {
        "type": "cot",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cot [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.2214,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9922,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.8836,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.623,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.719,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7281,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.795,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8567,
            "timeMs": 0.0075
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8979,
            "timeMs": 0.0048
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9104,
            "timeMs": 0.0045
          }
        }
      },
      {
        "type": "cot",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cot [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7584,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7591,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8336,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7965,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8567,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.959,
            "timeMs": 0.0025
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9738,
            "timeMs": 0.0017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9748,
            "timeMs": 0.0015
          }
        }
      },
      {
        "type": "cot",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cot [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9943,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0003
          },
          "euclideanSimilarity": {
            "score": 0.4486,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9775,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.985,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5928,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6741,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7266,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7771,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7259,
            "timeMs": 0.0023
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7634,
            "timeMs": 0.0016
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7985,
            "timeMs": 0.0015
          }
        }
      },
      {
        "type": "asin",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "asin [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5159,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9817,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9912,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7652,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8305,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8289,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8691,
            "timeMs": 0.0036
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8961,
            "timeMs": 0.0143
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9218,
            "timeMs": 0.0097
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9278,
            "timeMs": 0.0094
          }
        }
      },
      {
        "type": "asin",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "asin [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8789,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8789,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1542,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.5801,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.7403,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.504,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5301,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.606,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6753,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.677,
            "timeMs": 0.0143
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7107,
            "timeMs": 0.035
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7531,
            "timeMs": 0.0091
          }
        }
      },
      {
        "type": "asin",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "asin [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9946,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.5792,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9791,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9947,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7611,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8255,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8301,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8687,
            "timeMs": 0.0017
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9345,
            "timeMs": 0.0075
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9561,
            "timeMs": 0.0049
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9587,
            "timeMs": 0.0045
          }
        }
      },
      {
        "type": "asin",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "asin [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9254,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.928,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.2245,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.7298,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.8875,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5187,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5741,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6164,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6914,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7109,
            "timeMs": 0.0072
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7433,
            "timeMs": 0.005
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7786,
            "timeMs": 0.0045
          }
        }
      },
      {
        "type": "asin",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "asin [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.8333,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9301,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9378,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9388,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9446,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.954,
            "timeMs": 0.0026
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9697,
            "timeMs": 0.0016
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9711,
            "timeMs": 0.0016
          }
        }
      },
      {
        "type": "asin",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "asin [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9147,
            "timeMs": 0.0003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9153,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.4038,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.7268,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9784,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5965,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6878,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7424,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7959,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8125,
            "timeMs": 0.0026
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8595,
            "timeMs": 0.0017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8803,
            "timeMs": 0.0018
          }
        }
      },
      {
        "type": "acos",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "acos [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.4958,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9897,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9637,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9659,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9662,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.968,
            "timeMs": 0.0032
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9667,
            "timeMs": 0.0143
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9763,
            "timeMs": 0.0085
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.977,
            "timeMs": 0.008
          }
        }
      },
      {
        "type": "acos",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "acos [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9788,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.889,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.1682,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9172,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.783,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7699,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8205,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8327,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.861,
            "timeMs": 0.0032
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8576,
            "timeMs": 0.0192
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.883,
            "timeMs": 0.0086
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8928,
            "timeMs": 0.0078
          }
        }
      },
      {
        "type": "acos",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "acos [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9961,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.6173,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9649,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9672,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9674,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9693,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9625,
            "timeMs": 0.0075
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9732,
            "timeMs": 0.0051
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.974,
            "timeMs": 0.0047
          }
        }
      },
      {
        "type": "acos",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "acos [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9844,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9221,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.2283,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9388,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.8921,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.799,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8411,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8563,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8772,
            "timeMs": 0.0017
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.86,
            "timeMs": 0.0076
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8868,
            "timeMs": 0.005
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8967,
            "timeMs": 0.0046
          }
        }
      },
      {
        "type": "acos",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "acos [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.7792,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9725,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9736,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9737,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9746,
            "timeMs": 0.0005
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9758,
            "timeMs": 0.0025
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9812,
            "timeMs": 0.0017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9815,
            "timeMs": 0.0024
          }
        }
      },
      {
        "type": "acos",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "acos [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9886,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9642,
            "timeMs": 0.0003
          },
          "euclideanSimilarity": {
            "score": 0.4178,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9555,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9808,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6358,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7278,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6938,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.774,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8628,
            "timeMs": 0.0024
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8825,
            "timeMs": 0.0017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8904,
            "timeMs": 0.0017
          }
        }
      },
      {
        "type": "atan",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "atan [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5047,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9942,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9904,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9443,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9536,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9491,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.957,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9639,
            "timeMs": 0.0138
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9725,
            "timeMs": 0.0096
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9731,
            "timeMs": 0.0087
          }
        }
      },
      {
        "type": "atan",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "atan [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9586,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9587,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1611,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.8422,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.7625,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7107,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7756,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7883,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8283,
            "timeMs": 0.0032
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8155,
            "timeMs": 0.0137
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8436,
            "timeMs": 0.0088
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8595,
            "timeMs": 0.0083
          }
        }
      },
      {
        "type": "atan",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "atan [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.5781,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9938,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9947,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9549,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9582,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9587,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9612,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9552,
            "timeMs": 0.0079
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9655,
            "timeMs": 0.0049
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9665,
            "timeMs": 0.2851
          }
        }
      },
      {
        "type": "atan",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "atan [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9597,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9598,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.2145,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.8471,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.8746,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6996,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7658,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7878,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8258,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8287,
            "timeMs": 0.0076
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8608,
            "timeMs": 0.005
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8759,
            "timeMs": 0.0044
          }
        }
      },
      {
        "type": "atan",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "atan [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7533,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9942,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9666,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9685,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9686,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9702,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9791,
            "timeMs": 0.0027
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9858,
            "timeMs": 0.0018
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.986,
            "timeMs": 0.0016
          }
        }
      },
      {
        "type": "atan",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "atan [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9697,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9713,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.4047,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.8887,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9786,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7244,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7807,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8087,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8341,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8442,
            "timeMs": 0.0027
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8549,
            "timeMs": 0.0019
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8609,
            "timeMs": 0.0018
          }
        }
      },
      {
        "type": "sinh",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sinh [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.5061,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9905,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9749,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9792,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9803,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.983,
            "timeMs": 0.0032
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9994,
            "timeMs": 0.015
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9996,
            "timeMs": 0.011
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9996,
            "timeMs": 0.0115
          }
        }
      },
      {
        "type": "sinh",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sinh [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.1766,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.8046,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9111,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9338,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9409,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9523,
            "timeMs": 0.0032
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0164
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0288
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9986,
            "timeMs": 0.0195
          }
        }
      },
      {
        "type": "sinh",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sinh [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.5875,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9863,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9872,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9878,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9885,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0081
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0055
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9998,
            "timeMs": 0.0052
          }
        }
      },
      {
        "type": "sinh",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sinh [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.2018,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.8552,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9309,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9475,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9498,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9594,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0073
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0053
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9988,
            "timeMs": 0.0052
          }
        }
      },
      {
        "type": "sinh",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sinh [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.727,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9971,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9971,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9971,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9971,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0025
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9993,
            "timeMs": 0.0016
          }
        }
      },
      {
        "type": "sinh",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sinh [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0003
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.4327,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.983,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9819,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9828,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.983,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9838,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9957,
            "timeMs": 0.0027
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9976,
            "timeMs": 0.0014
          }
        }
      },
      {
        "type": "cosh",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cosh [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.4865,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9889,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9944,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9945,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9945,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9946,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0136
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0095
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9995,
            "timeMs": 0.0092
          }
        }
      },
      {
        "type": "cosh",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cosh [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1749,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.8006,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.944,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9552,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9618,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9668,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9969,
            "timeMs": 0.0134
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0095
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9982,
            "timeMs": 0.0091
          }
        }
      },
      {
        "type": "cosh",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cosh [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.5749,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9943,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9944,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9945,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9946,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0077
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0057
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9997,
            "timeMs": 0.0055
          }
        }
      },
      {
        "type": "cosh",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cosh [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.2171,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.8781,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9739,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9762,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9771,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9788,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0079
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0052
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9987,
            "timeMs": 0.0049
          }
        }
      },
      {
        "type": "cosh",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cosh [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.7177,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9946,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9947,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9947,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9948,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0022
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0016
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9999,
            "timeMs": 0.0015
          }
        }
      },
      {
        "type": "cosh",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cosh [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.4099,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9795,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.983,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9838,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9838,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9845,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.997,
            "timeMs": 0.0022
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0016
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9983,
            "timeMs": 0.0014
          }
        }
      },
      {
        "type": "tanh",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "tanh [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.4963,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9888,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.9898,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9316,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9417,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9443,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9497,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.947,
            "timeMs": 0.0138
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9604,
            "timeMs": 0.0085
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9619,
            "timeMs": 0.0079
          }
        }
      },
      {
        "type": "tanh",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "tanh [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9572,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9572,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1718,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.8374,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.7927,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.711,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7763,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7815,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8255,
            "timeMs": 0.0032
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8097,
            "timeMs": 0.0137
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8373,
            "timeMs": 0.0084
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8538,
            "timeMs": 0.0076
          }
        }
      },
      {
        "type": "tanh",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "tanh [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.5853,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9896,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.995,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9409,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9474,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9486,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.953,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9464,
            "timeMs": 0.0076
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9612,
            "timeMs": 0.005
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9628,
            "timeMs": 0.0046
          }
        }
      },
      {
        "type": "tanh",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "tanh [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9326,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9329,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.2253,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.7538,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.8885,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6473,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7254,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7703,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8114,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7376,
            "timeMs": 0.0071
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7768,
            "timeMs": 0.0044
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8103,
            "timeMs": 0.0041
          }
        }
      },
      {
        "type": "tanh",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "tanh [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.999,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.8339,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9727,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9737,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9738,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9746,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9621,
            "timeMs": 0.0022
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9733,
            "timeMs": 0.0016
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9741,
            "timeMs": 0.0014
          }
        }
      },
      {
        "type": "tanh",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "tanh [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9355,
            "timeMs": 0.0003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9516,
            "timeMs": 0.0003
          },
          "euclideanSimilarity": {
            "score": 0.3928,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.7799,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9764,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6095,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6944,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7541,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7958,
            "timeMs": 0.0005
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8357,
            "timeMs": 0.0022
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8538,
            "timeMs": 0.0014
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8637,
            "timeMs": 0.0014
          }
        }
      },
      {
        "type": "circle",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "circle [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.425,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9821,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.9819,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8415,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8814,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8856,
            "timeMs": 0.0069
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9075,
            "timeMs": 0.0068
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9202,
            "timeMs": 0.0335
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9412,
            "timeMs": 0.0226
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9448,
            "timeMs": 0.0195
          }
        }
      },
      {
        "type": "circle",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "circle [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9103,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9118,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.1206,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.6754,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.5875,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5432,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6129,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6669,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7308,
            "timeMs": 0.0066
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7177,
            "timeMs": 0.028
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7491,
            "timeMs": 0.0179
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7827,
            "timeMs": 0.0164
          }
        }
      },
      {
        "type": "circle",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "circle [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9941,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9944,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4723,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9769,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.9876,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8055,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8586,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8674,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8952,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9229,
            "timeMs": 0.0149
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9432,
            "timeMs": 0.0092
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9466,
            "timeMs": 0.0085
          }
        }
      },
      {
        "type": "circle",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "circle [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9129,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9137,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1634,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.6856,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.7694,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5466,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6179,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6705,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7327,
            "timeMs": 0.0032
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7268,
            "timeMs": 0.0139
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7549,
            "timeMs": 0.0129
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7847,
            "timeMs": 0.0086
          }
        }
      },
      {
        "type": "circle",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "circle [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7204,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9866,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7835,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.85,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8807,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9049,
            "timeMs": 0.0009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9391,
            "timeMs": 0.0039
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9606,
            "timeMs": 0.0026
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9629,
            "timeMs": 0.0023
          }
        }
      },
      {
        "type": "circle",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "circle [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9525,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9547,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.4033,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.8329,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9783,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5566,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6485,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6984,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7665,
            "timeMs": 0.0009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.811,
            "timeMs": 0.0038
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8448,
            "timeMs": 0.0023
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.863,
            "timeMs": 0.0022
          }
        }
      },
      {
        "type": "ellipse",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "ellipse [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.4227,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9819,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.9815,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8381,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8793,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8851,
            "timeMs": 0.0069
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9071,
            "timeMs": 0.0065
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.93,
            "timeMs": 0.0309
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.949,
            "timeMs": 0.0204
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9518,
            "timeMs": 0.0177
          }
        }
      },
      {
        "type": "ellipse",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "ellipse [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9034,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9036,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1251,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.6533,
            "timeMs": 0.0046
          },
          "rbfKernelSimilarity": {
            "score": 0.6134,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5344,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6006,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6473,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7159,
            "timeMs": 0.0067
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.719,
            "timeMs": 0.0235
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7516,
            "timeMs": 0.0158
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7855,
            "timeMs": 0.0145
          }
        }
      },
      {
        "type": "ellipse",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "ellipse [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.5403,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9872,
            "timeMs": 0.0068
          },
          "rbfKernelSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8599,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8935,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9059,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9208,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9424,
            "timeMs": 0.0196
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9592,
            "timeMs": 0.0127
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9612,
            "timeMs": 0.012
          }
        }
      },
      {
        "type": "ellipse",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "ellipse [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.916,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.916,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.1848,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.6969,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.8232,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5468,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6218,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6653,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7329,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.74,
            "timeMs": 0.0182
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7753,
            "timeMs": 0.0121
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8067,
            "timeMs": 0.0119
          }
        }
      },
      {
        "type": "ellipse",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "ellipse [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9936,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9938,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.665,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.977,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7465,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.82,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8523,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8812,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9034,
            "timeMs": 0.0047
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9299,
            "timeMs": 0.0028
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9353,
            "timeMs": 0.0025
          }
        }
      },
      {
        "type": "ellipse",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "ellipse [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9312,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9309,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.3618,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.7632,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9694,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5617,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6452,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7032,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7636,
            "timeMs": 0.0015
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7204,
            "timeMs": 0.004
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7593,
            "timeMs": 0.0029
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7962,
            "timeMs": 0.0026
          }
        }
      },
      {
        "type": "spiral_archimedean",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "spiral_archimedean [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.3992,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0064
          },
          "rbfKernelSimilarity": {
            "score": 0.9776,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9581,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9654,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9698,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.973,
            "timeMs": 0.0078
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9853,
            "timeMs": 0.0289
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9904,
            "timeMs": 0.0218
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9905,
            "timeMs": 0.0213
          }
        }
      },
      {
        "type": "spiral_archimedean",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "spiral_archimedean [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.998,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.998,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.1207,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.992,
            "timeMs": 0.0277
          },
          "rbfKernelSimilarity": {
            "score": 0.5881,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8095,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8629,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8673,
            "timeMs": 0.0072
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.897,
            "timeMs": 0.0068
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9395,
            "timeMs": 0.0309
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9568,
            "timeMs": 0.025
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9589,
            "timeMs": 0.0239
          }
        }
      },
      {
        "type": "spiral_archimedean",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "spiral_archimedean [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4893,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9892,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9369,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9518,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9617,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9671,
            "timeMs": 0.0037
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9848,
            "timeMs": 0.0151
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9901,
            "timeMs": 0.0112
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9903,
            "timeMs": 0.0122
          }
        }
      },
      {
        "type": "spiral_archimedean",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "spiral_archimedean [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.1574,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9915,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.7508,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8289,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8727,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8842,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9053,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9241,
            "timeMs": 0.0164
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9455,
            "timeMs": 0.0118
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9489,
            "timeMs": 0.0114
          }
        }
      },
      {
        "type": "spiral_archimedean",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "spiral_archimedean [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6748,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.83,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8861,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9194,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9368,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9884,
            "timeMs": 0.0043
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.992,
            "timeMs": 0.003
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.992,
            "timeMs": 0.0028
          }
        }
      },
      {
        "type": "spiral_archimedean",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "spiral_archimedean [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.3154,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.954,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7771,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8447,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8749,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8997,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9178,
            "timeMs": 0.0038
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9437,
            "timeMs": 0.0028
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9479,
            "timeMs": 0.0025
          }
        }
      },
      {
        "type": "spiral_logarithmic",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "spiral_logarithmic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.4211,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.9813,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9736,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9787,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9823,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9847,
            "timeMs": 0.0075
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0296
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0213
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9999,
            "timeMs": 0.0227
          }
        }
      },
      {
        "type": "spiral_logarithmic",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "spiral_logarithmic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1304,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.6408,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9265,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9449,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9534,
            "timeMs": 0.0073
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9615,
            "timeMs": 0.0074
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.999,
            "timeMs": 0.0255
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0208
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9994,
            "timeMs": 0.0208
          }
        }
      },
      {
        "type": "spiral_logarithmic",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "spiral_logarithmic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.5001,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.9901,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9587,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9679,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9768,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9799,
            "timeMs": 0.0044
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0147
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0112
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9999,
            "timeMs": 0.0116
          }
        }
      },
      {
        "type": "spiral_logarithmic",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "spiral_logarithmic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.1881,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.8299,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9127,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.936,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9475,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9574,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0129
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0103
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9996,
            "timeMs": 0.0097
          }
        }
      },
      {
        "type": "spiral_logarithmic",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "spiral_logarithmic [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6629,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8321,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8878,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9217,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9388,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0037
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0028
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9999,
            "timeMs": 0.0029
          }
        }
      },
      {
        "type": "spiral_logarithmic",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "spiral_logarithmic [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.3465,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.965,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7577,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8406,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8842,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9131,
            "timeMs": 0.0009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0039
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9993,
            "timeMs": 0.003
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9993,
            "timeMs": 0.0028
          }
        }
      },
      {
        "type": "lemniscate",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "lemniscate [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9894,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9894,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.4166,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9589,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.9806,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7081,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7842,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8053,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8455,
            "timeMs": 0.0065
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8559,
            "timeMs": 0.0305
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8903,
            "timeMs": 0.0243
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9021,
            "timeMs": 0.0342
          }
        }
      },
      {
        "type": "lemniscate",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "lemniscate [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8685,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8689,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1259,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.5474,
            "timeMs": 0.0044
          },
          "rbfKernelSimilarity": {
            "score": 0.6175,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4097,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4735,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5761,
            "timeMs": 0.0065
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6403,
            "timeMs": 0.0064
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6163,
            "timeMs": 0.0274
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6492,
            "timeMs": 0.0175
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6998,
            "timeMs": 0.0155
          }
        }
      },
      {
        "type": "lemniscate",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "lemniscate [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9872,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9876,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4794,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9514,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.9883,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7099,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7831,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8014,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8421,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8627,
            "timeMs": 0.0133
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.895,
            "timeMs": 0.0085
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9056,
            "timeMs": 0.0077
          }
        }
      },
      {
        "type": "lemniscate",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "lemniscate [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8044,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8045,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.158,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.3842,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.7527,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.2879,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.3888,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5339,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.5856,
            "timeMs": 0.0032
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.5001,
            "timeMs": 0.0142
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5436,
            "timeMs": 0.0087
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5869,
            "timeMs": 0.0082
          }
        }
      },
      {
        "type": "lemniscate",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "lemniscate [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9888,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9893,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6794,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9632,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6574,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7494,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8007,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8429,
            "timeMs": 0.0011
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9202,
            "timeMs": 0.0037
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9441,
            "timeMs": 0.0025
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9479,
            "timeMs": 0.0023
          }
        }
      },
      {
        "type": "lemniscate",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "lemniscate [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8627,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8623,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.2835,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.5575,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9381,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.316,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4025,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5731,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6209,
            "timeMs": 0.0009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.5805,
            "timeMs": 0.0039
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.605,
            "timeMs": 0.0025
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6469,
            "timeMs": 0.0024
          }
        }
      },
      {
        "type": "rose",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "rose [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9921,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9921,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.4367,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9692,
            "timeMs": 0.0059
          },
          "rbfKernelSimilarity": {
            "score": 0.9835,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7038,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7832,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7957,
            "timeMs": 0.0078
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8419,
            "timeMs": 0.0068
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8674,
            "timeMs": 0.0235
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9001,
            "timeMs": 0.0161
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9102,
            "timeMs": 0.014
          }
        }
      },
      {
        "type": "rose",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "rose [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8707,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8707,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.1337,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.5545,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.6573,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4494,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4902,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5947,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6603,
            "timeMs": 0.0072
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6137,
            "timeMs": 0.0278
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6469,
            "timeMs": 0.0179
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.698,
            "timeMs": 0.017
          }
        }
      },
      {
        "type": "rose",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "rose [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9922,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9925,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.5133,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9701,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.991,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6903,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7732,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7906,
            "timeMs": 0.0039
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8384,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8859,
            "timeMs": 0.0145
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.917,
            "timeMs": 0.0092
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9247,
            "timeMs": 0.0084
          }
        }
      },
      {
        "type": "rose",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "rose [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8542,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8553,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.1647,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.5113,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.7731,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3596,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.445,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5716,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6335,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.573,
            "timeMs": 0.0138
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6082,
            "timeMs": 0.0097
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6621,
            "timeMs": 0.0092
          }
        }
      },
      {
        "type": "rose",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "rose [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9937,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7225,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9773,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6669,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7593,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7803,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8314,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8725,
            "timeMs": 0.0042
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8983,
            "timeMs": 0.0027
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9066,
            "timeMs": 0.0026
          }
        }
      },
      {
        "type": "rose",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "rose [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.7105,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.706,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.2582,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.2435,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9208,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1873,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.2737,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5058,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.5245,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4316,
            "timeMs": 0.0037
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5021,
            "timeMs": 0.0026
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5105,
            "timeMs": 0.0021
          }
        }
      },
      {
        "type": "cardioid",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cardioid [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.999,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.4044,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.9785,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7541,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8278,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8451,
            "timeMs": 0.0225
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8818,
            "timeMs": 0.0085
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9471,
            "timeMs": 0.0305
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9649,
            "timeMs": 0.0209
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9666,
            "timeMs": 0.0188
          }
        }
      },
      {
        "type": "cardioid",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cardioid [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9809,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9792,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.124,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9251,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.6073,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5565,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6411,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6944,
            "timeMs": 0.0065
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7601,
            "timeMs": 0.0067
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7796,
            "timeMs": 0.0308
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8247,
            "timeMs": 0.0259
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8516,
            "timeMs": 0.0247
          }
        }
      },
      {
        "type": "cardioid",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cardioid [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9991,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.4917,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0076
          },
          "rbfKernelSimilarity": {
            "score": 0.9894,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7721,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8382,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8597,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8899,
            "timeMs": 0.0037
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.948,
            "timeMs": 0.0176
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9648,
            "timeMs": 0.0117
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9665,
            "timeMs": 0.0125
          }
        }
      },
      {
        "type": "cardioid",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cardioid [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9828,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9813,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1795,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9325,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.8113,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5359,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6131,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6765,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7466,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7613,
            "timeMs": 0.0156
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8095,
            "timeMs": 0.0102
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8409,
            "timeMs": 0.0093
          }
        }
      },
      {
        "type": "cardioid",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "cardioid [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.676,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9959,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6206,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7267,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7967,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8444,
            "timeMs": 0.0009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9565,
            "timeMs": 0.004
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9721,
            "timeMs": 0.0026
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9733,
            "timeMs": 0.0024
          }
        }
      },
      {
        "type": "cardioid",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "cardioid [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9829,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9815,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.342,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9339,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9636,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5026,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5301,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6371,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7115,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6334,
            "timeMs": 0.0038
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6942,
            "timeMs": 0.0025
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7597,
            "timeMs": 0.0022
          }
        }
      },
      {
        "type": "lissajous",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "lissajous [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.995,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.4116,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9805,
            "timeMs": 0.0045
          },
          "rbfKernelSimilarity": {
            "score": 0.9798,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8441,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8821,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8805,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9042,
            "timeMs": 0.0071
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9206,
            "timeMs": 0.031
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9404,
            "timeMs": 0.02
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9439,
            "timeMs": 0.018
          }
        }
      },
      {
        "type": "lissajous",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "lissajous [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9225,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9225,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1319,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.7158,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.6484,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5769,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6569,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6963,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7567,
            "timeMs": 0.0062
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7431,
            "timeMs": 0.0283
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7757,
            "timeMs": 0.0191
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8051,
            "timeMs": 0.0179
          }
        }
      },
      {
        "type": "lissajous",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "lissajous [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5021,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9809,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9902,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8523,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8884,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8967,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9145,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9259,
            "timeMs": 0.015
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9464,
            "timeMs": 0.0096
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9495,
            "timeMs": 0.0089
          }
        }
      },
      {
        "type": "lissajous",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "lissajous [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9078,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9078,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1561,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.6689,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.7467,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5392,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.609,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6743,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7361,
            "timeMs": 0.009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7244,
            "timeMs": 0.0138
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7607,
            "timeMs": 0.0086
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7955,
            "timeMs": 0.0079
          }
        }
      },
      {
        "type": "lissajous",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "lissajous [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.6832,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9812,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7905,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8556,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8863,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9095,
            "timeMs": 0.0009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9504,
            "timeMs": 0.004
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.968,
            "timeMs": 0.0026
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9695,
            "timeMs": 0.0024
          }
        }
      },
      {
        "type": "lissajous",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "lissajous [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9486,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9507,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.3837,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.8188,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9745,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5557,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6373,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6871,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7508,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7412,
            "timeMs": 0.0038
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7723,
            "timeMs": 0.0026
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8014,
            "timeMs": 0.0022
          }
        }
      },
      {
        "type": "sphere",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sphere [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9911,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9911,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.3444,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9649,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.9644,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6995,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7818,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelation": {
            "score": 0.794,
            "timeMs": 0.0106
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8418,
            "timeMs": 0.0099
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8794,
            "timeMs": 0.0409
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9097,
            "timeMs": 0.029
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9181,
            "timeMs": 0.0254
          }
        }
      },
      {
        "type": "sphere",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sphere [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8657,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8659,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.0994,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.5375,
            "timeMs": 0.0065
          },
          "rbfKernelSimilarity": {
            "score": 0.4404,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5002,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5064,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelation": {
            "score": 0.593,
            "timeMs": 0.0111
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6633,
            "timeMs": 0.0103
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6332,
            "timeMs": 0.0397
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6739,
            "timeMs": 0.0264
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7285,
            "timeMs": 0.0231
          }
        }
      },
      {
        "type": "sphere",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sphere [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9935,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9935,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.4618,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9745,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9865,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.775,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8336,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8547,
            "timeMs": 0.0053
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8819,
            "timeMs": 0.0052
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.907,
            "timeMs": 0.0218
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9301,
            "timeMs": 0.0136
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9349,
            "timeMs": 0.0123
          }
        }
      },
      {
        "type": "sphere",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sphere [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8618,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8621,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.137,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.5292,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.6725,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5001,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5038,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5871,
            "timeMs": 0.0054
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6568,
            "timeMs": 0.0047
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6049,
            "timeMs": 0.0207
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6418,
            "timeMs": 0.0138
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6968,
            "timeMs": 0.0127
          }
        }
      },
      {
        "type": "sphere",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "sphere [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9943,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6723,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9794,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6925,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7809,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8258,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8618,
            "timeMs": 0.0012
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9019,
            "timeMs": 0.0052
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9297,
            "timeMs": 0.0033
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9354,
            "timeMs": 0.0029
          }
        }
      },
      {
        "type": "sphere",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "sphere [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9156,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9127,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.2971,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.7069,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9456,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5147,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5631,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6707,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7261,
            "timeMs": 0.0012
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6926,
            "timeMs": 0.0049
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7252,
            "timeMs": 0.0033
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7641,
            "timeMs": 0.0029
          }
        }
      },
      {
        "type": "toroid",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "toroid [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.3587,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9968,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9685,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8926,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9187,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9222,
            "timeMs": 0.0099
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9363,
            "timeMs": 0.01
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9606,
            "timeMs": 0.0356
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9735,
            "timeMs": 0.0251
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9744,
            "timeMs": 0.0398
          }
        }
      },
      {
        "type": "toroid",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "toroid [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9818,
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9819,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.102,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9286,
            "timeMs": 0.0124
          },
          "rbfKernelSimilarity": {
            "score": 0.461,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6787,
            "timeMs": 0.0077
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.758,
            "timeMs": 0.006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7741,
            "timeMs": 0.0176
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8225,
            "timeMs": 0.0149
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8392,
            "timeMs": 0.0678
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8736,
            "timeMs": 0.0514
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8877,
            "timeMs": 0.0434
          }
        }
      },
      {
        "type": "toroid",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "toroid [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.4315,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.9966,
            "timeMs": 0.0136
          },
          "rbfKernelSimilarity": {
            "score": 0.9828,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8721,
            "timeMs": 0.0046
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9043,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9114,
            "timeMs": 0.0096
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9279,
            "timeMs": 0.0092
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9558,
            "timeMs": 0.034
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9691,
            "timeMs": 0.0236
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9702,
            "timeMs": 0.0233
          }
        }
      },
      {
        "type": "toroid",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "toroid [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9837,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9837,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.1447,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9361,
            "timeMs": 0.0093
          },
          "rbfKernelSimilarity": {
            "score": 0.7051,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6331,
            "timeMs": 0.0048
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7237,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7572,
            "timeMs": 0.0096
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8098,
            "timeMs": 0.0088
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8331,
            "timeMs": 0.0375
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8735,
            "timeMs": 0.024
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8897,
            "timeMs": 0.0194
          }
        }
      },
      {
        "type": "toroid",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "toroid [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.6235,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9966,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7484,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8285,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8696,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.898,
            "timeMs": 0.0022
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9418,
            "timeMs": 0.0082
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9594,
            "timeMs": 0.0057
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9614,
            "timeMs": 0.0041
          }
        }
      },
      {
        "type": "toroid",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "toroid [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9773,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.977,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.2449,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9121,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.9093,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5756,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6702,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.728,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7875,
            "timeMs": 0.0013
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7904,
            "timeMs": 0.0064
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.832,
            "timeMs": 0.0042
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8558,
            "timeMs": 0.0031
          }
        }
      },
      {
        "type": "helix",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "helix [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.3692,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.9712,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8582,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.894,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8974,
            "timeMs": 0.0105
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9173,
            "timeMs": 0.0099
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9375,
            "timeMs": 0.0412
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9555,
            "timeMs": 0.0261
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9578,
            "timeMs": 0.0238
          }
        }
      },
      {
        "type": "helix",
        "size": 100,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "helix [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9574,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9509,
            "timeMs": 0.0026
          },
          "euclideanSimilarity": {
            "score": 0.1049,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.8374,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.4825,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5826,
            "timeMs": 0.0039
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6677,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelation": {
            "score": 0.699,
            "timeMs": 0.0106
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7627,
            "timeMs": 0.0103
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7663,
            "timeMs": 0.0461
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8024,
            "timeMs": 0.0447
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.829,
            "timeMs": 0.0374
          }
        }
      },
      {
        "type": "helix",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "helix [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.998,
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0025
          },
          "euclideanSimilarity": {
            "score": 0.4423,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9922,
            "timeMs": 0.0084
          },
          "rbfKernelSimilarity": {
            "score": 0.9842,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8231,
            "timeMs": 0.0048
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8717,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8798,
            "timeMs": 0.0097
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9048,
            "timeMs": 0.0092
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9295,
            "timeMs": 0.0315
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9509,
            "timeMs": 0.0207
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9539,
            "timeMs": 0.0158
          }
        }
      },
      {
        "type": "helix",
        "size": 50,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "helix [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9662,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9624,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.153,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.8698,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.7361,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6099,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6947,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7221,
            "timeMs": 0.0053
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7799,
            "timeMs": 0.0171
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7859,
            "timeMs": 0.022
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8215,
            "timeMs": 0.0283
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8444,
            "timeMs": 0.0292
          }
        }
      },
      {
        "type": "helix",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1
        },
        "label": "helix [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9973,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.6261,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6906,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7854,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8366,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8727,
            "timeMs": 0.0028
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9263,
            "timeMs": 0.0119
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9467,
            "timeMs": 0.008
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9499,
            "timeMs": 0.0077
          }
        }
      },
      {
        "type": "helix",
        "size": 10,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5
        },
        "label": "helix [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9624,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9531,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.2731,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.8581,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9316,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5231,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5906,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6721,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7416,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6945,
            "timeMs": 0.0083
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7439,
            "timeMs": 0.006
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7908,
            "timeMs": 0.0059
          }
        }
      },
      {
        "type": "sin",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1,
          "probability": 0.1
        },
        "label": "sin [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9955,
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.4311,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9821,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.9827,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.838,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8776,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8844,
            "timeMs": 0.0077
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9055,
            "timeMs": 0.007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9282,
            "timeMs": 0.0339
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9473,
            "timeMs": 0.0184
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9503,
            "timeMs": 0.0209
          }
        }
      },
      {
        "type": "sin",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5,
          "probability": 0.1
        },
        "label": "sin [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9169,
            "timeMs": 0.0032
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9171,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.1357,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.6974,
            "timeMs": 0.0059
          },
          "rbfKernelSimilarity": {
            "score": 0.6664,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5609,
            "timeMs": 0.0054
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.637,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6828,
            "timeMs": 0.014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7451,
            "timeMs": 0.0076
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7105,
            "timeMs": 0.0294
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7438,
            "timeMs": 0.0246
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7797,
            "timeMs": 0.0183
          }
        }
      },
      {
        "type": "sin",
        "size": 200,
        "noiseSettings": {
          "type": "uniform",
          "level": 0.1,
          "probability": 0.1
        },
        "label": "sin [uniform (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.5522,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9932,
            "timeMs": 0.0145
          },
          "rbfKernelSimilarity": {
            "score": 0.9934,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.89,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9151,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.916,
            "timeMs": 0.0074
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.931,
            "timeMs": 0.0092
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9472,
            "timeMs": 0.0545
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9598,
            "timeMs": 0.0446
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9613,
            "timeMs": 0.0242
          }
        }
      },
      {
        "type": "sin",
        "size": 200,
        "noiseSettings": {
          "type": "uniform",
          "level": 0.5,
          "probability": 0.1
        },
        "label": "sin [uniform (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9596,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9596,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.194,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.8463,
            "timeMs": 0.0103
          },
          "rbfKernelSimilarity": {
            "score": 0.8415,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6094,
            "timeMs": 0.0048
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6928,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7118,
            "timeMs": 0.0098
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.773,
            "timeMs": 0.0096
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7769,
            "timeMs": 0.0516
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8079,
            "timeMs": 0.0339
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8307,
            "timeMs": 0.0221
          }
        }
      },
      {
        "type": "sin",
        "size": 200,
        "noiseSettings": {
          "type": "impulsive",
          "level": 0.1,
          "probability": 0.1
        },
        "label": "sin [impulsive (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.6807,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0091
          },
          "rbfKernelSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9769,
            "timeMs": 0.0456
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9804,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9832,
            "timeMs": 0.0157
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9851,
            "timeMs": 0.0897
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.1272
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.1553
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.1733
          }
        }
      },
      {
        "type": "sin",
        "size": 200,
        "noiseSettings": {
          "type": "impulsive",
          "level": 0.5,
          "probability": 0.1
        },
        "label": "sin [impulsive (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9863,
            "timeMs": 0.0039
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9863,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.3038,
            "timeMs": 0.0023
          },
          "polynomialKernelSimilarity": {
            "score": 0.9465,
            "timeMs": 0.0145
          },
          "rbfKernelSimilarity": {
            "score": 0.9489,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9165,
            "timeMs": 0.0056
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9386,
            "timeMs": 0.0044
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9498,
            "timeMs": 0.0125
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9596,
            "timeMs": 0.0221
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.1596
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.1473
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.1613
          }
        }
      },
      {
        "type": "circle",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1,
          "probability": 0.1
        },
        "label": "circle [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9947,
            "timeMs": 0.0055
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9947,
            "timeMs": 0.0061
          },
          "euclideanSimilarity": {
            "score": 0.3235,
            "timeMs": 0.0038
          },
          "polynomialKernelSimilarity": {
            "score": 0.979,
            "timeMs": 0.0169
          },
          "rbfKernelSimilarity": {
            "score": 0.9572,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8393,
            "timeMs": 0.0095
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8782,
            "timeMs": 0.0081
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8846,
            "timeMs": 0.0332
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9053,
            "timeMs": 0.0754
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9198,
            "timeMs": 0.1979
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9422,
            "timeMs": 0.0662
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.946,
            "timeMs": 0.0599
          }
        }
      },
      {
        "type": "circle",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5,
          "probability": 0.1
        },
        "label": "circle [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9168,
            "timeMs": 0.003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9172,
            "timeMs": 0.0037
          },
          "euclideanSimilarity": {
            "score": 0.0894,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.6957,
            "timeMs": 0.0104
          },
          "rbfKernelSimilarity": {
            "score": 0.3543,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5661,
            "timeMs": 0.0076
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6421,
            "timeMs": 0.0045
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6912,
            "timeMs": 0.015
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7497,
            "timeMs": 0.0194
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7223,
            "timeMs": 0.071
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.754,
            "timeMs": 0.0542
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7869,
            "timeMs": 0.0435
          }
        }
      },
      {
        "type": "circle",
        "size": 200,
        "noiseSettings": {
          "type": "uniform",
          "level": 0.1,
          "probability": 0.1
        },
        "label": "circle [uniform (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.4781,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.9941,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.9882,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8737,
            "timeMs": 0.0045
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9055,
            "timeMs": 0.0045
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9094,
            "timeMs": 0.015
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9268,
            "timeMs": 0.0239
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9499,
            "timeMs": 0.0858
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.964,
            "timeMs": 0.0471
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9655,
            "timeMs": 0.0433
          }
        }
      },
      {
        "type": "circle",
        "size": 200,
        "noiseSettings": {
          "type": "uniform",
          "level": 0.5,
          "probability": 0.1
        },
        "label": "circle [uniform (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9631,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9633,
            "timeMs": 0.0031
          },
          "euclideanSimilarity": {
            "score": 0.1505,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.8584,
            "timeMs": 0.0078
          },
          "rbfKernelSimilarity": {
            "score": 0.7272,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6402,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7195,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7431,
            "timeMs": 0.0134
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7945,
            "timeMs": 0.0134
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7857,
            "timeMs": 0.0583
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8169,
            "timeMs": 0.0514
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8384,
            "timeMs": 0.0391
          }
        }
      },
      {
        "type": "circle",
        "size": 200,
        "noiseSettings": {
          "type": "impulsive",
          "level": 0.1,
          "probability": 0.1
        },
        "label": "circle [impulsive (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.5907,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0067
          },
          "rbfKernelSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9855,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9871,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9872,
            "timeMs": 0.0119
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9885,
            "timeMs": 0.0113
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.2866
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.2917
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.3198
          }
        }
      },
      {
        "type": "circle",
        "size": 200,
        "noiseSettings": {
          "type": "impulsive",
          "level": 0.5,
          "probability": 0.1
        },
        "label": "circle [impulsive (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9883,
            "timeMs": 0.0046
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9883,
            "timeMs": 0.0055
          },
          "euclideanSimilarity": {
            "score": 0.245,
            "timeMs": 0.003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9541,
            "timeMs": 0.0147
          },
          "rbfKernelSimilarity": {
            "score": 0.9094,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9439,
            "timeMs": 0.0089
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9567,
            "timeMs": 0.0077
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9638,
            "timeMs": 0.0209
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9699,
            "timeMs": 0.0192
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.5304
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.4457
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.3318
          }
        }
      },
      {
        "type": "sphere",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.1,
          "probability": 0.1
        },
        "label": "sphere [gaussian (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0039
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0045
          },
          "euclideanSimilarity": {
            "score": 0.2933,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.9715,
            "timeMs": 0.012
          },
          "rbfKernelSimilarity": {
            "score": 0.9436,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7409,
            "timeMs": 0.005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.812,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8206,
            "timeMs": 0.03
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8606,
            "timeMs": 0.0193
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8918,
            "timeMs": 0.0791
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.919,
            "timeMs": 0.0544
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9256,
            "timeMs": 0.0557
          }
        }
      },
      {
        "type": "sphere",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.5,
          "probability": 0.1
        },
        "label": "sphere [gaussian (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8831,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8831,
            "timeMs": 0.0039
          },
          "euclideanSimilarity": {
            "score": 0.0762,
            "timeMs": 0.0023
          },
          "polynomialKernelSimilarity": {
            "score": 0.5881,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0.2295,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5049,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5325,
            "timeMs": 0.0045
          },
          "vectorSimilarityCorrelation": {
            "score": 0.62,
            "timeMs": 0.0192
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6863,
            "timeMs": 0.0186
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.646,
            "timeMs": 0.0789
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6799,
            "timeMs": 0.0575
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7277,
            "timeMs": 0.0535
          }
        }
      },
      {
        "type": "sphere",
        "size": 200,
        "noiseSettings": {
          "type": "uniform",
          "level": 0.1,
          "probability": 0.1
        },
        "label": "sphere [uniform (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0025
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0039
          },
          "euclideanSimilarity": {
            "score": 0.4233,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9909,
            "timeMs": 0.0074
          },
          "rbfKernelSimilarity": {
            "score": 0.9816,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8221,
            "timeMs": 0.0045
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8685,
            "timeMs": 0.0043
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8745,
            "timeMs": 0.019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9001,
            "timeMs": 0.0187
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9314,
            "timeMs": 0.1176
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9503,
            "timeMs": 0.0762
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.953,
            "timeMs": 0.0675
          }
        }
      },
      {
        "type": "sphere",
        "size": 200,
        "noiseSettings": {
          "type": "uniform",
          "level": 0.5,
          "probability": 0.1
        },
        "label": "sphere [uniform (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9475,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9475,
            "timeMs": 0.004
          },
          "euclideanSimilarity": {
            "score": 0.1245,
            "timeMs": 0.0023
          },
          "polynomialKernelSimilarity": {
            "score": 0.8019,
            "timeMs": 0.0131
          },
          "rbfKernelSimilarity": {
            "score": 0.61,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5462,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6175,
            "timeMs": 0.007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6697,
            "timeMs": 0.0115
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7332,
            "timeMs": 0.0113
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7278,
            "timeMs": 0.1511
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7598,
            "timeMs": 0.0773
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7918,
            "timeMs": 0.0685
          }
        }
      },
      {
        "type": "sphere",
        "size": 200,
        "noiseSettings": {
          "type": "impulsive",
          "level": 0.1,
          "probability": 0.1
        },
        "label": "sphere [impulsive (lvl=0.1)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0039
          },
          "euclideanSimilarity": {
            "score": 0.5698,
            "timeMs": 0.0023
          },
          "polynomialKernelSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0088
          },
          "rbfKernelSimilarity": {
            "score": 0.9943,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9685,
            "timeMs": 0.0051
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9744,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelation": {
            "score": 0.978,
            "timeMs": 0.0058
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9811,
            "timeMs": 0.0056
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.6405
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.6125
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.634
          }
        }
      },
      {
        "type": "sphere",
        "size": 200,
        "noiseSettings": {
          "type": "impulsive",
          "level": 0.5,
          "probability": 0.1
        },
        "label": "sphere [impulsive (lvl=0.5)]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.9825,
            "timeMs": 0.003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9825,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.2066,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 0.9316,
            "timeMs": 0.0095
          },
          "rbfKernelSimilarity": {
            "score": 0.8629,
            "timeMs": 0.0073
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9226,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9431,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9503,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9606,
            "timeMs": 0.0056
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.6285
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.6267
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.6755
          }
        }
      },
      {
        "type": "sin",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.05
        },
        "anomalySettings": {
          "type": "peak",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "sin [gaussian (lvl=0.05) + peak]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8589,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8605,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.0908,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.5176,
            "timeMs": 0.0064
          },
          "rbfKernelSimilarity": {
            "score": 0.3667,
            "timeMs": 0.0538
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8951,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9205,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9298,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9412,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9629,
            "timeMs": 0.0433
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9737,
            "timeMs": 0.0286
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9745,
            "timeMs": 0.0334
          }
        }
      },
      {
        "type": "sin",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.05
        },
        "anomalySettings": {
          "type": "discontinuity",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "sin [gaussian (lvl=0.05) + discontinuity]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.6799,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.7426,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.0196,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.1294,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5016,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5227,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6511,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7228,
            "timeMs": 0.0027
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4946,
            "timeMs": 0.0296
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5404,
            "timeMs": 0.0261
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5836,
            "timeMs": 0.02
          }
        }
      },
      {
        "type": "sin",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.05
        },
        "anomalySettings": {
          "type": "high_freq_oscillation",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "sin [gaussian (lvl=0.05) + high_freq_oscillation]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.5855,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5855,
            "timeMs": 0.0025
          },
          "euclideanSimilarity": {
            "score": 0.0195,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.0296,
            "timeMs": 0.1259
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1283,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1762,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelation": {
            "score": 0.4885,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4967,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4769,
            "timeMs": 0.0824
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5064,
            "timeMs": 0.0401
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5128,
            "timeMs": 0.0428
          }
        }
      },
      {
        "type": "circle",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.05
        },
        "anomalySettings": {
          "type": "peak",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "circle [gaussian (lvl=0.05) + peak]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8462,
            "timeMs": 0.006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8479,
            "timeMs": 0.0053
          },
          "euclideanSimilarity": {
            "score": 0.0659,
            "timeMs": 0.0039
          },
          "polynomialKernelSimilarity": {
            "score": 0.4806,
            "timeMs": 0.018
          },
          "rbfKernelSimilarity": {
            "score": 0.1344,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8788,
            "timeMs": 0.007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9097,
            "timeMs": 0.0054
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9195,
            "timeMs": 0.0084
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9335,
            "timeMs": 0.0079
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9586,
            "timeMs": 0.0982
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9706,
            "timeMs": 0.0831
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9716,
            "timeMs": 0.0746
          }
        }
      },
      {
        "type": "circle",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.05
        },
        "anomalySettings": {
          "type": "discontinuity",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "circle [gaussian (lvl=0.05) + discontinuity]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.44,
            "timeMs": 0.0076
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.4088,
            "timeMs": 0.0061
          },
          "euclideanSimilarity": {
            "score": 0.0139,
            "timeMs": 0.0041
          },
          "polynomialKernelSimilarity": {
            "score": 0.0141,
            "timeMs": 0.0153
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0091
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4418,
            "timeMs": 0.1525
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4919,
            "timeMs": 0.0051
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6278,
            "timeMs": 0.0057
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7029,
            "timeMs": 0.013
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4926,
            "timeMs": 0.6129
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5396,
            "timeMs": 0.0232
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5832,
            "timeMs": 0.0186
          }
        }
      },
      {
        "type": "circle",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.05
        },
        "anomalySettings": {
          "type": "high_freq_oscillation",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "circle [gaussian (lvl=0.05) + high_freq_oscillation]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.5961,
            "timeMs": 0.0104
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5962,
            "timeMs": 0.0061
          },
          "euclideanSimilarity": {
            "score": 0.014,
            "timeMs": 0.0036
          },
          "polynomialKernelSimilarity": {
            "score": 0.0372,
            "timeMs": 0.0195
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1336,
            "timeMs": 0.0053
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1838,
            "timeMs": 0.005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.491,
            "timeMs": 0.0053
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4976,
            "timeMs": 0.0052
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4804,
            "timeMs": 0.0623
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5093,
            "timeMs": 0.0234
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5177,
            "timeMs": 0.0191
          }
        }
      },
      {
        "type": "sphere",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.05
        },
        "anomalySettings": {
          "type": "peak",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "sphere [gaussian (lvl=0.05) + peak]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8067,
            "timeMs": 0.0033
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8085,
            "timeMs": 0.0042
          },
          "euclideanSimilarity": {
            "score": 0.0542,
            "timeMs": 0.0027
          },
          "polynomialKernelSimilarity": {
            "score": 0.3775,
            "timeMs": 0.0096
          },
          "rbfKernelSimilarity": {
            "score": 0.0477,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8001,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8574,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8667,
            "timeMs": 0.0084
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8964,
            "timeMs": 0.0084
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9379,
            "timeMs": 0.0771
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9568,
            "timeMs": 0.0348
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9591,
            "timeMs": 0.0322
          }
        }
      },
      {
        "type": "sphere",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.05
        },
        "anomalySettings": {
          "type": "discontinuity",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "sphere [gaussian (lvl=0.05) + discontinuity]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.5824,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.6137,
            "timeMs": 0.0039
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 0.0273,
            "timeMs": 0.0084
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4012,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4758,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6318,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7011,
            "timeMs": 0.0066
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.5007,
            "timeMs": 0.0661
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5413,
            "timeMs": 0.0267
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5807,
            "timeMs": 0.0234
          }
        }
      },
      {
        "type": "sphere",
        "size": 200,
        "noiseSettings": {
          "type": "gaussian",
          "level": 0.05
        },
        "anomalySettings": {
          "type": "high_freq_oscillation",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "sphere [gaussian (lvl=0.05) + high_freq_oscillation]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.5794,
            "timeMs": 0.0061
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5794,
            "timeMs": 0.0072
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0094
          },
          "polynomialKernelSimilarity": {
            "score": 0.0253,
            "timeMs": 0.0193
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1115,
            "timeMs": 0.0078
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1527,
            "timeMs": 0.0077
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5004,
            "timeMs": 0.0081
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.5022,
            "timeMs": 0.0077
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.477,
            "timeMs": 0.1266
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5016,
            "timeMs": 0.0585
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5032,
            "timeMs": 0.0572
          }
        }
      }
    ],
    "insights": []
  }
};