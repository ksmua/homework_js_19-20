'use strict';

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const {resolve} = require('path'),
      SRC_DIR = resolve(__dirname, "src"),
      BILD_DIR = resolve(__dirname, "public");

module.exports = {
  context: SRC_DIR,
  entry: {
    app: "./js/app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: BILD_DIR
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        include: SRC_DIR, 
        use: ExtractTextPlugin.extract({
          publicPath: BILD_DIR,
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {sourceMap: true} }
          ]
        })
      },
      
      {
        test: /\.scss$/,
        include: SRC_DIR, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {sourceMap: true} }, 
            {loader: 'resolve-url-loader', options: {sourceMap: true} }, 
            {loader: 'sass-loader', options: {sourceMap: true} }
          ],
         
        })
      },
      
      {
        test: /\.(png|svg|jp?g|gif)$/,
        include: SRC_DIR,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '',
              name: '[name].[ext]',
              outputPath: 'img',
              useRelativePath: true
            }  
          }
        ]
      },
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
        title: "Webpack test",
        template: './index.html',
    }),
    new ExtractTextPlugin({
      filename: "./styles/app.css",
      disable: false,
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
    
  ],

  devServer: {
    contentBase: SRC_DIR,  // New
  },
};