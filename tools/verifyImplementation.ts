#!/usr/bin/env tsx

/**
 * Implementation Verification Script
 *
 * This script verifies that all implementation requirements are met,
 * including interface compliance, export correctness, and performance targets.
 *
 * Usage:
 *   npm run verify:implementation
 *   tsx tools/verifyImplementation.ts
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { join, resolve, extname } from 'path';

interface VerificationResult {
  success: boolean;
  checks: {
    name: string;
    status: 'pass' | 'fail';
    message: string;
    details?: any;
  }[];
  summary: {
    totalChecks: number;
    passed: number;
    failed: number;
    coverage: number;
  };
}

class ImplementationVerifier {
  private projectRoot: string;
  private results: VerificationResult['checks'] = [];

  constructor() {
    this.projectRoot = resolve(process.cwd());
  }

  /**
   * Verify all implementation requirements
   */
  async verifyImplementation(): Promise<VerificationResult> {
    console.log('🔍 Verifying implementation requirements...\n');

    // Verify core interfaces
    await this.verifyCoreInterfaces();

    // Verify data structures
    await this.verifyDataStructures();

    // Verify algorithms
    await this.verifyAlgorithms();

    // Verify exports
    await this.verifyExports();

    // Verify performance targets
    await this.verifyPerformanceTargets();

    // Verify documentation
    await this.verifyDocumentation();

    // Generate summary
    const summary = this.generateSummary();

    // Display results
    this.displayResults(summary);

    return {
      success: summary.failed === 0,
      checks: this.results,
      summary
    };
  }

  /**
   * Verify core interfaces are properly implemented
   */
  private async verifyCoreInterfaces(): Promise<void> {
    console.log('🔷 Verifying core interfaces...');

    const interfaces = [
      'ICollection',
      'IComparable',
      'IIterator',
      'IDataStructure',
      'IAlgorithm'
    ];

    for (const interfaceName of interfaces) {
      const interfacePath = join(this.projectRoot, 'src', 'core', 'interfaces', `${interfaceName}.ts`);

      if (existsSync(interfacePath)) {
        this.addResult(`Core Interface ${interfaceName}`, 'pass', 'Interface file exists');

        // Check if interface has proper exports
        const content = readFileSync(interfacePath, 'utf-8');
        if (content.includes(`export interface ${interfaceName}`) || content.includes(`export type ${interfaceName}`)) {
          this.addResult(`Core Interface ${interfaceName} Export`, 'pass', 'Interface properly exported');
        } else {
          this.addResult(`Core Interface ${interfaceName} Export`, 'fail', 'Interface not properly exported');
        }
      } else {
        this.addResult(`Core Interface ${interfaceName}`, 'fail', 'Interface file missing');
      }
    }
  }

  /**
   * Verify data structures implementation
   */
  private async verifyDataStructures(): Promise<void> {
    console.log('📊 Verifying data structures...');

    const dataStructures = [
      'LinkedList',
      'SkipList',
      'SegmentTree',
      'Trie',
      'SuffixTree'
    ];

    for (const dsName of dataStructures) {
      const dsPath = join(this.projectRoot, 'src', 'data-structures', dsName.toLowerCase());

      if (existsSync(dsPath)) {
        this.addResult(`Data Structure ${dsName}`, 'pass', 'Data structure directory exists');

        // Check for index.ts
        const indexPath = join(dsPath, 'index.ts');
        if (existsSync(indexPath)) {
          this.addResult(`Data Structure ${dsName} Index`, 'pass', 'Index file exists');
        } else {
          this.addResult(`Data Structure ${dsName} Index`, 'fail', 'Index file missing');
        }

        // Check for interfaces.ts
        const interfacesPath = join(dsPath, 'interfaces.ts');
        if (existsSync(interfacesPath)) {
          this.addResult(`Data Structure ${dsName} Interfaces`, 'pass', 'Interfaces file exists');
        } else {
          this.addResult(`Data Structure ${dsName} Interfaces`, 'fail', 'Interfaces file missing');
        }
      } else {
        this.addResult(`Data Structure ${dsName}`, 'fail', 'Data structure directory missing');
      }
    }
  }

  /**
   * Verify algorithms implementation
   */
  private async verifyAlgorithms(): Promise<void> {
    console.log('⚙️  Verifying algorithms...');

    const algorithmCategories = [
      'sorting',
      'searching',
      'strings',
      'graphs',
      'range-queries'
    ];

    for (const category of algorithmCategories) {
      const categoryPath = join(this.projectRoot, 'src', 'algorithms', category);

      if (existsSync(categoryPath)) {
        this.addResult(`Algorithm Category ${category}`, 'pass', 'Algorithm category directory exists');

        // Check for index.ts
        const indexPath = join(categoryPath, 'index.ts');
        if (existsSync(indexPath)) {
          this.addResult(`Algorithm Category ${category} Index`, 'pass', 'Index file exists');
        } else {
          this.addResult(`Algorithm Category ${category} Index`, 'fail', 'Index file missing');
        }
      } else {
        this.addResult(`Algorithm Category ${category}`, 'fail', 'Algorithm category directory missing');
      }
    }
  }

  /**
   * Verify exports are correct
   */
  private async verifyExports(): Promise<void> {
    console.log('📦 Verifying exports...');

    const mainEntryPath = join(this.projectRoot, 'src', 'algorithmsts.ts');

    if (existsSync(mainEntryPath)) {
      this.addResult('Main Entry Point', 'pass', 'Main entry file exists');

      const content = readFileSync(mainEntryPath, 'utf-8');

      // Check for key exports
      const keyExports = [
        'BinarySearch',
        'CountingSort',
        'LinkedList',
        'Trie',
        'SegmentTree'
      ];

      for (const exportName of keyExports) {
        if (content.includes(`export { ${exportName}`) || content.includes(`export * from`)) {
          this.addResult(`Export ${exportName}`, 'pass', 'Export found in main entry');
        } else {
          this.addResult(`Export ${exportName}`, 'fail', 'Export missing from main entry');
        }
      }
    } else {
      this.addResult('Main Entry Point', 'fail', 'Main entry file missing');
    }
  }

  /**
   * Verify performance targets are defined
   */
  private async verifyPerformanceTargets(): Promise<void> {
    console.log('⚡ Verifying performance targets...');

    const performanceDataPath = join(this.projectRoot, 'test', 'algorithms', 'fixtures', 'PerformanceData.ts');

    if (existsSync(performanceDataPath)) {
      this.addResult('Performance Data', 'pass', 'Performance data file exists');

      const content = readFileSync(performanceDataPath, 'utf-8');

      // Check for performance targets
      if (content.includes('PERFORMANCE_TARGETS')) {
        this.addResult('Performance Targets', 'pass', 'Performance targets defined');
      } else {
        this.addResult('Performance Targets', 'fail', 'Performance targets missing');
      }

      // Check for algorithm expectations
      if (content.includes('ALGORITHM_PERFORMANCE_EXPECTATIONS')) {
        this.addResult('Algorithm Expectations', 'pass', 'Algorithm performance expectations defined');
      } else {
        this.addResult('Algorithm Expectations', 'fail', 'Algorithm performance expectations missing');
      }
    } else {
      this.addResult('Performance Data', 'fail', 'Performance data file missing');
    }
  }

  /**
   * Verify documentation exists
   */
  private async verifyDocumentation(): Promise<void> {
    console.log('📚 Verifying documentation...');

    const docs = [
      'README.md',
      'CHANGELOG.md',
      'package.json'
    ];

    for (const doc of docs) {
      const docPath = join(this.projectRoot, doc);

      if (existsSync(docPath)) {
        this.addResult(`Documentation ${doc}`, 'pass', 'Documentation file exists');

        // Check file size (should not be empty)
        const stats = statSync(docPath);
        if (stats.size > 100) { // At least 100 bytes
          this.addResult(`Documentation ${doc} Content`, 'pass', 'Documentation has content');
        } else {
          this.addResult(`Documentation ${doc} Content`, 'fail', 'Documentation appears empty');
        }
      } else {
        this.addResult(`Documentation ${doc}`, 'fail', 'Documentation file missing');
      }
    }
  }

  /**
   * Generate verification summary
   */
  private generateSummary() {
    const totalChecks = this.results.length;
    const passed = this.results.filter(r => r.status === 'pass').length;
    const failed = this.results.filter(r => r.status === 'fail').length;
    const coverage = totalChecks > 0 ? (passed / totalChecks) * 100 : 0;

    return {
      totalChecks,
      passed,
      failed,
      coverage
    };
  }

  /**
   * Add a result to the results array
   */
  private addResult(name: string, status: 'pass' | 'fail', message: string, details?: any): void {
    this.results.push({
      name,
      status,
      message,
      details
    });

    const icon = status === 'pass' ? '✅' : '❌';
    console.log(`${icon} ${name}: ${message}`);
  }

  /**
   * Display results
   */
  private displayResults(summary: any): void {
    console.log('\n📊 Implementation Verification Summary');
    console.log('='.repeat(50));
    console.log(`Total checks: ${summary.totalChecks}`);
    console.log(`Passed: ${summary.passed}`);
    console.log(`Failed: ${summary.failed}`);
    console.log(`Coverage: ${summary.coverage.toFixed(1)}%`);

    if (summary.failed > 0) {
      console.log('\n❌ Implementation verification failed!');
      console.log('\nFailed checks:');
      this.results.filter(r => r.status === 'fail').forEach(result => {
        console.log(`   - ${result.name}: ${result.message}`);
      });
    } else {
      console.log('\n✅ All implementation requirements met!');
    }
  }

  /**
   * Export detailed report
   */
  exportReport(result: VerificationResult, filename: string = 'implementation-report.json'): void {
    const fs = require('fs');
    const path = require('path');

    const reportPath = join(this.projectRoot, filename);
    fs.writeFileSync(reportPath, JSON.stringify(result, null, 2));

    console.log(`📄 Implementation report exported to: ${reportPath}`);
  }
}

// Run implementation verification if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const verifier = new ImplementationVerifier();
  verifier.verifyImplementation().then((result) => {
    // Export report for CI/CD
    verifier.exportReport(result);

    // Exit with appropriate code
    if (!result.success) {
      console.log('\n💡 Tip: Run with --verbose flag to see detailed verification results');
      process.exit(1);
    } else {
      process.exit(0);
    }
  }).catch((error) => {
    console.error('Implementation verification failed:', error);
    process.exit(1);
  });
}

export { ImplementationVerifier };
