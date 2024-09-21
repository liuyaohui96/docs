
## CommonJS模块加载机制
CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

```js
// lib.js
let counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
let counter = require('./lib').counter;
let incCounter = require('./lib').incCounter;

// counter导出以后，通过操作方法改变导入文件的counter，并不能影响已经导入的counter
console.log(counter);  // 3
incCounter();
console.log(counter); // 3

```