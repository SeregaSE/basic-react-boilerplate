import path from 'path';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import common from './webpack.common';

export default merge(common, {
    mode: 'production',

    entry: {
        bundle: './src/index.js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['build']),
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash].css',
        }),
    ],

    output: {
        filename: '[name].[chunkhash].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
    },
});
