#!/usr/bin/env tsx

/**
 * Performance Validation Script
 *
 * This script validates that all algorithms meet their performance targets
 * and generates performance reports for CI/CD integration.
 *
 * Usage:
 *   npm run validate:performance
 *   tsx test/scripts/performanceValidation.ts
 */

import { PerformanceMonitor } from '../../src/core/utils/PerformanceMonitor';
import { PerformanceData } from '../algorithms/fixtures/PerformanceData';
import { CountingSort } from '../../src/algorithms/sorting';
import { BinarySearch } from '../../src/algorithms/searching/binary-search';
import { NgramSimilarity } from '../../src/algorithms/strings';

interface PerformanceValidationResult {
  algorithm: string;
  targetComplexity: string;
  maxTime: number;
  actualTime: number;
  passed: boolean;
  deviation: number;
  sampleSize: number;
}

interface PerformanceReport {
  timestamp: string;
  environment: {
    nodeVersion: string;
    platform: string;
    arch: string;
  };
  results: PerformanceValidationResult[];
  summary: {
    totalAlgorithms: number;
    passed: number;
    failed: number;
    averageDeviation: number;
  };
}

class PerformanceValidator {
  private results: PerformanceValidationResult[] = [];

  /**
   * Validate performance of all algorithms
   */
  async validatePerformance(): Promise<PerformanceReport> {
    console.log('⚡ Validating algorithm performance...\n');

    // Validate individual algorithms
    await this.validateCountingSort();
    await this.validateBinarySearch();
    await this.validateStringSimilarity();

    // Generate report
    const report = this.generateReport();

    // Display results
    this.displayResults(report);

    return report;
  }

