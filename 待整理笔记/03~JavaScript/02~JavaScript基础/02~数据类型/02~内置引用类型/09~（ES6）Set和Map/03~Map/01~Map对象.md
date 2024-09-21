
## Map 对象
一个Map对象就是一个简单的键值对映射集合

```js
// Iterable 可以是一个数组或者其他 iterable 对象, 其元素为键值对(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])。
new Map([iterable])
```

## Map 与 Object 比较
Map 与 Object 比较具有以下优势：
1. 一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。
2. Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。
3. 可以通过Map.prototype.size 获取Map的大小，Object则需要手动计算
4. Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。
5. Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。虽然 ES5 开始可以用 map = Object.create(null) 来创建一个没有原型的对象，但是这种用法不太常见
6. Map 在涉及频繁增删键值对的场景下会有些性能优势
