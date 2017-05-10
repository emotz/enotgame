const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './lib/main.js',
    output: {
        filename: './dist/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            },
        ],
    },
    resolve: {
        alias: {
            game: path.resolve(__dirname, '../game/lib/'),
        },
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './static',
                to: './dist',
            },
        ]),
    ],
};
