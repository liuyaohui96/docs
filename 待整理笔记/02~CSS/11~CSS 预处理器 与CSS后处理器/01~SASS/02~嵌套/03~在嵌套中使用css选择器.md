
## 在嵌套中使用css选择器
在嵌套中可以使用css选择器
```css
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
/* 编译结果 */
.container h1, .container h2, .container h3 { margin-bottom: .8em }
```