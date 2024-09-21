

## full-width图片
因为包含图片的容器的限制，某些情况下需要全屏图片，单独设置`width:100%`只能铺满容器而不是屏幕，单独设置`width: 100vh`会使得图片溢出屏幕，对于full-width图片：
1. `width: 100vh`
2. 设置位置和负外边距`position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw`