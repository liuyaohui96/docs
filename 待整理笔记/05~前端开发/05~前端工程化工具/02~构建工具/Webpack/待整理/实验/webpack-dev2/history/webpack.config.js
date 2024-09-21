const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 多入口
  entry: {
    index: './src/index.js',
    other: './src/other.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'other.html',
      chunks: ['other']
    })
  ]
};
