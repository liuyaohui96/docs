
## XMLHttpRequest提交表单
XMLHttpRequest 的实例有两种方式提交表单：
* 仅使用 XMLHttpRequest提交表单
*  XMLHttpRequest + FormData API

评价：第二种方式（使用 FormData API）是最简单最快捷的，但是缺点是被收集的数据无法使用 JSON.stringify() 转换为一个 JSON 字符串。只使用 AJAX 则更为复杂，但也更灵活、更强大。

## 仅使用 XMLHttpRequest提交表单
1. POST方法：
    * 编码类型：application/x-www-form-urlencoded（默认）:
        ```shell
        Content-Type: application/x-www-form-urlencoded

        foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A
        ```
    * 编码类型：text/plain
        ```shell
        Content-Type: text/plain

        foo=bar
        baz=The first line.
        The second line.
        ```
    * POST方法：编码类型：multipart/form-data


2. GET方法（这种情况下 enctype 属性会被忽略）:字符串将被简单的附加到 URL
    ```shell
    ?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
    ``` 