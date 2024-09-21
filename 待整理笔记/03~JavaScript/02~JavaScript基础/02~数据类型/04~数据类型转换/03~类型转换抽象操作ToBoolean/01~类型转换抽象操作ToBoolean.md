
## 类型转换抽象操作ToBoolean
1. Number类型转换为Boolean类型：除了`0 | -0 | NaN`转换为false，其他都转换为true
2. String类型转换为Boolean类型：除了`''`转换为false，其他转换为false
3. Null 和 Undefined类型都转换为false
4. 对象类型都为true

根据ToBoolean抽象操作，可以得出假值有：`fasle | 0 -0 NaN | '' | null | undefined`

## 类型转换抽象操作ToBoolean行为
1. 强制转换
  * Boolean() 属于强制转换

2. 自动转换（隐式转换）
  * if语句内的表达式
  * 逻辑运算符 !
  * !!
```js
// 以下以Boolean()作为例子
Boolean(0) // false
Boolean(NaN) // false

Boolean('') // false
Boolean('abc') // true

Boolean(null) // false
Boolean(undefined) // false

Boolean({}) // true
Boolean([]) // true
```
