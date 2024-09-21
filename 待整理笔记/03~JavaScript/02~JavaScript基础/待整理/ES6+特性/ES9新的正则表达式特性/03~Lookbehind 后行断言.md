
JavaScript 语言的正则表达式，只支持先行断言，不支持后行断言，先行断言我们可以简单理解为"先遇到一个条件，再判断后面是否满足"，如下面例子：

```js
let test = 'hello world'
console.log(test.match(/hello(?=\sworld)/))
// ["hello", index: 0, input: "hello world", groups: undefined]
```

但有时我们想判断前面是 world 的 hello，这个代码是实现不了的。在 ES9 就支持这个后行断言了：

```js
let test = 'world hello'
console.log(test.match(/(?<=world\s)hello/))
// ["hello", index: 6, input: "world hello", groups: undefined]
```

(?<…)是后行断言的符号，(?..)是先行断言的符号，然后结合 =(等于)、!(不等)、\1(捕获匹配)。