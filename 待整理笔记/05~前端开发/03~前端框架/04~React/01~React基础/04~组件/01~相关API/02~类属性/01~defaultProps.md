
## defaultProps
defaultProps 可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 null 的情况   

```jsx
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```