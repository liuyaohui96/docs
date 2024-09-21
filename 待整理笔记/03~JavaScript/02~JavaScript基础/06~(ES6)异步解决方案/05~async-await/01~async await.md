
## async await
Promise能很好地解决回调地狱的问题，但如果处理流程比较复杂的话，那么整段代码将充斥着then，语义化不明显，代码不能很好地表示执行流程。

ES2017 标准引入了 async + await，使得异步操作变得更加方便,它是 Generator 函数的语法糖(使异步代码看起来更像是同步代码，更易于编写和阅读)

```js
async function hello() {
  return greeting = await Promise.resolve("Hello");
};

hello().then((value) => console.log(value));
```

## async 函数
```js
async function functionName([param[, param[, ... param]]]) { statements }

// 异步函数声明
async function func(){}
// 异步函数表达式
let func = async function(){}
// 异步箭头函数
let func = async () => {}
```

* async 函数内包含await指令，一旦遇到await，就会先暂停异步函数的执行并返回，等待Promise执行完成，然后继续执行异步函数后面的语句
* async 函数返回一个promise对象
  * 必须等到async 函数内部所有await命令执行完，async返回的promise对象才能转变为fullfilled状态
  * 如果出错或者其中await后的promise是rejected状态，则返回的promise对象转变为rejected对象

## await
* await 只能存在于async函数中。如果在异步函数外使用它，会抛出语法错误
* await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。


