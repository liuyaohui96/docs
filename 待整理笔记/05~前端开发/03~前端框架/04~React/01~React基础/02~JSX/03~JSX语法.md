
## JSX语法
* 小写字母开头的元素代表一个 HTML 内置标签；大写字母开头表示用户定义的组件，自定义组件必须在作用域内可以被引用

* 标签特性：使用camelCase（小驼峰命名）来定义标签特性，因为JSX 语法上更接近 JavaScript 而不是 HTML。如`tabIndex` 相当于标签特定`tabindex`。特殊的，标签特性class在JSX中表现为`className`

* JSX中的子元素：子元素包含在开始和结束标签之间的 JSX 表达式内容将作为特定属性`props.children`传递给外层组件，可以包含多个子元素。子元素可以是
    * 字符串字面量：JSX 会移除行首尾的空格以及空行，文本字符串之间的新行会被压缩为一个空格
    * JSX元素。可以是表达式定义的或者函数中返回的一个或多个元素
    * JSX表达式，即可以嵌入表达式
    * 函数作为JSX子元素
    * 布尔类型、Null 以及 Undefined 子元素将会忽略。值得注意的是有一些 “falsy” 值，如数字 0，仍然会被 React 渲染，如果想渲染 false、true、null、undefined 等值，你需要先将它们转换为字符串


* JSX元素可以作为表达式被函数返回，也可以作为函数参数
    
* 如果没有子节点，可以使用自闭合的标签形式：如`<div className="sidebar" />`

* 因为JSX 会编译为 React.createElement 调用形式，所以 React 库也必须包含在 JSX 代码作用域内


```jsx
// === 嵌入表达式
const name = 'liuyaohui';
const element = <h1>hello, {name}</h1>
// element 相当于
const element = React.createElement("h1", null, "hello, ", name);

// === JSX标签可以包含多个子元素
<div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
</div>
// 相当于
React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Hello!'),
  React.createElement('h2', null, 'Good to see you here.')
);
```