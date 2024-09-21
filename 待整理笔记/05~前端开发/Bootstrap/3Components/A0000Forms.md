[0.0]: #Forms
[1.0]: #form-layout
[1.1]: #form-group
[1.2]: #form-grid
[1.3]: #form-row
[1.4]: #form-inline
[2.0]: #form-control
[2.1]: #Textual-form-control
[2.2]: #file-and-range-form-control
[2.3]: #plaintext-form-control
[3.0]: #form-control-size
[3.1]: #small-form-control
[3.2]: #large-form-control
[001]: #inline-form-label
[4.0]: #form-check
[5.0]: #form-check-inline
[6.0]: #form-helper-text
[7.0]: #form-validation
[7.1]: #custom-form-validation
[7.2]: #browser-default
[7.3]: #serverside-validation
[7.4]: #display-validation-feedback-by-tooltips
[8.0]: #custom-form

[1]: ../1Layout/20000Grid-system.md

[2]: ../4Utilities/E0000Spacing.md
[3]: ../4Utilities/70000Flex.md
[4]: A10000Custom-forms.md

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-9-Forms.html
[02]: ../Appendix/3Components-9-Forms.html


1. form layout
* Form layout we use `.form-gorup`, `grid-system`, `form-row`, `form-inline`

2. form control
   * To textual input, use `form-control` to its `<input>`

   * To `input[type=file]` use `form-control-file`
   * To `input[type=range]` use `form-control-range`

3. form plaintext
   * use `.form-contro-plainext` to `<input>`, and set attribute `readonly`

4. form check
    
    * Specially, `form-check` use in `<input>` parent, usually `<div>`. If you want to inline the chckbox or radio, add `form-check-inline`
    
    * Use `.form-check-input` in `<input>`, `.form-check-label` in `<label>`

5. form control size
   
    * use `.form-control-sm` or `.form-control-lg` to set `<input>` size.

6. form label

    * for horizontal form label, use `.col-form-label` or `.col-form-label-sm`, `.col-form-label-lg`

7. form validation
    * Browser default
    * Custom validation, set attribute `novalidate`, add custom javascript. Use `.valid-feedback`, `invalid-feedback`, `.valid-tooltip` or `invalid-tooltip` to set validatioin feedback.

8. custom form
    
    Specially to normal form, you can see [custom form][4]

# Forms
See rendering result [forms.html][01]

See source code [forms.html][02]

1. [form layout][1.0]
    * [form group][1.1]
    * [form grid][1.2]
    * [form row][1.3]
    * [form inline][1.4]

2. [form control][2.0]
    * [Textual form control][2.1]
    * [file and range form control][2.2]
    * [plaintext form control][2.3]

3. [form control size][3.0]
    * [small form control][3.1]
    * [large form control][3.2]

4. [inline form label][001]

5. [form check][4.0]
6. [form check inline][5.0]
7. [form helper text][6.0]
8. [form validation][7.0]
    * [custom form validation][7.1]
    * [browser default][7.2]
    * [serverside validation][7.3]
    * [display validation feedback by tooltips][7.4]

9. [custom form][8.0]
## form layout
### form group
* `'form-group` set `margin-bottom`
```SCSS
.form-group {
  margin-bottom: $form-group-margin-bottom;
}

---------
// variables
$form-group-margin-bottom:              1rem !default;
```
#### [⬆ Back to top][0.0]

### form grid
Direct your creativity to use more `grid system` clasee, like `.row`, `.col-*`, `.col-*-*`, more about `grid system` see [grid system][1]
#### [⬆ Back to top][0.0]


### form row
A variation(变体) of our standard grid row that overrides the default column gutters for tighter and more compact layouts(实现更紧凑的布局)

* `.form-row` set `display: flex`, `flex-wrap: warp`, `margin-left`, `margin-right`

