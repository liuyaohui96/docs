
## Document对象方法-创建节点

1. 创建元素节点：Document.createElement()
2. 创建属性节点：Document.createAttribute()
3. 创建文本节点：Document.createTextNode()
4. 创建注释节点：Document.createComment()

## Document.createElement()
创建并返回一个元素节点
```js
// tagName 指定要创建元素类型的字符串
// 返回创建的新元素节点
let element = document.createElement(tagName[, options]);
```

## Document.createAttribute()
创建并返回一个属性节点
```js
attribute = document.createAttribute(name)
// === 例子
let node = document.getElementById("div1");
let a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

## Document.createTextNode()
创建并返回一个文本节点
```js
let commentNode = document.createTextNode(textContent)
```

## Document.createComment()
创建并返回一个注释节点
```js
let commentNode = document.createComment(commentContent) 
```