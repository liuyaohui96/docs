
## Entry
Entry 指示webpack的起点模块，可以指定一个或者多个entry

简单规则：每个 HTML 页面都有一个入口起点。
* 单页应用(SPA)：一个入口起点
* 多页应用(MPA)：多个入口起点。

## 单个入口
```js
// === entry: string|Array<string>
entry: './path/to/my/entry/file.js'

// 是以下对象写法的简写
const config = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
```

## 对象语法配置多个入口
```js
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
```

## entry的上下文配置
context属性配置入口文件的基础目录

```js
// === 默认使用当前项目的根目录
context: path.resolve(__dirname, "app") // === 自定义入口文件基础目录
```

## 动态entry
```js
entry: () => './demo'
entry: () => new Promise((resolve) => resolve(['./demo', './demo2']))
```