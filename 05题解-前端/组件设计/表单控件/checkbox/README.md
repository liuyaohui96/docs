

## checkbox
1. 对于`input[type='checkbox']`
    * 设置`appearance:none` 隐藏原生checkbox外观
    * 设置外观`width: 16px;height: 16px;border: 1px solid rgba(0, 0, 0, .25);border-radius: 4px`
    * `vertical-align: top` 使得选择框与后续文字对齐
2. 对于`input[type='checkbox']:focus` 设置聚焦状态
    * `border-color`为 #86b7fe
    * `box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25)`
3. 对于`input[type='checkbox']:checked`设置选中状态
    * `background-color: #0d6efd;border-color: #0d6efd;`
    * 设置背景图片`background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")`添加√