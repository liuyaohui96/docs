clean-webpack-plugin文档: 
https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder

copy-webpack-plugin文档：https://webpack.js.org/plugins/copy-webpack-plugin/#root

bannerPlugin文档： https://webpack.js.org/plugins/banner-plugin/#root


1. cleanWebpackPlugin
2. copyWebpackPlugin
3. bannerPlugin(内置的)

# cleanWebpackPlugin
在生成dist目录之前先把它删除，只想看到最新的目录

`npm i -D clean-webpack-plugin`

`webpack.config.js`文件中
```js
const CleanWebpackPlugin = require('clean-webpack-plugin');
plugins: [
+     new CleanWebpackPlugin(),
]
```


# copyWebpackPlugin
有时候希望把一些文件，如文档也拷贝进dist
`npm i -D copy-webpack-plugin`


```js
plugins: [
  new CopyPlugin([
     {from: './doc', to: './'},
  ]),
]

```

# bannerPlugin(webpack内置的)
给js文件加上版权声明所有
```js
new webpack.BannerPlugin({
  banner: 'make by liuyaohui 2019'
})

// 或者使用一些占位符
new webpack.BannerPlugin({
  banner:
    'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
})
```