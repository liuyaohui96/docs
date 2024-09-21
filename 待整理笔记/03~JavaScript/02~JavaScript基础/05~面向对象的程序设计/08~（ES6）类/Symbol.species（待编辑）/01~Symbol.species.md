
## Symbol.species
继承内置对象出现这样一个状况， 任意返回内置对象实例的方法，在派生类中都会自动返回派生类的实力
```js
/*
slice 方法返回了一个myArray实例，原本应该返回一个Array实例
*/
class MyArray extends Array {
  // empty
}

let items = new MyArray(1, 2, 3, 4),
  subitems = items.slice(1, 3);

console.log(items instanceof MyArray); // true
console.log(subitems instanceof MyArray); // true

```

`Symbol.species`造成了这种变化，它用于定义一个返回函数的静态访问器属性，每当类实例的方法（构造器除外）必须创建一个实例时，前面返回的函数就会被用于作为新实例的构造器。

下列内置类型都定义了`Symbol.species`：
* Array
* ArrayBuffer
* Map
* Set
* Promise
* RegExp
* 类型化数组

以上每个类型都有默认的`Symbol.species`，器返回值为this，一位着该属性总是自身的构造器函数

```js
// several builtin types use species similar to this
// 自定义类上模拟上面的内置类型的功能
class MyClass {
  static get [Symbol.species]() {
    return this;
  }
  constructor(value) {
    this.value = value;
  }
 // clone 方法使用了该定义来返回一个新的实例，而没有直接使用MyClass
  clone() {
    return new this.constructor[Symbol.species](this.value);
  }
}
```

所以，要使得以内置类型作为基类的自定义类返回基类类型，必须要重写Symbol.species
```js
class MyArray extends Array {
  static get [Symbol.species]() {
      return Array;
  }
}

let items = new MyArray(1, 2, 3, 4);
let subitems = items.slice(1, 3);

console.log(items instanceof MyArray);      // true
console.log(subitems instanceof Array);     // true
console.log(subitems instanceof MyArray);   // false
```

## 例子
```js

class MyClass {
  static get [Symbol.species]() {
    return this;
  }

  constructor(value) {
    this.value = value;
  }

  clone() {
    return new this.constructor[Symbol.species](this.value);
  }
}

class MyDerivedClass1 extends MyClass {
  // empty
}

class MyDerivedClass2 extends MyClass {
  static get [Symbol.species]() {
    return MyClass;
  }
}

let instance1 = new MyDerivedClass1('foo'),
  clone1 = instance1.clone(),
  instance2 = new MyDerivedClass2('bar'),
  clone2 = instance2.clone();

console.log(clone1 instanceof MyClass); // true
console.log(clone1 instanceof MyDerivedClass1); // true
console.log(clone2 instanceof MyClass); // true
// MyDerivedClass2 继承了Myclass，但重写了Symbol.speices
console.log(clone2 instanceof MyDerivedClass2); // false
```


