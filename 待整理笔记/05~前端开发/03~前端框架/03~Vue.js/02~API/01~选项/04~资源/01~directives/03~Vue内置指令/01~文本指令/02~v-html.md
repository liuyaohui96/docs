
## v-html
v-html 指定的值更新元素的`innerHTML`，语法是`v-html="innerHTML"`。注意，是作为普通HTML模板插入而不是Vue的编译模板

注意，在网站上动态渲染(dynamically rendering)任意HTML是危险的，因为这容易引起XSS attacks，仅在信任的内容上使用`v-html`, 而不要再用户提供的内容上使用。

注意，在单文件组件（single file component）里， 作用域样式（scoped style）不会应用在 v-html 内部，因为那部分 HTML 没有被 Vue 的模板编译器处理。如果希望 作用域样式(scoped style），以替换为 CSS Modules 或用一个额外的全局 <style> 元素手动设置类似 BEM 的作用域策略。
```js
<div v-html="html"></div>
```