
## Array.prototype.map
Array.prototype.map() 迭代数组，筛选数组的项，返回callback返回值为true的数组项组成的新数组

map 方法会给原数组中的每个元素都按顺序调用一次  callback 函数`Array.prototype.map(func)`
```js
// 迭代数组，将callback返回值作为新数组返回
Array.prototype.map(item [, index [, array]])[, thisArg])

// === 例子
// 数组每一项都翻一番
let arr = [1, 2, 3];
let douleArr = arr.map(item => item * 2);
console.log(douleArr); // [ 2, 4, 6 ]

// 将数组中的对象的某个属性抽取出来
let persons = [
  { name: 'liuyaohui', age: 21 },
  { name: 'liuyaohui2', age: 24 }
];

let nameArr = persons.map(person => person.name);
console.log(nameArr); // [ 'liuyaohui', 'liuyaohui2' ]
```