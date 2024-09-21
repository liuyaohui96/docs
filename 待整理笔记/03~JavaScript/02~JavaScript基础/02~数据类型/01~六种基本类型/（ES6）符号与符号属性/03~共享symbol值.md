
## 共享symbol值
1. 创建共享符号值，应该使用`Symbol.for()`，而不是Symbol()方法
2. `Symbol.keyFor()` 根据symbol值查找全局符号注册表中的标识符
```js
// Symbol.for 方法接受一个字符串类型作为参数，作为该symbol值的标识符，同时也会成为该symbol值的描述信息
// Symbol.for 方法首先搜索全局symbol注册表，是否存在该标识符的symbol值，如果有，则返回，如果没有，则创建一个新的
let uid = Symbol.for('uid');
let object = {
  [uid]: '12345'
};

console.log(object[uid]); // "12345"
console.log(uid); // "Symbol(uid)"

let uid2 = Symbol.for('uid');

console.log(uid === uid2); // true
console.log(object[uid2]); // "12345"
console.log(uid2); // "Symbol(uid)"


let uid = Symbol.for("uid");
console.log(Symbol.keyFor(uid));    // "uid"

let uid2 = Symbol.for("uid");
console.log(Symbol.keyFor(uid2));   // "uid"
// 只能查找全局符号注册表中的
let uid3 = Symbol("uid");
console.log(Symbol.keyFor(uid3));   // undefined

``