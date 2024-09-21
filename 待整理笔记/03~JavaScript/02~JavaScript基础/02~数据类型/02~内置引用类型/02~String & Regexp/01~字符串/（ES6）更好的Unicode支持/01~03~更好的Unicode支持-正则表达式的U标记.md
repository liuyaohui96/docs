
## 正则表达式的U标记
当正则表达式设置了u标记，工作模式切换到针对字符，而不是针对码元

```js
var text = "𠮷";

// 针对字符，而不是码元
console.log(text.length);           // 2
console.log(/^.$/.test(text));      // false
console.log(/^.$/u.test(text));     // true
```

## 使用u标记计算代码点
```js
function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

// [ 'a', 'b', 'c' ]
console.log(codePointLength('abc')); // 3

// [ '𠮷', 'b', 'c' ]
// 如果没有 u 标记，结果是4
console.log(codePointLength('𠮷bc')); // 3
```