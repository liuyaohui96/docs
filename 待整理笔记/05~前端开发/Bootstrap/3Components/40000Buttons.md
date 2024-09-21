[0.0]: #Buttons
[1.0]: #basic-button
[2.0]: #block-button
[3.0]: #button-size
[4.0]: #button-color
[5.0]: #button-outline
[6.0]: #button-link

[1]: https://823406519.github.io/Bootstrap/Appendix/3Components-3-Buttons.html
[2]: ../Appendix/3Components-3-Buttons.html

# Buttons
See rendering result [button.html][1]

See source code [button.html][2]

1. [basic button][1.0]
2. [block button][2.0]
3. [button size][3.0]
4. [button color][4.0]
5. [button outline][5.0]
6. [button link][6.0]

# basic button
* Use `.btn` in `<button>`, you can also use these classes on `<a>` or `<input>`elements.

* `.btn` set `display: inline-block`, `font-weight: normal`, `color`, `text-align`, `vertical-align`, `user-select:none`, `bakcground-color: transparent`, `border`, use mixin `button-size()` set `padding-x`, `padding-y`, `font-size`, `line-height`, `border-radius`, `transiton`
* `.btn:hover` set `color` and `text-decoration:none`
  
* `.btn:focus` and `.btn.focus` set `outline: 0` and mixin `box-shadow()`, but the defualt `$enable-shadows:false`

* `.btn:disabled` and `btn.disabled` set `opacity: .65`, and mixin `box-shadow()`, but the defualt `$enable-shadows:false`

* `.btn:not(:disabled):not(.disabled):active` and `.btn:not(:disabled):not(.disabled).active` use mixin `box-shadow()`, but the defualt `$enable-shadows:false`. 

* `.btn:not(:disabled):not(.disabled)` set  `cursor:pointer`

* `.btn:not(:disabled):not(.disabled):active:focus` and `.btn:not(:disabled):not(.disabled).active` use mixin `box-shadow()`, but the defualt `$enable-shadows:false`. 

```SCSS
.btn {
  display: inline-block;
  font-weight: $btn-font-weight; // 400
  color: $body-color; // $900
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: $btn-border-width solid transparent; // 1px

  // .375rem .75rem 1rem 1.5 .25rem
  // `button-size` set `padding-y`,  `padding-x`, `font-size`, `line-height`, `border-radius`
  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);
  
  /*$btn-transition:  color .15s ease-in-out, 
   *                  background-color .15s ease-in-out, border-color .15s ease-in-out, 
   *                  box-shadow .15s ease-in-out !default;
   */
  /* set transiton and 
   * use medai query for `prefers-reduced-motion: reduce`that set `transiton:none`
   */
  @include transition($btn-transition);

  @include hover {
    color: $body-color; // white
    text-decoration: none; 
  }

  &:focus,
  &.focus {
    outline: 0;
    
    // 0 0 0 .2rem rgba(theme-color("primary"), .25)
    box-shadow: $btn-focus-box-shadow;
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    opacity: $btn-disabled-opacity; //.65
    
    // set box-shadow to `none`
    @include box-shadow(none);
  }

  // Opinionated: add "hand" cursor to non-disabled .btn elements
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  // not set `:disabled` and set `:active` style
  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    
    //inset 0 3px 5px rgba($black, .125)
    @include box-shadow($btn-active-box-shadow);

    &:focus {
      
      // 0 0 0 .2rem rgba(theme-color("primary"), .25)
      //  //inset 0 3px 5px rgba($black, .125)
      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
    }
  }
}

-------------------
// variables
$body-color:                $gray-900 !default;
$btn-font-weight:             $font-weight-normal !default;

$btn-border-width:            $input-btn-border-width !default;
$input-btn-border-width:      $border-width !default;


$btn-padding-y:               $input-btn-padding-y !default;
$btn-padding-x:               $input-btn-padding-x !default;
$btn-font-size:               $input-btn-font-size !default;
$btn-line-height:             $input-btn-line-height !default;

$input-btn-padding-y:         .375rem !default;
$input-btn-padding-x:         .75rem !default;
$input-btn-font-size:         $font-size-base !default;
$input-btn-line-height:       $line-height-base !default;

$btn-border-radius:           $border-radius !default;

$btn-transition:  color .15s ease-in-out, 
                  background-color .15s ease-in-out, border-color .15s ease-in-out, 
                  box-shadow .15s ease-in-out !default;

$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;
$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;
$input-btn-focus-width:       .2rem !default;
$input-btn-focus-color:       rgba($component-active-bg, .25) !default;
$component-active-bg:         theme-color("primary") !default;
// 0 0 0 .2rem rgba(theme-color("primary"), .25)

$btn-disabled-opacity:        .65 !default;

$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;
```

