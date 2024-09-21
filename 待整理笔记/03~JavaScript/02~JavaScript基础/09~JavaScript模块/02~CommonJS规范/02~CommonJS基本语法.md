
## CommonJS基本语法
1. 导出模块：`module.exports = ` 或 `exports.xxx = `
2. 导入模块：`require(xxx)`, 如果是第三方模块，xxx为模块名；如果是自定义模块，xxx为模块文件路径

> 每个模块内部，module变量代表当前模块; module.exports 是对外的接口属性；加载该模块，就是加载该模块的`module.exports`属性

```js
// example.js
let x = 5;
let add = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.add = add;

// main.js
let example = require('./example.js');
console.log(example.x); // 5
console.log(example.addX(1)); // 6
```