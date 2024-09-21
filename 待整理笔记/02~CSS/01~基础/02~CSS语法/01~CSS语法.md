## 语法
```css
/* selector 出错，将会应用样式与元素发生错误 */

/* description 出错将不会对其进行解析，不会影响其余description的解析 */
selector{
  /* description = property + value  */
  property: value;
}

/* selectorGroup任意一个selector出错，所以语法都会出错 */
selectorGroup{
  property: value;
}
```
