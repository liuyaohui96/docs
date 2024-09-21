
## Window对象方法-滚动
1. Window.scrollTo() & Window.scroll() 绝对滚动
2. Window.scrollBy() 相对滚动

scroll option 参考：https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions

## Window.scrollTo() & Window.scroll()
滚动到文档中的某个坐标
```js
window.scrollTo(x-coord,y-coord )

window.scrollTo(options)
// === options 参数使用例子
window.scroll({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```


## Window.scrollBy()
滚动指定的距离。正数坐标会朝页面的右下方滚动，负数坐标会滚向页面的左上方
```js
window.scrollBy(x-coord, y-coord);
window.scrollBy(options) 

//=== option 参数使用例子
window.scrollBy({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```