

## Flexbox item Collapsed
为Flexbox item 设置 `visibility: collapse` 可以使得指定的flexbox item 被隐藏，该item的高度会影响到所在row的高度，如果要使得设置了`visibility: collapse`的Flexbox item 显示，可以移除`visibility: collapse`或者设置`visibility: visible`

实验：`visibility:hidden` 与 `visibility: collapse`实验一样

> 当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。但例外的是，如果这个元素是table相关的元素，例如table行，table group，table列，table column group，它的表现却跟display: none一样，也就是说，它们占用的空间也会释放。