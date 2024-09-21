
## !default
在变量的结尾添加 !default 给一个未通过 !default 声明赋值的变量赋值，此时，如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值

变量是 null 空值时将视为未被 !default 赋值
```scss
$content: null;
$content: "Non-null content" !default;

#main {
  content: $content;
}

// 编译为
#main {
  content: "Non-null content"; 
}
```