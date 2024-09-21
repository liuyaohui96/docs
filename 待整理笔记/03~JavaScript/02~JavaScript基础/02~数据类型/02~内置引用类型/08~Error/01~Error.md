
## Error
Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出

```js
// message 错误描述信息
// fileName 可选，默认是调用Error构造器代码所在的文件 的名字
// lineNumber 可选，默认是调用Error构造器代码所在的文件的行
new Error([message[, fileName[,lineNumber]]])

// === 例子
try {
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message); // Error: Whoops!
}
```