* `.form-row > .col`, `form-row>[class*="col-"]` set `padding-right`, `padding-left`
```SCSS
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -$form-grid-gutter-width / 2; // -5px
  margin-left: -$form-grid-gutter-width / 2; // -5px

  > .col, > [class*="col-"] {
    padding-right: $form-grid-gutter-width / 2; // 5px
    padding-left: $form-grid-gutter-width / 2; // 5px
  }
}

---------
// variables
$form-grid-gutter-width:                10px !default;
```
#### [⬆ Back to top][0.0]


### form inline
Use the `.form-inline` class to display a series of labels, form controls, and buttons on a single horizontal row.

**:exclamation: Note:** we can sue [space utilities][2] and [flex utilities][3] to provide alignment control
* `.form-inline` set `display: flex`, `flex-flow: row wrap`, `align-items: ceter`

* `.form-inline .from-check` set `width: 100`(which is what we want for `xs grid tier`)

* @media(min-width: 576px){...}
    * `.form-inline lable` set `display: flex`, `align-items: center`, `justify-content: 0`, `margin-bottom: 0`
    
    * `form-inline .form-group` set `display: flex`, `flex: 0 0 auot`, `flex-flow: row wrap`, `align-items: center`, `margin-bottom: 0`
    
    * `form-inline .form-control` set `display: inline-block`, `width: auto`(Prevent labels from stacking above inputs in `.form-group`), `vertical-align: middle`
    
    * `.form-inline .form-control-plaintext` set `display: inline-block`
    
    * `.form-inline .input-group`, `from-inline .custom-select` set `width: auto`
    
    * `.form-inline .form-check` set `display: flex`, `align-items: center`, `justify-content: center`, `width: auto`, `padding-left: 0`
    
    * `.form-inline .form-check-input` set `position: relative`, `margin-top: 0`, `margin-right`, `margin-left: 0`
    
    * `.form-inline .custom-control` set `align-items: center`, `justify-content: center`
    
    * `.form-inline .custom-control-label` set `margin-bottom: 0`
```SCSS
// Inline forms
/* Make forms appear inline(-block) by adding the `.form-inline` class. Inline
 * forms begin stacked on extra small (mobile) devices and then go inline when
 * viewports reach <768px.
 *
 * Requires wrapping inputs and labels with `.form-group` for proper display of
 * default HTML form controls and our custom form controls (e.g., input groups).
 */

.form-inline {
  display: flex;
  flex-flow: row wrap;
  /* Prevent shorter elements from growing to same height as others    
   * (e.g., small buttons growing to normal sized button height)
   */
  align-items: center; 

  /* Because we use flex, the initial sizing of checkboxes is collapsed and
   * doesn't occupy the full-width (which is what we want for xs grid tier),
   * so we force that here.
   */
  .form-check {
    width: 100%;
  }

  // Kick in the inline
  @include media-breakpoint-up(sm) {
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
    }

    // Inline-block all the things for "inline"
    .form-group {
      display: flex;
      flex: 0 0 auto;
      flex-flow: row wrap;
      align-items: center;
      margin-bottom: 0;
    }

    // Allow folks to *not* use `.form-group`
    .form-control {
      display: inline-block;
      width: auto; // Prevent labels from stacking above inputs in `.form-group`
      vertical-align: middle;
    }

    // Make static controls behave like regular ones
    .form-control-plaintext {
      display: inline-block;
    }

    .input-group,
    .custom-select {
      width: auto;
    }

    // Remove default margin on radios/checkboxes that were used for stacking, and
    // then undo the floating of radios and checkboxes to match.
    .form-check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      padding-left: 0;
    }
    .form-check-input {
      position: relative;
      margin-top: 0;
      margin-right: $form-check-input-margin-x; // .25rem
      margin-left: 0;
    }

    .custom-control {
      align-items: center;
      justify-content: center;
    }
    .custom-control-label {
      margin-bottom: 0;
    }
  }
}


-----------------
// variablesd
$form-check-input-margin-x:             .25rem !default;
```
#### [⬆ Back to top][0.0]


## form control
* Textual form control stylyed with `.form-control`
* flle and range form control use `form-control-flle`, or `form-control-range`
* plaintext form use `form-control-plaintext`

