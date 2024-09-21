
## Object.prototype.toString.call()
使用 Object.prototype.toString.call() 方法, 获取Object原型上的toString方法，让方法执行，让toString方法中的this指向第一个参数的值，从而获取到变量的准确的类型。

Object上的toString()作用是返回当前方法执行的主体（方法中的this）所属类的详细信息, 即`"[object Object]"`: 
* 第一个object代表当前实例是对象数据类型的(这个是固定死的)
* 第二个Object代表的是this所属的类

每一个引用类型都有toString方法，默认情况下，toString()方法被每个Object对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中type是对象的类型。

```js
function foo(){};

Object.prototype.toString.call(1);  '[object Number]'
Object.prototype.toString.call('1'); '[object String]'
Object.prototype.toString.call(NaN); '[object Number]'
Object.prototype.toString.call(foo);  '[object Function]'
Object.prototype.toString.call([1,2,3]); '[object Array]'
Object.prototype.toString.call(undefined); '[object Undefined]'
Object.prototype.toString.call(null); '[object Null]'
Object.prototype.toString.call(true); '[object Boolean]'
```