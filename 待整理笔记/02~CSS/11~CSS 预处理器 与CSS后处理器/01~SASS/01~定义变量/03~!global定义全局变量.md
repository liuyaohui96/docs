
## !global定义全局变量
```css
/* === 例子 */
$myColor: red;
h1 {
  /* !global定义全局变量 */
  $myColor: green !global;
  color: $myColor;
}

p {
  color: $myColor;
}
/* 编译结果 */
h1 {
  color: green;
}

p {
  color: green;
}
```