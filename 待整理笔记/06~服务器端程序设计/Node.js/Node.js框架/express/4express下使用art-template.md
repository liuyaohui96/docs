1. 安装

   - npm i -S art-template express-art-template

2. 配置使用 art-template 模板引擎
   - `app.engine('art', require('express-art-template'));`
     - 也可以不叫 art，直接叫 html
     - 当渲染以.art 结尾的文件的时候，使用 art-template 模板引擎，express-art-template 是专门用来在 Express 中把 art-template 整合到 express 中
     - 虽然不需要直接`require('art-template')`, 因为这个包会依赖 art-template
   - express 中 res.render() 默认是不可以使用的， 但是配置了模板引擎就可以使用了
     - 第一个参数不能写路径，默认会去 views 目录下去找模板文件， express 有一个约定，开发人员把所有的视图文件都放到 views 目录下
       - 如果向修改路径，不要默认为 views， 可以使用`app.set('views', 目录路径)`
