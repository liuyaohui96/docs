
## 遍历数组
forEach fitler find map some every reduce map indexOf lastIndexOf等

## for in 遍历对象
遍历对象 通常用for in来遍历对象的键名, 遍历对象自身的和继承的可枚举的属性, 不能直接获取属性值。可以中断循环
  - 不想遍历原型方法和属性的话，在循环内部使用hasOwnPropery判断某属性是否是该对象的实例属性
  - ES5的Object.keys(myObject)获取对象的实例属性组成的数组，不包括原型方法和属性

## for of的使用
for..of适用遍历 
  * 数组
  * 字符串
  * map
  * set
  * 函数的 arguments 对象
  * NodeList 对象
等拥有迭代器对象的集合, 所以可以用于遍历。但是不能遍历对象,因为没有迭代器对象。

## 对象属性的遍历
ES6 一共有 5 种方法可以遍历对象的属性。

（1）for...in

for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

（2）Object.keys(obj)

Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

（3）Object.getOwnPropertyNames(obj)

Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

（4）Object.getOwnPropertySymbols(obj)

Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

（5）Reflect.ownKeys(obj)

Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

首先遍历所有数值键，按照数值升序排列。
其次遍历所有字符串键，按照加入时间升序排列。
最后遍历所有 Symbol 键，按照加入时间升序排列。


四个操作会忽略enumerable为false的属性。

for...in循环：只遍历对象自身的和继承的可枚举的属性。
Object.keys()：返回对象自身的所有可枚举的属性的键名。
JSON.stringify()：只串行化对象自身的可枚举的属性。
Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。