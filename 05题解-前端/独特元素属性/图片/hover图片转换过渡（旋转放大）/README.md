

## hover图片转换
hover图片转换：
1. `figure`包围图片，设置固定宽高度，防止放大缩小的溢出
    * `width:...;height:...`
    * `overflow:hidden`
2. img设置
    * `width: 100%;height: 100%`
    * `transition: transform .4s`
1. `img:hover`设置
    * `transform: scale(1.3) rotate(4deg)`
    