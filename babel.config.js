module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                loose: false
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
        [
            'transform-react-remove-prop-types',
            {
                removeImport: true
            }
        ]
    ]
};
