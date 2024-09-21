# art-template

1. template.render(source, data, options) 将模板源代码编译成函数并立刻执行

   - 例子
     ```JS
     let ret=template.render(hello {{name}}, {
         name: 'liuyaohui';
     })
     ```

2. node 中，还有很多第三方模板引擎，不是只有 art-template

   - ejs
   - jade(现在叫 pug) 很多人用
   - handlebars
   - nunjucks

3. 引入内容
   ```html art-template
   {{include 'path'}}
   ```
4. art-template 中的模板继承，用于解决公共内容的问题

   - 建立一个`layout.html`文件， 可以挖一个坑，等待以后去填坑

     ```html art-template
     ... {{block 'block-name'}}
     <h1>默认内容</h1>
     {{/block}} ...
     ```

   - 在需要的地方继承和填坑,填坑是根据 block（坑）的那个名字
     ```html art-template
     {{extend './layout.html'}}
     <!-- block -->
     {{block 'block-name'}}
     <!-- 这里输入你的填坑内容 -->
     {{/block}}
     ```
     填坑之后，默认内容就会被代替
