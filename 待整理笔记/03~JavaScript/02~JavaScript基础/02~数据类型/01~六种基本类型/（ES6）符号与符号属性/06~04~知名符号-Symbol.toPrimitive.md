
## Symbol.toPrimitive
`Symbol.toPrimitive`方法定义在所有常规类型的原型上，规定了在对象转换为基本类型值时发生了什么。

当需要转换时，`Symbol.toPrimitive`被调用，它需要传入一个字符串参数：
1. 参数是 'number' 时，`Smbol.toPrimitive`返回数值
2. 参数是 'string' 时，`Symbol.toPrimitive`返回字符串
3. 参数是 'default' 时，`Symbol.toPrimitive`对返回值没有要求

大部分常规对象，在number模式下：
1. 调用valueOf方法，如果返回一个基本类型值，则返回
2. 否则，调用toString()方法，如果返回值是一个基本类型值，返回它
3. 否则，抛出错误

在字符串模式下：
1. 调用toString方法，如果返回一个基本类型值，则返回
2. 否则，调用valueOf方法，如果返回值是一个基本类型值，返回它
3. 否则，抛出错误

大多数情况下，常规对象的默认模式等价于数值模式（只有Date类型默认使用字符串模式）

## 重写Symbol.toPrimitive
```js
function Temperature(degrees) {
  this.degrees = degrees;
}

Temperature.prototype[Symbol.toPrimitive] = function(hint) {
  switch (hint) {
    case 'string':
      return this.degrees + '\u00b0'; // degrees symbol

    case 'number':
      return this.degrees;

    case 'default':
      return this.degrees + ' degrees';
  }
};

let freezing = new Temperature(32);

console.log(freezing + '!'); // "32 degrees!"
console.log(freezing / 2); // 16
console.log(String(freezing)); // "32°"

```