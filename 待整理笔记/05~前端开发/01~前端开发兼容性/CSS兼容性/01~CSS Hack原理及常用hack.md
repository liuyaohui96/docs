## css hack
解决各浏览器对 CSS 解释不同所采取的，针对不同浏览器制作不同CSS样式


## 常见的hack方法
可以使用那个一个IE test 的工具进行测试IE浏览器
1. css 属性前缀
2. 选择器前缀
3. IE条件注释
```css
/* === css 属性前缀 */
_property: value; /* IE6及以下 */
*property: value; /* IE7及以下 */
property: value\9; /* IE9以下 */
property: value\0; /* IE11以下 */

/* === 选择器前缀 */
*html selector /* IE6 */
*+html selecotr /* IE7 */
:root selector /* IE9以上以及现代浏览器 */
```

```html
<!-- ==== IE条件注释 -->

<!--[if IE]>
  Special instructions for IE 6 here
<![endif]-->

<!--[if IE6]>
  Special instructions for IE 6 here
<![endif]-->

<!--[if lte IE6]>
  Special instructions for IE 6 here
<![endif]-->

<!--[if gte IE6]>
  Special instructions for IE 6 here
<![endif]-->

<!--[if ! IE6]>
  Special instructions for IE 6 here
<![endif]-->
```