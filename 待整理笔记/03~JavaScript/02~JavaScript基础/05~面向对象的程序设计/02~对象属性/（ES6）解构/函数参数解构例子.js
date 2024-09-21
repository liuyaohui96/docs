
## 函数参数解构
```js
// 这种形式第二个参数不能为空，否则出现解构错误
function foo(firstArg, {bar, baz}){

}

// 可以提供一个默认值
function foo(firstArg, {bar, baz} = {})


```