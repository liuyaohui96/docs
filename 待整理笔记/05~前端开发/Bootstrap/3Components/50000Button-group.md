[0.0]: #Button-group
[1.0]: #basic-button-group
[2.0]: #vertical-button-group
[3.0]: #button-toolbar
[4.0]: #button-group-size
[5.0]: #split-button-dropdowns
[6.0]: #accessibility

[1]: 40000Buttons.md#button-size
[2]: 40000Buttons.md#button-size

[3]: #basic-button-group

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-4-Button-group.html
[02]: ..//Appendix/3Components-4-Button-group.html
# Button-group
See rendering result [button-gruop.html][01]

See source code [button-gruop.html][02]

1. [basic button group][1.0]
2. [vertical button group][2.0]
3. [button toolbar][3.0]
4. [button group size][4.0]
5. [split button dropdowns][5.0]
6. [accessibility][6.0]

## basic button group

* `.btn-group`and `.btn-group-vertical` set `position: relative`, `display: inline-flex`, `vertical-align: middle`

* `.btn-gorup>.btn` set `position: relative`, `flex: 1 1 auto`

* `.btn-group>.btn:hover`, `.btn-group>.btn:focus`, `.btn-group>.btn:active` ,`.btn-group>.btn.active`, `.btn-group-vertical>.btn:hover`, `.btn-group-vertical>.btn:focus`, `.btn-group-vertical>.btn:active`, `.btn-group-vertical>.btn.active` set `z-index:1` so that bring button to the front to overlay the border property.

* `.btn-group>.btn:not(:first-child)`, `.btn-group>.btn-group:not(:first-child)` set `margin-left: -$btn-border-width` to prevent double borders when buttons are next to each other

* `.btn-group>.btn:not(:last-child):not(.dropdown-toggle)`, `.btn-group> .btn-group:not(:last-child) > .btn` set `border-top-right-radius: 0` and `border-bottom-left-radius: 0` to remove the right border radius between the button.
* `.btn-gorup>.btn:not(:first-child)`, `.btn-group>.btn-group:not(:first-child) > .btn` set `border-top-left-radius: 0` and `border-bottom-left-radius: 0`  to remove the left border radius between the button.
```SCSS
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle; // match .btn alignment given font-size hack above

  > .btn {
    position: relative;
    flex: 1 1 auto;

    // Bring the hover, focused, and "active" buttons to the front to overlay
    // the borders properly
    @include hover {
      z-index: 1;
    }
    &:focus,
    &:active,
    &.active {
      z-index: 1;
    }
  }
}


.btn-group {
  // Prevent double borders when buttons are next to each other
  > .btn:not(:first-child),
  > .btn-group:not(:first-child) {
    margin-left: -$btn-border-width;
  }

  // Reset rounded corners
  > .btn:not(:last-child):not(.dropdown-toggle),
  > .btn-group:not(:last-child) > .btn {
    @include border-right-radius(0);
  }

  > .btn:not(:first-child),
  > .btn-group:not(:first-child) > .btn {
    @include border-left-radius(0);
  }
}

```
#### [⬆ Back to top][0.0]


## vertical button group
* `btn-group-vertical` the basic setting in [basic button group][3], it set `position: relative`, `display: inline-flex`, `vertical-align: middle`.

* Here `.btn-group-vertical` set `flex-direction: column`, `align-items: flex-start`, `justify-content: center`

* `btn-group-vertical > .btn`, `btn-group-vertical > .btn-group` set `width: 100%`

* `btn-group-vertical > .btn:not(:first-child)`, `btn-group-vertical > .btn-group:not(:first-child)` set `margin-top` -$btn-border-width to prevent double border.

* To remove bottom border-radius,  `btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle)`, `btn-group-vertical > .btn-group:not(:last-child) > .btn` set `border-bottom-right-radius: 0`  and `border-bottomleft-radius: 0`

* To remove top border-radius `btn-group-vertical > .btn:not(:first-child)`, `btn-group-vertical > .btn-group:not(:first-child) > .btn` set `border-top-right-radius: 0`  and `border-top-left-radius: 0`

```SCSS
.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > .btn,
  > .btn-group {
    width: 100%;
  }

  > .btn:not(:first-child),
  > .btn-group:not(:first-child) {
    margin-top: -$btn-border-width;
  }

  // Reset rounded corners
  > .btn:not(:last-child):not(.dropdown-toggle),
  > .btn-group:not(:last-child) > .btn {
    @include border-bottom-radius(0);
  }

  > .btn:not(:first-child),
  > .btn-group:not(:first-child) > .btn {
    @include border-top-radius(0);
  }
}
```
#### [⬆ Back to top][0.0]


