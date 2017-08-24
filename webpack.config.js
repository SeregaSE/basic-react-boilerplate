const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ENV = process.env.ENV || "prod";

module.exports = {
    entry: './src/index.js',

    devtool: 'cheap-module-source-map',

    devServer: {
        contentBase: './build',
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-2']
                    }
                }
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    // use style-loader in development
                    fallback: 'style-loader'
                })
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './images/'
                        }
                    }
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './fonts/'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(ENV),
        }),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'Basic React boilerplate',
            template: './template.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};