```SCSS
// mixin

// Button sizes
// set `padding-y`,  `padding-x`, `font-size`, `line-height`, `border-radius`
@mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {
  padding: $padding-y $padding-x;
  font-size: $font-size;
  line-height: $line-height;
  // Manually declare to provide an override to the browser default
  @if $enable-rounded {
    border-radius: $border-radius;
  } @else {
    border-radius: 0;
  }
}

/* set transiton and 
 * use medai query for `prefers-reduced-motion: reduce`that set `transiton:none`
 */
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

$enable-transitions:                          true !default;
$enable-prefers-reduced-motion-media-query:   true !default;


// box-shadow
@mixin box-shadow($shadow...) {
  @if $enable-shadows {
    box-shadow: $shadow;
  }
}

$enable-shadows:                              false !default;

```
#### [⬆ Back to top][0.0]


## block button
* firstly, use `btn`
* `.btn-block` set `display:block`, `width:100%`
* `.btn-block+btn-block` set `margin-top` so that multiple block button has engough space.
```SCSS
.btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  + .btn-block {
    margin-top: $btn-block-spacing-y;
  }
}

------------
// variables
$btn-block-spacing-y:         .5rem !default;
```
#### [⬆ Back to top][0.0]


## button size
* Firstly, set `btn`
* `btn-lg`, `btn-sm` use mixin `button-size()` set their `padding`, `font-size`, `line-height`, `btn-border-radius-lg`

```SCSS
.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg,
                      $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
}

.btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, 
                      $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
}

// set `padding`, `font-size`, `line-height`, `border-radius`
@mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {
  padding: $padding-y $padding-x;
  font-size: $font-size;
  line-height: $line-height;
  // Manually declare to provide an override to the browser default
  @if $enable-rounded {
    border-radius: $border-radius;
  } @else {
    border-radius: 0;
  }
}
```
```SCSS
// variables
$btn-padding-y-sm:            $input-btn-padding-y-sm !default;
$btn-padding-x-sm:            $input-btn-padding-x-sm !default;
$btn-font-size-sm:            $input-btn-font-size-sm !default;
$btn-line-height-sm:          $input-btn-line-height-sm !default;
$btn-padding-y-lg:            $input-btn-padding-y-lg !default;
$btn-padding-x-lg:            $input-btn-padding-x-lg !default;
$btn-font-size-lg:            $input-btn-font-size-lg !default;
$btn-line-height-lg:          $input-btn-line-height-lg !default;

$input-btn-padding-y-sm:      .25rem !default;
$input-btn-padding-x-sm:      .5rem !default;
$input-btn-font-size-sm:      $font-size-sm !default;
$input-btn-line-height-sm:    $line-height-sm !default;
$input-btn-padding-y-lg:      .5rem !default;
$input-btn-padding-x-lg:      1rem !default;
$input-btn-font-size-lg:      $font-size-lg !default;
$input-btn-line-height-lg:    $line-height-lg !default;
```
#### [⬆ Back to top][0.0]


## button color
* Firstly, use `.btn`
* `.btn-*` set `color`, `background-color`, `border-color`, `box-shadow`(becase of `$enable-shadows: false`, so it is `none`)
  
