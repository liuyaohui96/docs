
```js
const input = {
  a: 1,
  b: 2,
  c: 1
}
const output = {
  ...input,
  c: 3
}
// 如果存在相同的属性名，只有最后一个会生效。
console.log(output) // {a: 1, b: 2, c: 3}
```

```js
// 修改input对象中的值，output并没有改变，
// 说明扩展运算符拷贝一个对象（类似这样obj2 = {...obj1}），实现只是一个对象的浅拷贝
const input = {
  a: 1,
  b: 2,
  c: 1
}
const output = {
  ...input,
  c: 3
}
console.log(output) // {a: 1, b: 2, c: 3}
```