### Textual form control
Textual form controls—like `<input>`, `<select>`, and `<textarea>`—are styled with the `.form-control` class

* `.from-control` set `display: block`, `width: 100%`, `height`, `padding`, `font-size`, `line-height`, `color`, `background-color`, `background-clip`, `border`, `border-radius`, `box-shadow`(`$enable-shadow: false`), `transition`

* `.from-control::ms-expand` set `background-color: transparent`, `border: 0` to Unstyle the caret on `<select>`s in IE10+.

* `.form-control:focus` set `color`, `background-color`, `border-color`, `outline: 0`,  `box-shadow`

* `form-control::placeholder` set `color`, `opacity`(Override Firefox's unusual default opacity)

* `.form:disabled`, `.form[readonly]` set `background-color`, `opacity`(Override Firefox's unusual default opacity)
```SCSS
.form-control {
  display: block;
  width: 100%;
  
  //$input-height-inner-$input-height-border
  // (1rem*1.5)+(.5rem*2) - 2px
  height: $input-height; 
  padding: $input-padding-y $input-padding-x; // .5rem
  font-size: $input-font-size; //.75rem
  font-weight: $input-font-weight; // 400
  line-height: $input-line-height; //1.5
  color: $input-color; // $gray-700
  background-color: $input-bg; // $white
  background-clip: padding-box;

  // 1px solid $gray-400
  border: $input-border-width solid $input-border-color;

  @if $enable-rounded {
    // .25rem
    border-radius: $input-border-radius;
  } @else {
    // Otherwise undo the iOS default
    border-radius: 0;
  }
  
  // inset 0 1px 1px rgba($black, .075)
  // `$enable-shadow: false`
  @include box-shadow($input-box-shadow);
 
  // border-color .15s ease-in-out, box-shadow .15s ease-in-out
  @include transition($input-transition);

  // Unstyle the caret on `<select>`s in IE10+.
  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }

  // Customize the `:focus` state to imitate native WebKit styles.
  @include form-control-focus();

  // Placeholder
  &::placeholder {
    color: $input-placeholder-color; // $gray-600
    // Override Firefox's unusual default opacity;
    opacity: 1;
  }

  // Disabled and read-only inputs
  /* HTML5 says that controls under a fieldset > legend:first-child won't be
   * disabled if the fieldset is disabled. Due to implementation difficulty, we
   * don't honor that edge case; we style them as disabled anyway.
   */
  &:disabled, &[readonly] {
    background-color: $input-disabled-bg; //$gray-200
    // iOS fix for unreadable disabled content
    opacity: 1;
  }
}

-------------
// variables
// (1rem*1.5)+(.375rem*2) - 2px
$input-height:                          calc(#{$input-height-inner} + #{$input-height-border}) !default;

// $input-height-border
$input-height-border:                   $input-border-width * 2 !default;
$input-border-width:                    $input-btn-border-width !default;
$input-btn-border-width:      $border-width !default;

// $input-height-border
// (1rem*1.5)+(.375rem*2)
$input-height-inner:       ($input-btn-font-size * $input-btn-line-height) + ($input-btn-padding-y * 2) !default;
$input-btn-line-height:       $line-height-base !default; 
$line-height-base:            1.5 !default;

$input-btn-padding-y:         .375rem !default;
$input-btn-padding-x:         .75rem !default;

$input-font-weight:                     $font-weight-base !default;
$input-line-height:                     $input-btn-line-height !default;

$input-color:                           $gray-700 !default;
$input-bg:                              $white !default;
$input-border-color:                    $gray-400 !default;

$input-border-radius:                   $border-radius !default;

$input-box-shadow:                      inset 0 1px 1px rgba($black, .075) !default;

$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$input-placeholder-color:               $gray-600 !default;
$input-disabled-bg:                     $gray-200 !default;
```

```SCSS
// form-control-focus()
@mixin form-control-focus() {
  &:focus {
    color: $input-focus-color; // $gray-700
    background-color: $input-focus-bg; // $white
    border-color: $input-focus-border-color; // lighten($primary, 25%)
    outline: 0;
    // Avoid using mixin so we can pass custom focus shadow properly
    @if $enable-shadows {
      box-shadow: $input-box-shadow, $input-focus-box-shadow;
    } @else {
      // 0 0 0 $input-btn-focus-width $input-btn-focus-color
      // 0 0 0 .2em rgba($primary, .25)
      box-shadow: $input-focus-box-shadow;
    }
  }
}

---------
// variables
$input-focus-color:                     $input-color !default;
$input-focus-bg:                        $input-bg !default;
$input-focus-border-color:              lighten($component-active-bg, 25%) !default;
$component-active-bg:         theme-color("primary") !default;

$input-color:                           $gray-700 !default;
$input-bg:                              $white !default;

$input-box-shadow:                      inset 0 1px 1px rgba($black, .075) !default;

$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;
$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;
$input-btn-focus-width:       .2rem !default;
$input-btn-focus-color:       rgba($component-active-bg, .25) !default;

```
**:exclamation: Note:** For `<select>`, `select.form-control[size]`, `selet.form-control[multiple]` set `height: auto`. For `<textarea>`, `textarea.form-control` set `height: auto`
```SCSS
select.form-control {
  &[size],
  &[multiple] {
    height: auto;
  }
}

-----------------
textarea.form-control {
  height: auto;
}
```
#### [⬆ Back to top][0.0]


### file and range form control 
* For file input and range input, use `form-contrl-file` replace with `form-control`
* `form-control-file`, `form-control-range` set `display: block`, `width:100%`
```SCSS
.form-control-file, .form-control-range {
  display: block;
  width: 100%;
}
```
#### [⬆ Back to top][0.0]


### plaintext form control
**:exclamation: Note:** `.form-control-plaintext` add in `<input>`, and set attribute `readonly`

* Use `.form-control-plaintext` for `<input>`, set `display: block`, `width: 100%`, `paddig-top`, `padding-bottom`, `margin-bottom`, `line-height`, `color`, `background-color`, `border`

* `.form-control-plaintext.form-control-sm`, `.form-control-plaintext.form-control-lg` set `padding-right: 0`, `padding-left: 0`
```SCSS
/* Apply class to a readonly input to make it appear like regular plain
 *text (without any border, background color, focus indicator)
 */

.form-control-plaintext {
  display: block;
  width: 100%;
  padding-top: $input-padding-y; // .75rem
  padding-bottom: $input-padding-y; // .75rem
  margin-bottom: 0; // match inputs if this class comes on inputs with default margins
  line-height: $input-line-height; //1.5
  color: $input-plaintext-color; // $gray-900
  background-color: transparent;
  border: solid transparent;
  border-width: $input-border-width 0; // 1px

  &.form-control-sm,
  &.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }
}

----------------
// variables
$input-padding-y:                       $input-btn-padding-y !default;
$input-padding-x:                       $input-btn-padding-x !default;
$input-btn-padding-y:         .375rem !default;
$input-btn-padding-x:         .75rem !default;

$input-plaintext-color:                 $body-color !default;
$body-color:                $gray-900 !default;
```
#### [⬆ Back to top][0.0]

## form control size
Use `form-control-sm` and `form-control-lg` to set form control size.

### small form control
* Firstly, use `form control` to `<input>` 

* `.form-control-sm` set `height`, `padding`, `font-size`, `line-height`, `border-radius`

```SCSS
.form-control-sm {
  // $input-height-inner-sm + $input-height-border
  // (.875rem*1.5)+(.25rem*2)+2px
  height: $input-height-sm;
  padding: $input-padding-y-sm $input-padding-x-sm; // .25rem .5rem
  font-size: $input-font-size-sm; // .875rem
  line-height: $input-line-height-sm; // 1.5
  @include border-radius($input-border-radius-sm); //.2rem
}

---------------------
// variables
//  (.875rem*1.5)+(.25rem*2)+2px
$input-height-sm:             calc(#{$input-height-inner-sm} + #{$input-height-border}) !default;
// (.875rem*1.5)+(.25rem*2)
$input-height-inner-sm:  ($input-btn-font-size-sm * $input-btn-line-height-sm) + ($input-btn-padding-y-sm * 2)

$input-btn-font-size-sm:      $font-size-sm !default; // .875rem
$input-btn-line-height-sm:    $line-height-sm !default; // 1.5
$input-btn-padding-y-sm:      .25rem !default;

$input-height-border:                   $input-border-width * 2 !default;

$input-padding-y-sm:                    $input-btn-padding-y-sm !default;
$input-padding-x-sm:                    $input-btn-padding-x-sm !default;
$input-btn-padding-y-sm:      .25rem !default;
$input-btn-padding-x-sm:      .5rem !default;

$input-border-radius-sm:                $border-radius-sm !default;
$border-radius-sm:            .2rem !default;
```
#### [⬆ Back to top][0.0]


### large form control
* Firstly, use '.form-control` to `<inpout>`

* `.form-control-lg` set `height`, `padding`, `font-size`, `line-height`, `border-radius`
```SCSS
.form-control-lg {
  // $input-height-inner-lg + $input-height-border
  // (1.25rem*1.5)*(.5rem*2)+2px
  height: $input-height-lg;
  padding: $input-padding-y-lg $input-padding-x-lg; // .5rem 1rem
  font-size: $input-font-size-lg; // 1.25rem
  line-height: $input-line-height-lg; // 1.5
  @include border-radius($input-border-radius-lg); // .3rem
}

--------------------
// (1.25rem*1.5)*(.5rem*2)+2px
$input-height-lg:                       calc(#{$input-height-inner-lg} + #{$input-height-border}) !default;
// (1.25rem*1.5)*(.5rem*2)
$input-height-inner-lg: ($input-btn-font-size-lg * $input-btn-line-height-lg) + ($input-btn-padding-y-lg * 2)
$input-btn-font-size-lg:      $font-size-lg !default; // 1.25rem
$input-btn-line-height-lg: ... // 1.5rem
$input-btn-padding-y-lg:      .5rem !default;

$input-padding-y-lg:                    $input-btn-padding-y-lg !default;
$input-padding-x-lg:                    $input-btn-padding-x-lg !default;
$input-btn-padding-y-lg:      .5rem !default;
$input-btn-padding-x-lg:      1rem !default;

$input-border-radius-lg:                $border-radius-lg !default;
$border-radius-lg:            .3rem !default;
```
#### [⬆ Back to top][0.0]


## inline form label
**:exclamation: Note:** For use with horizontal and inline forms, use `.col-form-label-sm or .col-form-label-lg to your `<label>`s or `<legend>`s to correctly follow the size of .form-control-lg and .form-control-sm.

* `col-form-label` set `padding-top`, `padding-bottom`, `font-size`, `line-height`

* `col-form-label-sm`, `col-form-label-lg` set their `padding-top`, `padding-bottom`, `font-size`, `line-height`
```SCSS
// For use with horizontal and inline forms, when you need the label (or legend)
// text to align with the form controls.
.col-form-label {
  // .375 + 1px
  padding-top: calc(#{$input-padding-y} + #{$input-border-width});
  // .375 + 1px
  padding-bottom: calc(#{$input-padding-y} + #{$input-border-width});
  margin-bottom: 0; // Override the `<label>/<legend>` default
  font-size: inherit; // Override the `<legend>` default
  line-height: $input-line-height; // 1.5
}

.col-form-label-lg {
  // .5rem + 1px
  padding-top: calc(#{$input-padding-y-lg} + #{$input-border-width});
  // .5rem + 1px
  padding-bottom: calc(#{$input-padding-y-lg} + #{$input-border-width});
  font-size: $input-font-size-lg; // 1.25rem
  line-height: $input-line-height-lg; // 1.5
}

.col-form-label-sm {
  // .25rem + 1px
  padding-top: calc(#{$input-padding-y-sm} + #{$input-border-width});
  // .25rem + 1px
  padding-bottom: calc(#{$input-padding-y-sm} + #{$input-border-width});
  font-size: $input-font-size-sm; // .875rem
  line-height: $input-line-height-sm; // 1.5
}

------------
// variables
$input-padding-y:                       $input-btn-padding-y !default;
$input-border-width:                    $input-btn-border-width !default;
$input-btn-border-width:      $border-width !default;

$input-padding-y-lg:                    $input-btn-padding-y-lg !default;

$input-btn-padding-y:         .375rem !default;
$input-btn-padding-y-sm:      .25rem !default;
$input-btn-padding-y-lg:      .5rem !default;

```
#### [⬆ Back to top][0.0]


## form check
* Firstly, use `.form-check` to `<div>`, set `position: relative`, `display: block`, `padding-left`

* For `<input>`, use `form-check-input` set  `position: absolute`, `margin-top`, `margin-left: -.formCheckPaddingLeft`

* `.form-check-input:disabled~.form-check-label` set `color`

* For `<label>`, use `.fock-check-label` set `margin-bottom: 0` to Override default `<label>` bottom margin.
  
```SCSS
.form-check {
  position: relative;
  display: block;
  padding-left: $form-check-input-gutter; // 1.25rem
}

.form-check-input {
  position: absolute;
  margin-top: $form-check-input-margin-y; // .3rem
  margin-left: -$form-check-input-gutter; // -1.25rem

  &:disabled ~ .form-check-label {
    color: $text-muted;
  }
}

.form-check-label {
  margin-bottom: 0; // Override default `<label>` bottom margin
}

-----------------
// variables
$form-check-input-gutter:               1.25rem !default;
$form-check-input-margin-y:             .3rem !default;
```
#### [⬆ Back to top][0.0]


## form check inline
* Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to `<div>` that use `form-check`

* `form-check-inline` set `display: inline-flex`, `align-items: center`, `padding-left: 0`(Override `.form-check`), `margin-right`

* `from-check-inline .form-check-input` set `postion: static`, `margin-top: 0`, `margin-right`, `margin-left: 0` to undo `.form-check-input` defaults and add some `margin-right`
```SCSS
.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0; // Override base .form-check
  margin-right: $form-check-inline-margin-x; // .75rem

  // Undo .form-check-input defaults and add some `margin-right`.
  .form-check-input {
    position: static;
    margin-top: 0;
    margin-right: $form-check-inline-input-margin-x; // .3125rem
    margin-left: 0;
  }
}

---------------
// variable
$form-check-inline-margin-x:            .75rem !default;
$form-check-inline-input-margin-x:      .3125rem !default
```
#### [⬆ Back to top][0.0]


## form helper text
* Use `.form-text` to `<small>`, usually add `.text-muted`

* `.form-text` set `display: block`, `margin-top`
```SCSS
.form-text {
  display: block;
  margin-top: $form-text-margin-top; // .25rem
}

-----------
// variables
$form-text-margin-top:                  .25rem !default;
```
#### [⬆ Back to top][0.0]


## form validation
```SCSS
@include form-validation-state("valid", $form-feedback-valid-color);
@include form-validation-state("invalid", $form-feedback-invalid-color);

-----------
// variables
$form-feedback-valid-color:         theme-color("success") !default;
$form-feedback-invalid-color:       theme-color("danger") !default;
```

```SCSS
@mixin form-validation-state($state, $color) {
  .#{$state}-feedback {
    display: none;
    width: 100%;
    margin-top: $form-feedback-margin-top; // .25rem
    font-size: $form-feedback-font-size; // 80%
    color: $color;
  }

  .#{$state}-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%; // Contain to parent when possible
    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x; // .25rem .5rem
    margin-top: .1rem;
    font-size: $form-feedback-tooltip-font-size; // .875rem
    line-height: $form-feedback-tooltip-line-height; // 1.5
    color: color-yiq($color); // return $black or $white

    // rba($color, .9)
    background-color: rgba($color, $form-feedback-tooltip-opacity); 
    @include border-radius($form-feedback-tooltip-border-radius); // .25rem
  }

  // textual input validation
  .form-control {
    .was-validated &:#{$state},
    &.is-#{$state} {
      border-color: $color;

      @if $enable-validation-icons { // true
        // $input-height-innner: (1rem*1.5)+(.375rem*2）
        padding-right: $input-height-inner;
        background-repeat: no-repeat;
        background-position: center right calc(#{$input-height-inner} / 4);
        background-size: calc(#{$input-height-inner} / 2) calc(#{$input-height-inner} / 2);

        @if $state == "valid" {
          // str-replace(url(...))
          background-image: $form-feedback-icon-valid;
        } @else {
          // str-replace(url(...))
          background-image: $form-feedback-icon-invalid;
        }
      }

      &:focus {
        border-color: $color;
        // 0 0 0 .2rem rba($color, .25)
        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);
      }

      ~ .#{$state}-feedback,
      ~ .#{$state}-tooltip {
        display: block;
      }
    }
  }
 
  // spcially, textarea validation
  textarea.form-control {
    .was-validated &:#{$state},
    &.is-#{$state} {
      @if $enable-validation-icons {
        // (1rem*1.5)+(.375rem*2）
        padding-right: $input-height-inner;
        background-position: top calc(#{$input-height-inner} / 4) right calc(#{$input-height-inner} / 4);
      }
    }
  }

  // custom-select validation
  .custom-select {
    .was-validated &:#{$state},
    &.is-#{$state} {
      border-color: $color;

      @if $enable-validation-icons { //true
        // str-replace(url(...))
        $form-feedback-icon: if($state == "valid", $form-feedback-icon-valid, $form-feedback-icon-invalid);
        
        //$input-height-inner * 3 / 4 + $custom-select-padding-x + $custom-select-indicator-padding
        // (1rem*1.5)+(.375rem*2）*3/4 + .75rem +1rem
        padding-right: $custom-select-feedback-icon-padding-right;

        /* str-replace(url("...")) no-repeat right .75rem 
         * center/8px 10px $form-feedback-icon
         * no-repeat 
         * center right (.75rem + 1rem)
         * (1rem*1.5)+(.375rem*2)/2  (1rem*1.5)+(.375rem*2)/2
         */
        background: $custom-select-background, $form-feedback-icon no-repeat $custom-select-feedback-icon-position / 
                    $custom-select-feedback-icon-size;
      }

      &:focus {
        border-color: $color;
        // 0 0 0 .2rem rgba($color, .25)
        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);
      }

      ~ .#{$state}-feedback,
      ~ .#{$state}-tooltip {
        display: block;
      }
    }
  }

  // for file contorl validation
  .form-control-file {
    .was-validated &:#{$state},
    &.is-#{$state} {
      ~ .#{$state}-feedback,
      ~ .#{$state}-tooltip {
        display: block;
      }
    }
  }

  // for check-input valiaition
  .form-check-input {
    .was-validated &:#{$state},
    &.is-#{$state} {
      ~ .form-check-label {
        color: $color;
      }

      ~ .#{$state}-feedback,
      ~ .#{$state}-tooltip {
        display: block;
      }
    }
  }

  // for custom-control-input
  .custom-control-input {
    .was-validated &:#{$state},
    &.is-#{$state} {
      ~ .custom-control-label {
        color: $color;

        &::before {
          border-color: $color;
        }
      }

      ~ .#{$state}-feedback,
      ~ .#{$state}-tooltip {
        display: block;
      }

      &:checked {
        ~ .custom-control-label::before {
          border-color: lighten($color, 10%);
          // `$enable-gradient: false`, so set `backgruond-color`
          @include gradient-bg(lighten($color, 10%));
        }
      }

      &:focus {
        ~ .custom-control-label::before {
          // 0 0 0 .2rem rba($color, .25)
          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);
        }

        &:not(:checked) ~ .custom-control-label::before {
          border-color: $color;
        }
      }
    }
  }

  // for custom file input validation
  .custom-file-input {
    .was-validated &:#{$state},
    &.is-#{$state} {
      ~ .custom-file-label {
        border-color: $color;
      }

      ~ .#{$state}-feedback,
      ~ .#{$state}-tooltip {
        display: block;
      }

      &:focus {
        ~ .custom-file-label {
          border-color: $color;
          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);
        }
      }
    }
  }
}

