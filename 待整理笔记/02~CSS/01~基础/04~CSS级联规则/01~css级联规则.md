## 级联cascading
级联：对同一个html元素的多个css规则的应用，需要确定哪一个最终被应用。级联的算法是选择器的特指度(specificity)

首先确认来源:浏览器预设 < 用户设置的 <  开发者开发的，同一来源下根据特指度判断：
1. !important  会破坏组件的可扩展性
2. id (= a)
3. class, attribute, pseudo-class  (= b)
4. type selector, pseudo element (= c)
5. universal selector

>  specificity 相同的时候，根据规则的order确定，次序较后的将会被应用

```css
/* example */
*               /* a=0 b=0 c=0 -> specificity =   0 */
LI              /* a=0 b=0 c=1 -> specificity =   1 */
UL LI           /* a=0 b=0 c=2 -> specificity =   2 */
UL OL+LI        /* a=0 b=0 c=3 -> specificity =   3 */
H1 + *[REL=up]  /* a=0 b=1 c=1 -> specificity =  11 */
UL OL LI.red    /* a=0 b=1 c=3 -> specificity =  13 */
LI.red.level    /* a=0 b=2 c=1 -> specificity =  21 */
#x34y           /* a=1 b=0 c=0 -> specificity = 100 */
#s12:not(FOO)   /* a=1 b=0 c=1 -> specificity = 101 这个有问题吗？？？*/ 
```

