# CSS & Style

## 获取和设置样式
```js
$el.css("color");// jQuery

// Native
// 注意：此处为了解决当 style 值为 auto 时，返回 auto 的问题
const win = el.ownerDocument.defaultView;

// null 的意思是不返回伪类元素
win.getComputedStyle(el, null).color

// ===== Set style
$el.css({ color: "#ff0011" }); // jQuery

el.style.color = '#ff0011';
```

## 增加减少样式
```js
$el.addClass(className); // jQuery
$el.removeClass(className);// jQuery

el.classList.add(className);
el.classList.remove(className);

// 切换
$el.toggleClass(className); // jQuery
el.classList.toggle(className);
```

## 是否有某个类
```js
// === 是否有某个类
$el.hasClass(className);// jQuery
el.classList.contains(className);
```

## 获取高度和宽度
待理解

## 位置与偏移
```js
// 位置
$el.position();

{ left: el.offsetLeft, top: el.offsetTop }

// === 滚动到顶部
// jQuery
$(window).scrollTop();

// Native
(document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
```
offset 待理解