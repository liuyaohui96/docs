

## hover文字下划线动画
1. 为文本设置
    * `display: inline-block` 盒子宽度和文本宽度一样
    * `position: relative` 方便`::after`定位
2. `::after`设置
    * `position: absolute; left: 0; bottom: -4px;`
    * `width: 100%;height: 4px`设置高度宽度
    * `backgruond-color:...`
    * `transform: scale(0)` 隐藏
    * `transform-origin: left bottom`转换原点
    * `transition: transform .4s` 过渡
3. `:hover::after`
    * `transform: scale(1)` 显示