'use strict';

const path = require('path');
const root = path.join(__dirname, '..');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin()
    ],

    entry: {
        main: path.join(root, 'src', 'main')
    },

    output: {
        filename: 'bundle.js',
        path: path.join(root, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            }
        ]
    },

    devServer: {
        overlay: true,
    }
};
