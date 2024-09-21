
## Symbol.isConcatSpreadable
JS在数组上使用`concat`方法将两个数组连接在一起。

JS规范要求concat的数组类型参数自动分离为各个子项
```js
let colors1 = ['red', 'green'];
let colors2 = colors1.concat(['blue', 'black'], 'brown');

console.log(colors2.length); // 5
console.log(colors2); // ["red","green","blue","black","brown"
```

`Symbol.isConcatSpreadable` 属性是一个boolean值，表示concat参数对象拥有以下特征，需要被分离为各个子项：
1. 参数对象拥有length属性
2. 参数对象是数值类型键（即数组下标）

> 可以设置数组的子类的`Symbol.isConcatSpreadable`属性为false，用于在concat调用时避免项目分离

## concat调用参数对象表现得与数组一致
```js
// 参数对象拥有length属性，参数对象是数值类型键
// 编写Symbol.isConcatSpreadable 属性
let collection = {
  0: 'Hello',
  1: 'world',
  length: 2,
  [Symbol.isConcatSpreadable]: true
};

let messages = ['Hi'].concat(collection);

console.log(messages.length); // 3
console.log(messages); // ["Hi","Hello","world"]
```