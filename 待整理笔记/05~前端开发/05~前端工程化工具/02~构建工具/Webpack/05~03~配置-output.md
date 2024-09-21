
## output
output 用于控制webpack  如何向硬盘写入编译文件, 即使可以存在多个入口起点，但只指定一个输出配置

```js
// path 指定输出的目录
// filename 指定输出的文件名
output: {
  path: __dirname + '/dist',
  filename: 'bundle.js'
}
```

## 多个入口起点的输出
```js
/*
占位符保证多个入口文件的名称唯一
filename: "[name].bundle.js"  以相应入口文件作为名称
filename: "[name].[hash].bundle.js"  以内部的chunk ID作为名称
filename: "[name].[hash].bundle.js" 使用每次构建过程中，唯一的 hash 生成
filename: "[chunkhash].bundle.js" 使用基于每个 chunk 内容的 hash
*/
output: {
  filename: '[name].js',
  path: __dirname + '/dist'
}
```

## output.publicPath
配置发布到线上资源的URL前缀，默认是空值。当将资源托管到 CDN 时需要是使用到

```js
// === 例子
path: path.resolve(__dirname, "public/assets"),
publicPath: "https://cdn.example.com/assets/"
```

## output.chunkFilename
文件名需要在 runtime 根据 chunk 发送的请求去生成。因此，需要在 webpack runtime 输出 bundle 值时，将 chunk id 的值对应映射到占位符(如 [name] 和 [chunkhash])