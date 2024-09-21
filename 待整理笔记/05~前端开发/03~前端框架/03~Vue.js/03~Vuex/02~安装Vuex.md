
## 安装Vuex
1. [CDN引用](https://unpkg.com/vuex)

2. 包管理工具下载
    ```shell
    npm install vuex --save
    yarn add vuex
    ```

    模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex
    ```js
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)
    ```
