
## Vue.version
Vue.version 提供字符串形式的 Vue 安装版本号。对社区的插件和组件来说非常有用，可以根据不同的版本号采取不同的策略。

```js
let version = Number(Vue.version.split('.')[0])

if (version === 2) {
  // Vue v2.x.x
} else if (version === 1) {
  // Vue v1.x.x
} else {
  // Unsupported versions of Vue
}
```