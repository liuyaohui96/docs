
## React.createElement()
React.createElement() 用于创建并返回React 元素，需要的参数有
* type：类型参数，可以是
    * html元素标签
    * 也可以是React自定义组件（class组件或函数组件）
    * React fragment 类型
* props：可选，是一个对象，包含了定义在元素或组件上的特性
* `[...children]`：可选，包含了元素中的子元素，子元素可以是多个，类型可以是：
    * 字符串字面量：JSX 会移除行首尾的空格以及空行，文本字符串之间的新行会被压缩为一个空格
    * JSX元素。可以是表达式定义的或者函数中返回的一个或多个元素
    * JSX表达式，即可以嵌入表达式
    * 函数作为JSX子元素
    * 布尔类型、Null 以及 Undefined 子元素将会忽略。值得注意的是有一些 “falsy” 值，如数字 0，仍然会被 React 渲染，如果想渲染 false、true、null、undefined 等值，你需要先将它们转换为字符串

使用JSX会自动转换成使用 React.createElement() 的形式，所以一般不需要直接调用`React.crateElement()`方法


```jsx
React.createElement(type, [props],[...children])
```