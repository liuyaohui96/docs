[0.0]: #Dropdowns
[1.0]: #basic-dropdown
[2.0]: #dropdown-caret
[3.0]: #dropdown-menu
[4.0]: #dropdown-menu-alignment
[5.0]: #dropdown-item
[6.0]: #dropdown-header-and-dropdown-text
[7.0]: #dropdown-divider
[8.0]: #split-button
[9.0]: #dropdown-direction
[10.0]: #accessbility
[11.0]: #JavaScript-method
[12.0]: #JavaScript-events



[1]: 50000Button-group.md#split-button-dropdowns
[2]: #dropdown-caret

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-8-Dropdowns.html
[02]: ../Appendix/3Components-8-Dropdowns.html

# Dropdowns
See rendering result [dropdown.html][01]

See source code [dropdown.html][02]

Dropdowns are toggleable, contextual overlays for displaying lists of links and more.
1. [basic-dropdown][1.0]
2. [dropdown caret][2.0]
3. [dropdown menu][3.0]
4. [dropdown menu alignment][4.0]
5. [dropdown item][5.0]
6. [dropdown header and dropdown text][6.0]
7. [dropdown divider][7.0]
8. [split button][8.0]
9. [dropdown direction][9.0]
10. [accessbility][10.0]
11. [JavaScript method][11.0]
12. [JavaScript events][12.0]

## basic dropdown
* Firstly, set `.dropdown`,`.dropright`, `.dropdown`, `.dropleft` on a `<div>`

* `.dropup`, `.dropright`, `.dropdown`, `.dropleft` set `position: relative`
  
```SCSS
.dropup, .dropright, .dropdown, .dropleft {
  position: relative;
}
```
#### [⬆ Back to top][0.0]


## dropdown caret
* Firstly, use `.dropdown`,`.dropright`, `.dropdown`, `.dropleft` on parent containier

* Use `.dropdown-toggle` to `<button>` to set a carret in button. Setting `data-toggle="dropdown" aria-haspopup="true" aria-exanpanded="fale"`

* `.dropdown-toggle::after` set `display: inline-block`, `margin-left`, `vertical-align`, `content` and set caret direction(default `$direction=down`)

* mixin `caret-down` set `border-top: .3em`, `border-right: .3em solid  transparent`, `border-bottom: 0`, `border-left: .3em solid transparent`.

* `caret-up`, `caret-left`, `caret-right` set ...
```SCSS
.dropdown-toggle {
  // Generate the caret automatically
  @include caret;
}

@mixin caret($direction: down) {
  // true
  @if $enable-caret {
    &::after {
      display: inline-block;
      margin-left: $caret-width * .85; //.3em * .85
      vertical-align: $caret-width * .85;
      content: "";
      @if $direction == down {
        @include caret-down;
      } @else if $direction == up {
        @include caret-up;
      } @else if $direction == right {
        @include caret-right;
      }
    }

    @if $direction == left {
      &::after {
        display: none;
      }

      &::before {
        display: inline-block;
        margin-right: $caret-width * .85;
        vertical-align: $caret-width * .85;
        content: "";
        @include caret-left;
      }
    }

    &:empty::after {
      margin-left: 0;
    }
  }
}

// caret-down
@mixin caret-down {
  border-top: $caret-width solid; //.3em
  border-right: $caret-width solid transparent;
  border-bottom: 0;
  border-left: $caret-width solid transparent;
}

@mixin caret-up {
  border-top: 0;
  border-right: $caret-width solid transparent;
  border-bottom: $caret-width solid;
  border-left: $caret-width solid transparent;
}

@mixin caret-right {
  border-top: $caret-width solid transparent;
  border-right: 0;
  border-bottom: $caret-width solid transparent;
  border-left: $caret-width solid;
}

@mixin caret-left {
  border-top: $caret-width solid transparent;
  border-right: $caret-width solid;
  border-bottom: $caret-width solid transparent;
}
--------
// variables
$caret-width:                 .3em !default;
```
#### [⬆ Back to top][0.0]


