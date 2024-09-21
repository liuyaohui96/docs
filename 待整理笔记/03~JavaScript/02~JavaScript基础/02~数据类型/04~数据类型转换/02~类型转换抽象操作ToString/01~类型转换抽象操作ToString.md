## 类型转换抽象操作ToString
1. Number类型转换为String类型：直接将数字转换为字符串
2. Number类型转换为String类型：true转换为 "true", false 转换为"false"
3. Null类型转换为String类型：null转换为 "null"
4. Undefined类型转换为String类型：undefined 转换为 "undefined"
5. 对象类型转换为String类型：
    * 对象先执行toString()，看是否能转换
    * 如果不可以再执行valueOf，看是否可以转换
    * 最终得到内部属性 `[[Class]]` 的值（如 "[object Object]"）

## 类型转换抽象操作ToString行为
1. 强制转换
    * String()
    * 除了null和undefin外的值的toSting()方法
2. 自动转换（隐式转换）
    * 字符串的加法运算
```js
// === String()方法
String([]) // ''
String({}) // '[object Object]'

// === toString()
let a = 123
a.toString()//"123"
let b = null;
b.toString()//"报错"
let c = undefined
c.toString()//"报错"
```