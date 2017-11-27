'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '/src'),
    app: path.join(__dirname, './index.js')
};

// inject environment specific configuation into build
const envConfig = require('./env.js');
console.log('envConfig=' + JSON.stringify(envConfig));
// encode config values for DefinePlugin injection
let encodedEnvConfig = {};
for (let key in envConfig) {
    if (envConfig.hasOwnProperty(key)) {
        encodedEnvConfig[key] = JSON.stringify(envConfig[key])
    }
}

var config = {
    devtool: 'eval-cheap-module-source-map',
    entry: {
        bundle: PATHS.app
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '.'),
        sourceMapFilename: '[file].map',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            // alias all third party dependencies to this module
            "react": path.resolve('./node_modules/react'),
            "react-autosuggest": path.resolve('./node_modules/react-autosuggest'),
            "normalize-css": path.resolve('./node_modules/normalize-css'),
            "font-awesome": path.resolve('./node_modules/font-awesome'),
            "react-dom": path.resolve('./node_modules/react-dom'),
            "react-redux": path.resolve('./node_modules/react-redux'),
            "react-router": path.resolve('./node_modules/react-router'),
            "react-router-redux": path.resolve('./node_modules/react-router-redux'),
            "redux": path.resolve('./node_modules/redux'),
            "redux-thunk": path.resolve('./node_modules/redux-thunk'),
            "bootstrap": path.resolve('./node_modules/bootstrap'),
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': encodedEnvConfig
        }),
        new InterpolateHtmlPlugin({
            TITLE: 'National Fitness Foundation',
            DESCRIPTION: 'Frontend Template'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './public/index.html',
            attrs: ['img:src', 'link:href']
        }),
        new CopyWebpackPlugin([
            {from: './src/images', to: 'img'},
        ]),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                        ]
                    })
                ]
            }
        }),
        // This is necessary to emit hot updates (currently CSS only):
        new webpack.HotModuleReplacementPlugin(),
    ],
    performance: {
        // Turn off performance hints during development because we don't do any
        // splitting or minification in interest of speed. These warnings become
        // cumbersome.
        hints: false
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.sass/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test: /\.(png|jpeg|jpg|gif)(\?\S*)?$/,
                loader: 'url-loader?limit=500000&name=img/[name].[ext]'
            },
            {
                test: /\.(svg)(\?\S*)?$/,
                loader: 'url-loader?limit=500000&name=graphics/[name].[ext]'
            },
            {
                test: /\.eot(\?\S*)?$/,
                loader: 'url-loader?limit=500000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
            },
            {
                test: /\.woff2(\?\S*)?$/,
                loader: 'url-loader?limit=500000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
            },
            {
                test: /\.woff(\?\S*)?$/,
                loader: 'url-loader?limit=500000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            },
            {
                test: /\.ttf(\?\S*)?$/,
                loader: 'url-loader?limit=500000&mimetype=application/font-ttf&name=fonts/[name].[ext]'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: {
            index: '/index.html',
            disableDotRule: true
        },
        contentBase: './src/',
        publicPath: '/',
        // Enable gzip compression of generated files.
        compress: true,
        hot: true,
        inline: true,
        watchOptions: {
            ignored: /node_modules/,
        },
        stats: {
            colors: true,
            assets: true,
            chunks: false
        },
        host: 'localhost', // Defaults to `localhost`
        port: 3005
    },
};

module.exports = config;

