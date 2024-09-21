# 调式
1. 高级语法转换为低级语法
`npm i -D babel-loader @babel/core @babel/preset-env`


2. 假如出现了错误，希望出现源码映射
`webpack.config.js` 中的devtool属性用于增加映射文件，帮我们调试文件
```js
devtool: 'source-map',
```
source-map 即源码映射，生成一个sourcemap文件，出错了会标识当前报错的列和行

```js
devtool: 'eval-source-map',
```
这个不会产生单独的文件，会显示行和列

```js
devtool: 'cheap-module-source-map',
```
不会产生列，是一个独立的映射文件，产生后可以保存起来，不和代码关联起来



```js
devtool: 'cheap-module-eval-source-map',
```
不会产生文件，集成到打包的文件，不会产生列（点击可以定位到那里）