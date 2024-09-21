[0.0]: #Custom-forms
[1.0]: #custom-control
[2.0]: #custom-inline
[3.0]: #custtom-control-input
[4.0]: #custom-label]
[5.0]: #custom-checkbox
[6.0]: #custom-radio
[7.0]: #custom-switch
[8.0]: #custom-select-and-its-size
[9.0]: #custom-range
[10.0]: #custom-transiton-of-form
[11.0]: #appendix

# Custom forms
1. custom checkbox, radio, switch
   * To `checkbox radio switch`, use `.custom-control` and `.custom-checkbox|.custom-radio|.custom-switch` to its parent(usually `<div>`). Use `.custom-control-input` to `<input>`, use `.custom-control-label` to `<label>`

   * To `checkbox radio switch`, add `.custom-control-inline` to its parent (usually `<div>`).

2. custom select, range, file
  * To `select`, use `.custom-select` to `<select>`
  * To `range`, use `.custom-range` to `input[type=range]`
  * To `file`, use `custom-file` to its parent(usually `<div>`), to `input[type=file]` use `.custom-file-input`, to `<label>` use `.cutom-file-input`


3. [custom control][1.0]
4. [custom inline][2.0]
5. [custtom control input][3.0]
6. [custom label][4.0]
7. [custom checkbox][5.0]
8. [custom radio][6.0]
9.  [custom switch][7.0]
10. [custom select and its size][8.0]
11. [custom range][9.0]
12. [custom transiton of form][10.0]
13. [appendix][11.0]

# custom control
`.custom-control` set `positon: relative`, `display: block`, `min-height`, `padding-left`
```SCSS
.custom-control {
  position: relative;
  display: block;
  min-height: $font-size-base * $line-height-base; // 1rem*1.5
  padding-left: $custom-control-gutter + $custom-control-indicator-size; // .5rem + 1rem
}

--------
// variables
$custom-control-gutter:                 .5rem !default;
$custom-control-indicator-size:         1rem !default;
```
#### [⬆ Back to top][0.0]


## custom inline
* Add `custom-control-inline` to `<div>` that has `custom-control`

* `custom-control-inline` set `display: inline-flex`, `margin-right`
```SCSS
.custom-control-inline {
  display: inline-flex;
  margin-right: $custom-control-spacer-x; // 1rem
}
```
#### [⬆ Back to top][0.0]


## custtom control input
* `.custom-control-input`  set `postion: absolute`, `z-index: -1`, `opacity: 0`

* `.custom-control:checked ~ .custom-control-label::before` set `color`, `border-color`, `background-color`,`box-shadow`

* `.custom:focus ~ .custom-control-label::before` set `box-shadow`

* `.custom:focus:not(:checked) ~ .custom-control-label::before` set `border-color`

* `.custom:not(:disabled):active ~ .custom-control-label::before` set `color`, `background-color`, `border-color`, `box-shadow`

* `.csutom  ~ .custom-control-label` set `color`; `.csutom  ~ .custom-control-label::before` set `background-color`
```SCSS
.custom-control-input {
  position: absolute;
  z-index: -1; // Put the input behind the label so it doesn't overlay text
  opacity: 0;

  &:checked ~ .custom-control-label::before {
    color: $custom-control-indicator-checked-color; // $white
    border-color: $custom-control-indicator-checked-border-color; // $primary
    
    // $enable-gradient: false set `backgruond-color`
    @include gradient-bg($custom-control-indicator-checked-bg); // $primary
    @include box-shadow($custom-control-indicator-checked-box-shadow); // none
  }

  &:focus ~ .custom-control-label::before {
    // the mixin is not used here to make sure there is feedback
    // $enable-shadows: flase
    @if $enable-shadows {
      box-shadow: $input-box-shadow, $input-focus-box-shadow;
    } @else {
      // 0 0 0 .2px rba($priamry, .25)
      box-shadow: $custom-control-indicator-focus-box-shadow;
    }
  }

  &:focus:not(:checked) ~ .custom-control-label::before {
    // lighten($primary, 25%)
    border-color: $custom-control-indicator-focus-border-color;
  }

  &:not(:disabled):active ~ .custom-control-label::before {
    color: $custom-control-indicator-active-color; // $white
    background-color: $custom-control-indicator-active-bg; // lighten($primary, 35%)
    border-color: $custom-control-indicator-active-border-color; // lighten($primary, 35%)
    @include box-shadow($custom-control-indicator-active-box-shadow); // none
  }

  &:disabled {
    ~ .custom-control-label {
      color: $custom-control-label-disabled-color; // $gray-600

      &::before {
        background-color: $custom-control-indicator-disabled-bg; // $gray-200
      }
    }
  }
}
```
#### [⬆ Back to top][0.0]


