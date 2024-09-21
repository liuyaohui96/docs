
## Promise.resolve()
返回一个处于fullfilled状态的promise

参数：
* value
  * 如果该值为promise，返回这个promise
  * 如果这个值是thenable对象，具有then方法，返回的promise会“跟随”这个thenable的对象（在promise引入ES6之前，许多库使用了thenable， 因此将thenable 转换为正规的promise就可以使得对已经存在的库向下兼容）
```js
Promise.resolve(value)

// 参数为thenable例子
let thenable = {
  then(resolve, reject) {
    resolve(1);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(value => {
  console.log(value); // 1
});
```

## 更多例子
```js
Promise.resolve('Success').then(
  value => {
    console.log(value); // "Success"
  },
  reason => {
    console.log(reason); // 不会被调用
  }
);

// resolve 一个数组
let p = Promise.resolve([1, 2, 3]);
p.then(values => {
  console.log(values); // [ 1, 2, 3 ]
});

// resolve 一个promise
let p1 = Promise.resolve(1);
let cast = Promise.resolve(p1);
cast.then(value => {
  console.log(value); // 1
});


```