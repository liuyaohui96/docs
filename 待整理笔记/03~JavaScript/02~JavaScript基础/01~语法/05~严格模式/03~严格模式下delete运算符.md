
## 严格模式下delete运算符
1. 使用delete删除一个变量名(而不是属性名)抛出错误:delete myVariable
2. 删除不可删除的属性时会抛出错误
  ```js
  "use strict";
   delete Object.prototype; // 抛出TypeError错误
  ```
