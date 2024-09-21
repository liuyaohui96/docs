


## 图片砖块墙布局（coulumn 实现）
图片砖块墙布局（coulumn 实现）：
1. `<body> | <html>`定义变量
    * `--column-count-small`：
    * `--column-count-medium`：
    * `--column-count-large`：
2. `.column-container`设置
    * `column-count: var(--column-count-small);`
    * `column-width: calc(1/var(--coumn-count-small) * 100%);`
    * `column-gap: 5px;`
3. `.column-container img`设置`width: 100%`
4. 设置媒体查询如`@media screen and (min-width: 600px)...`中，`.column-container`设置
    * `column-count: var(--column-count-medium);`
    * `column-width: calc(1/var(--column-count-medium) * 100%);`