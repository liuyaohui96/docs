

## 创建symbol值
使用全局的Symbol函数创建symbol值，Symbol函数前不能使用new命令，否则会报错。可选用一个字符串用于描述。当参数为对象时，将调用对象的toString()方法
```js
// 使用全局的Symbol函数创建symbol值
let firstName = Symbol();
let person = {};
// 创建了symbol类型的属性
person[firstName] = 'liu';
console.log(person[firstName]);

// Symbol 函数还可以接受一个描述字符串作为参数，该字符串不能用来访问对应属性，仅用于方便调试
// 这个描述信息存储在内部属性[[Description]]中，当symbol值的tostring方法被显式或者隐式调用就会读取该值
let firstName = Symbol('first name');
console.log(firstName); // Symbol(first name)

// === 判断symbol 值， 使用typeof
typeof firstName; //'symbol'
```
