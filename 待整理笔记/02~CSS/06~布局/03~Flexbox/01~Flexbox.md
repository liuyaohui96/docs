
## Flexbox
Flexbox 是 flexible box layout module的缩写，是一种一维布局模型，用途：
1. 更简单地在在一行或者一列布局。
2. 在items之间提供空间分布
3. 强大对齐功能


## Flexbox 的两个轴
Flexbox 有两个轴：main axis & cross axis：
1. main axis 通过`flex-direction`属性定义，定义了flex box的布局方向
2. cross axis 则是main axis 垂线的位置

```css
/* === flex-direction 定义main axis, 指示flexbox items 在容器内的排列方向 */
flex-direction: row | column | row-reverse | column-reverse;
```

## 起始线和终止线
考虑起始线和终止线，而不是左右，上下对于布局方法（如flexbos，grid）是很有用的：
1. main start： main axis的起始线
2. main end: main axis的终止线
3. cross start： cross axis的起始线
4. cross end：cross axis的终止线

如果 `flex-direction：row`，如果使用English工作，main axis 的起始线是左端，终止线是右端。如果使用Arabic工作，main axis的起始线是右端，终止线是左端，在这两种情况下cross axis的起始线是flex容器的顶部，终止线是底部，因为两种语言都是水平书写模式