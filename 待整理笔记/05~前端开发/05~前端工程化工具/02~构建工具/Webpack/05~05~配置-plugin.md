
## plugin
plugins 用于扩展webpack的功能, plugins 是一个数组，数组中的每项都是一个plugin实例

```js
// === array

plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    ...
  })
]
```