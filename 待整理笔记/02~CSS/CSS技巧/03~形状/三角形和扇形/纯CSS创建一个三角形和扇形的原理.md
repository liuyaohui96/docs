## 三角形
```css
/* width & height 为 0，则消除内部的空隙 */
selector{
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #ff0000;
}

/* 或 */
selector{
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top: 20px solid blue;
}
```

## 扇形
```css
selector{
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top: 20px solid blue;
  border-radius: 20px;
}
```