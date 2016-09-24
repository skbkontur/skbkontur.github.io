/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var pages = require('./pages');
var webpack = require('webpack');

var production = process.env.NODE_ENV == 'production';

function getFileNameTemplate(ext) {
    return production ? '[name].[hash].' + ext + '' : '[name].' + ext + ''
}

module.exports = {
    entry: {
        'index': ['./src/index.js'],
    },
    output: {
        path: 'dist',
        publicPath: '/',
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
            },
            {
                test: /\.html$/,
                loader: 'ejs'
            },
        ],
    },
    ejsLoader : {
        variable: 'model',
    },
    postcss: [ autoprefixer({ browsers: ['not ie < 10'] }) ],
    plugins: [
        new ExtractTextPlugin(getFileNameTemplate('css'))
    ],
};

for(var i = 0; i < pages.length; i++) {
    var page = pages[i];
    module.exports.plugins.push(
        new HtmlWebpackPlugin({
            template: './src/views/' + page.template,
            filename: page.target,
            minify: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
            }
        }));
}

