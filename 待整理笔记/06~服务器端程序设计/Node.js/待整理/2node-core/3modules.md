我的总结
1. 因为我们会把javascript code 写在不同的文件。假如在各文件定义的相同标识符都写进global，新的标识符定义将会覆盖旧的标识符定义，为了可以创建`reliable and matainable application`, 所以标识符定义将不会写进global中
2. 所以node定义了一个`module`对象，每一个文件就是一个module，有了module，每一个在module内定义的标识符都不能被外部module获取，如果你想在外部其他module中使用，需要显示`export`这个module
3. 每一个node应用都有一个`main module`

# 原文
in the real world, we often split our javascirpt code into multiple file

it is possible that we have two files and in both these file we define,
this function say hello with the exact same name

instead, we need modularity, we need to create small building blocks, or modules where we define our variables and functions, variable and function have the same name don't override another variable or
function defined somewhere else, that encapsualted inside of that module

every file in node is considered a module, variable and function that defined in the module are scoped to that file, in oop, we call private,  they are not avaliable outside that container outside that module

if you want to use a variable or a function outdie that module, you need to explicityly export it and make it public

every node application has at leatst one file or one module, which we call a `main module`