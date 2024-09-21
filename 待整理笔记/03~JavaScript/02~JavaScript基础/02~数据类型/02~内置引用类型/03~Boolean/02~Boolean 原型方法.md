
## Boolean 原型方法
```js
// 根据对象的值来返回一个字符串："true" 或 "false"
// 覆盖了 Object.prototype.toString() 方法
Boolean.prototype.toString()

// 返回Boolean对象的原始值
// 覆盖了 Object.prototype.valueOf() 方法
Boolean.prototype.valueOf()
```