
## try…catch
ES10中，try-catch语句中的参数变为了一个可选项。以前我们写catch语句时，必须传递一个异常参数。这就意味着，即便我们在catch里面根本不需要用到这个异常参数也必须将其传递进去

```js
// ES10之前
try {
  // tryCode
} catch (err) {
  // catchCode
}

// 在 ES10 可以省略这个参数
// ES10
try {
  console.log('Foobar')
} catch {
  console.error('Bar')
}  
```