

## hover卡片显示内容
1. 设置`.card`卡片
    * `overflow: hidden` 隐藏溢出内容
    * `width: ...;height:`固定宽高
    * `box-shadow: ...;border-radius:...` 美化
2. `.card img`设置图片
    * `width: $card-width; height: ...; object-fit: cover` 设置图片覆盖
    * `transition: margin-top .4s` 设置margin-top属性过渡
3. `.card h3`
    * `margin: 0`移除默认
    * `padding`设置较大的padding-bottom使得后续内容被隐藏
4. `.card p.additioinal-content`
    * `margin: 0`移除默认
    * `padding:...`美化
5. `.card:hover`
    * `img`设置`margin-top: -`设置一个调试的负margin-top值
    * `h3`的`padding-bottom`设置为正常值