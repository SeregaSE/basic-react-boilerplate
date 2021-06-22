import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { ENTRY_POINT, OUTPUT_PATH, TEMPLATE_PATH, TEMPLATE_TITLE } from './options';

export default {
    resolve: {
        alias: {
            components: path.resolve(__dirname, '../src/components/'),
            theme: path.resolve(__dirname, '../src/theme/'),
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', '.json'],
    },

    entry: {
        main: ENTRY_POINT,
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules)/,
                include: path.resolve(__dirname, '../src'),
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(svg|png|jpe?g|webp|avif|gif|woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                },
            },
        ],
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: TEMPLATE_TITLE,
            template: TEMPLATE_PATH,
        }),
    ],

    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

    output: {
        path: OUTPUT_PATH,
        filename: '[name].[contenthash].js',
    },
};
