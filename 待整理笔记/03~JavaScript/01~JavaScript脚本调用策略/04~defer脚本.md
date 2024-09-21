
## defer脚本
defer 特性通知浏览器在该脚本将在文档完成解析后，触发 DOMContentLoaded 事件前执行。 defer 属性的脚本将按照在页面中出现的顺序加载

```js
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script.js"></script>
```

