watch参考文档： https://webpack.js.org/configuration/watch/#watch

1. 每次都npm run build 很麻烦
2. 每次npm run dev 又不会产生实体文件


`webpack.config.js`设置 watch 为`true`

在第一次build，webpack会继续watch文件的变化, 当文件发生变化，响应会继续改变实体文件

```js
watch: true,
watchOptions: {
  aggregateTimeout: 300, // 文件改变rebuild之前的延迟
  poll: 1000, // 每秒检查文件是否变化
  ignored: /node_modules/ // 不需要监控的文件
},

ignored或者可以是数组：
ignored: ['files/**/*.js', 'node_modules']
```

