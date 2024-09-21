
## String.codePointAt()
接受码元位置而不是字符位置，返回一个整数
```js
/*
codePointAt(codeUnit)
接受码元位置而不是字符位置，返回一个整数
*/
var text = '𠮷a';

console.log(text.charCodeAt(0)); // 55362
console.log(text.charCodeAt(1)); // 57271
console.log(text.charCodeAt(2)); // 97

console.log(text.codePointAt(0)); // 134071
console.log(text.codePointAt(1)); // 57271
console.log(text.codePointAt(2)); // 97
```

## 判断一个字符包含了一个码元还是两个码元
```js
function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
```

## String.fromCodePoint()
```js
/*
String.fromCodePoint(codePonint)
根据表示代码点的整数，返回单个字符的字符串
*/
console.log(String.fromCodePoint(134071));  // "𠮷"
```

## normalize()方法
字符串 `“æ”` 与 `“ae” ` 虽然不严格相等，在某种形式下是可以互换使用，不过需要某种标准化方法

ES6字符串提供了标准化方法 `normalize()`，当需要比较字符串时，必须要标准化字符串。开发国际化应用时候，`normalize方法`是非常有用的。
```js
var normalized = values.map(function(text) {
    // 不提供参数, 默认以`NFC`为参数
    return text.normalize();
});

normalized.sort(function(first, second) {
    if (first < second) {
        return -1;
    } else if (first === second) {
        return 0;
    } else {
        return 1;
    }
});
```