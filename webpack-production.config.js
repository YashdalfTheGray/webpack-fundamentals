const devConfig = require('./webpack.config.js');
const webpackStrip = require('strip-loader');

const stripLoader = {
    test: [/\.es6$/, /\.js$/],
    exclude: /node_modules/,
    loader: webpackStrip.loader('console.log')
};

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;
