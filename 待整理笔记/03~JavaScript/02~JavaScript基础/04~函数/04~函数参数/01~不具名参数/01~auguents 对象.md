
## arguments对象
函数的实际参数会被保存在一个类似数组的arguments对象中。在函数内可以`arguments[i]`找到对应的参数

```js
// === 例子
// 第一个参数作为separator分隔符，第二个往后的参数使用arguments进行连接
function myConcat(separator) {
   var result = ''; // 把值初始化成一个字符串，这样就可以用来保存字符串了！！
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");


// === 例子，指定对象与对象属性，复制指定对象的属性
function pick(object) {
  let result = Object.create(null);

  // start at the second parameter
  for (let i = 1, len = arguments.length; i < len; i++) {
    result[arguments[i]] = object[arguments[i]];
  }

  return result;
}

let book = {
  title: '如何学习ES6',
  author: 'liuyaohui',
  year: 2019
};

let bookData = pick(book, 'author', 'year');

console.log(bookData.author); // "liuyaohui"
console.log(bookData.year); // 2019
```