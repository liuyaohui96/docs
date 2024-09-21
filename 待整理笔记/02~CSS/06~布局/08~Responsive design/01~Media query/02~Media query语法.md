
## Media query 语法
媒体查询由可选的媒体类型和任意数量的媒体功能表达式组成

@media 的四种常用媒体类型：
1. all：适用于所有媒体设备
2. print：仅适用于打印机
3. screen：仅适用于屏幕设备（台式电脑、平板电脑、移动设备等）
4. speech：仅适用于屏幕阅读器

四个逻辑操作符：
1. and: 连接多个媒体特征（media features），还用于连接媒体类型（media types）与媒体特征（media features）
2. not：否认媒体查询（media query）。如果出现在以逗号分隔的查询列表中，则只会否定应用了该查询的特定查询。如果使用了not，必须使用媒体类型
3. noly：仅在整个查询匹配时才用于应用样式，用于防止较早的浏览器（older browser）不支持带媒体属性的查询而应用到给定的样式
4. ,(commma)：将多个媒体查询合并为一个规则，相当于or运算操作符

常用media query features:
* 宽度（width）。可添加max/min 前缀
* 高度（height）。可添加max/min 前缀
* 设备宽度（device-width）。可添加max/min 前缀
* 设备高度（device-height）。可添加max/min 前缀
* 设备宽高比（device-aspect-ratio）。可添加max/min 前缀 ` @media screen and (device-aspect-ratio: 16/9)`
* 方向（orientation）：landscape | portrait
* 分辨率（resolution）指定输出设备的分辨率（像素密度）。分辨率可以用每英寸（dpi）或每厘米（dpcm）的点数来表示。
* 黑白（monochrome）

```css
/* 默认指定的all媒体类型，指定一个min-width媒体特性 */
@media (min-width: 700px) { ... }
/* and 操作符合并多个媒体特性 */
@media (min-width: 700px) and (orientation: landscape){ ... }

/* 如果是一个800像素宽的屏幕设备，媒体语句将会返回真 */
/* 如果我是一个500像素宽的横屏手持设备，
  尽管第一部分因为宽度问题而不匹配，第二部分仍会成功，因此整个媒体查询返回真 */
@media (min-width: 700px), handheld and (orientation: landscape) { ... }
```

## Media Queries Level 4 语法
1. media feature 可以使用“范围”类型

        ```css
        @media (max-width: 30em) { ... }
        /* 可以表示为 */
        @media (width <= 30em) { ... }

        @media (min-width: 30em) and (max-width: 50em) { ... }
        /* 可以表示为 */
        @media (30em <= width <= 50em ) { ... }


        ```

2. media feature 使用not进行否认

        ```css
        @media (not(hover)) { ... }
        ```

3. 使用or匹配其中一项的media feature

        ```css
        @media (not (color)) or (hover) { ... }
        ```