const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.ts'],
        rules: {
            ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules
        }
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
        },
        rules: {
            '@typescript-eslint/naming-convention': [
                'warn',
                {
                    selector: 'import',
                    format: ['camelCase', 'PascalCase']
                }
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_'
                }
            ],
            '@typescript-eslint/no-explicit-any': 'off'
        }
    },
    {
        files: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly'
            }
        }
    },
    {
        files: ['**/*.ts'],
        ...require('eslint-config-prettier')
    },
    {
        ignores: [
            'out/',
            'dist/',
            '**/*.d.ts',
            'webview-ui/**',
            'node_modules/',
            'package-lock.json',
            'pnpm-lock.yaml',
            '.DS_Store',
            'vitest.config.ts',
            '**/*.md',
            'docs/',
            'visualization/',
            'tools/'
        ]
    }
];
