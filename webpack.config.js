/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

const production = process.env.NODE_ENV == 'production';

function getFileNameTemplate(ext) {
    return production ? '[name].[hash].' + ext + '' : '[name].' + ext + ''
}

module.exports = {
    entry: {
        'index': ['./src/index.js'],
    },
    output: {
        path: 'dist',
        publicPath: '',
        filename: getFileNameTemplate('js'),
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.(c|le)ss$/,
                exclude: /node_modules/,
                loader: production
                    ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
                    : 'style-loader!css-loader!less-loader',
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf|gif|png)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
            }
        ],
    },
    postcss: [ autoprefixer({ browsers: ['not ie < 10'] }) ],
    plugins: [
        new ExtractTextPlugin(getFileNameTemplate('css')),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true
        }),
    ],
};
