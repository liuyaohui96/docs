
## prop的大小写
html中特性名大小写不敏感的(case-insensitive), 浏览器会将大小字母转换为小写字母，这意味着，如果想要在props中使用camelCase (驼峰命名法)，需要在定义prop时使用kebab-case (短横线分隔命名) 命名。

注意，使用字符串模板，那么这个限制就不存在。
```js
// 在 HTML 中使用 kebab-case 命名prop
<blog-post post-title="hello!"></blog-post>

// 在props中引用该prop，就可以使用camelCase (驼峰命名法)命名
Vue.component('blog-post', {
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
```