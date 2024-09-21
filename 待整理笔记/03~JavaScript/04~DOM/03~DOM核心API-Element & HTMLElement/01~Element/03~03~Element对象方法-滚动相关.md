
## Element对象方法-滚动相关
1. Element.scroll()  & Element.scrollTo()
3. Element.scrollBy()

## Element.scroll() & Element.scrollTo()
将元素滚动到给定元素内的一组特定坐标
```js
Element.scroll(x-coord, y-coord)
Element..scrollTo(options)

// === options 参数举例
element.scroll({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## Element.scrollBy()
依据指定的参数滚动元素
```js
Element.scrollBy(x-coord, y-coord)
Element.scrollBy(options)
```

## Element.scrollIntoView()
滚动元素的父容器，以便可以看到Element
```js
Element.scrollIntoView() // 等同于element.scrollIntoView(true) 
// true 元素的顶端将和其所在滚动区的可视区域的顶端对齐
// false 元素的底端将和其所在滚动区的可视区域的底端对齐
Element.scrollIntoView(alignToTop); // Boolean型参数 
```

注意，取决于其它元素的布局情况，此元素可能不会完全滚动到顶端或底端