
## ChildNode对象方法
1. ChildNode.remove()
2. ChildNode.replaceWith()
3. ChildNode.before()
4. ChildNode.after()

## ChildNode.remove()
ChildNode.remove() 方法，把对象从它所属的 DOM 树中删除

## ChildNode.replaceWith()
用一套 Node 对象或者 DOMString 对象，替换了该节点父节点下的子节点 。DOMString 对象被当做等效的Text 节点插入

```js
ChildNode.replaceWith((Node or DOMString)... nodes);
```

## ChildNode.before()
ChildNode.before 方法可以在ChildNode这个节点的父节点中插入一些列的 Node 或者 DOMString 对象，位置就是在ChildNode节点的前面，DOMString 对象其实和 Text节点一样的方式来完成插入的
```js
ChildNode.before((Node or DOMString)... nodes);
```

## ChildNode.after()
ChildNode.after() 在其父节点的子节点列表中插入一些 Node 或 DOMString 对象。插入位置为该节点之后。DOMString 对象会被以 Text 的形式插入
```js
ChildNode.after((Node or DOMString)... nodes)
```