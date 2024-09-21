
## Date 方法
1. Date.now()
2. Date.parse()
3. Date.UTC()

## Date.now)()
```js
// 返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数
Date.now()

// 相当于
new Date().getTime()
```

## Date.parse()
解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数

```js
Date.parse(dateString)

// 相当于
new Date(dateString).getTime()
```

## Date.UTC()
UTC 方法接受以逗号隔开的日期参数，返回1970-1-1 00:00:00 UTC到指定的日期之间的毫秒数

Date.UTC 方法使用协调世界时代替本地时间
Date.UTC 方法返回一个时间数值，而不是一个日期对象
```js
Date.UTC(year,month[,date[,hrs[,min[,sec[,ms]]]]]) 

// 使用 UTC 时间代替本地时间创建了一个日期对象
var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
```