* `.bin-*:hover` set `color`, `background-color`, `border-color`

* `.btn-*:foucs` and ` .btn.focus` set `box-shadow`

* `.btn-*:disabled` and `.btn-*.disabled` set `color`, `background-color`, `border-color`, and when the `$enable-gradients` is true setting `backround-image: none` so that remove gradients.

* `.btn-*:not(:disabled):not(.disabled):active`, `.btn-*:not(:disabled):not(.disabled).active` `.btn-*.show>.btn-*.dropdown-toggle` set `color`, `background-color`, `border-color`, and when the `$enable-gradients` is true setting `backround-image: none` so that remove gradients.

* `.btn-*:not(:disabled):not(.disabled):active:focus`, `.btn-*:not(:disabled):not(.disabled).active:focus` and `.btn-*.show>.btn-*.dropdown-toggle:focus` set `box-shadow`

```SCSS
@each $color, $value in $theme-colors {
  .btn-#{$color} {
    @include button-variant($value, $value);
  }
}

-----------------------
// mixin
/* according the parameter, set `background-color`, `border-color` of button,
 * button hover state, and button active state.
 */
@mixin button-variant($background, $border, $hover-background: darken($background, 7.5%), 
                    $hover-border: darken($border, 10%), $active-background: darken($background, 10%), 
                    $active-border: darken($border, 12.5%)) {
  color: color-yiq($background); // $black or $white
  
  // $enable-gradients: false, so set `background: $background`
  @include gradient-bg($background);
  border-color: $border;

  // $enable-shadows: false, so not set box-shadow
  @include box-shadow($btn-box-shadow); 

  // .btn-*:hover{...}
  @include hover {
    color: color-yiq($hover-background);

    //  // $enable-gradients: false, so set `background: $background`
    @include gradient-bg($hover-background);
    border-color: $hover-border;
  }

  // .btn-*:foucs, .btn.focus{...} set `box-shadow`
  &:focus, &.focus {
    // Avoid using mixin so we can pass custom focus shadow properly
    @if $enable-shadows {
      box-shadow: $btn-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);
    } @else {
      box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);
    }
  }

  // .btn-*:disabled, .btn-*.disabled{...} set `color`, `background-color`, `border-color`
  // Disabled comes first so active can properly restyle
  &.disabled, &:disabled {
    color: color-yiq($background);
    background-color: $background;
    border-color: $border;
    // Remove CSS gradients if they're enabled
    @if $enable-gradients {
      background-image: none;
    }
  }
  
  /* .btn-*:not(:disabled):not(.disabled):active,
   * .btn-*:not(:disabled):not(.disabled).active,
   * .btn-*.show > .btn-*.dropdown-toggle{...}
   * set `color`, `background-color`, `border-color`
   *
   * .btn-*:not(:disabled):not(.disabled):active:focus,
   * .btn-*:not(:disabled):not(.disabled).active:focus,
   * .btn-*.show > .btn-*.dropdown-toggle:focus{...}
   * set `box-shadow`
   */
  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active,
  .show > &.dropdown-toggle {
    color: color-yiq($active-background);
    background-color: $active-background;
    @if $enable-gradients {
      background-image: none; // Remove the gradient for the pressed/active state
    }
    border-color: $active-border;

    &:focus {
      // Avoid using mixin so we can pass custom focus shadow properly
      @if $enable-shadows {
        box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);
      } @else {
        box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);
      }
    }
  }
}
```
```SCSS
$enable-gradients:                            false !default;

@mixin gradient-bg($color) {
  @if $enable-gradients {
    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x;
  } @else {
    background-color: $color;
  }
}
```
#### [⬆ Back to top][0.0]


## button outline
* Firstly, use 'btn`

* `btn-outline-*` set `color`, `border-color`

* `btn-outline-*:hover` set `color`, `backgorund-color`, `border-color`

* `.btn-outline-*:focus` and `.btn-outline.focus` set `box-shadow`