## custom label
* `.custom-control-lable` set `position: ralative`, `margin-bottom: 0`, `vertical-align: top;`

* `.custom-control::before` set `position: absolute`, `top`, `left`, `display: block`, `width`, `height`, `pointer-events: none`, `content: ""`, `backgruond-color`, `border`, `box-shadow`

* `.custom-control::after` set `position: absolute`, `top`, `left`, `display: block`, `width`, `height`, `content`, `backgruond-repeat`, `backgruond-position`, `background-size`
```SCSS
// Custom control indicators
// Build the custom controls out of pseudo-elements.

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;

  // Background-color and (when enabled) gradient
  &::before {
    position: absolute;
    // (1rem*1.5-1rem)/2
    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;
    left: -($custom-control-gutter + $custom-control-indicator-size); // -(.5rem+1rem)
    display: block;
    width: $custom-control-indicator-size; // 1rem
    height: $custom-control-indicator-size; // 1rem
    pointer-events: none;
    content: "";
    background-color: $custom-control-indicator-bg; // $white
    // $gray-500 solid 1px
    border: $custom-control-indicator-border-color solid $custom-control-indicator-border-width;
    // inset 0 1px 1px rgba($black, .075)
    // `$enable-shadows: false`
    @include box-shadow($custom-control-indicator-box-shadow);
  }

  // Foreground (icon)
  &::after {
    position: absolute;
    // (1rem*1.5 - 1rem)/2
    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;
    left: -($custom-control-gutter + $custom-control-indicator-size); // -(.5rem+1rem)
    display: block;
    width: $custom-control-indicator-size; // 1rem
    height: $custom-control-indicator-size; // 1rem
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
    background-size: $custom-control-indicator-bg-size; // 50% 50%
  }
}
```
#### [⬆ Back to top][0.0]


## custom checkbox
* Add `custom-checkbox` to  `<div>` with `custom-control` 

* `.custom-checkbox .custom-control-label::before` set `border-radius`

* `.custom-checkbox  .custom-control-input:checked ~ .custom-control-label::after` set `background-image`

* `.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before` set `border-color`, `backgruond-color`, `box-shadwo`(`$enable-shadows: false`); `.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after` set `backgruond-iamge`

* `.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before` set `backgruond-color`; `.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before` set `background-color`
```SCSS
.custom-checkbox {
  .custom-control-label::before {
    @include border-radius($custom-checkbox-indicator-border-radius); // .25rem
  }

  .custom-control-input:checked ~ .custom-control-label {
    &::after {
      background-image: $custom-checkbox-indicator-icon-checked; // str-replace(url(...))
    }
  }

  .custom-control-input:indeterminate ~ .custom-control-label {
    &::before {
      border-color: $custom-checkbox-indicator-indeterminate-border-color; // $gray-500
      @include gradient-bg($custom-checkbox-indicator-indeterminate-bg); // $primary
      @include box-shadow($custom-checkbox-indicator-indeterminate-box-shadow); // none
    }
    &::after {
      background-image: $custom-checkbox-indicator-icon-indeterminate; // str-replace(url(...))
    }
  }

  .custom-control-input:disabled {
    &:checked ~ .custom-control-label::before {
      // rgba(theme-color("primary"), .5)
      background-color: $custom-control-indicator-checked-disabled-bg;
    }
    &:indeterminate ~ .custom-control-label::before {
      // rgba(theme-color("primary"), .5)
      background-color: $custom-control-indicator-checked-disabled-bg;
    }
  }
}

```
#### [⬆ Back to top][0.0]


## custom radio
* Add `custom-radio` to `<div>` that has `.custom-control`

* `custom-radio .custom-control-label::before` set `border-radius`

* `custom-radio .custom-control-input:checked ~ .custom-control-label::after` set `background-image`

