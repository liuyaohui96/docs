## 在promise链中返回值
promise链的重要部分是能从一个promise传递数据给下一个promise的能力，可以指定fullfilled处理函数的返回值，以便沿着一个链继续传递数据。

```js
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});

p1.then(function(value) {
  console.log(value); // "42"
  return value + 1;
}).then(function(value) {
  console.log(value); // "43"
});

// === 同样rejected处理函数中的返回值也能传递给下一个串联promise
let p1 = new Promise(function(resolve, reject) {
    reject(42);
});

p1.catch(function(value) {
    // first fulfillment handler
    console.log(value);         // "42"
    return value + 1;
}).then(function(value) {
    // second fulfillment handler
    console.log(value);         // "43"
});
```

## 返回promise
```js
let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
    resolve(43);
});

p1.then(function(value) {
    // first fulfillment handler
    console.log(value);     // 42
    return p2;
}).then(function(value) {
    // second fulfillment handler
    console.log(value);     // 43
});

// === 等价于上面的例子
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
  resolve(43);
});

p1.then(function(value) {
  // first fulfillment handler
  console.log(value); // 42
  return p2;
}).then(function(value) {
  // second fulfillment handler
  console.log(value); // 43
});

```