-------------------
// variables
$form-feedback-margin-top:          $form-text-margin-top !default;
$form-text-margin-top:                  .25rem !default;

$form-feedback-font-size:           $small-font-size !default;
$small-font-size:             80% !default;

$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;
$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;

$tooltip-padding-y:                 .25rem !default;
$tooltip-padding-x:                 .5rem !default;

$form-feedback-tooltip-font-size:     $tooltip-font-size !default;
$tooltip-font-size:                 $font-size-sm !default; // .875rem

$form-feedback-tooltip-line-height:   $line-height-base !default; //1.5

$form-feedback-tooltip-opacity:       $tooltip-opacity !default;
$tooltip-opacity:                   .9 !default;
$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;
$tooltip-border-radius:             $border-radius !default;

$enable-validation-icons:                     true !default;


// (1rem*1.5)+(.375rem*2)
$input-height-inner:     ($input-btn-font-size * $input-btn-line-height) + ($input-btn-padding-y * 2) !default;
$input-btn-font-size:         $font-size-base !default;
$input-btn-padding-y:         .375rem !default;

$form-feedback-icon-valid:          str-replace(url(...))
$form-feedback-icon-invalid:        str-replace(url(...))

$input-focus-width:                     $input-btn-focus-width !default;
$input-btn-focus-width:       .2rem !default;

