
## [[get]]获取对象的属性值
获取对象的属性值，使用对象默认的内置 `[[Get]]`操作
1. 首先在对象中查找是否有名称相同的属性，如果找到就会返回这个属性的值; 
2. 如果找不到，遍历原型链查找该属性，原型链上如果找到，返回该属性值
3. 原型链上也找不到该属性，则返回undefined

属性的getter会覆盖对象属性的get操作

## [[put]]为对象属性赋值
1. 在对象上查找是否具有名称相同的属性，如果有，直接修改已有属性
2. 如果对象上找不到，遍历原型链查找该属性
  * 如果原型链存在该属性，且属性特性`writable: true`, 那么直接在对象上添加一个同名属性，同时屏蔽属性
  * 如果原型链存在该属性，且属性特性`writable: fasle`, 赋值语句会被忽略，严格模式下会抛出错误
  * 如果原型链上存在该属性，且具有setter, 那么就调用setter，**同名属性不会添加到对象上**。

属性的setter会覆盖对象属性的set操作

> 屏蔽：对象及其原型链上的相同命名属性，在原型链上层的属性被最下层的属性屏蔽，只能访问原型链中最底层的该命名属性。

```js
// ==== 原型链存在该属性，且属性特性`writable: true`，属性屏蔽
let otherObj = { foo: 1 };
let obj = Object.create(otherObj);
obj.foo = 2;
console.log(otherObj); // { foo: 1 }
console.log(obj); // { foo: 2 }


// === 原型链存在该属性，且属性特性`writable: fasle`
let otherObj = {};
Object.defineProperty(otherObj, 'foo', {
  value: 1,
  writable: false
});
let obj = Object.create(otherObj);
obj.foo = 2; // 非严格模式下，静默赋值无效
console.log(otherObj.hasOwnProperty('foo')); // true
console.log(obj.hasOwnProperty('foo')); // false
console.log(obj.foo); // 1

// === 原型链上存在该属性，且具有setter
let otherObj = {};

Object.defineProperty(otherObj, 'foo', {
  get: function() {
    return this._foo_;
  },
  set: function(val) {
    this._foo_ = val;
  }
});

let obj = Object.create(otherObj);
obj.foo = 2;
console.log(obj.hasOwnProperty('foo')); // false
console.log(obj); // { _foo_: 2 }
console.log(obj.hasOwnProperty('_foo_')); // true

console.log(obj.foo); // 2
``` 

## 隐式屏蔽
```JS
var anotherObject = {
  a: 2
};
var myObject = Object.create(anotherObject);
console.log(anotherObject.a); // 2
console.log(myObject.a); // 2
console.log(anotherObject.hasOwnProperty('a')); // true
console.log(myObject.hasOwnProperty('a')); // false

console.log(myObject.a++); // 隐式屏蔽！
console.log(anotherObject.a); // 2
console.log(myObject.a); // 3
console.log(myObject.hasOwnProperty('a')); // true
```
++ 操作相当于 myObject.a = myObject.a + 1。因此 ++ 操作首先会通过`[[Prototype]]`查找属性 a 并从 anotherObject.a 获取当前属性值 2，然后给这个值加 1，接着用 [[Put]]将值 3 赋给 myObject 中新建的屏蔽属性 a。