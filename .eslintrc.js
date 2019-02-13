module.exports = {
    'extends': [
        'airbnb',
    ],
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'node': true,
        'jest': true,
    },
    'rules': {
        'indent': [1, 4],
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'react/jsx-closing-tag-location': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    },
};
