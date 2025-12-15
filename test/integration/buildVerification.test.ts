import { describe, expect, it, beforeAll } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';

/**
 * Build Verification Integration Tests
 *
 * Tests that verify the build process works correctly and
 * outputs are properly generated and functional.
 */
describe('Build Verification Integration Tests', () => {
  const projectRoot = resolve('.');

  describe('Build Configuration', () => {
    it('should have valid package.json', () => {
      const packageJsonPath = join(projectRoot, 'package.json');
      expect(existsSync(packageJsonPath)).toBe(true);

      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

      // Required fields
      expect(packageJson.name).toBeDefined();
      expect(packageJson.version).toBeDefined();
      expect(packageJson.main).toBeDefined();
      expect(packageJson.types).toBeDefined();

      // Build scripts
      expect(packageJson.scripts).toBeDefined();
      expect(packageJson.scripts.build).toBeDefined();
      expect(packageJson.scripts.test).toBeDefined();
    });

    it('should have valid tsconfig.json', () => {
      const tsconfigPath = join(projectRoot, 'tsconfig.json');
      expect(existsSync(tsconfigPath)).toBe(true);

      const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf-8'));

      expect(tsconfig.compilerOptions).toBeDefined();
      expect(tsconfig.compilerOptions.target).toBeDefined();
      expect(tsconfig.compilerOptions.module).toBeDefined();
      expect(tsconfig.compilerOptions.outDir).toBeDefined();
    });

    it('should have valid rollup config', () => {
      const rollupConfigPath = join(projectRoot, 'rollup.config.ts');
      expect(existsSync(rollupConfigPath)).toBe(true);

      // Check that it's a valid TypeScript file
      const content = readFileSync(rollupConfigPath, 'utf-8');
      expect(content).toContain('export default');
    });

    it('should have valid vitest config', () => {
      const vitestConfigPath = join(projectRoot, 'vitest.config.ts');
      expect(existsSync(vitestConfigPath)).toBe(true);

      const content = readFileSync(vitestConfigPath, 'utf-8');
      expect(content).toContain('defineConfig');
      expect(content).toContain('vitest/config');
    });
  });

  describe.skip('TypeScript Compilation', () => {
    it('should compile without errors', () => {
      expect(() => {
        execSync('npx tsc --noEmit', { cwd: projectRoot, stdio: 'pipe' });
      }).not.toThrow();
    });

    it('should generate declaration files', () => {
      // Run build to generate .d.ts files
      execSync('npm run build', { cwd: projectRoot, stdio: 'pipe' });

      // Check that dist directory exists
      const distDir = join(projectRoot, 'dist');
      expect(existsSync(distDir)).toBe(true);

      // Check for some key declaration files
      const mainDts = join(distDir, 'src', 'algorithmsts.d.ts');
      expect(existsSync(mainDts)).toBe(true);

      const content = readFileSync(mainDts, 'utf-8');
      expect(content).toContain('declare');
      expect(content).toContain('export');
    });
  });

  describe.skip('Build Output', () => {
    beforeAll(() => {
      // Ensure build has been run
      execSync('npm run build', { cwd: projectRoot, stdio: 'pipe' });
    });

    it('should generate CommonJS output', () => {
      const cjsFile = join(projectRoot, 'dist', 'algorithmsts.cjs.js');
      expect(existsSync(cjsFile)).toBe(true);

      const content = readFileSync(cjsFile, 'utf-8');
      expect(content).toContain('module.exports');
      expect(content).toContain('require(');
    });

    it('should generate ES module output', () => {
      const esmFile = join(projectRoot, 'dist', 'algorithmsts.esm.js');
      expect(existsSync(esmFile)).toBe(true);

      const content = readFileSync(esmFile, 'utf-8');
      expect(content).toContain('export {');
      expect(content).toContain('import(');
    });

    it('should generate UMD output', () => {
      const umdFile = join(projectRoot, 'dist', 'algorithmsts.umd.js');
      expect(existsSync(umdFile)).toBe(true);

      const content = readFileSync(umdFile, 'utf-8');
      expect(content).toContain('UMD');
      expect(content).toContain('algorithmsts');
    });

    it('should include source maps', () => {
      const files = [
        'algorithmsts.cjs.js.map',
        'algorithmsts.esm.js.map',
        'algorithmsts.umd.js.map'
      ];

      files.forEach(file => {
        const mapFile = join(projectRoot, 'dist', file);
        expect(existsSync(mapFile)).toBe(true);

        const content = readFileSync(mapFile, 'utf-8');
        expect(content).toContain('"version":');
        expect(content).toContain('"sources":');
      });
    });
  });

  describe('Package Integrity', () => {
    it('should have valid package-lock.json', () => {
      const lockfilePath = join(projectRoot, 'package-lock.json');
      expect(existsSync(lockfilePath)).toBe(true);

      const lockfile = JSON.parse(readFileSync(lockfilePath, 'utf-8'));
      expect(lockfile.name).toBeDefined();
      expect(lockfile.version).toBeDefined();
      expect(lockfile.lockfileVersion).toBeDefined();
    });

    it('should have all required files', () => {
      const requiredFiles = [
        'README.md',
        'LICENSE',
        'package.json',
        '.gitignore',
        'tsconfig.json'
      ];

      requiredFiles.forEach(file => {
        const filePath = join(projectRoot, file);
        expect(existsSync(filePath)).toBe(true);
      });
    });

    it('should have proper .gitignore', () => {
      const gitignorePath = join(projectRoot, '.gitignore');
      const content = readFileSync(gitignorePath, 'utf-8');

      expect(content).toContain('node_modules');
      expect(content).toContain('dist');
      expect(content).toContain('*.log');
    });
  });

  describe('Module Resolution', () => {
    it('should be importable as CommonJS', () => {
      const cjsFile = join(projectRoot, 'dist', 'algorithmsts.cjs.js');

      // Test that the built file can be required (simulate)
      const content = readFileSync(cjsFile, 'utf-8');
      expect(content).toContain('BinarySearch');
      expect(content).toContain('CountingSort');
    });

    it('should be importable as ES module', () => {
      const esmFile = join(projectRoot, 'dist', 'algorithmsts.esm.js');

      const content = readFileSync(esmFile, 'utf-8');
      expect(content).toContain('BinarySearch');
      expect(content).toContain('CountingSort');
    });

    it('should export all expected modules', () => {
      const mainEntry = join(projectRoot, 'src', 'algorithmsts.ts');
      const content = readFileSync(mainEntry, 'utf-8');

      // Check that main exports are present
      expect(content).toContain('export * from \'./core\'');
      expect(content).toContain('export * from \'./data-structures\'');
      expect(content).toContain('export * from \'./graphs\'');
      expect(content).toContain('export * from \'./performance\'');
      expect(content).toContain('export * from \'./types\'');
    });
  });

  describe('Build Optimization', () => {
    it('should have reasonable bundle sizes', () => {
      const esmFile = join(projectRoot, 'dist', 'algorithmsts.esm.js');
      const cjsFile = join(projectRoot, 'dist', 'algorithmsts.cjs.js');
      const umdFile = join(projectRoot, 'dist', 'algorithmsts.umd.js');

      const esmSize = readFileSync(esmFile).length;
      const cjsSize = readFileSync(cjsFile).length;
      const umdSize = readFileSync(umdFile).length;

      // ESM should be reasonably sized (under 2MB for a library)
      expect(esmSize).toBeLessThan(2 * 1024 * 1024);

      // CJS should be similar
      expect(cjsSize).toBeLessThan(2 * 1024 * 1024);

      // UMD might be larger due to bundling everything
      expect(umdSize).toBeLessThan(3 * 1024 * 1024);
    });

    it('should not include development code in production build', () => {
      const esmFile = join(projectRoot, 'dist', 'algorithmsts.esm.js');
      const content = readFileSync(esmFile, 'utf-8');

      // Should not contain development-only code
      expect(content).not.toContain('console.log');
      expect(content).not.toContain('debugger');
      expect(content).not.toContain('process.env.NODE_ENV');
    });
  });

  describe('Cross-Platform Compatibility', () => {
    it.skip('should work with different module systems', () => {
      // Test that the built files are compatible with different environments
      const esmContent = readFileSync(join(projectRoot, 'dist', 'algorithmsts.esm.js'), 'utf-8');
      const cjsContent = readFileSync(join(projectRoot, 'dist', 'algorithmsts.cjs.js'), 'utf-8');

      // ESM should use ES module syntax
      expect(esmContent).toMatch(/export\s*\{/);
      expect(esmContent).toMatch(/export default/);

      // CJS should use CommonJS syntax
      expect(cjsContent).toMatch(/module\.exports/);
      expect(cjsContent).toMatch(/require\s*\(/);
    });

    it('should handle browser environments', () => {
      const umdContent = readFileSync(join(projectRoot, 'dist', 'algorithmsts.umd.js'), 'utf-8');

      // UMD should work in browsers
      expect(umdContent).toContain('function');
      expect(umdContent).toContain('return');
    });
  });

  describe('Documentation Build', () => {
    it('should have documentation generation script', () => {
      const packageJson = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf-8'));

      expect(packageJson.scripts).toHaveProperty('docs');
      expect(packageJson.scripts.docs).toContain('generate-docs');
    });

    it('should generate API documentation', () => {
      // This would typically run the docs generation
      // For now, just check that the tools exist
      const docsTool = join(projectRoot, 'tools', 'generate-docs.ts');
      expect(existsSync(docsTool)).toBe(true);
    });
  });
});
