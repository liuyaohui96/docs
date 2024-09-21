[0.0]: #Alerts
[1.0]: #base-alert
[2.0]: #alert-heading
[3.0]: #alert-link
[4.0]: #alert-color
[5.0]: #dismiss-alert
[6.0]: #JavaScript-behavior

[1]:https://823406519.github.io/Bootstrap/Appendix/3Components-0-Alerts.html
[2]:..//Appendix/3Components-0-Alerts.html

# Alerts
See rendering result [alert.html][1]

See source code [alert.html][2]

Alert provide feedback message for user action.
1. [base alert][1.0]
2. [alert heading][2.0]
3. [alert link][3.0]
4. [alert color][4.0]
5. [dismiss alert][5.0]
6. [JavaScript behavior][6.0]
## base alert
* `.alert` set `position:relative`, `padding`, `margin-bottom`, `border`, `border-radius`
```SCSS
.alert {
  position: relative;
  padding: $alert-padding-y $alert-padding-x; /// .75rem 1.25rem
  margin-bottom: $alert-margin-bottom; // 1rem
  border: $alert-border-width solid transparent; //1px solid transparent
  @include border-radius($alert-border-radius); //.25rem
}

@mixin border-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-radius: $radius;
  }
}
------------------
// variables
$alert-padding-y:                   .75rem !default;
$alert-padding-x:                   1.25rem !default;

$alert-margin-bottom:               1rem !default;

$alert-border-width:                $border-width !default;
$alert-border-radius:               $border-radius !default;
$border-radius:               .25rem !default;
```
#### [⬆ Back to top][0.0]


## alert heading
* Use `.alert-heading` to heading in alert so that set the `color: inherit`.
```SCSS
// specify the style to heading in alart
.alert-heading {
  color: inherit;
}
```
#### [⬆ Back to top][0.0]


## alert link
* `alert-link` set the `font-weight` of link to bold
```SCSS
.alert-link {
  font-weight: $alert-link-font-weight; //700
}

------------
// variables
$alert-link-font-weight:            $font-weight-bold !default;
```
#### [⬆ Back to top][0.0]


## alert color
* Firstly, use `.alert`
* Use `.alert-*`, it use `alert-variant()` set `color`, `border-color`, `background-color` that mixed by `theme-color-level()`, also darken the color of `.alert-link` and `<hr>`
* \* in `.alert-*` are `primary|secondary|info|success|warning|danger|dark|light` 

```SCSS
/* theme-color-level() accordring `theme-colors` key and `level` get the mix color
 * alert-variant() set `color`, `border-color` or `background-color`
 */
@each $color, $value in $theme-colors {
  .alert-#{$color} {
    @include alert-variant(theme-color-level($color, $alert-bg-level), 
             theme-color-level($color, $alert-border-level), 
             theme-color-level($color, $alert-color-level));
  }
}

@mixin alert-variant($background, $border, $color) {
  color: $color; 
  @include gradient-bg($background); // set gradient-bg or bg
  border-color: $border;

  hr {
    border-top-color: darken($border, 5%);
  }

  .alert-link {
    color: darken($color, 10%);
  }
}

@mixin gradient-bg($color) {
  @if $enable-gradients {
    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x;
  } @else {
    background-color: $color;
  }
}

---------------
// function
// theme-color-level() return mix color
@function theme-color-level($color-name: "primary", $level: 0) {
  $color: theme-color($color-name);
  $color-base: if($level > 0, $black, $white);
  $level: abs($level);
    
  @return mix($color-base, $color, $level * $theme-color-interval);
}

// variables
$alert-bg-level:                    -10 !default;
$alert-border-level:                -9 !default;
$alert-color-level:                 6 !default;

$theme-color-interval:      8% !default;
```
#### [⬆ Back to top][0.0]


## dismiss alert
* Firstly, use `.lert`
* Use `.alert-dismissible` expand the right padding for `close button`, set the `.close` style for button
* `.close` for button will set `positoion: absolute`, `padding` and `color: inherit`
* On `close button`, add `data-dismiss=alert` attribute,  which triggers the JavaScript functionality.
* To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes for the `alert` component.
```SCSS
//Expand the right padding and account for the close button's positioning.
.alert-dismissible {
  padding-right: ($close-font-size + $alert-padding-x * 2);

  // Adjust close link position
  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: $alert-padding-y $alert-padding-x;
    color: inherit;
  }
}

----------------------------
// variables
$alert-padding-y:                   .75rem !default;
$alert-padding-x:                   1.25rem !default;

$close-font-size:                   $font-size-base * 1.5 !default;
```
#### [⬆ Back to top][0.0]


## JavaScript behavior
* Closing an alert will remove it from the DOM
```JavaScript
/* Makes an alert listen for click events on descendant elements 
 * which have the data-dismiss="alert" attribute
 */
$().alert()

/* Closes an alert by removing it from the DOM. 
 * If the .fade and .show classes are present on the element, t
 * he alert   * will fade out before it is removed
 */
$().alert('close')

// Destroys an element’s alert.
$().alert('dispose')

```

```JavaScript
// event

// This event fires immediately when the close instance method is called
close.bs.alert

/* This event is fired when the alert has been closed 
 * (will wait for CSS transitions to complete)
 */
closed.bs.alert

$().on('closed.bs.alert', function () {
  // do something…
})
```
#### [⬆ Back to top][0.0]