## button toolbar
* `btn-toolbar` set `display: flex`, `flex-wrap: wrap`, `justify-content: flex-start`
* `btn-toolbar.input-group` set `width:auto`
```SCSS
.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .input-group {
    width: auto;
  }
}
```

## button group size
* `.btn-group-sm > .btn` set extend `.btn-sm`, see [.btn-sm][1]
* `.btn-group-lg > .btn` set extend `.btn-lg`, see [.btn-lg][2]
```SCSS
.btn-group-sm > .btn { @extend .btn-sm; }
.btn-group-lg > .btn { @extend .btn-lg; }
```
#### [⬆ Back to top][0.0]


## split button dropdowns
* `.dropdown-toggle-split` set `padding`

* `.dropdown-toggle-split::after`, `.drop-up .dropdown-toggle-split::after`, `.dropright .dropdown-toggle-split::after` set `margin-left: 0` so that override `.dropdown-toggle::after` 's margin setting.

* `.dropleft .dropdown-toggle-split::before` set `margin-right: 0` so that override `.dropdown-toggle::after` 's margin setting.

* `.btn-sm + .dropdown-toggle-split` set `padding`

* `.btn-lg + .dropdown-toggle-split` set `padding`

* `.btn-group.show .dropdown-toggle` set `box-shadow`(`$enable-shadow: false`)

* `.btn-group.show .dropdown-toggle.btn-link` set `box-shadow` to none(`$enable-shadow: false`)

* `.btn-group-toggle > .btn`, `.btn-group-toggle > .btn-group > .btn` set margin-bottom: 0 so that override defualt `<label>` value

* `.btn-group-toggle > .btn input[type="radio"]`, `.btn-group-toggle > .btn-group > .btn input[type="checkbox"]` set `position: absolute`, `clip`, `pointer-events: none`

```SCSS
.dropdown-toggle-split {
  padding-right: $btn-padding-x * .75; //.75rem * .75
  padding-left: $btn-padding-x * .75; // .75rem * .75

  &::after, .dropup &::after, .dropright &::after {
    margin-left: 0;
  }

  .dropleft &::before {
    margin-right: 0;
  }
}

.btn-sm + .dropdown-toggle-split {
  padding-right: $btn-padding-x-sm * .75; // .5rem * .75
  padding-left: $btn-padding-x-sm * .75;
}

.btn-lg + .dropdown-toggle-split {
  padding-right: $btn-padding-x-lg * .75; // 1rem * .75
  padding-left: $btn-padding-x-lg * .75;
}

/* The clickable button for toggling the menu
 * Set the same inset shadow as the :active state
 */
.btn-group.show .dropdown-toggle {
  // inset 0 3px 5px rgba($black, .125)
  // $enable-shadow: false
  @include box-shadow($btn-active-box-shadow);

  // Show no shadow for `.btn-link` since it has no other button styles.
  &.btn-link {
    @include box-shadow(none);
  }
}

// Checkbox and radio options
/* In order to support the browser's form validation feedback, powered by the
 * `required` attribute, we have to "hide" the inputs via `clip`. 
 * 
 * We cannot use `display: none;` or `visibility: hidden;` as that also hides the popover.
 *
 * Simply visually hiding the inputs via `opacity` would leave them clickable in
 * certain cases which is prevented by using `clip` and `pointer-events`.
 * This way, we ensure a DOM element is visible to position the popover from.
 */

.btn-group-toggle {
  > .btn,
  > .btn-group > .btn {
    margin-bottom: 0; // Override default `<label>` value

    input[type="radio"],
    input[type="checkbox"] {
      position: absolute;
      clip: rect(0, 0, 0, 0);
      pointer-events: none;
    }
  }
}

--------------
// variabsles
$btn-padding-x:               $input-btn-padding-x !default;
$input-btn-padding-x:         .75rem !default;

$btn-padding-x-sm:            $input-btn-padding-x-sm !default;
$input-btn-padding-x-sm:      .5rem !default;

$btn-padding-x-lg:            $input-btn-padding-x-lg !default;
$input-btn-padding-x-lg:      1rem !default;

$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;
```
#### [⬆ Back to top][0.0]


## accessibility
In order to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided for assistive technologies (such as screen readers). Alwarys , for `.btn-group` set attribute `role="group"`, for button toolbar set `role="toolbar`. To provide `aria-lable` so that assistive technologies will announce them.

#### [⬆ Back to top][0.0]