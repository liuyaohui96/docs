# DOM处理

## 移除子元素
```js
$el.remove(); // jQuery

el.parentNode.removeChild(el);
el.remove(); // Only latest, NO IE
```

## 替换元素
```js
$('.inner').replaceWith('<div class="outer"></div>');

//Native
Array.prototype.forEach.call(document.querySelectorAll('.inner'),(el) => {
  const outer = document.createElement("div");
  outer.className = "outer";
  el.parentNode.insertBefore(outer, el);
  el.parentNode.removeChild(el);
});
```

## 获取和设置文本,html
```js
$el.text(); // jQuery
$el.text(string); // jQuery

el.textContent;
el.textContent = string;

// === html
$el.html(); // jQuery
$el.html(htmlString); // jQuery

el.innerHTML;
el.innerHTML = htmlString;
```

## 插入子节点
```js
// ===== 插入到子节点末尾
$el.append("<div id='container'>hello</div>");

el.appendChild(newEl); // 增加元素
el.insertAdjacentHTML('beforeend', 
  '<div id="container">Hello World</div>'); // 增加html

// ===== 插入到子节点头部
$el.prepend("<div id='container'>hello</div>"); // jQuery
el.insertBefore(newEl, el.firstChild); // 元素
el.insertAdjacentHTML('afterbegin', 
  '<div id="container">Hello World</div>'); // html

// ===== insertBefore
$newEl.insertBefore(queryString); // jQuery
;

if (el.parentNode) {
  el.parentNode.insertBefore(newEl, el);
}

el.insertAdjacentHTML('beforebegin ', 
  '<div id="container">Hello World</div>')

// ==== insertAfter
$newEl.insertAfter(queryString); // jQuery

if (el.parentNode) {
  el.parentNode.insertBefore(newEl, el.nextSibling);
}
el.insertAdjacentHTML('afterend', '<div id="container">Hello World</div>'); //html
```

## 深拷贝被选元素
```js
$el.clone(); //jQuery

el.cloneNode(); 
```

## 清空元素
```js
//jQuery
$el.empty();

el.innerHTML = '';
```

## 元素放置在指定的HTML结构(wrap)
待理解

## 移除被选元素的父元素的DOM结构(unwrap)
待理解

##  解析 HTML/SVG/XML 字符串
```js
// jQuery
$(`<ol>
  <li>a</li>
  <li>b</li>
</ol>
<ol>
  <li>c</li>
  <li>d</li>
</ol>`);

// Native
range = document.createRange();
parse = range.createContextualFragment.bind(range);

parse(`<ol>
  <li>a</li>
  <li>b</li>
</ol>
<ol>
  <li>c</li>
  <li>d</li>
</ol>`);
```

## DOM 元素是不是其他 DOM 元素的后代
```js
$.contains(el, child); // jQuery

el !== child && el.contains(child);
```

## 全局执行 JavaScript 代码
待理解