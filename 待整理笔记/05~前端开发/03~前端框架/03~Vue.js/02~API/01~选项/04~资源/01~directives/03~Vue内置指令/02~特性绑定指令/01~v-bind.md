
## v-bind
v-bind 用于绑定元素特性，或者组件prop（绑定 prop 时，prop 必须在子组件中声明，否则都成为非prop特性），语法格式是`v-bind:attrOrProp.modifier="value"`:
* attrOrProp ：指定元素特性名称，或者组件prop名称。attrOrProp可以是动态的，语法是`v-bind:[attrOrProp].modifier="value"`
* modifer：修饰符，有：
    * .prop：作为DOM属性(dom property)而不是普通属性(attribute). 如果标签是一个组件，`.prop`会在元素的`$el`属性上设置属性
    * .camel：将 kebab-case 命名转换为camelCase 命名
    * .sync：语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器（见组件自定义事件的sync修饰符）

当定义`class | style`属性的时候，在绑定 class 或 style 特性时，支持其它类型的值，如数组或对象

没有参数(argument)时，可以绑定包含attribute/value 的对象， 这个模式下的`class | style`不支持对象形式

```html
<!-- 绑定一个属性 -->
<img v-bind:src="imageSrc">
<!-- 动态特性名 (2.6.0+) -->
<button v-bind:[key]="value"></button>
<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName">



<!-- 绑定一个有属性的对象 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
<!-- 通过 prop 修饰符绑定 DOM 属性 -->
<div v-bind:text-content.prop="text"></div>

<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
<my-component :prop="someThing"></my-component>
```
