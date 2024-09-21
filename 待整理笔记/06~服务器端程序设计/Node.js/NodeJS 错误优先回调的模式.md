NodeJS 错误优先回调的模式有什么优势？

```js
fs.readFile(filePath, function(err, data) {
  if (err) {
    // 处理错误，return 在这里非常重要，因此执行在这里终止
    return console.log(err)
  }
  // 使用 data 对象
  console.log(data)
})
```

更容易知道是否遇到了错误,将使得代码维护变得更容易