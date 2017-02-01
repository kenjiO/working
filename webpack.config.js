'use strict';

var write = require('write-file-webpack-plugin');

const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'public'),
};

const common = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: 'js/bundle.js',
        sourceMapFilename: "js/bundle.map"
    },
    devtool: '#source-map',
    devServer: {
        outputPath: PATHS.build
    },
    plugins: [
        new WriteFilePlugin()
    ],
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}

module.exports = function(env) {
  console.log('********** env is ', env);
  return common;
};