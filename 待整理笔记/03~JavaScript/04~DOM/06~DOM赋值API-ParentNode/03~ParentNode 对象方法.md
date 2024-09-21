
## parentNode 方法ParentNode 对象方法
1. ParentNode.append()
2. ParentNode.prepend()
3. ParentNode.querySelector() & ParentNode.querySelectorAll()

## ParentNode.append() 
ParentNode.append() 在ParentNode的最后一个子节点之后插入一组 Node 对象或 DOMString 对象。
被插入的 DOMString 对象等价为 Text 节点

```js
// nodes 一组要插入的 Node 或 DOMString 对象
ParentNode.append((Node or DOMString)... nodes);
```

与 Node.appendChild() 的差异:
1. ParentNode.append()允许追加  DOMString 对象，而 Node.appendChild() 只接受 Node 对象。
2. ParentNode.append() 没有返回值，而 Node.appendChild() 返回追加的 Node 对象。
3. ParentNode.append() 可以追加几个节点和字符串，而 Node.appendChild() 只能追加一个节点。


## ParentNode.prepend()
ParentNode.prepend 方法可以在父节点的第一个子节点之前插入一系列Node对象或者DOMString对象。DOMString会被当作Text节点对待（也就是说插入的不是HTML代码）

```js
// nodes 一组要插入的 Node 或 DOMString 对象
ParentNode.prepend((Node or DOMString)... nodes);
```

## ParentNode.querySelector() & ParentNode.querySelectorAll()
1. ParentNode.querySelector()：返回以当前元素为根元素，匹配给定选择器的第一个元素 Element
2. ParentNode.querySelectorAll() 返回以当前元素为根元素的匹配给定选择器组的元素列表NodeList