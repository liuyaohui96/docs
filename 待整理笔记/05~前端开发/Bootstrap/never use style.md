# user-select
user-select 是一个CSS属性，控制着用户能否选中文本
use-select: auto|text|none|contain|all|none

* none: 元素及其子元素的文本不可选中
* auto: 在 ::before 和 ::after 伪元素上，计算属性是 none,如果元素是可编辑元素，则计算值是 contain, 否则，如果此元素的父元素的 user-select 的计算值为 all, 计算值则为 all,如果此元素的父级上的 user-select 的计算值为 none, 计算值则为 none,其他计算值则为 text
* text: 用户可以选择文本
* all: 当双击子元素或者上下文时，那么包含该子元素的最顶层元素也会被选中

# pinter-events
 > sets under what circumstances (if any) a particular graphic element can become the target of mouse events


 if `pointer-events: none`, the element is never the target of mouse events

 ## display:inline-flex
 display: inline-flex makes the flex container display inline, there is absolutely no difference in the effect on flex items.

 ## clip
The clip CSS property defines what portion of an element is visible. The clip property applies only to absolutely positioned elements, that is elements with `position:absolute `or `position:fixed`.

* auto: this is the default behavior. Setting clip to auto is the same thing as not using clip at all.
* inherit: well, it inherits the clip value from its parent.
* a shape function. Currently only rect() exists, `clip: rect(<top>, <right>, <bottom>, <left>)`. Both the top and the bottom values define the offset from the top border and the left and right values define the offset from the left border

## orphans & windows
orphans 属性设置或返回一个元素必须在页面底部的可见行的最小数量（用于打印或打印预览），orphans:5 意味着至少有 5 行必须在分页符上面可见。

windows 属性设置或返回一个元素必须在页面顶部的可见行的最小数量（用于打印或打印预览）

## backface-visibility
backface-visibility: visible | hidden;

定义义当元素不面向屏幕时是否可见，visible是当元素背面是可见的，hidden是当元素背面不可见。在旋转元素不希望看到其背面时，该属性很有用。


## transform

transforn: translate(100%);

在CSS3中，所有变形方法都是属于transform属性

* translateX(x)：元素仅在水平方向移动（X轴移动）
* translateY(y)：元素仅在垂直方向移动（Y轴移动）
* transklate(x,y)：元素在水平方向和垂直方向同时移动（X轴和Y轴同时移动）


## text-indent
text-indent: -999px;
sets the length of empty space (indentation) that is put before lines of text in a block. Horizontal spacing is with respect to the left (or right, for right-to-left layout) edge of the containing block-level element's content box.

就是把该元素内的文字移到屏幕外面去，让我们肉眼看不见,搜索引擎或者盲人用的软件能知道

## appearance
所有主流浏览器都不支持 appearance 属性。

Firefox 支持替代的 -moz-appearance 属性。

Safari 和 Chrome 支持替代的 -webkit-appearance 属性。

appearance: normal|icon|window|button|menu|field;


## tabindex
A tabindex="-1" value removes the element from the default navigation flow and also allows it to receive programmatic focus. This means focus can be set to it from a link, or with scripting. This may be useful for elements that should not be navigated to, but need to have focus set to them.