## dropdown menu
* Use `dropdown-menu` to a `<div>`

* `·dropdown-menu` set `position: absolute`, `top: 100%`, `left: 0`, `z-index`, `display: none`, `float:left`, `min-width: 10rem`, `padding: .5rem`, `margin`(override default `<ul>`), `font-size`, `text-align`, `color`, `list-style`, `background-color`, `background-color`, `background-clip`, `border`, `border-radius`, `box-shadow`(defualt `$enable-shadow: false`)

* `.droddown-menu.show` set `display: block`
```SCSS
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: $zindex-dropdown; //1000
  display: none; // none by default, but block on "open" of the menu
  float: left;
  min-width: $dropdown-min-width; // 10rem
  padding: $dropdown-padding-y 0; // .5rem

  // override default ul
  margin: $dropdown-spacer 0 0; // .125rem
  
  // Redeclare because nesting can cause inheritance issues
  font-size: $font-size-base;  // 1rem
  color: $body-color; // $white

  // Ensures proper alignment if parent has it changed (e.g., modal footer)
  text-align: left; 
  list-style: none;
  background-color: $dropdown-bg; // $white
  background-clip: padding-box;
  border: $dropdown-border-width solid $dropdown-border-color; //1px solid rgba($black, .15)
  @include border-radius($dropdown-border-radius); // .25rem
  
  //  0 .5rem 1rem rgba($black, .175)
  // defualt `$enable-shadow: false`
  @include box-shadow($dropdown-box-shadow);
}
-------------
// variables
$zindex-dropdown:                   1000 !default;
$dropdown-min-width:                10rem !default;
$dropdown-padding-y:                .5rem !default;
$dropdown-spacer:                   .125rem !default;
$dropdown-bg:                       $white !default;

$dropdown-border-width:             $border-width !default;
$dropdown-border-color:             rgba($black, .15) !default;
$dropdown-border-radius:            $border-radius !default;
$dropdown-box-shadow:               0 .5rem 1rem rgba($black, .175) !default;

-------------------
.dropdown-menu.show {
  display: block;
}
```
#### [⬆ Back to top][0.0]

## dropdown menu alignment
* Firstly, use `dropdown-menu`

* `.dropdown-menu-*-right`(include sm, md, lg, xl), `dropdown-menu-right` set `right:0`, `left: auto`

* `.dropdown-menu-*-left`(include sm, md, lg, xl), `dropdown-menu-left` set `right: auto`, `left: 0`

```SCSS
/* `media-brekapoint-up()` use break-mediapoint-min return $min
 * $min: {null, 576px, ...}
 * in `media-breakpoint-up()` use medai query `@media(min-width: $min){@content})`
 * in `@content` here, use `breakpoint-infix` retrun `$infix: {"", sm, ...}`
 */
@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .dropdown-menu#{$infix}-right {
      right: 0;
      left: auto;
    }
  }
}


@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .dropdown-menu#{$infix}-left {
      right: auto;
      left: 0;
    }
  }
}
```
#### [⬆ Back to top][0.0]


## dropdown item
* use `dropdown-item` to `<a>`

* `.dropdown-item` set `display: block`, `width: 100%`, `padding`, `clear:both`, `font-weight`, `color`, `text-align`, `white-space: nowrap`, `background-color`, `border: 0`

* `.dropdown-item:first-child` set mixin `border-top-radius()`

* `.dropdown-item:last-child` set mixin `border-bottom-radius()`

* `.dropdown-item:hover`, `.drodown:focus` set `color`, `text-decoration`, `background-color`

* `.dropdown-item:active`, `.dropdown.active` set `color`, `text-decoration: none`, `background-color`

* `.dropdown-item:disabled` set `dropdown-item.disabled` set `color`, `point-events: none`, `background-color: transparent`, set `background-imaga: none` if `$enable-gradients: true` to remove CSS gradient.

