const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-core/register");
require("babel-polyfill");

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/,
          use: [
              'file-loader',
              {
                  loader: 'image-webpack-loader',
                  options: {
                      disable: true, // webpack@2.x and newer
                  },
              },
          ],
      },
        {
          test: /\.css$/,
           use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/',
      publicPath: '/',
      filename: 'index_bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        "filename": "index.html"
      }),
    ],
    devServer: {
      // contentBase: './dist',
      hot: true
    }
  };
