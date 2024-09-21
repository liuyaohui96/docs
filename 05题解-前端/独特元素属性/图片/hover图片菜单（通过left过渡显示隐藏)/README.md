

## hover图片菜单
1. `*{box-sizing: border-box}`
2. `.container`设置
    * `position: relative`
    * `overflow: hidden;`
    * `width: ;height`
    * `background: #000;` 透明度过渡之后可以看到一些黑色的
3. `.container img`
    * `position: relative; left: 0; transition: left .4s, opacity .4s` 设置透明度和left过渡
    * `width: 100%;height:100%` 图片覆盖容器
4. `.container .menu`
    * `position: relative;top:0;bottom: 0;left: -120px`  设置top和bottom使得高度铺满容器，left负值使得溢出隐藏
    * `width: 120px`
    * `display: flex;justify-content: center; align-items: center;gap: 10px 0`布局内部
    * `background-color: #000;`
    * `transition: left .4s`过渡
5. `.container .menu a`各种状态美化省略
6. `.container:hover img`
    * `left: 120px; opacity: .5`
7.  `.container:hover menu`
    * `left: 0`