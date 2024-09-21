
## inheritAttrs（选项）
inheritAttrs 是一个boolean值，默认是true，指示是否将非prop特性应用在组件的根元素上。

注意：这个选项不影响 class 和 style 特性

配合`vm.$attrs`可以让非props特性在指定元素上生效

## vm.$attrs
vm.$attrs 是一个包含所有非props特性 (class 和 style 除外)的对象，是只读属性
