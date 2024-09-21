
* DOM创建表格（p89）
* 封装函数。参数是标签名，parent与style对象，返回创建的元素‘

* load 事件
    * 加载100张图片
        * 1，2， 3...按顺序
        * 一次性循环加载

* 作业
    * 广告弹出框自动关闭（settimeout)
    * 回到顶部
    * 动态创建表格；表格删除；表格隔行变色
    * 过滤空白节点
    * 进度条
    * 获取非行内样式
    * 网页换肤（换背景颜色等）
    * 简易年历（表格）
    * 备忘录

* div随机出现在页面，不超出页面高度
    * position: absolute
    * document.body.style.overflow = 'hidden' 隐藏body滚动条
    * div.style.left = (document.documentElement.clientWidth - div.offsetWidth)*Math.random + 'px'

* 回到顶部
    * setInterval
        * document.documentElement.scrollTop -=speed
        * if(document.documentElement.scrollTop> 100)  显示滚动按钮，小于则隐藏

* 预加载案例（p98-p99）


* 网络
    * 跨域 p242-p243
    * jsonp p244-p245
    * 解析cookie对象 
        * getCookie
        * setCookie函数，name & value & day & hour 作为参数，根据是否有day和hour参数设置蛇猴设置expires

    * localstorage
        * 参数：key value 过期时间
        * 获取localstorage 自动删除过期数据

    * 利用storage事件
        * 一个页面点击相关按钮（如红绿蓝按钮）
        * 另一个页面监听storage，设置背景颜色

    * 作业
        * 购物车，更改本地存储