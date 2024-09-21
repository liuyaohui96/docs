

## Object.fromEntries() 
Object.fromEntries() 方法把键值对列表转换为一个对象。

方法需要的参数：
* iterable：可迭代对象，类似 Array 、 Map 或者其它实现了可迭代协议的对象
```js
Object.fromEntries(iterable);

// === 通过 Object.fromEntries， 可以将 Map 转化为 Object
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

// === 通过 Object.fromEntries， 可以将 Array 转化为 Object:
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }

//  Object.fromEntries 是 Object.entries() 的反转函数，借用 数组处理函数 可以转换对象
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```
