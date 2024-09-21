## watch 和 watchOptions
webpack的监听模式，监听文件的更新，在文件发生变化时重新编译

```js
// 默认监听是关闭的
watch: false;

watchOptions: {
  // 不进行监听的文件夹
  ignored: /node_modules/
  // 监听到变化后指定时间后再执行动作，防止文件更新太快导致重新编译的频率太高
  // 默认为300ms
  aggregateTimeout: 300,
  // 默认每秒询问1000词
  poll: 1000
}
```