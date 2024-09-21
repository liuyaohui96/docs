

## XSS攻击分类
1. 存储型XSS：提交未处理数据存储到数据库，通过数据库读取出来，插入到页面中
2. 反射型XSS：从网页的URL参数注入可以被解析为内容的代码。特征：
3. DOM型XSS：在渲染DOM属性时，攻击脚本插入DOM属性被解析

```html
<!-- ===  存储型XSS-->
<div>{{content}}</div>
<div><script>...s</script></div>

<!-- === DOM型XSS -->
<div class="{{class}}"></div>
<div class="
   "><script>...</script><div class="
"></div>
```