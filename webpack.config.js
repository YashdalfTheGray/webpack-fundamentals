const path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ['./app.js', './utils.js'],
    output: {
        path: path.resolve('build/js'),
        publicPath: '/public/assets/js',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'eslint-loader'
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
};
