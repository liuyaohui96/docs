

## 字体种类-font-family
font-family  属性为元素指定 来源于用户计算机或者`@font-face`指定路径的 一个字体或者逗号分隔的字体列表。如果指定字体列表，按照顺序进行应用，如果某个字体可以被应用，那么就使用该字体（一般在字体列表的最后提供一个通用字体）。如果字体不可用，那么就会用浏览器默认的字体代替

注意，非法的字体命名需要使用`""`包围

```css
/* === 例子 */
font-family: Helvetica, Arial, sans-serif;
font-family: "Source Sans Pro", "Arial", sans-serif;
```

1. 默认字体（通用字体）
2. 网页安全字体
3. 引入外部字体


## 默认字体（通用字体）
CSS 定义了 5 个常用的字体名称: 
* serif。衬线字体，通常用于长篇文本，如Times, Times New Roman
* sans-serif。无衬线字体，如 Arial, Verdana, Helvetica
* monospace。 等宽字体，通常用于代码，如Courier, Courier New
* cursive
* fantasy

当使用这些通用名称时，使用的字体完全取决于每个浏览器，而且它们所运行的每个操作系统也会有所不同

## 网页安全字体
某几个字体通常可以应用到所有系统,这些都是所谓的 网页安全字体。可以认为以下字体是网页安全字体：
1. Arial（属于sans-serif）
2. Verdana（属于sans-serif）
3. Courier New（属于monospace）
4. Georigia（属于serif）
5. Times New Roman（属于erif）

## 引入外部字体
1. @font-face
2. 字体图标
```css
/* ===  */
@font-face{
    font-famly: foo; /* 指定字体名称 */
    src：/foo; /* 指定字体路径 */
}

/* === 字体图标的引入，如Font Awesome */
```
