
## Object.create()

需要的参数
* proto: 新创建对象的原型对象
* propertiesObject: 可选，添加到新创建对象的不可枚举（默认）属性对象的属性描述符以及相应的属性名称

```js
// 返回一个新对象，带着指定的原型对象和属性
Object.create(proto[, propertiesObject])

// Object.create， 通过参数为创建的对象选择其原型对象
let Person = {
  name: 'liu',
  sayName() {
    console.log(this.name);
  }
};
let student = Object.create(Person);
student.sayName(); // liu

// === 描述符
let obj = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() {
      return 10;
    },
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
  }
});

```

## 