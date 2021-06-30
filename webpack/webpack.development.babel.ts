import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import merge from 'webpack-merge';
import { OUTPUT_PATH } from './options';
import base from './webpack.base';

export default merge(base, {
    /* In webpack-dev-server@3, there is a bug causing it to mis-judge the runtime environment when the Webpack 5 browserslist target is used.
       It then fallbacks to thinking a non-browser target is being used, in turn skipping injection of the HMR runtime,
       and thus breaking downstream integrations like this plugin.
       To overcome this, you can conditionally apply the browserslist only in production modes in your Webpack configuration: */
    target: 'web',

    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: OUTPUT_PATH,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                // eslint-disable-next-line
                // @ts-ignore
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]',
                                exportLocalsConvention: 'camelCase',
                            },
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        // eslint-disable-next-line
        // @ts-ignore
        new ReactRefreshWebpackPlugin(),
    ],
});
