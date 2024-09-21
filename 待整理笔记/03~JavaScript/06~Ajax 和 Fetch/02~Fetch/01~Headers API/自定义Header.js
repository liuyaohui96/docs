let content = 'Hello World';
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

// 也可以传一个多维数组或者对象字面量
myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});

console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.getAll('X-Custom-Header')); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.getAll('X-Custom-Header')); // [ ]