* `..btn-outline-*.disabled` and `.btn-outline:disabled` set `color` `background-color`

* `.btn-outline-*:not(:disabled):not(.disabled):active,`, `.btn-outline-*:not(:disabled):not(.disabled).active`, `.btn-outline-*.show>.btn-outline-*.dropdown-toggle` set `color`, `background-color`, `border-color`

* `.btn-outline-*:not(:disabled):not(.disabled):active:focus`, `.btn-outline-*:not(:disabled):not(.disabled).active:focus` and `.btn-outline-*.show>.btn-outline-*.dropdown-toggle:focus` set `box-shadow`

```SCSS
@each $color, $value in $theme-colors {
  .btn-outline-#{$color} {
    @include button-outline-variant($value);
  }
}


-----------------------------
// variables
/* accroding parameters, set `color` to button and button hover state, 
 * set button active state `background-color`, `border-color`
 */
@mixin button-outline-variant($color, $color-hover: color-yiq($color), 
                             $active-background: $color, $active-border: $color) {
  color: $color;
  border-color: $color;

  // .btn-outline-*:hover{...}
  @include hover {
    color: $color-hover;
    background-color: $active-background;
    border-color: $active-border;
  }
  
  // .btn-outline-*:focus, .btn-outline.focus{...}
  &:focus, &.focus {
    box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);
  }

  // .btn-outline-*.disabled, .btn-outline:disabled{...}
  &.disabled, &:disabled {
    color: $color;
    background-color: transparent;
  }

  /* .btn-outline-*:not(:disabled):not(.disabled):active,
   * .btn-outline-*:not(:disabled):not(.disabled).active,
   * .btn-outline-*.show>.btn-outline-*.dropdown-toggle{...}
   *
   * .btn-outline-*:not(:disabled):not(.disabled):active:focus,
   * .btn-outline-*:not(:disabled):not(.disabled).active:focus,
   * .btn-outline-*.show>.btn-outline-*.dropdown-toggle:focus{...}
   */
  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active,
  .show > &.dropdown-toggle {
    color: color-yiq($active-background);
    background-color: $active-background;
    border-color: $active-border;

    &:focus {
      // Avoid using mixin so we can pass custom focus shadow properly
      @if $enable-shadows and $btn-active-box-shadow != none {
        box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5);
      } @else {
        // $btn-focus-width: ...=.2rem;
        box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);
      }
    }
  }
}

-------------------
// vairables
$btn-focus-width:             $input-btn-focus-width !default;
$input-btn-focus-width:       .2rem !default;
```
#### [⬆ Back to top][0.0]


## button link
* Firstly, us `.btn`
* `.btn-link` set `font-weight`, `color`
* `.btn-link:hover` set `color`, `text-decoration`
* `.btn-link.focus`, `.btn-link:focus` set `text-decoration`, `box-shadow` all to none.
* `.btn-link:disabled`, `.btn-link.disabled` set `color`, `pointer-event: none`
```SCSS
// Make a button look and behave like a link
.btn-link {
  font-weight: $font-weight-normal; //400
  color: $link-color; // blue
 
  @include hover {
    color: $link-hover-color; //darken(blue, 15%)
    text-decoration: $link-hover-decoration; // underline
  }

  &:focus,
  &.focus {
    text-decoration: $link-hover-decoration; // underline
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    color: $btn-link-disabled-color; //$gray-600
    pointer-events: none;
  }
  // No need for an active state here
}

-------------
// variables
$link-hover-color:                        darken($link-color, 15%) !default;
$link-hover-decoration:                   underline !default;

$btn-link-disabled-color:     $gray-600 !default;
```
#### [⬆ Back to top][0.0]


## button plugin


## javascript method
Bootstrap’s **button** styles can be applied to other elements

> such as <label>s, to provide checkbox or radio style button toggling
> Add data-toggle="buttons" to a .btn-group containing those modified buttons to enable their toggling behavior via JavaScript and add .btn-group-toggle to style the `<input>`s within your buttons