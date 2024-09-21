
* 动态显示时间（年月日 星期 时分秒

* 设置电子时钟(p77)
    * 设置图片（根据不同的时间数字，改变背景图片）

* 作业(p80)
    * 截取URL
    * 根据URL中的time计算倒计时

* loadimage的实现
```js
// promise 改造图片加载
new img
img.src
img.onload={

}
```

* 事件部分
    * li菜单案例，点击li改变点击li的color，如变为红色；利用事件委托
        * e.target.constructor === HTMLUlistElement
    * p107： 广东--广州-天河 白云   江苏...   点击显示隐藏相关列表
        * this.bool = !this.bool if(this.bool) this.firstElementChild.style.display = 'none'
        * 阻止冒泡
    * 使用jQuery改写上面的例子

    * 鼠标事件作业：设置盒子随着鼠标移动
        * 页面上点击，创建一个div，50像素宽高，随机背景色
        * 将创建的div放到数组中
        * 创建好的div，再次点击，添加（边线），再次点击取消边线，保证页面只有一个被选中

    * 拖拽事件：p110-p111  两种方法与封装封装
        * 第一种方法： e.clientX - e.offsetX
            * mousedown
                * mouseover
                * mousedown 取消
        * 第二种方法：addEventListner 修改 offset 保存在document.x 或者 document.y中
        * 完善：
            * 创建多个div元素，给予每一个元素拖动
            * 增加e.preventDefault
            * 封装函数（好的代码一开始就要考虑多种情况）
    * 拖拽碰撞 p112 - p113

    * focus 事件
        1. focus & blur 实现 placeholder
        2. focus 7 blur 更该 input样式（去掉前后空格，string.prototype.trim())

    * input 事件
        * 中文输入的多次input事件
        * 简单消消乐
            * input
            * card
            * input 输入相关内容，如果匹配，则消除相关card

* 作业
    * 拼图游戏
    * 图片放大镜
    * 光标实时显示（跟随鼠标的提示框）
    * 下拉菜单（P120)
    * 点击动态创建div(p121)
## 概念部分
*  贪婪匹配和非贪婪匹配
* 函数防抖和节流
* 宏任务，微任务，事件队列，事件循环



## insertAfter的实现（DOM 部分）
封装insertAfter
  - 判断比对节点是否是最后一个
    - 最后一个，则插入到父节点末尾 
      - parent.appendChild()
    - 否则，则插入到该节点的下一个节点的之前的一个节点
      - parent.insertBefore(newNode, node.nextSibling) 