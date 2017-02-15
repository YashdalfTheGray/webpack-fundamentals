const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('js'),
    entry: ['./app', './utils'],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
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
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
};
