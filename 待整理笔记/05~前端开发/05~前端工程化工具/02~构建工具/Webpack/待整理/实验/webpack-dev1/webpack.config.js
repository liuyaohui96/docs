// webpack 是node写出来的
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  //
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true, // 缓存
        parallel: true, // 并发打包
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  mode: 'development', // 模式，production development,默认是production
  entry: './src/index.js', // 入口，从哪里打包
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名, hash, 每次修改都产生新的文件
    path: __dirname + '/dist' // 绝对路径
  },

  // 开发服务器的配置
  devServer: {
    port: 5000,
    progress: true, // 打包记录条
    contentBase: './dist', // 启动的路径
    open: true, // 自动打开浏览器
    compress: true // gzip 压缩
  },

  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 指定模板
      filename: 'index.html', // 打包后的名称
      minify: {
        removeAttributeQuotes: true, // 移除html中的双引号
        collapseWhitespace: true // 移除空格
      },
      hash: true //文件中的引用使用hash引用
    }),

    // mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),

    //webpack.providePlugin
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],

  // 模块配置
  module: {
    // 很多规则
    rules: [
      // css规则
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      // css规则结束
      // less规则
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      // less规则结束
      // Babel Loader 规则
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },

      // 配置expose-loader 暴露jqeury作为全局变量
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      },

      // 配置url-loade
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1, //200k
              outputPath: '/images'
            }
          }
        ]
      },

      // 配置html-loader
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            // attrs: [':data-src']
          }
        }
      }
    ]
  }
};
