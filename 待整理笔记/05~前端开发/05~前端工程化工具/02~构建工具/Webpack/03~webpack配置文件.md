
## webpack.config.js
使用webpack.config.js配置文件设置命令，比起在终端中手动输入大量命令要高效的多

```js
// === 基本的配置命令示例
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};

```