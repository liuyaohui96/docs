


## toggle checkbox（使用css）
1. `#checkbox`使用`position: absolute; left: -9999px;`隐藏
2. `.checkbox-label` 设置
    * `position: relative`
    * `width: ...; height: ...;border-radius: $height`
    * `background-color: ...`
    * `transition: background-color .4s`
3. `.checkbox-label::after` 设置
    * `position: absolute; top: 0; left: 1px`
    * `display: inline-block`
    * `width: ...; height: ...;border-radius: 50%`
    * `transition: translate .4s`
4. `#checkbox:checked .checkbox-label` 改变背景颜色
5. `#checkbox:checked .checkbox-label::after` 设置`transform: translate($width -1px)`