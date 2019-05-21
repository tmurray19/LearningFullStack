const path = require('path');

module.exports = {
    // Start from index file
    entry: './src/index.js',
    // Bundle all modules into bundle.js under public
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                // run babel loader on all js files
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
