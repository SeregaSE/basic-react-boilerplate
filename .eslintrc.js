module.exports = {
    root: true,

    env: {
        'browser': true,
        'es6': true
    },

    parserOptions: {
        ecmaFeatures: {
            'jsx': true
        },
        ecmaVersion: 6,
        sourceType: 'module'
    },

    settings: {
        react: {
            version: 'detect'
        }
    },

    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],

    rules: {
        'quotes': ['error', 'single'],
        'comma-dangle': ['error', 'never']
    },

    overrides: [
        {
            files: ['babel.config.js', 'postcss.config.js'],
            env: {
                node: true
            }
        }
    ]
};
