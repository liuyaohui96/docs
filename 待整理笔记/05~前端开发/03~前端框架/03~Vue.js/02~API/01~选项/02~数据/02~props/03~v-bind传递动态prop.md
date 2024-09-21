
## v-bind传递动态prop
可以配合v-bind指令传递动态的prop

```html
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>
```

## 传递一个对象的所有属性作为prop
将一个对象的所有属性都作为 prop 传入，你可以使用不带参数的 v-bind
```html
<!-- 对象post -->
post: {
  id: 1,
  title: 'My Journey with Vue'
}

<!-- 对象的所有属性都作为 prop 传入，你可以使用不带参数的 v-bind -->
<blog-post v-bind="post"></blog-post>
<!-- 相当于 -->
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```