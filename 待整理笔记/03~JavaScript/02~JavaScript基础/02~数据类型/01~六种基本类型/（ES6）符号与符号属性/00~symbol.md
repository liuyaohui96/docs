
## symbol
ES5 的对象属性名都是字符串，这容易造成属性名的冲突。ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。

## Symbol的应用场景
1. 用Symbol作为对象属性可以保证永远不会出现同名属性，防止属性污染
2. 借助Symbol类型的不可枚举，我们可以在类中模拟私有属性
3. 防止XSS
  * React的ReactElement对象中，有一个$$typeof属性，它是一个Symbol类型的变量
  * JSON中不能存储Symbol类型的变量，这就是防止XSS的一种手段