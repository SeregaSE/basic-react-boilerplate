module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                corejs: '^3.9.1',
                useBuiltIns: 'usage'
            }
        ],
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime'
        ]
    ]
};
