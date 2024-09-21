[0.0]: #Popovers
[1.0]: #basic-popover
[2.0]: #popover-direction
[3.0]: #popover-header
[4.0]: #popover-body
[5.0]: #JavaScript-method
[6.0]: #JavaScript-events

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-H-Popovers.html
[02]: ..//Appendix/3Components-H-Popovers.html

* Firstly, in `<script>`, set
    ```SCSS
    $(function(){
        $('[data-toggle="popover"]').popover()
    })
    ```

* `<button>`, set attribute `data-toggle="poper" data-palcement:"..." data-title="..." data-content="..." data-tirgger="..." `


# Popovers

See rendering result [popover.html][01]

See source code [popover.html][02]

1. [basic popover][1.0]
2. [popover direction][2.0]
3. [popover header][3.0]
4. [popover body][4.0]
5. [JavaScript method][5.0]
6. [JavaScript events][6.0]

## basic popover
* `.popover`

* `.popover .arrow`
    * `.popover .arrow::afoter`, `.popover .arrow::after`
```SCSS
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: $zindex-popover;
  display: block;
  max-width: $popover-max-width;
  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.
  // So reset our font and text properties to avoid inheriting weird values.
  @include reset-text();
  font-size: $popover-font-size;
  // Allow breaking very long words so they don't overflow the popover's bounds
  word-wrap: break-word;
  background-color: $popover-bg;
  background-clip: padding-box;
  border: $popover-border-width solid $popover-border-color;
  @include border-radius($popover-border-radius);
  @include box-shadow($popover-box-shadow);

  .arrow {
    position: absolute;
    display: block;
    width: $popover-arrow-width;
    height: $popover-arrow-height;
    margin: 0 $border-radius-lg;

    &::before,
    &::after {
      position: absolute;
      display: block;
      content: "";
      border-color: transparent;
      border-style: solid;
    }
  }
}
```
#### [⬆ Back to top][0.0]


## popover direction
1. `.bs-popover-top`
    * `.bs-popover-top .arrow`
    * `.bs-popover-top .arrow::before`,`bs-popover-top .arrow::after`
    * `.bs-popover-top .arrow::before`
    * `.bs-popover-top .arrow::::after`

2. `.bs-popover-right`
    * `.bs-popover-right .arrow`
    * `.bs-popover-right .arrow::before`,`bs-popover-right .arrow::after`
    * `.bs-popover-right .arrow::before`
    * `.bs-popover-right .arrow::::after`
3. `.bs-popover-bottom`
    * `.bs-popover-bottom .arrow`
    * `.bs-popover-bottom .arrow::before`,`bs-popover-bottom .arrow::after`
    * `.bs-popover-bottom .arrow::before`
    * `.bs-popover-bottom .arrow::::after`
    * `.bs-popover-bottom .popover-header::before`(specially:exclamation:)
4.  `.bs-popover-left`
    * `.bs-popover-left .arrow`
    * `.bs-popover-left .arrow::before`,`bs-popover-left .arrow::after`
    * `.bs-popover-left .arrow::before`
    * `.bs-popover-left .arrow::::after`
