1. 每个文件，或者模块都是下面这样的

   - 在 node 中每个模块内部都有自己的 module 对象
   - module 对象中有一个成员交 exports，也是一个对象,默认为空对象
   - 默认在代码最有一句 `return module.exports`
     - 所以需要对外导出成员，只需要将它怪哉到`module.exports`对象上
   - 为了避免每次都要`module.exports`，模块默认内部都有一个 `exports=module.exports`，即 exports 保存了对 modul.exports 的引用
   - 类似于下面这样的结构

     ```JS
     let module={
         exports:{

         }
     }
     exports=module.exports; // 省略
     return module.exports; // 省略,默认最后
     ```

2. 加载和导出模块

   - require 加载模块，获得模块的 `return modules.exports`
   - 因为 exports 是`module.exports`的引用

     - 可以将多个成员挂在到 exports 中，借助 `return modules.exports`获得模块
     - 如果要直接导出成员内，而不是挂载到对象上，不能使用 export，export 会重新指向这个成员，而不是 modules.exports，而最终，模块是要 `return modules.exports`
       - 所以导出成员，而不是挂在到对象，需要使用`modules.exports`
     - 在模块内，对`modules.exports` 或者`exports`重新引用到其他变量，都会让二者不相等，不过最后还是 `return modules.exports`

     - 所以
       - 导出多个成员
         - exports.xxx=; exports.xxx;
         - moudule.exports={...}
       - 导出单个成员
         - module.exports=...;

3. require 模块加载机制
   - 优先从缓存中加载
     - 例如 a 加载 b，紧接着加载 c；但是在 b 中执行加载 c，从 c 中回到 a，不会再加载 c
       - 由于在 b 中加载过了 c，所以在 a 中不会重复加载 c，可以拿到导出的成员
         - 目的是避免重复加载，提高加载效率
   - 判断模块标识符
     - .js 可以省略
     - 非路径形式的模块标识，当成核心模块或者第三方模块
     - 路径形式的标志
       - `./` 当前目录
       - `../` 上一个目录
       - `/` 磁盘根目录
       - 特殊地，模块导入中`./`是绝对不能省略的！！！，而文件读写操作中的`./是可以省略的`
     - 第三方模块既不是核心模块，也不是路径形式模块。凡是第三方模块都必须通过 NPM 来加载使用，不可能有第三方模块与核心模块标识符一模一样。假如加载`art-template`模块
       - 先找当前目录中的`node_modules`目录
       - 然后找`node_modules/art-template`
       - 然后找`node_modules/art-template/package.json` 文件
       - 再去找`node_modules/art-template/package.json` 文件的 main 属性,main 属性记录`art-template`的入口模块,然后加载使用这个模块
       - 如果 package.json 没有，或者 package.json 的 main 属性错误的，node 自动寻找该目录下的 index.js
       - 如果都没有，则会进入上一级目录中查找，直到当前磁盘根目录还没找到，最后报错
         - 我们建议在项目根目录拥有一个且只有一个 node_module，这样子目录的代码就能加载第三方包
