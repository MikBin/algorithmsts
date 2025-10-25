const js = require('@eslint/js');

module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                ecmaVersion: 6,
                sourceType: 'module'
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
            ]
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
            '**/*.md'
        ]
    }
];
