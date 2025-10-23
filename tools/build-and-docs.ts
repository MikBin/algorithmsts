#!/usr/bin/env node

/**
 * Build and Documentation Script
 *
 * This script builds the library and generates documentation
 * in the correct order for deployment.
 */

const { execSync } = require('child_process');
const { existsSync, mkdirSync } = require('fs');
const { join } = require('path');

function runCommand(command: string, description: string) {
  console.log(`🔧 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed successfully`);
  } catch (error) {
    console.error(`❌ ${description} failed:`, error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

function main() {
  console.log('🚀 Starting build and documentation process...\n');

  // Ensure docs directory exists
  const docsDir = join(process.cwd(), 'docs');
  const apiDocsDir = join(docsDir, 'api');

  if (!existsSync(docsDir)) {
    mkdirSync(docsDir, { recursive: true });
  }

  if (!existsSync(apiDocsDir)) {
    mkdirSync(apiDocsDir, { recursive: true });
  }

  // Step 1: Run tests
  runCommand('npm run test:prod', 'Running production tests');

  // Step 2: Build the library
  runCommand('npm run build', 'Building library bundles');

  // Step 3: Generate API documentation
  runCommand('npx typedoc --entryPoints src/algorithmsts.ts src/core/index.ts src/data-structures/index.ts src/algorithms/index.ts src/graphs/index.ts src/performance/index.ts src/types/index.ts src/compatibility/index.ts --out docs/api --name "Algorithmsts API Documentation" --includeVersion --excludePrivate --excludeProtected --excludeInternal --hideGenerator --readme README.md --theme default --githubPages --gitRevision main --skipErrorChecking', 'Generating API documentation');

  console.log('\n🎉 Build and documentation process completed successfully!');
  console.log('📦 Library bundles are in the dist/ directory');
  console.log('📚 API documentation is in the docs/api/ directory');
}

// Run the script
main();
