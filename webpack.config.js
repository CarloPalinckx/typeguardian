const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const stats = {
    chunks: false,
    assets: false,
    modules: false,
    version: false,
    hash: false,
    entrypoints: false,
    builtAt: false,
};

module.exports = {
    mode: 'development',
    entry: './src',
    devtool: 'source-map',
    stats,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/dist/',
    },
    devServer: {
        stats,
        port: 1337,
        https: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            checkSyntacticErrors: true,
            workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
        }),
        new FriendlyErrorsWebpackPlugin(),
    ],
};
