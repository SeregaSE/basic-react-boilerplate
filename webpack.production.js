const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    entry: './src/index.js',

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "eslint-loader",
                options: {
                    failOnError: true,
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    filename: 'style_[hash].css',
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    filename: 'style_[hash].css',
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production"),
        }),
        new CleanWebpackPlugin(['build']),
        new UglifyJSPlugin(),
        new ExtractTextPlugin({
            filename: 'css/style_[hash].css'
        })
    ],

    output: {
        filename: 'bundle_[hash].js',
        publicPath: "/",
        path: path.resolve(__dirname, 'build')
    }
});