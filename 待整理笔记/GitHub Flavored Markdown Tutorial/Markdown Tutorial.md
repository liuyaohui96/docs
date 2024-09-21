[toc]
# Markdown Tutorial
## Markdown是什么？
**markdown** 是一个将纯文本转换为HTML的一个工具，这是一个转换工具，目的是让你用纯文本实现标记语言的效果，所以**Mardown** 的语法格式会让你的文本更容易阅读，但是却拥有更好的表现形式。

## Markdown的标点符号
**Markdown** 语法由**标点符号**构成，标点符号如下表  

character | Name
-|-
\ | backslash
` | tick mark
\* | asterisk mark
_ | understore
{} | curly braces
[] | brackets
() | parenthese
\# | punnd sign
\+ | plus sign
\- | minus sign(hyphen)
. | dot
! | exclamation mark

**Note**: 可以不必理会符号的作用，下面我们会一一讲述。在输出结果中显示这些标点符号，需要在前面**添加反斜杠**\\(backslash)

## 段落和换行
* 段落是由一行或多行文字组成, 要结束就要换行。  

* **Markdown** 中的换行是**一行的结束处输入两个或者两个以上的空格键 ，然后按回车键**。

## 加粗和斜体
加粗和斜体语法
```Markdown
*italic*
_italic_
**bold**
__bold__
```
输出结果是
>*italic*
_italic_
**bold**
__bold__

## 标题
1.  第一种表示标题的语法

    ```Markdown
    # heading1
    ## heading2
    ### heading3
    #### heading4
    ##### heading5
    ###### heading6
    ```

    >输出结果不再这里展示
    
1. 第二种表示标题的语法

    ```Markdown
    heading1
    =====
    heading2
    -----
    
    // **可输入任意数量的'=' 和 '-'**  
    // 不要复制注释！
    ```
    
    >输出结果不在这里展示
    
## 块引用(blockquote)
1. 块引用语法

    ```Markdown
    > blockquote1
    here is also blockquote1
    !!!!!!here is also blockquote1
     
    > blockquote2
    here is also blockquote2
    ```
    
    输出结果是
    > blockquote1
    here is also blockquote1
    !!!!!!here is also blockquote1
     
    > blockquote2
    here is also blockquote2

1. 嵌套blockquote语法

    ```Markdown
    > this is blockquote
    >> this is nested blockquote
    >
    > back to blockquote
    
    // **比前一水平blockquote多一个'>'标记，即可以创建它的嵌套blockquote**
    // 不要复制注释！
    ```
    输出结果是
    > this is blockquote
    >> this is nested blockquote
    >
    > back to blockquote
    
1. **Markdown** blockquote 里面可以添加任何**Markdown** 元素,不再这里举例。


## 列表
1. 无序列表语法
   
    ```Markdown
    * item1
    * item2
    * item3
    
    // '*' 可以用 '+' 或 '-' 代替
    // 不要复制注释！
    ```
    无序列表输出结果不在这里显示

1. 有序列表语法
    
    ```Markdown
    1. item1
    2. item2
    3. item3
    
    // '.'前只要是数字就被视为有序列表
    // 列表标记前
    
    1. item1
    1. item2
    1. item3
    // 该列表与第一个列表输出一样
    ```
    有序列表输出结果不在这里显示

1. 列表项里多个段落语法是

    ```Markdown
    1. item1 paragraph1
    
        paragraph2
    
    1. item2
    
    // **列表项内段落之间相隔至少一个空行，且段落距离最左端缩进至少4个空格或者1个tab**
    // 不要复制注释！
    ```
    输出结果不在这里显示

1. 列表里面放置blockquote语法是

    ```Markdown
    1. item1
        > blockquote
    2. item2
    
    // '>' 距离最左端缩进至少4个空格或者一个tab
    ```
    输出结果不在这里显示
    
1. 列表里面放置Code Block
    ```Markdown
    1. item1
    
            int main(){
                printf("hello world");
                return 0;
            }
    1. item2

    // **列表项输入完成后，列表项与代码块之间需要相隔一行，代码块的行距离最左端缩进至少8个空格或者两个个tab**
    // 不要复制注释！
    ```
    输出结果不在这里显示

## 代码块(Code Block)

* 对于**新段落**，距离最左端缩进至少4个空格或者1个tab，才能应用代码块。
* 在代码块内所有的Markdown 语法都不能应用。

## 行内代码
在文字内如果要显示代码，使用行内代码，语法是
```Markdown
inline cold like `<inline_code>`
```
输出结果是
> inline cold like `<inline_code>`

如果在行内代码中包含了反引号\`,外围可以包围两个反引号`
```Markdown
``There is a literal backtick (`) here.``
```
输出结果是
> ``There is a literal backtick (`) here.``
## 水平线
水平线语法是
```Markdown
***
---
___

// 三个或者三个以上连续的'*' 或 '-' 或 '_'
// 不要复制注释！
```
输出结果不再这里显示，都是水平分隔线

## 链接
1. 普通链接语法

    ```Markdown
    [link_name](http://github.com), "title_name")
    
    // **URL可以是相对路径链接同一服务器内的文件**
    // 不要赋值注释！
    ```
    输出结果是
    > [link_name](http://github.com, "title_name")

1. 引用链接语法

    ```Markdown
    [link_name][reference_name]
    
    [reference_name]: http://github.com/  "title_name"
    
    // reference_name 不区分大小写
    // 对比普通链接，在普通链接的URL很长的时候，引用链接是可以增强阅读性的
    // 不要复制注释
    ```
    输出结果是  
    >[link_name][reference_name]

    [reference_name]: http://github.com/  "title_name"

1. 引用链接中**引用链接名**为空，可以使用**链接名**作为引用，下面

    ```Markdown
    [google][]
    
    [google]: www.google.com "google"
    
    // 注意这里引用链接是空，可以使用链接名作为引用链接
    // 不要复制注释！
    ```
    输出结果是
    > [google][]
    
    [google]: http://www.google.com "google"

1. 自动链接
URL和Email会自动默认为链接样式， 下面  
    
    >www.github.com  
    google@gmail.com

## 图片
1. 图片语法

    ```Markdown
    ![alt_text](http://www.github.com/favicon.ico "title_name")
    ```
    输出结果是  
    
    ![alt_text](http://www.github.com/favicon.ico "title_name")

1. 引用图片的语法是

    ```Markdown
    ![alt_text][reference_link]
    
    [reference_lin]: http://www.github.com/favicon.ico "title_name"
    
    ```
    输出结果是  
    
    ![alt_text][reference_image]
    
    [reference_image]: http://www.github.com/favicon.ico "title_name"
    
## 注释
注释语法
```Markdown
[comment]: <> (this is comment)
[//]: <> (this is comment)
[//]: # (this is comment)

// 注意"<>" 与 "()" 之间必须要有空格
// 注意"#" 与 "()" 之间必须要有空格
// 不要复制注释
```
[comment]: <> (this is comment)
[//]: <> (this is comment)
[//]: # (this is comment)

## 自动生成目录
生成目录语法
```
[toc]
```
输出结果不再这里展示

## 结语 
整个教程用Markdown写下来，我的一个体会是
1. 内容与样式的分离，减少样式构造的工作。就像html与css的分离，我们写的Markdown笔记只负责排版布局，样式的渲染由Markdown编辑器转换。<br><br>
1. 内容与样式分离，方便对内容样式的内容进行维护，使”一个内容多个表现“成为可能。<br><br>
1. 并不是所有的Markdown语法在各不同平台都能实现<br><br>
1. 如果有错误请联系我，感谢！