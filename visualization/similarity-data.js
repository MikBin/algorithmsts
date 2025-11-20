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
        "cosineSimilarity": 1,
        "euclideanSimilarity": 0.0003,
        "manhattanSimilarity": 0.0003,
        "gowerSimilarity": -1265.7,
        "soergelSimilarity": 0.8995,
        "kulczynskiSimilarity": 0.8995,
        "lorentzianSimilarity": 0.1071,
        "weightedMinkowskiSimilarity": 0.0003,
        "canberraSimilarity": 0.9089,
        "chebyshevSimilarity": 0.0003,
        "intersectionSimilarity": 34000.9999,
        "waveHedgesSimilarity": 1.4463,
        "sorensenSimilarity": 0.9471,
        "motykaSimilarity": 0.8995,
        "kullbackLeiblerSimilarity": -0.0003,
        "jeffreysSimilarity": 0.0025,
        "kSimilarity": -0.0005,
        "topsoeSimilarity": 0.0098,
        "pearsonChiSquareDistance": 382.0197,
        "neymanChiSquareDistance": 424.7159,
        "additiveSymmetricChiSquareDistance": 806.7355,
        "squaredChiSquareDistance": 201.119,
        "normalizedPearsonChiSquareSimilarity": 0.0026,
        "normalizedNeymanChiSquareSimilarity": 0.0023,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.0012,
        "normalizedSquaredChiSquareSimilarity": 0.0049,
        "fidelitySimilarity": 1,
        "hellingerDistance": null,
        "matusitaDistance": null,
        "squaredChordDistance": null,
        "normalizedMatusitaSimilarity": null,
        "normalizedSquaredChordSimilarity": null,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.8995,
        "jaccardSimilarityRealValued": 0.8995,
        "computeVectorSimilarityMeanStdPenalized": 0.8656,
        "vectorSimilarityCorrelation": 0.9018,
        "computeVectorSimilarityRobust": 0.8231,
        "computeVectorSimilarityMeanStdPower": 0.9068,
        "computeVectorSimilarityMetricLike": 0.5703,
        "computeVectorSimilarityTunable": 0.8717,
        "computeVectorSimilarityVarianceWeighted": 0.9028,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0
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
        "cosineSimilarity": 0.0855,
        "euclideanSimilarity": 0,
        "manhattanSimilarity": 0,
        "gowerSimilarity": -6999.63,
        "soergelSimilarity": -0.3986,
        "kulczynskiSimilarity": -0.3986,
        "lorentzianSimilarity": 0.0411,
        "weightedMinkowskiSimilarity": 0,
        "canberraSimilarity": 0.8105,
        "chebyshevSimilarity": 0,
        "intersectionSimilarity": -19953,
        "waveHedgesSimilarity": 0.0004,
        "sorensenSimilarity": -1.3258,
        "motykaSimilarity": -0.3986,
        "kullbackLeiblerSimilarity": null,
        "jeffreysSimilarity": null,
        "kSimilarity": null,
        "topsoeSimilarity": null,
        "pearsonChiSquareDistance": 29974.2892,
        "neymanChiSquareDistance": 549940013.321,
        "additiveSymmetricChiSquareDistance": 549969987.6102,
        "squaredChiSquareDistance": 29961.1421,
        "normalizedPearsonChiSquareSimilarity": 0,
        "normalizedNeymanChiSquareSimilarity": 0,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0,
        "normalizedSquaredChiSquareSimilarity": 0,
        "fidelitySimilarity": null,
        "hellingerDistance": null,
        "matusitaDistance": null,
        "squaredChordDistance": null,
        "normalizedMatusitaSimilarity": null,
        "normalizedSquaredChordSimilarity": null,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.0008,
        "jaccardSimilarityRealValued": -0.3986,
        "computeVectorSimilarityMeanStdPenalized": 0.7413,
        "vectorSimilarityCorrelation": 0.8263,
        "computeVectorSimilarityRobust": 0.8008,
        "computeVectorSimilarityMeanStdPower": 0.8441,
        "computeVectorSimilarityMetricLike": 0.4234,
        "computeVectorSimilarityTunable": 0.8082,
        "computeVectorSimilarityVarianceWeighted": 0.7675,
        "polynomialKernelSimilarity": 0.0073,
        "rbfKernelSimilarity": 0
      }
    }
  ],
  "benchmark": [
    {
      "name": "pearsonCorrelationSimilarity",
      "avgTime": 0.2987769,
      "iterations": 10
    },
    {
      "name": "cosineSimilarity",
      "avgTime": 0.1466345,
      "iterations": 10
    },
    {
      "name": "euclideanSimilarity",
      "avgTime": 0.067569,
      "iterations": 10
    },
    {
      "name": "manhattanSimilarity",
      "avgTime": 0.0842309,
      "iterations": 10
    },
    {
      "name": "gowerSimilarity",
      "avgTime": 0.10260380000000001,
      "iterations": 10
    },
    {
      "name": "soergelSimilarity",
      "avgTime": 0.2069364,
      "iterations": 10
    },
    {
      "name": "kulczynskiSimilarity",
      "avgTime": 0.14750529999999998,
      "iterations": 10
    },
    {
      "name": "lorentzianSimilarity",
      "avgTime": 0.1095109,
      "iterations": 10
    },
    {
      "name": "weightedMinkowskiSimilarity",
      "avgTime": 0.198307,
      "iterations": 10
    },
    {
      "name": "canberraSimilarity",
      "avgTime": 0.2004133,
      "iterations": 10
    },
    {
      "name": "chebyshevSimilarity",
      "avgTime": 0.19904529999999998,
      "iterations": 10
    },
    {
      "name": "intersectionSimilarity",
      "avgTime": 0.08425260000000001,
      "iterations": 10
    },
    {
      "name": "waveHedgesSimilarity",
      "avgTime": 0.12241410000000001,
      "iterations": 10
    },
    {
      "name": "sorensenSimilarity",
      "avgTime": 0.13184410000000002,
      "iterations": 10
    },
    {
      "name": "motykaSimilarity",
      "avgTime": 0.14385610000000001,
      "iterations": 10
    },
    {
      "name": "kullbackLeiblerSimilarity",
      "avgTime": 0.11986530000000001,
      "iterations": 10
    },
    {
      "name": "jeffreysSimilarity",
      "avgTime": 0.1439242,
      "iterations": 10
    },
    {
      "name": "kSimilarity",
      "avgTime": 0.06769069999999999,
      "iterations": 10
    },
    {
      "name": "topsoeSimilarity",
      "avgTime": 0.08447360000000001,
      "iterations": 10
    },
    {
      "name": "pearsonChiSquareDistance",
      "avgTime": 0.1457934,
      "iterations": 10
    },
    {
      "name": "neymanChiSquareDistance",
      "avgTime": 0.09561910000000001,
      "iterations": 10
    },
    {
      "name": "additiveSymmetricChiSquareDistance",
      "avgTime": 0.1211555,
      "iterations": 10
    },
    {
      "name": "squaredChiSquareDistance",
      "avgTime": 0.1085067,
      "iterations": 10
    },
    {
      "name": "normalizedPearsonChiSquareSimilarity",
      "avgTime": 0.0265806,
      "iterations": 10
    },
    {
      "name": "normalizedNeymanChiSquareSimilarity",
      "avgTime": 0.0264538,
      "iterations": 10
    },
    {
      "name": "normalizedAdditiveSymmetricChiSquareSimilarity",
      "avgTime": 0.021430400000000002,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChiSquareSimilarity",
      "avgTime": 0.0194642,
      "iterations": 10
    },
    {
      "name": "fidelitySimilarity",
      "avgTime": 0.189634,
      "iterations": 10
    },
    {
      "name": "hellingerDistance",
      "avgTime": 0.14216689999999998,
      "iterations": 10
    },
    {
      "name": "matusitaDistance",
      "avgTime": 0.1050569,
      "iterations": 10
    },
    {
      "name": "squaredChordDistance",
      "avgTime": 0.1269354,
      "iterations": 10
    },
    {
      "name": "normalizedMatusitaSimilarity",
      "avgTime": 0.0283418,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChordSimilarity",
      "avgTime": 0.0203643,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityBinary",
      "avgTime": 0.10492030000000001,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityWeighted",
      "avgTime": 0.1447535,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityRealValued",
      "avgTime": 0.14592270000000002,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMeanStdPenalized",
      "avgTime": 0.3359003,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelation",
      "avgTime": 0.1990886,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityRobust",
      "avgTime": 0.2480852,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMeanStdPower",
      "avgTime": 0.3623502,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMetricLike",
      "avgTime": 0.23712329999999998,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityTunable",
      "avgTime": 0.28099359999999995,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityVarianceWeighted",
      "avgTime": 0.29868740000000005,
      "iterations": 10
    },
    {
      "name": "polynomialKernelSimilarity",
      "avgTime": 0.1459472,
      "iterations": 10
    },
    {
      "name": "rbfKernelSimilarity",
      "avgTime": 0.0663798,
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
        "cosineSimilarity": 0.6667,
        "euclideanSimilarity": 0.4142,
        "manhattanSimilarity": 0.3333,
        "gowerSimilarity": 0.5,
        "soergelSimilarity": 0.5,
        "kulczynskiSimilarity": 0.5,
        "lorentzianSimilarity": 0.4191,
        "weightedMinkowskiSimilarity": 0.4142,
        "canberraSimilarity": 0.6667,
        "chebyshevSimilarity": 0.5,
        "intersectionSimilarity": 2,
        "waveHedgesSimilarity": 0.3333,
        "sorensenSimilarity": 0.6667,
        "motykaSimilarity": 0.5,
        "kullbackLeiblerSimilarity": 0,
        "jeffreysSimilarity": 0,
        "kSimilarity": 0.5906,
        "topsoeSimilarity": 0.4191,
        "pearsonChiSquareDistance": 1,
        "neymanChiSquareDistance": 1,
        "additiveSymmetricChiSquareDistance": 0,
        "squaredChiSquareDistance": 2,
        "normalizedPearsonChiSquareSimilarity": 0.5,
        "normalizedNeymanChiSquareSimilarity": 0.5,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 1,
        "normalizedSquaredChiSquareSimilarity": 0.3333,
        "fidelitySimilarity": 0.6667,
        "hellingerDistance": 0.5774,
        "matusitaDistance": 1.4142,
        "squaredChordDistance": 2,
        "normalizedMatusitaSimilarity": 0.4142,
        "normalizedSquaredChordSimilarity": 0.3333,
        "jaccardSimilarityBinary": 0.5,
        "jaccardSimilarityWeighted": 0.5,
        "jaccardSimilarityRealValued": 0.5,
        "computeVectorSimilarityMeanStdPenalized": 0.5876,
        "vectorSimilarityCorrelation": 0.6675,
        "computeVectorSimilarityRobust": 0.6875,
        "computeVectorSimilarityMeanStdPower": 0.6902,
        "computeVectorSimilarityMetricLike": 0.1824,
        "computeVectorSimilarityTunable": 0.6495,
        "computeVectorSimilarityVarianceWeighted": 0.5906,
        "polynomialKernelSimilarity": 0.5625,
        "rbfKernelSimilarity": 0.9802
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
        "cosineSimilarity": 0.9894,
        "euclideanSimilarity": 0.8333,
        "manhattanSimilarity": 0.7143,
        "gowerSimilarity": 0.9,
        "soergelSimilarity": 0.8462,
        "kulczynskiSimilarity": 0.8462,
        "lorentzianSimilarity": 0.724,
        "weightedMinkowskiSimilarity": 0.8333,
        "canberraSimilarity": 0.8804,
        "chebyshevSimilarity": 0.9091,
        "intersectionSimilarity": 2.2,
        "waveHedgesSimilarity": 0.5286,
        "sorensenSimilarity": 0.9167,
        "motykaSimilarity": 0.8462,
        "kullbackLeiblerSimilarity": 0.9439,
        "jeffreysSimilarity": 0.8997,
        "kSimilarity": 0.9873,
        "topsoeSimilarity": 0.9732,
        "pearsonChiSquareDistance": 0.141,
        "neymanChiSquareDistance": 0.0936,
        "additiveSymmetricChiSquareDistance": 0.2346,
        "squaredChiSquareDistance": 0.0544,
        "normalizedPearsonChiSquareSimilarity": 0.8765,
        "normalizedNeymanChiSquareSimilarity": 0.9144,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.81,
        "normalizedSquaredChiSquareSimilarity": 0.9484,
        "fidelitySimilarity": 0.9942,
        "hellingerDistance": 0.0759,
        "matusitaDistance": 0.1664,
        "squaredChordDistance": 0.0277,
        "normalizedMatusitaSimilarity": 0.8574,
        "normalizedSquaredChordSimilarity": 0.9731,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.8462,
        "jaccardSimilarityRealValued": 0.8462,
        "computeVectorSimilarityMeanStdPenalized": 0.8263,
        "vectorSimilarityCorrelation": 0.8707,
        "computeVectorSimilarityRobust": 0.7881,
        "computeVectorSimilarityMeanStdPower": 0.8788,
        "computeVectorSimilarityMetricLike": 0.4868,
        "computeVectorSimilarityTunable": 0.8376,
        "computeVectorSimilarityVarianceWeighted": 0.8688,
        "polynomialKernelSimilarity": 0.9862,
        "rbfKernelSimilarity": 0.9996
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
      "cosineSimilarity": {
        "A_vs_B": 1,
        "A_vs_C": 0.4654769362341076,
        "A_vs_D": 0.6363636363636364,
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
        "A_vs_C": -18.4,
        "A_vs_D": -1.4,
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
        "A_vs_B": 15,
        "A_vs_C": 15,
        "A_vs_D": 9,
        "A_vs_E": 15
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
        "A_vs_B": -2.327461242141372,
        "A_vs_C": -0.10504561735604158,
        "A_vs_D": 0.11332669829346903,
        "A_vs_E": 1
      },
      "jeffreysSimilarity": {
        "A_vs_B": 0.8749172232125645,
        "A_vs_C": 0.0029313812082055616,
        "A_vs_D": 0.060066943328748505,
        "A_vs_E": 1
      },
      "kSimilarity": {
        "A_vs_B": 3.7292902611671117,
        "A_vs_C": -0.13282137675448594,
        "A_vs_D": 0.35774157551948826,
        "A_vs_E": 1
      },
      "topsoeSimilarity": {
        "A_vs_B": 0.9655046474645659,
        "A_vs_C": 0.016998150640778562,
        "A_vs_D": 0.21783512886082534,
        "A_vs_E": 1
      },
      "pearsonChiSquareDistance": {
        "A_vs_B": 0.13636363636363646,
        "A_vs_C": 94.09,
        "A_vs_D": 22.2,
        "A_vs_E": 0
      },
      "neymanChiSquareDistance": {
        "A_vs_B": 0.15000000000000008,
        "A_vs_C": 3136.3333333333335,
        "A_vs_D": 22.2,
        "A_vs_E": 0
      },
      "additiveSymmetricChiSquareDistance": {
        "A_vs_B": 0.28636363636363654,
        "A_vs_C": 3230.423333333333,
        "A_vs_D": 44.4,
        "A_vs_E": 0
      },
      "squaredChiSquareDistance": {
        "A_vs_B": 0.07142857142857147,
        "A_vs_C": 91.3495145631068,
        "A_vs_D": 6.666666666666666,
        "A_vs_E": 0
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
      "hellingerDistance": {
        "A_vs_B": 0,
        "A_vs_C": 0.5335286784711593,
        "A_vs_D": 0.35317699014403925,
        "A_vs_E": 0
      },
      "matusitaDistance": {
        "A_vs_B": 0.1890358561105634,
        "A_vs_C": 8.267949192431123,
        "A_vs_D": 1.9344300429366994,
        "A_vs_E": 0
      },
      "squaredChordDistance": {
        "A_vs_B": 0.03573455489545363,
        "A_vs_C": 68.35898384862246,
        "A_vs_D": 3.742019591016081,
        "A_vs_E": 0
      },
      "normalizedMatusitaSimilarity": {
        "A_vs_B": 0.8410175310196989,
        "A_vs_C": 0.10789873565736335,
        "A_vs_D": 0.34078168004278836,
        "A_vs_E": 1
      },
      "normalizedSquaredChordSimilarity": {
        "A_vs_B": 0.9654983463412006,
        "A_vs_C": 0.014417742944194836,
        "A_vs_D": 0.21088061337716407,
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
      "computeVectorSimilarityRobust": {
        "A_vs_B": 0.8958333333333334,
        "A_vs_C": 0.8769035532994924,
        "A_vs_D": 0.6111111111111112,
        "A_vs_E": 1
      },
      "computeVectorSimilarityMeanStdPower": {
        "A_vs_B": 0.9545454545454545,
        "A_vs_C": 0.8832354375173782,
        "A_vs_D": 0.7044400006507633,
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
        0.9881973261489899,
        2.002351897082028,
        3.009961730162716,
        4.034847256852778,
        5.024974536865662,
        5.994699193011197,
        7.029857623667026,
        8.048620680089742,
        9.010862716094124,
        9.976224114214164
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "cosineSimilarity": 1,
        "euclideanSimilarity": 0.9278,
        "manhattanSimilarity": 0.8317,
        "gowerSimilarity": 0.9798,
        "soergelSimilarity": 0.9963,
        "kulczynskiSimilarity": 0.9963,
        "lorentzianSimilarity": 0.8337,
        "weightedMinkowskiSimilarity": 0.9278,
        "canberraSimilarity": 0.9978,
        "chebyshevSimilarity": 0.9536,
        "intersectionSimilarity": 54.9591,
        "waveHedgesSimilarity": 0.9573,
        "sorensenSimilarity": 0.9982,
        "motykaSimilarity": 0.9963,
        "kullbackLeiblerSimilarity": 1.1364,
        "jeffreysSimilarity": 0.9989,
        "kSimilarity": 1.064,
        "topsoeSimilarity": 0.9997,
        "pearsonChiSquareDistance": 0.0011,
        "neymanChiSquareDistance": 0.0011,
        "additiveSymmetricChiSquareDistance": 0.0022,
        "squaredChiSquareDistance": 0.0005,
        "normalizedPearsonChiSquareSimilarity": 0.9989,
        "normalizedNeymanChiSquareSimilarity": 0.9989,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9978,
        "normalizedSquaredChiSquareSimilarity": 0.9995,
        "fidelitySimilarity": 1,
        "hellingerDistance": 0.0014,
        "matusitaDistance": 0.0166,
        "squaredChordDistance": 0.0003,
        "normalizedMatusitaSimilarity": 0.9837,
        "normalizedSquaredChordSimilarity": 0.9997,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9963,
        "jaccardSimilarityRealValued": 0.9963,
        "computeVectorSimilarityMeanStdPenalized": 0.9964,
        "vectorSimilarityCorrelation": 0.9978,
        "computeVectorSimilarityRobust": 0.9945,
        "computeVectorSimilarityMeanStdPower": 0.9978,
        "computeVectorSimilarityMetricLike": 0.986,
        "computeVectorSimilarityTunable": 0.9967,
        "computeVectorSimilarityVarianceWeighted": 0.9978,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999
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
        "cosineSimilarity": 1,
        "euclideanSimilarity": 0.0005,
        "manhattanSimilarity": 0.0002,
        "gowerSimilarity": -543.5,
        "soergelSimilarity": 0.01,
        "kulczynskiSimilarity": 0.01,
        "lorentzianSimilarity": 0.0161,
        "weightedMinkowskiSimilarity": 0.0005,
        "canberraSimilarity": 0.505,
        "chebyshevSimilarity": 0.001,
        "intersectionSimilarity": 55,
        "waveHedgesSimilarity": 0.0917,
        "sorensenSimilarity": 0.0198,
        "motykaSimilarity": 0.01,
        "kullbackLeiblerSimilarity": -0.004,
        "jeffreysSimilarity": 0,
        "kSimilarity": -0.0047,
        "topsoeSimilarity": 0.0003,
        "pearsonChiSquareDistance": 5390.55,
        "neymanChiSquareDistance": 539055,
        "additiveSymmetricChiSquareDistance": 544445.55,
        "squaredChiSquareDistance": 5337.1782,
        "normalizedPearsonChiSquareSimilarity": 0.0002,
        "normalizedNeymanChiSquareSimilarity": 0,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0,
        "normalizedSquaredChiSquareSimilarity": 0.0002,
        "fidelitySimilarity": 1,
        "hellingerDistance": 0,
        "matusitaDistance": 66.7458,
        "squaredChordDistance": 4455,
        "normalizedMatusitaSimilarity": 0.0148,
        "normalizedSquaredChordSimilarity": 0.0002,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.01,
        "jaccardSimilarityRealValued": 0.01,
        "computeVectorSimilarityMeanStdPenalized": 0.505,
        "vectorSimilarityCorrelation": 0.505,
        "computeVectorSimilarityRobust": 0.3781,
        "computeVectorSimilarityMeanStdPower": 0.505,
        "computeVectorSimilarityMetricLike": 0.0016,
        "computeVectorSimilarityTunable": 0.3589,
        "computeVectorSimilarityVarianceWeighted": 0.505,
        "polynomialKernelSimilarity": 0.9975,
        "rbfKernelSimilarity": 0
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
        "cosineSimilarity": 0.1416,
        "euclideanSimilarity": 0.0542,
        "manhattanSimilarity": 0.0256,
        "gowerSimilarity": -2.8,
        "soergelSimilarity": 0.1163,
        "kulczynskiSimilarity": 0.1163,
        "lorentzianSimilarity": 0.0829,
        "weightedMinkowskiSimilarity": 0.0542,
        "canberraSimilarity": 0.5385,
        "chebyshevSimilarity": 0.0909,
        "intersectionSimilarity": 5,
        "waveHedgesSimilarity": 0.1429,
        "sorensenSimilarity": 0.2083,
        "motykaSimilarity": 0.1163,
        "kullbackLeiblerSimilarity": 0,
        "jeffreysSimilarity": 0,
        "kSimilarity": 0.0706,
        "topsoeSimilarity": 0.0366,
        "pearsonChiSquareDistance": 19,
        "neymanChiSquareDistance": 19,
        "additiveSymmetricChiSquareDistance": 0,
        "squaredChiSquareDistance": 38,
        "normalizedPearsonChiSquareSimilarity": 0.05,
        "normalizedNeymanChiSquareSimilarity": 0.05,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 1,
        "normalizedSquaredChiSquareSimilarity": 0.0256,
        "fidelitySimilarity": 0.2083,
        "hellingerDistance": 0.8898,
        "matusitaDistance": 6.1644,
        "squaredChordDistance": 38,
        "normalizedMatusitaSimilarity": 0.1396,
        "normalizedSquaredChordSimilarity": 0.0256,
        "jaccardSimilarityBinary": 0.1429,
        "jaccardSimilarityWeighted": 0.1163,
        "jaccardSimilarityRealValued": 0.1163,
        "computeVectorSimilarityMeanStdPenalized": 0.5644,
        "vectorSimilarityCorrelation": 0.6246,
        "computeVectorSimilarityRobust": 0.625,
        "computeVectorSimilarityMeanStdPower": 0.6384,
        "computeVectorSimilarityMetricLike": 0.1216,
        "computeVectorSimilarityTunable": 0.5857,
        "computeVectorSimilarityVarianceWeighted": 0.5572,
        "polynomialKernelSimilarity": 0.0215,
        "rbfKernelSimilarity": 0.0478
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
        "cosineSimilarity": 1,
        "euclideanSimilarity": 0,
        "manhattanSimilarity": 0,
        "gowerSimilarity": -14300013.3,
        "soergelSimilarity": 0.9091,
        "kulczynskiSimilarity": 0.9091,
        "lorentzianSimilarity": 0.0281,
        "weightedMinkowskiSimilarity": 0,
        "canberraSimilarity": 0.9545,
        "chebyshevSimilarity": 0,
        "intersectionSimilarity": 1001001001.001,
        "waveHedgesSimilarity": 0.6111,
        "sorensenSimilarity": 0.9524,
        "motykaSimilarity": 0.9091,
        "kullbackLeiblerSimilarity": 0,
        "jeffreysSimilarity": 0,
        "kSimilarity": 0,
        "topsoeSimilarity": 0,
        "pearsonChiSquareDistance": 9100009.1,
        "neymanChiSquareDistance": 10010010.01,
        "additiveSymmetricChiSquareDistance": 19110019.11,
        "squaredChiSquareDistance": 4766671.4333,
        "normalizedPearsonChiSquareSimilarity": 0,
        "normalizedNeymanChiSquareSimilarity": 0,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0,
        "normalizedSquaredChiSquareSimilarity": 0,
        "fidelitySimilarity": 1,
        "hellingerDistance": 0,
        "matusitaDistance": 1544.2436,
        "squaredChordDistance": 2384688.348,
        "normalizedMatusitaSimilarity": 0.0006,
        "normalizedSquaredChordSimilarity": 0,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9091,
        "jaccardSimilarityRealValued": 0.9091,
        "computeVectorSimilarityMeanStdPenalized": 0.9545,
        "vectorSimilarityCorrelation": 0.9545,
        "computeVectorSimilarityRobust": 0.8958,
        "computeVectorSimilarityMeanStdPower": 0.9545,
        "computeVectorSimilarityMetricLike": 0.7488,
        "computeVectorSimilarityTunable": 0.9326,
        "computeVectorSimilarityVarianceWeighted": 0.9545,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0
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
          1.3563,
          1.5206,
          3.0573,
          3.5707,
          5.2973,
          6.1744,
          6.7432,
          8.3747,
          8.9525,
          9.6777
        ],
        "pearsonCorrelationSimilarity": 0.9971,
        "cosineSimilarity": 0.9987,
        "euclideanSimilarity": 0.5031,
        "manhattanSimilarity": 0.2635,
        "gowerSimilarity": 0.7205,
        "soergelSimilarity": 0.9503,
        "kulczynskiSimilarity": 0.9503,
        "lorentzianSimilarity": 0.2939,
        "weightedMinkowskiSimilarity": 0.5031,
        "canberraSimilarity": 0.9563,
        "chebyshevSimilarity": 0.6759,
        "intersectionSimilarity": 53.4646,
        "waveHedgesSimilarity": 0.5459,
        "sorensenSimilarity": 0.9745,
        "motykaSimilarity": 0.9503,
        "kullbackLeiblerSimilarity": 0.6893,
        "jeffreysSimilarity": 0.741,
        "kSimilarity": 0.8467,
        "topsoeSimilarity": 0.9198,
        "pearsonChiSquareDistance": 0.3566,
        "neymanChiSquareDistance": 0.3494,
        "additiveSymmetricChiSquareDistance": 0.706,
        "squaredChiSquareDistance": 0.1739,
        "normalizedPearsonChiSquareSimilarity": 0.7371,
        "normalizedNeymanChiSquareSimilarity": 0.7411,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.5862,
        "normalizedSquaredChiSquareSimilarity": 0.8519,
        "fidelitySimilarity": 0.9992,
        "hellingerDistance": 0.0281,
        "matusitaDistance": 0.2954,
        "squaredChordDistance": 0.0873,
        "normalizedMatusitaSimilarity": 0.7719,
        "normalizedSquaredChordSimilarity": 0.9197,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9503,
        "jaccardSimilarityRealValued": 0.9503,
        "computeVectorSimilarityMeanStdPenalized": 0.9251,
        "vectorSimilarityCorrelation": 0.9547,
        "computeVectorSimilarityRobust": 0.911,
        "computeVectorSimilarityMeanStdPower": 0.9565,
        "computeVectorSimilarityMetricLike": 0.7676,
        "computeVectorSimilarityTunable": 0.9383,
        "computeVectorSimilarityVarianceWeighted": 0.9521,
        "polynomialKernelSimilarity": 0.9975,
        "rbfKernelSimilarity": 0.9903
      },
      "2": {
        "noisyVector": [
          0.6294,
          1.3691,
          3.3113,
          3.3291,
          5.0148,
          5.0364,
          7.7722,
          8.8391,
          9.6398,
          10.8823
        ],
        "pearsonCorrelationSimilarity": 0.9948,
        "cosineSimilarity": 0.9956,
        "euclideanSimilarity": 0.3204,
        "manhattanSimilarity": 0.1409,
        "gowerSimilarity": 0.3904,
        "soergelSimilarity": 0.8957,
        "kulczynskiSimilarity": 0.8957,
        "lorentzianSimilarity": 0.179,
        "weightedMinkowskiSimilarity": 0.3204,
        "canberraSimilarity": 0.924,
        "chebyshevSimilarity": 0.5093,
        "intersectionSimilarity": 52.364,
        "waveHedgesSimilarity": 0.4077,
        "sorensenSimilarity": 0.945,
        "motykaSimilarity": 0.8957,
        "kullbackLeiblerSimilarity": 1.4271,
        "jeffreysSimilarity": 0.4959,
        "kSimilarity": 1.4067,
        "topsoeSimilarity": 0.7979,
        "pearsonChiSquareDistance": 1.1282,
        "neymanChiSquareDistance": 0.9325,
        "additiveSymmetricChiSquareDistance": 2.0607,
        "squaredChiSquareDistance": 0.5048,
        "normalizedPearsonChiSquareSimilarity": 0.4699,
        "normalizedNeymanChiSquareSimilarity": 0.5175,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.3267,
        "normalizedSquaredChiSquareSimilarity": 0.6645,
        "fidelitySimilarity": 0.9977,
        "hellingerDistance": 0.0476,
        "matusitaDistance": 0.5037,
        "squaredChordDistance": 0.2537,
        "normalizedMatusitaSimilarity": 0.665,
        "normalizedSquaredChordSimilarity": 0.7977,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.8957,
        "jaccardSimilarityRealValued": 0.8957,
        "computeVectorSimilarityMeanStdPenalized": 0.8875,
        "vectorSimilarityCorrelation": 0.9197,
        "computeVectorSimilarityRobust": 0.8506,
        "computeVectorSimilarityMeanStdPower": 0.9233,
        "computeVectorSimilarityMetricLike": 0.6282,
        "computeVectorSimilarityTunable": 0.893,
        "computeVectorSimilarityVarianceWeighted": 0.918,
        "polynomialKernelSimilarity": 0.9913,
        "rbfKernelSimilarity": 0.956
      },
      "5": {
        "noisyVector": [
          -0.0842,
          1.2068,
          4.8688,
          4.0462,
          5.4566,
          3.9524,
          4.5011,
          8.6464,
          7.1928,
          8.8925
        ],
        "pearsonCorrelationSimilarity": 0.9471,
        "cosineSimilarity": 0.9754,
        "euclideanSimilarity": 0.1796,
        "manhattanSimilarity": 0.0749,
        "gowerSimilarity": -0.2357,
        "soergelSimilarity": 0.787,
        "kulczynskiSimilarity": 0.787,
        "lorentzianSimilarity": 0.1185,
        "weightedMinkowskiSimilarity": 0.1796,
        "canberraSimilarity": 0.8219,
        "chebyshevSimilarity": 0.2858,
        "intersectionSimilarity": 45.6614,
        "waveHedgesSimilarity": 0.2473,
        "sorensenSimilarity": 0.8808,
        "motykaSimilarity": 0.787,
        "kullbackLeiblerSimilarity": null,
        "jeffreysSimilarity": null,
        "kSimilarity": 0.2054,
        "topsoeSimilarity": null,
        "pearsonChiSquareDistance": -9.5998,
        "neymanChiSquareDistance": 4.825,
        "additiveSymmetricChiSquareDistance": -4.7749,
        "squaredChiSquareDistance": 3.1996,
        "normalizedPearsonChiSquareSimilarity": -0.1163,
        "normalizedNeymanChiSquareSimilarity": 0.1717,
        "normalizedAdditiveSymmetricChiSquareSimilarity": -0.2649,
        "normalizedSquaredChiSquareSimilarity": 0.2381,
        "fidelitySimilarity": null,
        "hellingerDistance": null,
        "matusitaDistance": null,
        "squaredChordDistance": null,
        "normalizedMatusitaSimilarity": null,
        "normalizedSquaredChordSimilarity": null,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.7899,
        "jaccardSimilarityRealValued": 0.787,
        "computeVectorSimilarityMeanStdPenalized": 0.7494,
        "vectorSimilarityCorrelation": 0.8108,
        "computeVectorSimilarityRobust": 0.747,
        "computeVectorSimilarityMeanStdPower": 0.8264,
        "computeVectorSimilarityMetricLike": 0.3806,
        "computeVectorSimilarityTunable": 0.7806,
        "computeVectorSimilarityVarianceWeighted": 0.7856,
        "polynomialKernelSimilarity": 0.9514,
        "rbfKernelSimilarity": 0.8118
      },
      "0.1": {
        "noisyVector": [
          0.9879,
          2.0312,
          2.9752,
          3.9821,
          5.0371,
          6.0452,
          6.9587,
          8.0047,
          9.0234,
          10.0426
        ],
        "pearsonCorrelationSimilarity": 1,
        "cosineSimilarity": 1,
        "euclideanSimilarity": 0.9109,
        "manhattanSimilarity": 0.7811,
        "gowerSimilarity": 0.972,
        "soergelSimilarity": 0.9949,
        "kulczynskiSimilarity": 0.9949,
        "lorentzianSimilarity": 0.7839,
        "weightedMinkowskiSimilarity": 0.9109,
        "canberraSimilarity": 0.9966,
        "chebyshevSimilarity": 0.9568,
        "intersectionSimilarity": 54.9039,
        "waveHedgesSimilarity": 0.936,
        "sorensenSimilarity": 0.9975,
        "motykaSimilarity": 0.9949,
        "kullbackLeiblerSimilarity": 1.0955,
        "jeffreysSimilarity": 0.998,
        "kSimilarity": 1.0458,
        "topsoeSimilarity": 0.9995,
        "pearsonChiSquareDistance": 0.002,
        "neymanChiSquareDistance": 0.002,
        "additiveSymmetricChiSquareDistance": 0.004,
        "squaredChiSquareDistance": 0.001,
        "normalizedPearsonChiSquareSimilarity": 0.998,
        "normalizedNeymanChiSquareSimilarity": 0.998,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.996,
        "normalizedSquaredChiSquareSimilarity": 0.999,
        "fidelitySimilarity": 1,
        "hellingerDistance": 0.0021,
        "matusitaDistance": 0.0225,
        "squaredChordDistance": 0.0005,
        "normalizedMatusitaSimilarity": 0.978,
        "normalizedSquaredChordSimilarity": 0.9995,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9949,
        "jaccardSimilarityRealValued": 0.9949,
        "computeVectorSimilarityMeanStdPenalized": 0.9949,
        "vectorSimilarityCorrelation": 0.9966,
        "computeVectorSimilarityRobust": 0.9915,
        "computeVectorSimilarityMeanStdPower": 0.9966,
        "computeVectorSimilarityMetricLike": 0.9786,
        "computeVectorSimilarityTunable": 0.9949,
        "computeVectorSimilarityVarianceWeighted": 0.9966,
        "polynomialKernelSimilarity": 1,
        "rbfKernelSimilarity": 0.9999
      },
      "0.5": {
        "noisyVector": [
          0.9618,
          1.9086,
          2.791,
          4.0601,
          4.9851,
          6.2077,
          7.079,
          8.1384,
          8.9017,
          9.8751
        ],
        "pearsonCorrelationSimilarity": 0.9996,
        "cosineSimilarity": 0.9998,
        "euclideanSimilarity": 0.72,
        "manhattanSimilarity": 0.485,
        "gowerSimilarity": 0.8938,
        "soergelSimilarity": 0.9809,
        "kulczynskiSimilarity": 0.9809,
        "lorentzianSimilarity": 0.5016,
        "weightedMinkowskiSimilarity": 0.72,
        "canberraSimilarity": 0.9871,
        "chebyshevSimilarity": 0.8271,
        "intersectionSimilarity": 54.4233,
        "waveHedgesSimilarity": 0.796,
        "sorensenSimilarity": 0.9903,
        "motykaSimilarity": 0.9809,
        "kullbackLeiblerSimilarity": 0.9018,
        "jeffreysSimilarity": 0.9664,
        "kSimilarity": 0.9523,
        "topsoeSimilarity": 0.9914,
        "pearsonChiSquareDistance": 0.0353,
        "neymanChiSquareDistance": 0.0343,
        "additiveSymmetricChiSquareDistance": 0.0696,
        "squaredChiSquareDistance": 0.0174,
        "normalizedPearsonChiSquareSimilarity": 0.9659,
        "normalizedNeymanChiSquareSimilarity": 0.9669,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9349,
        "normalizedSquaredChiSquareSimilarity": 0.9829,
        "fidelitySimilarity": 0.9999,
        "hellingerDistance": 0.0089,
        "matusitaDistance": 0.0932,
        "squaredChordDistance": 0.0087,
        "normalizedMatusitaSimilarity": 0.9147,
        "normalizedSquaredChordSimilarity": 0.9914,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9809,
        "jaccardSimilarityRealValued": 0.9809,
        "computeVectorSimilarityMeanStdPenalized": 0.9795,
        "vectorSimilarityCorrelation": 0.9869,
        "computeVectorSimilarityRobust": 0.9692,
        "computeVectorSimilarityMeanStdPower": 0.9871,
        "computeVectorSimilarityMetricLike": 0.9221,
        "computeVectorSimilarityTunable": 0.9808,
        "computeVectorSimilarityVarianceWeighted": 0.9869,
        "polynomialKernelSimilarity": 0.9996,
        "rbfKernelSimilarity": 0.9985
      }
    }
  },
  "nonLinearAnalysis": {
    "detailedResults": [
      {
        "type": "quadratic",
        "size": 100,
        "noise": 0.05,
        "label": "quadratic (n=100, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.1425
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9999,
            "timeMs": 0.3449
          },
          "euclideanSimilarity": {
            "score": 0.12,
            "timeMs": 0.1183
          },
          "polynomialKernelSimilarity": {
            "score": 0.9998,
            "timeMs": 0.1797
          },
          "rbfKernelSimilarity": {
            "score": 0.5843,
            "timeMs": 0.0989
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9797,
            "timeMs": 0.4773
          }
        }
      },
      {
        "type": "quadratic",
        "size": 100,
        "noise": 0.1,
        "label": "quadratic (n=100, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0134
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9994,
            "timeMs": 0.0272
          },
          "euclideanSimilarity": {
            "score": 0.0548,
            "timeMs": 0.0068
          },
          "polynomialKernelSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0198
          },
          "rbfKernelSimilarity": {
            "score": 0.0509,
            "timeMs": 0.0078
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9494,
            "timeMs": 0.0355
          }
        }
      },
      {
        "type": "quadratic",
        "size": 100,
        "noise": 0.15,
        "label": "quadratic (n=100, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9989,
            "timeMs": 0.0132
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9987,
            "timeMs": 0.026
          },
          "euclideanSimilarity": {
            "score": 0.0396,
            "timeMs": 0.0062
          },
          "polynomialKernelSimilarity": {
            "score": 0.9977,
            "timeMs": 0.0233
          },
          "rbfKernelSimilarity": {
            "score": 0.0028,
            "timeMs": 0.0115
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9415,
            "timeMs": 0.0351
          }
        }
      },
      {
        "type": "quadratic",
        "size": 1000,
        "noise": 0.05,
        "label": "quadratic (n=1000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9999,
            "timeMs": 0.1142
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9998,
            "timeMs": 0.3099
          },
          "euclideanSimilarity": {
            "score": 0.0352,
            "timeMs": 0.0573
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.1868
          },
          "rbfKernelSimilarity": {
            "score": 0.0006,
            "timeMs": 0.0552
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9773,
            "timeMs": 0.3949
          }
        }
      },
      {
        "type": "quadratic",
        "size": 1000,
        "noise": 0.1,
        "label": "quadratic (n=1000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9994,
            "timeMs": 1.5289
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 3.2877
          },
          "euclideanSimilarity": {
            "score": 0.0177,
            "timeMs": 0.5833
          },
          "polynomialKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 1.6554
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.6718
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9571,
            "timeMs": 2.4719
          }
        }
      },
      {
        "type": "quadratic",
        "size": 1000,
        "noise": 0.15,
        "label": "quadratic (n=1000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9987,
            "timeMs": 1.2076
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9984,
            "timeMs": 3.4469
          },
          "euclideanSimilarity": {
            "score": 0.012,
            "timeMs": 0.6183
          },
          "polynomialKernelSimilarity": {
            "score": 0.9973,
            "timeMs": 0.0091
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.6542
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9398,
            "timeMs": 2.2071
          }
        }
      },
      {
        "type": "quadratic",
        "size": 10000,
        "noise": 0.05,
        "label": "quadratic (n=10000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9998,
            "timeMs": 12.0575
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9998,
            "timeMs": 43.8013
          },
          "euclideanSimilarity": {
            "score": 0.0112,
            "timeMs": 1.8391
          },
          "polynomialKernelSimilarity": {
            "score": 0.9997,
            "timeMs": 0.0603
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 2.9362
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9756,
            "timeMs": 15.5978
          }
        }
      },
      {
        "type": "quadratic",
        "size": 10000,
        "noise": 0.1,
        "label": "quadratic (n=10000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9994,
            "timeMs": 0.1634
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9993,
            "timeMs": 0.0809
          },
          "euclideanSimilarity": {
            "score": 0.0056,
            "timeMs": 0.0733
          },
          "polynomialKernelSimilarity": {
            "score": 0.9988,
            "timeMs": 0.0443
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.149
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9575,
            "timeMs": 0.8439
          }
        }
      },
      {
        "type": "quadratic",
        "size": 10000,
        "noise": 0.15,
        "label": "quadratic (n=10000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9986,
            "timeMs": 0.0209
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0291
          },
          "euclideanSimilarity": {
            "score": 0.0037,
            "timeMs": 0.0149
          },
          "polynomialKernelSimilarity": {
            "score": 0.9972,
            "timeMs": 0.0426
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0156
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9384,
            "timeMs": 0.157
          }
        }
      },
      {
        "type": "exponential",
        "size": 100,
        "noise": 0.05,
        "label": "exponential (n=100, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9974,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0013
          },
          "euclideanSimilarity": {
            "score": 0.2728,
            "timeMs": 0.0015
          },
          "polynomialKernelSimilarity": {
            "score": 0.9949,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0.9314,
            "timeMs": 0.0027
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9693,
            "timeMs": 0.0023
          }
        }
      },
      {
        "type": "exponential",
        "size": 100,
        "noise": 0.1,
        "label": "exponential (n=100, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.991,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9826,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.1638,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9821,
            "timeMs": 0.0018
          },
          "rbfKernelSimilarity": {
            "score": 0.7705,
            "timeMs": 0.0009
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9438,
            "timeMs": 0.0023
          }
        }
      },
      {
        "type": "exponential",
        "size": 100,
        "noise": 0.15,
        "label": "exponential (n=100, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9816,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9621,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.1234,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9636,
            "timeMs": 0.0013
          },
          "rbfKernelSimilarity": {
            "score": 0.6035,
            "timeMs": 0.001
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9135,
            "timeMs": 0.0018
          }
        }
      },
      {
        "type": "exponential",
        "size": 1000,
        "noise": 0.05,
        "label": "exponential (n=1000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9975,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9948,
            "timeMs": 0.0033
          },
          "euclideanSimilarity": {
            "score": 0.1084,
            "timeMs": 0.0026
          },
          "polynomialKernelSimilarity": {
            "score": 0.995,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.5086,
            "timeMs": 0.0021
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9697,
            "timeMs": 0.0165
          }
        }
      },
      {
        "type": "exponential",
        "size": 1000,
        "noise": 0.1,
        "label": "exponential (n=1000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9883,
            "timeMs": 0.0041
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9766,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.0529,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9767,
            "timeMs": 0.0061
          },
          "rbfKernelSimilarity": {
            "score": 0.0403,
            "timeMs": 0.0023
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9388,
            "timeMs": 0.0168
          }
        }
      },
      {
        "type": "exponential",
        "size": 1000,
        "noise": 0.15,
        "label": "exponential (n=1000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9753,
            "timeMs": 0.0042
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9518,
            "timeMs": 0.0063
          },
          "euclideanSimilarity": {
            "score": 0.0365,
            "timeMs": 0.0032
          },
          "polynomialKernelSimilarity": {
            "score": 0.9512,
            "timeMs": 0.0088
          },
          "rbfKernelSimilarity": {
            "score": 0.0009,
            "timeMs": 0.0033
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9148,
            "timeMs": 0.0272
          }
        }
      },
      {
        "type": "exponential",
        "size": 10000,
        "noise": 0.05,
        "label": "exponential (n=10000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9973,
            "timeMs": 0.022
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9943,
            "timeMs": 0.0704
          },
          "euclideanSimilarity": {
            "score": 0.0355,
            "timeMs": 0.016
          },
          "polynomialKernelSimilarity": {
            "score": 0.9945,
            "timeMs": 0.0469
          },
          "rbfKernelSimilarity": {
            "score": 0.0006,
            "timeMs": 0.016
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9692,
            "timeMs": 0.2445
          }
        }
      },
      {
        "type": "exponential",
        "size": 10000,
        "noise": 0.1,
        "label": "exponential (n=10000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9896,
            "timeMs": 0.0184
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9789,
            "timeMs": 0.0261
          },
          "euclideanSimilarity": {
            "score": 0.0184,
            "timeMs": 0.0136
          },
          "polynomialKernelSimilarity": {
            "score": 0.9792,
            "timeMs": 0.0394
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0134
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9411,
            "timeMs": 0.1828
          }
        }
      },
      {
        "type": "exponential",
        "size": 10000,
        "noise": 0.15,
        "label": "exponential (n=10000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9763,
            "timeMs": 0.0171
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9539,
            "timeMs": 0.026
          },
          "euclideanSimilarity": {
            "score": 0.0121,
            "timeMs": 0.0134
          },
          "polynomialKernelSimilarity": {
            "score": 0.9531,
            "timeMs": 0.0393
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0135
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9141,
            "timeMs": 0.1915
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 100,
        "noise": 0.05,
        "label": "logarithmic (n=100, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9989,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9955,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5463,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.9978,
            "timeMs": 0.0016
          },
          "rbfKernelSimilarity": {
            "score": 0.9931,
            "timeMs": 0.0009
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9566,
            "timeMs": 0.0022
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 100,
        "noise": 0.1,
        "label": "logarithmic (n=100, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9966,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.987,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.411,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9933,
            "timeMs": 0.0012
          },
          "rbfKernelSimilarity": {
            "score": 0.9797,
            "timeMs": 0.0006
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9424,
            "timeMs": 0.002
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 100,
        "noise": 0.15,
        "label": "logarithmic (n=100, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9938,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.977,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.336,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9878,
            "timeMs": 0.0012
          },
          "rbfKernelSimilarity": {
            "score": 0.9617,
            "timeMs": 0.0006
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.934,
            "timeMs": 0.0021
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 1000,
        "noise": 0.05,
        "label": "logarithmic (n=1000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0028
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.3038,
            "timeMs": 0.0023
          },
          "polynomialKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0061
          },
          "rbfKernelSimilarity": {
            "score": 0.9488,
            "timeMs": 0.0023
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9698,
            "timeMs": 0.0187
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 1000,
        "noise": 0.1,
        "label": "logarithmic (n=1000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9964,
            "timeMs": 0.003
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9853,
            "timeMs": 0.0037
          },
          "euclideanSimilarity": {
            "score": 0.1747,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.9927,
            "timeMs": 0.0055
          },
          "rbfKernelSimilarity": {
            "score": 0.8001,
            "timeMs": 0.0022
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9454,
            "timeMs": 0.0168
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 1000,
        "noise": 0.15,
        "label": "logarithmic (n=1000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9917,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9672,
            "timeMs": 0.0036
          },
          "euclideanSimilarity": {
            "score": 0.1229,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.9835,
            "timeMs": 0.0056
          },
          "rbfKernelSimilarity": {
            "score": 0.6006,
            "timeMs": 0.0023
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.925,
            "timeMs": 0.0172
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 10000,
        "noise": 0.05,
        "label": "logarithmic (n=10000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0171
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9964,
            "timeMs": 0.026
          },
          "euclideanSimilarity": {
            "score": 0.1205,
            "timeMs": 0.0134
          },
          "polynomialKernelSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0393
          },
          "rbfKernelSimilarity": {
            "score": 0.5872,
            "timeMs": 0.0134
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9711,
            "timeMs": 0.1953
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 10000,
        "noise": 0.1,
        "label": "logarithmic (n=10000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9965,
            "timeMs": 0.015
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9857,
            "timeMs": 0.026
          },
          "euclideanSimilarity": {
            "score": 0.0637,
            "timeMs": 0.0133
          },
          "polynomialKernelSimilarity": {
            "score": 0.993,
            "timeMs": 0.0393
          },
          "rbfKernelSimilarity": {
            "score": 0.1154,
            "timeMs": 0.0137
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9467,
            "timeMs": 0.1729
          }
        }
      },
      {
        "type": "logarithmic",
        "size": 10000,
        "noise": 0.15,
        "label": "logarithmic (n=10000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9919,
            "timeMs": 0.016
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9683,
            "timeMs": 0.0278
          },
          "euclideanSimilarity": {
            "score": 0.0428,
            "timeMs": 0.0142
          },
          "polynomialKernelSimilarity": {
            "score": 0.9838,
            "timeMs": 0.0419
          },
          "rbfKernelSimilarity": {
            "score": 0.0067,
            "timeMs": 0.0458
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9234,
            "timeMs": 0.1857
          }
        }
      },
      {
        "type": "sqrt",
        "size": 100,
        "noise": 0.05,
        "label": "sqrt (n=100, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.997,
            "timeMs": 0.0012
          },
          "euclideanSimilarity": {
            "score": 0.5866,
            "timeMs": 0.0009
          },
          "polynomialKernelSimilarity": {
            "score": 0.9992,
            "timeMs": 0.002
          },
          "rbfKernelSimilarity": {
            "score": 0.995,
            "timeMs": 0.0011
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9871,
            "timeMs": 0.0025
          }
        }
      },
      {
        "type": "sqrt",
        "size": 100,
        "noise": 0.1,
        "label": "sqrt (n=100, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9878,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.4058,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0013
          },
          "rbfKernelSimilarity": {
            "score": 0.9788,
            "timeMs": 0.0007
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9711,
            "timeMs": 0.0022
          }
        }
      },
      {
        "type": "sqrt",
        "size": 100,
        "noise": 0.15,
        "label": "sqrt (n=100, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9801,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.3343,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9934,
            "timeMs": 0.0012
          },
          "rbfKernelSimilarity": {
            "score": 0.9611,
            "timeMs": 0.0007
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9634,
            "timeMs": 0.0022
          }
        }
      },
      {
        "type": "sqrt",
        "size": 1000,
        "noise": 0.05,
        "label": "sqrt (n=1000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9995,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9966,
            "timeMs": 0.0038
          },
          "euclideanSimilarity": {
            "score": 0.2983,
            "timeMs": 0.0021
          },
          "polynomialKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0058
          },
          "rbfKernelSimilarity": {
            "score": 0.9462,
            "timeMs": 0.0023
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9862,
            "timeMs": 0.0182
          }
        }
      },
      {
        "type": "sqrt",
        "size": 1000,
        "noise": 0.1,
        "label": "sqrt (n=1000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9983,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9874,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.1798,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.8122,
            "timeMs": 0.002
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9742,
            "timeMs": 0.0153
          }
        }
      },
      {
        "type": "sqrt",
        "size": 1000,
        "noise": 0.15,
        "label": "sqrt (n=1000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0024
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.974,
            "timeMs": 0.0037
          },
          "euclideanSimilarity": {
            "score": 0.1312,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9927,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0.6451,
            "timeMs": 0.002
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9621,
            "timeMs": 0.0156
          }
        }
      },
      {
        "type": "sqrt",
        "size": 10000,
        "noise": 0.05,
        "label": "sqrt (n=10000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9996,
            "timeMs": 0.0178
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9967,
            "timeMs": 0.0308
          },
          "euclideanSimilarity": {
            "score": 0.1201,
            "timeMs": 0.0158
          },
          "polynomialKernelSimilarity": {
            "score": 0.9991,
            "timeMs": 0.0467
          },
          "rbfKernelSimilarity": {
            "score": 0.5847,
            "timeMs": 0.0159
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9865,
            "timeMs": 0.1887
          }
        }
      },
      {
        "type": "sqrt",
        "size": 10000,
        "noise": 0.1,
        "label": "sqrt (n=10000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9982,
            "timeMs": 0.0164
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.987,
            "timeMs": 0.0277
          },
          "euclideanSimilarity": {
            "score": 0.0637,
            "timeMs": 0.0142
          },
          "polynomialKernelSimilarity": {
            "score": 0.9964,
            "timeMs": 0.042
          },
          "rbfKernelSimilarity": {
            "score": 0.1156,
            "timeMs": 0.0145
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9731,
            "timeMs": 0.1593
          }
        }
      },
      {
        "type": "sqrt",
        "size": 10000,
        "noise": 0.15,
        "label": "sqrt (n=10000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.996,
            "timeMs": 0.0159
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9718,
            "timeMs": 0.026
          },
          "euclideanSimilarity": {
            "score": 0.0435,
            "timeMs": 0.0134
          },
          "polynomialKernelSimilarity": {
            "score": 0.992,
            "timeMs": 0.0469
          },
          "rbfKernelSimilarity": {
            "score": 0.0079,
            "timeMs": 0.0136
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9603,
            "timeMs": 0.1523
          }
        }
      },
      {
        "type": "sin",
        "size": 100,
        "noise": 0.05,
        "label": "sin (n=100, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.993,
            "timeMs": 0.0009
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9965,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.5397,
            "timeMs": 0.0007
          },
          "polynomialKernelSimilarity": {
            "score": 0.9862,
            "timeMs": 0.0014
          },
          "rbfKernelSimilarity": {
            "score": 0.9928,
            "timeMs": 0.0009
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.8982,
            "timeMs": 0.0021
          }
        }
      },
      {
        "type": "sin",
        "size": 100,
        "noise": 0.1,
        "label": "sin (n=100, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9707,
            "timeMs": 0.0007
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9853,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.368,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9433,
            "timeMs": 0.0011
          },
          "rbfKernelSimilarity": {
            "score": 0.9709,
            "timeMs": 0.0006
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.8477,
            "timeMs": 0.0019
          }
        }
      },
      {
        "type": "sin",
        "size": 100,
        "noise": 0.15,
        "label": "sin (n=100, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.942,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.971,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.2852,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.8894,
            "timeMs": 0.001
          },
          "rbfKernelSimilarity": {
            "score": 0.9391,
            "timeMs": 0.0006
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7721,
            "timeMs": 0.0022
          }
        }
      },
      {
        "type": "sin",
        "size": 1000,
        "noise": 0.05,
        "label": "sin (n=1000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9927,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0033
          },
          "euclideanSimilarity": {
            "score": 0.2689,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9854,
            "timeMs": 0.0049
          },
          "rbfKernelSimilarity": {
            "score": 0.9287,
            "timeMs": 0.0019
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9046,
            "timeMs": 0.0157
          }
        }
      },
      {
        "type": "sin",
        "size": 1000,
        "noise": 0.1,
        "label": "sin (n=1000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9711,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9856,
            "timeMs": 0.0032
          },
          "euclideanSimilarity": {
            "score": 0.1555,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.9432,
            "timeMs": 0.005
          },
          "rbfKernelSimilarity": {
            "score": 0.7445,
            "timeMs": 0.002
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.8515,
            "timeMs": 0.0157
          }
        }
      },
      {
        "type": "sin",
        "size": 1000,
        "noise": 0.15,
        "label": "sin (n=1000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9343,
            "timeMs": 0.0026
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9673,
            "timeMs": 0.0035
          },
          "euclideanSimilarity": {
            "score": 0.1075,
            "timeMs": 0.0019
          },
          "polynomialKernelSimilarity": {
            "score": 0.8731,
            "timeMs": 0.0052
          },
          "rbfKernelSimilarity": {
            "score": 0.5017,
            "timeMs": 0.0022
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7869,
            "timeMs": 0.0163
          }
        }
      },
      {
        "type": "sin",
        "size": 10000,
        "noise": 0.05,
        "label": "sin (n=10000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9925,
            "timeMs": 0.0159
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9962,
            "timeMs": 0.0279
          },
          "euclideanSimilarity": {
            "score": 0.1033,
            "timeMs": 0.0142
          },
          "polynomialKernelSimilarity": {
            "score": 0.985,
            "timeMs": 0.053
          },
          "rbfKernelSimilarity": {
            "score": 0.4707,
            "timeMs": 0.0135
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9036,
            "timeMs": 0.1496
          }
        }
      },
      {
        "type": "sin",
        "size": 10000,
        "noise": 0.1,
        "label": "sin (n=10000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9704,
            "timeMs": 0.0189
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9852,
            "timeMs": 0.0306
          },
          "euclideanSimilarity": {
            "score": 0.0543,
            "timeMs": 0.0158
          },
          "polynomialKernelSimilarity": {
            "score": 0.9416,
            "timeMs": 0.0465
          },
          "rbfKernelSimilarity": {
            "score": 0.0484,
            "timeMs": 0.0276
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.8374,
            "timeMs": 0.1732
          }
        }
      },
      {
        "type": "sin",
        "size": 10000,
        "noise": 0.15,
        "label": "sin (n=10000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9355,
            "timeMs": 0.0153
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9677,
            "timeMs": 0.0277
          },
          "euclideanSimilarity": {
            "score": 0.037,
            "timeMs": 0.0142
          },
          "polynomialKernelSimilarity": {
            "score": 0.8751,
            "timeMs": 0.0419
          },
          "rbfKernelSimilarity": {
            "score": 0.0011,
            "timeMs": 0.0146
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7861,
            "timeMs": 0.1609
          }
        }
      },
      {
        "type": "cos",
        "size": 100,
        "noise": 0.05,
        "label": "cos (n=100, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9913,
            "timeMs": 0.0014
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9957,
            "timeMs": 0.0009
          },
          "euclideanSimilarity": {
            "score": 0.5151,
            "timeMs": 0.0008
          },
          "polynomialKernelSimilarity": {
            "score": 0.983,
            "timeMs": 0.0019
          },
          "rbfKernelSimilarity": {
            "score": 0.9912,
            "timeMs": 0.001
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9029,
            "timeMs": 0.0022
          }
        }
      },
      {
        "type": "cos",
        "size": 100,
        "noise": 0.1,
        "label": "cos (n=100, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9735,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9868,
            "timeMs": 0.0007
          },
          "euclideanSimilarity": {
            "score": 0.3791,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.9488,
            "timeMs": 0.0012
          },
          "rbfKernelSimilarity": {
            "score": 0.9735,
            "timeMs": 0.0007
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.8406,
            "timeMs": 0.002
          }
        }
      },
      {
        "type": "cos",
        "size": 100,
        "noise": 0.15,
        "label": "cos (n=100, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9336,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9668,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.278,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.874,
            "timeMs": 0.0011
          },
          "rbfKernelSimilarity": {
            "score": 0.9348,
            "timeMs": 0.0005
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7889,
            "timeMs": 0.002
          }
        }
      },
      {
        "type": "cos",
        "size": 1000,
        "noise": 0.05,
        "label": "cos (n=1000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9927,
            "timeMs": 0.0018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0031
          },
          "euclideanSimilarity": {
            "score": 0.2687,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.9854,
            "timeMs": 0.0047
          },
          "rbfKernelSimilarity": {
            "score": 0.9286,
            "timeMs": 0.0018
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9046,
            "timeMs": 0.0161
          }
        }
      },
      {
        "type": "cos",
        "size": 1000,
        "noise": 0.1,
        "label": "cos (n=1000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9708,
            "timeMs": 0.0029
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9854,
            "timeMs": 0.0043
          },
          "euclideanSimilarity": {
            "score": 0.1543,
            "timeMs": 0.0022
          },
          "polynomialKernelSimilarity": {
            "score": 0.9426,
            "timeMs": 0.0059
          },
          "rbfKernelSimilarity": {
            "score": 0.7404,
            "timeMs": 0.0023
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.8474,
            "timeMs": 0.018
          }
        }
      },
      {
        "type": "cos",
        "size": 1000,
        "noise": 0.15,
        "label": "cos (n=1000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9366,
            "timeMs": 0.0036
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9684,
            "timeMs": 0.0041
          },
          "euclideanSimilarity": {
            "score": 0.1098,
            "timeMs": 0.0023
          },
          "polynomialKernelSimilarity": {
            "score": 0.8775,
            "timeMs": 0.0062
          },
          "rbfKernelSimilarity": {
            "score": 0.5184,
            "timeMs": 0.0025
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7878,
            "timeMs": 0.0187
          }
        }
      },
      {
        "type": "cos",
        "size": 10000,
        "noise": 0.05,
        "label": "cos (n=10000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9925,
            "timeMs": 0.018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9963,
            "timeMs": 0.0277
          },
          "euclideanSimilarity": {
            "score": 0.1034,
            "timeMs": 0.0143
          },
          "polynomialKernelSimilarity": {
            "score": 0.9851,
            "timeMs": 0.042
          },
          "rbfKernelSimilarity": {
            "score": 0.4718,
            "timeMs": 0.0143
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.9027,
            "timeMs": 0.1924
          }
        }
      },
      {
        "type": "cos",
        "size": 10000,
        "noise": 0.1,
        "label": "cos (n=10000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9708,
            "timeMs": 0.0144
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9854,
            "timeMs": 0.026
          },
          "euclideanSimilarity": {
            "score": 0.0548,
            "timeMs": 0.0133
          },
          "polynomialKernelSimilarity": {
            "score": 0.9425,
            "timeMs": 0.0394
          },
          "rbfKernelSimilarity": {
            "score": 0.0509,
            "timeMs": 0.0135
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.8394,
            "timeMs": 0.1846
          }
        }
      },
      {
        "type": "cos",
        "size": 10000,
        "noise": 0.15,
        "label": "cos (n=10000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.9362,
            "timeMs": 0.0163
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.9681,
            "timeMs": 0.0261
          },
          "euclideanSimilarity": {
            "score": 0.0372,
            "timeMs": 0.0134
          },
          "polynomialKernelSimilarity": {
            "score": 0.8764,
            "timeMs": 0.0393
          },
          "rbfKernelSimilarity": {
            "score": 0.0012,
            "timeMs": 0.0136
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7885,
            "timeMs": 0.151
          }
        }
      },
      {
        "type": "tan",
        "size": 100,
        "noise": 0.05,
        "label": "tan (n=100, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.6961,
            "timeMs": 0.001
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.8516,
            "timeMs": 0.0008
          },
          "euclideanSimilarity": {
            "score": 0.0283,
            "timeMs": 0.0006
          },
          "polynomialKernelSimilarity": {
            "score": 0.4848,
            "timeMs": 0.0014
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0009
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.8648,
            "timeMs": 0.0021
          }
        }
      },
      {
        "type": "tan",
        "size": 100,
        "noise": 0.1,
        "label": "tan (n=100, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.159,
            "timeMs": 0.0006
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5879,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.0043,
            "timeMs": 0.0004
          },
          "polynomialKernelSimilarity": {
            "score": 0.0253,
            "timeMs": 0.0011
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0006
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7954,
            "timeMs": 0.0019
          }
        }
      },
      {
        "type": "tan",
        "size": 100,
        "noise": 0.15,
        "label": "tan (n=100, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": -0.0304,
            "timeMs": 0.0005
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.4798,
            "timeMs": 0.0006
          },
          "euclideanSimilarity": {
            "score": 0.0007,
            "timeMs": 0.0005
          },
          "polynomialKernelSimilarity": {
            "score": 0.0009,
            "timeMs": 0.001
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0009
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.6687,
            "timeMs": 0.0022
          }
        }
      },
      {
        "type": "tan",
        "size": 1000,
        "noise": 0.05,
        "label": "tan (n=1000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.241,
            "timeMs": 0.0023
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.6205,
            "timeMs": 0.003
          },
          "euclideanSimilarity": {
            "score": 0.0033,
            "timeMs": 0.0018
          },
          "polynomialKernelSimilarity": {
            "score": 0.0581,
            "timeMs": 0.0048
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0019
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.8693,
            "timeMs": 0.0156
          }
        }
      },
      {
        "type": "tan",
        "size": 1000,
        "noise": 0.1,
        "label": "tan (n=1000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": -0.0071,
            "timeMs": 0.0025
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.4963,
            "timeMs": 0.0033
          },
          "euclideanSimilarity": {
            "score": 0.0002,
            "timeMs": 0.002
          },
          "polynomialKernelSimilarity": {
            "score": 0.0001,
            "timeMs": 0.0051
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.002
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7683,
            "timeMs": 0.016
          }
        }
      },
      {
        "type": "tan",
        "size": 1000,
        "noise": 0.15,
        "label": "tan (n=1000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": -0.0089,
            "timeMs": 0.0021
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.4942,
            "timeMs": 0.0033
          },
          "euclideanSimilarity": {
            "score": 0.0006,
            "timeMs": 0.0025
          },
          "polynomialKernelSimilarity": {
            "score": 0.0001,
            "timeMs": 0.0054
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0022
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7114,
            "timeMs": 0.0157
          }
        }
      },
      {
        "type": "tan",
        "size": 10000,
        "noise": 0.05,
        "label": "tan (n=10000, σ=0.05)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.1677,
            "timeMs": 0.0147
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5838,
            "timeMs": 0.026
          },
          "euclideanSimilarity": {
            "score": 0.0011,
            "timeMs": 0.0133
          },
          "polynomialKernelSimilarity": {
            "score": 0.0281,
            "timeMs": 0.0393
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0136
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.867,
            "timeMs": 0.1504
          }
        }
      },
      {
        "type": "tan",
        "size": 10000,
        "noise": 0.1,
        "label": "tan (n=10000, σ=0.1)",
        "metrics": {
          "cosineSimilarity": {
            "score": 0.0036,
            "timeMs": 0.0177
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.5019,
            "timeMs": 0.0309
          },
          "euclideanSimilarity": {
            "score": 0,
            "timeMs": 0.0158
          },
          "polynomialKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0467
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.016
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7742,
            "timeMs": 0.1915
          }
        }
      },
      {
        "type": "tan",
        "size": 10000,
        "noise": 0.15,
        "label": "tan (n=10000, σ=0.15)",
        "metrics": {
          "cosineSimilarity": {
            "score": -0.0012,
            "timeMs": 0.018
          },
          "pearsonCorrelationSimilarity": {
            "score": 0.4994,
            "timeMs": 0.0276
          },
          "euclideanSimilarity": {
            "score": 0,
            "timeMs": 0.0143
          },
          "polynomialKernelSimilarity": {
            "score": 0,
            "timeMs": 0.042
          },
          "rbfKernelSimilarity": {
            "score": 0,
            "timeMs": 0.0144
          },
          "computeVectorSimilarityMeanStdPower": {
            "score": 0.7056,
            "timeMs": 0.159
          }
        }
      }
    ],
    "insights": [
      "Under high noise (15%), pearsonCorrelationSimilarity showed the highest average similarity retention (0.9030)."
    ]
  }
};