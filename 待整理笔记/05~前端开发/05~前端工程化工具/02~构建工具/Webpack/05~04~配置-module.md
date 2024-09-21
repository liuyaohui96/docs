
## module
module 配置处理处理不同类型的模块

## module.rules
module.rules 通常用于配置loader, 它是一个数组，每一项都是一个对象，每个对象可以配置以下属性
* 条件匹配属性: test | include | exclude
* 应用规则属性： use 数组 从后往前应用一组loader
* 重置顺序属性： enforce 默认解析loader从右往左执行解析，enfore可以配置一个loader放在最前或者最后，`enforce: post`将loader解析放在最后，`enforce:pre`将该loader放在最前面解析
```js
// === array
module: {
  rules: [
    {
      test: '.js$',
      use: ['babel-loader'],
      // 只包含src目录下的js文件
      include: __dirname + '/src'
    },
    {
      test: '.css$',
      use: [style - loader, 'css-loader', 'sass-loader'],
      //不包含node_modules下的文件
      exclude: __dirname + '/node_modules'
    }
  ];
}
```

## module.noParse
防止 webpack 解析那些任何与给定正则表达式相匹配的文件, 注意忽略的文件一定不含有`import | require | define`等导入机制，常用于忽略大型library，提高构建的性能
```js
// === noParse: RegExp | [RegExp] | function（从 webpack 3.0.0 开始）

// 从 webpack 3.0.0 开始
noParse: function(content) {
  return /jquery|lodash/.test(content);
}
```