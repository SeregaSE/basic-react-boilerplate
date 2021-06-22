import merge from 'webpack-merge';
import { OUTPUT_PATH } from './options';
import base from './webpack.base';

export default merge(base, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: OUTPUT_PATH,
        // historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                // eslint-disable-next-line
                // @ts-ignore
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64:5]',
                                exportLocalsConvention: "camelCase",
                            },
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
});
