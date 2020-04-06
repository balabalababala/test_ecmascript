/* eslint-disable import/order */
"use strict";

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const publicPath = isProduction ? "" : "/";

  const webpackConfig = {
    stats: {
      publicPath: true,
      chunks: false,
      modules: false,
      children: false,
      entrypoints: false,
      chunkModules: false,
    },

    devtool: isProduction ? false : "source-map",

    // entry: ["./src/es6/async_await/test.js", "./src/es6/import/b.js"],
    entry: ["./src/entry/index.js"],
    // entry: {
    //   import: "./src/es6/import/b.js",
    //   async_await: "./src/es6/async_await/test.js",
    //   decorator: "./src/es7/decorator/index.js",
    // },

    entry: {
      "6": ["./src/entry/6.js"],
      "7": ["./src/entry/7.js"],
    },

    output: {
      path: path.join(__dirname, "dist"),
      publicPath,
      filename: isProduction
        ? "asset/[name].[chunkhash].js"
        : "asset/[name].js",
      chunkFilename: isProduction
        ? "asset/[name].[chunkhash].js"
        : "asset/[name].js",
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: (file) => {
            return /node_modules/.test(file) && !/\.vue\.js/.test(file);
          },
          loader: "babel-loader",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/entry/index.html",
        inject: true,
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: false,
              minifyJS: true,
            }
          : {},
        chunks: [],

        env: isProduction ? "production" : "", // for ejs add script links
      }),
      new HtmlWebpackPlugin({
        filename: "6.html",
        template: "src/entry/6.html",
        inject: true,
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: false,
              minifyJS: true,
            }
          : {},
        chunks: ["6", "runtime", "commons"],

        env: isProduction ? "production" : "", // for ejs add script links
      }),
      new HtmlWebpackPlugin({
        filename: "7.html",
        template: "src/entry/7.html",
        inject: true,
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: false,
              minifyJS: true,
            }
          : {},
        chunks: ["7", "runtime", "commons"],

        env: isProduction ? "production" : "", // for ejs add script links
      }),
      // new CopyWebpackPlugin([
      //   {
      //     from: path.resolve(__dirname, "static"),
      //     to: "./dist",
      //     ignore: [".*"],
      //   },
      // ]),
    ],

    devServer: {
      host: "127.0.0.1",
      port: "8090",
      historyApiFallback: true,
      hot: true,
      overlay: true,
      contentBase: "./",
      stats: "errors-only",
      open: true,
      openPage: "index.html",
      after: () => {
        console.log("end");
      },
    },

    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vuePackage: {
            name: "vue-package",
            test: /[\\/]node_modules\/.*vue/,
            priority: 2,
          },
          vendor: {
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
          },
          default: {
            name: "commons",
            enforce: true,
            minChunks: 2,
          },
        },
      },
      runtimeChunk: "single",
      minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          // uglifyOptions: {
          //   compress: {
          //     // drop_console: true,
          //     drop_debugger: true,
          //     pure_funcs: ['console.log', 'console.info'], // 移除console
          //   },
          //   ecma: 6,
          //   mangle: true,
          //   output: {
          //     beautify: true, // 3.x 要放这里
          //     ascii_only: true,
          //     comments: false, // 是否要注释
          //   },
          // },
          // FIXME:调试用
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: false,
            output: {
              beautify: true, // 3.x 要放这里
              ascii_only: true,
              comments: false, // 是否要注释
            },
          },
          sourceMap: true,
        }),
      ],
    },
  };

  if (!isProduction) {
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return webpackConfig;
};