* `custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before` set `background-color`


```SCSS
.custom-radio {
  .custom-control-label::before {
    border-radius: $custom-radio-indicator-border-radius; // 50%
  }

  .custom-control-input:checked ~ .custom-control-label {
    &::after {
      background-image: $custom-radio-indicator-icon-checked; // str-replace(url(...))
    }
  }

  .custom-control-input:disabled {
    &:checked ~ .custom-control-label::before {
      background-color: $custom-control-indicator-checked-disabled-bg; // rgba(theme-color("primary"), .5)
    }
  }
}
```
#### [⬆ Back to top][0.0]


## custom switch
A switch has the markup of a custom checkbox but uses the `.custom-switch` class to render a toggle switch

* Add `.custom-switch` to `<div>` that has `custom-control`

* `.custom-switch` set `padding-left`

* `.custom-switch .custom-control-label::before` set `left`, `width`, `pointer-event: all`, `border-radius`; `custom-switch .custom-control-label::after` set `top`, `left`, `width`, `height`, `backgruond-color`, `border-radius`, `transition`

* `.custom-switch .custom-control-input:disabled .custom-control-input:checked ~ .custom-control-label::after` set `backgruond-color`, `transform`

* `custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before` set `backgruond-color`

```SCSS
.custom-switch {
  padding-left: $custom-switch-width + $custom-control-gutter; // 1.75rem + .5rem

  .custom-control-label {
    &::before {
      left: -($custom-switch-width + $custom-control-gutter); // -1.75rem + .5rem
      width: $custom-switch-width; // -1.75rem
      pointer-events: all;
      border-radius: $custom-switch-indicator-border-radius; // .5rem
    }

    &::after {
      // 1rem*1.5 - 1rem/2 + 1px*2
      top: calc(#{(($font-size-base * $line-height-base - $custom-control-indicator-size) / 2)} + #
                {$custom-control-indicator-border-width * 2});

      // -1.75rem + .5rem + 1px*2
      left: calc(#{-($custom-switch-width + $custom-control-gutter)} + 
            #{$custom-control-indicator-border-width * 2});

      width: $custom-switch-indicator-size; // 1.75rem
      height: $custom-switch-indicator-size; // 1.75rem
      background-color: $custom-control-indicator-border-color; // $gray-500
      border-radius: $custom-switch-indicator-border-radius; // .5rem

      /* transform .15s ease-in-out
       * $custom-forms-transition: background-color .15s ease-in-out, border-color .15s ease-in-out,
       * box-shadow .15s ease-in-out !default;
       */
      @include transition(transform .15s ease-in-out, $custom-forms-transition);
    }
  }

  .custom-control-input:checked ~ .custom-control-label {
    &::after {
      background-color: $custom-control-indicator-bg; // $white
      transform: translateX($custom-switch-width - $custom-control-indicator-size); // 1.75rem - 1rem
    }
  }

  .custom-control-input:disabled {
    &:checked ~ .custom-control-label::before {
      // rgba(theme-color("primary"), .5)
      background-color: $custom-control-indicator-checked-disabled-bg;
    }
  }
}
```
#### [⬆ Back to top][0.0]


## custom select and its size
* Add `.custom-select` to `<div>` that has `.custom-control`

* `.custom-select` set `display: inline-block`, `width：100%`, `height`, `padding`, `font-weight`, `light-height`, `color`, `vertical-align`, `backgruond`, `backgruond-color`, `border`, `border-radius`, `box-shadow`(`$enable-boxshadows: false`), `appearance: none`

* `.custom-select:focus` set `border-color`, `outline`, `box-shadow`

* `.custom-select::-ms-value` set `color`, `background-color` (IE and Edge)

* `.custom-select[multiple]`, `.custom-select[size]:not([size="1"])` set `height`, `padding-right`, `background-image`

* `.custom-select:disabled` set `color` and `backgruond-color`

* `.custom-select::-ms-expand` set `opacity: 0`(Hides the default caret in IE11)

* `.custom-select .custom-select-sm` and `.custom-select .custom-select-lg` set theirself `height`, `padding-top`, `padding-bottom`, `padding-left`, `font-size`

