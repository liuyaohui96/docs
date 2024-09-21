
## fetch()自定义请求对象
```js
// === 例子
let myImage = document.querySelector('img');

let myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

let myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

let myRequest = new Request('flowers.jpg');

fetch(myRequest,myInit).then(function(response) {
  ... 
});

// 传入同样的 init 对象到 Request 构造器，来实现同样的效果
let myRequest = new Request('flowers.jpg',myInit);

// init 对象中的 headers 也可以是一个对象字面量
let myInit = { method: 'GET',
               headers: {
                   'Content-Type': 'image/jpeg'
               },
               mode: 'cors',
               cache: 'default' };

let myRequest = new Request('flowers.jpg', myInit);
```