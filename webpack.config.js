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
        outputPath: PATHS.build,
        contentBase: 'public',
        headers: { "Access-Control-Allow-Origin": "*" },
        //access-control-allow-origin: http://localhost:8080
        port: 8080,
        // // Send API requests on localhost to API server get around CORS.
        // proxy: {
        //     '/api': {
        //         target: {
        //             host: "www.google.com",
        //             protocol: 'https:',
        //             secure: false,
        //             port: 80
        //         },
        //         ignorePath: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
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