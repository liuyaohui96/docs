
## History对象方法
1. History.forward()
2. History.back()
3. History.go()

## History.forward()
历史记录中后退一页。如果没有上一页，则此方法调用不执行任何操作。

相当于 `history.go(1)`

## History.back()
历史记录中前进一页。如果没有下一页，则此方法调用不执行任何操作。

相当于`history.go(-1)`


## History.go()
更具特定的参数，加载特定的页面
```js
// delta 可选，选对于当前页面
// 如果参数忽略或者为0，则相当于location.reload()
window.history.go(delta);
```