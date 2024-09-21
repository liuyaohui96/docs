
## bind
返回一个原函数的拷贝，并拥有指定的this值和初始参数
```js
function.bind(thisArg[,arg1[,arg2[, ...]]])
```

> bind 和 call/apply 有一个很重要的区别，一个函数被 call/apply 的时候，会直接调用，但是 bind 会创建一个新函数