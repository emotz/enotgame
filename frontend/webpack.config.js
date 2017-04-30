const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './lib/main.js',
    output: {
        filename: './dist/bundle.js',
        library: 'engine'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './static', to: './dist' }
        ])
    ]
}