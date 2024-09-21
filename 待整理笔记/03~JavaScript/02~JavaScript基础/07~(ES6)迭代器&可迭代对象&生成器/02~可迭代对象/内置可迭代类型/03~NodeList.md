
## NodeList内置迭代器
在HTML规范而非ES6规范中，`NodeList`也包含了默认的内置迭代器
```js
const divs = document.querySelectorAll('div');
for(let div of divs){
  console.log(div)
}
```