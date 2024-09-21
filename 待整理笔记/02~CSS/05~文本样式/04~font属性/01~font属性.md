
## font属性
font 是 ` font-style, font-variant, font-weight, font-stretch, font-size, line-height, font-family`属性的缩写属性

约束：
* 必须包含`font-size & font-family`
* 可选的包含`font-style, font-variant, font-weight, line-height`
* font-style, font-variant 和 font-weight 必须在 font-size 之前
* line-height 必须跟在 font-size 后面，由 "/" 分隔，例如 "16px/3"
* font-family 必须最后指定

```css
font: <font-style> <font-varint> <font-weight> <font-size> <line-height> <font-family>
```