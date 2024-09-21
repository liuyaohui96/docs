
## template
tempalte 是字符串，会将字符串中的内容作为模板替代挂载元素，除非模板内有分发插槽(distribution slots)，挂载元素内部所有内容都给被忽略。出于安全考虑，不要使用其他人生成的内容作为template，使用开发者信任的 Vue template

如果Vue实例具有render funciton, template将会被忽略

如果字符串值以`#`开始，它会被作为selector，匹配的元素的innerHTML会作为template string；
往往不会直接在temple直接书写html字符串，这样会与js代码混合在一起，不便于维护，经常使用`script type="x-template">`来引入template。
```html
<!-- 使用`script type="x-template">`来引入template -->
<script id="tp1" type="x-template">
    <p>hello world</p>
</script>
<script>
var vm = new Vue({
    el: '#app',
    // 匹配元素的innerHTML会作为template string
    template: '#tp1'
})
</script>
```