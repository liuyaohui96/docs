[0.0]: #Input-groups
[1.0]: #base-input-group
[2.0]: #input-gorup-prepend-and-append
[3.0]: #input-group-text
[4.0]: #size-of-input-group

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-A-Input-groups.html
[02]: ../Appendix/3Components-A-Input-groups.html

* Use `input-group` to `input` 's parent, usually the `<div>`. If you change the size, add `input-group-sm` or `input-group-lg`
* If you want to set prepend, set `<div>` `.input-group-prepend`, if you want to set append content, set `<div>` with `input-group-append`
* Set text in the prepend or append, set `<span>` with `input-group-text`


# Input groups
See rendering result [input-group][01]

See source code [input-group][02]

1. [base input group][1.0]
2. [input gorup prepend and append][2.0]
3. [input group text][3.0]
4. [size of input group][4.0]
## base input group
* `.input-group`
* `.input-group > .form-control`, `.input-group > .form-control-plaintext`, `.input-group > .custom-select`, `input-group > .custom-file`
    * `.input-group > .form-control + .form-control`, `.input-group > .form-control + .custom-select`, `.input-group > .form-control + .custom-select+ .custom-file`

    * `.input-group > .form-control-plaintext + .form-control`, `.input-group > .form-control-plaintext + .custom-select`, `.input-group > .form-control-plaintext + .custom-select+ .custom-file`
    
    * `.input-group > .form-control-plaintext + .form-control`, `.input-group > .form-control-plaintext + .custom-select`, `.input-group > .form-control-plaintext + .custom-select+ .custom-file`
    
    * `.input-group > .custom-select + .form-control`, `.input-group > .custom-select + .custom-select`, `.input-group > .custom-select + .custom-select+ .custom-file`

*  `.input-group > .form-control:focus`, `.input-group > .custom-select:focus`, `input-group > .custom-file .custom-file-input:focus ~ .custom-file-label`

* `.input-group > .custom-file .custom-file-input:focus`

* `.input-group> .form-control:not(:last-child)`, `.input-group> .form-control:not(:first-child)`;  `.input-group> > .custom-select:not(:last-child)`, `.input-group> .custom-select:not(:first-child)`

* `.input-group > .custom-file`

* `.input-group > .input-group-prepend > .btn`, `.input-group > .input-group-prepend > .input-group-text`, `.input-group > .input-group-append:not(:last-child) > .btn`, `.input-group > .input-group-append:not(:last-child) > .input-group-text`, `.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle)`, `.input-group > .input-group-append:last-child > .input-group-text:not(:last-child)`

* `.input-group > .input-group-append > .btn`, `.input-group > .input-group-append > .input-group-text`, `.input-group > .input-group-prepend:not(:first-child) > .btn`, `.input-group > .input-group-prepend:not(:first-child) > .input-group-text`, `.input-group > .input-group-prepend:first-child > .btn:not(:first-child)`, `.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child)` 

```SCSS
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap; // For form validation feedback
  align-items: stretch;
  width: 100%;

  > .form-control, > .form-control-plaintext, > .custom-select, > .custom-file {
    position: relative; // For focus state's z-index
    flex: 1 1 auto;
    // Add width 1% and flex-basis auto to ensure that button will not wrap out
    // the column. Applies to IE Edge+ and Firefox. Chrome does not require this.
    width: 1%;
    margin-bottom: 0;

    + .form-control,
    + .custom-select,
    + .custom-file {
      margin-left: -$input-border-width;
    }
  }

  // Bring the "active" form control to the top of surrounding elements
  > .form-control:focus,
  > .custom-select:focus,
  > .custom-file .custom-file-input:focus ~ .custom-file-label {
    z-index: 3;
  }

  // Bring the custom file input above the label
  > .custom-file .custom-file-input:focus {
    z-index: 4;
  }

  > .form-control,
  > .custom-select {
    &:not(:last-child) { @include border-right-radius(0); }
    &:not(:first-child) { @include border-left-radius(0); }
  }

  // Custom file inputs have more complex markup, thus requiring different
  // border-radius overrides.
  > .custom-file {
    display: flex;
    align-items: center;

    &:not(:last-child) .custom-file-label,
    &:not(:last-child) .custom-file-label::after { @include border-right-radius(0); }
    &:not(:first-child) .custom-file-label { @include border-left-radius(0); }
  }
}

--------------------------------------------------------
.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text,
.input-group > .input-group-append:not(:last-child) > .btn,
.input-group > .input-group-append:not(:last-child) > .input-group-text,
.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
  @include border-right-radius(0);
}

.input-group > .input-group-append > .btn,
.input-group > .input-group-append > .input-group-text,
.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {
  @include border-left-radius(0);
}
```
#### [⬆ Back to top][0.0]


