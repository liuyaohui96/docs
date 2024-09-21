1. app.set(name, value)
   - 用 name 代替 value
   - 设置资源的默认目录
   - 例子
     ```JS
     app.set('title', 'My Site');
     app.get('title'); // "My Site"
     ```

2. app.use([path,] callback [, callback...])
     -  app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.
     -  静态路由设置
        -  app.use('/static', express.static(__dirname + '/public'));
     - router 设置
          ```JS
          var r1 = express.Router();
          r1.get('/', function (req, res, next) {
          next();
          });

          var r2 = express.Router();
          r2.get('/', function (req, res, next) {
          next();
          });

          app.use(r1, r2);

          ```

