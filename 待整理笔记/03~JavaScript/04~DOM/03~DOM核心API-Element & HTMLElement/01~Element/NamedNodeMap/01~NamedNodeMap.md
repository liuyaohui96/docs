
## NamedNodeMap
NamedNodeMap 接口表示属性节点 Attr 对象的集合。尽管被称为 NamedNodeMap，但这个接口不是用来处理节点对象(Node)，而是用来处理属性节点对象(Attr)，属性节点原来是一种特殊的节点(Node)，仍然在某些实现环境（浏览器）中有效。

在 NamedNodeMap 里面的对象可以像数组一样通过索引来访问，但是它和 NodeList 不一样，对象的顺序没有指定

NamedNodeMap 对象是即时的(live)，因此，如果它内部包含的对象发生改变的话，该对象会自动更新到最新的状态。

