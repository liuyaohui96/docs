1. 原来的`res.write`, `res.end()` 方法依然可以在 express 框架中使用
2. 初步试用 express

   - 初步代码分析

     ```JS
     // 加载模块
     let express = require('express');

     let app = express();

     // 可接受的静态资源访问
     app.use('/public', express.static(__dirname + '/public'));

     // get 访问的处理
     app.get('/', (req, res) => {
        res.send('<h1>hello express</h1>');
     });

     app.get('/about', (req, res) => {
        res.send('hello express');
     });

     // liten设置
     app.listen(5500, () => {
     console.log('server start...');
     });
     ```
