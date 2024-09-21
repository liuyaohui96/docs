正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是有两个例外。一个是四个字节的 UTF-16 字符，这个可以用u修饰符解决；另一个是行终止符,如换行符(\n)或回车符(\r),这个可以通过ES9的s(dotAll)flag，在原正则表达式基础上添加s表示:

```js
console.log(/foo.bar/.test('foo\nbar')) // false
console.log(/foo.bar/s.test('foo\nbar')) // true
```

那如何判断当前正则是否使用了 dotAll 模式呢？

```js
const re = /foo.bar/s // Or, `const re = new RegExp('foo.bar', 's');`.
console.log(re.test('foo\nbar')) // true
console.log(re.dotAll) // true
console.log(re.flags) // 's'
```