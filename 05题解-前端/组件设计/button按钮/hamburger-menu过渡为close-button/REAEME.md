

## hamburger-menu过渡为close-button
1. `div.hamburger-menu`设置布局
    * `display: flex;`
    * `flex-direction: column`
    * `flex-wrap: wrap`
    * `gap: 3px 0` 设置主轴方向上的gap，使得gap美观，同时调试值，使得后续上下两个横线旋转为一个close buttton；或者，`justify-content: space-between`设置main axis上边缘接触，其他空间均匀分布，`.bar`子元素添加`margin-top: $top`调试一个值，使得上下两个横线旋转为一个close buttton
    * `width: 25px; height: 25px`
    * `cursor: pointer`设置鼠标样式
2. `div.hamburger-menu>div.bar`设置三个横条
    * `height: 5px`
    * `border-radius: 4px` 横条圆润
    * `background-color: #000`
    * `transition: all .5s` 设置过渡
3. `div.bar:first-child`设置`transform:rotage(45deg)`
4. `div.bar:last-child`设置`transform:rotage(-45deg)`
5. `div.bar:nth-child(2)`设置`opacity: 0`隐藏