```SCSS
.dropdown-item {
  display: block;
  width: 100%; // For `<button>`s
  padding: $dropdown-item-padding-y $dropdown-item-padding-x; //.25rem 1.25rem
  clear: both;
  font-weight: $font-weight-normal; //400
  color: $dropdown-link-color;
  text-align: inherit; // For `<button>`s
  white-space: nowrap; // prevent links from randomly breaking onto new lines
  background-color: transparent; // For `<button>`s
  border: 0; // For `<button>`s

  &:first-child {
    // $dropdown-border-radius-$dropdown-border-radius
    @include border-top-radius($dropdown-inner-border-radius);
  }

  &:last-child {
    // $dropdown-border-radius-$dropdown-border-radius
    @include border-bottom-radius($dropdown-inner-border-radius);
  }

  @include hover-focus {
    color: $dropdown-link-hover-color; // darken($gray-900, 5%)
    text-decoration: none;
    @include gradient-bg($dropdown-link-hover-bg);// $gray-100
  }

  &.active,
  &:active {
    color: $dropdown-link-active-color; // $white
    text-decoration: none;
    @include gradient-bg($dropdown-link-active-bg); // $primary
  }

  &.disabled,
  &:disabled {
    color: $dropdown-link-disabled-color; // $gray-600
    pointer-events: none;
    background-color: transparent;
    // Remove CSS gradients if they're enabled
    @if $enable-gradients {
      background-image: none;
    }
  }
}

-----------
// variables
$dropdown-item-padding-y:           .25rem !default;
$dropdown-item-padding-x:           1.5rem !default;
$dropdown-link-color:               $gray-900 !default;
$dropdown-link-hover-color:         darken($gray-900, 5%) !default;
$dropdown-link-hover-bg:            $gray-100 !default;
$dropdown-inner-border-radius:    calc(#{$dropdown-border-radius} - #{c}) !default;

$dropdown-link-active-color:        $component-active-color !default;
$dropdown-link-active-bg:           $component-active-bg !default;

$component-active-color:      $white !default;
$component-active-bg:         theme-color("primary") !default;

$dropdown-link-disabled-color:      $gray-600 !default;
```
#### [⬆ Back to top][0.0]


## dropdown header and dropdown text
* Usually, use `.dropdown-header` to `<h*>` and `.dropdown-text` to `span`

* `dropdown-header` set `display: block`, `padding`, `margin-bottm` ,`font-size`, `color`, `white-space`

* `dropdown-item-text` set `display: block`, `padding`, `color`
```SCSS

.dropdown-header {
  display: block;
  padding: $dropdown-padding-y $dropdown-item-padding-x; // .5rem 1.5rem
  margin-bottom: 0; // for use with heading elements
  font-size: $font-size-sm; //.875rem
  color: $dropdown-header-color; //$gray-600
  white-space: nowrap; // as with > li > a
}

// Dropdown text
.dropdown-item-text {
  display: block;
  padding: $dropdown-item-padding-y $dropdown-item-padding-x; // .5rem 1.5rem
  color: $dropdown-link-color; // $gray-900
}

--------------
// variablse
$dropdown-padding-y:                .5rem !default;
$dropdown-item-padding-x:           1.5rem !default;

$font-size-sm:                ($font-size-base * .875) !default;
$dropdown-header-color:             $gray-600 !default;
$dropdown-link-color:               $gray-900 !default;
```
#### [⬆ Back to top][0.0]


## dropdown divider
* Use `dropdown-divider` to `<div>`

* `dropdown-divider` use  mixin `nav-divider()` set `height:0`, `margin`, `overflow: hidden`, `border-top`
```SCSS
.dropdown-divider {
  @include nav-divider($dropdown-divider-bg); // $gray-200
}

@mixin nav-divider($color: $nav-divider-color, $margin-y: $nav-divider-margin-y) {
  height: 0;
  margin: $margin-y 0; // .5rem 0
  overflow: hidden;
  border-top: 1px solid $color;
}

----------
// variables
$dropdown-divider-bg:                !default;
$nav-divider-margin-y:              $spacer / 2 !default;
```
#### [⬆ Back to top][0.0]


## split button
* Firstly, set a `<button>`, and use `.dropdown-toggle` and `dropdown-toggle-split` to next `<button>`

