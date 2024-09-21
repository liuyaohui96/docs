
## Null 类型

以下场景中使用Null类型：
1. 定义的变量在将来用于保存对象，最好其初始化为null
2. 当一个数据不再需要使用时，通过将其值设置为null来释放其引用，这个做法叫做解除引用


## typeof null
特殊的typeof null，返回的类型是"object"
1. 逻辑角度来看，null值表示一个空对象指针，它代表的其实就是一个空对象，所以使用typeof操作符检测时返回"object"
2. JavaScript 中的值是由一个表示类型的标签和实际数据值表示的(对象的类型标签是 0)，null 代表的是空指针（大多数平台下值为 0x00），因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"


实际上，undefined值是继承自null值得。undefined==null 为true