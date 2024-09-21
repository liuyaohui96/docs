

## 全屏背景图片
1. html元素设置`background: url() center/cover center/cover no-repeat fixed;`相当于
    * `background-image: url()`
    * `background-position: center`
    * `background-size: cover`
    * `background-repeat: no-repeat`
    * `background-attachment: fixed`
2. 另外一种方式是`body>div`设置
    * `position: fixed;left: 0;top: 0;right: 0;bottom: 0;`
    * `background: url('./reg_bg_min.jpg') center/cover no-repeat fixed;`
    * `z-index: -999`放置在低层
