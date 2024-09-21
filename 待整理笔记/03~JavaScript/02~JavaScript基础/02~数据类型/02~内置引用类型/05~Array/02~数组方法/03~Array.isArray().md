
## Array.isArray
```js
// 判断传递的值是否是一个 Array
Array.isArray(obj)

// === 例子
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
```

当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes,如下
```js
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
// 通过iframe 的 Array构造一个数组对象
var arr = new xArray(1,2,3); // [1,2,3]

Array.isArray(arr);  // true
arr instanceof Array; // false
```