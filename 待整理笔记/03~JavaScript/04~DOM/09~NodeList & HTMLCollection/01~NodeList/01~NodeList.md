
## NodeList
NodeList 对象是一个节点的集合，是由 `Node.childNodes` 和 `document.querySelectorAll` 返回的都是该类型

NodeList不是一个数组，是一个类似数组的对象(Like Array Object)。虽然NodeList不是一个数组，但是可以使用forEach()对其进行迭代。虽然NodeList不是一个数组，但是可以使用forEach()对其进行迭代

一些情况下，NodeList 对象是一个实时集合，也就是说，如果文档中的节点树发生变化，则已经存在的实时 NodeList 对象也会随之变化。例如，Node.childNodes 是实时的。
其他情况下，NodeList 是一个静态集合，也就意味着随后对文档对象模型的任何改动都不会影响集合的内容。比如document.querySelectorAll 就会返回一个静态的 NodeList

## 为什么 NodeList 不是数组？
NodeList 对象在某些方面和数组非常相似，看上去可以直接使用从 Array.prototype 上继承的方法。然而，除了 forEach 方法，NodeList 没有这些类似数组的方法。

JavaScript 的继承机制是基于原型的。数组元素之所以有一些数组方法（比如 forEach 和 map），是因为它的原型链上有这些方法如下:

myArray --> Array.prototype --> Object.prototype --> null（想要获取一个对象的原型链，可以连续地调用 Object.getPrototypeOf，直到原型链尽头）。
forEach，map 这些方式其实是 Array.prototype 这个对象的方法。

和数组不一样的是，NodeList 的原型链是这样的：
myNodeList --> NodeList.prototype --> Object.prototype --> null

NodeList的原型上除了类似数组的 forEach 方法之外，还有 item，entries，keys 和 values 方法。

解决办法：
1. 一个解决办法就是把 Array.prototype 上的方法添加到 NodeList.prototype 上。可是，要注意扩展DOM对象的原型是非常危险的
2. 将某个宿主对象 （如 NodeList） 作为 this 传递给原生方法 （如 forEach）

```js
// === 方法2举例
let forEach = Array.prototype.forEach;

let divs = document.getElementsByTagName( 'div' );
let firstDiv = divs[ 0 ];

forEach.call(firstDiv.childNodes, function( divChild ){
  divChild.parentNode.style.color = '#0F0';
});
```