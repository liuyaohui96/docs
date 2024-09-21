
## picture
<!-- picture 标签 -->
<picture>
  <!-- 如果media匹配为false，则这个source元素会被跳过 -->
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <!-- 如果type的MIME类型不匹配，source元素会被跳过 -->
  <source srcset="mdn-logo.svg" type="image/svg+xml">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```