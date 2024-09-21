
## component
`<component>` 渲染一个“元组件”为动态组件，根据它的is特性的值来决定哪个组件被渲染

`<component>`特性：
* is：根据值来决定哪个组件被渲染，值可以是组件名称，组件选项对象，组件构造函数
* inline-template ：boolean值

```html
<!-- 动态组件由 vm 实例的属性值 `componentId` 控制 -->
<component :is="componentId"></component>

<!-- 也能够渲染注册过的组件或 prop 传入的组件 -->
<component :is="$options.components.child"></component>
```