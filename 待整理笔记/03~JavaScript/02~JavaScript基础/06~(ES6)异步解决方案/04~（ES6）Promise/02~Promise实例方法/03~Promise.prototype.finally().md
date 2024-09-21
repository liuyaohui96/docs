
## Promise.prototype.finally()
romise.prototype.finally() 方法返回一个Promise，在promise执行结束时，无论结果是fulfilled或者是rejected，在执行then()和catch()后，都会执行finally指定的回调函数。

使用场景：无论promise状态是fulfilled还是rejected，都需要在他们状态改变之后进行一些操作，避免同样的语句需要在then()和catch()中出现重复的代码。

```js
// onFinally Promise 结束后调用的Function
Promise.prototype.finally(onFinally)

// ===例子
fetch('https://www.google.com')
  .then(response => {
    console.log(response.status);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    document.querySelector('#spinner').style.display = 'none';
  });
```