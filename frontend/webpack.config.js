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
    }    
}