
## Promise.all()
返回一个**已决（settled）**的promise实例，其状态分为
1. fullfilled
    * 传入的可迭代对象参数为空，同步地返回一个已完成fullfilled状态的promise
    * 传入的promise 都变为fullfilled， 返回的 promise 异步地变为完成fullfilled
    * 传入的可迭代对象内没有 promise，返回的 promise 异步地变为完成fullfilled
2. rejected
    * 传入的 promise 中有一个失败（rejected），返回的promise异步变为rejected，而不管其它 promise 是否完成

* 如果Promise.all()返回一个fullfilled的promise，调用then方法获取到所有迭代参数的计算结果，是一个数组
* 如果Promise.all()返回一个rejected的promise，调用then方法获取到迭代参数中失败的计算结果
```js
Promise.all(iterable);

// === fullfilled 例子
let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(Array.isArray(values)); // true
  console.log(values); // [3, 1337, "foo"]
});

// === reject 例子
let p1 = new Promise((resolve, reject) => {
  resolve(1);
});
let p2 = new Promise((resolve, reject) => {
  reject(2);
});
let p3 = new Promise((resolve, reject) => {
  resolve(3);
});

let p4 = Promise.all([p1, p2, p3]);

p4.catch(function(value) {
  console.log(Array.isArray(value)); // false
  console.log(value); // 2
});

```