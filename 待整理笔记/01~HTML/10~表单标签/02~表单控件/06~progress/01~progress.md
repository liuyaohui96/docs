
## progress
`<progress>`元素用来显示一项任务的完成进度, 通常显示为进度条

常用属性：
1. max：描述了这个progress元素所表示的任务一共需要完成多少工作
2. value：该属性用来指定该进度条已完成的工作量.如果没有value属性,则该进度条的进度为"不确定",也就是说,进度条不会显示任何进度,
```html
<progress value="70" max="100">70 %</progress>
```