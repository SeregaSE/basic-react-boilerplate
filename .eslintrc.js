module.exports = {
    "env": {
        es2021: true,
        "browser": true,
    },

    "extends": [
        "prettier",
        "prettier/prettier",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],

    "parser": "@typescript-eslint/parser",

    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
        "sourceType": "module",
    },

    "plugins": [
        '@typescript-eslint',
        'react',
        "react-hooks",
        'import',
        "prettier",
    ],

    "rules": {
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: ['error', { properties: 'never' }],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'dot-location': ['error', 'property'],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'func-call-spacing': ['error', 'never'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'max-len': ['error', { code: 80, ignoreStrings: true }],
        'new-cap': ['error', { newIsCap: true, capIsNew: false }],
        'new-parens': 'error',
        'no-empty': ['error'],
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-unmodified-loop-condition': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var', 'block-like', 'function', 'case'], next: '*' },
            { blankLine: 'always', prev: 'default', next: 'case' },
            { blankLine: 'always', prev: '*', next: ['const', 'block-like'] },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'parent', 'internal', 'sibling', 'index', 'object'],
                pathGroups: [
                    {
                        pattern: 'preact',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },

    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {},
        },
    },
};
