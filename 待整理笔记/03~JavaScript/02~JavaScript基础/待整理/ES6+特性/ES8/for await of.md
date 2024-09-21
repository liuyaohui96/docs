
ES9新增的for await of可以用来遍历具有Symbol.asyncIterator方法的数据结构，也就是异步迭代器，且会等待前一个成员的状态改变后才会遍历到下一个成员，相当于async函数内部的await

```js
// for of遍历
function Gen (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time)
    }, time)
  })
}
async function test () {
  let arr = [Gen(2000), Gen(100), Gen(3000)]
  for (let item of arr) {
    console.log(Date.now(), item.then(console.log))
  }
}
test()
```
上述代码证实了for of方法不能遍历异步迭代器

```js
function Gen (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time)
    }, time)
  })
}
async function test () {
  let arr = [Gen(2000), Gen(100), Gen(3000)]
  for await (let item of arr) {
    console.log(Date.now(), item)
  }
}
test()
// 1575536194608 2000
// 1575536194608 100
// 1575536195608 3000
```