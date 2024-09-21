
## Number 类型

```js
// ==== 十进制整数

// === 八进制整数
// 浏览器环境下的严格模式不允许使用八进制整数字面量
070 // 56
079 // 序列大于7，当作十进制整数79

// 所有八进制和十六进制的数值进行算术运算都会被转换为十进制
070 + 070 // 56

//==== 浮点数
10.0
3.14e2 // 314

// 浮点数存在精确性问题，永远不要比较浮点数值
// IEEE754 浮点数运算的通病
0.1 + 0.2 == 0.3 // false
```


## 精度丢失
精度丢失。二进制存储的，所以在计算时计算机要把数据先转换成二进制进行计算。

例如计算`0.1+0.2`时，二进制计算发生了精度丢失
  
ECMAScript中的Number类型遵循IEEE 754标准。使用64位固定长度来表示。JavaScript使用的是64位双精度浮点数编码，所以它的符号位占1位，指数位占11位，尾数位占52位
* 符号位就是标识正负的，1表示负，0表示正
* 指数位存储科学计数法的指数
* 尾数位存储科学计数法后的有效数字

```js
// 一个解决方案是，定义一个误差值（epsilon），使得两数之差小于这个值，
// 然后通过函数判断它们是否近似相等
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon
approxEqual(0.1 + 0.2, 0.3) // true
```

## 最大安全数字
IEEE 754双精度64位规范的限制：
* 指数位能表示的最大数字：1023(十进制)
* 尾数位能表达的最大数字即尾数位都位1的情况
* 1.111...X 21023 这个结果转换成十进制是1.7976931348623157e+308,这个结果即为`Number.MAX_VALUE`

最大安全数字 `Number.MAX_SAFE_INTEGER`。超出`Number.Max_value`的值为Infinity，超出了`Number.Min_value`的值为-Infinity

```js
// 正数除以0,返回Infinity
3/0 // infinity
-3/0 // -infinity
```

## NaN
NaN 是一个特殊的数值，用于表示返回数值的操作数未返回数值的情况。
```js
// NaN 是 Number类型
typeof NaN // 'Nnumber'

// 其他语言除以0返回错误，ECMAScript 则返回NaN
0/0  // NaN

// ==== 判断NaN
NaN === NaN // false
Naumber.isNaN(value)
Object.is(value1, value2)
```

## 判断整数
ES6提供的是`Number.isInteger(x)`
```js
// ===== Number.isInteger的实现方案
funcition isInteger(x){
  return (x^0) === x
}

function isIntegr(x){
  // Math.ceil 和 Math.floor 也可以
  return Math.round(x) === x
  // return parseInt(x, 10) === x
}
```