```SCSS
.custom-select {
  display: inline-block;
  width: 100%;

  // $input-height-inner + $input-height-border
  // (1rem* 1.5) + (.75rem*2) + 2px
  height: $custom-select-height;

  // .375rem (.75rem+1rem) .375rem .75rem
  padding: $custom-select-padding-y ($custom-select-padding-x + $custom-select-indicator-padding) 
            $custom-select-padding-y $custom-select-padding-x;
  font-weight: $custom-select-font-weight; // 400
  line-height: $custom-select-line-height; // 1.5
  color: $custom-select-color; // $gray-700
  vertical-align: middle;

  // str-replace(url(...)) no-repeat right .75rem/8px 10px
  background: $custom-select-background;

  background-color: $custom-select-bg; // $white

  border: $custom-select-border-width solid $custom-select-border-color; // 1px solid $gray-400
  @if $enable-rounded { // true
    border-radius: $custom-select-border-radius; // .25rem
  } @else {
    border-radius: 0;
  }
  // inset 0 1px 2px rgba($black, .075)
  // $enable-shadows: false
  @include box-shadow($custom-select-box-shadow);
  appearance: none;

  &:focus {
    border-color: $custom-select-focus-border-color; // lighten($parimary, 25%)
    outline: 0;
    @if $enable-shadows {
      box-shadow: $custom-select-box-shadow, $custom-select-focus-box-shadow;
    } @else {
      // 0 0 0 .2rem lighte rgba(($primary, 25%), .5)
      box-shadow: $custom-select-focus-box-shadow;
    }

    &::-ms-value {
      /* For visual consistency with other platforms/browsers,
       * suppress the default white text on blue background highlight given to
       * the selected option text when the (still closed) <select> receives focus
       * in IE and (under certain conditions) Edge.
       */
      color: $input-color; // $gray-700
      background-color: $input-bg; // $white
    }
  }

  &[multiple],
  &[size]:not([size="1"]) {
    height: auto;
    padding-right: $custom-select-padding-x; // .75rem 
    background-image: none;
  }

  &:disabled {
    color: $custom-select-disabled-color; // $gray-600
    background-color: $custom-select-disabled-bg; // $gray-200
  }

  // Hides the default caret in IE11
  &::-ms-expand {
    opacity: 0;
  }
}

.custom-select-sm {
  height: $custom-select-height-sm; // 1.5
  padding-top: $custom-select-padding-y-sm; // .25rem
  padding-bottom: $custom-select-padding-y-sm; // .25rem
  padding-left: $custom-select-padding-x-sm; // .5rem
  font-size: $custom-select-font-size-sm; // .875rem
}

.custom-select-lg {
  height: $custom-select-height-lg; // 1.5
  padding-top: $custom-select-padding-y-lg; // .5rem
  padding-bottom: $custom-select-padding-y-lg; // .5rem
  padding-left: $custom-select-padding-x-lg; // 1rem
  font-size: $custom-select-font-size-lg; // 1.25rem
}
```
## custom file
```SCSS
.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: $custom-file-height;
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: $custom-file-height;
  margin: 0;
  opacity: 0;

  &:focus ~ .custom-file-label {
    border-color: $custom-file-focus-border-color;
    box-shadow: $custom-file-focus-box-shadow;
  }

  &:disabled ~ .custom-file-label {
    background-color: $custom-file-disabled-bg;
  }

  @each $lang, $value in $custom-file-text {
    &:lang(#{$lang}) ~ .custom-file-label::after {
      content: $value;
    }
  }

  ~ .custom-file-label[data-browse]::after {
    content: attr(data-browse);
  }
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: $custom-file-height;
  padding: $custom-file-padding-y $custom-file-padding-x;
  font-weight: $custom-file-font-weight;
  line-height: $custom-file-line-height;
  color: $custom-file-color;
  background-color: $custom-file-bg;
  border: $custom-file-border-width solid $custom-file-border-color;
  @include border-radius($custom-file-border-radius);
  @include box-shadow($custom-file-box-shadow);

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: block;
    height: $custom-file-height-inner;
    padding: $custom-file-padding-y $custom-file-padding-x;
    line-height: $custom-file-line-height;
    color: $custom-file-button-color;
    content: "Browse";
    @include gradient-bg($custom-file-button-bg);
    border-left: inherit;
    @include border-radius(0 $custom-file-border-radius $custom-file-border-radius 0);
  }
}
```
#### [⬆ Back to top][0.0]


