
## Generator.prototype.return()
Generator.prototype.return()方法返回给定的值并结束生成器

```js
Generator.prototype.return(value)
// === 例子
function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}
let g = gen();
g.next();        // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }
```

如果对已经处于“完成”状态的生成器调用return(value)，则生成器将保持在“完成”状态。如果没有提供参数，则返回对象的value属性与示例最后的.next()方法相同。如果提供了参数，则参数将被设置为返回对象的value属性的值。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
// 生成器处于完成状态
g.next(); // { value: undefined, done: true }
// 不提供参数
g.return(); // { value: undefined, done: true }
// 提供参数
g.return(1); // { value: 1, done: true }
```