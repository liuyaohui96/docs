

## 旋转的loader
旋转的loader（spinner loader）：
1. 设置动画`@keyframe spinner-loader`
    * 最终状态：`transform:rotate(360deg)`旋转一周
2. `div.spinner-loader`设置旋转的loader
    * box-model：`width:...;height:...;border: $border-width solid $border-color;border-right-color: transparent;border-radius:50%;` 设置边框，设置任意边框一边颜色为透明，设置圆角边框
    * 动画：`animation:$animation-name $animation-function $animation-duration $animation-delay $animation-count`
     

## 跳动的loader
跳动的loader（bouncing loader）：
1. 设置动画`@keyframe bouncing-loader`
    * 最终状态：`opacity: .2`设置透明度切换
    * 最终状态：`transform: translate(0, -16px)`设置最终向上移动16px
2. loader容器设置`.bouncing-loader`设置：
    * `display: flex`使用flexbox布局loader
    * 如`justify-content:center`设置居中
    * `gap:...`设置容器内flex item的gutter
3. `.bouncing-loader > div*n`设置圆形的跳动loader
    * box-model：`width:...;height:...;border-radius:50%`
    * 外观：`background-color:...`
    * 动画：`animation:bouncing-loader...`
4. `.bouncing-loader>div:nth-child(n)`设置延迟，使得每一个跳动的loading不同时候跳动
    * `animation-delay: .2s`


## 脉搏loader
1. `div.pulse-loader > div*2`
2. `div.pulse-loader` 设置`position: absolute`
3. `div.palse-loader > div`
    * `position: absolute`
    * `width: $width; height: $height`
    * `border: ...; border-radius: 50%`
    * `animation: ...`
4. `div.pulse-loader > div:nth-child(2)`
    * `animation-delay`
5. @keyframes
    * 0%: `left: .5$width; top: .5$height`
    * 100%: `left: $width; top: $height`