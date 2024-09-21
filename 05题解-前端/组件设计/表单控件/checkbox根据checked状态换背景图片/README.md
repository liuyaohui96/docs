

## checkbox根据checked状态换背景图片
1. `<label>`包围了`input[type='checkbox']`和一个div
2. 对`input[type='checkbox']`的原生样式进行隐藏`display:none`
3. `input[type='checkbox'] + div` 设置：
  * `width: $width; height: $height`
  * `background-image:...;background-position: $width $height`
4. `input[type='checkbox']:checked + div`，改变背景图片`bakcground-image`