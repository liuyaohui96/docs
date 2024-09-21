<div style="color:red; font-size: 14px;font-weight: bold">
本节重点：
<p>1. ES5使用对象模拟Set和Map的实现</p>
<p>2. ES5使用对象模拟Set和Map的局限性</p>
</div>


## ES5 模拟Set和Map
ES5 使用非数组的对象去模拟Set和Map

```js
// ===== 对象模拟Set
// 为对象的属性，赋值true，从而可以判断属性是否存在
let set = Object.create(null); // null 为原型，使得对象没有继承属性

set.foo = true; // 设置值为true

// checking for existence
if (set.foo) {
    // do something
}


// ==== 对象模拟Map
// ==== 设置对象的key及其value
let map = Object.create(null);

map.foo = "bar";

// retrieving a value
let value = map.foo;

console.log(value);         // "bar"
```

## 对象模拟Set和Map的局限性
```js
// ==== 1. 对象属性会自动转换为字符串
let map = Object.create(null);

map[5] = "foo";

console.log(map["5"]);  // "foo"
// map[5] == map['5'], 这样就不能使用非字符串作为属性

// ====== 2. 如果属性是对象，会自动转换为'[Object object]'
let map = Object.create(null),
key1 = {},
key2 = {};
map[key1] = "foo";
console.log(map[key2]);     // "foo"
// 对象转换为字符串为'[Object object]' 这样就不能使用对象作为属性

// ===== 3. 属性值的隐式转换
let map = Object.create(null);

map.count = 1;

// checking for the existence of "count" or a nonzero value?
if (map.count) {
    // ...
}
// 检查属性是否存在，我们通常使用in运算符，但是如果一不小心使用上面的形式，就很糟糕
```

基于以上的对象模拟Set和Map带来的局限性，所以在ES6提供了Set和Map的内置类型。