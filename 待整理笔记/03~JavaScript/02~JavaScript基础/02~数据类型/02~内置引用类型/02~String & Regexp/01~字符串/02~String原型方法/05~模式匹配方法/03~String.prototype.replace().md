
## String.prototype.replace()
```js
/*
找出第一个参数匹配的字符串，替换为第二个参数, 返回被替换的新字符串，原字符串不会改变。
接受两个参数：
第一个参数可以是一个 RegExp 对象或者一个字符串,
第二个参数可以是一个字符串或者一个函数
*/
String.prototype.replace(regexp|substr, newSubStr|function)

// === 第二个参数可以是函数
// match是匹配的子串
// p1,p2, ... 代表第n个括号匹配的字符串
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
```