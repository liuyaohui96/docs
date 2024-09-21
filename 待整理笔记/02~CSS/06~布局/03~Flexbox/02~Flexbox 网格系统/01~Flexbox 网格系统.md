
## Flexbox 网格系统
在flexbox中，但最后一行或者最后一列存在很少的允许grow和shrink的flex items，这些items就会自动利用可获取的空间自动填充。原因是一维布局方法（如flexbox）中，只能对行或者列其中一个进行布局控制，而二维布局方法（如grid）可以同时控制行和列的布局。

flexbox 网格系统是模拟grid的flexbox，典型的flexbox 网格系统就像熟悉的float布局一样。flexbox 网格系统需要为flex items 赋值百分比宽度：
1. flex-basics 设置百分比宽度
2. flex-basics 设置auto，然后设置width
为了百分比能够控制flex-grow 和 flex-shrink 都需要设置为0