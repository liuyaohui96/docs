
## HTMLCollection
HTMLCollection 接口表示一个包含了元素（元素顺序为文档流中的顺序）的通用集合（类数组，类似于arguments）。

HTML DOM 中的 HTMLCollection 是即时更新的（live）；当其所包含的文档结构发生改变时，它会自动更新

注意：由于历史原因（DOM4之前，实现该接口的集合只能包含 HTML 元素），该接口被称为 HTMLCollection

## HTMLCollection.length对象属性
1. HTMLCollection.length 返回HTMLCollection对象的项目数

## HTMLCollection.length对象方法
1. HTMLCollection.item(index) 根据index返回对应的项目，更简便的方法是使用`HTMLCollection[index]`访问