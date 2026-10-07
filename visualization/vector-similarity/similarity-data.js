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
        "normalizedDimensionRelativeManhattanSimilarity": 0.9361,
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
        "normalizedDimensionRelativeManhattanSimilarity": 0.7353,
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
      "avgTime": 0.3001513,
      "iterations": 10
    },
    {
      "name": "normalizedCosineSimilarity",
      "avgTime": 0.251552,
      "iterations": 10
    },
    {
      "name": "euclideanSimilarity",
      "avgTime": 0.0711146,
      "iterations": 10
    },
    {
      "name": "manhattanSimilarity",
      "avgTime": 0.090097,
      "iterations": 10
    },
    {
      "name": "gowerSimilarity",
      "avgTime": 0.2231898,
      "iterations": 10
    },
    {
      "name": "soergelSimilarity",
      "avgTime": 0.27645590000000003,
      "iterations": 10
    },
    {
      "name": "kulczynskiSimilarity",
      "avgTime": 0.206521,
      "iterations": 10
    },
    {
      "name": "lorentzianSimilarity",
      "avgTime": 0.1344763,
      "iterations": 10
    },
    {
      "name": "weightedMinkowskiSimilarity",
      "avgTime": 0.1659525,
      "iterations": 10
    },
    {
      "name": "canberraSimilarity",
      "avgTime": 0.1734197,
      "iterations": 10
    },
    {
      "name": "chebyshevSimilarity",
      "avgTime": 0.10675939999999999,
      "iterations": 10
    },
    {
      "name": "intersectionSimilarity",
      "avgTime": 0.1764886,
      "iterations": 10
    },
    {
      "name": "waveHedgesSimilarity",
      "avgTime": 0.1595262,
      "iterations": 10
    },
    {
      "name": "sorensenSimilarity",
      "avgTime": 0.156891,
      "iterations": 10
    },
    {
      "name": "motykaSimilarity",
      "avgTime": 0.1917099,
      "iterations": 10
    },
    {
      "name": "kullbackLeiblerSimilarity",
      "avgTime": 0.2550582,
      "iterations": 10
    },
    {
      "name": "jeffreysSimilarity",
      "avgTime": 0.4555519,
      "iterations": 10
    },
    {
      "name": "kSimilarity",
      "avgTime": 0.3184071,
      "iterations": 10
    },
    {
      "name": "topsoeSimilarity",
      "avgTime": 0.49435270000000003,
      "iterations": 10
    },
    {
      "name": "normalizedPearsonChiSquareSimilarity",
      "avgTime": 0.1605033,
      "iterations": 10
    },
    {
      "name": "normalizedNeymanChiSquareSimilarity",
      "avgTime": 0.15130470000000001,
      "iterations": 10
    },
    {
      "name": "normalizedAdditiveSymmetricChiSquareSimilarity",
      "avgTime": 0.214548,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChiSquareSimilarity",
      "avgTime": 0.1588955,
      "iterations": 10
    },
    {
      "name": "fidelitySimilarity",
      "avgTime": 0.3218175,
      "iterations": 10
    },
    {
      "name": "hellingerSimilarity",
      "avgTime": 0.2248511,
      "iterations": 10
    },
    {
      "name": "normalizedMatusitaSimilarity",
      "avgTime": 0.34182959999999996,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChordSimilarity",
      "avgTime": 0.3098052,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityBinary",
      "avgTime": 0.1476577,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityWeighted",
      "avgTime": 0.18084170000000002,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityRealValued",
      "avgTime": 0.16664510000000002,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMeanStdPenalized",
      "avgTime": 0.354182,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelation",
      "avgTime": 0.2577583,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelationNoStd",
      "avgTime": 0.2900469,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityRobust",
      "avgTime": 0.2796519,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMean",
      "avgTime": 0.2492735,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMeanNoStd",
      "avgTime": 0.26719329999999997,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMetricLike",
      "avgTime": 0.2176237,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityTunable",
      "avgTime": 0.33240020000000003,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityVarianceWeighted",
      "avgTime": 0.3155112,
      "iterations": 10
    },
    {
      "name": "madPenalizedRelativeAgreementSimilarity",
      "avgTime": 0.3936241,
      "iterations": 10
    },
    {
      "name": "maxRelativeAgreementMedianMadPowerSimilarity",
      "avgTime": 0.3338276,
      "iterations": 10
    },
    {
      "name": "maxRelativeAgreementMedianMadPowerSimilarityNoMad",
      "avgTime": 0.2948827,
      "iterations": 10
    },
    {
      "name": "normalizedDimensionRelativeManhattanSimilarity",
      "avgTime": 0.258862,
      "iterations": 10
    },
    {
      "name": "polynomialKernelSimilarity",
      "avgTime": 0.2140491,
      "iterations": 10
    },
    {
      "name": "rbfKernelSimilarity",
      "avgTime": 0.0760798,
      "iterations": 10
    },
    {
      "name": "itakuraSaitoDistance",
      "avgTime": 0.20999820000000002,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityItakuraSaito",
      "avgTime": 0.17565170000000002,
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
        "normalizedDimensionRelativeManhattanSimilarity": 0,
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
        "normalizedDimensionRelativeManhattanSimilarity": 0.6476,
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
        "A_vs_C": 0.8670062419582997,
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
        "A_vs_C": 0.8580875986751004,
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
      "normalizedDimensionRelativeManhattanSimilarity": {
        "A_vs_B": 0.9090909090909091,
        "A_vs_C": 0.806,
        "A_vs_D": 0,
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
        0.9874936713784642,
        2.0369976337328315,
        3.0340366761402215,
        4.025190756186479,
        5.004619760650682,
        6.03809858160802,
        7.007227432395204,
        7.954243761013972,
        8.995364617393314,
        10.011948238332353
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.9223,
        "manhattanSimilarity": 0.819,
        "gowerSimilarity": 0.9779,
        "soergelSimilarity": 0.996,
        "kulczynskiSimilarity": 0.996,
        "lorentzianSimilarity": 0.8213,
        "weightedMinkowskiSimilarity": 0.9223,
        "canberraSimilarity": 0.9968,
        "chebyshevSimilarity": 0.9562,
        "intersectionSimilarity": 0.998,
        "waveHedgesSimilarity": 0.94,
        "sorensenSimilarity": 0.998,
        "motykaSimilarity": 0.996,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 1,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.9981,
        "normalizedNeymanChiSquareSimilarity": 0.9981,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9962,
        "normalizedSquaredChiSquareSimilarity": 0.999,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 0.998,
        "normalizedMatusitaSimilarity": 0.998,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.996,
        "jaccardSimilarityRealValued": 0.996,
        "computeVectorSimilarityMeanStdPenalized": 0.9946,
        "vectorSimilarityCorrelation": 0.9968,
        "vectorSimilarityCorrelationNoStd": 0.9968,
        "computeVectorSimilarityRobust": 0.9921,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9968,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9968,
        "computeVectorSimilarityMetricLike": 0.98,
        "computeVectorSimilarityTunable": 0.9952,
        "computeVectorSimilarityVarianceWeighted": 0.9968,
        "madPenalizedRelativeAgreementSimilarity": 0.9951,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.997,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.997,
        "normalizedDimensionRelativeManhattanSimilarity": 0.9936,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999,
        "itakuraSaitoDistance": 0.0004,
        "vectorSimilarityItakuraSaito": 0.9996
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
        "normalizedDimensionRelativeManhattanSimilarity": 0.01,
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
        "normalizedDimensionRelativeManhattanSimilarity": 0,
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
        "normalizedDimensionRelativeManhattanSimilarity": 0.9727,
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
          0.7327,
          2.1772,
          2.7271,
          3.83,
          4.7729,
          6.069,
          6.6075,
          8.0233,
          9.0452,
          9.9833
        ],
        "pearsonCorrelationSimilarity": 0.9991,
        "normalizedCosineSimilarity": 0.9998,
        "euclideanSimilarity": 0.6069,
        "manhattanSimilarity": 0.3758,
        "gowerSimilarity": 0.8339,
        "soergelSimilarity": 0.97,
        "kulczynskiSimilarity": 0.97,
        "lorentzianSimilarity": 0.4025,
        "weightedMinkowskiSimilarity": 0.6069,
        "canberraSimilarity": 0.9682,
        "chebyshevSimilarity": 0.7181,
        "intersectionSimilarity": 0.9848,
        "waveHedgesSimilarity": 0.6232,
        "sorensenSimilarity": 0.9848,
        "motykaSimilarity": 0.97,
        "kullbackLeiblerSimilarity": 0.9986,
        "jeffreysSimilarity": 0.9973,
        "kSimilarity": 0.9997,
        "topsoeSimilarity": 0.9993,
        "normalizedPearsonChiSquareSimilarity": 0.846,
        "normalizedNeymanChiSquareSimilarity": 0.8676,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.7493,
        "normalizedSquaredChiSquareSimilarity": 0.9237,
        "fidelitySimilarity": 0.9997,
        "hellingerSimilarity": 0.9817,
        "normalizedMatusitaSimilarity": 0.9817,
        "normalizedSquaredChordSimilarity": 0.9997,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.97,
        "jaccardSimilarityRealValued": 0.97,
        "computeVectorSimilarityMeanStdPenalized": 0.9408,
        "vectorSimilarityCorrelation": 0.9674,
        "vectorSimilarityCorrelationNoStd": 0.9698,
        "computeVectorSimilarityRobust": 0.934,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9642,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9671,
        "computeVectorSimilarityMetricLike": 0.8254,
        "computeVectorSimilarityTunable": 0.955,
        "computeVectorSimilarityVarianceWeighted": 0.9651,
        "madPenalizedRelativeAgreementSimilarity": 0.964,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9772,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.978,
        "normalizedDimensionRelativeManhattanSimilarity": 0.9281,
        "polynomialKernelSimilarity": 0.999,
        "rbfKernelSimilarity": 0.9958,
        "itakuraSaitoDistance": 0.0658,
        "vectorSimilarityItakuraSaito": 0.9382
      },
      "2": {
        "noisyVector": [
          1.4167,
          2.6925,
          3.0112,
          3.1583,
          4.7104,
          5.4628,
          7.2368,
          8.9199,
          9.3425,
          9.824
        ],
        "pearsonCorrelationSimilarity": 0.9919,
        "normalizedCosineSimilarity": 0.9983,
        "euclideanSimilarity": 0.3747,
        "manhattanSimilarity": 0.183,
        "gowerSimilarity": 0.5536,
        "soergelSimilarity": 0.9225,
        "kulczynskiSimilarity": 0.9225,
        "lorentzianSimilarity": 0.2221,
        "weightedMinkowskiSimilarity": 0.3747,
        "canberraSimilarity": 0.9421,
        "chebyshevSimilarity": 0.5209,
        "intersectionSimilarity": 0.9597,
        "waveHedgesSimilarity": 0.4755,
        "sorensenSimilarity": 0.9597,
        "motykaSimilarity": 0.9225,
        "kullbackLeiblerSimilarity": 0.9935,
        "jeffreysSimilarity": 0.987,
        "kSimilarity": 0.9983,
        "topsoeSimilarity": 0.9967,
        "normalizedPearsonChiSquareSimilarity": 0.5834,
        "normalizedNeymanChiSquareSimilarity": 0.5601,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.4001,
        "normalizedSquaredChiSquareSimilarity": 0.7306,
        "fidelitySimilarity": 0.9984,
        "hellingerSimilarity": 0.9594,
        "normalizedMatusitaSimilarity": 0.9594,
        "normalizedSquaredChordSimilarity": 0.9984,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9225,
        "jaccardSimilarityRealValued": 0.9225,
        "computeVectorSimilarityMeanStdPenalized": 0.9075,
        "vectorSimilarityCorrelation": 0.9394,
        "vectorSimilarityCorrelationNoStd": 0.9448,
        "computeVectorSimilarityRobust": 0.8845,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9315,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9385,
        "computeVectorSimilarityMetricLike": 0.7035,
        "computeVectorSimilarityTunable": 0.9184,
        "computeVectorSimilarityVarianceWeighted": 0.9368,
        "madPenalizedRelativeAgreementSimilarity": 0.9456,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9614,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9631,
        "normalizedDimensionRelativeManhattanSimilarity": 0.8828,
        "polynomialKernelSimilarity": 0.9931,
        "rbfKernelSimilarity": 0.9725,
        "itakuraSaitoDistance": 0.138,
        "vectorSimilarityItakuraSaito": 0.8787
      },
      "5": {
        "noisyVector": [
          -0.817,
          3.1582,
          3.3457,
          3.5185,
          5.5701,
          5.8837,
          4.7377,
          5.5281,
          11.1567,
          11.892
        ],
        "pearsonCorrelationSimilarity": 0.9517,
        "normalizedCosineSimilarity": 0.985,
        "euclideanSimilarity": 0.1672,
        "manhattanSimilarity": 0.0701,
        "gowerSimilarity": 0.2486,
        "soergelSimilarity": 0.7829,
        "kulczynskiSimilarity": 0.7885,
        "lorentzianSimilarity": 0.115,
        "weightedMinkowskiSimilarity": 0.1672,
        "canberraSimilarity": 0.835,
        "chebyshevSimilarity": 0.288,
        "intersectionSimilarity": 0.8948,
        "waveHedgesSimilarity": 0.2215,
        "sorensenSimilarity": 0.88,
        "motykaSimilarity": 0.8096,
        "kullbackLeiblerSimilarity": 0.9704,
        "jeffreysSimilarity": 0.9435,
        "kSimilarity": 0.9928,
        "topsoeSimilarity": 0.9853,
        "normalizedPearsonChiSquareSimilarity": 0.2207,
        "normalizedNeymanChiSquareSimilarity": 0.2359,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.1287,
        "normalizedSquaredChiSquareSimilarity": 0.3785,
        "fidelitySimilarity": 0.9925,
        "hellingerSimilarity": 0.9136,
        "normalizedMatusitaSimilarity": 0.9136,
        "normalizedSquaredChordSimilarity": 0.9925,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.8096,
        "jaccardSimilarityRealValued": 0.8096,
        "computeVectorSimilarityMeanStdPenalized": 0.6614,
        "vectorSimilarityCorrelation": 0.7581,
        "vectorSimilarityCorrelationNoStd": 0.8243,
        "computeVectorSimilarityRobust": 0.7493,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.7258,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.8024,
        "computeVectorSimilarityMetricLike": 0.4162,
        "computeVectorSimilarityTunable": 0.7484,
        "computeVectorSimilarityVarianceWeighted": 0.6491,
        "madPenalizedRelativeAgreementSimilarity": 0.8766,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9037,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9119,
        "normalizedDimensionRelativeManhattanSimilarity": 0.577,
        "polynomialKernelSimilarity": 0.9411,
        "rbfKernelSimilarity": 0.7804,
        "itakuraSaitoDistance": 0.3325,
        "vectorSimilarityItakuraSaito": 0.7505
      },
      "0.1": {
        "noisyVector": [
          0.9538,
          2.0406,
          2.9958,
          3.9513,
          5.0457,
          5.9609,
          7.0245,
          8.0463,
          8.9648,
          10.0293
        ],
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.8921,
        "manhattanSimilarity": 0.7354,
        "gowerSimilarity": 0.964,
        "soergelSimilarity": 0.9935,
        "kulczynskiSimilarity": 0.9935,
        "lorentzianSimilarity": 0.7393,
        "weightedMinkowskiSimilarity": 0.8921,
        "canberraSimilarity": 0.9944,
        "chebyshevSimilarity": 0.9535,
        "intersectionSimilarity": 0.9967,
        "waveHedgesSimilarity": 0.8998,
        "sorensenSimilarity": 0.9967,
        "motykaSimilarity": 0.9935,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 0.9999,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.9951,
        "normalizedNeymanChiSquareSimilarity": 0.9952,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9904,
        "normalizedSquaredChiSquareSimilarity": 0.9976,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 0.9967,
        "normalizedMatusitaSimilarity": 0.9967,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9935,
        "jaccardSimilarityRealValued": 0.9935,
        "computeVectorSimilarityMeanStdPenalized": 0.9894,
        "vectorSimilarityCorrelation": 0.9944,
        "vectorSimilarityCorrelationNoStd": 0.9944,
        "computeVectorSimilarityRobust": 0.9864,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9943,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9944,
        "computeVectorSimilarityMetricLike": 0.9654,
        "computeVectorSimilarityTunable": 0.9917,
        "computeVectorSimilarityVarianceWeighted": 0.9943,
        "madPenalizedRelativeAgreementSimilarity": 0.9958,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9969,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9969,
        "normalizedDimensionRelativeManhattanSimilarity": 0.9886,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999,
        "itakuraSaitoDistance": 0.0015,
        "vectorSimilarityItakuraSaito": 0.9985
      },
      "0.5": {
        "noisyVector": [
          0.9582,
          2.0808,
          2.7713,
          3.9832,
          4.851,
          6.1278,
          6.8995,
          7.9747,
          8.9355,
          10.183
        ],
        "pearsonCorrelationSimilarity": 0.9996,
        "normalizedCosineSimilarity": 0.9999,
        "euclideanSimilarity": 0.7223,
        "manhattanSimilarity": 0.4955,
        "gowerSimilarity": 0.8982,
        "soergelSimilarity": 0.9816,
        "kulczynskiSimilarity": 0.9816,
        "lorentzianSimilarity": 0.5124,
        "weightedMinkowskiSimilarity": 0.7223,
        "canberraSimilarity": 0.9872,
        "chebyshevSimilarity": 0.8139,
        "intersectionSimilarity": 0.9907,
        "waveHedgesSimilarity": 0.7972,
        "sorensenSimilarity": 0.9907,
        "motykaSimilarity": 0.9816,
        "kullbackLeiblerSimilarity": 0.9997,
        "jeffreysSimilarity": 0.9994,
        "kSimilarity": 0.9999,
        "topsoeSimilarity": 0.9998,
        "normalizedPearsonChiSquareSimilarity": 0.9648,
        "normalizedNeymanChiSquareSimilarity": 0.9662,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9333,
        "normalizedSquaredChiSquareSimilarity": 0.9825,
        "fidelitySimilarity": 0.9999,
        "hellingerSimilarity": 0.9911,
        "normalizedMatusitaSimilarity": 0.9911,
        "normalizedSquaredChordSimilarity": 0.9999,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9816,
        "jaccardSimilarityRealValued": 0.9816,
        "computeVectorSimilarityMeanStdPenalized": 0.979,
        "vectorSimilarityCorrelation": 0.987,
        "vectorSimilarityCorrelationNoStd": 0.9873,
        "computeVectorSimilarityRobust": 0.9695,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9867,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.987,
        "computeVectorSimilarityMetricLike": 0.9227,
        "computeVectorSimilarityTunable": 0.981,
        "computeVectorSimilarityVarianceWeighted": 0.9869,
        "madPenalizedRelativeAgreementSimilarity": 0.9852,
        "maxRelativeAgreementMedianMadPowerSimilarity": 0.9902,
        "maxRelativeAgreementMedianMadPowerSimilarityNoMad": 0.9903,
        "normalizedDimensionRelativeManhattanSimilarity": 0.9736,
        "polynomialKernelSimilarity": 0.9996,
        "rbfKernelSimilarity": 0.9985,
        "itakuraSaitoDistance": 0.0059,
        "vectorSimilarityItakuraSaito": 0.9941
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
            "timeMs": 0.2385
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.1146
          },
          "euclideanSimilarity": {
            "score": 0.5082,
            "timeMs": 0.0893
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.1856
          },
          "rbfKernelSimilarity": {
            "score": 0.9907,
            "timeMs": 0.1724
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9763,
            "timeMs": 0.1548
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9793,
            "timeMs": 0.0639
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9817,
            "timeMs": 0.2132
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9834,
            "timeMs": 0.1162
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9977,
            "timeMs": 0.645
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9986,
            "timeMs": 0.2936
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9986,
            "timeMs": 0.1826
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
            "timeMs": 0.0232
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0222
          },
          "euclideanSimilarity": {
            "score": 0.1609,
            "timeMs": 0.0152
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0542
          },
          "rbfKernelSimilarity": {
            "score": 0.7618,
            "timeMs": 0.0152
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8998,
            "timeMs": 0.031
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9259,
            "timeMs": 0.0285
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9317,
            "timeMs": 0.0333
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9452,
            "timeMs": 0.0307
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9888,
            "timeMs": 0.1356
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9931,
            "timeMs": 0.1821
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9932,
            "timeMs": 0.1309
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
            "timeMs": 0.0124
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0126
          },
          "euclideanSimilarity": {
            "score": 0.6293,
            "timeMs": 0.0084
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0284
          },
          "rbfKernelSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0391
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9654,
            "timeMs": 0.0188
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9728,
            "timeMs": 0.0296
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9692,
            "timeMs": 0.028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9753,
            "timeMs": 0.0245
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9985,
            "timeMs": 0.1096
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0877
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9991,
            "timeMs": 0.1811
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
            "timeMs": 0.02
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0219
          },
          "euclideanSimilarity": {
            "score": 0.2079,
            "timeMs": 0.011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0409
          },
          "rbfKernelSimilarity": {
            "score": 0.8649,
            "timeMs": 0.0147
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8883,
            "timeMs": 0.0552
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9199,
            "timeMs": 0.735
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9283,
            "timeMs": 0.0186
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9436,
            "timeMs": 0.0172
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.989,
            "timeMs": 0.057
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9926,
            "timeMs": 0.0418
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9927,
            "timeMs": 0.0398
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
            "timeMs": 0.0049
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0039
          },
          "euclideanSimilarity": {
            "score": 0.7814,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0134
          },
          "rbfKernelSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9728,
            "timeMs": 0.0045
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9758,
            "timeMs": 0.0063
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9773,
            "timeMs": 0.005
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9795,
            "timeMs": 0.0043
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0146
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0109
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9987,
            "timeMs": 0.0101
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
            "timeMs": 0.0042
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.3797,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0108
          },
          "rbfKernelSimilarity": {
            "score": 0.9737,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8191,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8792,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelation": {
            "score": 0.854,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8982,
            "timeMs": 0.0042
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9919,
            "timeMs": 0.011
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0093
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9951,
            "timeMs": 0.0407
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
            "timeMs": 0.021
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0206
          },
          "euclideanSimilarity": {
            "score": 0.4932,
            "timeMs": 0.0142
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0449
          },
          "rbfKernelSimilarity": {
            "score": 0.9895,
            "timeMs": 0.0139
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9221,
            "timeMs": 0.0388
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9429,
            "timeMs": 0.0296
          },
          "vectorSimilarityCorrelation": {
            "score": 0.95,
            "timeMs": 0.0312
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9603,
            "timeMs": 0.0303
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9995,
            "timeMs": 0.091
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9997,
            "timeMs": 0.084
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9997,
            "timeMs": 0.1482
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
            "timeMs": 0.0211
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0205
          },
          "euclideanSimilarity": {
            "score": 0.1591,
            "timeMs": 0.0146
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0473
          },
          "rbfKernelSimilarity": {
            "score": 0.7562,
            "timeMs": 0.0156
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8947,
            "timeMs": 0.0332
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9245,
            "timeMs": 0.0294
          },
          "vectorSimilarityCorrelation": {
            "score": 0.932,
            "timeMs": 0.0307
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.947,
            "timeMs": 0.0675
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9976,
            "timeMs": 0.1046
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9986,
            "timeMs": 0.1012
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9986,
            "timeMs": 0.0958
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
            "timeMs": 0.014
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0124
          },
          "euclideanSimilarity": {
            "score": 0.5946,
            "timeMs": 0.009
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0289
          },
          "rbfKernelSimilarity": {
            "score": 0.9954,
            "timeMs": 0.009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9411,
            "timeMs": 0.0216
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9546,
            "timeMs": 0.0159
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9651,
            "timeMs": 0.0167
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9705,
            "timeMs": 0.0163
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0455
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0392
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9997,
            "timeMs": 0.0397
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
            "timeMs": 0.0126
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0114
          },
          "euclideanSimilarity": {
            "score": 0.2076,
            "timeMs": 0.0084
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0246
          },
          "rbfKernelSimilarity": {
            "score": 0.8644,
            "timeMs": 0.0092
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.88,
            "timeMs": 0.0153
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9142,
            "timeMs": 0.0149
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9314,
            "timeMs": 0.0161
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9452,
            "timeMs": 0.0528
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0505
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0442
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9986,
            "timeMs": 0.0437
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
            "timeMs": 0.0039
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.7724,
            "timeMs": 0.004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0172
          },
          "rbfKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.068
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9663,
            "timeMs": 0.0055
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9711,
            "timeMs": 0.0044
          },
          "vectorSimilarityCorrelation": {
            "score": 0.974,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.977,
            "timeMs": 0.0043
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0095
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0065
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9996,
            "timeMs": 0.01
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
            "timeMs": 0.0036
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0031
          },
          "euclideanSimilarity": {
            "score": 0.4308,
            "timeMs": 0.0039
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0092
          },
          "rbfKernelSimilarity": {
            "score": 0.9827,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8399,
            "timeMs": 0.0041
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8945,
            "timeMs": 0.0093
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9038,
            "timeMs": 0.0072
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9296,
            "timeMs": 0.009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0101
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0086
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9996,
            "timeMs": 0.0088
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
            "timeMs": 0.0367
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.035
          },
          "euclideanSimilarity": {
            "score": 0.4742,
            "timeMs": 0.0548
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0342
          },
          "rbfKernelSimilarity": {
            "score": 0.9878,
            "timeMs": 0.0118
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9916,
            "timeMs": 0.0383
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9918,
            "timeMs": 0.0404
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9918,
            "timeMs": 0.0398
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.992,
            "timeMs": 0.0403
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.996,
            "timeMs": 0.0602
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9976,
            "timeMs": 0.087
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9976,
            "timeMs": 0.047
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
            "timeMs": 0.0166
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0144
          },
          "euclideanSimilarity": {
            "score": 0.1662,
            "timeMs": 0.0978
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0234
          },
          "rbfKernelSimilarity": {
            "score": 0.7773,
            "timeMs": 0.0074
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9558,
            "timeMs": 0.0226
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9602,
            "timeMs": 0.023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9611,
            "timeMs": 0.0242
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9644,
            "timeMs": 0.0242
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9765,
            "timeMs": 0.0409
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9855,
            "timeMs": 0.0293
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9859,
            "timeMs": 0.0279
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
            "timeMs": 0.0077
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0072
          },
          "euclideanSimilarity": {
            "score": 0.5955,
            "timeMs": 0.0071
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0111
          },
          "rbfKernelSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9917,
            "timeMs": 0.0114
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9919,
            "timeMs": 0.0107
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9919,
            "timeMs": 0.0124
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9921,
            "timeMs": 0.0129
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9961,
            "timeMs": 0.0212
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0156
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9976,
            "timeMs": 0.0151
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
            "timeMs": 0.0069
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0068
          },
          "euclideanSimilarity": {
            "score": 0.2138,
            "timeMs": 0.0036
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0102
          },
          "rbfKernelSimilarity": {
            "score": 0.8735,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9568,
            "timeMs": 0.011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9616,
            "timeMs": 0.0506
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9629,
            "timeMs": 0.0131
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9663,
            "timeMs": 0.0125
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9843,
            "timeMs": 0.021
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9903,
            "timeMs": 0.0156
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9905,
            "timeMs": 0.0148
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
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.7503,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9845,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9851,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9852,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9858,
            "timeMs": 0.003
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0061
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0047
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9967,
            "timeMs": 0.0047
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
            "timeMs": 0.0033
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.4338,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9831,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9131,
            "timeMs": 0.0109
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9304,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9363,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9459,
            "timeMs": 0.003
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9706,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9819,
            "timeMs": 0.0047
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9825,
            "timeMs": 0.0043
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
            "score": 0.9986,
            "timeMs": 0.0131
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9956,
            "timeMs": 0.013
          },
          "euclideanSimilarity": {
            "score": 0.4474,
            "timeMs": 0.0065
          },
          "polynomialKernelSimilarity": {
            "score": 0.9943,
            "timeMs": 0.0177
          },
          "rbfKernelSimilarity": {
            "score": 0.9849,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9232,
            "timeMs": 0.0211
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9374,
            "timeMs": 0.0211
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9424,
            "timeMs": 0.0232
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9493,
            "timeMs": 0.024
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9577,
            "timeMs": 0.0382
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9703,
            "timeMs": 0.0804
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9714,
            "timeMs": 0.0303
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
            "score": 0.9806,
            "timeMs": 0.0128
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9439,
            "timeMs": 0.0127
          },
          "euclideanSimilarity": {
            "score": 0.1678,
            "timeMs": 0.0067
          },
          "polynomialKernelSimilarity": {
            "score": 0.9242,
            "timeMs": 0.0194
          },
          "rbfKernelSimilarity": {
            "score": 0.7818,
            "timeMs": 0.0066
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7766,
            "timeMs": 0.0225
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8274,
            "timeMs": 0.0225
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8296,
            "timeMs": 0.0241
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8624,
            "timeMs": 0.0244
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8672,
            "timeMs": 0.039
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8935,
            "timeMs": 0.0283
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9025,
            "timeMs": 0.028
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
            "timeMs": 0.0078
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0072
          },
          "euclideanSimilarity": {
            "score": 0.6254,
            "timeMs": 0.0038
          },
          "polynomialKernelSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0115
          },
          "rbfKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.965,
            "timeMs": 0.0119
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.967,
            "timeMs": 0.0109
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9672,
            "timeMs": 0.0127
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9689,
            "timeMs": 0.0136
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9682,
            "timeMs": 0.0228
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.976,
            "timeMs": 0.0165
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9765,
            "timeMs": 0.0162
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
            "score": 0.9697,
            "timeMs": 0.0068
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9345,
            "timeMs": 0.0071
          },
          "euclideanSimilarity": {
            "score": 0.1954,
            "timeMs": 0.0039
          },
          "polynomialKernelSimilarity": {
            "score": 0.8831,
            "timeMs": 0.0355
          },
          "rbfKernelSimilarity": {
            "score": 0.8439,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6656,
            "timeMs": 0.0116
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7475,
            "timeMs": 0.0117
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7684,
            "timeMs": 0.0126
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8172,
            "timeMs": 0.0122
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.831,
            "timeMs": 0.0194
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.865,
            "timeMs": 0.0149
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8802,
            "timeMs": 0.0137
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
            "score": 0.9996,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.7861,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0044
          },
          "rbfKernelSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9611,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9648,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9653,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9681,
            "timeMs": 0.003
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.98,
            "timeMs": 0.0061
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9836,
            "timeMs": 0.0046
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9838,
            "timeMs": 0.0045
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
            "score": 0.9838,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9762,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.4063,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9382,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9789,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7742,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8232,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8406,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8671,
            "timeMs": 0.003
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8615,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8977,
            "timeMs": 0.0046
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.909,
            "timeMs": 0.0043
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
            "timeMs": 0.0136
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9968,
            "timeMs": 0.0133
          },
          "euclideanSimilarity": {
            "score": 0.533,
            "timeMs": 0.0064
          },
          "polynomialKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0179
          },
          "rbfKernelSimilarity": {
            "score": 0.9924,
            "timeMs": 0.0062
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9778,
            "timeMs": 0.0212
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9786,
            "timeMs": 0.0208
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9787,
            "timeMs": 0.0233
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9794,
            "timeMs": 0.035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9762,
            "timeMs": 0.0596
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9828,
            "timeMs": 0.0444
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9831,
            "timeMs": 0.0437
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
            "score": 0.9891,
            "timeMs": 0.0289
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9197,
            "timeMs": 0.0265
          },
          "euclideanSimilarity": {
            "score": 0.1676,
            "timeMs": 0.0121
          },
          "polynomialKernelSimilarity": {
            "score": 0.9568,
            "timeMs": 0.075
          },
          "rbfKernelSimilarity": {
            "score": 0.7815,
            "timeMs": 0.0138
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8786,
            "timeMs": 0.0524
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.899,
            "timeMs": 0.0392
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8937,
            "timeMs": 0.0415
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9107,
            "timeMs": 0.0389
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.896,
            "timeMs": 0.0592
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9205,
            "timeMs": 0.0443
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9264,
            "timeMs": 0.0429
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
            "score": 0.9995,
            "timeMs": 0.0129
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9957,
            "timeMs": 0.0152
          },
          "euclideanSimilarity": {
            "score": 0.5841,
            "timeMs": 0.0068
          },
          "polynomialKernelSimilarity": {
            "score": 0.998,
            "timeMs": 0.0224
          },
          "rbfKernelSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0063
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9732,
            "timeMs": 0.0236
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9751,
            "timeMs": 0.019
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9754,
            "timeMs": 0.0205
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9769,
            "timeMs": 0.088
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9823,
            "timeMs": 0.0313
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9884,
            "timeMs": 0.0235
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9886,
            "timeMs": 0.0227
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
            "score": 0.9877,
            "timeMs": 0.0452
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8939,
            "timeMs": 0.013
          },
          "euclideanSimilarity": {
            "score": 0.2161,
            "timeMs": 0.0064
          },
          "polynomialKernelSimilarity": {
            "score": 0.9515,
            "timeMs": 0.018
          },
          "rbfKernelSimilarity": {
            "score": 0.8767,
            "timeMs": 0.0067
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8762,
            "timeMs": 0.0198
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.894,
            "timeMs": 0.0188
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8989,
            "timeMs": 0.0246
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9101,
            "timeMs": 0.0203
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8972,
            "timeMs": 0.0314
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9192,
            "timeMs": 0.0303
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9247,
            "timeMs": 0.0232
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
            "score": 0.9995,
            "timeMs": 0.005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0053
          },
          "euclideanSimilarity": {
            "score": 0.7437,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0076
          },
          "rbfKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9679,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9696,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9696,
            "timeMs": 0.0062
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9711,
            "timeMs": 0.0059
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9719,
            "timeMs": 0.0089
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9823,
            "timeMs": 0.0045
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9828,
            "timeMs": 0.0043
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
            "score": 0.986,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9541,
            "timeMs": 0.0046
          },
          "euclideanSimilarity": {
            "score": 0.3688,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9458,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0.9711,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7484,
            "timeMs": 0.0066
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8225,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.782,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8435,
            "timeMs": 0.0059
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9123,
            "timeMs": 0.0083
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9336,
            "timeMs": 0.0075
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9378,
            "timeMs": 0.0073
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
            "score": 0.9941,
            "timeMs": 0.0257
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9941,
            "timeMs": 0.0285
          },
          "euclideanSimilarity": {
            "score": 0.4862,
            "timeMs": 0.0115
          },
          "polynomialKernelSimilarity": {
            "score": 0.977,
            "timeMs": 0.0315
          },
          "rbfKernelSimilarity": {
            "score": 0.9889,
            "timeMs": 0.0113
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8094,
            "timeMs": 0.0398
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8582,
            "timeMs": 0.038
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8681,
            "timeMs": 0.039
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8929,
            "timeMs": 0.0391
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9102,
            "timeMs": 0.0534
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9343,
            "timeMs": 0.042
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9389,
            "timeMs": 0.0504
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
            "score": 0.9105,
            "timeMs": 0.0262
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9118,
            "timeMs": 0.0286
          },
          "euclideanSimilarity": {
            "score": 0.1733,
            "timeMs": 0.0119
          },
          "polynomialKernelSimilarity": {
            "score": 0.6785,
            "timeMs": 0.0338
          },
          "rbfKernelSimilarity": {
            "score": 0.7965,
            "timeMs": 0.0116
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5294,
            "timeMs": 0.0466
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5936,
            "timeMs": 0.0384
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6353,
            "timeMs": 0.0471
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7091,
            "timeMs": 0.0407
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.693,
            "timeMs": 0.0576
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7332,
            "timeMs": 0.0439
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7764,
            "timeMs": 0.0432
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
            "score": 0.9949,
            "timeMs": 0.0153
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9951,
            "timeMs": 0.016
          },
          "euclideanSimilarity": {
            "score": 0.5901,
            "timeMs": 0.0065
          },
          "polynomialKernelSimilarity": {
            "score": 0.9807,
            "timeMs": 0.0207
          },
          "rbfKernelSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0062
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7978,
            "timeMs": 0.0192
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8543,
            "timeMs": 0.0218
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8694,
            "timeMs": 0.0219
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8963,
            "timeMs": 0.0205
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9282,
            "timeMs": 0.0275
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9505,
            "timeMs": 0.0228
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9536,
            "timeMs": 0.0343
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
            "score": 0.8924,
            "timeMs": 0.0129
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8935,
            "timeMs": 0.0151
          },
          "euclideanSimilarity": {
            "score": 0.2087,
            "timeMs": 0.0061
          },
          "polynomialKernelSimilarity": {
            "score": 0.6258,
            "timeMs": 0.0389
          },
          "rbfKernelSimilarity": {
            "score": 0.8661,
            "timeMs": 0.0071
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5253,
            "timeMs": 0.0205
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5813,
            "timeMs": 0.0203
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6547,
            "timeMs": 0.0211
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7159,
            "timeMs": 0.02
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6721,
            "timeMs": 0.0325
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7033,
            "timeMs": 0.0244
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7448,
            "timeMs": 0.0218
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
            "score": 0.9979,
            "timeMs": 0.0051
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0055
          },
          "euclideanSimilarity": {
            "score": 0.8269,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9929,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8919,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9126,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelation": {
            "score": 0.918,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9304,
            "timeMs": 0.0057
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9649,
            "timeMs": 0.0089
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9754,
            "timeMs": 0.0073
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9761,
            "timeMs": 0.007
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
            "score": 0.9169,
            "timeMs": 0.0052
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.917,
            "timeMs": 0.005
          },
          "euclideanSimilarity": {
            "score": 0.4241,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.7383,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9817,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6121,
            "timeMs": 0.0054
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.714,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7318,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7965,
            "timeMs": 0.0056
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.869,
            "timeMs": 0.0084
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8873,
            "timeMs": 0.0072
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8942,
            "timeMs": 0.0063
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
            "score": 0.9955,
            "timeMs": 0.0269
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0289
          },
          "euclideanSimilarity": {
            "score": 0.4987,
            "timeMs": 0.0127
          },
          "polynomialKernelSimilarity": {
            "score": 0.9823,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9899,
            "timeMs": 0.0118
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8518,
            "timeMs": 0.0411
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8864,
            "timeMs": 0.0401
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8862,
            "timeMs": 0.0512
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9079,
            "timeMs": 0.0395
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9251,
            "timeMs": 0.0577
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9439,
            "timeMs": 0.6253
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.947,
            "timeMs": 0.0294
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
            "score": 0.9287,
            "timeMs": 0.0138
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9282,
            "timeMs": 0.0145
          },
          "euclideanSimilarity": {
            "score": 0.1784,
            "timeMs": 0.0104
          },
          "polynomialKernelSimilarity": {
            "score": 0.7383,
            "timeMs": 0.0092
          },
          "rbfKernelSimilarity": {
            "score": 0.8088,
            "timeMs": 0.0102
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5701,
            "timeMs": 0.0351
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6512,
            "timeMs": 0.0341
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6845,
            "timeMs": 0.0242
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7507,
            "timeMs": 0.0765
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.731,
            "timeMs": 0.0399
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7672,
            "timeMs": 0.0277
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8008,
            "timeMs": 0.0265
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
            "score": 0.9968,
            "timeMs": 0.0449
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0089
          },
          "euclideanSimilarity": {
            "score": 0.6241,
            "timeMs": 0.004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9875,
            "timeMs": 0.0067
          },
          "rbfKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0041
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.846,
            "timeMs": 0.0129
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8867,
            "timeMs": 0.0112
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8904,
            "timeMs": 0.013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9128,
            "timeMs": 0.0124
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9428,
            "timeMs": 0.0206
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9604,
            "timeMs": 0.0146
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9623,
            "timeMs": 0.0137
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
            "score": 0.9066,
            "timeMs": 0.0073
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9067,
            "timeMs": 0.0138
          },
          "euclideanSimilarity": {
            "score": 0.2109,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 0.6694,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.8694,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.56,
            "timeMs": 0.0118
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6404,
            "timeMs": 0.011
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6767,
            "timeMs": 0.0123
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7449,
            "timeMs": 0.0126
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7243,
            "timeMs": 0.0195
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7634,
            "timeMs": 0.0142
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7996,
            "timeMs": 0.0135
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
            "score": 0.9932,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0021
          },
          "euclideanSimilarity": {
            "score": 0.7321,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9776,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8704,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8905,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8951,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9084,
            "timeMs": 0.003
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9015,
            "timeMs": 0.0058
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.927,
            "timeMs": 0.0047
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9325,
            "timeMs": 0.0043
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
            "score": 0.8149,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8094,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.3595,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.4904,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9688,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.2974,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.3966,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5292,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.579,
            "timeMs": 0.003
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.5389,
            "timeMs": 0.0058
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.582,
            "timeMs": 0.0046
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6403,
            "timeMs": 0.0042
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
            "timeMs": 0.0136
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0128
          },
          "euclideanSimilarity": {
            "score": 0.483,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.9886,
            "timeMs": 0.0068
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8478,
            "timeMs": 0.0222
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8874,
            "timeMs": 0.0206
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8946,
            "timeMs": 0.0234
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9152,
            "timeMs": 0.0233
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.949,
            "timeMs": 0.0366
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9665,
            "timeMs": 0.0328
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9681,
            "timeMs": 0.0395
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
            "score": 0.9979,
            "timeMs": 0.0127
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0135
          },
          "euclideanSimilarity": {
            "score": 0.1627,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 0.9915,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.7674,
            "timeMs": 0.0068
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5981,
            "timeMs": 0.0223
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6867,
            "timeMs": 0.0621
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7247,
            "timeMs": 0.0264
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7843,
            "timeMs": 0.0241
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7577,
            "timeMs": 0.0372
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8053,
            "timeMs": 0.0282
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8374,
            "timeMs": 0.0253
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
            "timeMs": 0.0143
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0075
          },
          "euclideanSimilarity": {
            "score": 0.5839,
            "timeMs": 0.0038
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0039
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8479,
            "timeMs": 0.0122
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8888,
            "timeMs": 0.0113
          },
          "vectorSimilarityCorrelation": {
            "score": 0.902,
            "timeMs": 0.0123
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9208,
            "timeMs": 0.0123
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9535,
            "timeMs": 0.0192
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9705,
            "timeMs": 0.0149
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9719,
            "timeMs": 0.0138
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
            "score": 0.9994,
            "timeMs": 0.0068
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.007
          },
          "euclideanSimilarity": {
            "score": 0.202,
            "timeMs": 0.0033
          },
          "polynomialKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.8555,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6003,
            "timeMs": 0.0112
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6904,
            "timeMs": 0.0118
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7177,
            "timeMs": 0.0121
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7807,
            "timeMs": 0.0121
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7784,
            "timeMs": 0.0202
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.822,
            "timeMs": 0.0146
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8487,
            "timeMs": 0.014
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
            "score": 0.9999,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0021
          },
          "euclideanSimilarity": {
            "score": 0.7392,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9474,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9518,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9523,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9559,
            "timeMs": 0.0031
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9358,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9562,
            "timeMs": 0.0047
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9587,
            "timeMs": 0.0043
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
            "score": 0.9979,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.3659,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9916,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9704,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7888,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8441,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8639,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8885,
            "timeMs": 0.003
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.901,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9272,
            "timeMs": 0.0045
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9328,
            "timeMs": 0.0042
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
            "timeMs": 0.0166
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0128
          },
          "euclideanSimilarity": {
            "score": 0.5222,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9767,
            "timeMs": 0.0217
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9776,
            "timeMs": 0.0207
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9776,
            "timeMs": 0.0232
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9784,
            "timeMs": 0.023
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9752,
            "timeMs": 0.0373
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9835,
            "timeMs": 0.0273
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9838,
            "timeMs": 0.0263
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
            "timeMs": 0.013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0283
          },
          "euclideanSimilarity": {
            "score": 0.1689,
            "timeMs": 0.0119
          },
          "polynomialKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.7851,
            "timeMs": 0.0122
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8022,
            "timeMs": 0.0436
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8514,
            "timeMs": 0.1057
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8696,
            "timeMs": 0.0404
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8916,
            "timeMs": 0.0416
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9032,
            "timeMs": 0.0571
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9316,
            "timeMs": 0.0436
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9372,
            "timeMs": 0.044
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
            "timeMs": 0.0124
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0163
          },
          "euclideanSimilarity": {
            "score": 0.5847,
            "timeMs": 0.0051
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0.995,
            "timeMs": 0.0064
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9745,
            "timeMs": 0.0197
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9755,
            "timeMs": 0.0192
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9756,
            "timeMs": 0.0206
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9764,
            "timeMs": 0.0266
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9693,
            "timeMs": 0.0313
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.978,
            "timeMs": 0.0231
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9785,
            "timeMs": 0.0226
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
            "score": 0.9978,
            "timeMs": 0.0149
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0146
          },
          "euclideanSimilarity": {
            "score": 0.2057,
            "timeMs": 0.0063
          },
          "polynomialKernelSimilarity": {
            "score": 0.9914,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.8615,
            "timeMs": 0.0066
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8308,
            "timeMs": 0.0215
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8642,
            "timeMs": 0.02
          },
          "vectorSimilarityCorrelation": {
            "score": 0.875,
            "timeMs": 0.0943
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8931,
            "timeMs": 0.0203
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8732,
            "timeMs": 0.0297
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9046,
            "timeMs": 0.0247
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9138,
            "timeMs": 0.0224
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
            "score": 0.999,
            "timeMs": 0.0059
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9991,
            "timeMs": 0.005
          },
          "euclideanSimilarity": {
            "score": 0.6559,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.9973,
            "timeMs": 0.011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9478,
            "timeMs": 0.0039
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9506,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9512,
            "timeMs": 0.0062
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9536,
            "timeMs": 0.0059
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9321,
            "timeMs": 0.0096
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9468,
            "timeMs": 0.0078
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9491,
            "timeMs": 0.0072
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
            "score": 0.9851,
            "timeMs": 0.0049
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9864,
            "timeMs": 0.0059
          },
          "euclideanSimilarity": {
            "score": 0.3271,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.942,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9586,
            "timeMs": 0.0041
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6709,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7486,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7887,
            "timeMs": 0.0063
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8266,
            "timeMs": 0.0061
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.819,
            "timeMs": 0.0091
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8541,
            "timeMs": 0.0074
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8713,
            "timeMs": 0.0073
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
            "timeMs": 0.0262
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0255
          },
          "euclideanSimilarity": {
            "score": 0.5164,
            "timeMs": 0.0124
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9913,
            "timeMs": 0.0119
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9722,
            "timeMs": 0.0399
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9735,
            "timeMs": 0.0379
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9736,
            "timeMs": 0.0408
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9748,
            "timeMs": 0.0424
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9706,
            "timeMs": 0.1163
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.98,
            "timeMs": 0.044
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9805,
            "timeMs": 0.0435
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
            "timeMs": 0.0364
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0296
          },
          "euclideanSimilarity": {
            "score": 0.1608,
            "timeMs": 0.0122
          },
          "polynomialKernelSimilarity": {
            "score": 0.9915,
            "timeMs": 0.007
          },
          "rbfKernelSimilarity": {
            "score": 0.7616,
            "timeMs": 0.0128
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7891,
            "timeMs": 0.0438
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8373,
            "timeMs": 0.0394
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8536,
            "timeMs": 0.0413
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8768,
            "timeMs": 0.039
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8692,
            "timeMs": 0.058
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8977,
            "timeMs": 0.0427
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9069,
            "timeMs": 0.0401
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
            "timeMs": 0.0124
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0151
          },
          "euclideanSimilarity": {
            "score": 0.5704,
            "timeMs": 0.0072
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0088
          },
          "rbfKernelSimilarity": {
            "score": 0.9943,
            "timeMs": 0.0067
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9706,
            "timeMs": 0.0199
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9718,
            "timeMs": 0.1093
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9719,
            "timeMs": 0.0206
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9729,
            "timeMs": 0.0197
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9628,
            "timeMs": 0.0313
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.973,
            "timeMs": 0.0266
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9738,
            "timeMs": 0.0237
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
            "timeMs": 0.0151
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0154
          },
          "euclideanSimilarity": {
            "score": 0.2332,
            "timeMs": 0.0065
          },
          "polynomialKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.8975,
            "timeMs": 0.0076
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8304,
            "timeMs": 0.0221
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.866,
            "timeMs": 0.0263
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8775,
            "timeMs": 0.0204
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8957,
            "timeMs": 0.0202
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8939,
            "timeMs": 0.031
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9208,
            "timeMs": 0.0231
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9272,
            "timeMs": 0.0226
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
            "score": 1,
            "timeMs": 0.0049
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.7927,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9741,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.975,
            "timeMs": 0.0057
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9751,
            "timeMs": 0.0082
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.976,
            "timeMs": 0.006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9678,
            "timeMs": 0.009
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9782,
            "timeMs": 0.0092
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9788,
            "timeMs": 0.0244
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
            "score": 0.9965,
            "timeMs": 0.0049
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9956,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.2812,
            "timeMs": 0.0041
          },
          "polynomialKernelSimilarity": {
            "score": 0.9862,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9367,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7091,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7894,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8045,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8471,
            "timeMs": 0.0057
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8615,
            "timeMs": 0.0087
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8945,
            "timeMs": 0.006
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9054,
            "timeMs": 0.0078
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
            "timeMs": 0.0231
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0316
          },
          "euclideanSimilarity": {
            "score": 0.4894,
            "timeMs": 0.0115
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9892,
            "timeMs": 0.0117
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8595,
            "timeMs": 0.0376
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8964,
            "timeMs": 0.0409
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8973,
            "timeMs": 0.0391
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.919,
            "timeMs": 0.0391
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9534,
            "timeMs": 0.0947
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9704,
            "timeMs": 0.0449
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9718,
            "timeMs": 0.0417
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
            "timeMs": 0.0347
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0284
          },
          "euclideanSimilarity": {
            "score": 0.1608,
            "timeMs": 0.0118
          },
          "polynomialKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0059
          },
          "rbfKernelSimilarity": {
            "score": 0.7615,
            "timeMs": 0.012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6265,
            "timeMs": 0.0411
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7177,
            "timeMs": 0.041
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7403,
            "timeMs": 0.0409
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7998,
            "timeMs": 0.0386
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8023,
            "timeMs": 0.0561
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8463,
            "timeMs": 0.5129
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8685,
            "timeMs": 0.0267
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
            "timeMs": 0.0078
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0075
          },
          "euclideanSimilarity": {
            "score": 0.5982,
            "timeMs": 0.004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0062
          },
          "rbfKernelSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0042
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8844,
            "timeMs": 0.0123
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.913,
            "timeMs": 0.0117
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9218,
            "timeMs": 0.0134
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9351,
            "timeMs": 0.1979
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9576,
            "timeMs": 0.0242
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9714,
            "timeMs": 0.0152
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9724,
            "timeMs": 0.0143
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
            "score": 0.9983,
            "timeMs": 0.0077
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0093
          },
          "euclideanSimilarity": {
            "score": 0.2306,
            "timeMs": 0.004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9931,
            "timeMs": 0.006
          },
          "rbfKernelSimilarity": {
            "score": 0.8946,
            "timeMs": 0.0041
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6648,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.747,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7568,
            "timeMs": 0.0396
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8119,
            "timeMs": 0.0128
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8271,
            "timeMs": 0.023
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8695,
            "timeMs": 0.0167
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8869,
            "timeMs": 0.016
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
            "score": 0.9998,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.8089,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8056,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.857,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8761,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9007,
            "timeMs": 0.003
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9626,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9771,
            "timeMs": 0.0048
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.978,
            "timeMs": 0.0042
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
            "score": 0.9958,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9959,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.4715,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9836,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9875,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7054,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7858,
            "timeMs": 0.0437
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7795,
            "timeMs": 0.0044
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8321,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.886,
            "timeMs": 0.0073
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9118,
            "timeMs": 0.0051
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9188,
            "timeMs": 0.0045
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
            "score": 0.9935,
            "timeMs": 0.0139
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9935,
            "timeMs": 0.0138
          },
          "euclideanSimilarity": {
            "score": 0.4758,
            "timeMs": 0.0063
          },
          "polynomialKernelSimilarity": {
            "score": 0.9745,
            "timeMs": 0.0048
          },
          "rbfKernelSimilarity": {
            "score": 0.9879,
            "timeMs": 0.0064
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7792,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8356,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8434,
            "timeMs": 0.0263
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.875,
            "timeMs": 0.0531
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9098,
            "timeMs": 0.0372
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9321,
            "timeMs": 0.0265
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9366,
            "timeMs": 0.0252
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
            "score": 0.9239,
            "timeMs": 0.0132
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9239,
            "timeMs": 0.0134
          },
          "euclideanSimilarity": {
            "score": 0.1855,
            "timeMs": 0.0064
          },
          "polynomialKernelSimilarity": {
            "score": 0.7227,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.8245,
            "timeMs": 0.0064
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5475,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.618,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6752,
            "timeMs": 0.0245
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7369,
            "timeMs": 0.0232
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7085,
            "timeMs": 0.04
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.741,
            "timeMs": 0.0284
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7769,
            "timeMs": 0.0273
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
            "score": 0.9946,
            "timeMs": 0.0069
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9946,
            "timeMs": 0.0067
          },
          "euclideanSimilarity": {
            "score": 0.5691,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 0.9792,
            "timeMs": 0.0082
          },
          "rbfKernelSimilarity": {
            "score": 0.9943,
            "timeMs": 0.0549
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8057,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8531,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8545,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.884,
            "timeMs": 0.0013
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.905,
            "timeMs": 0.0221
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9287,
            "timeMs": 0.0154
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9337,
            "timeMs": 0.0142
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
            "score": 0.8891,
            "timeMs": 0.0078
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8935,
            "timeMs": 0.0072
          },
          "euclideanSimilarity": {
            "score": 0.2103,
            "timeMs": 0.0037
          },
          "polynomialKernelSimilarity": {
            "score": 0.6163,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.8685,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5145,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.562,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6326,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7004,
            "timeMs": 0.0011
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.679,
            "timeMs": 0.0195
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7119,
            "timeMs": 0.0147
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7534,
            "timeMs": 0.0142
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
            "score": 0.9949,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.7322,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9824,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8152,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8532,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8648,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.886,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9062,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9316,
            "timeMs": 0.0045
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9367,
            "timeMs": 0.0042
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
            "score": 0.9404,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9585,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.3381,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.7851,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9624,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5064,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5383,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6361,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6942,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7221,
            "timeMs": 0.0061
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7419,
            "timeMs": 0.0047
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7667,
            "timeMs": 0.0043
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
            "score": 0.9993,
            "timeMs": 0.0135
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9958,
            "timeMs": 0.0135
          },
          "euclideanSimilarity": {
            "score": 0.5299,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.9922,
            "timeMs": 0.0062
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9678,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.97,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9704,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9721,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9723,
            "timeMs": 0.0357
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9805,
            "timeMs": 0.0291
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9809,
            "timeMs": 0.0265
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
            "score": 0.9823,
            "timeMs": 0.0133
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9173,
            "timeMs": 0.0144
          },
          "euclideanSimilarity": {
            "score": 0.1718,
            "timeMs": 0.0065
          },
          "polynomialKernelSimilarity": {
            "score": 0.9307,
            "timeMs": 0.0048
          },
          "rbfKernelSimilarity": {
            "score": 0.7925,
            "timeMs": 0.0064
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7793,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8311,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8436,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8712,
            "timeMs": 0.0021
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8816,
            "timeMs": 0.0462
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9092,
            "timeMs": 0.0288
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9169,
            "timeMs": 0.03
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
            "score": 0.9994,
            "timeMs": 0.0071
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0071
          },
          "euclideanSimilarity": {
            "score": 0.6206,
            "timeMs": 0.0033
          },
          "polynomialKernelSimilarity": {
            "score": 0.9975,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.961,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9642,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9647,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9671,
            "timeMs": 0.0011
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9729,
            "timeMs": 0.0185
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9826,
            "timeMs": 0.0138
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9831,
            "timeMs": 0.0133
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
            "score": 0.9812,
            "timeMs": 0.0069
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9014,
            "timeMs": 0.0068
          },
          "euclideanSimilarity": {
            "score": 0.2114,
            "timeMs": 0.0033
          },
          "polynomialKernelSimilarity": {
            "score": 0.9266,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.8702,
            "timeMs": 0.0044
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7874,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8326,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8419,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.868,
            "timeMs": 0.0011
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8851,
            "timeMs": 0.0211
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9064,
            "timeMs": 0.0154
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9127,
            "timeMs": 0.0146
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
            "score": 0.9993,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.997,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.7699,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0521
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9203,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9358,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9412,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9497,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.971,
            "timeMs": 0.0085
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9809,
            "timeMs": 0.0054
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9814,
            "timeMs": 0.0048
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
            "score": 0.9826,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9312,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.3631,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9324,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.9697,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7671,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8041,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.823,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8447,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8252,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.844,
            "timeMs": 0.0049
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8552,
            "timeMs": 0.0044
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
            "score": 0.9988,
            "timeMs": 0.0132
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0133
          },
          "euclideanSimilarity": {
            "score": 0.5311,
            "timeMs": 0.0063
          },
          "polynomialKernelSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.9922,
            "timeMs": 0.0065
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.951,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9583,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9609,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9645,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9636,
            "timeMs": 0.037
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9733,
            "timeMs": 0.0267
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.974,
            "timeMs": 0.0272
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
            "score": 0.9573,
            "timeMs": 0.0124
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9574,
            "timeMs": 0.0127
          },
          "euclideanSimilarity": {
            "score": 0.1473,
            "timeMs": 0.0374
          },
          "polynomialKernelSimilarity": {
            "score": 0.8375,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0.7154,
            "timeMs": 0.0068
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7163,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7762,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8028,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8335,
            "timeMs": 0.0021
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7997,
            "timeMs": 0.0377
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8253,
            "timeMs": 0.028
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8423,
            "timeMs": 0.026
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
            "score": 0.9981,
            "timeMs": 0.0069
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9982,
            "timeMs": 0.007
          },
          "euclideanSimilarity": {
            "score": 0.5598,
            "timeMs": 0.0035
          },
          "polynomialKernelSimilarity": {
            "score": 0.9926,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9938,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9499,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9544,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9551,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9585,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9621,
            "timeMs": 0.0275
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9731,
            "timeMs": 0.0148
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9739,
            "timeMs": 0.0248
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
            "score": 0.9591,
            "timeMs": 0.0079
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9601,
            "timeMs": 0.0072
          },
          "euclideanSimilarity": {
            "score": 0.2149,
            "timeMs": 0.0035
          },
          "polynomialKernelSimilarity": {
            "score": 0.8448,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.8751,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7222,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7803,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8047,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.836,
            "timeMs": 0.0012
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8233,
            "timeMs": 0.0196
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.852,
            "timeMs": 0.0141
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8669,
            "timeMs": 0.0136
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
            "score": 0.9992,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.805,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9715,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9725,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9726,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9736,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9667,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9724,
            "timeMs": 0.0044
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9728,
            "timeMs": 0.0041
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
            "score": 0.9622,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9622,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.3713,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.8616,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9717,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7204,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7837,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8113,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8431,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8055,
            "timeMs": 0.0056
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8364,
            "timeMs": 0.0044
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8546,
            "timeMs": 0.0041
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
            "timeMs": 0.0129
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0134
          },
          "euclideanSimilarity": {
            "score": 0.509,
            "timeMs": 0.0063
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.9907,
            "timeMs": 0.0069
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9801,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9822,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9838,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9851,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0412
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0312
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9997,
            "timeMs": 0.0369
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
            "timeMs": 0.0131
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.013
          },
          "euclideanSimilarity": {
            "score": 0.164,
            "timeMs": 0.0061
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.7711,
            "timeMs": 0.0064
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8986,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9268,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9324,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9467,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0388
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.998,
            "timeMs": 0.0303
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.998,
            "timeMs": 0.0369
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
            "timeMs": 0.0081
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0093
          },
          "euclideanSimilarity": {
            "score": 0.6141,
            "timeMs": 0.0037
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9961,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9922,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9926,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9929,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9932,
            "timeMs": 0.0012
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0221
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0159
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9997,
            "timeMs": 0.0151
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
            "timeMs": 0.0072
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0067
          },
          "euclideanSimilarity": {
            "score": 0.2389,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9035,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.926,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9436,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9544,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9615,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0281
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0169
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9979,
            "timeMs": 0.0165
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.8144,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.994,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9942,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9943,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9945,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9999,
            "timeMs": 0.006
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0045
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9999,
            "timeMs": 0.0043
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.4145,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9802,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9692,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9722,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.973,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9753,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9985,
            "timeMs": 0.006
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0049
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9991,
            "timeMs": 0.0044
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
            "timeMs": 0.0129
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0149
          },
          "euclideanSimilarity": {
            "score": 0.483,
            "timeMs": 0.0078
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9886,
            "timeMs": 0.0063
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9945,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9946,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9947,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9948,
            "timeMs": 0.0017
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0384
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0294
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9997,
            "timeMs": 0.0288
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
            "timeMs": 0.0124
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0126
          },
          "euclideanSimilarity": {
            "score": 0.1748,
            "timeMs": 0.0443
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.8002,
            "timeMs": 0.0066
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9698,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9728,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9738,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.976,
            "timeMs": 0.0017
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9979,
            "timeMs": 0.1052
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0342
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9988,
            "timeMs": 0.0324
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
            "timeMs": 0.0072
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0073
          },
          "euclideanSimilarity": {
            "score": 0.6139,
            "timeMs": 0.0037
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0.9961,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9951,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9953,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9953,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9954,
            "timeMs": 0.0014
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0227
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0169
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9998,
            "timeMs": 0.0154
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
            "timeMs": 0.0069
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0073
          },
          "euclideanSimilarity": {
            "score": 0.213,
            "timeMs": 0.0036
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.8724,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9472,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9557,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9596,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9648,
            "timeMs": 0.0012
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0201
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0158
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9984,
            "timeMs": 0.0146
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0089
          },
          "euclideanSimilarity": {
            "score": 0.7927,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9951,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9952,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9952,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9953,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0346
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9998,
            "timeMs": 0.0047
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.3676,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9708,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9344,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9487,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9571,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9641,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0057
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0081
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9992,
            "timeMs": 0.0042
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
            "score": 0.9977,
            "timeMs": 0.0137
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0133
          },
          "euclideanSimilarity": {
            "score": 0.5234,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 0.9909,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9533,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.957,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9575,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9603,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9491,
            "timeMs": 0.0348
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9644,
            "timeMs": 0.0304
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9659,
            "timeMs": 0.0244
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
            "score": 0.9361,
            "timeMs": 0.0129
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9372,
            "timeMs": 0.014
          },
          "euclideanSimilarity": {
            "score": 0.163,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 0.7629,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.7681,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6698,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7393,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7749,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8126,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7797,
            "timeMs": 0.0359
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8103,
            "timeMs": 0.0259
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8324,
            "timeMs": 0.0256
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
            "score": 0.9982,
            "timeMs": 0.0068
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0227
          },
          "euclideanSimilarity": {
            "score": 0.6342,
            "timeMs": 0.0036
          },
          "polynomialKernelSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9597,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.962,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9623,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9643,
            "timeMs": 0.0011
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9625,
            "timeMs": 0.0193
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9733,
            "timeMs": 0.0145
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9741,
            "timeMs": 0.0137
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
            "score": 0.9327,
            "timeMs": 0.0067
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9329,
            "timeMs": 0.0068
          },
          "euclideanSimilarity": {
            "score": 0.2201,
            "timeMs": 0.0035
          },
          "polynomialKernelSimilarity": {
            "score": 0.7539,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.882,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6548,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7378,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7738,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8176,
            "timeMs": 0.001
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8142,
            "timeMs": 0.0196
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8502,
            "timeMs": 0.0499
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8685,
            "timeMs": 0.0153
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
            "score": 0.9981,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.7849,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 0.993,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9585,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9605,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9608,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9626,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9514,
            "timeMs": 0.0068
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9668,
            "timeMs": 0.0049
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9682,
            "timeMs": 0.0046
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
            "score": 0.9422,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9487,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.3784,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.7985,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9734,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7219,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.77,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7975,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8249,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7829,
            "timeMs": 0.0059
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8128,
            "timeMs": 0.0045
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8342,
            "timeMs": 0.0045
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
            "score": 0.9948,
            "timeMs": 0.028
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0265
          },
          "euclideanSimilarity": {
            "score": 0.4086,
            "timeMs": 0.0119
          },
          "polynomialKernelSimilarity": {
            "score": 0.9796,
            "timeMs": 0.0075
          },
          "rbfKernelSimilarity": {
            "score": 0.9793,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8259,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8706,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8759,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9001,
            "timeMs": 0.0036
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9172,
            "timeMs": 0.0822
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9381,
            "timeMs": 1.7284
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9419,
            "timeMs": 0.0644
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
            "score": 0.912,
            "timeMs": 0.0808
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9124,
            "timeMs": 0.0285
          },
          "euclideanSimilarity": {
            "score": 0.123,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.6809,
            "timeMs": 0.0103
          },
          "rbfKernelSimilarity": {
            "score": 0.6014,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5357,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6052,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6622,
            "timeMs": 0.0039
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7293,
            "timeMs": 0.0576
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7125,
            "timeMs": 0.0767
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7529,
            "timeMs": 0.0542
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.792,
            "timeMs": 0.0844
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
            "score": 0.9959,
            "timeMs": 0.0142
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9959,
            "timeMs": 0.015
          },
          "euclideanSimilarity": {
            "score": 0.5228,
            "timeMs": 0.0181
          },
          "polynomialKernelSimilarity": {
            "score": 0.9839,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8203,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.868,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.884,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9056,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9301,
            "timeMs": 0.0411
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9502,
            "timeMs": 0.0293
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9531,
            "timeMs": 0.0278
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
            "score": 0.9127,
            "timeMs": 0.0124
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.915,
            "timeMs": 0.013
          },
          "euclideanSimilarity": {
            "score": 0.1753,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.6859,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.8014,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5416,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6108,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6743,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7362,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7003,
            "timeMs": 0.0357
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7395,
            "timeMs": 0.0526
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7806,
            "timeMs": 0.0258
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
            "score": 0.9976,
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0034
          },
          "euclideanSimilarity": {
            "score": 0.7588,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9913,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7977,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.861,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8913,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9133,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9437,
            "timeMs": 0.0116
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9548,
            "timeMs": 0.0075
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9563,
            "timeMs": 0.007
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
            "score": 0.796,
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.7958,
            "timeMs": 0.0033
          },
          "euclideanSimilarity": {
            "score": 0.222,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.3822,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.8844,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3521,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4419,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5688,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6319,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.5992,
            "timeMs": 0.0095
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6385,
            "timeMs": 0.0075
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6961,
            "timeMs": 0.007
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
            "score": 0.9958,
            "timeMs": 0.0249
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9958,
            "timeMs": 0.0249
          },
          "euclideanSimilarity": {
            "score": 0.4312,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9834,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.9827,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8573,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8911,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8957,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9139,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9293,
            "timeMs": 0.0724
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9466,
            "timeMs": 0.0571
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9493,
            "timeMs": 0.0535
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
            "score": 0.9037,
            "timeMs": 0.0268
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9039,
            "timeMs": 0.0245
          },
          "euclideanSimilarity": {
            "score": 0.1219,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.6543,
            "timeMs": 0.007
          },
          "rbfKernelSimilarity": {
            "score": 0.595,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5328,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5999,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6478,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7181,
            "timeMs": 0.0036
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7059,
            "timeMs": 0.0825
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7406,
            "timeMs": 0.0543
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7782,
            "timeMs": 0.0519
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
            "score": 0.9958,
            "timeMs": 0.0131
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9958,
            "timeMs": 0.0133
          },
          "euclideanSimilarity": {
            "score": 0.5222,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9836,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.866,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.898,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9033,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9203,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.941,
            "timeMs": 0.0378
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9583,
            "timeMs": 0.0277
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9604,
            "timeMs": 0.027
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
            "score": 0.9066,
            "timeMs": 0.0123
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9075,
            "timeMs": 0.0127
          },
          "euclideanSimilarity": {
            "score": 0.1747,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.6665,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.7999,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5246,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5865,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6436,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7137,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7393,
            "timeMs": 0.0349
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7781,
            "timeMs": 0.0294
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.811,
            "timeMs": 0.0253
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
            "score": 0.9944,
            "timeMs": 0.0032
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.6613,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9796,
            "timeMs": 0.046
          },
          "rbfKernelSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.708,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7909,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8303,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8647,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9223,
            "timeMs": 0.0109
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.937,
            "timeMs": 0.0076
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9398,
            "timeMs": 0.0072
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
            "score": 0.9142,
            "timeMs": 0.0035
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9192,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.2998,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.7033,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9469,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5216,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5738,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6767,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7261,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.735,
            "timeMs": 0.0096
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7621,
            "timeMs": 0.0233
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.79,
            "timeMs": 0.0074
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
            "timeMs": 0.025
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.4105,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.9796,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9526,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9621,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.968,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9719,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9886,
            "timeMs": 0.1096
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9925,
            "timeMs": 0.0639
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9925,
            "timeMs": 0.0562
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
            "score": 0.9981,
            "timeMs": 0.0282
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.1235,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9924,
            "timeMs": 0.0063
          },
          "rbfKernelSimilarity": {
            "score": 0.6041,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8312,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8746,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8787,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9036,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9382,
            "timeMs": 0.0708
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9578,
            "timeMs": 0.0534
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9601,
            "timeMs": 0.2824
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.5123,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0.991,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9478,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9589,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9665,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9708,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9888,
            "timeMs": 0.0476
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9925,
            "timeMs": 0.0144
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9926,
            "timeMs": 0.0105
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
            "score": 0.9986,
            "timeMs": 0.0302
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.1856,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9943,
            "timeMs": 0.006
          },
          "rbfKernelSimilarity": {
            "score": 0.8249,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8414,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8833,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8982,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9169,
            "timeMs": 0.002
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9504,
            "timeMs": 0.0912
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9666,
            "timeMs": 0.0128
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9681,
            "timeMs": 0.01
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
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.6569,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.9973,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8221,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8803,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9131,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9318,
            "timeMs": 0.0009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9797,
            "timeMs": 0.0105
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9874,
            "timeMs": 0.0042
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9877,
            "timeMs": 0.0029
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
            "score": 0.9975,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.2722,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9899,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.931,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7371,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8149,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8509,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8817,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9245,
            "timeMs": 0.0096
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.945,
            "timeMs": 0.0037
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9482,
            "timeMs": 0.0028
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
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.4264,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.9821,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9789,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9824,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9867,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.988,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0702
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0211
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9999,
            "timeMs": 0.0188
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
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.1214,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.5925,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9317,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9477,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9556,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9629,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0697
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0207
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9995,
            "timeMs": 0.0185
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
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.5111,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.9909,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9606,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9693,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9782,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.981,
            "timeMs": 0.0029
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0396
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9999,
            "timeMs": 0.013
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9999,
            "timeMs": 0.0105
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
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.1657,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0053
          },
          "rbfKernelSimilarity": {
            "score": 0.7761,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9181,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9391,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9508,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9592,
            "timeMs": 0.002
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.999,
            "timeMs": 0.0384
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0134
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9994,
            "timeMs": 0.0099
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
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.6918,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0109
          },
          "rbfKernelSimilarity": {
            "score": 0.998,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8376,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8919,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9261,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9423,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9999,
            "timeMs": 0.01
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0038
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9999,
            "timeMs": 0.0028
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
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.317,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9547,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8179,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8778,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9122,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9316,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0097
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0034
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9996,
            "timeMs": 0.0027
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
            "score": 0.988,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.988,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.4091,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9535,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.9794,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6932,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7717,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7841,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8322,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8569,
            "timeMs": 0.0719
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.892,
            "timeMs": 0.0209
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9038,
            "timeMs": 0.0177
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
            "score": 0.8307,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8307,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.1236,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.4437,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.6049,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3181,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4106,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5407,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.5948,
            "timeMs": 0.0032
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.553,
            "timeMs": 0.0703
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5876,
            "timeMs": 0.0191
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6385,
            "timeMs": 0.0164
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
            "score": 0.988,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9881,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.4959,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9548,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.9897,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7136,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7862,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7989,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8416,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8517,
            "timeMs": 0.0341
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8892,
            "timeMs": 0.0087
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.902,
            "timeMs": 0.0072
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
            "score": 0.815,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8149,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.1614,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.41,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.7633,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3652,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4479,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.568,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6299,
            "timeMs": 0.0017
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.5843,
            "timeMs": 0.0339
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6172,
            "timeMs": 0.0097
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6692,
            "timeMs": 0.0076
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
            "score": 0.9873,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9873,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.6597,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9579,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5531,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.64,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.675,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7497,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7779,
            "timeMs": 0.0096
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8205,
            "timeMs": 0.0035
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.847,
            "timeMs": 0.0025
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
            "score": 0.8936,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9002,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.3286,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.6504,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9591,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5137,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.564,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6448,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7134,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6662,
            "timeMs": 0.0146
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7034,
            "timeMs": 0.0043
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7502,
            "timeMs": 0.0028
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
            "score": 0.9892,
            "timeMs": 0.003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9892,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.4001,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9581,
            "timeMs": 0.0081
          },
          "rbfKernelSimilarity": {
            "score": 0.9778,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6673,
            "timeMs": 0.01
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7547,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7683,
            "timeMs": 0.0496
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8226,
            "timeMs": 0.0039
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8594,
            "timeMs": 0.071
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8952,
            "timeMs": 0.0217
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9067,
            "timeMs": 0.017
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
            "score": 0.8635,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8639,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.1246,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.533,
            "timeMs": 0.0058
          },
          "rbfKernelSimilarity": {
            "score": 0.6107,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3753,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4526,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5834,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6426,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6011,
            "timeMs": 0.0894
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6303,
            "timeMs": 0.0229
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6782,
            "timeMs": 0.0176
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
            "score": 0.9913,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9913,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.5137,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9668,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.9911,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6829,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7687,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7787,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8318,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.884,
            "timeMs": 0.037
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9147,
            "timeMs": 0.0107
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9226,
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
            "score": 0.8707,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8709,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.1731,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.5583,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.7959,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3803,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4554,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5717,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6315,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6199,
            "timeMs": 0.0338
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6477,
            "timeMs": 0.0097
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.693,
            "timeMs": 0.0073
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
            "score": 0.9964,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.7796,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9877,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7306,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8101,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8471,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8784,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.917,
            "timeMs": 0.0088
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9375,
            "timeMs": 0.0037
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9413,
            "timeMs": 0.0023
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
            "score": 0.8183,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8163,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.2868,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.457,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.94,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.2387,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.3385,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5243,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.5678,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4941,
            "timeMs": 0.0084
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5298,
            "timeMs": 0.003
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5574,
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
            "score": 0.9993,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.4351,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0045
          },
          "rbfKernelSimilarity": {
            "score": 0.9833,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7467,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8226,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8492,
            "timeMs": 0.0419
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8832,
            "timeMs": 0.0039
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9433,
            "timeMs": 0.0739
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9623,
            "timeMs": 0.0297
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9643,
            "timeMs": 0.0201
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
            "score": 0.9831,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9816,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.1314,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9335,
            "timeMs": 0.0064
          },
          "rbfKernelSimilarity": {
            "score": 0.6462,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5641,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6511,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7116,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.772,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7947,
            "timeMs": 0.0714
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8366,
            "timeMs": 0.0237
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8597,
            "timeMs": 0.0208
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
            "score": 0.999,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.4824,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9961,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9886,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7385,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8159,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8314,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8721,
            "timeMs": 0.002
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9327,
            "timeMs": 0.8725
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9543,
            "timeMs": 0.0148
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9571,
            "timeMs": 0.0101
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
            "score": 0.9806,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9789,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.1671,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9242,
            "timeMs": 0.0078
          },
          "rbfKernelSimilarity": {
            "score": 0.7799,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5353,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6112,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6742,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7434,
            "timeMs": 0.002
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.761,
            "timeMs": 0.037
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8037,
            "timeMs": 0.0106
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8336,
            "timeMs": 0.0086
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
            "score": 0.999,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.6673,
            "timeMs": 0.0464
          },
          "polynomialKernelSimilarity": {
            "score": 0.9959,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6338,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7385,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8037,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.849,
            "timeMs": 0.0009
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9455,
            "timeMs": 0.0109
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9648,
            "timeMs": 0.0041
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9667,
            "timeMs": 0.0026
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
            "score": 0.9785,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9772,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.2938,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9171,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9438,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5261,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.595,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6925,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7531,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6733,
            "timeMs": 0.0087
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7254,
            "timeMs": 0.0029
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7783,
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
            "score": 0.996,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.996,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.4339,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9843,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.9831,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8619,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8955,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9018,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9192,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9346,
            "timeMs": 0.0718
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9529,
            "timeMs": 0.02
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9554,
            "timeMs": 0.0168
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
            "score": 0.9032,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9037,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.1209,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.6524,
            "timeMs": 0.0068
          },
          "rbfKernelSimilarity": {
            "score": 0.5896,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5352,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6018,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6529,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7198,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7182,
            "timeMs": 0.0776
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7515,
            "timeMs": 0.0197
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7859,
            "timeMs": 0.0164
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
            "score": 0.9946,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9947,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.4864,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.979,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.9889,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8291,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.872,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.874,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8992,
            "timeMs": 0.0018
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9175,
            "timeMs": 0.0357
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9386,
            "timeMs": 0.0092
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9424,
            "timeMs": 0.0075
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
            "score": 0.9017,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9038,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.1703,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.6508,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.7887,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5318,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5979,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.636,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7098,
            "timeMs": 0.0019
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7198,
            "timeMs": 0.0361
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7586,
            "timeMs": 0.0119
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7956,
            "timeMs": 0.0095
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
            "score": 0.9958,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.7089,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9847,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7738,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8423,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8733,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8987,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9315,
            "timeMs": 0.0085
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9505,
            "timeMs": 0.0028
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9532,
            "timeMs": 0.002
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
            "score": 0.914,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9138,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.3114,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.7045,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9523,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5353,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6125,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6445,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7225,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7779,
            "timeMs": 0.0084
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8099,
            "timeMs": 0.003
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.833,
            "timeMs": 0.0021
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
            "score": 0.9929,
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9929,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.3718,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.972,
            "timeMs": 0.0108
          },
          "rbfKernelSimilarity": {
            "score": 0.9719,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.744,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8135,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8254,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8638,
            "timeMs": 0.0049
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8956,
            "timeMs": 0.1039
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9241,
            "timeMs": 0.0295
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9305,
            "timeMs": 0.0265
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
            "score": 0.8891,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8891,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.101,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.6075,
            "timeMs": 0.006
          },
          "rbfKernelSimilarity": {
            "score": 0.4525,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5065,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5384,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6267,
            "timeMs": 0.0051
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6914,
            "timeMs": 0.0045
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6639,
            "timeMs": 0.1307
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6959,
            "timeMs": 0.025
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7394,
            "timeMs": 0.0282
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
            "score": 0.9933,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.4593,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.974,
            "timeMs": 0.0057
          },
          "rbfKernelSimilarity": {
            "score": 0.9862,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7315,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8068,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8107,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8559,
            "timeMs": 0.0027
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9046,
            "timeMs": 0.0501
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9316,
            "timeMs": 0.0138
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.937,
            "timeMs": 0.0109
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
            "score": 0.8577,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8586,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1439,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.5184,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0.7017,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4386,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4876,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5915,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6596,
            "timeMs": 0.0026
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.5927,
            "timeMs": 0.0509
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6336,
            "timeMs": 0.0167
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.6929,
            "timeMs": 0.0134
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
            "score": 0.9925,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.6463,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9728,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.997,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6726,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7617,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8087,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8466,
            "timeMs": 0.0008
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8521,
            "timeMs": 0.0135
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8926,
            "timeMs": 0.0039
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9058,
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
            "score": 0.8631,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8728,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.2451,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.5498,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9095,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4154,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4794,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5702,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6407,
            "timeMs": 0.0008
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6013,
            "timeMs": 0.012
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.6499,
            "timeMs": 0.0038
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7142,
            "timeMs": 0.0027
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
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.3497,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.9966,
            "timeMs": 0.0058
          },
          "rbfKernelSimilarity": {
            "score": 0.966,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.893,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9182,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9266,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9385,
            "timeMs": 0.005
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9579,
            "timeMs": 0.1369
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9712,
            "timeMs": 0.0265
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9723,
            "timeMs": 0.0239
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
            "score": 0.9815,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9816,
            "timeMs": 0.0026
          },
          "euclideanSimilarity": {
            "score": 0.1038,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.9276,
            "timeMs": 0.0164
          },
          "rbfKernelSimilarity": {
            "score": 0.4743,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6467,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7343,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7499,
            "timeMs": 0.0054
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8066,
            "timeMs": 0.005
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8242,
            "timeMs": 0.1014
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8625,
            "timeMs": 0.0252
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8797,
            "timeMs": 0.0211
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
            "score": 0.9993,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.4566,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0044
          },
          "rbfKernelSimilarity": {
            "score": 0.9859,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8859,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9142,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9227,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9359,
            "timeMs": 0.0025
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9583,
            "timeMs": 0.0548
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9712,
            "timeMs": 0.017
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9722,
            "timeMs": 0.0144
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
            "score": 0.9819,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.982,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.1377,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.929,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.6758,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6596,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7429,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7726,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8198,
            "timeMs": 0.0026
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8385,
            "timeMs": 0.0514
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8756,
            "timeMs": 0.0146
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8904,
            "timeMs": 0.0122
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
            "score": 0.9995,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.6869,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.754,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8334,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8751,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9029,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9567,
            "timeMs": 0.0117
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9726,
            "timeMs": 0.0039
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9738,
            "timeMs": 0.0026
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
            "score": 0.9884,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9882,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.3068,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9544,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9502,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5604,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6569,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7283,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7904,
            "timeMs": 0.0006
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7859,
            "timeMs": 0.0119
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8343,
            "timeMs": 0.0038
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8605,
            "timeMs": 0.0026
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
            "score": 0.9984,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.998,
            "timeMs": 0.0021
          },
          "euclideanSimilarity": {
            "score": 0.3758,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.9935,
            "timeMs": 0.0057
          },
          "rbfKernelSimilarity": {
            "score": 0.9728,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8628,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8964,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8978,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9175,
            "timeMs": 0.0048
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9378,
            "timeMs": 0.106
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9564,
            "timeMs": 0.0654
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9587,
            "timeMs": 0.0317
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
            "score": 0.9585,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9489,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.1064,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.8413,
            "timeMs": 0.0076
          },
          "rbfKernelSimilarity": {
            "score": 0.4936,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5724,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6576,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6967,
            "timeMs": 0.0051
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7616,
            "timeMs": 0.0049
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7613,
            "timeMs": 0.1063
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8043,
            "timeMs": 0.0299
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8343,
            "timeMs": 0.0245
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
            "score": 0.9983,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.4595,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9932,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0.9863,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8893,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9133,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9216,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9327,
            "timeMs": 0.0024
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9394,
            "timeMs": 0.0486
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9578,
            "timeMs": 0.013
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.96,
            "timeMs": 0.0104
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
            "score": 0.9635,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9547,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.147,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.8599,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.714,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5761,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6612,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7062,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7669,
            "timeMs": 0.0026
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7646,
            "timeMs": 0.0483
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8023,
            "timeMs": 0.0114
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8299,
            "timeMs": 0.0093
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
            "score": 0.998,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.6368,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9924,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9968,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7011,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7951,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8464,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8812,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9282,
            "timeMs": 0.0114
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.951,
            "timeMs": 0.0038
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9542,
            "timeMs": 0.0024
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
            "score": 0.9721,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9676,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.3048,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.8938,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9493,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5436,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6247,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7078,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7671,
            "timeMs": 0.0007
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7349,
            "timeMs": 0.0129
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.784,
            "timeMs": 0.0039
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8215,
            "timeMs": 0.0025
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
            "score": 0.9957,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9957,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.4358,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9829,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0.9834,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8622,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8932,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8946,
            "timeMs": 0.0044
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9133,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9323,
            "timeMs": 0.0743
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9487,
            "timeMs": 0.0222
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9511,
            "timeMs": 0.0177
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
            "score": 0.8928,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8929,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.1191,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.6199,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.5788,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5337,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5993,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6604,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7252,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7012,
            "timeMs": 0.0702
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7347,
            "timeMs": 0.0178
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7725,
            "timeMs": 0.0143
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
            "score": 0.9984,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.5585,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9936,
            "timeMs": 0.0062
          },
          "rbfKernelSimilarity": {
            "score": 0.9938,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8974,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.919,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9267,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9368,
            "timeMs": 0.0033
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9447,
            "timeMs": 0.0711
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9588,
            "timeMs": 0.0257
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9605,
            "timeMs": 0.0166
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
            "score": 0.9571,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9581,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.1964,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.8375,
            "timeMs": 0.0065
          },
          "rbfKernelSimilarity": {
            "score": 0.8458,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6397,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7167,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7571,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8007,
            "timeMs": 0.0034
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7742,
            "timeMs": 0.0806
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8066,
            "timeMs": 0.0208
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8303,
            "timeMs": 0.0182
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.6857,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0098
          },
          "rbfKernelSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9823,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9845,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9872,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9883,
            "timeMs": 0.0025
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.1734
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.1182
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.1171
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
            "score": 0.9897,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9897,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.3266,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9597,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.9584,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9524,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9626,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9667,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9724,
            "timeMs": 0.0025
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.2164
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.1318
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.1755
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
            "score": 0.995,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.995,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.3337,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.9802,
            "timeMs": 0.0094
          },
          "rbfKernelSimilarity": {
            "score": 0.9609,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8415,
            "timeMs": 0.0043
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8798,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8852,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9059,
            "timeMs": 0.0063
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9188,
            "timeMs": 0.1457
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9398,
            "timeMs": 0.0469
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9435,
            "timeMs": 0.0424
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
            "score": 0.904,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9044,
            "timeMs": 0.0026
          },
          "euclideanSimilarity": {
            "score": 0.0886,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.6541,
            "timeMs": 0.0078
          },
          "rbfKernelSimilarity": {
            "score": 0.3471,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5556,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6318,
            "timeMs": 0.0039
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6764,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7408,
            "timeMs": 0.0061
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7273,
            "timeMs": 0.1899
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7628,
            "timeMs": 0.0448
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7967,
            "timeMs": 0.0393
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
            "score": 0.9984,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.4708,
            "timeMs": 0.0023
          },
          "polynomialKernelSimilarity": {
            "score": 0.9938,
            "timeMs": 0.0091
          },
          "rbfKernelSimilarity": {
            "score": 0.9874,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8883,
            "timeMs": 0.0041
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9142,
            "timeMs": 0.0039
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9193,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9328,
            "timeMs": 0.0067
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9518,
            "timeMs": 0.1356
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9636,
            "timeMs": 1.0192
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9648,
            "timeMs": 0.0424
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
            "score": 0.9627,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9629,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.1454,
            "timeMs": 0.0029
          },
          "polynomialKernelSimilarity": {
            "score": 0.8568,
            "timeMs": 0.012
          },
          "rbfKernelSimilarity": {
            "score": 0.708,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6247,
            "timeMs": 0.0045
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7063,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7335,
            "timeMs": 0.007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7864,
            "timeMs": 0.0067
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7918,
            "timeMs": 0.1462
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.8197,
            "timeMs": 0.0583
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8388,
            "timeMs": 0.0413
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
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.5907,
            "timeMs": 0.0027
          },
          "polynomialKernelSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0119
          },
          "rbfKernelSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9747,
            "timeMs": 0.0044
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.979,
            "timeMs": 0.0043
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9826,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9846,
            "timeMs": 0.0049
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.4993
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.4336
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.4202
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
            "score": 0.9858,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9858,
            "timeMs": 0.0031
          },
          "euclideanSimilarity": {
            "score": 0.2222,
            "timeMs": 0.0026
          },
          "polynomialKernelSimilarity": {
            "score": 0.9442,
            "timeMs": 0.0108
          },
          "rbfKernelSimilarity": {
            "score": 0.8847,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9214,
            "timeMs": 0.0045
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9412,
            "timeMs": 0.0043
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9522,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9609,
            "timeMs": 0.0053
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.5013
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.5542
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.4803
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
            "timeMs": 0.0036
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0042
          },
          "euclideanSimilarity": {
            "score": 0.2909,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 0.9714,
            "timeMs": 0.0138
          },
          "rbfKernelSimilarity": {
            "score": 0.9423,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.726,
            "timeMs": 0.0066
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8009,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8095,
            "timeMs": 0.0103
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.853,
            "timeMs": 0.0101
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.8892,
            "timeMs": 0.0696
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9185,
            "timeMs": 0.095
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9257,
            "timeMs": 0.0609
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
            "score": 0.8793,
            "timeMs": 0.0033
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8793,
            "timeMs": 0.0041
          },
          "euclideanSimilarity": {
            "score": 0.0751,
            "timeMs": 0.0033
          },
          "polynomialKernelSimilarity": {
            "score": 0.5766,
            "timeMs": 0.0121
          },
          "rbfKernelSimilarity": {
            "score": 0.2199,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5068,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5394,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelation": {
            "score": 0.622,
            "timeMs": 0.0101
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6883,
            "timeMs": 0.0093
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.6499,
            "timeMs": 0.0628
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.684,
            "timeMs": 0.0584
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.7313,
            "timeMs": 0.0547
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
            "score": 0.9975,
            "timeMs": 0.005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.4133,
            "timeMs": 0.003
          },
          "polynomialKernelSimilarity": {
            "score": 0.99,
            "timeMs": 0.01
          },
          "rbfKernelSimilarity": {
            "score": 0.9801,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.809,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8598,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8685,
            "timeMs": 0.0116
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8951,
            "timeMs": 0.0095
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.925,
            "timeMs": 0.0593
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9469,
            "timeMs": 0.053
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9503,
            "timeMs": 0.0639
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
            "score": 0.9512,
            "timeMs": 0.0033
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9512,
            "timeMs": 0.0039
          },
          "euclideanSimilarity": {
            "score": 0.1267,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 0.815,
            "timeMs": 0.0102
          },
          "rbfKernelSimilarity": {
            "score": 0.6217,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5436,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6171,
            "timeMs": 0.0057
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6713,
            "timeMs": 0.01
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7365,
            "timeMs": 0.0093
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.7389,
            "timeMs": 0.0595
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.7762,
            "timeMs": 0.0585
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.8085,
            "timeMs": 0.0528
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
            "score": 0.9992,
            "timeMs": 0.0037
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0042
          },
          "euclideanSimilarity": {
            "score": 0.5615,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 0.997,
            "timeMs": 0.0136
          },
          "rbfKernelSimilarity": {
            "score": 0.9939,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9778,
            "timeMs": 0.0065
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9812,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelation": {
            "score": 0.984,
            "timeMs": 0.0101
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9858,
            "timeMs": 0.0072
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.9976
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 1.0417
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.986
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
            "score": 0.9773,
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9773,
            "timeMs": 0.0041
          },
          "euclideanSimilarity": {
            "score": 0.1856,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 0.9115,
            "timeMs": 0.0129
          },
          "rbfKernelSimilarity": {
            "score": 0.8249,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8857,
            "timeMs": 0.006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9192,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9309,
            "timeMs": 0.0077
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9465,
            "timeMs": 0.0079
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 1,
            "timeMs": 0.9279
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 1,
            "timeMs": 0.9353
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 1,
            "timeMs": 0.9585
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
            "score": 0.853,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8549,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.0904,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.5008,
            "timeMs": 0.0078
          },
          "rbfKernelSimilarity": {
            "score": 0.3636,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8869,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9153,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9225,
            "timeMs": 0.0039
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9365,
            "timeMs": 0.0035
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9657,
            "timeMs": 0.0255
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9765,
            "timeMs": 0.0219
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9772,
            "timeMs": 0.0178
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
            "score": 0.6807,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.7439,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.0196,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.1306,
            "timeMs": 0.0427
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5021,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5265,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6575,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7276,
            "timeMs": 0.0028
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4942,
            "timeMs": 0.0147
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5402,
            "timeMs": 0.0129
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5835,
            "timeMs": 0.0116
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
            "score": 0.5868,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5868,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.0196,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.0305,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.131,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1802,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.4941,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4986,
            "timeMs": 0.0026
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4765,
            "timeMs": 0.0142
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5064,
            "timeMs": 0.0113
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5128,
            "timeMs": 0.0092
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
            "score": 0.8596,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8612,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.066,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 0.5185,
            "timeMs": 0.009
          },
          "rbfKernelSimilarity": {
            "score": 0.1351,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8839,
            "timeMs": 0.0043
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9127,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9209,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9346,
            "timeMs": 0.0065
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9602,
            "timeMs": 0.0452
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9722,
            "timeMs": 0.0395
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9731,
            "timeMs": 0.0344
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
            "score": 0.4404,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.4094,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.0139,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.0139,
            "timeMs": 0.0076
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4219,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4858,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6222,
            "timeMs": 0.0054
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6976,
            "timeMs": 0.0049
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.492,
            "timeMs": 0.03
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.539,
            "timeMs": 0.0289
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5823,
            "timeMs": 0.026
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
            "score": 0.5957,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5957,
            "timeMs": 0.034
          },
          "euclideanSimilarity": {
            "score": 0.0139,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.0368,
            "timeMs": 0.009
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.134,
            "timeMs": 0.0041
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1838,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelation": {
            "score": 0.4881,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4966,
            "timeMs": 0.0045
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4797,
            "timeMs": 0.0369
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5086,
            "timeMs": 0.0265
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5164,
            "timeMs": 0.0246
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
            "score": 0.8107,
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8125,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.0547,
            "timeMs": 0.003
          },
          "polynomialKernelSimilarity": {
            "score": 0.3875,
            "timeMs": 0.0103
          },
          "rbfKernelSimilarity": {
            "score": 0.0503,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8158,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8672,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8766,
            "timeMs": 0.0096
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9027,
            "timeMs": 0.0097
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.9415,
            "timeMs": 0.0591
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.9588,
            "timeMs": 0.0541
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.9609,
            "timeMs": 0.0497
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
            "score": 0.5822,
            "timeMs": 0.003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.6133,
            "timeMs": 0.0039
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 0.0271,
            "timeMs": 0.0098
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3903,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4708,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6273,
            "timeMs": 0.0081
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6973,
            "timeMs": 0.0078
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4993,
            "timeMs": 0.0366
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5395,
            "timeMs": 0.0331
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5775,
            "timeMs": 0.031
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
            "score": 0.5791,
            "timeMs": 0.0036
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5791,
            "timeMs": 0.0092
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 0.0251,
            "timeMs": 0.0121
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1109,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1518,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5004,
            "timeMs": 0.007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.5021,
            "timeMs": 0.0067
          },
          "madPenalizedRelativeAgreementSimilarity": {
            "score": 0.4774,
            "timeMs": 0.0636
          },
          "maxRelativeAgreementMedianMadPowerSimilarity": {
            "score": 0.5016,
            "timeMs": 0.0578
          },
          "maxRelativeAgreementMedianMadPowerSimilarityNoMad": {
            "score": 0.5032,
            "timeMs": 0.0536
          }
        }
      }
    ],
    "insights": []
  }
};