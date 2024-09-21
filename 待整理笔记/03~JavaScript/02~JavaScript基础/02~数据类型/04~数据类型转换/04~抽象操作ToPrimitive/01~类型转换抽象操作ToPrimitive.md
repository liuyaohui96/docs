

## 类型转换抽象操作ToPrimitive
对象类型转换为基本类型
1. 该值是否有 valueOf() 方法。如果有且返回基本类型值，则使用该值
2. 返回基本类型值或者没有该方法，就使用toString方法的返回值
3. valueOf() 或者 toString() 都不返回基本类型值 则会报错 TypeError

注意：
* 引用类型转换为Number类型，先调用valueOf()，再调用toString()
* 引用类型转换为String类型，先调用toString()，再调用valueOf()
