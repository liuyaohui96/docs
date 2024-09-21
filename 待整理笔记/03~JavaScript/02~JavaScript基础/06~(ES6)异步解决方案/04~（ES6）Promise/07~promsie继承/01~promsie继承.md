
## promsie继承
如其他内置类型，可以将promise作为派生类的基类，允许在Promise的基础上扩展功能

```js
/*
使用success() & failure()方法的Promise，对常规方法的then() 与 catch() 发那个发进行扩展
*/
// 每个方法调用对象的then 或catch 方法完成
class MyPromise extends Promise {
  // use default constructor

  success(resolve, reject) {
    return this.then(resolve, reject);
  }

  failure(reject) {
    return this.catch(reject);
  }
}

let promise = new MyPromise(function(resolve, reject) {
  resolve(42);
});

promise
  .success(function(value) {
    console.log(value); // 42
  })
  .failure(function(value) {
    console.log(value);
  });


```