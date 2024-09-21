
## Number 原型方法
1. Number.prototype.toFixed()
2. Number.prototype.toExponential()
3. Number.prototype.toPrecision(precision)
4. Number.prototype.toString([radix])
5. Number.prototype.valueOf()
## toFixed()
```js
// 使用定点表示法 表示给定数字的字符串
// digits，小数点后小数个数
Number.prototype.toFixed(digits)

// === 例子
let numObj = 12345.6789;

console.log(numObj.toFixed()); // 12346,进行四舍五入，不包括小数部分
console.log(numObj.toFixed(1)); // 12345.7
```

## toExponential()
```js
// 使用指数表示法 表示给定数字的字符串
// fractionDigits, 指定小数点后有几位数字,默认情况下用尽可能多的位数来显示数字。
Number.prototype.toExponential(fractionDigits)

// === 例子
let numObj = 77.1234;
console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
```

## toPrecision()
```js
// 以指定的精度返回该数值对象的字符串表示
// precision 指定有效数个数
Number.prototype.toPrecision(precision)

var numObj = 5.123456;
console.log("numObj.toPrecision()  is " + numObj.toPrecision());  //输出 5.123456
console.log("numObj.toPrecision(5) is " + numObj.toPrecision(5)); //输出 5.1235
```

## toString()
```js
// 返回指定 Number 对象的字符串表示形式
// 重写了Object.prototype.toString()
Number.prototype.toString([radix])
var num = 10;
console.log(num.toString()); //"10"
console.log(num.toString(2)); //"1010"
console.log(num.toString(8)); //"12"
console.log(num.toString(10)); //"10"
console.log(num.toString(16)); //"a" 
```

## valueOf()
```js
// 返回 指定 Number 对象的原始值
// 重写了Object.prototype.valueOf()
Number.prototype.valueOf()
```