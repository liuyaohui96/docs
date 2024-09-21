
参考文档：https://webpack.js.org/configuration/devtool/#devtool



## devtool
devtool 配置webpack如额生成source map，默认是false
```js
devtool:'none' // 在开发者模式下，默认开启sourcemap,将其关闭
devtool:'source-map' // 开启映射打包会变慢
devtool:'inline-source-map'// 不单独生成.map文件，会将生成的映射文件以base64的形式插入到打包后的js文件的底部
devtool:'cheap-inline-source-map'// 代码出错提示不用精确显示第几行的第几个字符出错，只显示第几行出错，会提高一些性能
devtool:'cheap-module-inline-source-map'// 不仅管自己的业务代码出错，也管第三方模块和loader的一些报错
devtool:'eval'// 执行效率最快，性能最好，但是针对比较复杂的代码的情况下，提示内容不全面
devtool: 'cheap-module-eval-source-map'// 在开发环境推荐使用，提示比较全，打包速度比较快
devtool: 'cheap-module-source-map'// 在生产环境中推荐使用，提示效果会好一些
```

## 对于开发环境
对于开发环境，建议使用以下选项
1. eval：每个模块都使用 eval() 执行，构建速度非常快，缺点是映射到转换后的代码，而不是映射到原始代码
2. eval-source-map：每个模块使用 eval() 执行，行数能够正确映射，因为会映射到原始代码中
3. cheap-eval-source-map：类似 eval-source-map，每个模块使用 eval() 执行。这是 "cheap(低开销)" 的 source map，因为它没有生成列映射(column mapping)，只是映射行数

## 对于生产环境
1. none：（省略 devtool 选项） - 不生成 source map。这是一个不错的选择
2. source-map：整个 source map 作为一个单独的文件生成。它为 bundle 添加了一个引用注释，以便开发工具知道在哪里可以找到它。


