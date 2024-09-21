代码的组织方式

1. 以前我们写代码，将代码分类为一个个的功能模块，都是一个语言的
2. 后面出现了 UI 需求，标记语言迎合了这种需求，那就用标记语言写界面吧，所以我们需要处理 UI 和逻辑了
   放在一起显然不好维护，就出现了 code block 和 code behind
   - code block 虽然将 UI 和逻辑分离了，但还是在待在同一个地方
   - code behind 将 UI 和逻辑分开了，待在不同的地方
3. 后来，业务起来了，就发现臃肿了，数据可不可放在一个地方了，
   于是就有了 MVC 这种框架，就是 V 你负责试图，M 负责数据，C 负责中间处理，然后整个流程就是 V 触发事件，controler 处理逻辑，更新 M 的数据，然后 M 回到了 V，更新视图

4. 当然也有人提出 MVP，让 P 作为真正的 MV 的接口，MV 不再接触

5. MVVM
   view 和 view model 直接交互，自动双向同步，想一个方法让解决数据频繁更新的问题

# MVC

Model view controller, 是 Controller 负责将 Model 的数据用 View 显示出来

1. Model 是数据管理者，由它来管理数据
2. Controller 是 Modal 和 view 的接口，不关心 Model 如何拿到数据，它只负责使用
3. View，视图，有一部分是固定的，一部分是根据是根据数据显示的

# MVVM

Model view viewModal

- Model 存储数据，不处理任何业务逻辑
- ViewModal Modal 与 View 的连接
- view
