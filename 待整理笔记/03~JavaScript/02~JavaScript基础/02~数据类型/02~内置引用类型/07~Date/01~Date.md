## Date 类型

Date类型使用自 UTC（Coordinated Universal Time，国际协调时间）1970 年 1 月 1 日午夜（零时）开始经过的毫秒数来保存日期

## 创建Date对象的方式
```js
// 如果没有输入任何参数，则Date的构造器会依据系统设置的当前时间来创建一个Date对象
new Date();
new Date(value);
new Date(dateString);

// 参数monthIndex 是从“0”开始计算的，这就意味着一月份为“0”，十二月份为“11”。
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

// 举例
new Date('2019/05/13')
new Date('2019-05-13')
new Date('2019,05,13,0, 0, 0')
new Date(millseconds) // 1970 Jan 1 开始计算
```