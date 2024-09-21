
## Array
Array 对象即数组

## 构建数组的方式
```js
//======== 构造函数方式
let arr = new Array()

// 指定length
let arr = new Array(10) // length 为 10
// 指定值
let arr = new Array('foo', 'bar');
// 可以省略new
let arr = Array('foo', 'bar');

// ======= 使用字面量
let arr =['foo', 'bar']


// 数组也是对象
let arr = ['foo'];
arr.bar = 'bar'
arr.length // 1
arr.bar // 'bar'
```

## 数组元素访问
```js
arr[index]
arr[arr.length - 1] // 访问最后一个元素
```
