
## Window
window 对象表示一个包含DOM文档的窗口。

在有标签页功能的浏览器中，每个标签都拥有自己的 window 对象；也就是说，同一个窗口的标签页之间不会共享一个 window 对象，window对象的属性和方法如果不能作用于标签，那么它就会作用于窗口。如 window.resizeTo 和 window.resizeBy 之类的方法会作用于整个窗口而不是 window 对象所属的那个标签。


```js
// === 全局作用域
// 因为window对象是ECMAScript的Global对象的的实现
// 所以，在全局作用域声明的变量，函数都会变成window对象的属性和方法
var foo = 'bar'; // chrome 浏览器测试，使用let定义，window不能访问
window.foo; // 'bar'
foo; // 'bar';


//==== 是否使用window获取对象属性值的区别
let newValue = oldValue; // 变量不存在，会报错ReferenceError
let newValue = window.oldValue; // 属性不存在，返回undefined
```