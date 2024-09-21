
## String.prototype.match()
```js
// 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
// 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组
String.prototype.match(regexp)

// === 例子1，未使用g
var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);
// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' 是整个匹配。
// 'Chapter 3.4.5.1' 被'(chapter \d+(\.\d)*)'捕获。
// '.1' 是被'(\.\d)'捕获的最后一个值。
// 'index' 属性(22) 是整个匹配从零开始的索引。
// 'input' 属性是被解析的原始字符串。

// === 例子2，使用了g
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

扩展：
1. 如果需要知道一个字符串是否与一个正则表达式匹配，可使用Regexp.test()
2. 如果你只是需要第一个匹配结果,使用 RegExp.exec()
3. 如果你想要获得捕获组，并且设置了全局标志，你需要用 RegExp.exec()