#!/usr/bin/env tsx

/**
 * Run All Tests Script
 *
 * This script runs all test suites with coverage reporting.
 * It provides a comprehensive test execution with detailed reporting.
 *
 * Usage:
 *   npm run test:all
 *   tsx test/scripts/runAllTests.ts
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';

interface TestResult {
  suite: string;
  passed: number;
  failed: number;
  skipped: number;
  duration: number;
  coverage?: {
    statements: number;
    branches: number;
    functions: number;
    lines: number;
  };
}

class TestRunner {
  private projectRoot: string;
  private results: TestResult[] = [];
  private startTime: number = 0;

  constructor() {
    this.projectRoot = resolve(process.cwd());
  }

  /**
   * Run all test suites
   */
  async runAllTests(): Promise<void> {
    console.log('🚀 Starting comprehensive test suite...\n');

    this.startTime = Date.now();

    try {
      // Ensure test directories exist
      this.ensureTestDirectories();

      // Run unit tests
      await this.runUnitTests();

      // Run integration tests
      await this.runIntegrationTests();

      // Run end-to-end tests
      await this.runE2ETests();

      // Run performance tests
      await this.runPerformanceTests();

      // Generate coverage report
      await this.generateCoverageReport();

      // Display final summary
      this.displayFinalSummary();

    } catch (error: any) {
      console.error('❌ Test execution failed:', error.message);
      process.exit(1);
    }
  }

  /**
   * Ensure test directories exist
   */
  private ensureTestDirectories(): void {
    const dirs = [
      'test/unit',
      'test/integration',
      'test/e2e',
      'test/scripts',
      'coverage'
    ];

    dirs.forEach(dir => {
      const fullPath = join(this.projectRoot, dir);
      if (!existsSync(fullPath)) {
        mkdirSync(fullPath, { recursive: true });
        console.log(`📁 Created directory: ${dir}`);
      }
    });
  }

  /**
   * Run unit tests
   */
  private async runUnitTests(): Promise<void> {
    console.log('🧪 Running unit tests...');

    try {
      const command = 'npm test -- --run --reporter=verbose --coverage=false test/algorithms test/data-structures test/graphs test/core';
      const output = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      });

      // Parse results (simplified parsing)
      const passed = (output.match(/✓/g) || []).length;
      const failed = (output.match(/✗/g) || []).length;

      this.results.push({
        suite: 'Unit Tests',
        passed,
        failed,
        skipped: 0,
        duration: 0 // Would need to parse from output
      });

      console.log(`✅ Unit tests completed: ${passed} passed, ${failed} failed`);
    } catch (error: any) {
      console.log(`⚠️  Unit tests had issues: ${error.message}`);
      this.results.push({
        suite: 'Unit Tests',
        passed: 0,
        failed: 1,
        skipped: 0,
        duration: 0
      });
    }
  }

  /**
   * Run integration tests
   */
  private async runIntegrationTests(): Promise<void> {
    console.log('🔗 Running integration tests...');

    try {
      const command = 'npm test -- --run --reporter=verbose test/integration';
      const output = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      });

      const passed = (output.match(/✓/g) || []).length;
      const failed = (output.match(/✗/g) || []).length;

      this.results.push({
        suite: 'Integration Tests',
        passed,
        failed,
        skipped: 0,
        duration: 0
      });

      console.log(`✅ Integration tests completed: ${passed} passed, ${failed} failed`);
    } catch (error: any) {
      console.log(`⚠️  Integration tests had issues: ${error.message}`);
      this.results.push({
        suite: 'Integration Tests',
        passed: 0,
        failed: 1,
        skipped: 0,
        duration: 0
      });
    }
  }

  /**
   * Run end-to-end tests
   */
  private async runE2ETests(): Promise<void> {
    console.log('🌐 Running end-to-end tests...');

    try {
      const command = 'npm test -- --run --reporter=verbose test/e2e';
      const output = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      });

      const passed = (output.match(/✓/g) || []).length;
      const failed = (output.match(/✗/g) || []).length;

      this.results.push({
        suite: 'E2E Tests',
        passed,
        failed,
        skipped: 0,
        duration: 0
      });

      console.log(`✅ E2E tests completed: ${passed} passed, ${failed} failed`);
    } catch (error: any) {
      console.log(`⚠️  E2E tests had issues: ${error.message}`);
      this.results.push({
        suite: 'E2E Tests',
        passed: 0,
        failed: 1,
        skipped: 0,
        duration: 0
      });
    }
  }

  /**
   * Run performance tests
   */
  private async runPerformanceTests(): Promise<void> {
    console.log('⚡ Running performance tests...');

    try {
      const command = 'npm test -- --run --reporter=verbose test/algorithms/integration/performanceBenchmark.test.ts test/integration/performanceRegression.test.ts';
      const output = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf-8',
        stdio: 'pipe'
      });

      const passed = (output.match(/✓/g) || []).length;
      const failed = (output.match(/✗/g) || []).length;

      this.results.push({
        suite: 'Performance Tests',
        passed,
        failed,
        skipped: 0,
        duration: 0
      });

      console.log(`✅ Performance tests completed: ${passed} passed, ${failed} failed`);
    } catch (error: any) {
      console.log(`⚠️  Performance tests had issues: ${error.message}`);
      this.results.push({
        suite: 'Performance Tests',
        passed: 0,
        failed: 1,
        skipped: 0,
        duration: 0
      });
    }
  }

  /**
   * Generate coverage report
   */
  private async generateCoverageReport(): Promise<void> {
    console.log('📊 Generating coverage report...');

    try {
      const command = 'npm run test:coverage';
      execSync(command, {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });

      console.log('✅ Coverage report generated');
    } catch (error: any) {
      console.log(`⚠️  Coverage report generation failed: ${error.message}`);
    }
  }

  /**
   * Display final summary
   */
  private displayFinalSummary(): void {
    const totalTime = Date.now() - this.startTime;
    const totalPassed = this.results.reduce((sum, r) => sum + r.passed, 0);
    const totalFailed = this.results.reduce((sum, r) => sum + r.failed, 0);
    const totalSkipped = this.results.reduce((sum, r) => sum + r.skipped, 0);

    console.log('\n📊 Test Execution Summary');
    console.log('='.repeat(50));
    console.log(`Total execution time: ${totalTime}ms`);
    console.log(`Suites run: ${this.results.length}`);
    console.log(`Tests passed: ${totalPassed}`);
    console.log(`Tests failed: ${totalFailed}`);
    console.log(`Tests skipped: ${totalSkipped}`);

    console.log('\n📋 Suite Breakdown:');
    this.results.forEach(result => {
      const status = result.failed > 0 ? '❌' : '✅';
      console.log(`${status} ${result.suite}: ${result.passed} passed, ${result.failed} failed`);
    });

    if (totalFailed > 0) {
      console.log('\n❌ Some tests failed. Please review the output above.');
      process.exit(1);
    } else {
      console.log('\n✅ All tests passed successfully!');
    }
  }
}

// Run tests if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const runner = new TestRunner();
  runner.runAllTests().catch((error) => {
    console.error('Test execution failed:', error);
    process.exit(1);
  });
}

export { TestRunner };
