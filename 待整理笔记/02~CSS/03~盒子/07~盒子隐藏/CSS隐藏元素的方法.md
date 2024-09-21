
## CSS隐藏元素的方法
* `display: none`
* `visibility: hidden`
* `opacity: 0`
* `width: 0 & heiht: 0`
* `z-index: -10000` 设置z-index值使其它元素遮盖该元素也算是一种隐藏
* `transform: scale(0,0)`
* `margin-left: -100%`
* `position: relative; left: -100%` & `position:absolute; left:-9999px` 置于屏幕之外
* `overflow: hidden`  隐藏元素溢出部分，占据空间,无法响应点击事件
* `text-index: -9999px`: 只适用于block元素中的文本

## opacity: 0 & visibility: hidden & display: none 的区别
1. 是否占据空间：
    * `display:none` 属性的元素不占据空间，脱离文档流，不能点击；
    * `visibility: hidden`属性占据空间，不能点击。
    * `opacity: 0` 占据空间，可以点击

2. 继承性：
    * `display: none `是非继承属性，子孙元素一起消失，修改子孙节点属性无法显示；
    * `visibility: hidden` ，子元素继承该属性，子，通过设置visibility: visible 可以让子孙节点显示
    * `opacity: 0` ，子元素也会继承opacity，子元素可以重新设置opacity值使得子元素显示

3. 使用场景：
    * `display:none`显示出原来这里不存在的结构
    * `visibility: hidden` 显示不会导致页面结构发生变动
    * `opacity: 0`可以配合transition一起使用

4. 使用性能：
    * 修改`display:none`通常会造成文档重排(回流)。
    * 修改`visibility: hidden`只会造成本元素的重绘
    * 修改`opacity: 0 `只会造成本元素的重绘