## custom range
```SCSS
.custom-range {
  width: 100%;
  height: calc(#{$custom-range-thumb-height} + #{$custom-range-thumb-focus-box-shadow-width * 2});
  padding: 0; // Need to reset padding
  background-color: transparent;
  appearance: none;

  &:focus {
    outline: none;

    // Pseudo-elements must be split across multiple rulesets to have an effect.
    // No box-shadow() mixin for focus accessibility.
    &::-webkit-slider-thumb { box-shadow: $custom-range-thumb-focus-box-shadow; }
    &::-moz-range-thumb     { box-shadow: $custom-range-thumb-focus-box-shadow; }
    &::-ms-thumb            { box-shadow: $custom-range-thumb-focus-box-shadow; }
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    width: $custom-range-thumb-width;
    height: $custom-range-thumb-height;
    margin-top: ($custom-range-track-height - $custom-range-thumb-height) / 2; // Webkit specific
    @include gradient-bg($custom-range-thumb-bg);
    border: $custom-range-thumb-border;
    @include border-radius($custom-range-thumb-border-radius);
    @include box-shadow($custom-range-thumb-box-shadow);
    @include transition($custom-forms-transition);
    appearance: none;

    &:active {
      @include gradient-bg($custom-range-thumb-active-bg);
    }
  }

  &::-webkit-slider-runnable-track {
    width: $custom-range-track-width;
    height: $custom-range-track-height;
    color: transparent; // Why?
    cursor: $custom-range-track-cursor;
    background-color: $custom-range-track-bg;
    border-color: transparent;
    @include border-radius($custom-range-track-border-radius);
    @include box-shadow($custom-range-track-box-shadow);
  }

  &::-moz-range-thumb {
    width: $custom-range-thumb-width;
    height: $custom-range-thumb-height;
    @include gradient-bg($custom-range-thumb-bg);
    border: $custom-range-thumb-border;
    @include border-radius($custom-range-thumb-border-radius);
    @include box-shadow($custom-range-thumb-box-shadow);
    @include transition($custom-forms-transition);
    appearance: none;

    &:active {
      @include gradient-bg($custom-range-thumb-active-bg);
    }
  }

  &::-moz-range-track {
    width: $custom-range-track-width;
    height: $custom-range-track-height;
    color: transparent;
    cursor: $custom-range-track-cursor;
    background-color: $custom-range-track-bg;
    border-color: transparent; // Firefox specific?
    @include border-radius($custom-range-track-border-radius);
    @include box-shadow($custom-range-track-box-shadow);
  }

  &::-ms-thumb {
    width: $custom-range-thumb-width;
    height: $custom-range-thumb-height;
    margin-top: 0; // Edge specific
    margin-right: $custom-range-thumb-focus-box-shadow-width; // Workaround that overflowed box-shadow is hidden.
    margin-left: $custom-range-thumb-focus-box-shadow-width;  // Workaround that overflowed box-shadow is hidden.
    @include gradient-bg($custom-range-thumb-bg);
    border: $custom-range-thumb-border;
    @include border-radius($custom-range-thumb-border-radius);
    @include box-shadow($custom-range-thumb-box-shadow);
    @include transition($custom-forms-transition);
    appearance: none;

    &:active {
      @include gradient-bg($custom-range-thumb-active-bg);
    }
  }

  &::-ms-track {
    width: $custom-range-track-width;
    height: $custom-range-track-height;
    color: transparent;
    cursor: $custom-range-track-cursor;
    background-color: transparent;
    border-color: transparent;
    border-width: $custom-range-thumb-height / 2;
    @include box-shadow($custom-range-track-box-shadow);
  }

  &::-ms-fill-lower {
    background-color: $custom-range-track-bg;
    @include border-radius($custom-range-track-border-radius);
  }

  &::-ms-fill-upper {
    margin-right: 15px; // arbitrary?
    background-color: $custom-range-track-bg;
    @include border-radius($custom-range-track-border-radius);
  }

  &:disabled {
    &::-webkit-slider-thumb {
      background-color: $custom-range-thumb-disabled-bg;
    }

    &::-webkit-slider-runnable-track {
      cursor: default;
    }

    &::-moz-range-thumb {
      background-color: $custom-range-thumb-disabled-bg;
    }

    &::-moz-range-track {
      cursor: default;
    }

    &::-ms-thumb {
      background-color: $custom-range-thumb-disabled-bg;
    }
  }
}
```
#### [⬆ Back to top][0.0]


