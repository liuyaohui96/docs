
## Vue.config.keyCodes
Vue.config.keyCodes 是一个对象，给 v-on 自定义键位别名

```js
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 179,
  up: [38, 87]
}

<input type="text" @keyup.media-play-pause="method">
```