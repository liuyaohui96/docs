
ES6之前，使用的是固定的16位（双字节）的字符编码方式。每16位序列都是一个code unit（码元），每个码元就是一个字符。Unicode 引进了扩展字符集(expanded character set), 表示字符的位数就不够用了。

UTF-16使用的是变长的字符串编码方式，有16位与32位两种形式。

## UTF-16 代码点
背景：Unicode 明确目标就是给世界上所有的字符提供全局的唯一标识符，16位的字符长度不能满足这种需求。

全球唯一标识符就叫做代码点(code point)，是从0开始的简单数字，用一个数字表示一个字符。其中BMP（Basic Multilingual Plane），即基本多语言平面，表示可以在16位序列范围内表示的代码点；supplementary planes（扩展平面），超出16位序列范围内表示的代码点的表示。

UTF-16引入了代理对（ surrogate pairs）解决这个超出范围表示的代码点问题，允许使用两个16位码元表示单个代码点，这意味着单个字符可以使用一个码元（16位序列）或者两个码元（32位）来表示

```js
// '𠮷'该字符使用两个码元表示
var text = '𠮷';

console.log(text.length); // 2
console.log(text.charAt(0)); // 返回不是一个可打印的字符
console.log(text.charAt(1)); // 返回不是一个可打印的字符
```

