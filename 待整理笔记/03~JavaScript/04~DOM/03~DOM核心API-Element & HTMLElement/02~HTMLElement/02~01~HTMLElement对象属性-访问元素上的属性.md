
## HTMLElement对象属性-访问元素上的属性
1. HTMLElement.title
2. HTMLElement.tabIndex
3. HTMLElement.style
4. HTMLElement.dataset

## HTMLElement.title
表示元素的 title。当鼠标移到节点上时，会以“工具提示”（tool tip）的弹出形式显示该属性的属性值文本

## HTMLElement.tabIndex
获取或设置当前元素的tab键激活顺序.
```js
element.tabIndex = index 
index = element.tabIndex
```
取值需要在0到32767之间。Tab键的遍历顺序是这样的：
1. 对于tabIndex值为正数的元素，如果多个元素的tabIndex值相同，则以他们出现在字符流中的次序来遍历；否则按tabIndex值由小到大的顺序来遍历。
2. 对于不支持tabIndex属性或支持tabIndex属性并将其赋值为0的元素，按照他们出现在字符流中的次序来遍历。
3. 处于不可用状态的元素不会被遍历到

支持tabIndex属性的元素有：
* a
* button,inputselect和textarea
* area
* object


## HTMLElement.style
返回一个 CSSStyleDeclaration 对象，表示元素的 内联style 属性（attribute），但忽略任何样式表应用的属性。style 属性的优先级和通过style设置内联样式是一样。

通常，要了解元素样式的信息，仅仅使用 style 属性是不够的，这是因为它只包含了在元素内嵌 style 属性（attribute）上声明的的 CSS 属性，而不包括来自其他地方声明的样式，如 <head> 部分的内嵌样式表，或外部样式表。

获取一个元素的所有 CSS 属性，应该使用 `window.getComputedStyle()`


## HTMLElement.dataset
获得在元素上设置的自定义数据属性(data-*)集，返回一个DOMString map

自定义的data 属性名称转化成 DOMStringMap 的键值时会遵循下面的规则：
1. 前缀  data- 被去除
2. 对于每个在ASCII小写字母 a到 z前面的减号 (U+002D)，减号会被去除，并且字母会转变成对应的大写字母。
3. 其他字符（包含其他减号）都不发生变化

将键值转换为一个属性的名称，会遵循下面的规则:
1. 减号在转变前一定不能紧跟一个ASCII小写字母 a 到 z之间
2. 添加 data- 前缀;
3. 任何ASCII大写字母 A 到 Z 将转化成一个减号紧跟对应的小写字母
4. 其他字符不会发生变化

```js
// === 转换例子
属性名称 data-abc-def 与键值 abcDef 相对应
```


