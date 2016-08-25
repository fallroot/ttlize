module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'ttlize.js',
        library: 'ttlize',
        libraryTarget: 'umd',
        path: './build'
    },
    module: {
        loaders: [
            {
                exclude: ['node_modules', 'build', 'test'],
                loader: 'babel',
                test: /\.js$/
            }
        ]
    }
};
