/* eslint-disable import/order */
"use strict";

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  const webpackConfig = {
    stats: {
      publicPath: true,
      chunks: false,
      modules: false,
      children: false,
      entrypoints: false,
      chunkModules: false
    },

    devtool: isProduction ? false : "source-map",

    // entry: ["./src/es6/async_await/test.js", "./src/es6/import/b.js"],
    entry: {
      import: "./src/es6/import/b.js",
      async_await: "./src/es6/async_await/test.js"
    },

    // output: {
    //   path: path.join(__dirname, "out"),
    //   publicPath: "out",
    //   filename: isProduction
    //     ? "asset/[name].[chunkhash].js"
    //     : "asset/[name].js",
    //   chunkFilename: isProduction
    //     ? "asset/[name].[chunkhash].js"
    //     : "asset/[name].js"
    // },

    output: {
      path: path.join(__dirname, "out"),
      publicPath: "out",
      filename: "asset/[name].js",
      chunkFilename: "asset/[name].js"
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: file => {
            return /node_modules/.test(file) && !/\.vue\.js/.test(file);
          },
          loader: "babel-loader"
        }
      ]
    },

    plugins: [],

    optimization: {
      runtimeChunk: "single",

      splitChunks: {
        cacheGroups: {
          commons: {
            name: "commons",
            chunks: "initial",
            minChunks: 2
          }
        }
      },
      minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          // uglifyOptions: {
          //   compress: {
          //     // drop_console: true,
          //     drop_debugger: true,
          //     pure_funcs: ["console.log", "console.info"] // 移除console
          //   },
          //   ecma: 6,
          //   mangle: true,
          //   output: {
          //     beautify: true, // 3.x 要放这里
          //     ascii_only: true,
          //     comments: false // 是否要注释
          //   }
          // },
          // FIXME:调试用
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: false,
            output: {
              beautify: true, // 3.x 要放这里
              ascii_only: true,
              comments: false // 是否要注释
            }
          },
          sourceMap: true
        })
      ]
    }
  };

  return webpackConfig;
};
