


# json_docs
1. [json基础](#json基础)
2. [javascript中的JSON对象](#javascript中的json对象)



## json基础

1. json（JavaScript Object Notation）概念：基于 JavaScript 的对象表示法，一种轻量级的数据交换格式，用于客户端与服务器之间的数据交换
2. json的文件后缀名是`.json`，MIME类型： `application/json`
3. json 数据以键值对的形式书写，键必须用双引号包围。JSON 有以下三种类型的值：
    * 基本值：包括数字、字符串（必须用双引号包围）、布尔值（true 或 false）和 null 值。不支持 undefined 
    * 对象：用花括号 {} 表示，是键值对的集合，键是字符串，值可以是基本值、对象或数组
    * 数组：用方括号 [] 表示，是有序的值的列表，值可以是基本值、对象或数组



```json
{
    // 狗的名字，字符串类型
    "name": "Buddy",
    // 狗的年龄，数字类型
    "age": 5,
    // 狗是否接种疫苗，布尔类型
    "is_vaccinated": true,
    // 狗的玩具，数组类型，包含字符串元素
    "toys": [
        "ball",
        "bone"
    ],
    // 狗的主人，对象类型，包含姓名和电话号码
    "owner": {
        "name": "John",
        "phone_number": "123-456-7890"
    },
    // 狗的品种，值为空（null 类型）
    "breed": null
}
```



[返回顶点](#json_docs)




## javascript中的JSON对象

```json
// 用途：将一个有效的 JSON 字符串转换为对象
// 参数：
// - text：要转换的有效的 JSON 字符串
// - reviver（可选）：一个用于转换结果的函数。这个函数会为对象的每个成员被调用。
// 如果成员包含嵌套对象，嵌套对象会在父对象之前被转换。
// 返回值：转换后的对象
function parse(text: string, reviver?: (this: any, key: string, value: any) => any): any

// 用途：将一个 JavaScript 值转换为一个 JSON 字符串
// 参数：
// - value：要转换的 JavaScript 值，通常是一个对象或数组
// - replacer（可选）：一个用于转换结果的函数
// 序列化的对象的每个属性被调用，接收三个参数：this（一般不常用），key（属性名）、value（属性值）
// - space（可选）：添加缩进、空格和换行符到返回的 JSON 文本，使其更易于阅读
// 返回值：生成的 JSON 字符串
function stringify(value: any, replacer?: (this: any, key: string, value: any) => any, 
                space?: string | number): string

// 参数：
// - replacer（可选）：这里不是一个函数，一个由字符串和数字组成的数组，
// 包含了应被序列化的属性名
function stringify(value: any, replacer?: (number | string)[] | null, 
            space?: string | number): string

```

1. 历史：早期的JSON解析器基本是使用JavaScript的eval()函数，使用eval函数求值存在风险，可能会执行一些恶意代码。所以，ECMAScript5定义了全局对象JSON

2. JSON对象中的方法：
    * `JSON.stringify()`：将 JavaScript 值转换为 JSON 字符串
    * `JSON.parse`： JSON 字符串解析为 JavaScript 对象

    ```js
    // 定义一个表示狗的对象
    const dog = {
    name: '旺财',
    age: 5,
    breed: '柴犬'
    };

    // 使用 JSON.stringify() 将狗对象转换为 JSON 字符串
    const jsonString = JSON.stringify(dog);
    console.log('转换后的 JSON 字符串:', jsonString);

    // 使用 JSON.parse() 将 JSON 字符串转换回对象
    const restoredDog = JSON.parse(jsonString);
    console.log('恢复后的狗对象:', restoredDog);
    ```





[返回顶点](#json_docs)