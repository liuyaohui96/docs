
## 如何使用PostCSS
文档参考：https://github.com/postcss/postcss#usage
1. astroturf in Webpack
2. postcss-loader in Webpack
3. gulp（略）
4. 浏览器(略)

## astroturf in Webpack
```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'astroturf/loader'],
      }
    ]
  }
}

// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
```

## postcss-loader in Webpack
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}

// postcss.config.js
module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer')
  ]
}
```