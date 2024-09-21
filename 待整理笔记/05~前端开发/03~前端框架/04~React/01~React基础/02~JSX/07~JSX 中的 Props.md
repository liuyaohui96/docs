
## JSX 中的 Props
JSX 中的 Props 可以是
* 表达式：表达式的值会自动计算作为该prop的值。如果值计算不能使用简单的表达式计算出来，而需要使用到语句，能在 JSX 中直接使用，需要在 JSX 以外的代码中计算
* 字符串字面量
* 如果你没给 prop 赋值，它的默认值是 true


```jsx
// 在 JSX 以外的代码中计算
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
```

## props 属性展开
可以定义一个props对象，然后再JSX的标签上使用扩展运算符进行展开。展开运算符特定场景下很有用，但是很容易将不必要的prop传递给不想关的组件
```jsx
function App() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```