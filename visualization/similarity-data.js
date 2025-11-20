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
        "computeVectorSimilarityVarianceWeighted": 0.9028
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
        "computeVectorSimilarityVarianceWeighted": 0.7675
      }
    }
  ],
  "benchmark": [
    {
      "name": "pearsonCorrelationSimilarity",
      "avgTime": 0.757234,
      "iterations": 10
    },
    {
      "name": "cosineSimilarity",
      "avgTime": 0.2521768,
      "iterations": 10
    },
    {
      "name": "euclideanSimilarity",
      "avgTime": 0.119063,
      "iterations": 10
    },
    {
      "name": "manhattanSimilarity",
      "avgTime": 0.1292618,
      "iterations": 10
    },
    {
      "name": "gowerSimilarity",
      "avgTime": 0.1806678,
      "iterations": 10
    },
    {
      "name": "soergelSimilarity",
      "avgTime": 0.8477205,
      "iterations": 10
    },
    {
      "name": "kulczynskiSimilarity",
      "avgTime": 0.9748931999999999,
      "iterations": 10
    },
    {
      "name": "lorentzianSimilarity",
      "avgTime": 0.1225528,
      "iterations": 10
    },
    {
      "name": "weightedMinkowskiSimilarity",
      "avgTime": 0.2137886,
      "iterations": 10
    },
    {
      "name": "canberraSimilarity",
      "avgTime": 1.1113305,
      "iterations": 10
    },
    {
      "name": "chebyshevSimilarity",
      "avgTime": 0.8876790999999999,
      "iterations": 10
    },
    {
      "name": "intersectionSimilarity",
      "avgTime": 0.5159565,
      "iterations": 10
    },
    {
      "name": "waveHedgesSimilarity",
      "avgTime": 0.6573569,
      "iterations": 10
    },
    {
      "name": "sorensenSimilarity",
      "avgTime": 1.2365464,
      "iterations": 10
    },
    {
      "name": "motykaSimilarity",
      "avgTime": 0.201175,
      "iterations": 10
    },
    {
      "name": "kullbackLeiblerSimilarity",
      "avgTime": 0.1184645,
      "iterations": 10
    },
    {
      "name": "jeffreysSimilarity",
      "avgTime": 0.1602343,
      "iterations": 10
    },
    {
      "name": "kSimilarity",
      "avgTime": 0.0892551,
      "iterations": 10
    },
    {
      "name": "topsoeSimilarity",
      "avgTime": 0.1097412,
      "iterations": 10
    },
    {
      "name": "pearsonChiSquareDistance",
      "avgTime": 0.1110829,
      "iterations": 10
    },
    {
      "name": "neymanChiSquareDistance",
      "avgTime": 0.11244860000000001,
      "iterations": 10
    },
    {
      "name": "additiveSymmetricChiSquareDistance",
      "avgTime": 0.1390806,
      "iterations": 10
    },
    {
      "name": "squaredChiSquareDistance",
      "avgTime": 0.1757666,
      "iterations": 10
    },
    {
      "name": "normalizedPearsonChiSquareSimilarity",
      "avgTime": 0.0273455,
      "iterations": 10
    },
    {
      "name": "normalizedNeymanChiSquareSimilarity",
      "avgTime": 0.023530799999999998,
      "iterations": 10
    },
    {
      "name": "normalizedAdditiveSymmetricChiSquareSimilarity",
      "avgTime": 0.0310934,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChiSquareSimilarity",
      "avgTime": 0.0214788,
      "iterations": 10
    },
    {
      "name": "fidelitySimilarity",
      "avgTime": 0.2333575,
      "iterations": 10
    },
    {
      "name": "hellingerDistance",
      "avgTime": 0.14798029999999998,
      "iterations": 10
    },
    {
      "name": "matusitaDistance",
      "avgTime": 0.13849979999999998,
      "iterations": 10
    },
    {
      "name": "squaredChordDistance",
      "avgTime": 0.1826875,
      "iterations": 10
    },
    {
      "name": "normalizedMatusitaSimilarity",
      "avgTime": 0.027420299999999998,
      "iterations": 10
    },
    {
      "name": "normalizedSquaredChordSimilarity",
      "avgTime": 0.0325451,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityBinary",
      "avgTime": 0.1089571,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityWeighted",
      "avgTime": 0.1598485,
      "iterations": 10
    },
    {
      "name": "jaccardSimilarityRealValued",
      "avgTime": 0.174555,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMeanStdPenalized",
      "avgTime": 0.3274031,
      "iterations": 10
    },
    {
      "name": "vectorSimilarityCorrelation",
      "avgTime": 0.26239670000000004,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityRobust",
      "avgTime": 0.27193429999999996,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMeanStdPower",
      "avgTime": 0.3322618,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityMetricLike",
      "avgTime": 0.244301,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityTunable",
      "avgTime": 0.3514738,
      "iterations": 10
    },
    {
      "name": "computeVectorSimilarityVarianceWeighted",
      "avgTime": 0.3371788,
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
        "computeVectorSimilarityVarianceWeighted": 0.5906
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
        "computeVectorSimilarityVarianceWeighted": 0.8688
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
        0.9516297056832659,
        2.0250852662596666,
        3.0034869110660387,
        4.03806612089573,
        4.99389872672025,
        6.024375393216289,
        7.007554297024308,
        8.021184332437983,
        9.028290926525592,
        9.97060110917864
      ],
      "similarities": {
        "pearsonCorrelationSimilarity": 1,
        "cosineSimilarity": 1,
        "euclideanSimilarity": 0.9216,
        "manhattanSimilarity": 0.8117,
        "gowerSimilarity": 0.9768,
        "soergelSimilarity": 0.9958,
        "kulczynskiSimilarity": 0.9958,
        "lorentzianSimilarity": 0.8141,
        "weightedMinkowskiSimilarity": 0.9216,
        "canberraSimilarity": 0.9956,
        "chebyshevSimilarity": 0.9539,
        "intersectionSimilarity": 54.9161,
        "waveHedgesSimilarity": 0.9205,
        "sorensenSimilarity": 0.9979,
        "motykaSimilarity": 0.9958,
        "kullbackLeiblerSimilarity": 1.0666,
        "jeffreysSimilarity": 0.9966,
        "kSimilarity": 1.0327,
        "topsoeSimilarity": 0.9991,
        "pearsonChiSquareDistance": 0.0035,
        "neymanChiSquareDistance": 0.0034,
        "additiveSymmetricChiSquareDistance": 0.0068,
        "squaredChiSquareDistance": 0.0017,
        "normalizedPearsonChiSquareSimilarity": 0.9965,
        "normalizedNeymanChiSquareSimilarity": 0.9966,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9932,
        "normalizedSquaredChiSquareSimilarity": 0.9983,
        "fidelitySimilarity": 1,
        "hellingerDistance": 0.0028,
        "matusitaDistance": 0.0292,
        "squaredChordDistance": 0.0009,
        "normalizedMatusitaSimilarity": 0.9716,
        "normalizedSquaredChordSimilarity": 0.9991,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9958,
        "jaccardSimilarityRealValued": 0.9958,
        "computeVectorSimilarityMeanStdPenalized": 0.9903,
        "vectorSimilarityCorrelation": 0.9956,
        "computeVectorSimilarityRobust": 0.9895,
        "computeVectorSimilarityMeanStdPower": 0.9956,
        "computeVectorSimilarityMetricLike": 0.9731,
        "computeVectorSimilarityTunable": 0.9935,
        "computeVectorSimilarityVarianceWeighted": 0.9955
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
        "computeVectorSimilarityVarianceWeighted": 0.505
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
        "computeVectorSimilarityVarianceWeighted": 0.5572
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
        "computeVectorSimilarityVarianceWeighted": 0.9545
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
          1.0939,
          1.5362,
          2.636,
          3.7373,
          4.6882,
          5.7716,
          6.7067,
          8.3758,
          9.4067,
          10.237
        ],
        "pearsonCorrelationSimilarity": 0.9984,
        "cosineSimilarity": 0.9987,
        "euclideanSimilarity": 0.4971,
        "manhattanSimilarity": 0.2477,
        "gowerSimilarity": 0.6963,
        "soergelSimilarity": 0.9459,
        "kulczynskiSimilarity": 0.9459,
        "lorentzianSimilarity": 0.2761,
        "weightedMinkowskiSimilarity": 0.4971,
        "canberraSimilarity": 0.9611,
        "chebyshevSimilarity": 0.6832,
        "intersectionSimilarity": 53.0761,
        "waveHedgesSimilarity": 0.5687,
        "sorensenSimilarity": 0.9722,
        "motykaSimilarity": 0.9459,
        "kullbackLeiblerSimilarity": 0.5121,
        "jeffreysSimilarity": 0.7825,
        "kSimilarity": 0.6948,
        "topsoeSimilarity": 0.9351,
        "pearsonChiSquareDistance": 0.2993,
        "neymanChiSquareDistance": 0.2598,
        "additiveSymmetricChiSquareDistance": 0.5592,
        "squaredChiSquareDistance": 0.1386,
        "normalizedPearsonChiSquareSimilarity": 0.7696,
        "normalizedNeymanChiSquareSimilarity": 0.7938,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.6414,
        "normalizedSquaredChiSquareSimilarity": 0.8783,
        "fidelitySimilarity": 0.9994,
        "hellingerDistance": 0.0247,
        "matusitaDistance": 0.2635,
        "squaredChordDistance": 0.0694,
        "normalizedMatusitaSimilarity": 0.7914,
        "normalizedSquaredChordSimilarity": 0.9351,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9459,
        "jaccardSimilarityRealValued": 0.9459,
        "computeVectorSimilarityMeanStdPenalized": 0.9399,
        "vectorSimilarityCorrelation": 0.9598,
        "computeVectorSimilarityRobust": 0.915,
        "computeVectorSimilarityMeanStdPower": 0.9609,
        "computeVectorSimilarityMetricLike": 0.7859,
        "computeVectorSimilarityTunable": 0.9437,
        "computeVectorSimilarityVarianceWeighted": 0.9593
      },
      "2": {
        "noisyVector": [
          1.7271,
          2.805,
          3.1767,
          4.8989,
          4.6498,
          6.9534,
          6.5137,
          8.683,
          8.4418,
          10.7827
        ],
        "pearsonCorrelationSimilarity": 0.9898,
        "cosineSimilarity": 0.9951,
        "euclideanSimilarity": 0.3162,
        "manhattanSimilarity": 0.1347,
        "gowerSimilarity": 0.3578,
        "soergelSimilarity": 0.893,
        "kulczynskiSimilarity": 0.893,
        "lorentzianSimilarity": 0.171,
        "weightedMinkowskiSimilarity": 0.3162,
        "canberraSimilarity": 0.9242,
        "chebyshevSimilarity": 0.5119,
        "intersectionSimilarity": 53.6053,
        "waveHedgesSimilarity": 0.4103,
        "sorensenSimilarity": 0.9435,
        "motykaSimilarity": 0.893,
        "kullbackLeiblerSimilarity": -0.4864,
        "jeffreysSimilarity": 0.4517,
        "kSimilarity": -1.5206,
        "topsoeSimilarity": 0.7682,
        "pearsonChiSquareDistance": 1.0528,
        "neymanChiSquareDistance": 1.4291,
        "additiveSymmetricChiSquareDistance": 2.4819,
        "squaredChiSquareDistance": 0.6003,
        "normalizedPearsonChiSquareSimilarity": 0.4871,
        "normalizedNeymanChiSquareSimilarity": 0.4117,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.2872,
        "normalizedSquaredChiSquareSimilarity": 0.6249,
        "fidelitySimilarity": 0.9978,
        "hellingerDistance": 0.0464,
        "matusitaDistance": 0.5501,
        "squaredChordDistance": 0.3026,
        "normalizedMatusitaSimilarity": 0.6451,
        "normalizedSquaredChordSimilarity": 0.7677,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.893,
        "jaccardSimilarityRealValued": 0.893,
        "computeVectorSimilarityMeanStdPenalized": 0.8857,
        "vectorSimilarityCorrelation": 0.9201,
        "computeVectorSimilarityRobust": 0.8529,
        "computeVectorSimilarityMeanStdPower": 0.9239,
        "computeVectorSimilarityMetricLike": 0.6314,
        "computeVectorSimilarityTunable": 0.8942,
        "computeVectorSimilarityVarianceWeighted": 0.9176
      },
      "5": {
        "noisyVector": [
          0.2891,
          2.975,
          4.2492,
          3.1544,
          4.5567,
          5.6788,
          9.3187,
          9.5736,
          8.1691,
          7.7762
        ],
        "pearsonCorrelationSimilarity": 0.9479,
        "cosineSimilarity": 0.9776,
        "euclideanSimilarity": 0.1928,
        "manhattanSimilarity": 0.0801,
        "gowerSimilarity": -0.1492,
        "soergelSimilarity": 0.812,
        "kulczynskiSimilarity": 0.812,
        "lorentzianSimilarity": 0.1219,
        "weightedMinkowskiSimilarity": 0.1928,
        "canberraSimilarity": 0.8683,
        "chebyshevSimilarity": 0.3013,
        "intersectionSimilarity": 49.6244,
        "waveHedgesSimilarity": 0.2929,
        "sorensenSimilarity": 0.8962,
        "motykaSimilarity": 0.812,
        "kullbackLeiblerSimilarity": 0.4775,
        "jeffreysSimilarity": 0.2198,
        "kSimilarity": 0.95,
        "topsoeSimilarity": 0.5342,
        "pearsonChiSquareDistance": 4.279,
        "neymanChiSquareDistance": 3.385,
        "additiveSymmetricChiSquareDistance": 7.664,
        "squaredChiSquareDistance": 1.7165,
        "normalizedPearsonChiSquareSimilarity": 0.1894,
        "normalizedNeymanChiSquareSimilarity": 0.2281,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.1154,
        "normalizedSquaredChiSquareSimilarity": 0.3681,
        "fidelitySimilarity": 0.9921,
        "hellingerDistance": 0.089,
        "matusitaDistance": 0.9378,
        "squaredChordDistance": 0.8794,
        "normalizedMatusitaSimilarity": 0.5161,
        "normalizedSquaredChordSimilarity": 0.5321,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.812,
        "jaccardSimilarityRealValued": 0.812,
        "computeVectorSimilarityMeanStdPenalized": 0.8172,
        "vectorSimilarityCorrelation": 0.8601,
        "computeVectorSimilarityRobust": 0.7746,
        "computeVectorSimilarityMeanStdPower": 0.8687,
        "computeVectorSimilarityMetricLike": 0.4577,
        "computeVectorSimilarityTunable": 0.8245,
        "computeVectorSimilarityVarianceWeighted": 0.8555
      },
      "0.1": {
        "noisyVector": [
          1.0215,
          2.0393,
          2.9914,
          3.9768,
          4.9924,
          5.9806,
          6.9568,
          8.0311,
          9.0183,
          9.9572
        ],
        "pearsonCorrelationSimilarity": 1,
        "cosineSimilarity": 1,
        "euclideanSimilarity": 0.9176,
        "manhattanSimilarity": 0.7967,
        "gowerSimilarity": 0.9745,
        "soergelSimilarity": 0.9954,
        "kulczynskiSimilarity": 0.9954,
        "lorentzianSimilarity": 0.7992,
        "weightedMinkowskiSimilarity": 0.9176,
        "canberraSimilarity": 0.9965,
        "chebyshevSimilarity": 0.9586,
        "intersectionSimilarity": 54.8551,
        "waveHedgesSimilarity": 0.9345,
        "sorensenSimilarity": 0.9977,
        "motykaSimilarity": 0.9954,
        "kullbackLeiblerSimilarity": 0.9655,
        "jeffreysSimilarity": 0.9979,
        "kSimilarity": 0.9827,
        "topsoeSimilarity": 0.9995,
        "pearsonChiSquareDistance": 0.0021,
        "neymanChiSquareDistance": 0.0021,
        "additiveSymmetricChiSquareDistance": 0.0041,
        "squaredChiSquareDistance": 0.001,
        "normalizedPearsonChiSquareSimilarity": 0.9979,
        "normalizedNeymanChiSquareSimilarity": 0.9979,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9959,
        "normalizedSquaredChiSquareSimilarity": 0.999,
        "fidelitySimilarity": 1,
        "hellingerDistance": 0.0022,
        "matusitaDistance": 0.0227,
        "squaredChordDistance": 0.0005,
        "normalizedMatusitaSimilarity": 0.9778,
        "normalizedSquaredChordSimilarity": 0.9995,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9954,
        "jaccardSimilarityRealValued": 0.9954,
        "computeVectorSimilarityMeanStdPenalized": 0.9938,
        "vectorSimilarityCorrelation": 0.9965,
        "computeVectorSimilarityRobust": 0.9913,
        "computeVectorSimilarityMeanStdPower": 0.9965,
        "computeVectorSimilarityMetricLike": 0.9781,
        "computeVectorSimilarityTunable": 0.9947,
        "computeVectorSimilarityVarianceWeighted": 0.9965
      },
      "0.5": {
        "noisyVector": [
          0.8905,
          1.9914,
          2.8757,
          3.9366,
          5.1904,
          6.1564,
          7.1603,
          7.8982,
          9.202,
          10.0011
        ],
        "pearsonCorrelationSimilarity": 0.9996,
        "cosineSimilarity": 0.9998,
        "euclideanSimilarity": 0.7086,
        "manhattanSimilarity": 0.4722,
        "gowerSimilarity": 0.8882,
        "soergelSimilarity": 0.9799,
        "kulczynskiSimilarity": 0.9799,
        "lorentzianSimilarity": 0.4899,
        "weightedMinkowskiSimilarity": 0.7086,
        "canberraSimilarity": 0.9853,
        "chebyshevSimilarity": 0.832,
        "intersectionSimilarity": 54.5924,
        "waveHedgesSimilarity": 0.775,
        "sorensenSimilarity": 0.9899,
        "motykaSimilarity": 0.9799,
        "kullbackLeiblerSimilarity": 1.394,
        "jeffreysSimilarity": 0.9619,
        "kSimilarity": 1.1714,
        "topsoeSimilarity": 0.9902,
        "pearsonChiSquareDistance": 0.0402,
        "neymanChiSquareDistance": 0.039,
        "additiveSymmetricChiSquareDistance": 0.0792,
        "squaredChiSquareDistance": 0.0198,
        "normalizedPearsonChiSquareSimilarity": 0.9614,
        "normalizedNeymanChiSquareSimilarity": 0.9624,
        "normalizedAdditiveSymmetricChiSquareSimilarity": 0.9266,
        "normalizedSquaredChiSquareSimilarity": 0.9806,
        "fidelitySimilarity": 0.9999,
        "hellingerDistance": 0.0093,
        "matusitaDistance": 0.0995,
        "squaredChordDistance": 0.0099,
        "normalizedMatusitaSimilarity": 0.9095,
        "normalizedSquaredChordSimilarity": 0.9902,
        "jaccardSimilarityBinary": 1,
        "jaccardSimilarityWeighted": 0.9799,
        "jaccardSimilarityRealValued": 0.9799,
        "computeVectorSimilarityMeanStdPenalized": 0.974,
        "vectorSimilarityCorrelation": 0.985,
        "computeVectorSimilarityRobust": 0.9657,
        "computeVectorSimilarityMeanStdPower": 0.9853,
        "computeVectorSimilarityMetricLike": 0.9122,
        "computeVectorSimilarityTunable": 0.9783,
        "computeVectorSimilarityVarianceWeighted": 0.9848
      }
    }
  }
};