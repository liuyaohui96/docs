
## Vue生命周期
Vue在实例化过程允许调用生命周期钩子，给予用户在特定阶段添加操作的机会，如在

![](lifecycle.png)

* 初始化 event（事件） & lifecycle（生命周期）
* 调用beforeCreate钩子
* 初始化injections（注入） & reactive（响应）
* 调用created钩子
* 是否指定el 选项
    * 指定了则进入下一个阶段
    * 没有el指定选项，则只能当调用`vm.$mounted(el)`,才能进入下一个阶段
* 是否指定template选项
    * 指定存在则将template 编译到render function
    * 没有指定在编译el外部html作为template
* 调用beforemount钩子
* 创建vm.$el并替换el
* 调用mounted钩子
* 挂载完毕
    *  数据被修改
        * 调用beforeUpdate钩子
        * 虚拟DOM重新渲染并应用更新
        * 调用updated钩子   
    * 调用 vm.$destroy() 函数
        *  调用beforeDestroy钩子
        *  解除绑定，child components & event listeners
        *  调用destroyed钩子

比较常用的是created, mounted, beforeDestroy
* created 完成了数据观测，计算属性，方法，watch/event的回调函数配置。这一阶段，我们通常进行一些初始化数据处理，$el不可用。
* mounted， el已经挂载，第一个业务逻辑通常在这里开始。
* beforeDestroy 主要进行事件监听的解绑。