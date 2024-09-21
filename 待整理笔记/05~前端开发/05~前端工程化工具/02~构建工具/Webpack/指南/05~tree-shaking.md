## tree shaking
tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)

```js
// === webpack4 中如果
mode: 'development';
/*
仅在mode: development 指定时没有被使用的代码也会被引入
*/


// 启用 生产模式，或者不启用模式利用 If not set, webpack sets production as the default value for mode
mode: 'production';

```
## sideEffects
有些未被引入代码，我们也不能鲁莽的删除它，通过 package.json 的 "sideEffects" 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分
```js
// package.json
/*
简单地将该属性标记为 false，来告知 webpack，它可以安全地删除未用到的 export 导出
*/
{
  "name": "your-project",
  "sideEffects": false
}

// 如果你的代码确实有一些副作用，那么可以改为提供一个数组
{
  "name": "your-project",
  "sideEffects": [
    "./src/some-side-effectful-file.js",
    "*.css"
  ]
}
```