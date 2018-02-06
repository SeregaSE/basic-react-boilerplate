const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    entry: {
        vendors: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'redux-saga',
        ],
        bundle: './src/index.js',
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint-loader',
                options: {
                    failOnError: true,
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    filename: 'style_[hash].css',
                    use: [
                        'css-loader?modules&localIdentName=[hash:base64:5]',
                        'resolve-url-loader',
                    ],
                    fallback: 'style-loader',
                }),
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    filename: 'style_[hash].css',
                    use: [
                        'css-loader?modules&localIdentName=[hash:base64:5]',
                        'resolve-url-loader',
                        'sass-loader?sourceMap',
                    ],
                    fallback: 'style-loader',
                }),
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new CleanWebpackPlugin(['build']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
        }),
        new UglifyJSPlugin(),
        new ExtractTextPlugin({
            filename: 'css/style_[hash].css',
        }),
    ],

    output: {
        filename: '[name].[chunkhash].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
    },
});
