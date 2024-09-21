
## parent
parent 指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 `this.$parent` 访问父实例，子实例被推入父实例的 `$children` 数组中。


注意：节制地使用`$parent 和 $children`, 它们是应急使用的，更好的推荐是使用props和events实现父子组件的通信