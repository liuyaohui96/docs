// 意味着抽象基类， new Shape会抛出错误
// abstract base class
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('This class cannot be instantiated directly.');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
}

let x = new Shape(); // throws error

let y = new Rectangle(3, 4); // no error
console.log(y instanceof Shape); // true
