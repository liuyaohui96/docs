
## 特殊的Number类型转换操作
特殊的Number类型转换操作是`parseInt(string[,base]) | parseFloat(string)`，用于将字符串转换为Number类型，他们不会对整体的字符串进行转换，而是截取其中符合它们定义规则的部分转换为Number类型
```js
// parseInt(value, base)， base指定哪种进制解释value为十进制数字
// ECMAScript 5 的parseInt 不再解释八进制
parseInt('070') // 70
parseInt('0xf') // 15
parseInt('f', 16) // 15
parseInt('123abc') // 123
parseInt('123.4') // 123

// === parseFloat()
parseFloat('123.4abc') // 123.4
```