
## Element对象属性-其他
1. Element.innerHTML
2. Element.tagName 

## Element.innerHTML
返回和设置一个用DOMString（HTML语法）表示的元素后代

安全问题：用 innerHTML 插入文本到网页中并不罕见。但这有可能成为网站攻击的媒介，从而产生潜在的安全风险问题。
```js
const name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// ...

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case

// === 有很多不依赖 <script> 标签去执行 JavaScript 的方式。
  // 所以当你使用innerHTML 去设置你无法控制的字符串时，这仍然是一个安全问题
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```
当插入纯文本时，建议不要使用 innerHTML 。取而代之的是使用 Node.textContent ，它不会把给定的内容解析为 HTML，它仅仅是将原始文本插入给定的位置。

## Element.tagName 
Element.tagName  返回元素用string表示的标签名称