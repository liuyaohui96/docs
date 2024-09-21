
ES2018 引入了一种新的类的写法\p{...}和\P{...}，允许正则表达式匹配符合 Unicode 某种属性的所有字符。比如你可以使用\p{Number}来匹配所有的Unicode数字，例如，假设你想匹配的Unicode字符㉛字符串:

```js
const str = '㉛';
console.log(/\d/u.test(str));    // → false
console.log(/\p{Number}/u.test(str));     // → true
```

同样的，你可以使用\p{Alphabetic}来匹配所有的Unicode单词字符:
```js
const str = 'ض';
console.log(/\p{Alphabetic}/u.test(str));     // → true
// the \w shorthand cannot match ض
console.log(/\w/u.test(str));    // → false
```

同样有一个负向的Unicode属性转义模板 \P{...}

```js
console.log(/\P{Number}/u.test('㉛'));    // → false
console.log(/\P{Number}/u.test('ض'));    // → true
console.log(/\P{Alphabetic}/u.test('㉛'));    // → true
console.log(/\P{Alphabetic}/u.test('ض'));    // → false
```