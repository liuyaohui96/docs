
## @mixin
利用混合器，可以很容易地在样式表的不同地方共享样式，如果你发现自己在不停地重复一段样式，那就应该把这段样式构造成混合器。判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。如果你能找到一个很好的短名字来描述这些属性修饰的样式

混合器是在规则内使用`@include`指令引入

```css
@mixin name {
  property: value;
  property: value;
  ...
}
/* 具备参数的混合器 */
@mixin name($property...) {
  property: value;
  property: $property;
  ...
}
/* 参数可以赋默认值 */
@mixin name($property1: defaultValue, ...) {
  property: value;
  property: $property1;
  ...
}

/* === 例子 */
@mixin bordered($color, $width) {
  border: $width solid $color;
}
/* 引入混合器 */
.myArticle {
  @include bordered(blue, 1px);
}

/* 编译结果 */
.myArticle {
  border: 1px solid blue;
}
```