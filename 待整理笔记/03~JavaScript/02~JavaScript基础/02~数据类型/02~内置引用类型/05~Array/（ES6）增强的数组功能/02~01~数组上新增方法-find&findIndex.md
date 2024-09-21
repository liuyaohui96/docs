
## find && findIndex 方法
ES5的`indexOf`与`lastIndexOf`只能根据值查找index，对于复杂的条件获取缺乏支持，所以新增了`find() | findIdx()`方法
```js
/*
find(callback[,context])
findIndex(callback[,context])

callback:
    * item 迭代当前项值
    * index 迭代当前项index
    * array 迭代当前数组的引用

find 返回匹配的值
findIndex返回匹配值的index
*/
let numbers = [25, 30, 35, 40, 45];

console.log(numbers.find(n => n > 33));         // 35
console.log(numbers.findIndex(n => n > 33));    // 2

```