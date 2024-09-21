
## 对象的constructor属性
每个实例对象都从原型中继承了一个constructor属性，该属性指向了用于构造此实例对象的构造函数。

注意：修改原型对象时，一般要同时修改constructor属性的指向

```js
// 都将返回 Person() 构造器
person1.constructor
person2.constructor

// 获得某个对象实例的构造器的名字
instanceName.constructor.name
```
