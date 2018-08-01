import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Basic React boilerplate',
            template: './template.html',
        }),
    ],
};
