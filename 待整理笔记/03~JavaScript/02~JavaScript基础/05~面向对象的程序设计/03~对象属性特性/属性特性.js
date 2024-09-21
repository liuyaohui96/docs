/*
对于数据属性_year，value 等于最初的值，configurable 是 false，而 get 等于 undefined。
对于访问器属性 year，value 等于 undefined，enumerable 是 false，而 get 是一个指向 getter
函数的指针。
*/

var book = {};
Object.defineProperties(book, {
  _year: {
    value: 2004
  },
  edition: {
    value: 1
  },
  year: {
    get: function() {
      return this._year;
    },
    set: function(newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
});
var descriptor = Object.getOwnPropertyDescriptor(book, '_year');
console.log(descriptor.value); //2004
console.log(descriptor.configurable); //false

console.log(typeof descriptor.get); //"undefined"
var descriptor = Object.getOwnPropertyDescriptor(book, 'year');
console.log(descriptor.value); //undefined
console.log(descriptor.enumerable); //false
console.log(typeof descriptor.get); //"function"