5. `.bs-popver-auto[x-placement^="top"] `  
`.bs-popver-auto[x-placement^="top"] `  
`.bs-popver-auto[x-placement^="right"] `  
`.bs-popver-auto[x-placement^="botttom"] `  
`.bs-popver-auto[x-placement^="left"] `
```SCSS
.bs-popover-top {
  margin-bottom: $popover-arrow-height;

  .arrow {
    bottom: calc((#{$popover-arrow-height} + #{$popover-border-width}) * -1);
  }

  .arrow::before,
  .arrow::after {
    border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;
  }

  .arrow::before {
    bottom: 0;
    border-top-color: $popover-arrow-outer-color;
  }

  .arrow::after {
    bottom: $popover-border-width;
    border-top-color: $popover-arrow-color;
  }
}

.bs-popover-right {
  margin-left: $popover-arrow-height;

  .arrow {
    left: calc((#{$popover-arrow-height} + #{$popover-border-width}) * -1);
    width: $popover-arrow-height;
    height: $popover-arrow-width;
    margin: $border-radius-lg 0; // make sure the arrow does not touch the popover's rounded corners
  }

  .arrow::before,
  .arrow::after {
    border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;
  }

  .arrow::before {
    left: 0;
    border-right-color: $popover-arrow-outer-color;
  }

  .arrow::after {
    left: $popover-border-width;
    border-right-color: $popover-arrow-color;
  }
}

.bs-popover-bottom {
  margin-top: $popover-arrow-height;

  .arrow {
    top: calc((#{$popover-arrow-height} + #{$popover-border-width}) * -1);
  }

  .arrow::before,
  .arrow::after {
    border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);
  }

  .arrow::before {
    top: 0;
    border-bottom-color: $popover-arrow-outer-color;
  }

  .arrow::after {
    top: $popover-border-width;
    border-bottom-color: $popover-arrow-color;
  }

  // This will remove the popover-header's border just below the arrow
  .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: $popover-arrow-width;
    margin-left: -$popover-arrow-width / 2;
    content: "";
    border-bottom: $popover-border-width solid $popover-header-bg;
  }
}

.bs-popover-left {
  margin-right: $popover-arrow-height;

  .arrow {
    right: calc((#{$popover-arrow-height} + #{$popover-border-width}) * -1);
    width: $popover-arrow-height;
    height: $popover-arrow-width;
    margin: $border-radius-lg 0; // make sure the arrow does not touch the popover's rounded corners
  }

  .arrow::before,
  .arrow::after {
    border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;
  }

  .arrow::before {
    right: 0;
    border-left-color: $popover-arrow-outer-color;
  }

  .arrow::after {
    right: $popover-border-width;
    border-left-color: $popover-arrow-color;
  }
}

--------------------
// auto
.bs-popover-auto {
  &[x-placement^="top"] {
    @extend .bs-popover-top;
  }
  &[x-placement^="right"] {
    @extend .bs-popover-right;
  }
  &[x-placement^="bottom"] {
    @extend .bs-popover-bottom;
  }
  &[x-placement^="left"] {
    @extend .bs-popover-left;
  }
}
```
#### [⬆ Back to top][0.0]


## popover header
* `.popover-header`

* `.popover-header:empty`
```SCSS
.popover-header {
  padding: $popover-header-padding-y $popover-header-padding-x;
  margin-bottom: 0; // Reset the default from Reboot
  font-size: $font-size-base;
  color: $popover-header-color;
  background-color: $popover-header-bg;
  border-bottom: $popover-border-width solid darken($popover-header-bg, 5%);
  $offset-border-width: calc(#{$border-radius-lg} - #{$popover-border-width});
  @include border-top-radius($offset-border-width);

  &:empty {
    display: none;
  }
}
```
#### [⬆ Back to top][0.0]


## popover body
* `popover-body`
```SCSS
.popover-body {
  padding: $popover-body-padding-y $popover-body-padding-x;
  color: $popover-body-color;
}
```
#### [⬆ Back to top][0.0]

## JavaScript method
```JavaScript
$().popover()
```

| Name | Default| Description|
|---|---|----|
| data-animation| true| Apply a CSS fade transition to the popover|
| data-container | false | Appends the popover to a specific element. Example: container: 'body'. This option is particularly useful in that it **allows you to position the popover in the flow of the document near the triggering element** - which will prevent the popover from floating away from the triggering element during a window resize|
|data-content| "" | Default content value if data-content attribute isn't present|
|data-delay| 0 | Delay showing and hiding the popover (ms)|
|data-html| false| Insert HTML into the popover|
|data-placement| 'right'| How to position the popover - `auto | top | bottom | left | right`.When `auto `is specified, it will dynamically reorient the popover
|data-selector| false | If a selector is provided, popover objects will be delegated to the specified targets|
|data-template| **so long to omit** | Base HTML to use when creating the popover|
|data-title| Default title value if title attribute isn't present|
|data-tigger| 'click' | How popover is triggered - `click | hover | focus | manual`
|data-fallbackplacement| 'flip' | Allow to specify which position Popper will use on fallback｜
|data-boundary | 'scrollParent' | Overflow constraint boundary of the popover. Accepts the values of 'viewport', 'window', 'scrollParent' |

Always, we set `data-content:"..."`, `data-palcament: top|right|bottom|left|auto`, `data-title: "..."`, `data-trigger: click|hover|focus| manual`

```JavaScript
$().popover('show')
$().popover('hide')
$().popover('dispose')

// Gives an element’s popover the ability to be shown. Popovers are enabled by default
$().popover('enable') 

$().popover('disable')

$().popover('toggleEnabled')

$().popover('update') // Updates the position of an element’s popover
```
#### [⬆ Back to top][0.0]


## JavaScript events
```SCSS
show.bs.popover // fires immediately when the show instance method is called

shown.bs.popover // fired when the popover has been made visible to the user

hide.bs.popover // fired immediately when the hide instance method has been called

hidden.bs.popover // fired when the popover has finished being hidden from the user

// fired after the show.bs.popover event when the popover template has been added to the DOM
inserted.bs.popover 

$().on('show.bs.popover', function(){
    // do something
})
```
#### [⬆ Back to top][0.0]