// (1rem*1.5)+(.375rem*2）*3/4 + .75rem +1rem
$custom-select-feedback-icon-padding-right: $input-height-inner * 3 / 4 + $custom-select-padding-x + 
                                            $custom-select-indicator-padding !default;
$custom-select-padding-x:           $input-btn-padding-x !default;
$input-btn-padding-x:         .75rem !default;

// Extra padding to account for the presence of the background-image based indicator
$custom-select-indicator-padding:   1rem !default;

// Used so we can have multiple background elements (e.g., arrow and feedback icon)
// str-replace(url("...")) no-repeat right .75rem center/8px 10px
$custom-select-background:          $custom-select-indicator no-repeat right $custom-select-padding-x center / 
                                    $custom-select-bg-size !default; 
$custom-select-indicator:           str-replace(url("..."))
$custom-select-bg-size:             8px 10px !default; // In pixels because image dimensions

// center right (.75rem + 1rem)
$custom-select-feedback-icon-position:      center right ($custom-select-padding-x + 
                                            $custom-select-indicator-padding) !default;

// (1rem*1.5)+(.375rem*2)/2 (1rem*1.5)+(.375rem*2)/2
$custom-select-feedback-icon-size:          ($input-height-inner / 2) ($input-height-inner / 2) !default;   

$input-focus-width:                     $input-btn-focus-width !default;
$input-btn-focus-width:       .2rem !default;
```
#### [⬆ Back to top][0.0]


### custom form validation
* For custom Bootstrap form validation messages, you’ll need to add the attribute `novalidate` boolean attribute to your `<form>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. When attempting to submit, you’ll see the `:invalid` and `:valid` styles applied to your form controls

* Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for `<select>` are only available with `.custom-select`, and not `.form-control`
#### [⬆ Back to top][0.0]


### browser default
If you not interested in custorming form validation, you can use browser dafault validation.
#### [⬆ Back to top][0.0]


### serverside validation
We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`
#### [⬆ Back to top][0.0]


### display validation feedback by tooltips
You can swap the `.{valid|invalid}-feedback` classes for `.{valid|invalid}-tooltip` classes to display validation feedback in a styled tooltip.
#### [⬆ Back to top][0.0]


## custom form
We can  use our custom form elements to replace the browser defaults. See [custom form][4]