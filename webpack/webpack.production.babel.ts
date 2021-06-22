import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import merge from 'webpack-merge';
import base from './webpack.base';

export default merge(base, {
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.css$/,
                // @ts-ignore
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64:5]',
                                exportLocalsConvention: "camelCase"
                            },
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },

    plugins: [
        // @ts-ignore
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],

    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },

    output: {
        // @ts-ignore
        clean: true,
    }
});
