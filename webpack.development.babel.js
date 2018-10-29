/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import common from './webpack.common';

module.exports = merge(common, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './build',
        publicPath: '/',
        hot: true,
        open: true,
        port: 3000,
    },

    entry: {
        bundle: [
            'react-hot-loader/patch',
            'webpack-dev-server/client',
            'webpack/hot/only-dev-server',
            './src/index.js',
        ],
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
    },
});
