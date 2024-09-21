参考文章：https://juejin.im/post/5cb66fdaf265da0384128445#heading-0

DOM 中的某些部分发生变化,可能会触发回流或重绘，如果项目中越多的节点需要经历回流/重绘，应用就会表现得越慢。virtual dom 尝试去最小化回流/重绘步骤，从而在大型且复杂的项目中得到更好的性能

## react 的virtual dom
VirtualDOM的主要思想就是模拟DOM的树状结构，在内存中创建保存映射DOM信息的节点数据，在由于交互等因素需要视图更新时，先通过节点数据进行diff后得到差异结果后，复杂的更新逻辑都在VirtualDOM处理完成，只将最终的更新结果发送给浏览器中的DOM树执行，避免了冗余琐碎的DOM树操作负担，进而提高性能。

它的核心是diff算法，diff算法的复杂度与效率是决定VirtualDOM能够带来性能提升效果的关键因素


## 为何使用虚拟DOM
1. 提高开发效率。更关注我们的业务逻辑而非DOM操作。DOM操作由React完成
2. React 的性能提升。VitrualDom的优势在于React的Diff算法和批处理策略，React在页面更新之前，提前计算好了如何进行更新和渲染DOM，在这个过程中React帮助我们"提升了性能"。

## virtual dom 的实现
JSX只是为 `React.createElement(component, props, ...children)`方法提供的语法糖
ceateElement函数的具体实现为：
1. 将ref, key, self, source 从config(即形参props)中提取出来，将去除特殊属性的其他属性放到props数组
2. 获取子元素。首先得到子元素个数
  - 如果是1，赋值给props.children
  - 如果是多个，子元素填充为一个数组赋值给props.children
3. 从defaultProps中取出属性，并在props对象中进行相应复制


