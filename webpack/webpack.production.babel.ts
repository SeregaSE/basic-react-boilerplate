import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import merge from 'webpack-merge';
import base from './webpack.base';

export default merge(base, {
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.scss$/,
                // eslint-disable-next-line
                // @ts-ignore
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64:5]',
                                exportLocalsConvention: 'camelCase',
                            },
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        // eslint-disable-next-line
        // @ts-ignore
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],

    optimization: {
        // eslint-disable-next-line
        // @ts-ignore
        minimizer: ['...', new CssMinimizerPlugin()],
    },

    output: {
        // eslint-disable-next-line
        // @ts-ignore
        clean: true,
    },
});
