[0.0]: #Carousel
[1.0]: #basic-carousel
[2.0]: #carousel-item
[3.0]: #carousel-previous-and-next-control
[4.0]: #carousel-previous-and-next-control-icon
[5.0]: #carousel-indicator
[6.0]: #carousel-caption
[7.0]: #JavaScript-method
[8.0]: #JavaScript-events

[1]: https://823406519.github.io/Bootstrap/Appendix/3Components-6-Carousel.html
[2]: ../Appendix/3Components-6-Carousel.html
# Carousel
See rendering result [carousel.html][1]

See source code [carousel.html][2]

A slideshow component for cycling through elements—images or slides of text, built with CSS 3D transforms and a bit of JavaScript.
1. [basic carousel][1.0]
2. [carousel item][2.0]
3. [carousel previous and next control][3.0]
4. [carousel previous and next control icon][4.0]
5. [carousel indicator][5.0]
6. [carousel caption][6.0]
7. [JavaScript method][7.0]
8. [JavaScript events][8.0]


# basic carousel
* Firstly, use `.carousel`, it set `position: relative`

* Add a `id` attribute to `.carousel` element so that the carousel control and indicators can work.

* Add `slide` to element that use `.carousel`, or use `.carousel-fade` instead of a slide.

* `carousel-inner` set `position-relative`, `width: 100%`, `overflow: hidden` and set mixin `clearfix()`
```SCSS
.carousel {
  position: relative;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include clearfix();
}

// mixin
@mixin clearfix() {
  &::after {
    display: block;
    clear: both;
    content: "";
  }
}
```
#### [⬆ Back to top][0.0]



## carousel item
**:exclamation: Note:** `<img>`  in `.carousel-item` element should set `d-block w-100` to prevent browser default image alignment.

* Firstly, set `.carousel`, later `.carousel-inner`

* `.carousel-item` set `positon: relative`, `display: nooe`, `float: left`, `width: 100%`, `margin-right: 100%`, `backface-visibility: hidden`

* Add `data-interval=""` to `.carousel-item` element in order to change the amount of time to delay between cycling to next item. The unit is millisecond.

* `.carousel-item.active`, `.carousel-item-next`, `.carousel-item-prev` set `display: block`

* `.carousel-item-next:not(.carousel-item-left)`, `.active.carousel-item-right` set `transform: translateX(100%)`

* `.carousel-item-prev:not(.carousel-item-right)`, `.active.carousel-item-left` set `transform: translateX(-100%)`
```SCSS
.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;

  // transform .6s ease-in-out
  @include transition($carousel-transition);
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-left),
.active.carousel-item-right {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-right),
.active.carousel-item-left {
  transform: translateX(-100%);
}

------------
// variables
$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; 
$carousel-transition-duration:       .6s !default;

```
#### [⬆ Back to top][0.0]



## carousel previous and next control

:exclamation:Note: Add `carousel-control-prev`,  `carousel-control-next`to `<a>` element, and the `href` attribute value of `<a>` is `.carousel` element id 

* `carousel-control-prev`, `carousel-control-next` set `postion: absolute`, `top: 0`, `bottom: 0`, `z-index: 1`, `display: flex`, `align-items: center`, `justify-content: center`, `width`, `color`, `text-align`, `opacity`, `transitioin`

* `.carousel-control-prev` add `.data-slide="prev"` which alters the slide position relative to its current position, `.carsel-control-next` add `.data-slide="next` which alters the slide position relative to its current position.

* `.carousel-control-prev:hover` and `.carousel-control:focus` set `color`, `text-decoration: none`, `outline: 0`, `opacity`

* `.carousel-control-prev` set `left: 0` and background gradient(`$enable-gradients: false` defualt)

