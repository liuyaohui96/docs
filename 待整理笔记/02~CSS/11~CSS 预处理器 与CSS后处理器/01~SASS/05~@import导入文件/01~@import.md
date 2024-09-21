
## @import导入文件
sass的@import规则在生成css文件时就把相关文件导入进来，这样可以将相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求。

默认，sass直接编译所有的`.scss`文件，如果是导入的文件，那么就无序直接被编译，如果文件的前缀是`_`那么文件将不会被直接编译

@import一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线和后缀
```css
@import filename;

 /* === 例子 */
 /*
 _variables.scss
 _colors.scss
 _reset.scss */
@import "variables";
@import "colors";
@import "reset";
```