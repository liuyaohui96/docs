# koa-router
文档： https://github.com/ZijianHe/koa-router

[简单使用例子](./4-1koa-router简单使用例子.js)

1. 创建router
  - new Router([options])
    - prefix: String type

2. router.verb()
  - verb 是http verb中的一种
  - router.get|post|put|delete|patch|del|all


3. router.prefix
  ```js
  var router = new Router({
  prefix: '/users'
  });

  // 或者
  router.prefix(prefix) 
  ```

4. router.redirect(source, destination, [code]) 
  - `[code]`: default is 301

5. router.url(name, params, [options]) 
  ```js
  router.url('user', 3);
  // => "/users/3"
  
  router.url('user', { id: 3 }, { query: { limit: 1 } });
  // => "/users/3?limit=1"
  ```
