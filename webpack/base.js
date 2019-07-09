const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'bunlde': path.resolve(__dirname, '../src/index.js')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(svg|png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/,
                exclude: path.resolve(__dirname, '../static'),
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },

    plugins: [
        new CopyPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: path.resolve(__dirname, '../build')
            }
        ]),
        new HTMLWebpackPlugin({
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                charset: 'utf-8'
            },
            title: 'Basic React Boilerplate',
            template: path.resolve(__dirname, '../src/template.html')
        })
    ],

    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].[contenthash].js'
    }
};
