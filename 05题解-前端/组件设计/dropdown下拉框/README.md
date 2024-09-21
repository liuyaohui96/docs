

## dropdown
1. `div.dropdown`设置`position: relative`
2. `.dropdown > .dropdown-button`
    * 覆盖 `border: none; outline: none;`
    * 其他
3. `.dropdown-button::after`
    * `content: ''`
    * `display: inline-block`
    * `border: 4px solid transparent;`
    * `border-top-color: #fff;`
    * `margin-left: 4px;`
4. `.dropdown > .dropdown-list`
    * `list-style: none; margin: 0; padding: 0`覆盖
    * `position: absolute;top: calc(100%+10px);left: 0;`
    * `border: 1px solid rgba(0, 0, 0, .125);`
    * `border-radius: 4px;`
5. `.dropdown-list li`
    * `width: 200px;`
    * `padding: 12px;`
    * `cursor: pointer;`
6. `.dropdown-list li:not(:last-child)`设置`border-bottom: 1px solid rgba(0, 0, 0, .125);`
7. `.dropdown-list li:hover`设置`background-color:...`
8. `.show-dropdown-list`设置`display: block`


```js
document.querySelector('.dropdown-button').addEventListener('click', (e) => {
  document.querySelector('.dropdown-list')
    .classList.toggle('show-dropdown-list')
})
```