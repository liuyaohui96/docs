
## Array.prototype.flter
Array.prototype.filter() 迭代数组，筛选数组的项，返回callback返回值为true的数组项组成的新数组

```js
Array.prototype.filter(callback(item [, index[, array]])[, thisArg])

// 例子
let persons = [
  { name: 'liuyaohui1', age: 21 },
  { name: 'liuyaohui2', age: 26 },
  { name: 'liuyaohui3', age: 30 }
];

let filterArr = persons.filter(person => person.age > 25);
// [ { name: 'liuyaohui2', age: 26 },{ name: 'liuyaohui3', age: 30 } ]
console.log(filterArr);
```