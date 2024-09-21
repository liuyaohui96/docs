## MVC
MVC模式的意思是，程序可以分成三个部分
1. Model 数据保存
2. Controller 业务逻辑。是 Modal 和 view 的接口，不关心 Model 如何拿到数据，它只负责使用
3. View，用户界面或视图

各部分通信方式：
1. View 传送指令到 Controller
2. Controller 完成业务逻辑后，要求 Model 改变状态
3. Model 将新的数据发送到 View

## MVP
MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向
1. 各部分之间的通信，都是双向的。

2. View 与 Model 不发生联系，都通过 Presenter 传递。

3. View不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

# MVVM
MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。
唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。
- Model 存储数据，不处理任何业务逻辑
- ViewModal Modal 与 View 的连接
- view



## 题外话
代码的组织方式

1. 以前写代码，将代码分类为一个个的功能模块，都是一个语言的
2. 后面出现了 UI 需求，标记语言迎合了这种需求，那就用标记语言写界面吧，所以我们需要处理 UI 和逻辑了。放在一起显然不好维护，就出现了 code block 和 code behind
   - code block 虽然将 UI 和逻辑分离了，但还是在待在同一个地方
   - code behind 将 UI 和逻辑分开了，待在不同的地方
3. 后来，业务起来了，就发现臃肿了，数据可不可放在一个地方了，
   于是就有了 MVC 这种框架，就是 V 你负责试图，M 负责数据，C 负责中间处理，然后整个流程就是 V 触发事件，controler 处理逻辑，更新 M 的数据，然后 M 回到了 V，更新视图

4. 当然也有人提出 MVP，让 P 作为真正的 MV 的接口，MV 不再接触

5. MVVM
   view 和 view model 直接交互，自动双向同步，想一个方法让解决数据频繁更新的问题