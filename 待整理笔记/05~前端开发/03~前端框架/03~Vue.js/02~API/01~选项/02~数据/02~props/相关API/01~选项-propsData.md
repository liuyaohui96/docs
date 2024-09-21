
## propsData
propsData 创建实例时传递 props，主要用于测试

```js
let Comp = Vue.extend({
  props: ['msg'],
  template: '<div>{{ msg }}</div>'
});

let vm = new Comp({
  propsData: {
    msg: 'hello'
  }
});
```