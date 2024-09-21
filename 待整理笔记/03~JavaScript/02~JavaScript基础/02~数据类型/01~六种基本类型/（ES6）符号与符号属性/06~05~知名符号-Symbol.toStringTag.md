
## Symbol.toStringTag
浏览器页面包含iframe时，页面与iframe均拥有各自的全局执行环境，会出现对象在环境之间传递，无法识别目标对象问题的类型

典型的例子是iframe 向页面传递数组，或者反过来。无论哪个域创建的数组都是正规的数组，当它跨域进行传递时，使用`instanceof Array`进行判断，却会得到false的结果。

许多jS库的解决办法是调用toString方法，与`[object Array]`进行判断

```js
// 这种方法在任何浏览器都能识别数组
function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

console.log(isArray([])); // true

// 同样地识别JSON对象
function supportsNativeJSON() {
  return (
    typeof JSON !== 'undefined' &&
    Object.prototype.toString.call(JSON) === '[object JSON]'
  );
}
```

而`Symbol.toStringTag`则定义了`Object.prototype.toString.call`被调用时应该返回什么值，如果存储了`Array`，则该函数返回值也是`Array`

```js
function Person(name) {
  this.name = name;
}

Person.prototype[Symbol.toStringTag] = 'Array';

Person.prototype.toString = function() {
  return this.name;
};

let me = new Person('Nicholas');

console.log(me.toString()); // "Nicholas"
console.log(Object.prototype.toString.call(me)); // "[object Array]"

// === 也可以改变内置的类型
Array.prototype[Symbol.toStringTag] = "Magic";
let values = [];
console.log(Object.prototype.toString.call(values));    // "[object Magic]"
```