
## Enum枚举
Enum枚举 可以为一组数值赋予友好的名字。语法是`enum EnumName {...}`

默认情况下，从0开始为元素编号，但可以手动指定元素的值

枚举的用处在于，可以用名字得到数值，用数值得到名字（枚举类型被编译成一个对象，它包含了正向映射（ name -> value）和反向映射（ value -> name）），不会为字符串枚举成员生成反向映射。

枚举是在运行时真正存在的对象
```ts
// 定义枚举
enum Color {Red, Green, Blue}
// 相当于以下代码
/*
"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
*/
let c: Color = Color.Green; // c 是1

// === 手动指定元素的值
enum Color {Red = 1, Green, Blue} // Red 是1， Green是2，Blue是3
enum Color {Red = 1, Green = 2, Blue = 4} // Red是1，Green2，Blue是4
```

## 字符串枚举
```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

## 异构枚举
枚举可以混合字符串和数字成员，但不常做
```ts
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
```

## 外部枚举
外部枚举用来描述已经存在的枚举类型的形状。外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的
```ts
declare enum Enum {
    A = 1,
    B,
    C = 2
}
```