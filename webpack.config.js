var webpack = require('webpack');
var nodeENV = process.nodeENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry: './app.js',
    output: {
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
        })
    ]
};