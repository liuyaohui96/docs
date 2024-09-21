参考：https://github.com/nefe/You-Dont-Need-jQuery

# Query Selector
使用document.querySelector 或 document.querySelectorAll 获取元素对象
1. document.querySelector 返回第一个匹配的 element
2. document.querySelectorAll 返回nodeList, 转换为数组的方法
  * [...nodeList]
  * [].slice.call()

> 注意：匹配不到任何 Element，jQuery 返回空数组 []，document.querySelector 返回 null。另外，document.querySelector 和 document.querySelectorAll 性能较差。

## 后代查询
```js
// =======后代查询
$el.find('li'); // jQuery
el.querySelectorAll('li');
```

## 兄弟元素和上下元素
```js
// ====兄弟元素
$el.siblings(); // jQuery
[...el.parentNode.children].filter((child) =>
  child !== el
)
//或者
Array.prototype.filter.call(el.parentNode.children, (child) =>
  child !== el
);

// 上下元素
$el.prev(); // jQuery
$el.next(); // jQuery
el.previousElementSibling;
el.nextElementSibling;
```

## 第一个祖先元素
```js
// jQuery
$el.closest(queryString);

el.closest(selector);
// 兼容写法
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }
  return null;
}
```

## 获取和设置属性
```js
$el.attr('foo');  // jQuery
// jQuery, note that this works in memory without change the DOM
$el.attr('foo', 'bar'); 

el.getAttribute('foo');
el.setAttribute('foo', 'bar');

// ==== 获取 data- 属性
$el.data('foo'); // jQuery
el.getAttribute('data-foo');
```
