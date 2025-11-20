# Vector Similarity Analysis

This document provides an overview of the vector similarity analysis script and explains how to interpret the results.

## Overview

The `vector-similarity-analysis.ts` script is a comprehensive tool for evaluating and comparing various vector similarity and distance functions. It consolidates several tests and benchmarks into a single script, generating a unified JSON output file named `vector-similarity-analysis.json` in the `tmp/` directory.

The script performs the following analyses:

- **Outliers Resiliency Test**: Evaluates how different similarity functions handle vectors with outliers.
- **Benchmark**: Measures the performance of each similarity function.
- **Similarity Compare**: Compares the results of similarity functions on binary and continuous vectors.
- **Comparison Demo**: Demonstrates how different similarity functions behave with various types of vector pairs (e.g., similar, outlier, negatively correlated, identical).
- **Stress Tests**: Subjects the similarity functions to a variety of challenging scenarios, including:
    - **Noise Resilience**: Tests the functions' stability when random noise is introduced to the vectors.
    - **Scale Invariance**: Checks if the similarity score is affected by scaling the vectors.
    - **Sparse Vectors**: Evaluates the functions' behavior with vectors that contain many zero values.
    - **High Dynamic Range**: Tests the functions with vectors whose values span several orders of magnitude.

## How to Run the Script

To run the analysis, use the following command:

```bash
npm run analyze-similarity
```

This will execute the `vector-similarity-analysis.ts` script and generate the `vector-similarity-analysis.json` file in the `tmp/` directory.

## Interpreting the Results

The output JSON file is organized into the following sections:

### `outliersResiliencyTest`

This section contains the results of the outliers resiliency test. Each test case includes the input vectors and a dictionary of similarity scores for each function. When analyzing these results, look for functions that produce stable and intuitive similarity scores despite the presence of outliers.

### `benchmark`

This section presents the performance benchmarks for each similarity function. The results include the average execution time in milliseconds and the number of iterations performed. Use this data to identify the most performant functions for your use case.

### `similarityCompare`

This section provides a side-by-side comparison of the similarity functions on both binary and continuous vectors. This is useful for understanding how the functions behave with different types of data.

### `comparisonDemo`

This section demonstrates the behavior of the similarity functions with various vector pairs. By comparing the similarity scores for different types of vector relationships (e.g., similar vs. negatively correlated), you can gain a better understanding of each function's characteristics.

### `stressTests`

This section contains the results of the stress tests. Each test case highlights a specific challenge for the similarity functions. When reviewing these results, consider the following:

- **Noise Resilience**: A robust function should produce similar scores for the base vector and its noisy counterpart.
- **Scale Invariance**: A scale-invariant function will produce the same similarity score for the base vector and its scaled version.
- **Sparse Vectors**: Some functions are better suited for sparse data than others. Look for functions that produce meaningful results for sparse vectors.
- **High Dynamic Range**: Functions that are sensitive to the magnitude of the values may produce skewed results with high dynamic range vectors.

By analyzing the results from these various tests, you can make an informed decision about which vector similarity function is best suited for your specific needs.
