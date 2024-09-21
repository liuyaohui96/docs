[0.0]: #Tooltips
[1.0]: #basic-tooltips
[2.0]: #tooptiop-direction
[3.0]: #tooptip-innner
[4.0]: #JavaScript-methods
[5.0]: #JavaScript-events


[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-M-Tooltips.html
[02]: ..//Appendix/3Components-M-Tooltips.html

* Usually, use custom script

    ```JavaScript
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    ```
* In `<button>`, set `data-toggle="tooltip" data-placement="..." data-title="..."`

## Tooltips
See rendering result [tooltip.html][01]

See source code [tooltip.html][02]

1. [basic tooltips][1.0]
2. [tooptiop direction][2.0]
3. [tooptip innner][3.0]
4. [JavaScript methods][4.0]
5. [JavaScript events][5.0]
## basic tooltips
* `.tooltip`

* `.tooltip.show`

* `.tooltip.arrow`
    * `tooltip.arraow::before`
```SCSS
.tooltip {
  position: absolute;
  z-index: $zindex-tooltip;
  display: block;
  margin: $tooltip-margin;
  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.
  // So reset our font and text properties to avoid inheriting weird values.
  @include reset-text();
  font-size: $tooltip-font-size;
  // Allow breaking very long words so they don't overflow the tooltip's bounds
  word-wrap: break-word;
  opacity: 0;

  &.show { opacity: $tooltip-opacity; }

  .arrow {
    position: absolute;
    display: block;
    width: $tooltip-arrow-width;
    height: $tooltip-arrow-height;

    &::before {
      position: absolute;
      content: "";
      border-color: transparent;
      border-style: solid;
    }
  }
}
```
#### [⬆ Back to top][0.0]


## tooptiop direction
* `.bs-tooltip-top`
    * `.bs-tooltip-top .arrow`
        * `.bs-tooltip-top .arrow::before`
* `.bs-tooltip-right`
    * `.bs-tooltip-right .arrow`
        * `.bs-tooltip-right .arrow::before`
* `.bs-tooltip-bottom`
    * `.bs-tooltip-bottom .arrow`
        * `.bs-tooltip-bottom .arrow::before`
* `.bs-tooltip-left`
    * `.bs-tooltip-left .arrow`
        * `.bs-tooltip-left .arrow::before`

* `.bs-tooltip-auto`
```SCSS
.bs-tooltip-top {
  padding: $tooltip-arrow-height 0;

  .arrow {
    bottom: 0;

    &::before {
      top: 0;
      border-width: $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;
      border-top-color: $tooltip-arrow-color;
    }
  }
}

.bs-tooltip-right {
  padding: 0 $tooltip-arrow-height;

  .arrow {
    left: 0;
    width: $tooltip-arrow-height;
    height: $tooltip-arrow-width;

    &::before {
      right: 0;
      border-width: ($tooltip-arrow-width / 2) $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;
      border-right-color: $tooltip-arrow-color;
    }
  }
}

.bs-tooltip-bottom {
  padding: $tooltip-arrow-height 0;

  .arrow {
    top: 0;

    &::before {
      bottom: 0;
      border-width: 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;
      border-bottom-color: $tooltip-arrow-color;
    }
  }
}

.bs-tooltip-left {
  padding: 0 $tooltip-arrow-height;

  .arrow {
    right: 0;
    width: $tooltip-arrow-height;
    height: $tooltip-arrow-width;

    &::before {
      left: 0;
      border-width: ($tooltip-arrow-width / 2) 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;
      border-left-color: $tooltip-arrow-color;
    }
  }
}

.bs-tooltip-auto {
  &[x-placement^="top"] {
    @extend .bs-tooltip-top;
  }
  &[x-placement^="right"] {
    @extend .bs-tooltip-right;
  }
  &[x-placement^="bottom"] {
    @extend .bs-tooltip-bottom;
  }
  &[x-placement^="left"] {
    @extend .bs-tooltip-left;
  }
}
```
#### [⬆ Back to top][0.0]


## tooptip innner
* `.tooltip-inner`
```SCSS
// Wrapper for the tooltip content
.tooltip-inner {
  max-width: $tooltip-max-width;
  padding: $tooltip-padding-y $tooltip-padding-x;
  color: $tooltip-color;
  text-align: center;
  background-color: $tooltip-bg;
  @include border-radius($tooltip-border-radius);
}
```
#### [⬆ Back to top][0.0]

## JavaScript methods
```JavaScripot
$().tooltip();
```

| Name           | Default | Description                                |
| -------------- | ------- | ------------------------------------------ |
| data-animation | true    | Apply a CSS fade transition to the tooltip |
| data-container | false   | Appends the tooltip to a specific element. |
| data-relay     | 0       | Delay showing and hiding the tooltip (ms)  |
| data-html      | false   | Allow HTML in the tooltip.                 |
| data-palcement | 'top'   | `top|right|bottom|left|auto`               |
|data-selector | false | If a selector is provided, tooltip objects will be delegated to the specified targets|
|data-template | so long to omit | Base HTML to use when creating the tooltip|
|data-trigger | 'hover focus' | `click| hover| foucs| manual|
| data-offset | 0 | Offset of the tooltip relative to its target|
| data-fallbackPlacement | 'flip' | Allow to specify which position Popper will use on fallback|
| data-boundary | 'scrollParent' | Overflow constraint boundary of the tooltip | 

Always, set `data-placement="top|right|bottom|left|auto` and `data-title="..."`

```JavaScript
$().tooltip('show')
$().tooltip('hide')
$().tooltip('toggle')
$().tooltip('dispose')

// Gives an element’s tooltip the ability to be shown. Tooltips are enabled by default 
$().tooltip('enable')
$().tooltip('disable') // Removes the ability for an element’s tooltip to be shown.

$().tooltip('toggleEnabled')

$().tooltip('update') // Updates the position of an element’s tooltip
```
#### [⬆ Back to top][0.0]


## JavaScript events
```JavaScript
show.bs.tooltip // fires immediately when the show instance method is called
shown.bs.tooltip // fired when the tooltip has been made visible to the user
hide.bs.tooltip // fired immediately when the hide instance method has been called
hidden.bs.tooltip // fired when the tooltip has finished being hidden from the user 

//  fired after the `show.bs.tooltip` event when the tooltip template has been added to the DOM
inserted.bs.tooltip 

$().on('show.bs.tooltip', function(){
    // do something
})
```
#### [⬆ Back to top][0.0]