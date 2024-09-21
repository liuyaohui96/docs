

## NodeList对象方法

1. NodeList.item
2. 迭代方法（显然，NodeList 也是一个内置的迭代对象，所以可以使用迭代方法）

## NodeList.item
```js
// index 从0开始
// 如果索引越界,该方法不会抛出异常,只会返回null
nodeList.item(index) 

// 更简单的语法来从一个NodeList对象中获取指定索引的节点
nodeList[index]
```

## 迭代方法
1. NodeList.entries() 返回一个 iterator,允许遍历此对象中包含的所有key/value
2. NodeList.keys() 方法返回 iterator ，此方法允许遍历这个对象中包含的所有的key
3. NodeList.keys() 方法返回 iterator ，此方法允许遍历这个对象中包含的所有的value
4. NodeList.prototype.forEach()

```js
// callback 的参数分别是item, index, list
 // item 是当前NodeList的item
 // index 是当前NodeList的index
 // list 即当前的NodeList
// thisArg 是运行callback中的this的指向
NodeList.forEach(callback[, thisArg]);


// === 仅举例NodeList.entries
let node = document.createElement("div"); 
let kid1 = document.createElement("p"); 
let kid2 = document.createTextNode("hey"); 
let kid3 = document.createElement("span"); 
node.appendChild(kid1); 
node.appendChild(kid2); 
node.appendChild(kid3); 

let list = node.childNodes;

// 使用 for..of 循环
for(let entry of list.entries()) { 
  console.log(entry);
}
```
