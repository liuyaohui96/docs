
## store（仓库）
* store 是 包含应用state（状态）的容器。
* store 是响应式的：当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到更新；相应地，在组件中调用 store 中的状态需要在计算属性中返回
* 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。触发变化是在组件的 methods 中提交 mutation