## custom transiton of form

```SCSS
.custom-control-label::before,
.custom-file-label,
.custom-select {
  // background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
  @include transition($custom-forms-transition);
}

```
#### [⬆ Back to top][0.0]


## appendix
```SCSS
// variables

$custom-control-gutter:                 .5rem !default;
$custom-control-indicator-size:         1rem !default;
-------------------
$custom-control-spacer-x:               1rem !default;

-----------------
$custom-control-indicator-checked-color:        $component-active-color !default;
$component-active-color:      $white !default;

$custom-control-indicator-checked-border-color: $custom-control-indicator-checked-bg !default;
$custom-control-indicator-checked-bg:           $component-active-bg !default; // $primary

$custom-control-indicator-checked-bg:           $component-active-bg !default; 
$custom-control-indicator-checked-box-shadow:   none !default;
$custom-control-indicator-focus-box-shadow:     $input-btn-focus-box-shadow !default;

$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;
$input-btn-focus-color:       rgba($component-active-bg, .25) !default;
$input-btn-focus-width:       .2rem !default;

$custom-control-indicator-focus-border-color:   $input-focus-border-color !default;
$input-focus-border-color:              lighten($component-active-bg, 25%) !default;

$custom-control-indicator-active-color:         $component-active-color !default; // $white
$custom-control-indicator-active-bg:            lighten($component-active-bg, 35%) !default;
$custom-control-indicator-active-border-color:  $custom-control-indicator-active-bg !default;
$custom-control-indicator-active-box-shadow:    none !default;

$custom-control-label-disabled-color:           $gray-600 !default;

$custom-control-indicator-disabled-bg:          $input-disabled-bg !default;
$input-disabled-bg:                     $gray-200 !default;

--------------------------------------
$custom-control-indicator-size:         1rem !default;

$custom-control-indicator-bg:           $input-bg !default;
$input-bg:                              $white !default; 

$custom-control-indicator-border-color: $gray-500 !default;

$custom-control-indicator-border-width: $input-border-width !default;
$input-border-width:                    $input-btn-border-width !default;
$input-btn-border-width:      $border-width !default;

$custom-control-indicator-box-shadow:   $input-box-shadow !default;
$input-box-shadow:                      inset 0 1px 1px rgba($black, .075) !default;

$custom-control-indicator-bg-size:      50% 50% !default;

-----------------
// customcheckbox
$custom-checkbox-indicator-border-radius:       $border-radius !default;
$custom-checkbox-indicator-icon-checked:        str-replace(url(...));

$custom-checkbox-indicator-indeterminate-border-color

$custom-control-indicator-border-color: $gray-500 !default;
$custom-checkbox-indicator-indeterminate-bg:           $component-active-bg !default; // $primary
$custom-checkbox-indicator-indeterminate-box-shadow:   none !default;

$custom-checkbox-indicator-icon-indeterminate:         str-replace(url(...));

$custom-control-indicator-checked-disabled-bg:  rgba(theme-color("primary"), .5) !default;

------------------
// radio
$custom-radio-indicator-border-radius:          50% !default;
$custom-radio-indicator-icon-checked:           str-replace(url(...));

----------
// switch
$custom-switch-width:          $custom-control-indicator-size * 1.75 !default; // 1rem * 1.75
$custom-switch-indicator-border-radius:         $custom-control-indicator-size / 2 !default; // 1rem/2

$custom-control-indicator-border-color: $gray-500 !default;
$custom-control-indicator-border-width: $input-border-width !default; // 1px

$custom-forms-transition:     background-color .15s ease-in-out, border-color .15s ease-in-out,
                              box-shadow .15s ease-in-out !default;

$custom-control-indicator-bg:           $input-bg !default; // $white

$custom-control-indicator-checked-disabled-bg:  rgba(theme-color("primary"), .5) !default;

---------------
// custom select
$custom-select-padding-y:           $input-btn-padding-y !default;
$custom-select-padding-x:           $input-btn-padding-x !default;
$input-btn-padding-y:         .375rem !default;
$input-btn-padding-x:         .75rem !default;
$custom-select-height:              $input-height !default; 

// (1rem* 1.5) + (.75rem*2) + 2px
$input-height:                  calc(#{$input-height-inner} + #{$input-height-border}) !default;

// (1rem* 1.5) + (.75rem*2)
$input-height-inner:    ($input-btn-font-size * $input-btn-line-height) + ($input-btn-padding-y * 2)
$input-btn-font-size:         $font-size-base !default;
$input-btn-line-height:       $line-height-base !default;

$input-height-border:                $input-border-width * 2 !default; // 2px
$custom-select-indicator-padding:   1rem !default;

$custom-select-font-weight:         $input-font-weight !default; // 400
$custom-select-line-height:         $input-line-height !default; // 1.5

$custom-select-color:               $input-color !default;
$input-color:                           $gray-700 !default;

// Used so we can have multiple background elements (e.g., arrow and feedback icon)
// str-replace(url(...)) no-repeat right .75rem/8px 10px
$custom-select-background:          $custom-select-indicator no-repeat right $custom-select-padding-x center / 
                                    $custom-select-bg-size !default;

$custom-select-indicator:           str-replace(url(...))
$custom-select-bg-size:             8px 10px !default;

$custom-select-bg:                  $input-bg !default; // $white

$custom-select-border-width:        $input-border-width !default; // 1px
$custom-select-border-color:        $input-border-color !default;
$input-border-color:                $gray-400 !default;

$custom-select-border-radius:       $border-radius !default;

$custom-select-focus-border-color:  $input-focus-border-color !default;

// lighten($parimary, 25%)
$input-focus-border-color:              lighten($component-active-bg, 25%) !default;

$custom-select-focus-width:         $input-focus-width !default
$input-focus-width:                     $input-btn-focus-width !default;
$input-btn-focus-width:       .2rem !default;

$custom-select-box-shadow:          inset 0 1px 2px rgba($black, .075) !default;

// 0 0 0 .2rem lighte rgba(($primary, 25%), .5)
$custom-select-focus-box-shadow:   0 0 0 $custom-select-focus-width rgba($custom-select-focus-border-color, .5)

$custom-select-disabled-color:      $gray-600 !default;
$custom-select-disabled-bg:         $gray-200 !default;

$custom-select-padding-y-sm:        $input-padding-y-sm !default;
$custom-select-padding-x-sm:        $input-padding-x-sm !default;
$custom-select-font-size-sm:        $input-btn-font-size-sm !default;
$custom-select-height-sm:           $input-height-sm !default;

$custom-select-padding-y-lg:        $input-padding-y-lg !default;
$custom-select-padding-x-lg:        $input-padding-x-lg !default;
$custom-select-font-size-lg:        $input-btn-font-size-lg !default;
$custom-select-height-lg:           $input-height-lg !default;

$input-padding-y-sm:                    $input-btn-padding-y-sm !default;
$input-padding-x-sm:                    $input-btn-padding-x-sm !default;
$input-font-size-sm:                    $input-btn-font-size-sm !default;
$input-line-height-sm:                  $input-btn-line-height-sm !default;

$input-padding-y-lg:                    $input-btn-padding-y-lg !default;
$input-padding-x-lg:                    $input-btn-padding-x-lg !default;
$input-font-size-lg:                    $input-btn-font-size-lg !default;
$input-line-height-lg:                  $input-btn-line-height-lg !default;

$input-btn-padding-y-sm:      .25rem !default;
$input-btn-padding-x-sm:      .5rem !default;
$input-btn-font-size-sm:      $font-size-sm !default;
$input-btn-line-height-sm:    $line-height-sm !default;

$input-btn-padding-y-lg:      .5rem !default;
$input-btn-padding-x-lg:      1rem !default;
$input-btn-font-size-lg:      $font-size-lg !default;
$input-btn-line-height-lg:    $line-height-lg !default;

$font-size-lg:                ($font-size-base * 1.25) !default;
$font-size-sm:                ($font-size-base * .875) !default;

---------------------------------
$custom-forms-transition:  background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s 
                            ease-in-out !default;
```
#### [⬆ Back to top][0.0]
