
## String.prototype.matchAll()
如果一个正则表达式在字符串里面有多个匹配，现在一般使用g修饰符或y修饰符，在循环里面逐一取出
```js
function collectGroup1 (regExp, str) {
  const matches = []
  while (true) {
    const match = regExp.exec(str)
    if (match === null) break
    matches.push(match[1])
  }
  return matches
}
console.log(collectGroup1(/"([^"]*)"/g, `"foo" and "bar" and "baz"`))
// [ 'foo', 'bar', 'baz' ]
```
值得注意的是，如果没有修饰符 /g, .exec() 只返回第一个匹配。现在通过ES9的String.prototype.matchAll方法，可以一次性取出所有匹配。

```js
function collectGroup1 (regExp, str) {
  let results = []
  for (const match of str.matchAll(regExp)) {
    results.push(match[1])
  }
  return results
}
console.log(collectGroup1(/"([^"]*)"/g, `"foo" and "bar" and "baz"`))
// ["foo", "bar", "baz"]

```
上面代码中，由于string.matchAll(regex)返回的是遍历器，所以可以用for...of循环取出。