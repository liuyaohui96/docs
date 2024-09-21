// 访问器属性被创建在CustomHTMLElement上，并且像其他类属性一样是不可枚举的属性
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

let descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype,
  'ht\
  ml'
);
console.log('get' in descriptor); // true
console.log('set' in descriptor); // true
console.log(descriptor.enumerable); // false
