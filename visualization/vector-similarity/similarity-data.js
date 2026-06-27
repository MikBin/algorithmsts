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
      "avgTime": 0.12999,
      "iterations": 10
    },
    {
      "name": "normalizedCosineSimilarity",
      "avgTime": 0.05816,
      "iterations": 10
    },
    {
      "name": "euclideanSimilarity",
      "avgTime": 0.04858,
      "iterations": 10
    },
    {
      "name": "manhattanSimilarity",
      "avgTime": 0.07687,
      "iterations": 10
    },
    {
      "name": "gowerSimilarity",
      "avgTime": 0.14711,
      "iterations": 10
    },
    {
      "name": "soergelSimilarity",
      "avgTime": 0.12454,
      "iterations": 10
    },
    {
      "name": "kulczynskiSimilarity",
      "avgTime": 0.05811,
      "iterations": 10
    },
    {
      "name": "lorentzianSimilarity",
      "avgTime": 0.04618,
      "iterations": 10
    },
    {
      "name": "weightedMinkowskiSimilarity",
      "avgTime": 0.08074,
      "iterations": 10
    },
    {
      "name": "canberraSimilarity",
      "avgTime": 0.05335,
      "iterations": 10
    },
    {
      "name": "chebyshevSimilarity",
      "avgTime": 0.05051,
      "iterations": 10
    },
    {
      "name": "intersectionSimilarity",
      "avgTime": 0.06999,
      "iterations": 10
    },
    {
      "name": "waveHedgesSimilarity",
      "avgTime": 0.07899,
      "iterations": 10
    },
    {
      "name": "sorensenSimilarity",
      "avgTime": 0.06718,
      "iterations": 10
    },
    {
      "name": "motykaSimilarity",
      "avgTime": 0.09178,
      "iterations": 10
    },
    {
      "name": "kullbackLeiblerSimilarity",
      "avgTime": 0.15272,
      "iterations": 10
    },
    {
      "name": "jeffreysSimilarity",
      "avgTime": 0.19942,
      "iterations": 10
    },
    {
      "name": "kSimilarity",
      "avgTime": 0.19566,
      "iterations": 10
    },
    {
      "name": "topsoeSimilarity",
      "avgTime": 0.30576,
      "iterations": 10
    },
    {
      "name": "normalizedPearsonChiSquareSimilarity",
      "avgTime": 0.05424,
      "iterations": 10
    },
    {
      "name": "normalizedNeymanChiSquareSimilarity",
      "avgTime": 0.0371,
      "iterations": 10
    },
    {
      "name": "normalizedAdditiveSymmetricChiSquareSimilarity",
      "avgTime": 0.03864,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChiSquareSimilarity",
      "avgTime": 0.05972,
      "iterations": 10
    },
    {
      "name": "fidelitySimilarity",
      "avgTime": 0.16504,
      "iterations": 10
    },
    {
      "name": "hellingerSimilarity",
      "avgTime": 0.14413,
      "iterations": 10
    },
    {
      "name": "normalizedMatusitaSimilarity",
      "avgTime": 0.18444,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChordSimilarity",
      "avgTime": 0.18612,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityBinary",
      "avgTime": 0.06132,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityWeighted",
      "avgTime": 0.06977,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityRealValued",
      "avgTime": 0.05217,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMeanStdPenalized",
      "avgTime": 0.14838,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelation",
      "avgTime": 0.14999,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelationNoStd",
      "avgTime": 0.04948,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityRobust",
      "avgTime": 0.10897,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMean",
      "avgTime": 0.09944,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMeanNoStd",
      "avgTime": 0.01537,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMetricLike",
      "avgTime": 0.10243,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityTunable",
      "avgTime": 0.18284,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityVarianceWeighted",
      "avgTime": 0.1673,
      "iterations": 10
    },
    {
      "name": "polynomialKernelSimilarity",
      "avgTime": 0.06443,
      "iterations": 10
    },
    {
      "name": "rbfKernelSimilarity",
      "avgTime": 0.07928,
      "iterations": 10
    },
    {
      "name": "itakuraSaitoDistance",
      "avgTime": 0.07957,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityItakuraSaito",
      "avgTime": 0.02427,
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
        1.001302001894952,
        2.047021072870273,
        2.950337165400235,
        4.038971127349793,
        4.972923467760761,
        5.972895299082987,
        7.030397758534457,
        7.973371872892556,
        9.013710753112631,
        10.032733777677938
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.9068,
        "manhattanSimilarity": 0.7724,
        "gowerSimilarity": 0.9705,
        "soergelSimilarity": 0.9947,
        "kulczynskiSimilarity": 0.9947,
        "lorentzianSimilarity": 0.7755,
        "weightedMinkowskiSimilarity": 0.9068,
        "canberraSimilarity": 0.9963,
        "chebyshevSimilarity": 0.9527,
        "intersectionSimilarity": 0.9973,
        "waveHedgesSimilarity": 0.9321,
        "sorensenSimilarity": 0.9973,
        "motykaSimilarity": 0.9947,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 0.9999,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.9971,
        "normalizedNeymanChiSquareSimilarity": 0.9971,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9942,
        "normalizedSquaredChiSquareSimilarity": 0.9985,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 0.9974,
        "normalizedMatusitaSimilarity": 0.9974,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9947,
        "jaccardSimilarityRealValued": 0.9947,
        "computeVectorSimilarityMeanStdPenalized": 0.9937,
        "vectorSimilarityCorrelation": 0.9963,
        "vectorSimilarityCorrelationNoStd": 0.9964,
        "computeVectorSimilarityRobust": 0.991,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9963,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9963,
        "computeVectorSimilarityMetricLike": 0.9773,
        "computeVectorSimilarityTunable": 0.9945,
        "computeVectorSimilarityVarianceWeighted": 0.9963,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999,
        "itakuraSaitoDistance": 0.0005,
        "vectorSimilarityItakuraSaito": 0.9995
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
          1.234,
          1.7946,
          3.2349,
          4.3512,
          4.6424,
          5.5574,
          7.1419,
          7.7905,
          9.4415,
          9.8446
        ],
        "pearsonCorrelationSimilarity": 0.9973,
        "normalizedCosineSimilarity": 0.9994,
        "euclideanSimilarity": 0.5156,
        "manhattanSimilarity": 0.265,
        "gowerSimilarity": 0.7226,
        "soergelSimilarity": 0.9508,
        "kulczynskiSimilarity": 0.9508,
        "lorentzianSimilarity": 0.2929,
        "weightedMinkowskiSimilarity": 0.5156,
        "canberraSimilarity": 0.9644,
        "chebyshevSimilarity": 0.6932,
        "intersectionSimilarity": 0.9748,
        "waveHedgesSimilarity": 0.5885,
        "sorensenSimilarity": 0.9748,
        "motykaSimilarity": 0.9508,
        "kullbackLeiblerSimilarity": 0.9981,
        "jeffreysSimilarity": 0.9962,
        "kSimilarity": 0.9995,
        "topsoeSimilarity": 0.999,
        "normalizedPearsonChiSquareSimilarity": 0.8281,
        "normalizedNeymanChiSquareSimilarity": 0.8225,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.7025,
        "normalizedSquaredChiSquareSimilarity": 0.9046,
        "fidelitySimilarity": 0.9995,
        "hellingerSimilarity": 0.9781,
        "normalizedMatusitaSimilarity": 0.9781,
        "normalizedSquaredChordSimilarity": 0.9995,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9508,
        "jaccardSimilarityRealValued": 0.9508,
        "computeVectorSimilarityMeanStdPenalized": 0.9466,
        "vectorSimilarityCorrelation": 0.9633,
        "vectorSimilarityCorrelationNoStd": 0.965,
        "computeVectorSimilarityRobust": 0.9206,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9611,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9631,
        "computeVectorSimilarityMetricLike": 0.8008,
        "computeVectorSimilarityTunable": 0.948,
        "computeVectorSimilarityVarianceWeighted": 0.9631,
        "polynomialKernelSimilarity": 0.9977,
        "rbfKernelSimilarity": 0.9912,
        "itakuraSaitoDistance": 0.0406,
        "vectorSimilarityItakuraSaito": 0.961
      },
      "2": {
        "noisyVector": [
          1.0477,
          1.3054,
          3.7636,
          3.5146,
          4.7679,
          5.5728,
          6.3621,
          8.4287,
          8.4043,
          9.8267
        ],
        "pearsonCorrelationSimilarity": 0.9936,
        "normalizedCosineSimilarity": 0.9986,
        "euclideanSimilarity": 0.3867,
        "manhattanSimilarity": 0.1823,
        "gowerSimilarity": 0.5514,
        "soergelSimilarity": 0.9202,
        "kulczynskiSimilarity": 0.9202,
        "lorentzianSimilarity": 0.2184,
        "weightedMinkowskiSimilarity": 0.3867,
        "canberraSimilarity": 0.9444,
        "chebyshevSimilarity": 0.567,
        "intersectionSimilarity": 0.9585,
        "waveHedgesSimilarity": 0.4854,
        "sorensenSimilarity": 0.9585,
        "motykaSimilarity": 0.9202,
        "kullbackLeiblerSimilarity": 0.9942,
        "jeffreysSimilarity": 0.9885,
        "kSimilarity": 0.9986,
        "topsoeSimilarity": 0.9971,
        "normalizedPearsonChiSquareSimilarity": 0.5654,
        "normalizedNeymanChiSquareSimilarity": 0.6019,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.4115,
        "normalizedSquaredChiSquareSimilarity": 0.741,
        "fidelitySimilarity": 0.9985,
        "hellingerSimilarity": 0.9619,
        "normalizedMatusitaSimilarity": 0.9619,
        "normalizedSquaredChordSimilarity": 0.9985,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9202,
        "jaccardSimilarityRealValued": 0.9202,
        "computeVectorSimilarityMeanStdPenalized": 0.9117,
        "vectorSimilarityCorrelation": 0.942,
        "vectorSimilarityCorrelationNoStd": 0.947,
        "computeVectorSimilarityRobust": 0.8875,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9345,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9412,
        "computeVectorSimilarityMetricLike": 0.7133,
        "computeVectorSimilarityTunable": 0.9215,
        "computeVectorSimilarityVarianceWeighted": 0.9398,
        "polynomialKernelSimilarity": 0.9942,
        "rbfKernelSimilarity": 0.9752,
        "itakuraSaitoDistance": 0.1517,
        "vectorSimilarityItakuraSaito": 0.8683
      },
      "5": {
        "noisyVector": [
          0.2456,
          4.2517,
          5.2062,
          6.2046,
          3.4339,
          4.9979,
          7.861,
          8.6255,
          8.4427,
          10.2724
        ],
        "pearsonCorrelationSimilarity": 0.9435,
        "normalizedCosineSimilarity": 0.9884,
        "euclideanSimilarity": 0.1815,
        "manhattanSimilarity": 0.0752,
        "gowerSimilarity": 0.1929,
        "soergelSimilarity": 0.806,
        "kulczynskiSimilarity": 0.806,
        "lorentzianSimilarity": 0.1177,
        "weightedMinkowskiSimilarity": 0.1815,
        "canberraSimilarity": 0.8426,
        "chebyshevSimilarity": 0.3075,
        "intersectionSimilarity": 0.8926,
        "waveHedgesSimilarity": 0.2622,
        "sorensenSimilarity": 0.8926,
        "motykaSimilarity": 0.806,
        "kullbackLeiblerSimilarity": 0.9529,
        "jeffreysSimilarity": 0.9117,
        "kSimilarity": 0.9885,
        "topsoeSimilarity": 0.977,
        "normalizedPearsonChiSquareSimilarity": 0.1365,
        "normalizedNeymanChiSquareSimilarity": 0.1283,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.0708,
        "normalizedSquaredChiSquareSimilarity": 0.2622,
        "fidelitySimilarity": 0.9881,
        "hellingerSimilarity": 0.8907,
        "normalizedMatusitaSimilarity": 0.8907,
        "normalizedSquaredChordSimilarity": 0.9881,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.806,
        "jaccardSimilarityRealValued": 0.806,
        "computeVectorSimilarityMeanStdPenalized": 0.7825,
        "vectorSimilarityCorrelation": 0.8321,
        "vectorSimilarityCorrelationNoStd": 0.8593,
        "computeVectorSimilarityRobust": 0.754,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.7628,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.8131,
        "computeVectorSimilarityMetricLike": 0.4001,
        "computeVectorSimilarityTunable": 0.7966,
        "computeVectorSimilarityVarianceWeighted": 0.8219,
        "polynomialKernelSimilarity": 0.9544,
        "rbfKernelSimilarity": 0.8159,
        "itakuraSaitoDistance": 2.2135,
        "vectorSimilarityItakuraSaito": 0.3112
      },
      "0.1": {
        "noisyVector": [
          1.0144,
          2.0075,
          3.0023,
          4.013,
          4.9901,
          5.9868,
          7.0236,
          8.021,
          8.9808,
          10.0379
        ],
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.9441,
        "manhattanSimilarity": 0.8606,
        "gowerSimilarity": 0.9838,
        "soergelSimilarity": 0.9971,
        "kulczynskiSimilarity": 0.9971,
        "lorentzianSimilarity": 0.8619,
        "weightedMinkowskiSimilarity": 0.9441,
        "canberraSimilarity": 0.9981,
        "chebyshevSimilarity": 0.9635,
        "intersectionSimilarity": 0.9985,
        "waveHedgesSimilarity": 0.9634,
        "sorensenSimilarity": 0.9985,
        "motykaSimilarity": 0.9971,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 1,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.9994,
        "normalizedNeymanChiSquareSimilarity": 0.9994,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9987,
        "normalizedSquaredChiSquareSimilarity": 0.9997,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 0.9989,
        "normalizedMatusitaSimilarity": 0.9989,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9971,
        "jaccardSimilarityRealValued": 0.9971,
        "computeVectorSimilarityMeanStdPenalized": 0.9967,
        "vectorSimilarityCorrelation": 0.9981,
        "vectorSimilarityCorrelationNoStd": 0.9981,
        "computeVectorSimilarityRobust": 0.9953,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9981,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9981,
        "computeVectorSimilarityMetricLike": 0.9881,
        "computeVectorSimilarityTunable": 0.9972,
        "computeVectorSimilarityVarianceWeighted": 0.9981,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 1,
        "itakuraSaitoDistance": 0.0001,
        "vectorSimilarityItakuraSaito": 0.9999
      },
      "0.5": {
        "noisyVector": [
          0.9261,
          2.1125,
          2.9635,
          3.7716,
          4.9279,
          6.044,
          6.7979,
          7.8863,
          8.9016,
          10.2407
        ],
        "pearsonCorrelationSimilarity": 0.9995,
        "normalizedCosineSimilarity": 0.9999,
        "euclideanSimilarity": 0.6909,
        "manhattanSimilarity": 0.45,
        "gowerSimilarity": 0.8778,
        "soergelSimilarity": 0.9779,
        "kulczynskiSimilarity": 0.9779,
        "lorentzianSimilarity": 0.4687,
        "weightedMinkowskiSimilarity": 0.6909,
        "canberraSimilarity": 0.9851,
        "chebyshevSimilarity": 0.806,
        "intersectionSimilarity": 0.9888,
        "waveHedgesSimilarity": 0.7718,
        "sorensenSimilarity": 0.9888,
        "motykaSimilarity": 0.9779,
        "kullbackLeiblerSimilarity": 0.9997,
        "jeffreysSimilarity": 0.9993,
        "kSimilarity": 0.9999,
        "topsoeSimilarity": 0.9998,
        "normalizedPearsonChiSquareSimilarity": 0.9597,
        "normalizedNeymanChiSquareSimilarity": 0.9606,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9234,
        "normalizedSquaredChiSquareSimilarity": 0.9797,
        "fidelitySimilarity": 0.9999,
        "hellingerSimilarity": 0.9907,
        "normalizedMatusitaSimilarity": 0.9907,
        "normalizedSquaredChordSimilarity": 0.9999,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9779,
        "jaccardSimilarityRealValued": 0.9779,
        "computeVectorSimilarityMeanStdPenalized": 0.9766,
        "vectorSimilarityCorrelation": 0.9849,
        "vectorSimilarityCorrelationNoStd": 0.9852,
        "computeVectorSimilarityRobust": 0.9647,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9845,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9849,
        "computeVectorSimilarityMetricLike": 0.9107,
        "computeVectorSimilarityTunable": 0.9779,
        "computeVectorSimilarityVarianceWeighted": 0.9848,
        "polynomialKernelSimilarity": 0.9995,
        "rbfKernelSimilarity": 0.998,
        "itakuraSaitoDistance": 0.0073,
        "vectorSimilarityItakuraSaito": 0.9927
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
            "timeMs": 0.1605
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.1109
          },
          "euclideanSimilarity": {
            "score": 0.4866,
            "timeMs": 0.0993
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.1362
          },
          "rbfKernelSimilarity": {
            "score": 0.9889,
            "timeMs": 0.0849
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9784,
            "timeMs": 0.156
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9807,
            "timeMs": 0.0584
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9823,
            "timeMs": 0.1553
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9838,
            "timeMs": 0.0563
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
            "timeMs": 0.0199
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0536
          },
          "euclideanSimilarity": {
            "score": 0.1649,
            "timeMs": 0.0322
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0766
          },
          "rbfKernelSimilarity": {
            "score": 0.7739,
            "timeMs": 0.0489
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8799,
            "timeMs": 0.0393
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9138,
            "timeMs": 0.0245
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9197,
            "timeMs": 0.0435
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9372,
            "timeMs": 0.0251
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
            "timeMs": 0.0102
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0106
          },
          "euclideanSimilarity": {
            "score": 0.5722,
            "timeMs": 0.0065
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0244
          },
          "rbfKernelSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0062
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9746,
            "timeMs": 0.0182
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.978,
            "timeMs": 0.0191
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9808,
            "timeMs": 0.0201
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9828,
            "timeMs": 0.0169
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
            "timeMs": 0.0124
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0162
          },
          "euclideanSimilarity": {
            "score": 0.2482,
            "timeMs": 0.0079
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0382
          },
          "rbfKernelSimilarity": {
            "score": 0.9124,
            "timeMs": 0.0142
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.919,
            "timeMs": 0.0109
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9387,
            "timeMs": 0.0103
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9465,
            "timeMs": 0.0112
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9558,
            "timeMs": 0.0207
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
            "timeMs": 0.0028
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0025
          },
          "euclideanSimilarity": {
            "score": 0.7352,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0066
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9617,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9672,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.97,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9735,
            "timeMs": 0.003
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.454,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9856,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9639,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9683,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9697,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9728,
            "timeMs": 0.0058
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
            "timeMs": 0.0339
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0136
          },
          "euclideanSimilarity": {
            "score": 0.5114,
            "timeMs": 0.0073
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.012
          },
          "rbfKernelSimilarity": {
            "score": 0.9909,
            "timeMs": 0.022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9502,
            "timeMs": 0.0197
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9608,
            "timeMs": 0.0191
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9657,
            "timeMs": 0.0309
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9713,
            "timeMs": 0.0208
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
            "timeMs": 0.0138
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0123
          },
          "euclideanSimilarity": {
            "score": 0.1679,
            "timeMs": 0.008
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.014
          },
          "rbfKernelSimilarity": {
            "score": 0.7821,
            "timeMs": 0.0067
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8975,
            "timeMs": 0.0304
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9258,
            "timeMs": 0.0191
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9437,
            "timeMs": 0.0201
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.954,
            "timeMs": 0.0198
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
            "timeMs": 0.0079
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0072
          },
          "euclideanSimilarity": {
            "score": 0.5742,
            "timeMs": 0.0046
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0096
          },
          "rbfKernelSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9064,
            "timeMs": 0.0221
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9334,
            "timeMs": 0.0101
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9452,
            "timeMs": 0.0201
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9569,
            "timeMs": 0.0121
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
            "timeMs": 0.0072
          },
          "euclideanSimilarity": {
            "score": 0.2241,
            "timeMs": 0.0047
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0081
          },
          "rbfKernelSimilarity": {
            "score": 0.887,
            "timeMs": 0.0053
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8916,
            "timeMs": 0.0099
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9233,
            "timeMs": 0.0184
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9388,
            "timeMs": 0.0108
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.951,
            "timeMs": 0.0101
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
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.7365,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9892,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9897,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9899,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9903,
            "timeMs": 0.0027
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
            "score": 0.382,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9742,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8406,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.895,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8457,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8977,
            "timeMs": 0.0027
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
            "timeMs": 0.011
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0124
          },
          "euclideanSimilarity": {
            "score": 0.4947,
            "timeMs": 0.0064
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0072
          },
          "rbfKernelSimilarity": {
            "score": 0.9896,
            "timeMs": 0.007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9928,
            "timeMs": 0.0176
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9929,
            "timeMs": 0.0173
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9929,
            "timeMs": 0.0193
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9931,
            "timeMs": 0.0189
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
            "timeMs": 0.0103
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0111
          },
          "euclideanSimilarity": {
            "score": 0.1602,
            "timeMs": 0.0153
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0086
          },
          "rbfKernelSimilarity": {
            "score": 0.7596,
            "timeMs": 0.035
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.949,
            "timeMs": 0.0183
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9563,
            "timeMs": 0.0175
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9589,
            "timeMs": 0.0195
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9635,
            "timeMs": 0.0223
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
            "timeMs": 0.0062
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0062
          },
          "euclideanSimilarity": {
            "score": 0.5749,
            "timeMs": 0.0057
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0058
          },
          "rbfKernelSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9912,
            "timeMs": 0.0096
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9914,
            "timeMs": 0.0092
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9914,
            "timeMs": 0.0101
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9916,
            "timeMs": 0.01
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
            "timeMs": 0.0058
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.006
          },
          "euclideanSimilarity": {
            "score": 0.221,
            "timeMs": 0.0044
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0132
          },
          "rbfKernelSimilarity": {
            "score": 0.8832,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9621,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9658,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9667,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9694,
            "timeMs": 0.0029
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
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.7546,
            "timeMs": 0.2334
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0055
          },
          "rbfKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9955,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9956,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9956,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9956,
            "timeMs": 0.0009
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
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.42,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.9811,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9736,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9751,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9752,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9766,
            "timeMs": 0.0017
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
            "score": 0.9994,
            "timeMs": 0.0115
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.998,
            "timeMs": 0.0115
          },
          "euclideanSimilarity": {
            "score": 0.5455,
            "timeMs": 0.006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0.9931,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9473,
            "timeMs": 0.0628
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9564,
            "timeMs": 0.0195
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9603,
            "timeMs": 0.0366
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9645,
            "timeMs": 0.0197
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
            "score": 0.9778,
            "timeMs": 0.0289
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9412,
            "timeMs": 0.0357
          },
          "euclideanSimilarity": {
            "score": 0.1639,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 0.9136,
            "timeMs": 0.0082
          },
          "rbfKernelSimilarity": {
            "score": 0.771,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7276,
            "timeMs": 0.018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.792,
            "timeMs": 0.0175
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7979,
            "timeMs": 0.0213
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8386,
            "timeMs": 0.0193
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
            "score": 0.9989,
            "timeMs": 0.0058
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9968,
            "timeMs": 0.006
          },
          "euclideanSimilarity": {
            "score": 0.5652,
            "timeMs": 0.0027
          },
          "polynomialKernelSimilarity": {
            "score": 0.9956,
            "timeMs": 0.0059
          },
          "rbfKernelSimilarity": {
            "score": 0.9941,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9261,
            "timeMs": 0.0099
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9415,
            "timeMs": 0.0093
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9358,
            "timeMs": 0.0102
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9476,
            "timeMs": 0.0097
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
            "score": 0.9719,
            "timeMs": 0.0059
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9287,
            "timeMs": 0.0063
          },
          "euclideanSimilarity": {
            "score": 0.2056,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.8917,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.8614,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6857,
            "timeMs": 0.0095
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.764,
            "timeMs": 0.0091
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7758,
            "timeMs": 0.0103
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8233,
            "timeMs": 0.0161
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
            "score": 0.9985,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9974,
            "timeMs": 0.2628
          },
          "euclideanSimilarity": {
            "score": 0.7002,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.9942,
            "timeMs": 0.0194
          },
          "rbfKernelSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9371,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9435,
            "timeMs": 0.0184
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9444,
            "timeMs": 0.0054
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9491,
            "timeMs": 0.0067
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
            "score": 0.9956,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9921,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.5768,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.983,
            "timeMs": 0.0046
          },
          "rbfKernelSimilarity": {
            "score": 0.9946,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.862,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8909,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8989,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9153,
            "timeMs": 0.0026
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
            "score": 0.9992,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9934,
            "timeMs": 0.0025
          },
          "euclideanSimilarity": {
            "score": 0.4442,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.997,
            "timeMs": 0.0074
          },
          "rbfKernelSimilarity": {
            "score": 0.9845,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9666,
            "timeMs": 0.0178
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9693,
            "timeMs": 0.0287
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9698,
            "timeMs": 0.0199
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9718,
            "timeMs": 0.0205
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
            "score": 0.9904,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9239,
            "timeMs": 0.0025
          },
          "euclideanSimilarity": {
            "score": 0.1859,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.9621,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0.8255,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8659,
            "timeMs": 0.0176
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8882,
            "timeMs": 0.0173
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8947,
            "timeMs": 0.0196
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9072,
            "timeMs": 0.019
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
            "score": 0.9996,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9969,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.609,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0044
          },
          "rbfKernelSimilarity": {
            "score": 0.9959,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9745,
            "timeMs": 0.0098
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9758,
            "timeMs": 0.0091
          },
          "vectorSimilarityCorrelation": {
            "score": 0.976,
            "timeMs": 0.0111
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9771,
            "timeMs": 0.0099
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
            "score": 0.9856,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8935,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1953,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9434,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.8438,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8638,
            "timeMs": 0.0094
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8835,
            "timeMs": 0.009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8893,
            "timeMs": 0.0103
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9022,
            "timeMs": 0.0099
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
            "score": 0.9999,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.8353,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9763,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9775,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9776,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9787,
            "timeMs": 0.0025
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
            "score": 0.9929,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.961,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.4521,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9722,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9854,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7699,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8401,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8161,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8663,
            "timeMs": 0.0025
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
            "score": 0.9943,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.4893,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.9779,
            "timeMs": 0.0076
          },
          "rbfKernelSimilarity": {
            "score": 0.9892,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.808,
            "timeMs": 0.0176
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8594,
            "timeMs": 0.0182
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8667,
            "timeMs": 0.019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8939,
            "timeMs": 0.0192
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
            "score": 0.8999,
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.902,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.1716,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.6451,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.792,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5437,
            "timeMs": 0.0176
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6141,
            "timeMs": 0.0172
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6632,
            "timeMs": 0.0192
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.729,
            "timeMs": 0.0194
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
            "score": 0.9924,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9925,
            "timeMs": 0.0019
          },
          "euclideanSimilarity": {
            "score": 0.5408,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9711,
            "timeMs": 0.0053
          },
          "rbfKernelSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8424,
            "timeMs": 0.0097
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.881,
            "timeMs": 0.0091
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8747,
            "timeMs": 0.0101
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9004,
            "timeMs": 0.0104
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
            "score": 0.9201,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9206,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.2109,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.7116,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.8694,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.539,
            "timeMs": 0.0095
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6057,
            "timeMs": 0.009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6639,
            "timeMs": 0.0103
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7274,
            "timeMs": 0.01
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
            "score": 0.997,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.7992,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9898,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8716,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8976,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9046,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9184,
            "timeMs": 0.0025
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
            "score": 0.8439,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8559,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.3278,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.5311,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9588,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4249,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4849,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5744,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.65,
            "timeMs": 0.0025
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
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.5059,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9823,
            "timeMs": 0.0068
          },
          "rbfKernelSimilarity": {
            "score": 0.9905,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8654,
            "timeMs": 0.0177
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8956,
            "timeMs": 0.0184
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9001,
            "timeMs": 0.0189
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9167,
            "timeMs": 0.019
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
            "score": 0.9277,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9272,
            "timeMs": 0.0025
          },
          "euclideanSimilarity": {
            "score": 0.1736,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.7349,
            "timeMs": 0.0071
          },
          "rbfKernelSimilarity": {
            "score": 0.7972,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.566,
            "timeMs": 0.0288
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6452,
            "timeMs": 0.017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6853,
            "timeMs": 0.0212
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7482,
            "timeMs": 0.0286
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
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.58,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9808,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8576,
            "timeMs": 0.0093
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8901,
            "timeMs": 0.0132
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8987,
            "timeMs": 0.01
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9146,
            "timeMs": 0.0098
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
            "score": 0.9364,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9358,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.2408,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.7672,
            "timeMs": 0.0045
          },
          "rbfKernelSimilarity": {
            "score": 0.9053,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6136,
            "timeMs": 0.0093
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6904,
            "timeMs": 0.0091
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7355,
            "timeMs": 0.0099
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7817,
            "timeMs": 0.0101
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
            "score": 0.9961,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.7747,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9868,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8497,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8799,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.888,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.906,
            "timeMs": 0.0025
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
            "score": 0.724,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.716,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.3235,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.3153,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9572,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.2892,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.3821,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5365,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.5865,
            "timeMs": 0.0026
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.5199,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0067
          },
          "rbfKernelSimilarity": {
            "score": 0.9915,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8727,
            "timeMs": 0.0176
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9008,
            "timeMs": 0.0171
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9108,
            "timeMs": 0.0191
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9249,
            "timeMs": 0.019
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.998,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.1663,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.992,
            "timeMs": 0.0066
          },
          "rbfKernelSimilarity": {
            "score": 0.7778,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.586,
            "timeMs": 0.2279
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6797,
            "timeMs": 0.0179
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7026,
            "timeMs": 0.0216
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7724,
            "timeMs": 0.0418
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
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0136
          },
          "euclideanSimilarity": {
            "score": 0.6062,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0064
          },
          "rbfKernelSimilarity": {
            "score": 0.9958,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8858,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.909,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9166,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9291,
            "timeMs": 0.0028
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
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.2334,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0094
          },
          "rbfKernelSimilarity": {
            "score": 0.8978,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5639,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6525,
            "timeMs": 0.0051
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6773,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7516,
            "timeMs": 0.0062
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
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.7669,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8724,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8991,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9067,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9215,
            "timeMs": 0.0008
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
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.415,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9803,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6055,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7076,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7554,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8135,
            "timeMs": 0.0008
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
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.4662,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0084
          },
          "rbfKernelSimilarity": {
            "score": 0.987,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9698,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9713,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9715,
            "timeMs": 0.0051
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9728,
            "timeMs": 0.0048
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
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.1653,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0065
          },
          "rbfKernelSimilarity": {
            "score": 0.7749,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8308,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8647,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8756,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8933,
            "timeMs": 0.005
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.5909,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0045
          },
          "rbfKernelSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9749,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9759,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.976,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9769,
            "timeMs": 0.0026
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
            "score": 0.9983,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.2284,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9933,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.8922,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8636,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8909,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8992,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9141,
            "timeMs": 0.0025
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
            "score": 0.9998,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.8083,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9783,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9792,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9793,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9801,
            "timeMs": 0.0009
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
            "score": 0.9944,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.4398,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9779,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9839,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8037,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8578,
            "timeMs": 0.0094
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8785,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9022,
            "timeMs": 0.0008
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
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.4993,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.99,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9706,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.972,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9721,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9734,
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
            "score": 0.9981,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.1688,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.9926,
            "timeMs": 0.0076
          },
          "rbfKernelSimilarity": {
            "score": 0.7846,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8156,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8533,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8634,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8842,
            "timeMs": 0.005
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.592,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0045
          },
          "rbfKernelSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9746,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.976,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9761,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9773,
            "timeMs": 0.0025
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
            "score": 0.9997,
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.2636,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.9249,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8699,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8926,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8988,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9125,
            "timeMs": 0.0025
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
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.7129,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9637,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9656,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9657,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9673,
            "timeMs": 0.0008
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
            "score": 0.9988,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.4295,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9825,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8902,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9035,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9063,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9161,
            "timeMs": 0.0008
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
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0025
          },
          "euclideanSimilarity": {
            "score": 0.4842,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.9887,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8752,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9066,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9107,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9277,
            "timeMs": 0.0047
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
            "score": 0.9996,
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.1465,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0066
          },
          "rbfKernelSimilarity": {
            "score": 0.7123,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6238,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7149,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.751,
            "timeMs": 0.0051
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8057,
            "timeMs": 0.0047
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
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.6189,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8628,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9011,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8966,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9212,
            "timeMs": 0.0026
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
            "score": 0.9973,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.193,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9892,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.8396,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6119,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7011,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7441,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7986,
            "timeMs": 0.0025
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
            "score": 0.9996,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7716,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9223,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9333,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9354,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9426,
            "timeMs": 0.0008
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
            "score": 0.9854,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9856,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.3469,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9433,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9652,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5825,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6724,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.744,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7954,
            "timeMs": 0.0008
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
            "score": 0.9939,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9941,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.4805,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9761,
            "timeMs": 0.0068
          },
          "rbfKernelSimilarity": {
            "score": 0.9884,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8214,
            "timeMs": 0.003
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8629,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8721,
            "timeMs": 0.005
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8939,
            "timeMs": 0.0048
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
            "score": 0.9191,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9195,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.1795,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.7067,
            "timeMs": 0.0077
          },
          "rbfKernelSimilarity": {
            "score": 0.8114,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5421,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6138,
            "timeMs": 0.0028
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6562,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7252,
            "timeMs": 0.0048
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
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.592,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9816,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7918,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8477,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8561,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.887,
            "timeMs": 0.0026
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
            "score": 0.9205,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9206,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.2475,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.7162,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9117,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5136,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5639,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6056,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6827,
            "timeMs": 0.0025
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
            "score": 0.9989,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.8449,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8549,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8875,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8973,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9139,
            "timeMs": 0.0008
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
            "score": 0.9648,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9648,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.4723,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.8772,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9876,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.593,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6808,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6955,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7623,
            "timeMs": 0.0007
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.4919,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0067
          },
          "rbfKernelSimilarity": {
            "score": 0.9894,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.959,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9624,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.963,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9656,
            "timeMs": 0.0047
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
            "score": 0.9814,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9148,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.1763,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9274,
            "timeMs": 0.0065
          },
          "rbfKernelSimilarity": {
            "score": 0.8039,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7682,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.823,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8363,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8654,
            "timeMs": 0.0046
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
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.5877,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9507,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9575,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9598,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9637,
            "timeMs": 0.0024
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
            "score": 0.9794,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.896,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.2245,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9197,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.8875,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7591,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8174,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8316,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8623,
            "timeMs": 0.0024
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
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9961,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7122,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8203,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8797,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8346,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8874,
            "timeMs": 0.0007
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
            "score": 0.9888,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9606,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.4495,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9568,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9851,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.734,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8097,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.828,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8637,
            "timeMs": 0.0008
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
            "score": 0.9984,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.4893,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9935,
            "timeMs": 0.0065
          },
          "rbfKernelSimilarity": {
            "score": 0.9892,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9551,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9588,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9594,
            "timeMs": 0.0047
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9621,
            "timeMs": 0.0047
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
            "score": 0.966,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9667,
            "timeMs": 0.0021
          },
          "euclideanSimilarity": {
            "score": 0.1671,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.8693,
            "timeMs": 0.0065
          },
          "rbfKernelSimilarity": {
            "score": 0.7799,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7558,
            "timeMs": 0.0029
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8096,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8213,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8529,
            "timeMs": 0.0046
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.5606,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9927,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9939,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9335,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9472,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9521,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9581,
            "timeMs": 0.0025
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
            "score": 0.9642,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9642,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.2252,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.8635,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.8884,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7263,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7882,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8163,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8458,
            "timeMs": 0.0025
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
            "score": 0.9978,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7108,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9918,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9549,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9578,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.958,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9604,
            "timeMs": 0.0046
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
            "score": 0.9547,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9553,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.3672,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.8365,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.9707,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6296,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7338,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7411,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8071,
            "timeMs": 0.0008
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
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.4805,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0079
          },
          "rbfKernelSimilarity": {
            "score": 0.9884,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9637,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9715,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9772,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9804,
            "timeMs": 0.0048
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
            "timeMs": 0.0022
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.1544,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0064
          },
          "rbfKernelSimilarity": {
            "score": 0.7408,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9104,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9331,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9315,
            "timeMs": 0.2844
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9462,
            "timeMs": 0.0051
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
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.5985,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.006
          },
          "rbfKernelSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9906,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.991,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9911,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9915,
            "timeMs": 0.0024
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.2286,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0427
          },
          "rbfKernelSimilarity": {
            "score": 0.8924,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9051,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9306,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9369,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.95,
            "timeMs": 0.0018
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
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7319,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9977,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9977,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9977,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9977,
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
            "score": 0.3362,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0015
          },
          "rbfKernelSimilarity": {
            "score": 0.9618,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8578,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9004,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9226,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9385,
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
            "score": 0.5147,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9912,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9947,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9948,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9948,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9949,
            "timeMs": 0.0034
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
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1583,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.7537,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9544,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9613,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9645,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9686,
            "timeMs": 0.0036
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
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.5715,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.993,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9932,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9933,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9935,
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
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.2062,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.8622,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9665,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9708,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9729,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9755,
            "timeMs": 0.0019
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
            "timeMs": 0.0003
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.814,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9929,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9931,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9931,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9933,
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
            "timeMs": 0.0003
          },
          "euclideanSimilarity": {
            "score": 0.4908,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9893,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9836,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9847,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.985,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9859,
            "timeMs": 0.0006
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
            "score": 0.9974,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.5079,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9897,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9907,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9294,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9421,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9419,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9499,
            "timeMs": 0.0033
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
            "score": 0.9464,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9465,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.1595,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.7985,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.7576,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6858,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7577,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7814,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8219,
            "timeMs": 0.0032
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
            "score": 0.9971,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.5748,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9887,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9199,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9362,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9406,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9481,
            "timeMs": 0.0018
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
            "score": 0.9597,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9607,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.2577,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.848,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9204,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7267,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7873,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8057,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8394,
            "timeMs": 0.0018
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
            "score": 0.997,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.7502,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9892,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9441,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9479,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9485,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9516,
            "timeMs": 0.0007
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
            "score": 0.9731,
            "timeMs": 0.0003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9754,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.4356,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9007,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9834,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7898,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8256,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8403,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8606,
            "timeMs": 0.0006
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
            "score": 0.9954,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.4164,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.982,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9806,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8329,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8736,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8866,
            "timeMs": 0.0071
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9057,
            "timeMs": 0.0065
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
            "score": 0.903,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9032,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1225,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.6521,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.5986,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5378,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6051,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6588,
            "timeMs": 0.0069
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7246,
            "timeMs": 0.0069
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
            "score": 0.9947,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9947,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4929,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9794,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.9895,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8042,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8579,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8624,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8923,
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
            "score": 0.904,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9052,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.1731,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.6582,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.7959,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5304,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5964,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6426,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7147,
            "timeMs": 0.0033
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
            "score": 0.9981,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7604,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9931,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7931,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8575,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.888,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9108,
            "timeMs": 0.0008
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
            "score": 0.8949,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8995,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.3147,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.6512,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9537,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5251,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5895,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6657,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7315,
            "timeMs": 0.0009
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
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.4208,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9818,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.9812,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8367,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8784,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8836,
            "timeMs": 0.0072
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9063,
            "timeMs": 0.0065
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
            "score": 0.9039,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9047,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1232,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.6548,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.6024,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.545,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6214,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6733,
            "timeMs": 0.0065
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7399,
            "timeMs": 0.0065
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
            "score": 0.995,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.995,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9804,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.99,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8221,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8682,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8694,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8969,
            "timeMs": 0.0034
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
            "score": 0.9413,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9422,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.202,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.782,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.8555,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6174,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6974,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7259,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7796,
            "timeMs": 0.0033
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
            "score": 0.9968,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.7085,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.988,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7714,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8405,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8716,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8973,
            "timeMs": 0.0009
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
            "score": 0.9247,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9331,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.3404,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.7407,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9632,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5453,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6234,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6417,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7221,
            "timeMs": 0.0009
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
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.4251,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0044
          },
          "rbfKernelSimilarity": {
            "score": 0.9819,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9582,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9658,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9706,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9739,
            "timeMs": 0.0064
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
            "score": 0.9982,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.124,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9926,
            "timeMs": 0.0384
          },
          "rbfKernelSimilarity": {
            "score": 0.6072,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8448,
            "timeMs": 0.0138
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.883,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8893,
            "timeMs": 0.007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.91,
            "timeMs": 0.0067
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
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.5166,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.9913,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.947,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9583,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9659,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9703,
            "timeMs": 0.0035
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
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1594,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.7573,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7929,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.851,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8574,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8896,
            "timeMs": 0.0031
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
            "score": 1,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7355,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8311,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8869,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9202,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9375,
            "timeMs": 0.0009
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
            "score": 0.9977,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.2795,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.991,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9357,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7562,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8291,
            "timeMs": 0.0004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8621,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8901,
            "timeMs": 0.0009
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
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.4056,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0044
          },
          "rbfKernelSimilarity": {
            "score": 0.9788,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9775,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9814,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9863,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9877,
            "timeMs": 0.0067
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
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1263,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.6199,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9455,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.957,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9632,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9686,
            "timeMs": 0.0063
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
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.4962,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9897,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9661,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9734,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9815,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9838,
            "timeMs": 0.0033
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
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1641,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.7714,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9094,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9335,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9457,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9556,
            "timeMs": 0.0033
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
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.7332,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8437,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8964,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9313,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9465,
            "timeMs": 0.0009
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
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.3442,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9643,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.797,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8629,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8986,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9214,
            "timeMs": 0.0008
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
            "score": 0.9886,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9886,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.4109,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.956,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.9797,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6821,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7632,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7778,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8274,
            "timeMs": 0.0069
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
            "score": 0.8636,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8637,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.1177,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.5325,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.5704,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3962,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.465,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5907,
            "timeMs": 0.0064
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6506,
            "timeMs": 0.0063
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
            "score": 0.9907,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9907,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5195,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9648,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9915,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7307,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7998,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8173,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.854,
            "timeMs": 0.0032
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
            "score": 0.8498,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8501,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1552,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.498,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.7437,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3354,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.427,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelation": {
            "score": 0.545,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6023,
            "timeMs": 0.0033
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
            "score": 0.9857,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9855,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.6384,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9519,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9968,
            "timeMs": 0.0003
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6736,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7559,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7986,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8351,
            "timeMs": 0.0009
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
            "score": 0.93,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9293,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.3772,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.7605,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9731,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.3828,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4593,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5908,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6527,
            "timeMs": 0.001
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
            "score": 0.9912,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9912,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.4221,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9656,
            "timeMs": 0.0033
          },
          "rbfKernelSimilarity": {
            "score": 0.9814,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6992,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7774,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7968,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8404,
            "timeMs": 0.0065
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
            "score": 0.8479,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8479,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1266,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.4897,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.6212,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4021,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4691,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5879,
            "timeMs": 0.0065
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6505,
            "timeMs": 0.0063
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
            "score": 0.9884,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9884,
            "timeMs": 0.322
          },
          "euclideanSimilarity": {
            "score": 0.4766,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9557,
            "timeMs": 0.0053
          },
          "rbfKernelSimilarity": {
            "score": 0.988,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6582,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.747,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7607,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8172,
            "timeMs": 0.0035
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
            "score": 0.8525,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8581,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.156,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.5054,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.7462,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4132,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4755,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5909,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6547,
            "timeMs": 0.0033
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
            "score": 0.9844,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9848,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6245,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9474,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5728,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.665,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7134,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.777,
            "timeMs": 0.001
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
            "score": 0.8335,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.864,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.3165,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.5029,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9544,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.529,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5952,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6534,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7241,
            "timeMs": 0.0016
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
            "timeMs": 0.0015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.4279,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.9823,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7606,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8305,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8518,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8844,
            "timeMs": 0.0072
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
            "score": 0.9802,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9787,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.1252,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9224,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.6136,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5531,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6369,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6964,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7602,
            "timeMs": 0.0065
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
            "score": 0.9994,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.5405,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9976,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7177,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.804,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8282,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.871,
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
            "score": 0.9782,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9765,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.1649,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9151,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.7738,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5382,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6146,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6788,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.746,
            "timeMs": 0.0032
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
            "score": 0.9988,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.675,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9958,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6358,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7399,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8037,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8482,
            "timeMs": 0.0011
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
            "score": 0.9907,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.3552,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9636,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9676,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5287,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6056,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7148,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7729,
            "timeMs": 0.0009
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
            "score": 0.9949,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.4093,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.98,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9794,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8323,
            "timeMs": 0.0023
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8758,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8825,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9051,
            "timeMs": 0.0065
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
            "score": 0.903,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.903,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.1262,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.6521,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.6191,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5449,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6194,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6593,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7296,
            "timeMs": 0.0066
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
            "score": 0.995,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.995,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4949,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9804,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9896,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.813,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8616,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelation": {
            "score": 0.865,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8928,
            "timeMs": 0.0035
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
            "score": 0.9265,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9267,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.1826,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.7312,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.8183,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5765,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.657,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7043,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7628,
            "timeMs": 0.0034
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
            "score": 0.9962,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9966,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.7192,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9864,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7946,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8585,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8887,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9111,
            "timeMs": 0.0011
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
            "score": 0.9388,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9388,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.355,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.7851,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9675,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5915,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6842,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7203,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7831,
            "timeMs": 0.0009
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
            "score": 0.9922,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9922,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.3577,
            "timeMs": 0.0082
          },
          "polynomialKernelSimilarity": {
            "score": 0.9692,
            "timeMs": 0.012
          },
          "rbfKernelSimilarity": {
            "score": 0.9683,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7255,
            "timeMs": 0.008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7998,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8084,
            "timeMs": 0.0131
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8517,
            "timeMs": 0.0133
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
            "score": 0.8673,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8673,
            "timeMs": 0.0021
          },
          "euclideanSimilarity": {
            "score": 0.104,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.5425,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.4761,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4889,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4993,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5971,
            "timeMs": 0.0096
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6635,
            "timeMs": 0.0096
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
            "score": 0.9911,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9911,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.4286,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9653,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9824,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7074,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7865,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8065,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8486,
            "timeMs": 0.0049
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
            "score": 0.884,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.884,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.1354,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.5939,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.6651,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5061,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5376,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6222,
            "timeMs": 0.005
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6895,
            "timeMs": 0.0048
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
            "score": 0.9961,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9957,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.7086,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9859,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6835,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7794,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8169,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.861,
            "timeMs": 0.0012
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
            "score": 0.8061,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.7796,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.242,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.4109,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9065,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4232,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4803,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6167,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6772,
            "timeMs": 0.0013
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
            "score": 0.9993,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0021
          },
          "euclideanSimilarity": {
            "score": 0.3674,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.9708,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8937,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9191,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9242,
            "timeMs": 0.0101
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9373,
            "timeMs": 0.0097
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
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9817,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.1003,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9276,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.4472,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6549,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7407,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7557,
            "timeMs": 0.0442
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8103,
            "timeMs": 0.0095
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
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.4494,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.9851,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8767,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9079,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9176,
            "timeMs": 0.0053
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9322,
            "timeMs": 0.0051
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
            "score": 0.9834,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9834,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.1444,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9348,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.704,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6469,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7355,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7646,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8155,
            "timeMs": 0.0049
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
            "score": 0.9994,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6528,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7543,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8336,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8752,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9029,
            "timeMs": 0.0012
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
            "score": 0.9807,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9803,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.2607,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9251,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9228,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5759,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6761,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7433,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8021,
            "timeMs": 0.0011
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
            "score": 0.9979,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0021
          },
          "euclideanSimilarity": {
            "score": 0.3495,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9915,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.966,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8445,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8836,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8945,
            "timeMs": 0.0095
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9133,
            "timeMs": 0.0096
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
            "score": 0.963,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9567,
            "timeMs": 0.0021
          },
          "euclideanSimilarity": {
            "score": 0.1076,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.8577,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.5029,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5936,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.681,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7135,
            "timeMs": 0.01
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7745,
            "timeMs": 0.0096
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
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.4567,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.993,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.986,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8233,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8728,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8752,
            "timeMs": 0.0049
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9032,
            "timeMs": 0.0048
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
            "score": 0.9668,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.96,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.1416,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.8721,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.6923,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5978,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6849,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7118,
            "timeMs": 0.005
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7742,
            "timeMs": 0.0053
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
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6304,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.992,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9966,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6932,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7885,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8411,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8774,
            "timeMs": 0.0011
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
            "score": 0.9752,
            "timeMs": 0.0004
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9692,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.3242,
            "timeMs": 0.0003
          },
          "polynomialKernelSimilarity": {
            "score": 0.9053,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9575,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.556,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6438,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.729,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7825,
            "timeMs": 0.0012
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
            "score": 0.9947,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.4142,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9793,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.9802,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8295,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8719,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8807,
            "timeMs": 0.0069
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9022,
            "timeMs": 0.0065
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
            "score": 0.9128,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9129,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.1278,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.6838,
            "timeMs": 0.0093
          },
          "rbfKernelSimilarity": {
            "score": 0.6277,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5342,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6001,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6607,
            "timeMs": 0.0073
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7253,
            "timeMs": 0.0069
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
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.5509,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9932,
            "timeMs": 0.0489
          },
          "rbfKernelSimilarity": {
            "score": 0.9934,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8994,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9191,
            "timeMs": 0.05
          },
          "vectorSimilarityCorrelation": {
            "score": 0.925,
            "timeMs": 0.0119
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.935,
            "timeMs": 0.0106
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
            "score": 0.9665,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9666,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.1968,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.8717,
            "timeMs": 0.0078
          },
          "rbfKernelSimilarity": {
            "score": 0.8466,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6339,
            "timeMs": 0.0045
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7175,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelation": {
            "score": 0.736,
            "timeMs": 0.011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7913,
            "timeMs": 0.0114
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
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.6759,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0055
          },
          "rbfKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9794,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9824,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9857,
            "timeMs": 0.0076
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.987,
            "timeMs": 0.0061
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
            "score": 0.9844,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9844,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.2899,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9393,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.9418,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9176,
            "timeMs": 0.0214
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9388,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9464,
            "timeMs": 0.0065
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9572,
            "timeMs": 0.0058
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
            "timeMs": 0.0035
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9956,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.3413,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.9823,
            "timeMs": 0.0099
          },
          "rbfKernelSimilarity": {
            "score": 0.9634,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8431,
            "timeMs": 0.0075
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8816,
            "timeMs": 0.0062
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8863,
            "timeMs": 0.0179
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9074,
            "timeMs": 0.0195
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
            "score": 0.9082,
            "timeMs": 0.0046
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9083,
            "timeMs": 0.0051
          },
          "euclideanSimilarity": {
            "score": 0.0914,
            "timeMs": 0.0028
          },
          "polynomialKernelSimilarity": {
            "score": 0.6677,
            "timeMs": 0.0119
          },
          "rbfKernelSimilarity": {
            "score": 0.3722,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5563,
            "timeMs": 0.0083
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6323,
            "timeMs": 0.0096
          },
          "vectorSimilarityCorrelation": {
            "score": 0.678,
            "timeMs": 0.0479
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7417,
            "timeMs": 0.0177
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
            "timeMs": 0.0037
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0048
          },
          "euclideanSimilarity": {
            "score": 0.4774,
            "timeMs": 0.0027
          },
          "polynomialKernelSimilarity": {
            "score": 0.9941,
            "timeMs": 0.0121
          },
          "rbfKernelSimilarity": {
            "score": 0.9881,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8983,
            "timeMs": 0.0073
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9211,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9244,
            "timeMs": 0.0196
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.937,
            "timeMs": 0.0409
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
            "score": 0.9615,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9617,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.146,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.8526,
            "timeMs": 0.0075
          },
          "rbfKernelSimilarity": {
            "score": 0.7103,
            "timeMs": 0.0019
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6278,
            "timeMs": 0.0046
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7089,
            "timeMs": 0.0043
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7416,
            "timeMs": 0.0152
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7916,
            "timeMs": 0.0131
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
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.5985,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9868,
            "timeMs": 0.0045
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.988,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9892,
            "timeMs": 0.0119
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9899,
            "timeMs": 0.0337
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
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9877,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.238,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.9516,
            "timeMs": 0.0068
          },
          "rbfKernelSimilarity": {
            "score": 0.9026,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9237,
            "timeMs": 0.0044
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9438,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9525,
            "timeMs": 0.0118
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.962,
            "timeMs": 0.0112
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
            "score": 0.9922,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9922,
            "timeMs": 0.0037
          },
          "euclideanSimilarity": {
            "score": 0.2849,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9694,
            "timeMs": 0.0071
          },
          "rbfKernelSimilarity": {
            "score": 0.9389,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7344,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8055,
            "timeMs": 0.0058
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8178,
            "timeMs": 0.0192
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8574,
            "timeMs": 0.0192
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
            "score": 0.8754,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8754,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.0781,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.565,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.2484,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5036,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5277,
            "timeMs": 0.0059
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6077,
            "timeMs": 0.0188
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6764,
            "timeMs": 0.0189
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
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.4191,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9905,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.981,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8047,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.857,
            "timeMs": 0.0059
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8661,
            "timeMs": 0.0194
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8936,
            "timeMs": 0.019
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
            "score": 0.9496,
            "timeMs": 0.0028
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9496,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.1279,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.8095,
            "timeMs": 0.0072
          },
          "rbfKernelSimilarity": {
            "score": 0.6282,
            "timeMs": 0.0024
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5448,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.617,
            "timeMs": 0.0059
          },
          "vectorSimilarityCorrelation": {
            "score": 0.669,
            "timeMs": 0.0195
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.734,
            "timeMs": 0.0202
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
            "score": 0.9994,
            "timeMs": 0.0025
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0037
          },
          "euclideanSimilarity": {
            "score": 0.5882,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0071
          },
          "rbfKernelSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9788,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9822,
            "timeMs": 0.0058
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9839,
            "timeMs": 0.0166
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9859,
            "timeMs": 0.0359
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
            "score": 0.9854,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9855,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.224,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.9426,
            "timeMs": 0.0072
          },
          "rbfKernelSimilarity": {
            "score": 0.8869,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9351,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9517,
            "timeMs": 0.006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9593,
            "timeMs": 0.3635
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9672,
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
          "type": "peak",
          "intensity": 5,
          "probability": 0.02
        },
        "label": "sin [gaussian (lvl=0.05) + peak]",
        "metrics": {
          "normalizedCosineSimilarity": {
            "score": 0.8438,
            "timeMs": 0.0034
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8454,
            "timeMs": 0.0052
          },
          "euclideanSimilarity": {
            "score": 0.0906,
            "timeMs": 0.0024
          },
          "polynomialKernelSimilarity": {
            "score": 0.4756,
            "timeMs": 0.0082
          },
          "rbfKernelSimilarity": {
            "score": 0.365,
            "timeMs": 0.0498
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8749,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.907,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9133,
            "timeMs": 0.0075
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9298,
            "timeMs": 0.0067
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
            "score": 0.6797,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.7423,
            "timeMs": 0.002
          },
          "euclideanSimilarity": {
            "score": 0.0196,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.1292,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5027,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5295,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6586,
            "timeMs": 0.0084
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7274,
            "timeMs": 0.0063
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
            "score": 0.5863,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5863,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.0196,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.0301,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1301,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1787,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.4944,
            "timeMs": 0.006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4987,
            "timeMs": 0.006
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
            "score": 0.8607,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8625,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.0656,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.5216,
            "timeMs": 0.0061
          },
          "rbfKernelSimilarity": {
            "score": 0.1318,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8829,
            "timeMs": 0.0044
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9129,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9195,
            "timeMs": 0.0133
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9345,
            "timeMs": 0.0131
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
            "score": 0.4405,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.4096,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.014,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.0139,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4284,
            "timeMs": 0.0043
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4879,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6239,
            "timeMs": 0.0119
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6992,
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
            "score": 0.5958,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5958,
            "timeMs": 0.0026
          },
          "euclideanSimilarity": {
            "score": 0.014,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.0369,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1336,
            "timeMs": 0.0044
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.184,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelation": {
            "score": 0.4927,
            "timeMs": 0.0113
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4982,
            "timeMs": 0.0123
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
            "score": 0.8119,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8137,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.0541,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.3902,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0.0468,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8173,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8686,
            "timeMs": 0.006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8792,
            "timeMs": 0.0193
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9046,
            "timeMs": 0.0192
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
            "score": 0.583,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.6144,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.0276,
            "timeMs": 0.0072
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4106,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.48,
            "timeMs": 0.0059
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6329,
            "timeMs": 0.0174
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7026,
            "timeMs": 0.0174
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
            "score": 0.5788,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5789,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0039
          },
          "polynomialKernelSimilarity": {
            "score": 0.025,
            "timeMs": 0.0074
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0022
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1112,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1524,
            "timeMs": 0.0059
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5004,
            "timeMs": 0.0271
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.502,
            "timeMs": 0.0165
          }
        }
      }
    ],
    "insights": []
  }
};