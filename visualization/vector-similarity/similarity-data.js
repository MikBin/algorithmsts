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
      "avgTime": 0.3763,
      "iterations": 10
    },
    {
      "name": "normalizedCosineSimilarity",
      "avgTime": 0.18564,
      "iterations": 10
    },
    {
      "name": "euclideanSimilarity",
      "avgTime": 0.10749,
      "iterations": 10
    },
    {
      "name": "manhattanSimilarity",
      "avgTime": 0.11595,
      "iterations": 10
    },
    {
      "name": "gowerSimilarity",
      "avgTime": 0.20276,
      "iterations": 10
    },
    {
      "name": "soergelSimilarity",
      "avgTime": 0.26239,
      "iterations": 10
    },
    {
      "name": "kulczynskiSimilarity",
      "avgTime": 0.26007,
      "iterations": 10
    },
    {
      "name": "lorentzianSimilarity",
      "avgTime": 0.18424,
      "iterations": 10
    },
    {
      "name": "weightedMinkowskiSimilarity",
      "avgTime": 0.51183,
      "iterations": 10
    },
    {
      "name": "canberraSimilarity",
      "avgTime": 0.30279,
      "iterations": 10
    },
    {
      "name": "chebyshevSimilarity",
      "avgTime": 0.12106,
      "iterations": 10
    },
    {
      "name": "intersectionSimilarity",
      "avgTime": 0.20913,
      "iterations": 10
    },
    {
      "name": "waveHedgesSimilarity",
      "avgTime": 0.28008,
      "iterations": 10
    },
    {
      "name": "sorensenSimilarity",
      "avgTime": 0.30907,
      "iterations": 10
    },
    {
      "name": "motykaSimilarity",
      "avgTime": 0.26554,
      "iterations": 10
    },
    {
      "name": "kullbackLeiblerSimilarity",
      "avgTime": 0.56705,
      "iterations": 10
    },
    {
      "name": "jeffreysSimilarity",
      "avgTime": 0.55508,
      "iterations": 10
    },
    {
      "name": "kSimilarity",
      "avgTime": 0.65044,
      "iterations": 10
    },
    {
      "name": "topsoeSimilarity",
      "avgTime": 0.92123,
      "iterations": 10
    },
    {
      "name": "normalizedPearsonChiSquareSimilarity",
      "avgTime": 0.14141,
      "iterations": 10
    },
    {
      "name": "normalizedNeymanChiSquareSimilarity",
      "avgTime": 0.11759,
      "iterations": 10
    },
    {
      "name": "normalizedAdditiveSymmetricChiSquareSimilarity",
      "avgTime": 0.13323,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChiSquareSimilarity",
      "avgTime": 0.13926,
      "iterations": 10
    },
    {
      "name": "fidelitySimilarity",
      "avgTime": 0.5306,
      "iterations": 10
    },
    {
      "name": "hellingerSimilarity",
      "avgTime": 0.42143,
      "iterations": 10
    },
    {
      "name": "normalizedMatusitaSimilarity",
      "avgTime": 0.60172,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChordSimilarity",
      "avgTime": 0.57306,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityBinary",
      "avgTime": 0.19126,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityWeighted",
      "avgTime": 0.29417,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityRealValued",
      "avgTime": 0.09699,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMeanStdPenalized",
      "avgTime": 0.62231,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelation",
      "avgTime": 0.48368,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelationNoStd",
      "avgTime": 0.06818,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityRobust",
      "avgTime": 0.4998,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMean",
      "avgTime": 0.63055,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMeanNoStd",
      "avgTime": 0.07029,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMetricLike",
      "avgTime": 0.39537,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityTunable",
      "avgTime": 0.46821,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityVarianceWeighted",
      "avgTime": 0.70798,
      "iterations": 10
    },
    {
      "name": "polynomialKernelSimilarity",
      "avgTime": 0.1463,
      "iterations": 10
    },
    {
      "name": "rbfKernelSimilarity",
      "avgTime": 0.10265,
      "iterations": 10
    },
    {
      "name": "itakuraSaitoDistance",
      "avgTime": 0.19581,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityItakuraSaito",
      "avgTime": 0.04849,
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
        0.9897249465648248,
        2.0306720362183452,
        3.000844718940573,
        4.009772799427483,
        4.9515037905869805,
        5.951723296879955,
        6.960687281048172,
        8.00952637825801,
        9.044979923223122,
        9.960640638343552
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.9049,
        "manhattanSimilarity": 0.7803,
        "gowerSimilarity": 0.9718,
        "soergelSimilarity": 0.9949,
        "kulczynskiSimilarity": 0.9949,
        "lorentzianSimilarity": 0.7836,
        "weightedMinkowskiSimilarity": 0.9049,
        "canberraSimilarity": 0.9969,
        "chebyshevSimilarity": 0.9537,
        "intersectionSimilarity": 0.9974,
        "waveHedgesSimilarity": 0.942,
        "sorensenSimilarity": 0.9974,
        "motykaSimilarity": 0.9949,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 1,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.9979,
        "normalizedNeymanChiSquareSimilarity": 0.9979,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9959,
        "normalizedSquaredChiSquareSimilarity": 0.999,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 0.9979,
        "normalizedMatusitaSimilarity": 0.9979,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9949,
        "jaccardSimilarityRealValued": 0.9949,
        "computeVectorSimilarityMeanStdPenalized": 0.9952,
        "vectorSimilarityCorrelation": 0.9969,
        "vectorSimilarityCorrelationNoStd": 0.9969,
        "computeVectorSimilarityRobust": 0.9924,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9969,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9969,
        "computeVectorSimilarityMetricLike": 0.9807,
        "computeVectorSimilarityTunable": 0.9954,
        "computeVectorSimilarityVarianceWeighted": 0.9969,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999,
        "itakuraSaitoDistance": 0.0003,
        "vectorSimilarityItakuraSaito": 0.9997
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
          0.7553,
          1.5224,
          3.0396,
          3.8309,
          4.5438,
          6.0118,
          6.5869,
          7.6729,
          9.2841,
          10.3097
        ],
        "pearsonCorrelationSimilarity": 0.9984,
        "normalizedCosineSimilarity": 0.9994,
        "euclideanSimilarity": 0.5024,
        "manhattanSimilarity": 0.2679,
        "gowerSimilarity": 0.7267,
        "soergelSimilarity": 0.9509,
        "kulczynskiSimilarity": 0.9509,
        "lorentzianSimilarity": 0.2993,
        "weightedMinkowskiSimilarity": 0.5024,
        "canberraSimilarity": 0.9584,
        "chebyshevSimilarity": 0.6768,
        "intersectionSimilarity": 0.9748,
        "waveHedgesSimilarity": 0.5579,
        "sorensenSimilarity": 0.9748,
        "motykaSimilarity": 0.9509,
        "kullbackLeiblerSimilarity": 0.9975,
        "jeffreysSimilarity": 0.9951,
        "kSimilarity": 0.9994,
        "topsoeSimilarity": 0.9988,
        "normalizedPearsonChiSquareSimilarity": 0.7458,
        "normalizedNeymanChiSquareSimilarity": 0.7815,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.6171,
        "normalizedSquaredChiSquareSimilarity": 0.8672,
        "fidelitySimilarity": 0.9994,
        "hellingerSimilarity": 0.9751,
        "normalizedMatusitaSimilarity": 0.9751,
        "normalizedSquaredChordSimilarity": 0.9994,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9509,
        "jaccardSimilarityRealValued": 0.9509,
        "computeVectorSimilarityMeanStdPenalized": 0.9283,
        "vectorSimilarityCorrelation": 0.957,
        "vectorSimilarityCorrelationNoStd": 0.9604,
        "computeVectorSimilarityRobust": 0.9147,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9524,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9566,
        "computeVectorSimilarityMetricLike": 0.7773,
        "computeVectorSimilarityTunable": 0.9412,
        "computeVectorSimilarityVarianceWeighted": 0.9545,
        "polynomialKernelSimilarity": 0.9975,
        "rbfKernelSimilarity": 0.9902,
        "itakuraSaitoDistance": 0.0937,
        "vectorSimilarityItakuraSaito": 0.9144
      },
      "2": {
        "noisyVector": [
          1.689,
          1.3174,
          3.6998,
          3.4798,
          4.8246,
          5.8709,
          6.5731,
          8.3887,
          8.1602,
          10.2528
        ],
        "pearsonCorrelationSimilarity": 0.9915,
        "normalizedCosineSimilarity": 0.9982,
        "euclideanSimilarity": 0.372,
        "manhattanSimilarity": 0.1723,
        "gowerSimilarity": 0.5196,
        "soergelSimilarity": 0.9158,
        "kulczynskiSimilarity": 0.9158,
        "lorentzianSimilarity": 0.2085,
        "weightedMinkowskiSimilarity": 0.372,
        "canberraSimilarity": 0.9275,
        "chebyshevSimilarity": 0.5435,
        "intersectionSimilarity": 0.956,
        "waveHedgesSimilarity": 0.4255,
        "sorensenSimilarity": 0.956,
        "motykaSimilarity": 0.9158,
        "kullbackLeiblerSimilarity": 0.9911,
        "jeffreysSimilarity": 0.9821,
        "kSimilarity": 0.9977,
        "topsoeSimilarity": 0.9955,
        "normalizedPearsonChiSquareSimilarity": 0.5019,
        "normalizedNeymanChiSquareSimilarity": 0.4814,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.3258,
        "normalizedSquaredChiSquareSimilarity": 0.6677,
        "fidelitySimilarity": 0.9977,
        "hellingerSimilarity": 0.9523,
        "normalizedMatusitaSimilarity": 0.9523,
        "normalizedSquaredChordSimilarity": 0.9977,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9158,
        "jaccardSimilarityRealValued": 0.9158,
        "computeVectorSimilarityMeanStdPenalized": 0.8844,
        "vectorSimilarityCorrelation": 0.9239,
        "vectorSimilarityCorrelationNoStd": 0.9325,
        "computeVectorSimilarityRobust": 0.8644,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9097,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9219,
        "computeVectorSimilarityMetricLike": 0.6495,
        "computeVectorSimilarityTunable": 0.9005,
        "computeVectorSimilarityVarianceWeighted": 0.919,
        "polynomialKernelSimilarity": 0.9927,
        "rbfKernelSimilarity": 0.9719,
        "itakuraSaitoDistance": 0.2568,
        "vectorSimilarityItakuraSaito": 0.7956
      },
      "5": {
        "noisyVector": [
          2.8194,
          0.4563,
          5.2548,
          3.0177,
          4.1463,
          3.7109,
          5.1257,
          6.645,
          8.5351,
          8.4062
        ],
        "pearsonCorrelationSimilarity": 0.9316,
        "normalizedCosineSimilarity": 0.9857,
        "euclideanSimilarity": 0.1644,
        "manhattanSimilarity": 0.0624,
        "gowerSimilarity": 0.0699,
        "soergelSimilarity": 0.7456,
        "kulczynskiSimilarity": 0.7456,
        "lorentzianSimilarity": 0.1011,
        "weightedMinkowskiSimilarity": 0.1644,
        "canberraSimilarity": 0.8192,
        "chebyshevSimilarity": 0.304,
        "intersectionSimilarity": 0.8542,
        "waveHedgesSimilarity": 0.233,
        "sorensenSimilarity": 0.8542,
        "motykaSimilarity": 0.7456,
        "kullbackLeiblerSimilarity": 0.9368,
        "jeffreysSimilarity": 0.8775,
        "kSimilarity": 0.983,
        "topsoeSimilarity": 0.9676,
        "normalizedPearsonChiSquareSimilarity": 0.0865,
        "normalizedNeymanChiSquareSimilarity": 0.1056,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.0499,
        "normalizedSquaredChiSquareSimilarity": 0.2094,
        "fidelitySimilarity": 0.9829,
        "hellingerSimilarity": 0.8693,
        "normalizedMatusitaSimilarity": 0.8693,
        "normalizedSquaredChordSimilarity": 0.9829,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.7456,
        "jaccardSimilarityRealValued": 0.7456,
        "computeVectorSimilarityMeanStdPenalized": 0.7633,
        "vectorSimilarityCorrelation": 0.806,
        "vectorSimilarityCorrelationNoStd": 0.8354,
        "computeVectorSimilarityRobust": 0.7138,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.7232,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.7793,
        "computeVectorSimilarityMetricLike": 0.3396,
        "computeVectorSimilarityTunable": 0.7635,
        "computeVectorSimilarityVarianceWeighted": 0.8016,
        "polynomialKernelSimilarity": 0.9438,
        "rbfKernelSimilarity": 0.7725,
        "itakuraSaitoDistance": 2.7168,
        "vectorSimilarityItakuraSaito": 0.2691
      },
      "0.1": {
        "noisyVector": [
          1.0304,
          1.9706,
          2.9532,
          4.0153,
          4.9642,
          5.9828,
          6.9943,
          8.0094,
          8.9629,
          9.9772
        ],
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.9188,
        "manhattanSimilarity": 0.8,
        "gowerSimilarity": 0.975,
        "soergelSimilarity": 0.9955,
        "kulczynskiSimilarity": 0.9955,
        "lorentzianSimilarity": 0.8025,
        "weightedMinkowskiSimilarity": 0.9188,
        "canberraSimilarity": 0.9959,
        "chebyshevSimilarity": 0.9553,
        "intersectionSimilarity": 0.9977,
        "waveHedgesSimilarity": 0.9242,
        "sorensenSimilarity": 0.9977,
        "motykaSimilarity": 0.9955,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 1,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.9973,
        "normalizedNeymanChiSquareSimilarity": 0.9973,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9947,
        "normalizedSquaredChiSquareSimilarity": 0.9987,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 0.9977,
        "normalizedMatusitaSimilarity": 0.9977,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9955,
        "jaccardSimilarityRealValued": 0.9955,
        "computeVectorSimilarityMeanStdPenalized": 0.9925,
        "vectorSimilarityCorrelation": 0.9959,
        "vectorSimilarityCorrelationNoStd": 0.9959,
        "computeVectorSimilarityRobust": 0.9899,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9958,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9959,
        "computeVectorSimilarityMetricLike": 0.9744,
        "computeVectorSimilarityTunable": 0.9939,
        "computeVectorSimilarityVarianceWeighted": 0.9958,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999,
        "itakuraSaitoDistance": 0.0007,
        "vectorSimilarityItakuraSaito": 0.9993
      },
      "0.5": {
        "noisyVector": [
          0.9859,
          1.8212,
          3.2011,
          3.7796,
          5.1179,
          6.0666,
          7.2402,
          8.1003,
          9.0934,
          9.8822
        ],
        "pearsonCorrelationSimilarity": 0.9994,
        "normalizedCosineSimilarity": 0.9999,
        "euclideanSimilarity": 0.6759,
        "manhattanSimilarity": 0.4254,
        "gowerSimilarity": 0.865,
        "soergelSimilarity": 0.9758,
        "kulczynskiSimilarity": 0.9758,
        "lorentzianSimilarity": 0.4448,
        "weightedMinkowskiSimilarity": 0.6759,
        "canberraSimilarity": 0.9837,
        "chebyshevSimilarity": 0.8063,
        "intersectionSimilarity": 0.9878,
        "waveHedgesSimilarity": 0.7559,
        "sorensenSimilarity": 0.9878,
        "motykaSimilarity": 0.9758,
        "kullbackLeiblerSimilarity": 0.9995,
        "jeffreysSimilarity": 0.999,
        "kSimilarity": 0.9999,
        "topsoeSimilarity": 0.9997,
        "normalizedPearsonChiSquareSimilarity": 0.945,
        "normalizedNeymanChiSquareSimilarity": 0.9459,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.8965,
        "normalizedSquaredChiSquareSimilarity": 0.972,
        "fidelitySimilarity": 0.9999,
        "hellingerSimilarity": 0.9887,
        "normalizedMatusitaSimilarity": 0.9887,
        "normalizedSquaredChordSimilarity": 0.9999,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9758,
        "jaccardSimilarityRealValued": 0.9758,
        "computeVectorSimilarityMeanStdPenalized": 0.9736,
        "vectorSimilarityCorrelation": 0.9834,
        "vectorSimilarityCorrelationNoStd": 0.9839,
        "computeVectorSimilarityRobust": 0.9617,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9829,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9834,
        "computeVectorSimilarityMetricLike": 0.9028,
        "computeVectorSimilarityTunable": 0.9759,
        "computeVectorSimilarityVarianceWeighted": 0.9833,
        "polynomialKernelSimilarity": 0.9995,
        "rbfKernelSimilarity": 0.9977,
        "itakuraSaitoDistance": 0.0094,
        "vectorSimilarityItakuraSaito": 0.9907
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
            "timeMs": 0.1799
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.3914
          },
          "euclideanSimilarity": {
            "score": 0.4824,
            "timeMs": 0.2432
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.3225
          },
          "rbfKernelSimilarity": {
            "score": 0.9886,
            "timeMs": 0.1524
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9635,
            "timeMs": 0.5439
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9714,
            "timeMs": 0.1412
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9711,
            "timeMs": 0.4136
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9764,
            "timeMs": 0.1735
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
            "timeMs": 0.027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0792
          },
          "euclideanSimilarity": {
            "score": 0.1595,
            "timeMs": 0.0272
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0603
          },
          "rbfKernelSimilarity": {
            "score": 0.7574,
            "timeMs": 0.0214
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8967,
            "timeMs": 0.0769
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9237,
            "timeMs": 0.0632
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9294,
            "timeMs": 0.0583
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9435,
            "timeMs": 0.0492
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
            "timeMs": 0.0226
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0269
          },
          "euclideanSimilarity": {
            "score": 0.6225,
            "timeMs": 0.0091
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0352
          },
          "rbfKernelSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0074
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9798,
            "timeMs": 0.0378
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9823,
            "timeMs": 0.0352
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9845,
            "timeMs": 0.0279
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9859,
            "timeMs": 0.0338
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
            "timeMs": 0.0217
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0413
          },
          "euclideanSimilarity": {
            "score": 0.2484,
            "timeMs": 0.0105
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0574
          },
          "rbfKernelSimilarity": {
            "score": 0.9126,
            "timeMs": 0.0158
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8662,
            "timeMs": 0.049
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9066,
            "timeMs": 0.0335
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9196,
            "timeMs": 0.0267
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9375,
            "timeMs": 0.0267
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
            "timeMs": 0.0053
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0072
          },
          "euclideanSimilarity": {
            "score": 0.8159,
            "timeMs": 0.0046
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0172
          },
          "rbfKernelSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0039
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9941,
            "timeMs": 0.0204
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9942,
            "timeMs": 0.0092
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9942,
            "timeMs": 0.0075
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9943,
            "timeMs": 0.0071
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
            "timeMs": 0.0059
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0077
          },
          "euclideanSimilarity": {
            "score": 0.3364,
            "timeMs": 0.0046
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0165
          },
          "rbfKernelSimilarity": {
            "score": 0.9618,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8702,
            "timeMs": 0.0095
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9033,
            "timeMs": 0.0089
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9168,
            "timeMs": 0.0075
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9325,
            "timeMs": 0.007
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
            "timeMs": 0.0377
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0876
          },
          "euclideanSimilarity": {
            "score": 0.5319,
            "timeMs": 0.0148
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.079
          },
          "rbfKernelSimilarity": {
            "score": 0.9923,
            "timeMs": 0.0137
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9539,
            "timeMs": 0.0615
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9637,
            "timeMs": 0.0624
          },
          "vectorSimilarityCorrelation": {
            "score": 0.97,
            "timeMs": 0.0564
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9746,
            "timeMs": 0.0611
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
            "timeMs": 0.0391
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0332
          },
          "euclideanSimilarity": {
            "score": 0.1691,
            "timeMs": 0.0126
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0251
          },
          "rbfKernelSimilarity": {
            "score": 0.7856,
            "timeMs": 0.016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8965,
            "timeMs": 0.0755
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9261,
            "timeMs": 0.0657
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9364,
            "timeMs": 0.0458
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9501,
            "timeMs": 0.0753
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
            "timeMs": 0.0169
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0213
          },
          "euclideanSimilarity": {
            "score": 0.5964,
            "timeMs": 0.011
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0175
          },
          "rbfKernelSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0077
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9094,
            "timeMs": 0.0581
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9352,
            "timeMs": 0.0298
          },
          "vectorSimilarityCorrelation": {
            "score": 0.94,
            "timeMs": 0.0232
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9536,
            "timeMs": 0.0533
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
            "timeMs": 0.0155
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0235
          },
          "euclideanSimilarity": {
            "score": 0.2215,
            "timeMs": 0.009
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.013
          },
          "rbfKernelSimilarity": {
            "score": 0.8838,
            "timeMs": 0.0097
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8707,
            "timeMs": 0.0286
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9096,
            "timeMs": 0.0284
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9106,
            "timeMs": 0.0239
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9333,
            "timeMs": 0.0235
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
            "timeMs": 0.0041
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0056
          },
          "euclideanSimilarity": {
            "score": 0.7512,
            "timeMs": 0.0043
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0075
          },
          "rbfKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9885,
            "timeMs": 0.0071
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9892,
            "timeMs": 0.0088
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9896,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9901,
            "timeMs": 0.006
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
            "timeMs": 0.0043
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0055
          },
          "euclideanSimilarity": {
            "score": 0.4754,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.9879,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9914,
            "timeMs": 0.0076
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9917,
            "timeMs": 0.0077
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9918,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9921,
            "timeMs": 0.0066
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
            "timeMs": 0.0216
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0351
          },
          "euclideanSimilarity": {
            "score": 0.4903,
            "timeMs": 0.0121
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0087
          },
          "rbfKernelSimilarity": {
            "score": 0.9893,
            "timeMs": 0.0107
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9922,
            "timeMs": 0.054
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9924,
            "timeMs": 0.0479
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9925,
            "timeMs": 0.0384
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9927,
            "timeMs": 0.0424
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
            "timeMs": 0.0216
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0425
          },
          "euclideanSimilarity": {
            "score": 0.1694,
            "timeMs": 0.0374
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.041
          },
          "rbfKernelSimilarity": {
            "score": 0.7863,
            "timeMs": 0.0107
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9478,
            "timeMs": 0.5528
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9551,
            "timeMs": 0.0076
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9575,
            "timeMs": 0.008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9622,
            "timeMs": 0.0069
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
            "timeMs": 0.0148
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0345
          },
          "euclideanSimilarity": {
            "score": 0.5648,
            "timeMs": 0.0147
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0119
          },
          "rbfKernelSimilarity": {
            "score": 0.9941,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9926,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9928,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9929,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9931,
            "timeMs": 0.0037
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
            "timeMs": 0.0104
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0202
          },
          "euclideanSimilarity": {
            "score": 0.233,
            "timeMs": 0.0054
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.8973,
            "timeMs": 0.0052
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9584,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9627,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9637,
            "timeMs": 0.0044
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9668,
            "timeMs": 0.0038
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
            "timeMs": 0.0033
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.1219
          },
          "euclideanSimilarity": {
            "score": 0.8424,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0084
          },
          "rbfKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9952,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9952,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9952,
            "timeMs": 0.2439
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9953,
            "timeMs": 0.0024
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
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.5449,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0062
          },
          "rbfKernelSimilarity": {
            "score": 0.9931,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9774,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9785,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9786,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9796,
            "timeMs": 0.0009
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
            "score": 0.9988,
            "timeMs": 0.016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0298
          },
          "euclideanSimilarity": {
            "score": 0.4722,
            "timeMs": 0.0094
          },
          "polynomialKernelSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0072
          },
          "rbfKernelSimilarity": {
            "score": 0.9876,
            "timeMs": 0.0129
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.914,
            "timeMs": 0.1101
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9327,
            "timeMs": 0.0458
          },
          "vectorSimilarityCorrelation": {
            "score": 0.94,
            "timeMs": 0.1023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9483,
            "timeMs": 0.0239
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
            "score": 0.9797,
            "timeMs": 0.0155
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9466,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.173,
            "timeMs": 0.0138
          },
          "polynomialKernelSimilarity": {
            "score": 0.9208,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0.7957,
            "timeMs": 0.0356
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7298,
            "timeMs": 0.0427
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7941,
            "timeMs": 0.0449
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8198,
            "timeMs": 0.0386
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8503,
            "timeMs": 0.0335
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
            "score": 0.9993,
            "timeMs": 0.0127
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.6208,
            "timeMs": 0.0315
          },
          "polynomialKernelSimilarity": {
            "score": 0.9972,
            "timeMs": 0.01
          },
          "rbfKernelSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9281,
            "timeMs": 0.0244
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9434,
            "timeMs": 0.108
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9439,
            "timeMs": 0.0311
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9529,
            "timeMs": 0.0199
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
            "score": 0.9758,
            "timeMs": 0.0386
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9474,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.2109,
            "timeMs": 0.0054
          },
          "polynomialKernelSimilarity": {
            "score": 0.9061,
            "timeMs": 0.0102
          },
          "rbfKernelSimilarity": {
            "score": 0.8693,
            "timeMs": 0.006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7392,
            "timeMs": 0.0262
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8011,
            "timeMs": 0.0239
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8168,
            "timeMs": 0.0211
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8506,
            "timeMs": 0.0206
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
            "score": 0.9998,
            "timeMs": 0.004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.8498,
            "timeMs": 0.0029
          },
          "polynomialKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0079
          },
          "rbfKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.937,
            "timeMs": 0.0079
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9487,
            "timeMs": 0.0065
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9536,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9602,
            "timeMs": 0.005
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
            "score": 0.986,
            "timeMs": 0.0036
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9748,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.4265,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 0.9464,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.9821,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8739,
            "timeMs": 0.0106
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.886,
            "timeMs": 0.0069
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8914,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9001,
            "timeMs": 0.0055
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
            "score": 0.9995,
            "timeMs": 0.0172
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9956,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.4967,
            "timeMs": 0.0087
          },
          "polynomialKernelSimilarity": {
            "score": 0.998,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9898,
            "timeMs": 0.0083
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9752,
            "timeMs": 0.0467
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9762,
            "timeMs": 0.0462
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9763,
            "timeMs": 0.1044
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9772,
            "timeMs": 0.0357
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
            "score": 0.9894,
            "timeMs": 0.039
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9139,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.1771,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.958,
            "timeMs": 0.0114
          },
          "rbfKernelSimilarity": {
            "score": 0.8059,
            "timeMs": 0.0079
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8635,
            "timeMs": 0.9088
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8901,
            "timeMs": 0.0473
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8878,
            "timeMs": 0.0395
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.907,
            "timeMs": 0.0388
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
            "timeMs": 0.0114
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.994,
            "timeMs": 0.0206
          },
          "euclideanSimilarity": {
            "score": 0.5433,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0113
          },
          "rbfKernelSimilarity": {
            "score": 0.993,
            "timeMs": 0.0054
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9532,
            "timeMs": 0.0246
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.96,
            "timeMs": 0.0239
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9625,
            "timeMs": 0.0207
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9662,
            "timeMs": 0.0201
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
            "score": 0.9935,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9449,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.2801,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9742,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.936,
            "timeMs": 0.0053
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.889,
            "timeMs": 0.0241
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9055,
            "timeMs": 0.0261
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9097,
            "timeMs": 0.0202
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9196,
            "timeMs": 0.0203
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
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9969,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.7602,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0048
          },
          "rbfKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9767,
            "timeMs": 0.0074
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9777,
            "timeMs": 0.0063
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9777,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9786,
            "timeMs": 0.0053
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
            "score": 0.9791,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8774,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.3282,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9196,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.959,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6998,
            "timeMs": 0.0064
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7811,
            "timeMs": 0.0063
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7575,
            "timeMs": 0.0059
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8195,
            "timeMs": 0.0057
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
            "score": 0.9951,
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.5084,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9808,
            "timeMs": 0.006
          },
          "rbfKernelSimilarity": {
            "score": 0.9907,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8399,
            "timeMs": 0.0463
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8785,
            "timeMs": 0.0458
          },
          "vectorSimilarityCorrelation": {
            "score": 0.884,
            "timeMs": 0.0381
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.905,
            "timeMs": 0.0387
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
            "score": 0.9138,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9154,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.1649,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.6886,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.7738,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5368,
            "timeMs": 0.043
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6035,
            "timeMs": 0.0396
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6572,
            "timeMs": 0.0335
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7225,
            "timeMs": 0.0331
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
            "score": 0.9966,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9966,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.6267,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9868,
            "timeMs": 0.0068
          },
          "rbfKernelSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8485,
            "timeMs": 0.0234
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8876,
            "timeMs": 0.0217
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8854,
            "timeMs": 0.02
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9094,
            "timeMs": 0.0187
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
            "score": 0.9156,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9186,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.2278,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.6991,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0.8915,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5554,
            "timeMs": 0.0212
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6336,
            "timeMs": 0.0224
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6831,
            "timeMs": 0.0179
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7454,
            "timeMs": 0.0201
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
            "score": 0.9933,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9934,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.7277,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9776,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8608,
            "timeMs": 0.0057
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8796,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8853,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8977,
            "timeMs": 0.0039
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
            "score": 0.9207,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9242,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.3288,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.7234,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9592,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.534,
            "timeMs": 0.0053
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.597,
            "timeMs": 0.0047
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6524,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7186,
            "timeMs": 0.0042
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
            "score": 0.9952,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9952,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.4897,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9812,
            "timeMs": 0.0061
          },
          "rbfKernelSimilarity": {
            "score": 0.9892,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8388,
            "timeMs": 0.0421
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.878,
            "timeMs": 0.0672
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8814,
            "timeMs": 0.0307
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9037,
            "timeMs": 0.0325
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
            "score": 0.9354,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9371,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.1766,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.7609,
            "timeMs": 0.0087
          },
          "rbfKernelSimilarity": {
            "score": 0.8045,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6049,
            "timeMs": 0.0377
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6885,
            "timeMs": 0.0603
          },
          "vectorSimilarityCorrelation": {
            "score": 0.718,
            "timeMs": 0.0368
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7756,
            "timeMs": 0.087
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
            "score": 0.9955,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.5923,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9826,
            "timeMs": 0.0075
          },
          "rbfKernelSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8705,
            "timeMs": 0.0235
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9008,
            "timeMs": 0.0228
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9055,
            "timeMs": 0.0199
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9216,
            "timeMs": 0.0201
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
            "score": 0.9109,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9101,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.2207,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.6836,
            "timeMs": 0.0059
          },
          "rbfKernelSimilarity": {
            "score": 0.8828,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5353,
            "timeMs": 0.0236
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5998,
            "timeMs": 0.0228
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6318,
            "timeMs": 0.0208
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.702,
            "timeMs": 0.02
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
            "score": 0.9983,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.8131,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9939,
            "timeMs": 0.0048
          },
          "rbfKernelSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8308,
            "timeMs": 0.0073
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8814,
            "timeMs": 0.0057
          },
          "vectorSimilarityCorrelation": {
            "score": 0.904,
            "timeMs": 0.0059
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.923,
            "timeMs": 0.0051
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
            "score": 0.9484,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9472,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.4459,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.8258,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.9847,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.549,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6313,
            "timeMs": 0.0058
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6953,
            "timeMs": 0.0087
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7586,
            "timeMs": 0.0047
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
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.5026,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0061
          },
          "rbfKernelSimilarity": {
            "score": 0.9903,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8566,
            "timeMs": 0.046
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8953,
            "timeMs": 0.0418
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8971,
            "timeMs": 0.066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.919,
            "timeMs": 0.0365
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
            "score": 0.9982,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.1754,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9929,
            "timeMs": 0.007
          },
          "rbfKernelSimilarity": {
            "score": 0.8017,
            "timeMs": 0.0279
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.604,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6946,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7367,
            "timeMs": 0.0063
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7936,
            "timeMs": 0.0062
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
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.6111,
            "timeMs": 0.004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.011
          },
          "rbfKernelSimilarity": {
            "score": 0.996,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8744,
            "timeMs": 0.0068
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9062,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9135,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9299,
            "timeMs": 0.0037
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
            "score": 0.9996,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.2451,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0053
          },
          "rbfKernelSimilarity": {
            "score": 0.9095,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6047,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6956,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7191,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7832,
            "timeMs": 0.0037
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
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.7532,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9451,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9512,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.952,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9567,
            "timeMs": 0.0013
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
            "score": 0.9991,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.4616,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9865,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7948,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8402,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8551,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8796,
            "timeMs": 0.0013
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.4879,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.989,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9736,
            "timeMs": 0.0052
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9749,
            "timeMs": 0.0047
          },
          "vectorSimilarityCorrelation": {
            "score": 0.975,
            "timeMs": 0.006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9761,
            "timeMs": 0.0058
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.1664,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0048
          },
          "rbfKernelSimilarity": {
            "score": 0.778,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.813,
            "timeMs": 0.0052
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8561,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8699,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8912,
            "timeMs": 0.006
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
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.5488,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9687,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9703,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9704,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9718,
            "timeMs": 0.0033
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
            "score": 0.9986,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.2438,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9944,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9083,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8714,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8972,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8965,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9129,
            "timeMs": 0.0034
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
            "score": 0.9997,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.7424,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0033
          },
          "rbfKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9732,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9742,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9743,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9752,
            "timeMs": 0.0011
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
            "score": 0.985,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9872,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.3239,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9415,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9574,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.762,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8138,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8333,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8601,
            "timeMs": 0.0012
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
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4919,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9894,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9694,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9708,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9709,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9722,
            "timeMs": 0.005
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
            "score": 0.9983,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.177,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0078
          },
          "rbfKernelSimilarity": {
            "score": 0.8055,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8585,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8837,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8839,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9016,
            "timeMs": 0.0058
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
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.5549,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0055
          },
          "rbfKernelSimilarity": {
            "score": 0.9936,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9662,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9679,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9681,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9696,
            "timeMs": 0.0035
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
            "score": 0.9998,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.2881,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.9408,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9094,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9192,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9213,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9285,
            "timeMs": 0.0033
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
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.7266,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9638,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9665,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9667,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.969,
            "timeMs": 0.001
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
            "score": 0.9986,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.4128,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.98,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8559,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8812,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8873,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9035,
            "timeMs": 0.0011
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
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.527,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.992,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8561,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8938,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8958,
            "timeMs": 0.0065
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9179,
            "timeMs": 0.0062
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.172,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.7931,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6153,
            "timeMs": 0.0046
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.712,
            "timeMs": 0.0047
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7142,
            "timeMs": 0.005
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.786,
            "timeMs": 0.0057
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.5805,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0459
          },
          "rbfKernelSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8722,
            "timeMs": 0.0042
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9028,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9033,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9219,
            "timeMs": 0.0035
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
            "score": 0.9982,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0201
          },
          "euclideanSimilarity": {
            "score": 0.2267,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9927,
            "timeMs": 0.0064
          },
          "rbfKernelSimilarity": {
            "score": 0.8902,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6963,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7734,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7919,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.837,
            "timeMs": 0.0034
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
            "score": 0.9993,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.7061,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0033
          },
          "rbfKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7468,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.825,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7801,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8468,
            "timeMs": 0.0012
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
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9943,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.4066,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9776,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9789,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6068,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7052,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7595,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8107,
            "timeMs": 0.0012
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
            "score": 0.9956,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9956,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.5224,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9829,
            "timeMs": 0.0055
          },
          "rbfKernelSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8246,
            "timeMs": 0.0051
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8681,
            "timeMs": 0.0051
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8717,
            "timeMs": 0.0062
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.897,
            "timeMs": 0.0058
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
            "score": 0.8894,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8898,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.157,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.6118,
            "timeMs": 0.0046
          },
          "rbfKernelSimilarity": {
            "score": 0.7495,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5045,
            "timeMs": 0.0051
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5324,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6099,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6796,
            "timeMs": 0.0058
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
            "score": 0.9952,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.5924,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9816,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7701,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8331,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8512,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8808,
            "timeMs": 0.0031
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
            "score": 0.927,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9271,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.2391,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.7363,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9037,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5183,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5707,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6403,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7087,
            "timeMs": 0.0034
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
            "score": 0.9974,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.788,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.991,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8843,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9056,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9107,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9229,
            "timeMs": 0.001
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
            "score": 0.9482,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.95,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.3946,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.8178,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.9767,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6118,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6878,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.735,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7771,
            "timeMs": 0.0012
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
            "score": 0.9994,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.5428,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9929,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9712,
            "timeMs": 0.0052
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9729,
            "timeMs": 0.0047
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9731,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9745,
            "timeMs": 0.0052
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
            "score": 0.9809,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9028,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.1707,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9254,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.7898,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7857,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8333,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8506,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8739,
            "timeMs": 0.0053
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
            "score": 0.9992,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.591,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9968,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9594,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.963,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9636,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9662,
            "timeMs": 0.003
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
            "score": 0.9787,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8927,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.2212,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9171,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.8835,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7725,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8246,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8373,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8661,
            "timeMs": 0.003
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
            "score": 0.9988,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.719,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9242,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9351,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9372,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9445,
            "timeMs": 0.0015
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
            "score": 0.988,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.957,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.4497,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9539,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9851,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7184,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7964,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7783,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8334,
            "timeMs": 0.0011
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
            "score": 0.999,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.999,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.5501,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.996,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9933,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9703,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9717,
            "timeMs": 0.0045
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9718,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9731,
            "timeMs": 0.0051
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
            "score": 0.9668,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9682,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.169,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.8725,
            "timeMs": 0.0044
          },
          "rbfKernelSimilarity": {
            "score": 0.7853,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7524,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.811,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8175,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8537,
            "timeMs": 0.0052
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
            "score": 0.9987,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9987,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.6059,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.9958,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9641,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.966,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9662,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9678,
            "timeMs": 0.0031
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
            "score": 0.9763,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9764,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.2655,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9087,
            "timeMs": 0.0045
          },
          "rbfKernelSimilarity": {
            "score": 0.9263,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7823,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8379,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8479,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8782,
            "timeMs": 0.0026
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
            "score": 0.9989,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7423,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9956,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.968,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9693,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9694,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9706,
            "timeMs": 0.0007
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
            "score": 0.9791,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9809,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.4398,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9222,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9839,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8177,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8474,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8575,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8761,
            "timeMs": 0.0007
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
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5097,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9908,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.983,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9846,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9861,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9871,
            "timeMs": 0.0034
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
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1629,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.7678,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9293,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9444,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9513,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9587,
            "timeMs": 0.0034
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
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.5794,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9947,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9792,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9823,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.986,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9873,
            "timeMs": 0.0017
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
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.2358,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9003,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.892,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9241,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9315,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9469,
            "timeMs": 0.0017
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
            "timeMs": 0.0003
          },
          "euclideanSimilarity": {
            "score": 0.8005,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0014
          },
          "rbfKernelSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9959,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.996,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.996,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9961,
            "timeMs": 0.0006
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
            "score": 0.4276,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0014
          },
          "rbfKernelSimilarity": {
            "score": 0.9822,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9582,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9635,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9651,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9688,
            "timeMs": 0.0006
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
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.4942,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9896,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9932,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9934,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9935,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9936,
            "timeMs": 0.0033
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
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.1761,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.8033,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9679,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9711,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9722,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9746,
            "timeMs": 0.0033
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
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.6254,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9941,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9942,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9943,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9944,
            "timeMs": 0.0018
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
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.204,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.8588,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9666,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9703,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9717,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9742,
            "timeMs": 0.0017
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
            "timeMs": 0.0003
          },
          "euclideanSimilarity": {
            "score": 0.8282,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0014
          },
          "rbfKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9961,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9962,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9962,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9963,
            "timeMs": 0.0006
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
            "score": 0.4941,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0014
          },
          "rbfKernelSimilarity": {
            "score": 0.9896,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9603,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9656,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9676,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9712,
            "timeMs": 0.0005
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
            "score": 0.9979,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.5326,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9915,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9923,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9541,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9576,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9581,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9608,
            "timeMs": 0.0034
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
            "score": 0.95,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.95,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.1827,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.8118,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.8187,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6965,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7655,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7918,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8288,
            "timeMs": 0.0034
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
            "score": 0.9968,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.5585,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9873,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9938,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9438,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9483,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.949,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9525,
            "timeMs": 0.0017
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
            "score": 0.9367,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9367,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.1963,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.7662,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.8456,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6408,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.719,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7519,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7977,
            "timeMs": 0.0017
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
            "score": 0.9972,
            "timeMs": 0.0003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.7566,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9899,
            "timeMs": 0.0014
          },
          "rbfKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9571,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9606,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9609,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9637,
            "timeMs": 0.0006
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
            "score": 0.9217,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9474,
            "timeMs": 0.0003
          },
          "euclideanSimilarity": {
            "score": 0.3635,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.7362,
            "timeMs": 0.0014
          },
          "rbfKernelSimilarity": {
            "score": 0.9698,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6297,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7208,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7606,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.81,
            "timeMs": 0.0008
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.4095,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9796,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.9794,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8479,
            "timeMs": 0.0052
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8821,
            "timeMs": 0.0062
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8906,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9082,
            "timeMs": 0.0067
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
            "score": 0.9123,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9124,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1241,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.6822,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.6078,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5305,
            "timeMs": 0.005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5945,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6506,
            "timeMs": 0.0065
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7183,
            "timeMs": 0.0065
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
            "score": 0.995,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5009,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9805,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9901,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8196,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8689,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8738,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9003,
            "timeMs": 0.0033
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
            "score": 0.9191,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9191,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1748,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.7066,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.8001,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5424,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6164,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6728,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7381,
            "timeMs": 0.0032
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
            "score": 0.9966,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9966,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.7289,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9875,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7811,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8478,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8778,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.902,
            "timeMs": 0.0009
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
            "score": 0.9004,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9025,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.3232,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.6681,
            "timeMs": 0.0015
          },
          "rbfKernelSimilarity": {
            "score": 0.9571,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5287,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5946,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6862,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7425,
            "timeMs": 0.001
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
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.4196,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9819,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9811,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8616,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8933,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9027,
            "timeMs": 0.0072
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9179,
            "timeMs": 0.0064
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
            "score": 0.9119,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.912,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.1259,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.6809,
            "timeMs": 0.0074
          },
          "rbfKernelSimilarity": {
            "score": 0.6175,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5709,
            "timeMs": 0.0085
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6529,
            "timeMs": 0.008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6822,
            "timeMs": 0.0092
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7489,
            "timeMs": 0.0104
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
            "score": 0.9944,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.4835,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9781,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9887,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8069,
            "timeMs": 0.005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8585,
            "timeMs": 0.0047
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8631,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.892,
            "timeMs": 0.0058
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
            "score": 0.9127,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9128,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1715,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.6855,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.7919,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5571,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6326,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6821,
            "timeMs": 0.0057
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7431,
            "timeMs": 0.0054
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
            "score": 0.9943,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.6718,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9793,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.703,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7935,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.823,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8648,
            "timeMs": 0.0017
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
            "score": 0.9635,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9651,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.3733,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.8648,
            "timeMs": 0.0033
          },
          "rbfKernelSimilarity": {
            "score": 0.9722,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6177,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7065,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7546,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8004,
            "timeMs": 0.0014
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
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0026
          },
          "euclideanSimilarity": {
            "score": 0.4187,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.9809,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9492,
            "timeMs": 0.009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9593,
            "timeMs": 0.0093
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9613,
            "timeMs": 0.034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9672,
            "timeMs": 0.0242
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
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.998,
            "timeMs": 0.0037
          },
          "euclideanSimilarity": {
            "score": 0.1218,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9922,
            "timeMs": 0.0118
          },
          "rbfKernelSimilarity": {
            "score": 0.5944,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8289,
            "timeMs": 0.0117
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.873,
            "timeMs": 0.0107
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8795,
            "timeMs": 0.0144
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9037,
            "timeMs": 0.014
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
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.5074,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0065
          },
          "rbfKernelSimilarity": {
            "score": 0.9906,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.953,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9629,
            "timeMs": 0.0058
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9701,
            "timeMs": 0.0079
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9737,
            "timeMs": 0.0075
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
            "score": 0.998,
            "timeMs": 0.004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.998,
            "timeMs": 0.0031
          },
          "euclideanSimilarity": {
            "score": 0.1606,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.992,
            "timeMs": 0.0154
          },
          "rbfKernelSimilarity": {
            "score": 0.7611,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8271,
            "timeMs": 0.0084
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8731,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8824,
            "timeMs": 0.0092
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9057,
            "timeMs": 0.008
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
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.6857,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0066
          },
          "rbfKernelSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8172,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.877,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9106,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9301,
            "timeMs": 0.0023
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
            "score": 0.9994,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.4177,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.9808,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7878,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.854,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8856,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9093,
            "timeMs": 0.0023
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
            "timeMs": 0.0025
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0036
          },
          "euclideanSimilarity": {
            "score": 0.4192,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0077
          },
          "rbfKernelSimilarity": {
            "score": 0.981,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9793,
            "timeMs": 0.011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9828,
            "timeMs": 0.0105
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9872,
            "timeMs": 0.0147
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9884,
            "timeMs": 0.0167
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
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0035
          },
          "euclideanSimilarity": {
            "score": 0.1347,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0078
          },
          "rbfKernelSimilarity": {
            "score": 0.6621,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9346,
            "timeMs": 0.0109
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.95,
            "timeMs": 0.0106
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9593,
            "timeMs": 0.0141
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9656,
            "timeMs": 0.0141
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
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.5052,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0059
          },
          "rbfKernelSimilarity": {
            "score": 0.9905,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.951,
            "timeMs": 0.0063
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9631,
            "timeMs": 0.0062
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9744,
            "timeMs": 0.011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9783,
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
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.1809,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0096
          },
          "rbfKernelSimilarity": {
            "score": 0.8147,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9335,
            "timeMs": 0.0065
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9498,
            "timeMs": 0.0059
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9596,
            "timeMs": 0.0077
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.966,
            "timeMs": 0.0073
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.7039,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8405,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.894,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9285,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9443,
            "timeMs": 0.0023
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
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.2737,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.932,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8096,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8712,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9045,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9253,
            "timeMs": 0.0021
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
            "score": 0.9888,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9888,
            "timeMs": 0.0034
          },
          "euclideanSimilarity": {
            "score": 0.4094,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.9568,
            "timeMs": 0.0075
          },
          "rbfKernelSimilarity": {
            "score": 0.9794,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7118,
            "timeMs": 0.011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7848,
            "timeMs": 0.0109
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8071,
            "timeMs": 0.0143
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8452,
            "timeMs": 0.0142
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
            "score": 0.8349,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8349,
            "timeMs": 0.0034
          },
          "euclideanSimilarity": {
            "score": 0.1252,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.4549,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0.6137,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3872,
            "timeMs": 0.0109
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.458,
            "timeMs": 0.0106
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5679,
            "timeMs": 0.0139
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6276,
            "timeMs": 0.0133
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
            "score": 0.9896,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9897,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.5009,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9606,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.9901,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.702,
            "timeMs": 0.006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7813,
            "timeMs": 0.0054
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7987,
            "timeMs": 0.0075
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8429,
            "timeMs": 0.0071
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
            "score": 0.8499,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8556,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.1744,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.5011,
            "timeMs": 0.0048
          },
          "rbfKernelSimilarity": {
            "score": 0.7993,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5006,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5096,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6035,
            "timeMs": 0.0078
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6716,
            "timeMs": 0.0074
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
            "score": 0.9905,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9905,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.69,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9683,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.998,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.566,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6634,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6966,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7708,
            "timeMs": 0.002
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
            "score": 0.8588,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8573,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.3235,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.5632,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.9572,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4451,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4885,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6026,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6653,
            "timeMs": 0.0021
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
            "score": 0.9898,
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9898,
            "timeMs": 0.0031
          },
          "euclideanSimilarity": {
            "score": 0.4046,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9604,
            "timeMs": 0.0059
          },
          "rbfKernelSimilarity": {
            "score": 0.9786,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6692,
            "timeMs": 0.0105
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7569,
            "timeMs": 0.0104
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7639,
            "timeMs": 0.0146
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8209,
            "timeMs": 0.0143
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
            "score": 0.8488,
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8494,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.121,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.4915,
            "timeMs": 0.0117
          },
          "rbfKernelSimilarity": {
            "score": 0.5898,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4353,
            "timeMs": 0.0107
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.485,
            "timeMs": 0.0103
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6048,
            "timeMs": 0.0141
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6675,
            "timeMs": 0.0138
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
            "score": 0.9907,
            "timeMs": 0.0031
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9908,
            "timeMs": 0.004
          },
          "euclideanSimilarity": {
            "score": 0.5007,
            "timeMs": 0.0026
          },
          "polynomialKernelSimilarity": {
            "score": 0.9646,
            "timeMs": 0.0783
          },
          "rbfKernelSimilarity": {
            "score": 0.9901,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6795,
            "timeMs": 0.011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7609,
            "timeMs": 0.0098
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7864,
            "timeMs": 0.0134
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.831,
            "timeMs": 0.0165
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
            "score": 0.8346,
            "timeMs": 0.0035
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8346,
            "timeMs": 0.0077
          },
          "euclideanSimilarity": {
            "score": 0.157,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.4581,
            "timeMs": 0.0066
          },
          "rbfKernelSimilarity": {
            "score": 0.7497,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3759,
            "timeMs": 0.0051
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4538,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5768,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.638,
            "timeMs": 0.0055
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
            "score": 0.9882,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.989,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.6634,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9604,
            "timeMs": 0.0038
          },
          "rbfKernelSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5956,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6982,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7196,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7925,
            "timeMs": 0.0016
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
            "score": 0.9213,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9214,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.376,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.7374,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.9728,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5239,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5814,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6862,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7372,
            "timeMs": 0.0015
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
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.999,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.4035,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9784,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7512,
            "timeMs": 0.0094
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8241,
            "timeMs": 0.0088
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8445,
            "timeMs": 0.01
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.88,
            "timeMs": 0.0095
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
            "score": 0.98,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9782,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1243,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9218,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.609,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5469,
            "timeMs": 0.005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6291,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6812,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7508,
            "timeMs": 0.0082
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
            "score": 0.9993,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.5159,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0.9912,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7614,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8319,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8482,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8833,
            "timeMs": 0.0034
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
            "score": 0.9829,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9814,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1795,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9331,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.8115,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5459,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6261,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6849,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7517,
            "timeMs": 0.0034
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
            "score": 0.9993,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7161,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6423,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.747,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8107,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8546,
            "timeMs": 0.0016
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
            "score": 0.9824,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9813,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.3403,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9322,
            "timeMs": 0.0053
          },
          "rbfKernelSimilarity": {
            "score": 0.9631,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5112,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5642,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6483,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7248,
            "timeMs": 0.0015
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
            "score": 0.9939,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9939,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.3852,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9761,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9748,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8112,
            "timeMs": 0.0053
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8604,
            "timeMs": 0.005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8653,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8926,
            "timeMs": 0.0064
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
            "score": 0.932,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.932,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.1316,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.7478,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.6469,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5693,
            "timeMs": 0.0057
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6445,
            "timeMs": 0.0083
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6871,
            "timeMs": 0.0098
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7468,
            "timeMs": 0.0096
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
            "score": 0.9956,
            "timeMs": 0.0037
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9956,
            "timeMs": 0.0037
          },
          "euclideanSimilarity": {
            "score": 0.5158,
            "timeMs": 0.0023
          },
          "polynomialKernelSimilarity": {
            "score": 0.9827,
            "timeMs": 0.0131
          },
          "rbfKernelSimilarity": {
            "score": 0.9912,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.838,
            "timeMs": 0.0155
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.877,
            "timeMs": 0.0315
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8837,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9048,
            "timeMs": 0.0074
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
            "score": 0.9085,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9085,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.158,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.6714,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.7529,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5416,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6134,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelation": {
            "score": 0.659,
            "timeMs": 0.0058
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7275,
            "timeMs": 0.0069
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
            "score": 0.9951,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.6933,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9822,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.998,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7898,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8547,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8847,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9077,
            "timeMs": 0.001
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
            "score": 0.9697,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9696,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.3142,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.8798,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.9535,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6293,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7103,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.764,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8039,
            "timeMs": 0.0017
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
            "score": 0.993,
            "timeMs": 0.0047
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.993,
            "timeMs": 0.0043
          },
          "euclideanSimilarity": {
            "score": 0.3709,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.9725,
            "timeMs": 0.0156
          },
          "rbfKernelSimilarity": {
            "score": 0.9716,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.751,
            "timeMs": 0.0151
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8186,
            "timeMs": 0.0134
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8258,
            "timeMs": 0.016
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8647,
            "timeMs": 0.0154
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
            "score": 0.8726,
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8726,
            "timeMs": 0.0039
          },
          "euclideanSimilarity": {
            "score": 0.1055,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.558,
            "timeMs": 0.0122
          },
          "rbfKernelSimilarity": {
            "score": 0.4869,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5008,
            "timeMs": 0.0123
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5111,
            "timeMs": 0.012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5998,
            "timeMs": 0.0139
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6669,
            "timeMs": 0.0128
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
            "score": 0.9925,
            "timeMs": 0.0254
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9925,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.4485,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9709,
            "timeMs": 0.0086
          },
          "rbfKernelSimilarity": {
            "score": 0.985,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7172,
            "timeMs": 0.5965
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7933,
            "timeMs": 0.0086
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8057,
            "timeMs": 0.0087
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8489,
            "timeMs": 0.0081
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
            "score": 0.8942,
            "timeMs": 0.0031
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8942,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.1536,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.6262,
            "timeMs": 0.0123
          },
          "rbfKernelSimilarity": {
            "score": 0.738,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5063,
            "timeMs": 0.0078
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5384,
            "timeMs": 0.0071
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6153,
            "timeMs": 0.0079
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6836,
            "timeMs": 0.0072
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
            "score": 0.9923,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.6411,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9722,
            "timeMs": 0.0055
          },
          "rbfKernelSimilarity": {
            "score": 0.9969,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6745,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7676,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8178,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8566,
            "timeMs": 0.0019
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
            "score": 0.9045,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8989,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.271,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.6697,
            "timeMs": 0.0044
          },
          "rbfKernelSimilarity": {
            "score": 0.9302,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5115,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5547,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6442,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.707,
            "timeMs": 0.0019
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
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0035
          },
          "euclideanSimilarity": {
            "score": 0.3652,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.997,
            "timeMs": 0.0068
          },
          "rbfKernelSimilarity": {
            "score": 0.9702,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8975,
            "timeMs": 0.0325
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9214,
            "timeMs": 0.0264
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9275,
            "timeMs": 0.0332
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9394,
            "timeMs": 0.0319
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
            "timeMs": 0.0038
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9815,
            "timeMs": 0.005
          },
          "euclideanSimilarity": {
            "score": 0.1018,
            "timeMs": 0.0026
          },
          "polynomialKernelSimilarity": {
            "score": 0.9273,
            "timeMs": 0.0124
          },
          "rbfKernelSimilarity": {
            "score": 0.4592,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6445,
            "timeMs": 0.0163
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7306,
            "timeMs": 0.0158
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7565,
            "timeMs": 0.0213
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8089,
            "timeMs": 0.021
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
            "score": 0.9994,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.4664,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0062
          },
          "rbfKernelSimilarity": {
            "score": 0.987,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8859,
            "timeMs": 0.008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9154,
            "timeMs": 0.0071
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9288,
            "timeMs": 0.0104
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9406,
            "timeMs": 0.0097
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
            "score": 0.9831,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9831,
            "timeMs": 0.0021
          },
          "euclideanSimilarity": {
            "score": 0.1409,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9335,
            "timeMs": 0.0058
          },
          "rbfKernelSimilarity": {
            "score": 0.6896,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6632,
            "timeMs": 0.0055
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7471,
            "timeMs": 0.0044
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7703,
            "timeMs": 0.0076
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8193,
            "timeMs": 0.0088
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
            "score": 0.999,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.999,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.5928,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9961,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7391,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8213,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8633,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8933,
            "timeMs": 0.0019
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
            "score": 0.9846,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9843,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.2714,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9398,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.9305,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5902,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6863,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.747,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8008,
            "timeMs": 0.0022
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
            "score": 0.9983,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0051
          },
          "euclideanSimilarity": {
            "score": 0.376,
            "timeMs": 0.0035
          },
          "polynomialKernelSimilarity": {
            "score": 0.9932,
            "timeMs": 0.0064
          },
          "rbfKernelSimilarity": {
            "score": 0.9728,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.852,
            "timeMs": 0.013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.89,
            "timeMs": 0.013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8992,
            "timeMs": 0.0155
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.918,
            "timeMs": 0.0145
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
            "score": 0.9557,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9454,
            "timeMs": 0.0031
          },
          "euclideanSimilarity": {
            "score": 0.1028,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.831,
            "timeMs": 0.0067
          },
          "rbfKernelSimilarity": {
            "score": 0.4665,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5705,
            "timeMs": 0.0146
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6548,
            "timeMs": 0.0124
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6965,
            "timeMs": 0.0139
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7601,
            "timeMs": 0.0142
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
            "score": 0.9982,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.4538,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9929,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.9856,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8518,
            "timeMs": 0.0073
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8911,
            "timeMs": 0.0078
          },
          "vectorSimilarityCorrelation": {
            "score": 0.902,
            "timeMs": 0.0084
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9203,
            "timeMs": 0.0082
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
            "score": 0.9607,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9539,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.137,
            "timeMs": 0.0028
          },
          "polynomialKernelSimilarity": {
            "score": 0.8495,
            "timeMs": 0.011
          },
          "rbfKernelSimilarity": {
            "score": 0.6724,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5719,
            "timeMs": 0.0156
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6523,
            "timeMs": 0.015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7002,
            "timeMs": 0.0171
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7587,
            "timeMs": 0.0169
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
            "score": 0.9978,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.6209,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9913,
            "timeMs": 0.0104
          },
          "rbfKernelSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6777,
            "timeMs": 0.005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7735,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8256,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8635,
            "timeMs": 0.0048
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
            "score": 0.9558,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9484,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.272,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.835,
            "timeMs": 0.0079
          },
          "rbfKernelSimilarity": {
            "score": 0.9309,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5214,
            "timeMs": 0.0046
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5799,
            "timeMs": 0.0043
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6612,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7251,
            "timeMs": 0.0045
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
            "score": 0.9946,
            "timeMs": 0.004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9946,
            "timeMs": 0.0042
          },
          "euclideanSimilarity": {
            "score": 0.4079,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 0.9788,
            "timeMs": 0.0132
          },
          "rbfKernelSimilarity": {
            "score": 0.9792,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8252,
            "timeMs": 0.0126
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8696,
            "timeMs": 0.0187
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8689,
            "timeMs": 0.0186
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8963,
            "timeMs": 0.0144
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
            "score": 0.9211,
            "timeMs": 0.0025
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9212,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.125,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.7109,
            "timeMs": 0.0104
          },
          "rbfKernelSimilarity": {
            "score": 0.6126,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5441,
            "timeMs": 0.0127
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.614,
            "timeMs": 0.043
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6603,
            "timeMs": 0.0096
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7266,
            "timeMs": 0.0094
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
            "timeMs": 0.0033
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.555,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0341
          },
          "rbfKernelSimilarity": {
            "score": 0.9936,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.875,
            "timeMs": 0.0116
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9054,
            "timeMs": 0.0097
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9108,
            "timeMs": 0.012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9269,
            "timeMs": 0.015
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
            "score": 0.9652,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9653,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.1995,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.8667,
            "timeMs": 0.0068
          },
          "rbfKernelSimilarity": {
            "score": 0.8513,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6191,
            "timeMs": 0.0099
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.704,
            "timeMs": 0.0089
          },
          "vectorSimilarityCorrelation": {
            "score": 0.725,
            "timeMs": 0.0227
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7833,
            "timeMs": 0.0113
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
            "score": 0.9996,
            "timeMs": 0.0045
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0059
          },
          "euclideanSimilarity": {
            "score": 0.7081,
            "timeMs": 0.0035
          },
          "polynomialKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0168
          },
          "rbfKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9788,
            "timeMs": 0.0259
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9822,
            "timeMs": 0.0786
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9865,
            "timeMs": 0.0256
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9878,
            "timeMs": 0.0216
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
            "score": 0.9901,
            "timeMs": 0.0049
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9901,
            "timeMs": 0.0065
          },
          "euclideanSimilarity": {
            "score": 0.3405,
            "timeMs": 0.0033
          },
          "polynomialKernelSimilarity": {
            "score": 0.9612,
            "timeMs": 0.0156
          },
          "rbfKernelSimilarity": {
            "score": 0.9632,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9477,
            "timeMs": 0.0227
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9599,
            "timeMs": 0.0245
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9687,
            "timeMs": 0.021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9738,
            "timeMs": 0.0209
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
            "score": 0.9955,
            "timeMs": 0.0073
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.012
          },
          "euclideanSimilarity": {
            "score": 0.3429,
            "timeMs": 0.0042
          },
          "polynomialKernelSimilarity": {
            "score": 0.982,
            "timeMs": 0.0215
          },
          "rbfKernelSimilarity": {
            "score": 0.9639,
            "timeMs": 0.0055
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8492,
            "timeMs": 0.04
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8858,
            "timeMs": 0.0515
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8923,
            "timeMs": 0.0465
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9115,
            "timeMs": 0.0476
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
            "score": 0.9126,
            "timeMs": 0.0031
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9127,
            "timeMs": 0.0338
          },
          "euclideanSimilarity": {
            "score": 0.0931,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.682,
            "timeMs": 0.0102
          },
          "rbfKernelSimilarity": {
            "score": 0.3868,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5558,
            "timeMs": 0.0195
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6317,
            "timeMs": 0.0209
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6833,
            "timeMs": 0.0254
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7449,
            "timeMs": 0.0562
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
            "score": 0.9982,
            "timeMs": 0.0033
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0044
          },
          "euclideanSimilarity": {
            "score": 0.4551,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9929,
            "timeMs": 0.01
          },
          "rbfKernelSimilarity": {
            "score": 0.9858,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8886,
            "timeMs": 0.0317
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9132,
            "timeMs": 0.0189
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9138,
            "timeMs": 0.0216
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9288,
            "timeMs": 0.0217
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
            "score": 0.9621,
            "timeMs": 0.0049
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9622,
            "timeMs": 0.0066
          },
          "euclideanSimilarity": {
            "score": 0.1463,
            "timeMs": 0.003
          },
          "polynomialKernelSimilarity": {
            "score": 0.8548,
            "timeMs": 0.0157
          },
          "rbfKernelSimilarity": {
            "score": 0.7115,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.64,
            "timeMs": 0.0204
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7199,
            "timeMs": 0.0193
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7466,
            "timeMs": 0.0227
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7963,
            "timeMs": 0.0254
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
            "score": 0.9995,
            "timeMs": 0.0037
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0053
          },
          "euclideanSimilarity": {
            "score": 0.6218,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0097
          },
          "rbfKernelSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9766,
            "timeMs": 0.019
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9807,
            "timeMs": 0.0195
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9849,
            "timeMs": 0.021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9866,
            "timeMs": 0.0214
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
            "score": 0.9877,
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9877,
            "timeMs": 0.0064
          },
          "euclideanSimilarity": {
            "score": 0.2358,
            "timeMs": 0.003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9514,
            "timeMs": 0.0098
          },
          "rbfKernelSimilarity": {
            "score": 0.9003,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9326,
            "timeMs": 0.0204
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.949,
            "timeMs": 0.019
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9544,
            "timeMs": 0.0206
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9633,
            "timeMs": 0.02
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
            "score": 0.9917,
            "timeMs": 0.0045
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0072
          },
          "euclideanSimilarity": {
            "score": 0.2788,
            "timeMs": 0.0027
          },
          "polynomialKernelSimilarity": {
            "score": 0.9674,
            "timeMs": 0.0129
          },
          "rbfKernelSimilarity": {
            "score": 0.9353,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7233,
            "timeMs": 0.0307
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7988,
            "timeMs": 0.0275
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8124,
            "timeMs": 0.0353
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8545,
            "timeMs": 0.0336
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
            "score": 0.8672,
            "timeMs": 0.0046
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8674,
            "timeMs": 0.007
          },
          "euclideanSimilarity": {
            "score": 0.0737,
            "timeMs": 0.0027
          },
          "polynomialKernelSimilarity": {
            "score": 0.5407,
            "timeMs": 0.0129
          },
          "rbfKernelSimilarity": {
            "score": 0.2059,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5015,
            "timeMs": 0.0291
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5165,
            "timeMs": 0.0298
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6088,
            "timeMs": 0.0743
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6753,
            "timeMs": 0.0312
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
            "score": 0.9976,
            "timeMs": 0.0042
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0068
          },
          "euclideanSimilarity": {
            "score": 0.417,
            "timeMs": 0.0027
          },
          "polynomialKernelSimilarity": {
            "score": 0.9905,
            "timeMs": 0.0123
          },
          "rbfKernelSimilarity": {
            "score": 0.9806,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8011,
            "timeMs": 0.0243
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8549,
            "timeMs": 0.0235
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8615,
            "timeMs": 0.0336
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8909,
            "timeMs": 0.0349
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
            "score": 0.95,
            "timeMs": 0.0043
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.95,
            "timeMs": 0.0066
          },
          "euclideanSimilarity": {
            "score": 0.1259,
            "timeMs": 0.0038
          },
          "polynomialKernelSimilarity": {
            "score": 0.8109,
            "timeMs": 0.0165
          },
          "rbfKernelSimilarity": {
            "score": 0.6174,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5459,
            "timeMs": 0.0405
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6181,
            "timeMs": 0.0348
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6715,
            "timeMs": 0.0448
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.735,
            "timeMs": 0.0372
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
            "timeMs": 0.0042
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0063
          },
          "euclideanSimilarity": {
            "score": 0.5615,
            "timeMs": 0.0029
          },
          "polynomialKernelSimilarity": {
            "score": 0.997,
            "timeMs": 0.0118
          },
          "rbfKernelSimilarity": {
            "score": 0.9939,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9733,
            "timeMs": 0.0282
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9779,
            "timeMs": 0.0256
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9825,
            "timeMs": 0.0295
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9845,
            "timeMs": 0.0537
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
            "score": 0.9867,
            "timeMs": 0.0041
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9867,
            "timeMs": 0.0066
          },
          "euclideanSimilarity": {
            "score": 0.2297,
            "timeMs": 0.003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9477,
            "timeMs": 0.012
          },
          "rbfKernelSimilarity": {
            "score": 0.8936,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9452,
            "timeMs": 0.03
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9584,
            "timeMs": 0.0185
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9637,
            "timeMs": 0.017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9705,
            "timeMs": 0.0243
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
            "score": 0.8668,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8686,
            "timeMs": 0.0041
          },
          "euclideanSimilarity": {
            "score": 0.0906,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.5404,
            "timeMs": 0.011
          },
          "rbfKernelSimilarity": {
            "score": 0.3648,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9012,
            "timeMs": 0.0114
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9237,
            "timeMs": 0.01
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9331,
            "timeMs": 0.0114
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9429,
            "timeMs": 0.0112
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
            "score": 0.6796,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.7425,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.0196,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.129,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5017,
            "timeMs": 0.0101
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5232,
            "timeMs": 0.009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6521,
            "timeMs": 0.013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7232,
            "timeMs": 0.0106
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
            "score": 0.585,
            "timeMs": 0.003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.585,
            "timeMs": 0.0033
          },
          "euclideanSimilarity": {
            "score": 0.0196,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.0293,
            "timeMs": 0.0115
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1312,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1801,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelation": {
            "score": 0.4934,
            "timeMs": 0.0105
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4984,
            "timeMs": 0.011
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
            "score": 0.8364,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8376,
            "timeMs": 0.0045
          },
          "euclideanSimilarity": {
            "score": 0.0594,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.4537,
            "timeMs": 0.0086
          },
          "rbfKernelSimilarity": {
            "score": 0.0813,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8809,
            "timeMs": 0.0051
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9113,
            "timeMs": 0.008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9189,
            "timeMs": 0.0219
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9337,
            "timeMs": 0.0208
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
            "score": 0.4402,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.4088,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.014,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.014,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4236,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4863,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6219,
            "timeMs": 0.0125
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6972,
            "timeMs": 0.0118
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
            "score": 0.5955,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5955,
            "timeMs": 0.006
          },
          "euclideanSimilarity": {
            "score": 0.0139,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.0366,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1338,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1837,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelation": {
            "score": 0.4895,
            "timeMs": 0.0163
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4971,
            "timeMs": 0.0113
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
            "score": 0.824,
            "timeMs": 0.0056
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8257,
            "timeMs": 0.0728
          },
          "euclideanSimilarity": {
            "score": 0.0545,
            "timeMs": 0.0029
          },
          "polynomialKernelSimilarity": {
            "score": 0.421,
            "timeMs": 0.0102
          },
          "rbfKernelSimilarity": {
            "score": 0.0493,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8062,
            "timeMs": 0.0071
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8609,
            "timeMs": 0.0072
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8713,
            "timeMs": 0.0092
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8993,
            "timeMs": 0.0089
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
            "score": 0.5829,
            "timeMs": 0.0042
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.6143,
            "timeMs": 0.0066
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0028
          },
          "polynomialKernelSimilarity": {
            "score": 0.0276,
            "timeMs": 0.011
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4168,
            "timeMs": 0.0073
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4827,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6335,
            "timeMs": 0.0058
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7039,
            "timeMs": 0.0056
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
            "score": 0.5799,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5799,
            "timeMs": 0.0068
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.0257,
            "timeMs": 0.0066
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1115,
            "timeMs": 0.0048
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1525,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5004,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.5019,
            "timeMs": 0.0048
          }
        }
      }
    ],
    "insights": []
  }
};