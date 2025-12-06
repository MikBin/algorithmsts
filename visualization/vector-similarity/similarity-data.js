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
      "avgTime": 0.38367890000000004,
      "iterations": 10
    },
    {
      "name": "normalizedCosineSimilarity",
      "avgTime": 0.2821774,
      "iterations": 10
    },
    {
      "name": "euclideanSimilarity",
      "avgTime": 0.1407072,
      "iterations": 10
    },
    {
      "name": "manhattanSimilarity",
      "avgTime": 0.20784429999999998,
      "iterations": 10
    },
    {
      "name": "gowerSimilarity",
      "avgTime": 0.2382821,
      "iterations": 10
    },
    {
      "name": "soergelSimilarity",
      "avgTime": 0.20949020000000002,
      "iterations": 10
    },
    {
      "name": "kulczynskiSimilarity",
      "avgTime": 0.4663448,
      "iterations": 10
    },
    {
      "name": "lorentzianSimilarity",
      "avgTime": 0.1756704,
      "iterations": 10
    },
    {
      "name": "weightedMinkowskiSimilarity",
      "avgTime": 0.2061603,
      "iterations": 10
    },
    {
      "name": "canberraSimilarity",
      "avgTime": 0.25035270000000004,
      "iterations": 10
    },
    {
      "name": "chebyshevSimilarity",
      "avgTime": 0.15505229999999998,
      "iterations": 10
    },
    {
      "name": "intersectionSimilarity",
      "avgTime": 0.1366788,
      "iterations": 10
    },
    {
      "name": "waveHedgesSimilarity",
      "avgTime": 0.1458889,
      "iterations": 10
    },
    {
      "name": "sorensenSimilarity",
      "avgTime": 0.2457878,
      "iterations": 10
    },
    {
      "name": "motykaSimilarity",
      "avgTime": 0.27491329999999997,
      "iterations": 10
    },
    {
      "name": "kullbackLeiblerSimilarity",
      "avgTime": 0.366538,
      "iterations": 10
    },
    {
      "name": "jeffreysSimilarity",
      "avgTime": 0.4895695,
      "iterations": 10
    },
    {
      "name": "kSimilarity",
      "avgTime": 0.3284261,
      "iterations": 10
    },
    {
      "name": "topsoeSimilarity",
      "avgTime": 0.49973059999999997,
      "iterations": 10
    },
    {
      "name": "normalizedPearsonChiSquareSimilarity",
      "avgTime": 0.17148439999999998,
      "iterations": 10
    },
    {
      "name": "normalizedNeymanChiSquareSimilarity",
      "avgTime": 0.1428192,
      "iterations": 10
    },
    {
      "name": "normalizedAdditiveSymmetricChiSquareSimilarity",
      "avgTime": 0.1872726,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChiSquareSimilarity",
      "avgTime": 0.1846429,
      "iterations": 10
    },
    {
      "name": "fidelitySimilarity",
      "avgTime": 0.2544591,
      "iterations": 10
    },
    {
      "name": "hellingerSimilarity",
      "avgTime": 0.2346311,
      "iterations": 10
    },
    {
      "name": "normalizedMatusitaSimilarity",
      "avgTime": 0.32935159999999997,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChordSimilarity",
      "avgTime": 0.3282198,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityBinary",
      "avgTime": 0.1111745,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityWeighted",
      "avgTime": 0.1606409,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityRealValued",
      "avgTime": 0.1415884,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMeanStdPenalized",
      "avgTime": 0.3244754,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelation",
      "avgTime": 0.2679907,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelationNoStd",
      "avgTime": 0.2280409,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityRobust",
      "avgTime": 0.28119059999999996,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMean",
      "avgTime": 0.3397888,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityMeanStdPowerArithmeticMeanNoStd",
      "avgTime": 0.3417185,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMetricLike",
      "avgTime": 0.2639187,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityTunable",
      "avgTime": 0.28451740000000003,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityVarianceWeighted",
      "avgTime": 0.3583282,
      "iterations": 10
    },
    {
      "name": "polynomialKernelSimilarity",
      "avgTime": 0.1465415,
      "iterations": 10
    },
    {
      "name": "rbfKernelSimilarity",
      "avgTime": 0.1059914,
      "iterations": 10
    },
    {
      "name": "itakuraSaitoDistance",
      "avgTime": 0.1586908,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityItakuraSaito",
      "avgTime": 0.053602800000000006,
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
        0.9647629887496035,
        2.038227234711246,
        2.987826569599915,
        3.953274947842983,
        5.028686578654104,
        5.999874803365651,
        7.020589721314911,
        7.973033022225504,
        8.991561041965625,
        9.996784414692787
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.9223,
        "manhattanSimilarity": 0.8194,
        "gowerSimilarity": 0.978,
        "soergelSimilarity": 0.996,
        "kulczynskiSimilarity": 0.996,
        "lorentzianSimilarity": 0.8217,
        "weightedMinkowskiSimilarity": 0.9223,
        "canberraSimilarity": 0.9958,
        "chebyshevSimilarity": 0.9554,
        "intersectionSimilarity": 0.998,
        "waveHedgesSimilarity": 0.9233,
        "sorensenSimilarity": 0.998,
        "motykaSimilarity": 0.996,
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
        "jaccardSimilarityWeighted": 0.996,
        "jaccardSimilarityRealValued": 0.996,
        "computeVectorSimilarityMeanStdPenalized": 0.9917,
        "vectorSimilarityCorrelation": 0.9958,
        "vectorSimilarityCorrelationNoStd": 0.9958,
        "computeVectorSimilarityRobust": 0.9898,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9958,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9958,
        "computeVectorSimilarityMetricLike": 0.9741,
        "computeVectorSimilarityTunable": 0.9938,
        "computeVectorSimilarityVarianceWeighted": 0.9958,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999,
        "itakuraSaitoDistance": 0.0009,
        "vectorSimilarityItakuraSaito": 0.9991
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
          0.8839,
          2.1064,
          2.6452,
          3.5519,
          4.7375,
          6.0298,
          7.4874,
          7.9358,
          9.1655,
          9.8391
        ],
        "pearsonCorrelationSimilarity": 0.9982,
        "normalizedCosineSimilarity": 0.9995,
        "euclideanSimilarity": 0.5416,
        "manhattanSimilarity": 0.3129,
        "gowerSimilarity": 0.7804,
        "soergelSimilarity": 0.9606,
        "kulczynskiSimilarity": 0.9606,
        "lorentzianSimilarity": 0.3438,
        "weightedMinkowskiSimilarity": 0.5416,
        "canberraSimilarity": 0.9714,
        "chebyshevSimilarity": 0.6723,
        "intersectionSimilarity": 0.9799,
        "waveHedgesSimilarity": 0.6404,
        "sorensenSimilarity": 0.9799,
        "motykaSimilarity": 0.9606,
        "kullbackLeiblerSimilarity": 0.9985,
        "jeffreysSimilarity": 0.997,
        "kSimilarity": 0.9996,
        "topsoeSimilarity": 0.9993,
        "normalizedPearsonChiSquareSimilarity": 0.8494,
        "normalizedNeymanChiSquareSimilarity": 0.8581,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.7448,
        "normalizedSquaredChiSquareSimilarity": 0.9213,
        "fidelitySimilarity": 0.9996,
        "hellingerSimilarity": 0.9806,
        "normalizedMatusitaSimilarity": 0.9806,
        "normalizedSquaredChordSimilarity": 0.9996,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9606,
        "jaccardSimilarityRealValued": 0.9606,
        "computeVectorSimilarityMeanStdPenalized": 0.9553,
        "vectorSimilarityCorrelation": 0.9707,
        "vectorSimilarityCorrelationNoStd": 0.9719,
        "computeVectorSimilarityRobust": 0.9355,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9692,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9706,
        "computeVectorSimilarityMetricLike": 0.8368,
        "computeVectorSimilarityTunable": 0.9582,
        "computeVectorSimilarityVarianceWeighted": 0.9704,
        "polynomialKernelSimilarity": 0.9981,
        "rbfKernelSimilarity": 0.9929,
        "itakuraSaitoDistance": 0.0289,
        "vectorSimilarityItakuraSaito": 0.9719
      },
      "2": {
        "noisyVector": [
          0.5806,
          1.0739,
          2.2371,
          3.5825,
          5.049,
          5.4044,
          7.1979,
          8.9758,
          8.825,
          9.5995
        ],
        "pearsonCorrelationSimilarity": 0.995,
        "normalizedCosineSimilarity": 0.9978,
        "euclideanSimilarity": 0.354,
        "manhattanSimilarity": 0.1689,
        "gowerSimilarity": 0.508,
        "soergelSimilarity": 0.9125,
        "kulczynskiSimilarity": 0.9125,
        "lorentzianSimilarity": 0.2085,
        "weightedMinkowskiSimilarity": 0.354,
        "canberraSimilarity": 0.9152,
        "chebyshevSimilarity": 0.5061,
        "intersectionSimilarity": 0.9542,
        "waveHedgesSimilarity": 0.3928,
        "sorensenSimilarity": 0.9542,
        "motykaSimilarity": 0.9125,
        "kullbackLeiblerSimilarity": 0.9888,
        "jeffreysSimilarity": 0.9789,
        "kSimilarity": 0.9975,
        "topsoeSimilarity": 0.9947,
        "normalizedPearsonChiSquareSimilarity": 0.3834,
        "normalizedNeymanChiSquareSimilarity": 0.4888,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.2737,
        "normalizedSquaredChiSquareSimilarity": 0.6156,
        "fidelitySimilarity": 0.9973,
        "hellingerSimilarity": 0.9482,
        "normalizedMatusitaSimilarity": 0.9482,
        "normalizedSquaredChordSimilarity": 0.9973,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9125,
        "jaccardSimilarityRealValued": 0.9125,
        "computeVectorSimilarityMeanStdPenalized": 0.8649,
        "vectorSimilarityCorrelation": 0.911,
        "vectorSimilarityCorrelationNoStd": 0.9227,
        "computeVectorSimilarityRobust": 0.8511,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.8896,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9074,
        "computeVectorSimilarityMetricLike": 0.6095,
        "computeVectorSimilarityTunable": 0.8863,
        "computeVectorSimilarityVarianceWeighted": 0.903,
        "polynomialKernelSimilarity": 0.9914,
        "rbfKernelSimilarity": 0.9673,
        "itakuraSaitoDistance": 0.4866,
        "vectorSimilarityItakuraSaito": 0.6727
      },
      "5": {
        "noisyVector": [
          -1.3062,
          2.5838,
          3.6645,
          1.8219,
          4.5194,
          3.5653,
          5.5931,
          8.1304,
          8.3003,
          7.9568
        ],
        "pearsonCorrelationSimilarity": 0.9608,
        "normalizedCosineSimilarity": 0.9875,
        "euclideanSimilarity": 0.1705,
        "manhattanSimilarity": 0.0718,
        "gowerSimilarity": 0.2441,
        "soergelSimilarity": 0.7719,
        "kulczynskiSimilarity": 0.7797,
        "lorentzianSimilarity": 0.1164,
        "weightedMinkowskiSimilarity": 0.1705,
        "canberraSimilarity": 0.821,
        "chebyshevSimilarity": 0.2911,
        "intersectionSimilarity": 0.8933,
        "waveHedgesSimilarity": 0.2119,
        "sorensenSimilarity": 0.8738,
        "motykaSimilarity": 0.8072,
        "kullbackLeiblerSimilarity": 0.9697,
        "jeffreysSimilarity": 0.9428,
        "kSimilarity": 0.9927,
        "topsoeSimilarity": 0.9852,
        "normalizedPearsonChiSquareSimilarity": 0.1519,
        "normalizedNeymanChiSquareSimilarity": 0.2279,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.1003,
        "normalizedSquaredChiSquareSimilarity": 0.3269,
        "fidelitySimilarity": 0.9924,
        "hellingerSimilarity": 0.9131,
        "normalizedMatusitaSimilarity": 0.9131,
        "normalizedSquaredChordSimilarity": 0.9924,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.8072,
        "jaccardSimilarityRealValued": 0.8072,
        "computeVectorSimilarityMeanStdPenalized": 0.6572,
        "vectorSimilarityCorrelation": 0.7473,
        "vectorSimilarityCorrelationNoStd": 0.8141,
        "computeVectorSimilarityRobust": 0.7337,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.701,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.782,
        "computeVectorSimilarityMetricLike": 0.3816,
        "computeVectorSimilarityTunable": 0.7345,
        "computeVectorSimilarityVarianceWeighted": 0.6496,
        "polynomialKernelSimilarity": 0.9508,
        "rbfKernelSimilarity": 0.7893,
        "itakuraSaitoDistance": 0.7172,
        "vectorSimilarityItakuraSaito": 0.5823
      },
      "0.1": {
        "noisyVector": [
          0.9969,
          1.9533,
          3.045,
          4.0478,
          4.9995,
          5.9901,
          7.0173,
          8.0408,
          8.9715,
          9.985
        ],
        "pearsonCorrelationSimilarity": 1,
        "normalizedCosineSimilarity": 1,
        "euclideanSimilarity": 0.9107,
        "manhattanSimilarity": 0.7971,
        "gowerSimilarity": 0.9745,
        "soergelSimilarity": 0.9954,
        "kulczynskiSimilarity": 0.9954,
        "lorentzianSimilarity": 0.8001,
        "weightedMinkowskiSimilarity": 0.9107,
        "canberraSimilarity": 0.9966,
        "chebyshevSimilarity": 0.9544,
        "intersectionSimilarity": 0.9977,
        "waveHedgesSimilarity": 0.9372,
        "sorensenSimilarity": 0.9977,
        "motykaSimilarity": 0.9954,
        "kullbackLeiblerSimilarity": 1,
        "jeffreysSimilarity": 1,
        "kSimilarity": 1,
        "topsoeSimilarity": 1,
        "normalizedPearsonChiSquareSimilarity": 0.9973,
        "normalizedNeymanChiSquareSimilarity": 0.9973,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9946,
        "normalizedSquaredChiSquareSimilarity": 0.9986,
        "fidelitySimilarity": 1,
        "hellingerSimilarity": 0.9975,
        "normalizedMatusitaSimilarity": 0.9975,
        "normalizedSquaredChordSimilarity": 1,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9954,
        "jaccardSimilarityRealValued": 0.9954,
        "computeVectorSimilarityMeanStdPenalized": 0.9938,
        "vectorSimilarityCorrelation": 0.9966,
        "vectorSimilarityCorrelationNoStd": 0.9967,
        "computeVectorSimilarityRobust": 0.9917,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9966,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.9966,
        "computeVectorSimilarityMetricLike": 0.9791,
        "computeVectorSimilarityTunable": 0.995,
        "computeVectorSimilarityVarianceWeighted": 0.9966,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999,
        "itakuraSaitoDistance": 0.0005,
        "vectorSimilarityItakuraSaito": 0.9995
      },
      "0.5": {
        "noisyVector": [
          0.866,
          2.1427,
          3.1315,
          3.879,
          5.0319,
          6.2178,
          7.1568,
          8.1438,
          8.9203,
          10.0235
        ],
        "pearsonCorrelationSimilarity": 0.9996,
        "normalizedCosineSimilarity": 0.9999,
        "euclideanSimilarity": 0.7075,
        "manhattanSimilarity": 0.4582,
        "gowerSimilarity": 0.8817,
        "soergelSimilarity": 0.9788,
        "kulczynskiSimilarity": 0.9788,
        "lorentzianSimilarity": 0.475,
        "weightedMinkowskiSimilarity": 0.7075,
        "canberraSimilarity": 0.9814,
        "chebyshevSimilarity": 0.8212,
        "intersectionSimilarity": 0.9893,
        "waveHedgesSimilarity": 0.7326,
        "sorensenSimilarity": 0.9893,
        "motykaSimilarity": 0.9788,
        "kullbackLeiblerSimilarity": 0.9996,
        "jeffreysSimilarity": 0.9991,
        "kSimilarity": 0.9999,
        "topsoeSimilarity": 0.9998,
        "normalizedPearsonChiSquareSimilarity": 0.9487,
        "normalizedNeymanChiSquareSimilarity": 0.9501,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9036,
        "normalizedSquaredChiSquareSimilarity": 0.9741,
        "fidelitySimilarity": 0.9999,
        "hellingerSimilarity": 0.9895,
        "normalizedMatusitaSimilarity": 0.9895,
        "normalizedSquaredChordSimilarity": 0.9999,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9788,
        "jaccardSimilarityRealValued": 0.9788,
        "computeVectorSimilarityMeanStdPenalized": 0.9673,
        "vectorSimilarityCorrelation": 0.981,
        "vectorSimilarityCorrelationNoStd": 0.9818,
        "computeVectorSimilarityRobust": 0.9575,
        "vectorSimilarityMeanStdPowerArithmeticMean": 0.9802,
        "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": 0.981,
        "computeVectorSimilarityMetricLike": 0.8908,
        "computeVectorSimilarityTunable": 0.9728,
        "computeVectorSimilarityVarianceWeighted": 0.9806,
        "polynomialKernelSimilarity": 0.9996,
        "rbfKernelSimilarity": 0.9983,
        "itakuraSaitoDistance": 0.0157,
        "vectorSimilarityItakuraSaito": 0.9846
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
            "timeMs": 0.0898
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.1914
          },
          "euclideanSimilarity": {
            "score": 0.5296,
            "timeMs": 0.0784
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.1286
          },
          "rbfKernelSimilarity": {
            "score": 0.9921,
            "timeMs": 0.0579
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9815,
            "timeMs": 0.2679
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9833,
            "timeMs": 0.0505
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9846,
            "timeMs": 0.1877
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9858,
            "timeMs": 0.06
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
            "timeMs": 0.0157
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0253
          },
          "euclideanSimilarity": {
            "score": 0.1689,
            "timeMs": 0.016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.025
          },
          "rbfKernelSimilarity": {
            "score": 0.7849,
            "timeMs": 0.007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9105,
            "timeMs": 0.03
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9336,
            "timeMs": 0.0285
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9362,
            "timeMs": 0.0449
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9491,
            "timeMs": 0.0431
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
            "timeMs": 0.0152
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0256
          },
          "euclideanSimilarity": {
            "score": 0.576,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.024
          },
          "rbfKernelSimilarity": {
            "score": 0.9946,
            "timeMs": 0.0066
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9553,
            "timeMs": 0.0258
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9651,
            "timeMs": 0.0254
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9719,
            "timeMs": 0.0205
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.976,
            "timeMs": 0.0214
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
            "timeMs": 0.0123
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0253
          },
          "euclideanSimilarity": {
            "score": 0.2163,
            "timeMs": 0.006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0219
          },
          "rbfKernelSimilarity": {
            "score": 0.877,
            "timeMs": 0.0062
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8493,
            "timeMs": 0.0287
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8957,
            "timeMs": 0.0259
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8904,
            "timeMs": 0.0218
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9196,
            "timeMs": 0.0199
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
            "timeMs": 0.0033
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0074
          },
          "euclideanSimilarity": {
            "score": 0.8124,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0136
          },
          "rbfKernelSimilarity": {
            "score": 0.9995,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9604,
            "timeMs": 0.007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9665,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9699,
            "timeMs": 0.0061
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9737,
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
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0093
          },
          "euclideanSimilarity": {
            "score": 0.4607,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0106
          },
          "rbfKernelSimilarity": {
            "score": 0.9864,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9429,
            "timeMs": 0.0066
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9522,
            "timeMs": 0.0063
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9555,
            "timeMs": 0.0059
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9612,
            "timeMs": 0.003
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
            "timeMs": 0.0252
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0484
          },
          "euclideanSimilarity": {
            "score": 0.495,
            "timeMs": 0.0175
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0354
          },
          "rbfKernelSimilarity": {
            "score": 0.9896,
            "timeMs": 0.0118
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9267,
            "timeMs": 0.0505
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9461,
            "timeMs": 0.0461
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9608,
            "timeMs": 0.0398
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9675,
            "timeMs": 0.0377
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
            "timeMs": 0.025
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0477
          },
          "euclideanSimilarity": {
            "score": 0.1644,
            "timeMs": 0.0109
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0297
          },
          "rbfKernelSimilarity": {
            "score": 0.7723,
            "timeMs": 0.0117
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8758,
            "timeMs": 0.1333
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.912,
            "timeMs": 0.0476
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9265,
            "timeMs": 0.0405
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9422,
            "timeMs": 0.0422
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
            "timeMs": 0.0168
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0342
          },
          "euclideanSimilarity": {
            "score": 0.6512,
            "timeMs": 0.0073
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0236
          },
          "rbfKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0075
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8993,
            "timeMs": 0.0276
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9298,
            "timeMs": 0.026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9327,
            "timeMs": 0.0296
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9493,
            "timeMs": 0.0205
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
            "timeMs": 0.0092
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0133
          },
          "euclideanSimilarity": {
            "score": 0.2406,
            "timeMs": 0.0047
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.017
          },
          "rbfKernelSimilarity": {
            "score": 0.9051,
            "timeMs": 0.0054
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8526,
            "timeMs": 0.0176
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8989,
            "timeMs": 0.0159
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8952,
            "timeMs": 0.0137
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9241,
            "timeMs": 0.0135
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
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.8064,
            "timeMs": 0.0105
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9577,
            "timeMs": 0.0044
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9648,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelation": {
            "score": 0.969,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9731,
            "timeMs": 0.0032
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
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.353,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0037
          },
          "rbfKernelSimilarity": {
            "score": 0.967,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8386,
            "timeMs": 0.0039
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8936,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8709,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9109,
            "timeMs": 0.003
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
            "timeMs": 0.012
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0217
          },
          "euclideanSimilarity": {
            "score": 0.5286,
            "timeMs": 0.0058
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0164
          },
          "rbfKernelSimilarity": {
            "score": 0.9921,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9933,
            "timeMs": 0.028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9935,
            "timeMs": 0.0289
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9935,
            "timeMs": 0.023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9936,
            "timeMs": 0.0232
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
            "timeMs": 0.0122
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0642
          },
          "euclideanSimilarity": {
            "score": 0.1675,
            "timeMs": 0.007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0199
          },
          "rbfKernelSimilarity": {
            "score": 0.7812,
            "timeMs": 0.0064
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9404,
            "timeMs": 0.0304
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.951,
            "timeMs": 0.0298
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9546,
            "timeMs": 0.0235
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9601,
            "timeMs": 0.0231
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
            "timeMs": 0.0069
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0126
          },
          "euclideanSimilarity": {
            "score": 0.5846,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0097
          },
          "rbfKernelSimilarity": {
            "score": 0.995,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9915,
            "timeMs": 0.0146
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9917,
            "timeMs": 0.0143
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9917,
            "timeMs": 0.0121
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9919,
            "timeMs": 0.012
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
            "timeMs": 0.0064
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0113
          },
          "euclideanSimilarity": {
            "score": 0.2175,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0102
          },
          "rbfKernelSimilarity": {
            "score": 0.8786,
            "timeMs": 0.01
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9525,
            "timeMs": 0.0149
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9576,
            "timeMs": 0.0151
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9586,
            "timeMs": 0.0121
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9624,
            "timeMs": 0.0122
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
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.7985,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9917,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.992,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.992,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9922,
            "timeMs": 0.0029
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
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.3633,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.9697,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8335,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8862,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9132,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9316,
            "timeMs": 0.003
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
            "score": 0.9991,
            "timeMs": 0.0129
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0219
          },
          "euclideanSimilarity": {
            "score": 0.5072,
            "timeMs": 0.0059
          },
          "polynomialKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0176
          },
          "rbfKernelSimilarity": {
            "score": 0.9906,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9234,
            "timeMs": 0.0348
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9408,
            "timeMs": 0.0291
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9474,
            "timeMs": 0.0232
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9552,
            "timeMs": 0.0232
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
            "score": 0.9807,
            "timeMs": 0.0143
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9455,
            "timeMs": 0.0251
          },
          "euclideanSimilarity": {
            "score": 0.1829,
            "timeMs": 0.0067
          },
          "polynomialKernelSimilarity": {
            "score": 0.9246,
            "timeMs": 0.0249
          },
          "rbfKernelSimilarity": {
            "score": 0.8191,
            "timeMs": 0.0065
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7468,
            "timeMs": 0.0303
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8084,
            "timeMs": 0.0284
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8315,
            "timeMs": 0.0234
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.861,
            "timeMs": 0.023
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
            "timeMs": 0.0071
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0122
          },
          "euclideanSimilarity": {
            "score": 0.6138,
            "timeMs": 0.0036
          },
          "polynomialKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0455
          },
          "rbfKernelSimilarity": {
            "score": 0.996,
            "timeMs": 0.0089
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9655,
            "timeMs": 0.016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9681,
            "timeMs": 0.0311
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9685,
            "timeMs": 0.0321
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9706,
            "timeMs": 0.0313
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
            "score": 0.9773,
            "timeMs": 0.0188
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9359,
            "timeMs": 0.0322
          },
          "euclideanSimilarity": {
            "score": 0.2189,
            "timeMs": 0.0082
          },
          "polynomialKernelSimilarity": {
            "score": 0.912,
            "timeMs": 0.0236
          },
          "rbfKernelSimilarity": {
            "score": 0.8805,
            "timeMs": 0.0119
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7634,
            "timeMs": 0.032
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8226,
            "timeMs": 0.0298
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8283,
            "timeMs": 0.0198
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8621,
            "timeMs": 0.0193
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
            "score": 0.9993,
            "timeMs": 0.0058
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0054
          },
          "euclideanSimilarity": {
            "score": 0.7723,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0073
          },
          "rbfKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9699,
            "timeMs": 0.0066
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9714,
            "timeMs": 0.0062
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9715,
            "timeMs": 0.0057
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9728,
            "timeMs": 0.0056
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
            "score": 0.9784,
            "timeMs": 0.0045
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9621,
            "timeMs": 0.0056
          },
          "euclideanSimilarity": {
            "score": 0.3488,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9173,
            "timeMs": 0.0066
          },
          "rbfKernelSimilarity": {
            "score": 0.9657,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7489,
            "timeMs": 0.0045
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8018,
            "timeMs": 0.0078
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8232,
            "timeMs": 0.0102
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8514,
            "timeMs": 0.0072
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
            "timeMs": 0.0271
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9957,
            "timeMs": 0.7902
          },
          "euclideanSimilarity": {
            "score": 0.5084,
            "timeMs": 0.0128
          },
          "polynomialKernelSimilarity": {
            "score": 0.9982,
            "timeMs": 0.2005
          },
          "rbfKernelSimilarity": {
            "score": 0.9907,
            "timeMs": 0.0074
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9772,
            "timeMs": 0.0312
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9782,
            "timeMs": 0.0296
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9782,
            "timeMs": 0.0296
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9791,
            "timeMs": 0.0265
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
            "score": 0.9895,
            "timeMs": 0.0148
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9141,
            "timeMs": 0.0228
          },
          "euclideanSimilarity": {
            "score": 0.1764,
            "timeMs": 0.0069
          },
          "polynomialKernelSimilarity": {
            "score": 0.9587,
            "timeMs": 0.0233
          },
          "rbfKernelSimilarity": {
            "score": 0.8042,
            "timeMs": 0.0064
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8599,
            "timeMs": 0.0302
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8848,
            "timeMs": 0.0282
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8921,
            "timeMs": 0.3232
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9062,
            "timeMs": 0.0249
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
            "score": 0.9997,
            "timeMs": 0.0336
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9969,
            "timeMs": 0.0126
          },
          "euclideanSimilarity": {
            "score": 0.6141,
            "timeMs": 0.0041
          },
          "polynomialKernelSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0069
          },
          "rbfKernelSimilarity": {
            "score": 0.9961,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9779,
            "timeMs": 0.016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9787,
            "timeMs": 0.0151
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9788,
            "timeMs": 0.0123
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9796,
            "timeMs": 0.0182
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
            "score": 0.9862,
            "timeMs": 0.0076
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9134,
            "timeMs": 0.0132
          },
          "euclideanSimilarity": {
            "score": 0.2118,
            "timeMs": 0.004
          },
          "polynomialKernelSimilarity": {
            "score": 0.9457,
            "timeMs": 0.0059
          },
          "rbfKernelSimilarity": {
            "score": 0.8706,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8011,
            "timeMs": 0.0159
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.85,
            "timeMs": 0.0148
          },
          "vectorSimilarityCorrelation": {
            "score": 0.847,
            "timeMs": 0.013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8788,
            "timeMs": 0.0122
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
            "score": 0.9996,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.7755,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9758,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9768,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9768,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9776,
            "timeMs": 0.003
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
            "score": 0.9831,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8678,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.353,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9348,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.967,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8126,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.846,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.857,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8767,
            "timeMs": 0.0031
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
            "score": 0.9945,
            "timeMs": 0.0181
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9945,
            "timeMs": 0.2616
          },
          "euclideanSimilarity": {
            "score": 0.4941,
            "timeMs": 0.0073
          },
          "polynomialKernelSimilarity": {
            "score": 0.9784,
            "timeMs": 0.0075
          },
          "rbfKernelSimilarity": {
            "score": 0.9896,
            "timeMs": 0.0066
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8312,
            "timeMs": 0.03
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8722,
            "timeMs": 0.0284
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8845,
            "timeMs": 0.0238
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9043,
            "timeMs": 0.0251
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
            "score": 0.9238,
            "timeMs": 0.02
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9246,
            "timeMs": 0.0239
          },
          "euclideanSimilarity": {
            "score": 0.1787,
            "timeMs": 0.006
          },
          "polynomialKernelSimilarity": {
            "score": 0.722,
            "timeMs": 0.0036
          },
          "rbfKernelSimilarity": {
            "score": 0.8095,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5492,
            "timeMs": 0.0289
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6261,
            "timeMs": 0.0286
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6737,
            "timeMs": 0.0231
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7406,
            "timeMs": 0.0229
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
            "timeMs": 0.0067
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9966,
            "timeMs": 0.0118
          },
          "euclideanSimilarity": {
            "score": 0.6367,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 0.9871,
            "timeMs": 0.0033
          },
          "rbfKernelSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0034
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8873,
            "timeMs": 0.0155
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9111,
            "timeMs": 0.0195
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9101,
            "timeMs": 0.0121
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.925,
            "timeMs": 0.0121
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
            "score": 0.8827,
            "timeMs": 0.0064
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8829,
            "timeMs": 0.0114
          },
          "euclideanSimilarity": {
            "score": 0.2216,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 0.599,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.8839,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5163,
            "timeMs": 0.0146
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.573,
            "timeMs": 0.0146
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6359,
            "timeMs": 0.0123
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7093,
            "timeMs": 0.012
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
            "score": 0.9951,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9954,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.733,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.983,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.912,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9245,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9267,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9352,
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
            "score": 0.9504,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9634,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.4777,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.8373,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9881,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7444,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7914,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8132,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8406,
            "timeMs": 0.003
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
            "score": 0.9949,
            "timeMs": 0.0127
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0281
          },
          "euclideanSimilarity": {
            "score": 0.4914,
            "timeMs": 0.007
          },
          "polynomialKernelSimilarity": {
            "score": 0.98,
            "timeMs": 0.0057
          },
          "rbfKernelSimilarity": {
            "score": 0.9893,
            "timeMs": 0.0065
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8239,
            "timeMs": 0.0295
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8689,
            "timeMs": 0.0283
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8751,
            "timeMs": 0.0232
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8996,
            "timeMs": 0.0242
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
            "score": 0.9115,
            "timeMs": 0.0126
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9173,
            "timeMs": 0.0226
          },
          "euclideanSimilarity": {
            "score": 0.1669,
            "timeMs": 0.0061
          },
          "polynomialKernelSimilarity": {
            "score": 0.6813,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.7794,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5483,
            "timeMs": 0.0352
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.62,
            "timeMs": 0.0291
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6782,
            "timeMs": 0.0237
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7397,
            "timeMs": 0.0232
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
            "score": 0.9952,
            "timeMs": 0.0087
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0124
          },
          "euclideanSimilarity": {
            "score": 0.5829,
            "timeMs": 0.0041
          },
          "polynomialKernelSimilarity": {
            "score": 0.9816,
            "timeMs": 0.0071
          },
          "rbfKernelSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8781,
            "timeMs": 0.0165
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.902,
            "timeMs": 0.015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9092,
            "timeMs": 0.0431
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9221,
            "timeMs": 0.0127
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
            "score": 0.9317,
            "timeMs": 0.007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9312,
            "timeMs": 0.0125
          },
          "euclideanSimilarity": {
            "score": 0.2372,
            "timeMs": 0.004
          },
          "polynomialKernelSimilarity": {
            "score": 0.7515,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.9017,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6009,
            "timeMs": 0.0154
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6793,
            "timeMs": 0.0146
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7127,
            "timeMs": 0.0122
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7685,
            "timeMs": 0.0133
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
            "score": 0.996,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.996,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.7723,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9865,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8545,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8807,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8874,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9031,
            "timeMs": 0.0032
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
            "score": 0.9426,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9439,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.4561,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.8122,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9859,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6311,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7096,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7605,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8025,
            "timeMs": 0.003
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
            "timeMs": 0.0132
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0236
          },
          "euclideanSimilarity": {
            "score": 0.5169,
            "timeMs": 0.0059
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.9913,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.857,
            "timeMs": 0.036
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8925,
            "timeMs": 0.0283
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9011,
            "timeMs": 0.0246
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9193,
            "timeMs": 0.0232
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
            "score": 0.9978,
            "timeMs": 0.0122
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.022
          },
          "euclideanSimilarity": {
            "score": 0.1593,
            "timeMs": 0.0059
          },
          "polynomialKernelSimilarity": {
            "score": 0.9911,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.757,
            "timeMs": 0.0059
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6111,
            "timeMs": 0.028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6994,
            "timeMs": 0.0275
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7329,
            "timeMs": 0.0229
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7897,
            "timeMs": 0.0235
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
            "timeMs": 0.0064
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0113
          },
          "euclideanSimilarity": {
            "score": 0.5731,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.851,
            "timeMs": 0.0145
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8887,
            "timeMs": 0.0141
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8856,
            "timeMs": 0.0121
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9094,
            "timeMs": 0.0118
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
            "timeMs": 0.0063
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0112
          },
          "euclideanSimilarity": {
            "score": 0.1977,
            "timeMs": 0.0033
          },
          "polynomialKernelSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.8481,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5357,
            "timeMs": 0.0146
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6099,
            "timeMs": 0.0145
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6462,
            "timeMs": 0.012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.723,
            "timeMs": 0.044
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
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0033
          },
          "euclideanSimilarity": {
            "score": 0.7255,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.9996,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.92,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.932,
            "timeMs": 0.0038
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9344,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9422,
            "timeMs": 0.0032
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
            "score": 0.9995,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9995,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.483,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.9886,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6981,
            "timeMs": 0.0039
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7825,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelation": {
            "score": 0.748,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8175,
            "timeMs": 0.003
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
            "timeMs": 0.0125
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0229
          },
          "euclideanSimilarity": {
            "score": 0.5073,
            "timeMs": 0.006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0029
          },
          "rbfKernelSimilarity": {
            "score": 0.9906,
            "timeMs": 0.006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9746,
            "timeMs": 0.03
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9757,
            "timeMs": 0.0594
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9757,
            "timeMs": 0.0242
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9767,
            "timeMs": 0.023
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
            "score": 0.9998,
            "timeMs": 0.0126
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9998,
            "timeMs": 0.023
          },
          "euclideanSimilarity": {
            "score": 0.1895,
            "timeMs": 0.0061
          },
          "polynomialKernelSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0035
          },
          "rbfKernelSimilarity": {
            "score": 0.8329,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8654,
            "timeMs": 0.028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8895,
            "timeMs": 0.0278
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8955,
            "timeMs": 0.0233
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9091,
            "timeMs": 0.024
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
            "timeMs": 0.0065
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0114
          },
          "euclideanSimilarity": {
            "score": 0.5852,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.995,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9756,
            "timeMs": 0.0146
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9767,
            "timeMs": 0.0145
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9768,
            "timeMs": 0.0119
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9778,
            "timeMs": 0.0155
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
            "timeMs": 0.0065
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0118
          },
          "euclideanSimilarity": {
            "score": 0.2077,
            "timeMs": 0.0036
          },
          "polynomialKernelSimilarity": {
            "score": 0.9912,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.8646,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8105,
            "timeMs": 0.0149
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8552,
            "timeMs": 0.0146
          },
          "vectorSimilarityCorrelation": {
            "score": 0.871,
            "timeMs": 0.0123
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8919,
            "timeMs": 0.0126
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
            "score": 0.9996,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.745,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9623,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.965,
            "timeMs": 0.0037
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9652,
            "timeMs": 0.0043
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9675,
            "timeMs": 0.0475
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
            "score": 0.9897,
            "timeMs": 0.0025
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9936,
            "timeMs": 0.0336
          },
          "euclideanSimilarity": {
            "score": 0.3683,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9599,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0.971,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7306,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8083,
            "timeMs": 0.0039
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8268,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8646,
            "timeMs": 0.0034
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
            "timeMs": 0.0127
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.023
          },
          "euclideanSimilarity": {
            "score": 0.513,
            "timeMs": 0.006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0.991,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.973,
            "timeMs": 0.0291
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9741,
            "timeMs": 0.0277
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9742,
            "timeMs": 2.4664
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9753,
            "timeMs": 0.0253
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
            "score": 0.9978,
            "timeMs": 0.0144
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0234
          },
          "euclideanSimilarity": {
            "score": 0.1583,
            "timeMs": 0.0063
          },
          "polynomialKernelSimilarity": {
            "score": 0.9913,
            "timeMs": 0.0083
          },
          "rbfKernelSimilarity": {
            "score": 0.7537,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7905,
            "timeMs": 0.0311
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8366,
            "timeMs": 0.0305
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8538,
            "timeMs": 0.0238
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8764,
            "timeMs": 0.0231
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
            "timeMs": 0.0068
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0121
          },
          "euclideanSimilarity": {
            "score": 0.5542,
            "timeMs": 0.0033
          },
          "polynomialKernelSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9935,
            "timeMs": 0.0032
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9703,
            "timeMs": 0.0147
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9719,
            "timeMs": 0.0144
          },
          "vectorSimilarityCorrelation": {
            "score": 0.972,
            "timeMs": 0.0121
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9733,
            "timeMs": 0.0216
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
            "timeMs": 0.0065
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0119
          },
          "euclideanSimilarity": {
            "score": 0.2764,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.9338,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8808,
            "timeMs": 0.0157
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8974,
            "timeMs": 0.0143
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9017,
            "timeMs": 0.0118
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9129,
            "timeMs": 0.0119
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
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0033
          },
          "euclideanSimilarity": {
            "score": 0.761,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9998,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9695,
            "timeMs": 0.004
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9709,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.971,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9723,
            "timeMs": 0.003
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
            "score": 0.998,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.998,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.3504,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9921,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9662,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8604,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8818,
            "timeMs": 0.0039
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8873,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9011,
            "timeMs": 0.0276
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
            "timeMs": 0.0196
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0231
          },
          "euclideanSimilarity": {
            "score": 0.4889,
            "timeMs": 0.0057
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.9891,
            "timeMs": 0.0058
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8634,
            "timeMs": 0.0282
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8992,
            "timeMs": 0.0305
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8972,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9195,
            "timeMs": 0.0017
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
            "timeMs": 0.0119
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0639
          },
          "euclideanSimilarity": {
            "score": 0.1656,
            "timeMs": 0.01
          },
          "polynomialKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0066
          },
          "rbfKernelSimilarity": {
            "score": 0.7758,
            "timeMs": 0.0061
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6283,
            "timeMs": 0.0301
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7188,
            "timeMs": 0.0282
          },
          "vectorSimilarityCorrelation": {
            "score": 0.745,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8027,
            "timeMs": 0.0017
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
            "timeMs": 0.0067
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0133
          },
          "euclideanSimilarity": {
            "score": 0.5719,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0046
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8346,
            "timeMs": 0.015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8814,
            "timeMs": 0.0144
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8923,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9145,
            "timeMs": 0.001
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
            "score": 0.9984,
            "timeMs": 0.0064
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0119
          },
          "euclideanSimilarity": {
            "score": 0.2371,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 0.9935,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9017,
            "timeMs": 0.0494
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6406,
            "timeMs": 0.016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.736,
            "timeMs": 0.0147
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7459,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8095,
            "timeMs": 0.001
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
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9998,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.7884,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.999,
            "timeMs": 0.0044
          },
          "rbfKernelSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7002,
            "timeMs": 0.0042
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7947,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8202,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.867,
            "timeMs": 0.0006
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
            "score": 0.9914,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9914,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.4001,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9665,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9778,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7139,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7823,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8122,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8445,
            "timeMs": 0.0006
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
            "score": 0.9942,
            "timeMs": 0.0127
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9942,
            "timeMs": 0.0233
          },
          "euclideanSimilarity": {
            "score": 0.4862,
            "timeMs": 0.0057
          },
          "polynomialKernelSimilarity": {
            "score": 0.9774,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.9889,
            "timeMs": 0.0057
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7948,
            "timeMs": 0.0341
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8492,
            "timeMs": 0.0276
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8615,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8891,
            "timeMs": 0.0015
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
            "score": 0.9052,
            "timeMs": 0.0121
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9052,
            "timeMs": 0.0222
          },
          "euclideanSimilarity": {
            "score": 0.1744,
            "timeMs": 0.0057
          },
          "polynomialKernelSimilarity": {
            "score": 0.6619,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.7993,
            "timeMs": 0.0056
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5074,
            "timeMs": 0.028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5426,
            "timeMs": 0.0283
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6256,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6936,
            "timeMs": 0.0016
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
            "score": 0.9941,
            "timeMs": 0.0063
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9941,
            "timeMs": 0.0114
          },
          "euclideanSimilarity": {
            "score": 0.5521,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 0.9772,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9934,
            "timeMs": 0.0031
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7816,
            "timeMs": 0.0145
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8346,
            "timeMs": 0.0143
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8515,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.877,
            "timeMs": 0.001
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
            "score": 0.9317,
            "timeMs": 0.0065
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9376,
            "timeMs": 0.0193
          },
          "euclideanSimilarity": {
            "score": 0.2456,
            "timeMs": 0.0036
          },
          "polynomialKernelSimilarity": {
            "score": 0.752,
            "timeMs": 0.0061
          },
          "rbfKernelSimilarity": {
            "score": 0.9099,
            "timeMs": 0.0033
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.534,
            "timeMs": 0.016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5997,
            "timeMs": 0.0145
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6564,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7217,
            "timeMs": 0.001
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
            "score": 0.9975,
            "timeMs": 0.002
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9978,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.7967,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9914,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8594,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8871,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8942,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9109,
            "timeMs": 0.0006
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
            "score": 0.8849,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.888,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.3295,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.629,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9594,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5039,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5364,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelation": {
            "score": 0.579,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6622,
            "timeMs": 0.0005
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
            "score": 0.9992,
            "timeMs": 0.0125
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9952,
            "timeMs": 0.041
          },
          "euclideanSimilarity": {
            "score": 0.5054,
            "timeMs": 0.0058
          },
          "polynomialKernelSimilarity": {
            "score": 0.9969,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.9905,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.963,
            "timeMs": 0.0283
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9655,
            "timeMs": 0.0358
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9658,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9678,
            "timeMs": 0.0017
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
            "score": 0.9821,
            "timeMs": 0.0126
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9151,
            "timeMs": 0.022
          },
          "euclideanSimilarity": {
            "score": 0.1669,
            "timeMs": 0.0057
          },
          "polynomialKernelSimilarity": {
            "score": 0.9298,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.7794,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7759,
            "timeMs": 0.3406
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8254,
            "timeMs": 0.0298
          },
          "vectorSimilarityCorrelation": {
            "score": 0.833,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8621,
            "timeMs": 0.0017
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
            "timeMs": 0.0069
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0118
          },
          "euclideanSimilarity": {
            "score": 0.6,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 0.997,
            "timeMs": 0.0055
          },
          "rbfKernelSimilarity": {
            "score": 0.9956,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9686,
            "timeMs": 0.015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9714,
            "timeMs": 0.0651
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9721,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.974,
            "timeMs": 0.0015
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
            "score": 0.9822,
            "timeMs": 0.007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9201,
            "timeMs": 0.0125
          },
          "euclideanSimilarity": {
            "score": 0.2333,
            "timeMs": 0.0035
          },
          "polynomialKernelSimilarity": {
            "score": 0.9304,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.8976,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7245,
            "timeMs": 0.0149
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7967,
            "timeMs": 0.0144
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8095,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8493,
            "timeMs": 0.0009
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
            "score": 0.9991,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.996,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.751,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9966,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9678,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9698,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9699,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9715,
            "timeMs": 0.0006
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
            "score": 0.9867,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9378,
            "timeMs": 0.0049
          },
          "euclideanSimilarity": {
            "score": 0.4338,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9491,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9831,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7221,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8029,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7938,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.847,
            "timeMs": 0.0005
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
            "timeMs": 0.0124
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9985,
            "timeMs": 0.1049
          },
          "euclideanSimilarity": {
            "score": 0.4998,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 0.9941,
            "timeMs": 0.006
          },
          "rbfKernelSimilarity": {
            "score": 0.99,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.962,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9644,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9647,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9668,
            "timeMs": 0.0017
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
            "score": 0.9694,
            "timeMs": 0.0123
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9696,
            "timeMs": 0.0232
          },
          "euclideanSimilarity": {
            "score": 0.1741,
            "timeMs": 0.0058
          },
          "polynomialKernelSimilarity": {
            "score": 0.8819,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.7985,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.754,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8099,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8194,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8522,
            "timeMs": 0.0016
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
            "score": 0.9988,
            "timeMs": 0.0066
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0129
          },
          "euclideanSimilarity": {
            "score": 0.6091,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 0.9951,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9959,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9404,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9528,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9515,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9594,
            "timeMs": 0.0009
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
            "score": 0.9561,
            "timeMs": 0.0081
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9578,
            "timeMs": 0.0113
          },
          "euclideanSimilarity": {
            "score": 0.1982,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 0.8339,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.8491,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6771,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7513,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7688,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8142,
            "timeMs": 0.0009
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
            "score": 0.9977,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.714,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9912,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9569,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9593,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9596,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9617,
            "timeMs": 0.0006
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
            "score": 0.9787,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9795,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.4156,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9201,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9804,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8302,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8552,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8637,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8804,
            "timeMs": 0.0006
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
            "timeMs": 0.012
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0241
          },
          "euclideanSimilarity": {
            "score": 0.5011,
            "timeMs": 0.0056
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9901,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9736,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9782,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9829,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9848,
            "timeMs": 0.0017
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
            "timeMs": 0.0116
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0225
          },
          "euclideanSimilarity": {
            "score": 0.1751,
            "timeMs": 0.0056
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.8009,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9176,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9378,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9455,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.955,
            "timeMs": 0.0017
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
            "timeMs": 0.0077
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0124
          },
          "euclideanSimilarity": {
            "score": 0.5839,
            "timeMs": 0.0034
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0046
          },
          "rbfKernelSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9851,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9862,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9869,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9878,
            "timeMs": 0.0012
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
            "timeMs": 0.0066
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0117
          },
          "euclideanSimilarity": {
            "score": 0.223,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.8857,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.911,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9327,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9382,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9497,
            "timeMs": 0.0011
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
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.7516,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9906,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.991,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.991,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9913,
            "timeMs": 0.0005
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
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.3483,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9656,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9504,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9581,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9611,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.966,
            "timeMs": 0.0005
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
            "timeMs": 0.0121
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.026
          },
          "euclideanSimilarity": {
            "score": 0.4856,
            "timeMs": 0.0057
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9888,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9935,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9936,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9937,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9939,
            "timeMs": 0.0016
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
            "timeMs": 0.0122
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0739
          },
          "euclideanSimilarity": {
            "score": 0.1673,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0046
          },
          "rbfKernelSimilarity": {
            "score": 0.7804,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9649,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9689,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9704,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9732,
            "timeMs": 0.0016
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
            "timeMs": 0.0065
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0117
          },
          "euclideanSimilarity": {
            "score": 0.6033,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9957,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9939,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9941,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9941,
            "timeMs": 0.0011
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9943,
            "timeMs": 0.0009
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
            "timeMs": 0.0065
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0112
          },
          "euclideanSimilarity": {
            "score": 0.2141,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.8739,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9606,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9667,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9702,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9734,
            "timeMs": 0.001
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
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.7449,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9958,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9959,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9959,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.996,
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
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.4217,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9814,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9775,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.979,
            "timeMs": 0.0005
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9793,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9806,
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
            "score": 0.9972,
            "timeMs": 0.0119
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0226
          },
          "euclideanSimilarity": {
            "score": 0.499,
            "timeMs": 0.0058
          },
          "polynomialKernelSimilarity": {
            "score": 0.989,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.99,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9412,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9482,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9497,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.954,
            "timeMs": 0.0017
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
            "score": 0.9331,
            "timeMs": 0.0117
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9333,
            "timeMs": 0.022
          },
          "euclideanSimilarity": {
            "score": 0.1523,
            "timeMs": 0.0057
          },
          "polynomialKernelSimilarity": {
            "score": 0.7523,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.7336,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6636,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7394,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.773,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8146,
            "timeMs": 0.0017
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
            "score": 0.9974,
            "timeMs": 0.0062
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9975,
            "timeMs": 0.012
          },
          "euclideanSimilarity": {
            "score": 0.594,
            "timeMs": 0.0031
          },
          "polynomialKernelSimilarity": {
            "score": 0.99,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9953,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9539,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9571,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9575,
            "timeMs": 0.0012
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9601,
            "timeMs": 0.0011
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
            "score": 0.9403,
            "timeMs": 0.0131
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9403,
            "timeMs": 0.013
          },
          "euclideanSimilarity": {
            "score": 0.2115,
            "timeMs": 0.0035
          },
          "polynomialKernelSimilarity": {
            "score": 0.779,
            "timeMs": 0.0046
          },
          "rbfKernelSimilarity": {
            "score": 0.8702,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6767,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7524,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelation": {
            "score": 0.781,
            "timeMs": 0.0013
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8223,
            "timeMs": 0.0011
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
            "score": 0.9977,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0029
          },
          "euclideanSimilarity": {
            "score": 0.7712,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9551,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9584,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9586,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9613,
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
            "score": 0.9718,
            "timeMs": 0.0017
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9777,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.4683,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.8989,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9872,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.805,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8283,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8429,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8577,
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
            "score": 0.9955,
            "timeMs": 0.0251
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0449
          },
          "euclideanSimilarity": {
            "score": 0.4232,
            "timeMs": 0.0108
          },
          "polynomialKernelSimilarity": {
            "score": 0.9823,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.9816,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8376,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8773,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8842,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9055,
            "timeMs": 0.003
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
            "score": 0.9053,
            "timeMs": 0.0244
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9054,
            "timeMs": 0.0445
          },
          "euclideanSimilarity": {
            "score": 0.1208,
            "timeMs": 0.0107
          },
          "polynomialKernelSimilarity": {
            "score": 0.6592,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.5887,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5332,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5958,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6694,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7276,
            "timeMs": 0.0029
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
            "score": 0.9958,
            "timeMs": 0.0118
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9958,
            "timeMs": 0.4456
          },
          "euclideanSimilarity": {
            "score": 0.5208,
            "timeMs": 0.0071
          },
          "polynomialKernelSimilarity": {
            "score": 0.9834,
            "timeMs": 0.0071
          },
          "rbfKernelSimilarity": {
            "score": 0.9916,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.821,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8707,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8752,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.902,
            "timeMs": 0.0017
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
            "score": 0.9209,
            "timeMs": 0.0123
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9245,
            "timeMs": 0.0223
          },
          "euclideanSimilarity": {
            "score": 0.177,
            "timeMs": 0.0075
          },
          "polynomialKernelSimilarity": {
            "score": 0.7125,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.8055,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5738,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.653,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6877,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7514,
            "timeMs": 0.0016
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
            "timeMs": 0.0031
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.997,
            "timeMs": 0.0053
          },
          "euclideanSimilarity": {
            "score": 0.7222,
            "timeMs": 0.0449
          },
          "polynomialKernelSimilarity": {
            "score": 0.9867,
            "timeMs": 0.0045
          },
          "rbfKernelSimilarity": {
            "score": 0.9985,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7363,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8154,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8526,
            "timeMs": 0.001
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8834,
            "timeMs": 0.0007
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
            "score": 0.8866,
            "timeMs": 0.0033
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8922,
            "timeMs": 0.0069
          },
          "euclideanSimilarity": {
            "score": 0.2805,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.621,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9363,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4547,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4929,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6068,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.673,
            "timeMs": 0.0006
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
            "score": 0.9944,
            "timeMs": 0.0238
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.398,
            "timeMs": 0.0111
          },
          "polynomialKernelSimilarity": {
            "score": 0.9779,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.9774,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8191,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8651,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8711,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8966,
            "timeMs": 0.0029
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
            "score": 0.9003,
            "timeMs": 0.0235
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9003,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.1228,
            "timeMs": 0.0108
          },
          "polynomialKernelSimilarity": {
            "score": 0.6434,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.6005,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5396,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6094,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.666,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7307,
            "timeMs": 0.0029
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
            "score": 0.9951,
            "timeMs": 0.012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9952,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.4985,
            "timeMs": 0.0065
          },
          "polynomialKernelSimilarity": {
            "score": 0.981,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9899,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8251,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8689,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8792,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9011,
            "timeMs": 0.0017
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
            "score": 0.9302,
            "timeMs": 0.012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9302,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.1785,
            "timeMs": 0.0055
          },
          "polynomialKernelSimilarity": {
            "score": 0.7434,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.8092,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.566,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6402,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6849,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7452,
            "timeMs": 0.0016
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
            "score": 0.9928,
            "timeMs": 0.0042
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.993,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6493,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9739,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0004
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6947,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7863,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8221,
            "timeMs": 0.0019
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8627,
            "timeMs": 0.0011
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
            "score": 0.9345,
            "timeMs": 0.0539
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9349,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.3096,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.7657,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9515,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5356,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6112,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6695,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.738,
            "timeMs": 0.0008
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
            "timeMs": 0.0241
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.4306,
            "timeMs": 0.0107
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9827,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9426,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9558,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9608,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9672,
            "timeMs": 0.0028
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
            "timeMs": 0.0243
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.1226,
            "timeMs": 0.0108
          },
          "polynomialKernelSimilarity": {
            "score": 0.9923,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.599,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8531,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8889,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.901,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9175,
            "timeMs": 0.0029
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
            "timeMs": 0.0195
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.4978,
            "timeMs": 0.0057
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9899,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9501,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9609,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9689,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9729,
            "timeMs": 0.0017
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
            "score": 0.9983,
            "timeMs": 0.012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.1736,
            "timeMs": 0.0056
          },
          "polynomialKernelSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.7973,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8344,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8775,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8924,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9114,
            "timeMs": 0.0017
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
            "timeMs": 0.0028
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6865,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8222,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8803,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9132,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9319,
            "timeMs": 0.0007
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
            "score": 0.9983,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.3128,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9932,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9529,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7686,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8386,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8704,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8967,
            "timeMs": 0.0006
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
            "timeMs": 0.0249
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4198,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.9811,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9784,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9821,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9869,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9882,
            "timeMs": 0.0028
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
            "timeMs": 0.0233
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.1298,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.6381,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9297,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9469,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9536,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9619,
            "timeMs": 0.0029
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
            "timeMs": 0.0118
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.5139,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9911,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.966,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9733,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9815,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9838,
            "timeMs": 0.0016
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
            "timeMs": 0.0118
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.1653,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.775,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9125,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9355,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9502,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9586,
            "timeMs": 0.0018
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
            "timeMs": 0.0028
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6847,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8453,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8975,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9326,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9476,
            "timeMs": 0.0007
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
            "timeMs": 0.0065
          },
          "pearsonCorrelationSimilarity": {
            "score": 1,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.3261,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 1,
            "timeMs": 0.0046
          },
          "rbfKernelSimilarity": {
            "score": 0.9582,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7585,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8388,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.884,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9117,
            "timeMs": 0.0007
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
            "score": 0.9903,
            "timeMs": 0.0241
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9903,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.4276,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9624,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.9822,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7135,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7895,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7953,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8419,
            "timeMs": 0.0029
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
            "score": 0.8264,
            "timeMs": 0.0236
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8264,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.1214,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.4323,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.5924,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.404,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4707,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5688,
            "timeMs": 0.0027
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6341,
            "timeMs": 0.0025
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
            "score": 0.9868,
            "timeMs": 0.0134
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9869,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.4846,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9504,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9888,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7058,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7778,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7996,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8386,
            "timeMs": 0.0017
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
            "score": 0.8491,
            "timeMs": 0.0196
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8493,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.1718,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.4985,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.7926,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.434,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4835,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5923,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.655,
            "timeMs": 0.0015
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
            "score": 0.9831,
            "timeMs": 0.0028
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9835,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.6405,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9452,
            "timeMs": 0.033
          },
          "rbfKernelSimilarity": {
            "score": 0.9969,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6312,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7159,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7697,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8108,
            "timeMs": 0.0007
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
            "score": 0.8485,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8483,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.3499,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.5514,
            "timeMs": 0.0023
          },
          "rbfKernelSimilarity": {
            "score": 0.9661,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4298,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4851,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5826,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6527,
            "timeMs": 0.0006
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
            "score": 0.9922,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9922,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4392,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9696,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9838,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.701,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.782,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7963,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8433,
            "timeMs": 0.0029
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
            "score": 0.8658,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8659,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.1268,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.5399,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.6222,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4339,
            "timeMs": 0.0025
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4846,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5803,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6469,
            "timeMs": 0.0027
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
            "score": 0.9888,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.989,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.4727,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9571,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.9876,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6542,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.746,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7577,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8155,
            "timeMs": 0.0017
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
            "score": 0.8501,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8509,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.1664,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.5004,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.7781,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4042,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4713,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5873,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6514,
            "timeMs": 0.0016
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
            "score": 0.9939,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9944,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7328,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9795,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6956,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7794,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8199,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8558,
            "timeMs": 0.0007
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
            "score": 0.8899,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8895,
            "timeMs": 0.0004
          },
          "euclideanSimilarity": {
            "score": 0.3489,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.6478,
            "timeMs": 0.0017
          },
          "rbfKernelSimilarity": {
            "score": 0.9658,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.54,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6111,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6977,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7513,
            "timeMs": 0.0006
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
            "score": 0.9992,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9991,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.4145,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9802,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7419,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8184,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8435,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8794,
            "timeMs": 0.0026
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
            "score": 0.983,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9817,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.1346,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9334,
            "timeMs": 0.0053
          },
          "rbfKernelSimilarity": {
            "score": 0.6613,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5472,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6306,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6863,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7554,
            "timeMs": 0.0028
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
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.999,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.4892,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.9892,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.716,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8031,
            "timeMs": 0.0015
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8296,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8715,
            "timeMs": 0.0017
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
            "score": 0.9832,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9817,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.1777,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9341,
            "timeMs": 0.0022
          },
          "rbfKernelSimilarity": {
            "score": 0.8072,
            "timeMs": 0.0006
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5613,
            "timeMs": 0.0016
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6505,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7049,
            "timeMs": 0.0021
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7696,
            "timeMs": 0.0017
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
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.999,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.678,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.996,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6526,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7569,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8189,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8609,
            "timeMs": 0.0007
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
            "score": 0.985,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9863,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.3252,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9417,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.9578,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5537,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6358,
            "timeMs": 0.0006
          },
          "vectorSimilarityCorrelation": {
            "score": 0.724,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7739,
            "timeMs": 0.0007
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
            "score": 0.9955,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.4248,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9822,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9818,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8446,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8828,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.888,
            "timeMs": 0.0029
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9088,
            "timeMs": 0.0028
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
            "score": 0.9099,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9101,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.1229,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.674,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.6007,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5376,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.604,
            "timeMs": 0.363
          },
          "vectorSimilarityCorrelation": {
            "score": 0.665,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7274,
            "timeMs": 0.003
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
            "score": 0.9945,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.4776,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9787,
            "timeMs": 0.0058
          },
          "rbfKernelSimilarity": {
            "score": 0.9881,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8307,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.872,
            "timeMs": 0.0016
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8827,
            "timeMs": 0.0017
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9031,
            "timeMs": 0.0017
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
            "score": 0.8727,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8767,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.1541,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.5621,
            "timeMs": 0.0024
          },
          "rbfKernelSimilarity": {
            "score": 0.7399,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5139,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5612,
            "timeMs": 0.0014
          },
          "vectorSimilarityCorrelation": {
            "score": 0.631,
            "timeMs": 0.0018
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6993,
            "timeMs": 0.0018
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
            "score": 0.997,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.7384,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9889,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9987,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7812,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.848,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8783,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9026,
            "timeMs": 0.0007
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
            "score": 0.9252,
            "timeMs": 0.0845
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9257,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.3552,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.7445,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9676,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5828,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6665,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7388,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7836,
            "timeMs": 0.0008
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
            "score": 0.9928,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.993,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.3641,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9719,
            "timeMs": 0.0034
          },
          "rbfKernelSimilarity": {
            "score": 0.97,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7502,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.817,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8331,
            "timeMs": 0.0043
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8676,
            "timeMs": 0.0041
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
            "score": 0.8784,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8785,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.1035,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.5753,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0.4721,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5003,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5071,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5996,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6674,
            "timeMs": 0.0038
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
            "score": 0.9916,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.427,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9672,
            "timeMs": 0.0025
          },
          "rbfKernelSimilarity": {
            "score": 0.9822,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7036,
            "timeMs": 0.0095
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7817,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7975,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8421,
            "timeMs": 0.0022
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
            "score": 0.8909,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8918,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1516,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.6161,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.7311,
            "timeMs": 0.0007
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5009,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.513,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5994,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6679,
            "timeMs": 0.0022
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
            "score": 0.9909,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9906,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6041,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9666,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9957,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6505,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7427,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7955,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.836,
            "timeMs": 0.0008
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
            "score": 0.8489,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8382,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.2566,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.5162,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.9195,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4191,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4784,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5725,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6403,
            "timeMs": 0.0008
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
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.3697,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9713,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8988,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9225,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9256,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9386,
            "timeMs": 0.0041
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
            "score": 0.983,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9831,
            "timeMs": 0.0015
          },
          "euclideanSimilarity": {
            "score": 0.1078,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.9333,
            "timeMs": 0.0053
          },
          "rbfKernelSimilarity": {
            "score": 0.5044,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6605,
            "timeMs": 0.0038
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7446,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7676,
            "timeMs": 0.0044
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8174,
            "timeMs": 0.0042
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
            "score": 0.9992,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9992,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.4383,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9968,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.9837,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8876,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9159,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9274,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9392,
            "timeMs": 0.0021
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
            "score": 0.9817,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9817,
            "timeMs": 0.0028
          },
          "euclideanSimilarity": {
            "score": 0.139,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9285,
            "timeMs": 0.0064
          },
          "rbfKernelSimilarity": {
            "score": 0.6814,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6681,
            "timeMs": 0.0035
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7488,
            "timeMs": 0.0033
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7733,
            "timeMs": 0.0036
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8203,
            "timeMs": 0.003
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
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6902,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0026
          },
          "rbfKernelSimilarity": {
            "score": 0.998,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7547,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8341,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8763,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.904,
            "timeMs": 0.0007
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
            "score": 0.9809,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9805,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.2551,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9258,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9183,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5789,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6726,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7507,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8004,
            "timeMs": 0.0007
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
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.3761,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9932,
            "timeMs": 0.0031
          },
          "rbfKernelSimilarity": {
            "score": 0.9729,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8629,
            "timeMs": 0.0036
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8976,
            "timeMs": 0.0035
          },
          "vectorSimilarityCorrelation": {
            "score": 0.905,
            "timeMs": 0.0042
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9224,
            "timeMs": 0.0041
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
            "score": 0.9603,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.952,
            "timeMs": 0.0014
          },
          "euclideanSimilarity": {
            "score": 0.1038,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.8477,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.4748,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5769,
            "timeMs": 0.0037
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6616,
            "timeMs": 0.0034
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6959,
            "timeMs": 0.0043
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7603,
            "timeMs": 0.004
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
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9979,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.4609,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0091
          },
          "rbfKernelSimilarity": {
            "score": 0.9864,
            "timeMs": 0.0433
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8441,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8851,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.89,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.912,
            "timeMs": 0.0023
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
            "score": 0.9649,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9591,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.149,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.865,
            "timeMs": 0.0043
          },
          "rbfKernelSimilarity": {
            "score": 0.7217,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5932,
            "timeMs": 0.0021
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6807,
            "timeMs": 0.002
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7186,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7784,
            "timeMs": 0.0022
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
            "score": 0.9987,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.6697,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0021
          },
          "rbfKernelSimilarity": {
            "score": 0.9976,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7088,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.802,
            "timeMs": 0.0008
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8535,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8872,
            "timeMs": 0.0008
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
            "score": 0.9606,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9499,
            "timeMs": 0.0005
          },
          "euclideanSimilarity": {
            "score": 0.2843,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.8521,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9386,
            "timeMs": 0.0005
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5177,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5718,
            "timeMs": 0.0007
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6713,
            "timeMs": 0.0009
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7294,
            "timeMs": 0.0008
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
            "score": 0.995,
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.995,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.4154,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9802,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.9804,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.828,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8718,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8738,
            "timeMs": 0.0032
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8991,
            "timeMs": 0.003
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
            "score": 0.9307,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.931,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.1282,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.7433,
            "timeMs": 0.0057
          },
          "rbfKernelSimilarity": {
            "score": 0.6296,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5745,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6499,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7037,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7572,
            "timeMs": 0.0029
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
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.5559,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9934,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.9936,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8957,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9167,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9229,
            "timeMs": 0.004
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9337,
            "timeMs": 0.0029
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
            "score": 0.9582,
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9584,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.1898,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.8411,
            "timeMs": 0.0028
          },
          "rbfKernelSimilarity": {
            "score": 0.8335,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6102,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6926,
            "timeMs": 0.0024
          },
          "vectorSimilarityCorrelation": {
            "score": 0.72,
            "timeMs": 0.003
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7764,
            "timeMs": 0.0028
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
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.7081,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9982,
            "timeMs": 0.003
          },
          "rbfKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9835,
            "timeMs": 0.0027
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9857,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9871,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9884,
            "timeMs": 0.0024
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
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9903,
            "timeMs": 0.001
          },
          "euclideanSimilarity": {
            "score": 0.3405,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9613,
            "timeMs": 0.0027
          },
          "rbfKernelSimilarity": {
            "score": 0.9632,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9397,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9548,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9665,
            "timeMs": 0.0022
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9722,
            "timeMs": 0.0024
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.3401,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.9821,
            "timeMs": 0.004
          },
          "rbfKernelSimilarity": {
            "score": 0.9631,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.849,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.885,
            "timeMs": 0.0045
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8865,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.908,
            "timeMs": 0.0055
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
            "score": 0.9137,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9137,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.0951,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.6855,
            "timeMs": 0.0039
          },
          "rbfKernelSimilarity": {
            "score": 0.4043,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5604,
            "timeMs": 0.0048
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6368,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6826,
            "timeMs": 0.0054
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7449,
            "timeMs": 0.0056
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
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.4641,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.9935,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.9868,
            "timeMs": 0.0013
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9019,
            "timeMs": 0.005
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9221,
            "timeMs": 0.0047
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9271,
            "timeMs": 0.0056
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9376,
            "timeMs": 0.0052
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
            "score": 0.9654,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9655,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.1489,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.867,
            "timeMs": 0.0042
          },
          "rbfKernelSimilarity": {
            "score": 0.7213,
            "timeMs": 0.001
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.6295,
            "timeMs": 0.0049
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.7122,
            "timeMs": 0.0045
          },
          "vectorSimilarityCorrelation": {
            "score": 0.7341,
            "timeMs": 0.0055
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7895,
            "timeMs": 0.0053
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
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.6186,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.9981,
            "timeMs": 0.0076
          },
          "rbfKernelSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0017
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9855,
            "timeMs": 0.0053
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9872,
            "timeMs": 0.0046
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9892,
            "timeMs": 0.0043
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.99,
            "timeMs": 0.004
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
            "score": 0.9906,
            "timeMs": 0.0011
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9907,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.2643,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.963,
            "timeMs": 0.0041
          },
          "rbfKernelSimilarity": {
            "score": 0.9254,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9383,
            "timeMs": 0.0047
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9541,
            "timeMs": 0.0047
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9591,
            "timeMs": 0.0039
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9674,
            "timeMs": 0.0038
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
            "score": 0.9925,
            "timeMs": 0.0792
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9925,
            "timeMs": 0.0027
          },
          "euclideanSimilarity": {
            "score": 0.2879,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9704,
            "timeMs": 0.0082
          },
          "rbfKernelSimilarity": {
            "score": 0.9407,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.7487,
            "timeMs": 0.0071
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8156,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelation": {
            "score": 0.83,
            "timeMs": 0.008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8655,
            "timeMs": 0.0079
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
            "score": 0.8803,
            "timeMs": 0.0027
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8804,
            "timeMs": 0.0025
          },
          "euclideanSimilarity": {
            "score": 0.0757,
            "timeMs": 0.0016
          },
          "polynomialKernelSimilarity": {
            "score": 0.5797,
            "timeMs": 0.0093
          },
          "rbfKernelSimilarity": {
            "score": 0.2251,
            "timeMs": 0.002
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5014,
            "timeMs": 0.0071
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5154,
            "timeMs": 0.0068
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6109,
            "timeMs": 0.0078
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6758,
            "timeMs": 0.0074
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
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.4148,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.9901,
            "timeMs": 0.0084
          },
          "rbfKernelSimilarity": {
            "score": 0.9803,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8094,
            "timeMs": 0.0069
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8598,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8712,
            "timeMs": 0.0082
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8964,
            "timeMs": 0.0081
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
            "score": 0.9479,
            "timeMs": 0.0025
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9479,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.1232,
            "timeMs": 0.0017
          },
          "polynomialKernelSimilarity": {
            "score": 0.8033,
            "timeMs": 0.0092
          },
          "rbfKernelSimilarity": {
            "score": 0.6027,
            "timeMs": 0.0018
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5402,
            "timeMs": 0.0073
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.6102,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6616,
            "timeMs": 0.008
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7277,
            "timeMs": 0.0078
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
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0024
          },
          "euclideanSimilarity": {
            "score": 0.5677,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9971,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0.9942,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9695,
            "timeMs": 0.0068
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9753,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9786,
            "timeMs": 0.0075
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9816,
            "timeMs": 0.0055
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
            "score": 0.98,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.98,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.1952,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.9218,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.8437,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.9007,
            "timeMs": 0.0067
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9292,
            "timeMs": 0.0065
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9379,
            "timeMs": 0.006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9518,
            "timeMs": 0.0057
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
            "score": 0.8368,
            "timeMs": 0.0019
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8388,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.09,
            "timeMs": 0.001
          },
          "polynomialKernelSimilarity": {
            "score": 0.4567,
            "timeMs": 0.006
          },
          "rbfKernelSimilarity": {
            "score": 0.3597,
            "timeMs": 0.0011
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8815,
            "timeMs": 0.0028
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9118,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9172,
            "timeMs": 0.0031
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9328,
            "timeMs": 0.0029
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
            "timeMs": 0.0008
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.7428,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.0196,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.1295,
            "timeMs": 0.0033
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0009
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.5019,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.5243,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6569,
            "timeMs": 0.0026
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7264,
            "timeMs": 0.0023
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
            "score": 0.5865,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5865,
            "timeMs": 0.0011
          },
          "euclideanSimilarity": {
            "score": 0.0196,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.0303,
            "timeMs": 0.0032
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0008
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1305,
            "timeMs": 0.0026
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1795,
            "timeMs": 0.0025
          },
          "vectorSimilarityCorrelation": {
            "score": 0.4905,
            "timeMs": 0.0023
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4974,
            "timeMs": 0.002
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
            "score": 0.8534,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8551,
            "timeMs": 0.0016
          },
          "euclideanSimilarity": {
            "score": 0.0656,
            "timeMs": 0.0011
          },
          "polynomialKernelSimilarity": {
            "score": 0.5008,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.1317,
            "timeMs": 0.0012
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8804,
            "timeMs": 0.0505
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.9103,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelation": {
            "score": 0.9152,
            "timeMs": 0.006
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.9311,
            "timeMs": 0.0055
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
            "score": 0.4403,
            "timeMs": 0.0012
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.4094,
            "timeMs": 0.0017
          },
          "euclideanSimilarity": {
            "score": 0.0139,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.0139,
            "timeMs": 0.006
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4075,
            "timeMs": 0.0048
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4802,
            "timeMs": 0.0045
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6178,
            "timeMs": 0.0044
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.6931,
            "timeMs": 0.0045
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
            "score": 0.5956,
            "timeMs": 0.0016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5956,
            "timeMs": 0.0018
          },
          "euclideanSimilarity": {
            "score": 0.014,
            "timeMs": 0.0012
          },
          "polynomialKernelSimilarity": {
            "score": 0.0367,
            "timeMs": 0.0066
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1333,
            "timeMs": 0.0051
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1833,
            "timeMs": 0.0048
          },
          "vectorSimilarityCorrelation": {
            "score": 0.4895,
            "timeMs": 0.0041
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.4971,
            "timeMs": 0.0035
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
            "score": 0.8235,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.825,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.0506,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.4196,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0.0296,
            "timeMs": 0.0015
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.8073,
            "timeMs": 0.0067
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.8604,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelation": {
            "score": 0.8732,
            "timeMs": 0.0095
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.8993,
            "timeMs": 0.0079
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
            "score": 0.5828,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.6142,
            "timeMs": 0.0023
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0014
          },
          "polynomialKernelSimilarity": {
            "score": 0.0275,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.4005,
            "timeMs": 0.0068
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.4759,
            "timeMs": 0.0067
          },
          "vectorSimilarityCorrelation": {
            "score": 0.6312,
            "timeMs": 0.0063
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.7015,
            "timeMs": 0.0065
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
            "timeMs": 0.0013
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5792,
            "timeMs": 0.0022
          },
          "euclideanSimilarity": {
            "score": 0.0114,
            "timeMs": 0.0013
          },
          "polynomialKernelSimilarity": {
            "score": 0.0252,
            "timeMs": 0.0048
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0014
          },
          "vectorSimilarityMeanStdPowerArithmeticMean": {
            "score": 0.1108,
            "timeMs": 0.0079
          },
          "vectorSimilarityMeanStdPowerArithmeticMeanNoStd": {
            "score": 0.1517,
            "timeMs": 0.0066
          },
          "vectorSimilarityCorrelation": {
            "score": 0.5001,
            "timeMs": 0.0052
          },
          "vectorSimilarityCorrelationNoStd": {
            "score": 0.5009,
            "timeMs": 0.005
          }
        }
      }
    ],
    "insights": []
  }
};