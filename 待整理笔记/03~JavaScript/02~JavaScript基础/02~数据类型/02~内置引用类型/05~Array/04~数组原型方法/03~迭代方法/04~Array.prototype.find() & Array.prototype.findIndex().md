

## Array.prototype.find() & Array.prototype.findIndex()
1. Array.prototype.find() 
2. Array.prototype.findIndex()

## Array.prototype.find()
Array.prototype.find() 迭代数组，返回callback返回值第一个为true的数组项。否则返回-1

```js
Array.prototype.find(callback(item [, index [, array]])[, thisArg])

// === 例子
let persons = [
  { name: 'liuyaohui', age: 21 },
  { name: 'liuyaohui2', age: 24 }
];
let findResult = persons.find(person => person.age > 23);
console.log(findResult); // { name: 'liuyaohui2', age: 24 }
```

## Array.prototype.findIndex()
Array.prototype.findIndex() 迭代数组，返回callback返回值第一个为true的数组项的索引。否则返回-1
```js
Array.prototype.findIndex(callback(item [, index [, array]])[, thisArg])

// === 例子
let persons = [
  { name: 'liuyaohui', age: 21 },
  { name: 'liuyaohui2', age: 24 }
];
let findResult = persons.findIndex(person => person.age > 23);
console.log(findResult); // 1
```