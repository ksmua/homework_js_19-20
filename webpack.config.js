'use strict';

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ResolveUrlLoader = require('resolve-url-loader');

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
            {loader: 'css-loader'},
            // {loader: 'resolve-url-loader', options: {sourceMap: true} }
          ]
        })
      },
      
      {
        test: /\.scss$/,
        include: SRC_DIR, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader' }, 
            {loader: 'resolve-url-loader',
             options: {
                absolute: true,
                // root: "/img"
              } 
            }, 
            {loader: 'sass-loader', 
              options: {url: false}
              // options: {sourceMap: true} 
            }
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
              name: '[path][name].[ext]',
              // useRelativePath: true,
              outputPath: "" 
            }
          }
        ]
        
      },

      // {
      //   test: /\.(png|svg|jp?g|gif)$/,
      //   include: SRC_DIR,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         publicPath: '',
      //         name: '[name].[ext]',
      //         outputPath: '/img/',
      //         useRelativePath: true
      //       }  
      //     }
      //     // {
      //     //   loader: 'url-loader?limit=1024&name=../img/[name].[ext]'
      //     // }
      //   ]
      // },
      {
        test: /\.(woff|woff2|otf|ttf|eot)(\?[a-z0-9#=&.]+)?$/,
        include: SRC_DIR,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/fonts/',
            },
          },
        ],
      },
    ]
  },
  resolve: {
    alias: {
      // images: path.join(__dirname, 'src/img')
      images: resolve(__dirname, 'src/img')
    }
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
    contentBase: BILD_DIR,  // New
  },
};