

## 折叠框通过高度过渡
1. `div.container > div.collapse`设置
    * `overflow: hidden` 溢出溢出内容
    * `height: 0`
    * `transition: height .4s`
2. `.container:hover .collapse` 改变高度`height: var(--collapse-height`)
3. 通过javascript获取scrollHeight作为从collapse的height
    * `const collapse = document.querySelector('.collapse)`
    * `collapse.style.setProperty('height', collapse.scrollHeight + 'px')`