
## extends
extends 是一个对象或者构造函数，用于从其他组件进行扩展，而不用使用`Vue.extend()`

```js
let CompA = { ... }

// 在没有调用 `Vue.extend` 时候继承 CompA
let CompB = {
  extends: CompA,
  ...
}
```