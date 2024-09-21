
## 对象可计算属性中使用symbol值
1. 对象字面量中使用symbol值作为计算属性
2. Object.defineProperty中使用symbol值作为对象属性
3. Object.defineProperties中使用symbol值作为对象属性

> 虽然symbol值属性使用getOwnPropertyDescriptor显示为可枚举，但是使用Object.keys 和 for-in 循环迭代访问不了属性

```js
let firstName = Symbol('first name');

// 对象字面量中使用symbol值作为计算属性
let person = {
  [firstName]: 'liu'
};

// Object.defineProperty中使用symbol值作为对象属性
// firstName 是一个symbol类型变量
Object.defineProperty(person, firstName, { writable: false });

let lastName = Symbol('last name');

// Object.defineProperties中使用symbol值作为对象属性
Object.defineProperties(person, {
  [lastName]: {
    value: 'yaohui',
    writable: false
  }
});

console.log(person[firstName]); // "liu"
console.log(person[lastName]); // "yaohui"

/*
{ 
  value: 'liu',
  writable: false,
  enumerable: true,
  configurable: true 
}
*/
console.log(Object.getOwnPropertyDescriptor(person, firstName));
// 虽然symbol值属性使用getOwnPropertyDescriptor显示为可枚举，
// 但是使用Object.keys 和 for-in 循环迭代访问不了属性
console.log(Object.keys(person)); // []
```