## input gorup prepend and append
* `.input-group-prepend`, `.input-group-append` 

* `.input-group-prepend .btn`, `.input-group-append .btn`
    
* `.input-group-prepend .btn + .btn`, `.input-group-prepend .btn + .input-group-text`, `.input-group-prepend .input-group-text + .input-group-text`, `.input-group-prepend .input-group-text + .btn`

* `.input-group-append .btn + .btn`, `.input-group-append .btn + .input-group-text`, `.input-group-append .input-group-text + .input-group-text`, `.input-group-append .input-group-text + .btn` 

* `.input-group-prepend`

* `.input-group-append`

```SCSS
// Prepend and append
//
// While it requires one extra layer of HTML for each, dedicated prepend and
// append elements allow us to 1) be less clever, 2) simplify our selectors, and
// 3) support HTML5 form validation.

.input-group-prepend, .input-group-append {
  display: flex;

  // Ensure buttons are always above inputs for more visually pleasing borders.
  // This isn't needed for `.input-group-text` since it shares the same border-color
  // as our inputs.
  .btn {
    position: relative;
    z-index: 2;

    &:focus {
      z-index: 3;
    }
  }

  .btn + .btn,
  .btn + .input-group-text,
  .input-group-text + .input-group-text,
  .input-group-text + .btn {
    margin-left: -$input-border-width;
  }
}

.input-group-prepend { margin-right: -$input-border-width; }
.input-group-append { margin-left: -$input-border-width; }
```
#### [⬆ Back to top][0.0]


## input group text
* `input-group-text`

* `input-group-text input[type="radio"]`,  `input-group-text [type="checkbox"]`
```SCSS
// Textual addons
//
// Serves as a catch-all element for any text or radio/checkbox input you wish
// to prepend or append to an input.

.input-group-text {
  display: flex;
  align-items: center;
  padding: $input-padding-y $input-padding-x;
  margin-bottom: 0; // Allow use of <label> elements by overriding our default margin-bottom
  font-size: $font-size-base; // Match inputs
  font-weight: $font-weight-normal;
  line-height: $input-line-height;
  color: $input-group-addon-color;
  text-align: center;
  white-space: nowrap;
  background-color: $input-group-addon-bg;
  border: $input-border-width solid $input-group-addon-border-color;
  @include border-radius($input-border-radius);

  // Nuke default margins from checkboxes and radios to vertically center within.
  input[type="radio"],
  input[type="checkbox"] {
    margin-top: 0;
  }
}

```
#### [⬆ Back to top][0.0]


## size of input group
* `.input-group-lg > .form-control:not(textarea)`, `.input-group-lg > .custom-select`

* `.input-group-lg > .form-control`, `.input-group-lg > .custom-select`, `.input-group-lg > .input-group-prepend > .input-group-text`, `.input-group-lg > .input-group-append > .input-group-text`, `.input-group-lg > .input-group-prepend > .btn`, `.input-group-lg > .input-group-append > .btn`

* `.input-group-sm > .form-control:not(textarea)`, `.input-group-sm > .custom-select`

* `.input-group-sm > .form-control`, `.input-group-sm > .custom-select`, `.input-group-sm > .input-group-prepend > .input-group-text`, `.input-group-sm > .input-group-append > .input-group-text`, `.input-group-sm > .input-group-prepend > .btn`, `.input-group-sm > .input-group-append > .btn`

* `.input-group-lg > .custom-select`, `.input-group-sm > .custom-select`
```SCSS
// Sizing
//
// Remix the default form control sizing classes into new ones for easier
// manipulation.

.input-group-lg > .form-control:not(textarea),
.input-group-lg > .custom-select {
  height: $input-height-lg;
}

.input-group-lg > .form-control,
.input-group-lg > .custom-select,
.input-group-lg > .input-group-prepend > .input-group-text,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-append > .btn {
  padding: $input-padding-y-lg $input-padding-x-lg;
  font-size: $input-font-size-lg;
  line-height: $input-line-height-lg;
  @include border-radius($input-border-radius-lg);
}

.input-group-sm > .form-control:not(textarea),
.input-group-sm > .custom-select {
  height: $input-height-sm;
}

.input-group-sm > .form-control,
.input-group-sm > .custom-select,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
  padding: $input-padding-y-sm $input-padding-x-sm;
  font-size: $input-font-size-sm;
  line-height: $input-line-height-sm;
  @include border-radius($input-border-radius-sm);
}

.input-group-lg > .custom-select,
.input-group-sm > .custom-select {
  padding-right: $custom-select-padding-x + $custom-select-indicator-padding;
}
```
#### [⬆ Back to top][0.0]