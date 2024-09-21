

## 元素渐变跟随鼠标指针
1. `.container`设置外观
2. `.contiier::before`设置
    * `--size: 0;--y: 0;--x: 0;`
    * `content: ''`
    * `position: absolute;left: var(--x);top: var(--y);`
    * `width: var(--size); height: var(--size);`
    * `background: radial-gradient(circle closest-side, pink, transparent);`设置渐变
    * `transition: width .4s, height .4s;` 改变--size使得过渡应用
    * `transform: translate(-50%, -50%);` 移动使得渐变居中
3. `.container:hover::before`设置`--size: 200px;`

```javascript
// defer js
let container = document.querySelector('.container')
container.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect()
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  container.style.setProperty('--x', x + 'px')
  container.style.setProperty('--y', y + 'px')
})
```