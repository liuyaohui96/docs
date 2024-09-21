
## transition
`<transition> ` 为单个元素或单个组件应用过渡，过渡效果只会应用到其包裹内容，不会额外渲染 DOM 元素。


```html
<transition :duration="1000">...</transition>
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

## 事件(过渡钩子)
* before-appear
* appear
* after-appear
* appear-cancelled

* before-enter
* enter
* after-enter
* leave-cancelled (v-show only)


* before-leave
* leave
* after-leave
* enter-cancelled

## transition
当items从DOM中插入，更新或者移除(inserted, updated, removed)时，具有多种工具
* 自动为css过渡和动画应用类
* 第三方css动画库，如Animate.css
* 在过渡钩子期间直接使用JavaScript 处理DOm
* 第三方javascript动画库，如Velocity.js
