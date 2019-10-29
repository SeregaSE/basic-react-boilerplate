const path = require('path');
const merge = require('webpack-merge') ;
const base = require('./base') ;

module.exports = merge(base, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, '../build'),
        compress: true,
        open: true,
        port: 3000,
        historyApiFallback: true,
        watchOptions: {
            poll: true
        }
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
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]' 
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            }
        ]
    }
});
