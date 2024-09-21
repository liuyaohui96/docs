
## async await 的缺陷
await关键字阻止执行所有代码，直到promise完成, 这意味着代码可能会因为大量等待的promises相继发生而变慢,每个await将等待前一个完成，而实际上你想要的是promises同时开始处理


## 同时触发await
多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发
```js
//下面两种写法都可以同时触发
//法一
async function f1() {
  await Promise.all([
    new Promise(resolve => {
      setTimeout(resolve, 600);
    }),
    new Promise(resolve => {
      setTimeout(resolve, 600);
    })
  ]);
}
//法二
async function f2() {
  let fn1 = new Promise(resolve => {
    setTimeout(resolve, 800);
  });

  let fn2 = new Promise(resolve => {
    setTimeout(resolve, 800);
  });
  await fn1;
  await fn2;
}

```