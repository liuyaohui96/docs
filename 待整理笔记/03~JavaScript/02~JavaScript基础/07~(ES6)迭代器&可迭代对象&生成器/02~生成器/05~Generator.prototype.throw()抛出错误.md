
## Generator.prototype.throw()抛出错误
Generator.prototype.throw() 方法用来向生成器抛出异常，并恢复生成器的执行，返回带有 done 及 value 两个属性的对象

```js
function* createInterator() {
  let first = yield 1;
  try {
    let second = yield first + 2;
  } catch (e) {
    second = 6;
  }
  yield second + 3;
}

let interator = createInterator();
interator.next(); // {value: 1, done: false}
interator.next(2); // {value: 4, done: false}

// 迭代器处理错误后继续执行
interator.throw(new Error('Boom')); // {value: 9, done:false}
interator.next(); // {undefined, done: false}
```