
##  loaders 应用于最少数的必要模块

为了使得尽可能少的文件被loader处理，可以通过配置include指定哪些文件须要被处理

```js
module: {
  rules: [
    {
      // 只对项目根目录下src目录中的文件进行处理
      test: /\.js$/,
      include: path.resolve(__dirname, "src"),
      loader: "babel-loader"
    }
  ];
}
```