* Add `.dropdown-toggle-split` for proper spacing around the dropdown caret to create create split button dropdowns.

`.dropdown-toggle-split` is the content of button group, more about spitt button see [split button][1]

#### [⬆ Back to top][0.0]


## dropdown direction
* `.dropup .dropdown-menu` set `top: auto`, `bottom: 100%`, `margin-top: 0`, `margin-bottom: .125rem`

* `dropup .dropdown-toggle` set mixin `caret(up)`, see [dorpdown caret][2]

* `dropright .dropdown-menu` set `top: 0`, `right: auto`, `left: 100%`, `margin-top: 0`, `margin-left: .125rem`

* `dropright .dropdown-toggle` set  mixin `caret(right)`, see [dorpdown caret][2]

* `dropleft .dropdown-menu` set `top: 0`, `right: 100%`, `left: 0`, `margin-top: 0`, `margin-right: .125rem`

* `dropleft .dropdown-toggle` set  mixin `caret(left)`, see [dorpdown caret][2]

```SCSS
.dropup {
  .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: $dropdown-spacer; // .125rem
  }

  .dropdown-toggle {
    @include caret(up);
  }
}

.dropright {
  .dropdown-menu {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: $dropdown-spacer; // .125rem
  }

  .dropdown-toggle {
    @include caret(right);
    &::after {
      vertical-align: 0;
    }
  }
}

.dropleft {
  .dropdown-menu {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: $dropdown-spacer; // .125rem
  }

  .dropdown-toggle {
    @include caret(left);
    &::before {
      vertical-align: 0;
    }
  }
}

-----------------
// variables
$dropdown-spacer:                   .125rem !default;
```
#### [⬆ Back to top][0.0]


## accessbility
Standard ** ARIA menus** can only contain **menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus**. 

Bootstrap’s dropdowns on the other hand, are designed to be **generic and applicable to a variety of situations and markup structures**. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. 

For this reason, Bootstrap **does not expect (nor automatically add) any of the role and aria- attributes required for true ARIA menus**.

 Bootstrap does add built-in support for most** standard keyboard menu interactions**, such as the ability to move through individual .dropdown-item elements using the cursor keys and close the menu with the `ESC` key.

#### [⬆ Back to top][0.0]


## JavaScript method
```JavaScript
$().dropdown()
```

| Name           | Default        | Description                                                               |
| -------------- | -------------- | ------------------------------------------------------------------------- |
| data-offset    | 0              | set the offset to the dropdown button                                     |
| data-flip      | true           | allow Dropdown to flip in case of an overlapping on the reference element |
| data-boundly   | 'scrollParent' | set the dropdown menu boundary to `viewport|window|scrollpanle`           |
| data-reference | 'toggle'       | reference element of the dropdown menu to `toggle|parent`                 |
| data-display   | 'dynamic'      | use dynamic positioning, or disables it to set `static`                   |

**:exclamation: Note:**  Always, set `data-offset: number` to set the offset to the dropdown button.

**:exclamation: Note:** when boundary is set to any value other than 'scrollParent', the style position: static is applied to the .dropdown container

```JavaScript
$().dropdown('toggle') // toggle the dropdown menu
$().dropdown('show') // show the dropdown menu
$().dropdown('hide') // hide the dropdown menu
$().dropdown('update') // update the position of an element’s dropdown
$().dropdown ('dispose') // destroy an element's dropdown
```
#### [⬆ Back to top][0.0]


## JavaScript events
| Event              | Descripton                                                      |
| ------------------ | --------------------------------------------------------------- | 
| show.bs.dropdown   | fires immediately when the show instance method is called       |
| shown.bs.dropdown  | fired when the dropdown has been made visible to the user       |
| hide.bs.dropdown   | fired immediately when the hide instance method has been called |
| hidden.bs.dropdown | fired when the dropdown has finished being hidden from the user |

```JavaScript
$().on('show.bs.dropdown', function(){
    // do something
})
```
#### [⬆ Back to top][0.0]