
## setTimeout 和 setImmediate 区别
二者非常相似，区别主要在于调用时机不同。
* setTimeout 设计在poll阶段为空闲时，且设定时间到达后执行，但它在timer阶段执行
* setImmediate 设计在poll阶段完成时执行，即check阶段

```js
// timeout
// immediate
setImmediate(function immediate() {
  console.log('immediate');
});

setTimeout(function timeout() {
  console.log('timeout');
}, 0);
```

但当二者在异步i/o callback内部调用时，总是先执行setImmediate，再执行setTimeout
```js
// immediate
// timeout
const fs = require('fs');
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
```
