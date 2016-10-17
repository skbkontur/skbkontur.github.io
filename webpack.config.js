/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var minify = require('html-minifier').minify;
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var SiteMapGeneratorPlugin = require('./src/plugins/sitemap-generator-plugin');

var production = process.env.NODE_ENV == 'production';

function getFileNameTemplate(ext) {
    return production ? '[name].[hash].' + ext + '' : '[name].' + ext + ''
}

var paths = [
    '/',
    '/talks',
    '/articles',
    '/ru/',
    '/ru/talks',
    '/ru/articles',
    '/en',
];

module.exports = {
    entry: {
        'index': [
            'babel-polyfill',
            'moment/locale/ru',
            './src/client.js'
        ],
        'server': [
            'babel-polyfill',
            'moment/locale/ru',
            './src/server.js'
        ],
    },
    output: {
        path: 'dist',
        publicPath: '/',
        filename: getFileNameTemplate('js'),
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.ejs$/,
                loader: 'ejs',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: [
                    'classnames',
                    production
                        ? ExtractTextPlugin.extract('style', 'css!postcss!less')
                        : ExtractTextPlugin.extract('style', 'css?localIdentName=[name]-[local]-[hash:base64:3]!postcss!less')
                ],
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf|gif|png|jpg)$/,
                exclude: /node_modules/,
                loader: 'file',
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: /retail-ui/,
            },
            {
                test: /\.less$/,
                include: /retail-ui/,
                loaders: [
                    'classnames',
                    production
                        ? ExtractTextPlugin.extract('style', 'css!postcss!less')
                        : ExtractTextPlugin.extract('style', 'css?localIdentName=[name]-[local]-[hash:base64:3]!postcss!less')
                ],
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf|gif|png)$/,
                include: /retail-ui/,
                loader: 'file',
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        alias: {
            'talks-image-responsive': 'responsive?sizes[]=80&sizes[]=400',
        }
    },
    postcss: [ autoprefixer({ browsers: ['not ie < 10'] }) ],
    plugins: [
        new webpack.ProvidePlugin({
            _: "lodash"
        }),
        new ExtractTextPlugin(getFileNameTemplate('css')),
        new StaticSiteGeneratorPlugin('server', paths),
        new CompressionPlugin({
            asset: "[path]",
            algorithm: function(buffer, opts, callback) {
                callback(null, minify(buffer.toString('utf8'), {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    collapseInlineTagWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: false,
                    minifyJS: true,
                }));
            },
            test: /\.html$/,
            threshold: 1,
            minRatio: 1
        }),
        new SiteMapGeneratorPlugin(
            'http://tech.skbkontur.ru',
            paths.map(function (path) {
                return {
                    path: path,
                    changefreq: 'daily',
                    priority: 0.6,
                };
            })),
    ],
};

if (production) {
    module.exports.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }));
}
else {
    module.exports.entry.index.unshift("webpack-dev-server/client?http://localhost:8080/");
}
