Flex-basis will override any other width or height properties if specifically declared anything other than auto

flex basis is ( flex: $grow, $shrink, $size ) and is set to ( flex: 0 1 auto ) by default

 When flex basis is set to auto, it first checks for a width or height property ( based on direction ) if none, it uses the elements content sizing

 obey(遵守) any min / max - width or height settings

## flex
```CSS
flex: <flex-grow> <flex-shrink> <flex-basics>
/* flex-shrink and flex-basis) are optional */

/* defualt value */
flex: 0 1 auto;
flex: 0 auto;
flex: initial;
/* It makes the flex item inflexible when there is some free space left, 
 * but allows it to shrink to its minimum when there is not enough space
 */

----------
flex: auto;
flex: 1 1 auto
/* makes it fully flexible so that they absorb any extra space along the main axis */

-----------------
flex: none;
flex: 0 0 auto

```
## flex-flow
flex-flow: <flex-direction> <flex-wrap>


## flex-direction
* row: Items are placed the same as the text direction.
* row-reverse: Items are placed opposite to the text direction.
* column: Items are placed top to bottom.
* column-reverse: Items are placed bottom to top

:exclamation:accroding to flex-direction, specfying its justify-content & align-items

## flex-wrap
* nowrap: Every item is fit to a single line.
* wrap: Items wrap around to additional lines.
* wrap-reverse: Items wrap around to additional lines in reverse


## justify-content
* flex-start: Items align to the left side of the container.
* flex-end: Items align to the right side of the container.
* center: Items align at the center of the container.
* space-between: Items display with equal spacing between them.
* space-around: Items display with equal spacing around them.

## align-items
* flex-start: Items align to the top of the container.
* flex-end: Items align to the bottom of the container.
* center: Items align at the vertical center of the container.
* baseline: Items display at the baseline of the container.
* stretch: Items are stretched to fit the container.

## align-content
how multiple lines are spaced apart from each other
* flex-start: Lines are packed at the top of the container.
* flex-end: Lines are packed at the bottom of the container.
* center: Lines are packed at the vertical center of the container.
* space-between: Lines display with equal spacing between them.
* space-around: Lines display with equal spacing around them.
* stretch: Lines are stretched to fit the container.




## order
by default, flex item order is 0

## align-self
The same as align-items, but align-self apply to align-self
    