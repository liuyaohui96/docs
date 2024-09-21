

## 图片overlay
1. `figure`设置`position: relative; width: ...; height: ...`，以及其他美化
2. `figure img` 设置`width:100%; height: 100%`
3. `figure::before`设置
    * `conent: ''`
    * `z-index: 1;`
    * `position: absolute;left: 0;right: 0;top: 0;bottom: 0;`
    * `border-top: 0px solid rgba(0, 0, 0, 0.5);border-bottom: 0px solid rgba(0, 0, 0, 0.5);` 上下两个黑色bar，宽度通过过渡增长
    * `background-color: rgba(0, 0, 0, 0.4);`使得背景overlay图片，看到一些图片
    * `opacity: 0;` 隐藏
    * `transition: opacity .8s, border-top-width .8s, border-bottom-width .8s;` 设置过渡
4. `figure figcation`
    * ` z-index: 2;`设置不被bar覆盖
    * ` position: absolute; left: 50%;top: 50%;transform: translate(-50%, -50%);`居中
    * `opacity: 0;`隐藏
    * `transition: opacity .8s;`过渡
    * `color: #fff;font-size: 30px;`等美化
5. `figure:hover::before` 设置`opacity: 1;border-top-width: 32px;border-bottom-width: 32px;`
6. `figure:hover figcaption`设置`opacity: 1;`