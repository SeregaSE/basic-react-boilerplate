module.exports = (api) => {
    api.cache(() => process.env.NODE_ENV);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    corejs: '^3.9.1',
                    useBuiltIns: 'usage',
                },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
        ],

        plugins: [
            '@babel/plugin-transform-runtime',
            api.env('development') && 'react-refresh/babel',
        ].filter(Boolean),
    };
};
