
## JSX语法糖
JSX 是`React.createElement(component, props, ...children)` 函数的语法糖
```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
// 相当于
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
// React.createElement() 会创建一个这样的对象
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```