* `.carousel-control-next` set `right: 0` and background gradient(`$enable-gradients: false` defualt)
```SCSS
.carousel-control-prev, .carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  // Use flex for alignment (1-3)
  display: flex; // 1. allow flex styles
  align-items: center; // 2. vertically center contents
  justify-content: center; // 3. horizontally center contents
  width: $carousel-control-width; // 15%
  color: $carousel-control-color; // $white
  text-align: center;
  opacity: $carousel-control-opacity; //.5

  // transform .6s ease-in-out
  @include transition($carousel-control-transition);

  // Hover/focus state
  @include hover-focus {
    color: $carousel-control-color; // $white
    text-decoration: none;
    outline: 0;
    opacity: $carousel-control-hover-opacity; // .9
  }
}
.carousel-control-prev {
  left: 0;
  @if $enable-gradients {
    background: linear-gradient(90deg, rgba($black, .25), rgba($black, .001));
  }
}
.carousel-control-next {
  right: 0;
  @if $enable-gradients {
    background: linear-gradient(270deg, rgba($black, .25), rgba($black, .001));
  }
}

// variables
$carousel-control-color:             $white !default;
$carousel-control-width:             15% !default;
$carousel-control-opacity:           .5 !default;
$carousel-control-hover-opacity:     .9 !default;
```
#### [⬆ Back to top][0.0]


## carousel previous and next control icon
**:exclamation:Note:**: add `.carousel-control-prev-icon`, `.carousel-contrl-next-icon` to span, and  set attribute `role="button" aria-hidden=true` to assitant screen reader device.

* `.carousel-control-prev-icon`, `.carousel-contrl-next-icon` set `display: inline-block`, `width`, `height`, `background`, `background-size`

* `.carouel-control-prev-icon` set `background-image`

* `.carouel-control-prev-icon` set `background-image`
```SCSS
.carousel-control-prev-icon, .carousel-control-next-icon {
  display: inline-block;
  width: $carousel-control-icon-width; // 20px
  height: $carousel-control-icon-width; // 20px
  background: transparent no-repeat center center;
  background-size: 100% 100%;
}
.carousel-control-prev-icon {
  background-image: $carousel-control-prev-icon-bg;
}
.carousel-control-next-icon {
  background-image: $carousel-control-next-icon-bg;
}

-------
// variales
$carousel-control-icon-width:        20px !default;
$carousel-control-prev-icon-bg:      str-replace(url(...));
$carousel-control-next-icon-bg:      str-replace(url(...);
```
#### [⬆ Back to top][0.0]



## carousel indicator
**:exclamation: Note:** Every `<li>` in `<ol>` set attribute `data-target= #carousel-id` and `data-ride-to:<integer>`

* Always set `<ol>` to `.carousel-indicators`, set `position: abousute`, `right bottom left` to 0, `z-index: 15`, `display: flex`, `justify-content` `padding-left: 0`(override default `<ol>` style), `listy-style: none`

* Add `data-slide-to: <index>`, shifts the slide position to a particular index beginning with 0

* `.carousel-indicator li` ut `<li>` set `box-sizeing: content-box`, `flex: 0 1 auto`, `width`, `height`, `margin-left`, `margin-right`, `text-indent`, `cursor: pointer`, `background-color`, `background-clip`, `border-top`, `border-bottom`, `opacity`, `transition`

*  `.carousel-indicator ol .active` set `opacity: 1`
```SCSS
.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0; // override <ol> default
  // Use the .carousel-control's width as margin so we don't overlay those
  margin-right: $carousel-control-width; //15%
  margin-left: $carousel-control-width; //15%
  list-style: none;

  li {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: $carousel-indicator-width; //30px
    height: $carousel-indicator-height; //30px
    margin-right: $carousel-indicator-spacer; //3px
    margin-left: $carousel-indicator-spacer; // 3px
    text-indent: -999px;
    cursor: pointer;
    background-color: $carousel-indicator-active-bg; //$white
    background-clip: padding-box;

    // Use transparent borders to increase the hit area by 10px on top and bottom.
    // 1opx solid transpaent
    border-top: $carousel-indicator-hit-area-height solid transparent;
    border-bottom: $carousel-indicator-hit-area-height solid transparent;
    opacity: .5;

    // opacity .6s ease
    @include transition($carousel-indicator-transition);
  }

  .active {
    opacity: 1;
  }
}

----------
// variables
$carousel-control-width:             15% !default;
$carousel-indicator-width:           30px !default;
$carousel-indicator-height:          3px !default;
$carousel-indicator-spacer:          3px !default;
$carousel-indicator-active-bg:       $white !default;
$carousel-indicator-hit-area-height: 10px !default;

$carousel-indicator-transition:      opacity .6s ease !default;
```
#### [⬆ Back to top][0.0]



