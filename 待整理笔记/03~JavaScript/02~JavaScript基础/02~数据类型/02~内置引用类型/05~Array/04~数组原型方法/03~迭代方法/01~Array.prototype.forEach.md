
## Array.prototype.forEach
Array.prototype.forEach() 迭代数组，循环数组的每一项，不返回值
```js
Array.prototype.forEach(callback(item [, index [, array]])[, thisArg])

// === 例子
// ES5前遍历数组
let colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// ES5 ForEach 遍历数组
colors.forEach(color => {
  console.log(color);
});
```