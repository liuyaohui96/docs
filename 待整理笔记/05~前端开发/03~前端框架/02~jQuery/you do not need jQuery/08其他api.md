# 其他api

## 移除字符串头尾空白
```js
$.trim(string); // jQuery

string.trim();
```

## 数组
```js
$.isArray(range); // jQuery
Array.isArray(range);

// === 返回索引
$.inArray(item, array); // jQuery
array.indexOf(item)

// === 数组或对象转化为包含新内容的数组
$.map(array, (value, index) => {
}); // jQuery
array.map((value, index) => {
});

// ===轮询函数
$.each(array, (index, value) => {
}); // jQuery
array.forEach((value, index) => {
});

// 过滤函数
$.grep(array, (value, index) => {
}); // jQuery
array.filter((value, index) => {
});

//  ===== 合并第二个数组内容到第一个数组

$.merge(array1, array2); // jQuery

// 使用 concat，不能去除重复值
function merge(...args) {
  return [].concat(...args)
}
// ES6，同样不能去除重复值
array1 = [...array1, ...array2]
// 使用 Set，可以去除重复值
function merge(...args) {
  return Array.from(new Set([].concat(...args)))
}
```

## 检测参数是不是 window
```js
$.isWindow(obj); // 检测参数是不是 window

function isWindow(obj) {
  return obj !== null && obj !== undefined && obj === obj.window;
}
```

## 是否是数字
```js
$.isNumeric(item); // jQuery

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
```

## 是否是function
```js
$.isFunction(item); // jQuery

function isFunction(item) {
  if (typeof item === 'function') {
    return true;
  }
  var type = Object.prototype.toString(item);
  return type === '[object Function]' || type === '[object GeneratorFunction]';
}
```

## 对象是否为空(包括不可枚举属性)
```js
$.isEmptyObject(obj); // jQuery


function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
```

## 是否扁平对象
```js
$.isPlainObject(obj);

// Native
function isPlainObject(obj) {
  if (typeof (obj) !== 'object' || obj.nodeType || obj !== null && obj !== undefined && obj === obj.window) {
    return false;
  }

  if (obj.constructor &&
      !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
    return false;
  }

  return true;
}
```

## 合并多个对象到一个对象
```js
$.extend({}, defaultOpts, opts); // jQuery

Object.assign({}, defaultOpts, opts);
```
## 检测对象的 JavaScript [Class] 内部类型
```js
$.type(obj); // jQuery

function type(item) {
  const reTypeOf = /(?:^\[object\s(.*?)\]$)/;
  return Object.prototype.toString.call(item)
    .replace(reTypeOf, '$1')
    .toLowerCase();
}
```

## proxy
传入函数并返回一个新函数，该函数绑定指定上下
```js
$.proxy(fn, context); // jQuery

// Native
fn.bind(context);
```