## carousel caption
* `coursel-caption` set `positon: absolute`, `right bottom left`, `z-index`, `padding-top`, `padding-bottom`, `color`

* we can hide them initially with `.d-none` and bring them back on specify devices with media query, such as `.d-md-block.`
```SCSS
.carousel-caption {
  position: absolute;
  right: (100% - $carousel-caption-width) / 2; // 15%
  bottom: 20px;
  left: (100% - $carousel-caption-width) / 2; // 15%
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: $carousel-caption-color; // $white
  text-align: center;
}

------
// variables
$carousel-caption-color:             $white !default;
$carousel-caption-width:             70% !default;
```
#### [⬆ Back to top][0.0]

## carousel fade
* `.carousel-fade` set to repaled `slide` in `.carousel` element

* `carousel-fade .carousel-item` set `opacity=0`, set `transition-property: opacity`, `transform: none`

* `.carousel-fade .carousel-item.active`, `.carousel-fade .carousel-item-next.carousel-item-left`, `.carousel-fade .carousel-item-prev.carousel-item-right` set `index：1`, `opacity: 1`

* `.carousel-fade .active.carousel-item-left`, `.carousel-fade .active.carousel-item-right` set `opacity: 1`, `z-index: 0`, `transition`
```SCSS
.carousel-fade {
  .carousel-item {
    opacity: 0;
    transition-property: opacity;
    transform: none;
  }

  .carousel-item.active,
  .carousel-item-next.carousel-item-left,
  .carousel-item-prev.carousel-item-right {
    z-index: 1;
    opacity: 1;
  }

  .active.carousel-item-left,
  .active.carousel-item-right {
    z-index: 0;
    opacity: 0;

    // 0s .6s opacity
    @include transition(0s $carousel-transition-duration opacity);
  }
}
// mixin transition
@mixin transition($transition...) {
  @if $enable-transitions {
    @if length($transition) == 0 {
      transition: $transition-base;
    } @else {
      transition: $transition;
    }
  }

  @if $enable-prefers-reduced-motion-media-query {
    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
}
```




## JavaScript method
```JavaScript
$().carousel() 
```

|Name | defalt | Description |
|-|-|-|
|data-interval | 5000 | time delay to cycle an item|
|data-keyboard | true| Whether the carousel should react to keyboard events.|
|data-pause | "hover" | pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. On touch-enabled devices, when set to "hover", cycling will pause on touchend  for two intervals|
|data-ride| false | Autoplays the carousel after the user manually cycles the first item. If set `"carousel"`, autoplays the carousel on load. |
|data-wrap| true | Whether the carousel should cycle continuously or have hard stops.|
|data-touch|true|Whether the carousel should support left/right swipe interactions on touchscreen devices.|

Always we set `data-interval: <integer>` to `.carousel-item` element, set `data-ride` true to autpplay for `.carouel` element.

**:exclamation: Note:** we can use this `data-attribute` in HTML code or JavaScript below.

```JavaScript
$().carousel({interval: integer}) 
$().carousel('cycle')  // cycle through items from left to right
$().carousel('stop') // stop the carousel through items
$().carousel(number) // cycles the carousel to a particular frame 
$().carousel('prev') // cycle previous item
$().carousel('next') // cycel next item
$().carousel('dispose') //destroy an element carousel
```
#### [⬆ Back to top][0.0]


## JavaScript events

|event type| description|
|-|-|
|slide.bs.carousel|fires immediately when the slide instance method is invoked|
|slid.bs.carousel| fired when the carousel has completed its slide transition|

Both events have the following additional properties:
* direction: either "left" or "right"
* relatedTarget: The DOM element that is being slid into place as the active item
* from: The index of the current item
* to: The index of the next item

```JavaScript
$().on('slide.bs.carousel', function(){
  // do somehinig
})
```
#### [⬆ Back to top][0.0]