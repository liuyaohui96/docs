const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: __dirname + '/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Caching' }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    modules: [__dirname + '/node_modules']
  }
};
