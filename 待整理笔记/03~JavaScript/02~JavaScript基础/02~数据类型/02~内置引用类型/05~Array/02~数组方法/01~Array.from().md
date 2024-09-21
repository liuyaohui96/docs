
## Array.from()
从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

方法需要的参数：
* arrayLike: 想要转换成数组的伪数组对象或可迭代对象
* mapFn: 可选，指示数组中的每个元素都会执行的回调函数
* thisArg：可选参数，指示执行回调函数mapFn时this对象
```js
Array.from(arrayLike[, mapFn[, thisArg]])

// === 从 String 生成数组
Array.from('foo');  // [ "f", "o", "o" ]

// === 从 Set 生成数组
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set); // [ "foo", "bar", "baz" ]

// === 从 Map 生成数组
const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values()); // ['a', 'b'];

// === 从类数组对象（arguments）生成数组
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);  // [ 1, 2, 3 ]

// === 指定第二个参数
Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
```