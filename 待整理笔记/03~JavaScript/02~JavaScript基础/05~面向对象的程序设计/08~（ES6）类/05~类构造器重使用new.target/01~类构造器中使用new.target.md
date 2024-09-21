
## 类构造器中使用new.target
可以在类构造器中使用`new.target`, 来判断类是如何被调用的。

```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

// new.target is Rectangle
// 使用new调用类，new.target 就是类本身
let obj = new Rectangle(3, 4); // outputs true
```

这个值不总是相同的，如
```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

// new.target is Square
let obj = new Square(3); // outputs false
```