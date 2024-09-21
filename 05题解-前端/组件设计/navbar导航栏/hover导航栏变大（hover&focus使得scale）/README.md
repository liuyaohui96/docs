


## hover导航栏变大
hover导航栏变大：
1. 移除ul默认样式
    * `list-tyle: none; margin: 0; padding: 0`
2. `ul.navbar a`
    * `display: flex;`
    * `padding: 12px`
    * `background-color: ...; color: ...`
    * `text-decoration: none`
    * `transfrom: scale(1)`
    * `transition: transform .4s;`
3. `ul:navbar a:hover, ul:navbar a:focus`设置`transfrom: scale(1.2)`