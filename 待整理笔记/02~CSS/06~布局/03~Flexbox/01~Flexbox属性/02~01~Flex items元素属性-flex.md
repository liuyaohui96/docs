
## flex items元素属性-flex
1. flex
2. flex-grow
3. flex-shrink
4. flex-basics

这几个 flex 属性的作用其实就是改变了 flex 容器中的布局空白的行为。假设在 1 个 500px 的容器中，我们有 3 个 100px 宽的元素，那么这 3 个元素需要占 300px 的宽，剩下 200px 的布局空白

## flex
flex 是 flex-grow，flex-shrink 和 flex-basics的简写属性。该属性不同值的表示：
1. 只有一个值时
    * 一个无单位数(`<number>`): 它会被当作`<flex-grow>`的值 
    * 一个有效的宽度(width)值: 它会被当作 `<flex-basis>`的值
2. 两个值时
    * 第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值
    * 第二个值如果为无单位数：它会被当作 `<flex-shrink>` 的值;如果为有效的宽度值: 它会被当作 <flex-basis> 的值
3. 三个值时
    * 第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值
    * 第二个值必须为一个无单位数，并且它会被当作  `<flex-shrink>` 的值。
    * 第三个值必须为一个有效的宽度值， 并且它会被当作 `<flex-basis>` 的值
```css
flex:  [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]

/* === 注意以下常见的自定义值 */
/* 初始值，相当于 flex: 0 1 auto*/
/* flex-grow 为0，不可以扩展（stretch）；flex-shrink 的值为1, 可以缩小flex元素防止溢出*/
flex: initial;

/* 相当于flex: 1 1 auto，与flex：initial基本相同，但既可以拉伸也可以收缩 */
flex: auto; 

/* 相当于flex: 0 0 auto，元素既不能拉伸或者收缩，但是元素会按具有 flex-basis: auto 属性的flexbox进行布局 */
flex: none; /* 等同于  */
```

## flex-grow
flex-grow 定义弹性盒子项（flex item）的拉伸因子。若为正整数，以 flex-basis 为基础，则根据主轴方向的可获取空白增长尺寸。

flex-grow 属性可用于按比例分配布局空白的空间：如所有元素设定 flex-grow 值为1， 容器中的布局空白会被这些元素平分，如两个元素，一个值为2，一个值为1，则第一个元素增长2/3的布局空白，第二个元素增长1/3的布局空白
```css
/* 负值无效 */
flex-grow: 0; /* default 即使元素还有空间可以获得，都不会进行扩展 */
flex-grow: <number>
```

## flex-shrink
flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值
```css
flex-shrink: <number>
flex-shrink: 1; /* default 如果元素没有足够的空间，默认以1的值进行项目缩小*/
```

## flex-basics
flex-basis 指定了 flex 元素在主轴方向上的初始大小。felx-basis 定义了该元素的布局空白（available space）的基准值,默认值为auto  浏览器会检测这个元素是否具有确定的尺寸，假如宽度（width）为100px，flex-basis 的值为100px；如果没有给元素设定尺寸，flex-basis 的值采用元素内容的尺寸
```css
/* 默认根据元素的内容，或者定义的width和height自动确定项目大小 */
flex-basis: auto;
flex-basis: <length> | em
```


