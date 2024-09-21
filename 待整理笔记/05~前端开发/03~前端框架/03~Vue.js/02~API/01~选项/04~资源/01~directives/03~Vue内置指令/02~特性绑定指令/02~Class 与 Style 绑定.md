
## Class 与 Style 绑定
1. class 绑定
    * 对象语法： `v-bind:class="{className1: boolean, className2: boolean,...}`
    * 数组语法：`v-bind:class="[expression1|object, expression2 | object, ...]`，数组内的项值期望是字符串或者`{className1: boolean}`的对象形式

2. style 绑定
    * 对象语法：`v-bind:style="{propertyName: value, ...}"` CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名
    * 数组语法(可以将多个样式对象应用到同一个元素上)：`v-bind:syyle="[styleObj1, styleObj2, ...]`

当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。

```html
<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>
```

## style 多重值
style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，Vue只会渲染数组中最后一个被浏览器支持的值

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```