
## 响应式排版
1. rem
2. vw

```css
html { 
  font-size: 1em; 
} 

h1 { 
  font-size: 2rem; 
} 

@media (min-width: 1200px) { 
  h1 {
    font-size: 4rem; 
  }
} 
```

## vw
1vw等于视口宽度的百分之一，这意味着如果您使用vw设置字体大小，它将始终与视口的大小有关
```css
h1 {
  font-size: 6vw;
}
```
上述操作的问题在于，用户失去了使用vw单元缩放任何文本集的能力，因为该文本始终与视口的大小有关。
因此，永远不要仅使用视口单位设置文本。解决办法是使用`calc()`

```css
/* 字体会随着您增加视口的大小而逐渐增加 */
h1 {
  font-size: calc(1.5rem + 3vw);
}
```