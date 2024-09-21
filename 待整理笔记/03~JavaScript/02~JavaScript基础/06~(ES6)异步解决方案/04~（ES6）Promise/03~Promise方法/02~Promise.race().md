
## Promise.race()
Promise.race() 方法返回一个 已决的（settled）的promise。一旦迭代器中的某个promise resolve或reject，就会返回相应的resolve或reject的promise, 即取决于迭代器参数中第一个已决（settled)的promise状态

如果传的迭代是空的，则返回的 promise 将永远pending（等待）
```js
Promise.race(iterable)

// === 例子
let p1 = Promise.resolve(1);
let p2 = new Promise((resolve, reject) => {
  resolve(2);
});
let p3 = new Promise((resolve, reject) => {
  resolve(3);
});

let p4 = Promise.race([p1, p2, p3]);
p4.then(function(value) {
  console.log(value); // 1
});
```