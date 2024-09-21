

## 页面滚动条
1. 设置body高度 `min-height: 200vh`
2. 设置滚动条
    * `position: fixed; top: 0`
    * `width: 0; height: 20px; background-color: ...`


```js
const progressBar = document.querySelector('.progress-bar')
const totalScrolllTop = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop
  progressBar.style.width = `${scrollTop / totalScrolllTop * 100}%`
})
```