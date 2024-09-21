
## String
String 对象是字符串值封装后的对象，可以通过`String()` 构造器创建

```js
String(value)
new String(value)
```

## 转义字符
除了可打印字符以外，一些有特殊功能的字符可以通过转义字符的形式放入字符串中

|Code |   output  |
|--   |   --      |
|\'   |   单引号   |
|\"   |   双引号   |
|\n   |   换行     |
|\r   |   回车     |
|\t   |  水平制表符 |

## 长字符串处理
```js
// 使用 + 连接
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";

// 每行末尾使用反斜杠字符（“\”）
// 确保反斜杠后面没有空格或任何除换行符之外的字符或缩进
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```