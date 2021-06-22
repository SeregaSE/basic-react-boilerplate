import merge from 'webpack-merge';
import base from './webpack.base';
import { OUTPUT_PATH } from './options';

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
                // @ts-ignore
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
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
    }
});
