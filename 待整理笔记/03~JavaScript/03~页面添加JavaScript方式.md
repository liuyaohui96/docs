
## 页面添加JavaScript方式
1. 内部JavaScript
2. 外部JavaScript
3. 内部JavaScript处理器

## 内部JavaScript
```html
<body>
<!-- 在 </body> 标签结束前插入 -->
<script>
  // 在此编写 JavaScript 代码
</script>
</body>
```

## 外部JavaScript
```html
<script src="script.js" async></script>
```

## 内部JavaScript处理器
```html
<!-- 不建议这样做。 这将使 JavaScript 污染到 HTML -->
<button onclick="createParagraph()">点我呀</button>
```