  /**
   * Validate CountingSort performance
   */
  private async validateCountingSort(): Promise<void> {
    console.log('🔢 Validating CountingSort performance...');

    const algorithm = new CountingSort();
    const testCases = [
      { size: 100, iterations: 10 },
      { size: 1000, iterations: 5 },
      { size: 10000, iterations: 3 }
    ];

    for (const testCase of testCases) {
      const times: number[] = [];

      for (let i = 0; i < testCase.iterations; i++) {
        const testArray = Array.from({ length: testCase.size }, () =>
          Math.floor(Math.random() * testCase.size)
        );

        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          algorithm.execute({ array: testArray })
        );

        times.push(executionTime);
      }

      const averageTime = times.reduce((a, b) => a + b, 0) / times.length;
      const validation = PerformanceData.validatePerformance('CountingSort', averageTime, testCase.size);

      this.results.push({
        algorithm: `CountingSort (${testCase.size} elements)`,
        targetComplexity: 'O(n + k)',
        maxTime: validation.expectedMaxTime,
        actualTime: averageTime,
        passed: validation.passed,
        deviation: ((averageTime - validation.expectedMaxTime) / validation.expectedMaxTime) * 100,
        sampleSize: testCase.iterations
      });
    }
  }

  /**
   * Validate BinarySearch performance
   */
  private async validateBinarySearch(): Promise<void> {
    console.log('🔍 Validating BinarySearch performance...');

    const algorithm = new BinarySearch<number>();
    const testCases = [
      { size: 100, iterations: 20 },
      { size: 1000, iterations: 20 },
      { size: 10000, iterations: 20 },
      { size: 100000, iterations: 10 }
    ];

    for (const testCase of testCases) {
      const times: number[] = [];
      const sortedArray = Array.from({ length: testCase.size }, (_, i) => i);

      for (let i = 0; i < testCase.iterations; i++) {
        const target = Math.floor(Math.random() * testCase.size);

        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          algorithm.execute({
            array: sortedArray,
            value: target,
            compareFn: (a, b) => a - b
          })
        );

        times.push(executionTime);
      }

      const averageTime = times.reduce((a, b) => a + b, 0) / times.length;
      const validation = PerformanceData.validatePerformance('BinarySearch', averageTime, testCase.size);

      this.results.push({
        algorithm: `BinarySearch (${testCase.size} elements)`,
        targetComplexity: 'O(log n)',
        maxTime: validation.expectedMaxTime,
        actualTime: averageTime,
        passed: validation.passed,
        deviation: ((averageTime - validation.expectedMaxTime) / validation.expectedMaxTime) * 100,
        sampleSize: testCase.iterations
      });
    }
  }

  /**
   * Validate string similarity performance
   */
  private async validateStringSimilarity(): Promise<void> {
    console.log('📝 Validating string similarity performance...');

    const algorithm = new NgramSimilarity();
    const testCases = [
      { str1: 'hello', str2: 'world', iterations: 50 },
      { str1: 'The quick brown fox', str2: 'The quick brown dog', iterations: 30 },
      { str1: 'a'.repeat(100), str2: 'b'.repeat(100), iterations: 10 }
    ];

    for (const testCase of testCases) {
      const times: number[] = [];

      for (let i = 0; i < testCase.iterations; i++) {
        const executionTime = PerformanceMonitor.measureExecutionTime(() =>
          algorithm.execute({
            str1: testCase.str1,
            str2: testCase.str2
          })
        );

        times.push(executionTime);
      }

      const averageTime = times.reduce((a, b) => a + b, 0) / times.length;
      const validation = PerformanceData.validatePerformance('NgramSimilarity', averageTime);

      this.results.push({
        algorithm: `NgramSimilarity (${testCase.str1.length + testCase.str2.length} chars)`,
        targetComplexity: 'O(m + n)',
        maxTime: validation.expectedMaxTime,
        actualTime: averageTime,
        passed: validation.passed,
        deviation: ((averageTime - validation.expectedMaxTime) / validation.expectedMaxTime) * 100,
        sampleSize: testCase.iterations
      });
    }
  }

  /**
   * Generate performance report
   */
  private generateReport(): PerformanceReport {
    const passed = this.results.filter(r => r.passed).length;
    const failed = this.results.filter(r => r.passed === false).length;
    const averageDeviation = this.results.reduce((sum, r) => sum + r.deviation, 0) / this.results.length;

    return {
      timestamp: new Date().toISOString(),
      environment: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch
      },
      results: this.results,
      summary: {
        totalAlgorithms: this.results.length,
        passed,
        failed,
        averageDeviation
      }
    };
  }

  /**
   * Display results in console
   */
  private displayResults(report: PerformanceReport): void {
    console.log('\n📊 Performance Validation Report');
    console.log('='.repeat(60));
    console.log(`Timestamp: ${report.timestamp}`);
    console.log(`Environment: Node ${report.environment.nodeVersion} on ${report.environment.platform}-${report.environment.arch}`);
    console.log('');

    console.log('🔧 Algorithm Performance Results:');
    console.log('-'.repeat(100));

    report.results.forEach(result => {
      const status = result.passed ? '✅ PASS' : '❌ FAIL';
      const deviation = result.deviation >= 0 ? `+${result.deviation.toFixed(2)}%` : `${result.deviation.toFixed(2)}%`;

      console.log(
        `${status} ${result.algorithm.padEnd(35)} | ` +
        `${result.targetComplexity.padEnd(12)} | ` +
        `${result.actualTime.toFixed(3)}ms / ${result.maxTime.toFixed(1)}ms | ` +
        `${deviation.padEnd(8)} | ` +
        `${result.sampleSize} samples`
      );
    });

    console.log('');
    console.log('📈 Summary:');
    console.log(`   Total algorithms tested: ${report.summary.totalAlgorithms}`);
    console.log(`   Passed: ${report.summary.passed}`);
    console.log(`   Failed: ${report.summary.failed}`);
    console.log(`   Average deviation: ${report.summary.averageDeviation.toFixed(2)}%`);

    if (report.summary.failed > 0) {
      console.log('\n❌ Performance validation failed!');
      console.log('Some algorithms did not meet their performance targets.');
      console.log('Consider optimizing the failing algorithms or adjusting performance targets.');
    } else {
      console.log('\n✅ All performance targets met!');
      console.log('All algorithms are performing within acceptable limits.');
    }
  }

  /**
   * Export report to JSON file
   */
  exportReport(report: PerformanceReport, filename: string = 'performance-report.json'): void {
    const fs = require('fs');
    const path = require('path');

    const reportPath = path.join(process.cwd(), filename);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log(`📄 Performance report exported to: ${reportPath}`);
  }
}

// Run performance validation if this script is executed directly
if (require.main === module) {
  const validator = new PerformanceValidator();

  validator.validatePerformance().then((report) => {
    // Export report for CI/CD
    validator.exportReport(report);

    // Exit with appropriate code
    if (report.summary.failed > 0) {
      console.log('\n💡 Tip: Run with --verbose flag to see detailed performance metrics');
      process.exit(1);
    } else {
      process.exit(0);
    }
  }).catch((error) => {
    console.error('Performance validation failed:', error);
    process.exit(1);
  });
}

export { PerformanceValidator, PerformanceReport, PerformanceValidationResult };
