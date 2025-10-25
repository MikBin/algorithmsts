#!/usr/bin/env tsx

/**
 * Build Verification Script
 *
 * This script verifies that the build process completes successfully
 * and generates all expected outputs.
 *
 * Usage:
 *   npm run verify:build
 *   tsx test/scripts/verifyBuild.ts
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync, statSync } from 'fs';
import { join, resolve } from 'path';

interface BuildVerificationResult {
  success: boolean;
  checks: {
    name: string;
    status: 'pass' | 'fail';
    message: string;
    details?: any;
  }[];
  buildInfo: {
    duration: number;
    outputSize: number;
    fileCount: number;
  };
}

class BuildVerifier {
  private projectRoot: string;
  private results: BuildVerificationResult['checks'] = [];
  private buildStartTime: number = 0;

  constructor() {
    this.projectRoot = resolve(process.cwd());
  }

  /**
   * Verify the build process
   */
  async verifyBuild(): Promise<BuildVerificationResult> {
    console.log('🔨 Verifying build process...\n');

    this.buildStartTime = Date.now();

    try {
      // Clean previous build
      await this.cleanBuild();

      // Run build
      await this.runBuild();

      // Verify build outputs
      await this.verifyBuildOutputs();

      // Verify TypeScript compilation
      await this.verifyTypeScriptCompilation();

      // Verify package exports
      await this.verifyPackageExports();

      // Verify bundle integrity
      await this.verifyBundleIntegrity();

      const buildInfo = this.generateBuildInfo();

      // Display results
      this.displayResults(buildInfo);

      const success = this.results.every(r => r.status === 'pass');
      return {
        success,
        checks: this.results,
        buildInfo
      };

    } catch (error: any) {
      console.error('❌ Build verification failed:', error.message);
      return {
        success: false,
        checks: this.results,
        buildInfo: {
          duration: Date.now() - this.buildStartTime,
          outputSize: 0,
          fileCount: 0
        }
      };
    }
  }

  /**
   * Clean previous build artifacts
   */
  private async cleanBuild(): Promise<void> {
    console.log('🧹 Cleaning previous build...');

    try {
      const command = 'npm run clean';
      execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      this.addResult('Clean build', 'pass', 'Previous build artifacts cleaned');
    } catch (error: any) {
      // Clean might not exist, that's okay
      this.addResult('Clean build', 'pass', 'Clean command not available or failed (non-critical)');
    }
  }

  /**
   * Run the build process
   */
  private async runBuild(): Promise<void> {
    console.log('🏗️  Running build process...');

    try {
      const command = 'npm run build';
      execSync(command, {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });

      this.addResult('Build execution', 'pass', 'Build completed successfully');
    } catch (error: any) {
      this.addResult('Build execution', 'fail', `Build failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Verify build outputs exist
   */
  private async verifyBuildOutputs(): Promise<void> {
    console.log('📦 Verifying build outputs...');

    const expectedFiles = [
      'dist/algorithmsts.cjs.js',
      'dist/algorithmsts.esm.js',
      'dist/algorithmsts.umd.js',
      'dist/src/algorithmsts.d.ts'
    ];

    let allFilesExist = true;
    for (const file of expectedFiles) {
      const filePath = join(this.projectRoot, file);
      if (existsSync(filePath)) {
        const stats = statSync(filePath);
        this.addResult(`Build output ${file}`, 'pass', `File exists (${stats.size} bytes)`);
      } else {
        this.addResult(`Build output ${file}`, 'fail', 'File not found');
        allFilesExist = false;
      }
    }

    if (allFilesExist) {
      this.addResult('Build outputs', 'pass', 'All expected build outputs present');
    } else {
      this.addResult('Build outputs', 'fail', 'Some build outputs missing');
    }
  }

  /**
   * Verify TypeScript compilation
   */
  private async verifyTypeScriptCompilation(): Promise<void> {
    console.log('🔷 Verifying TypeScript compilation...');

    try {
      const command = 'npx tsc --noEmit';
      execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      this.addResult('TypeScript compilation', 'pass', 'No TypeScript errors');
    } catch (error: any) {
      this.addResult('TypeScript compilation', 'fail', `TypeScript errors found: ${error.message}`);
    }
  }

  /**
   * Verify package exports
   */
  private async verifyPackageExports(): Promise<void> {
    console.log('📋 Verifying package exports...');

    try {
      // Check package.json exports
      const packageJsonPath = join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

      const expectedExports = {
        '.': {
          'import': './dist/algorithmsts.esm.js',
          'require': './dist/algorithmsts.cjs.js',
          'types': './dist/src/algorithmsts.d.ts'
        }
      };

      if (packageJson.exports) {
        let exportsValid = true;
        for (const [key, value] of Object.entries(expectedExports)) {
          if (JSON.stringify(packageJson.exports[key]) !== JSON.stringify(value)) {
            exportsValid = false;
            break;
          }
        }

        if (exportsValid) {
          this.addResult('Package exports', 'pass', 'Package exports correctly configured');
        } else {
          this.addResult('Package exports', 'fail', 'Package exports misconfigured');
        }
      } else {
        this.addResult('Package exports', 'fail', 'Package exports not defined');
      }
    } catch (error: any) {
      this.addResult('Package exports', 'fail', `Error checking exports: ${error.message}`);
    }
  }

  /**
   * Verify bundle integrity
   */
  private async verifyBundleIntegrity(): Promise<void> {
    console.log('🔍 Verifying bundle integrity...');

    const bundles = [
      { name: 'CJS', path: 'dist/algorithmsts.cjs.js' },
      { name: 'ESM', path: 'dist/algorithmsts.esm.js' },
      { name: 'UMD', path: 'dist/algorithmsts.umd.js' }
    ];

    for (const bundle of bundles) {
      try {
        const bundlePath = join(this.projectRoot, bundle.path);
        const content = readFileSync(bundlePath, 'utf-8');

        // Check for basic structure
        const hasExports = bundle.name === 'UMD'
          ? content.includes('algorithmsts') && content.includes('function')
          : content.includes('export') || content.includes('module.exports');

        if (hasExports) {
          this.addResult(`${bundle.name} bundle`, 'pass', 'Bundle has proper exports');
        } else {
          this.addResult(`${bundle.name} bundle`, 'fail', 'Bundle missing exports');
        }

        // Check file size is reasonable
        const stats = statSync(bundlePath);
        const sizeKB = stats.size / 1024;
        if (sizeKB > 0 && sizeKB < 5000) { // Less than 5MB
          this.addResult(`${bundle.name} bundle size`, 'pass', `Bundle size: ${sizeKB.toFixed(2)} KB`);
        } else {
          this.addResult(`${bundle.name} bundle size`, 'fail', `Unusual bundle size: ${sizeKB.toFixed(2)} KB`);
        }

      } catch (error: any) {
        this.addResult(`${bundle.name} bundle`, 'fail', `Error reading bundle: ${error.message}`);
      }
    }
  }

  /**
   * Generate build information
   */
  private generateBuildInfo() {
    const duration = Date.now() - this.buildStartTime;
    let outputSize = 0;
    let fileCount = 0;

    try {
      const distDir = join(this.projectRoot, 'dist');
      if (existsSync(distDir)) {
        const files = this.getAllFiles(distDir);
        fileCount = files.length;
        outputSize = files.reduce((total, file) => {
          try {
            return total + statSync(file).size;
          } catch {
            return total;
          }
        }, 0);
      }
    } catch (error) {
      // Ignore errors in size calculation
    }

    return {
      duration,
      outputSize,
      fileCount
    };
  }

  /**
   * Get all files in a directory recursively
   */
  private getAllFiles(dirPath: string): string[] {
    const files: string[] = [];

    try {
      const items = require('fs').readdirSync(dirPath);

      for (const item of items) {
        const fullPath = join(dirPath, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          files.push(...this.getAllFiles(fullPath));
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Ignore errors
    }

    return files;
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
  private displayResults(buildInfo: any): void {
    const passed = this.results.filter(r => r.status === 'pass').length;
    const failed = this.results.filter(r => r.status === 'fail').length;

    console.log('\n📊 Build Verification Summary');
    console.log('='.repeat(50));
    console.log(`Build duration: ${buildInfo.duration}ms`);
    console.log(`Output size: ${(buildInfo.outputSize / 1024).toFixed(2)} KB`);
    console.log(`Files generated: ${buildInfo.fileCount}`);
    console.log(`Checks passed: ${passed}`);
    console.log(`Checks failed: ${failed}`);

    if (failed > 0) {
      console.log('\n❌ Build verification failed!');
      console.log('\nFailed checks:');
      this.results.filter(r => r.status === 'fail').forEach(result => {
        console.log(`   - ${result.name}: ${result.message}`);
      });
    } else {
      console.log('\n✅ Build verification successful!');
    }
  }
}

// Run build verification if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const verifier = new BuildVerifier();
  verifier.verifyBuild().then((result) => {
    if (!result.success) {
      process.exit(1);
    }
  }).catch((error) => {
    console.error('Build verification failed:', error);
    process.exit(1);
  });
}

export { BuildVerifier };
