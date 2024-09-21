
## 传递参数给Generator 类型的迭代器
generator 类型的迭代器next 首次调用，所有参数都会忽略；除此之外，next()的参数会称为yield 语句的值
```js
function* createInterator() {
  let first = yield 1;
  let second = yield first + 2;
  yield second + 3;
}
let interator = createInterator();
// 执行返回1
interator.next(); // {value: 1, done: false}
// 执行first的赋值，以及返回first+2
interator.next(2); // {value: 4, done: false} 
// 执行second的赋值，以及返回second + 3
interator.next(3); // {value: 6, done: false}
interator.next(); // {undefined, done: false}
```