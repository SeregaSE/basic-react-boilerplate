module.exports = {
    'extends': [
        'airbnb',
        'plugin:flowtype/recommended',
    ],
    'parser': 'babel-eslint',
    'plugins': [
        'flowtype',
    ],
    'env': {
        'browser': true,
        'node': true,
        'jest': true,
    },
    'rules': {
        'indent': [1, 4],
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'react/jsx-closing-tag-location': 0,
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'import/no-extraneous-dependencies': 0,
    },
};
