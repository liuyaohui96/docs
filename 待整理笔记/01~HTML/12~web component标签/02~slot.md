
## slot
`<slot>` 标签，是Web组件内的一个占位符，在后期使用自定义标记语言填充

常用属性：
* name：拥有name属性的插槽叫具名插槽

```html
<template id="element-details-template">
  <style>
    details {font-family: "Open Sans Light", Helvetica, Arial, sans-serif }
    .name {font-weight: bold; color: #217ac0; font-size: 120% }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0; 
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9; 
      border-radius: 4px;
    }
    .attributes { margin-left: 22px; font-size: 90% }
    .attributes p { margin-left: 16px; font-style: italic }
  </style>
  <details>
    <summary>
      <code class="name">&lt;<slot name="element-name">NEED NAME</slot>&gt;</code>
      <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr>
</template>
```