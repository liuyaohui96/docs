```JS
let bodyParse = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParse.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParse.json());
```

1. bodyParser.json([options])

   - 返回一个仅解析 json 格式数据的中间件

2. body-parser
   - 解析 UTF-8 的编码的数据。返回一个处理 urlencoded 数据的中间件。
   - 这个对象包含键值对，when extended is false，value 是 string 或者 array，当 extended 是 true， value 是任何类型
