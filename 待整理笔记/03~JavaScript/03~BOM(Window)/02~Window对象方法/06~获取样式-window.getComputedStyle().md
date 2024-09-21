
## window.getComputedStyle()
应用活动样式表并解析这些值可能包含的计算之后，Window.getComputedStyle（）方法将返回一个包含元素的所有CSS属性值的对象。
```js
// element 指定要获取的element的样式
// pseudoElt，可选，要匹配的伪元素的字符串
// style 只读的，实时的 CSSStyleDeclaration 对象，当元素的样式更改时，它会自动更新本身
let style = window.getComputedStyle(element [, pseudoElt]);
```

## CSSStyleDeclaration 对象
CSSStyleDeclaration 表示一个CSS属性键值对的集合,它的一些属性和方法如下：
1. CSSStyleDeclaration.length   返回属性的数量
2. CSSStyleDeclaration.item(index) 根据指定的下标，从0开始，返回指定item项，更简便地使用`CSSStyleDeclaration[index]`
3. CSSStyleDeclaration.getPropertyValue(property) 根据指定property返回一个DOMString值
4. CSSStyleDeclaration.setProperty(property, value, priority) 设置property为指定的value，priority是可选可用于设置 "important" CSS 优先级的DOMString，如果没有指定, 则当作空字符串。