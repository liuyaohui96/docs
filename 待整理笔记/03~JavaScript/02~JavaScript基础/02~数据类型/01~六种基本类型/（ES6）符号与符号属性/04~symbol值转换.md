
## symbol值转换
symbol值无法被转换为字符串或数值

```js
let uid = Symbol.for("uid"), sum = uid / 1; // error!
let uid = Symbol.for("uid"), desc = uid + ""; // error!
```