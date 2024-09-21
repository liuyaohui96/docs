## button
```SCSS
## button
In button.scss
```SCSS
// Future-proof disabling of clicks on `<a>` elements
a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}


// Specificity overrides
input[type="submit"],
input[type="reset"],
input[type="button"] {
  &.btn-block {
    width: 100%;
  }
}

```

## card
```SCSS
//
// Header navs
//
.card-header-tabs {
  margin-right: -$card-spacer-x / 2;
  margin-bottom: -$card-spacer-y;
  margin-left: -$card-spacer-x / 2;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -$card-spacer-x / 2;
  margin-left: -$card-spacer-x / 2;
}

```

## carousel
```SCSS
// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)
//    even when their scroll action started on a carousel, but for compatibility (with Firefox)
//    we're preventing all actions instead
.carousel.pointer-event {
  touch-action: pan-y;
}

```

## dropdown
```SCSS
// When enabled Popper.js, reset basic dropdown position
// stylelint-disable-next-line no-duplicate-selectors
.dropdown-menu {
  &[x-placement^="top"],
  &[x-placement^="right"],
  &[x-placement^="bottom"],
  &[x-placement^="left"] {
    right: auto;
    bottom: auto;
  }
}
```

## form
```SCSS
select.form-control {
  &:focus::-ms-value {
    // Suppress the nested default white text on blue background highlight given to
    // the selected option text when the (still closed) <select> receives focus
    // in IE and (under certain conditions) Edge, as it looks bad and cannot be made to
    // match the appearance of the native widget.
    // See https://github.com/twbs/bootstrap/issues/19398.
    color: $input-color;
    background-color: $input-bg;
  }
}

```

## list group
* list group with `.tab-content`, the content of `nav`
* the javascript in list group 


## modal
```SCSS
.modal-open {
  // Kill the scroll on the body
  overflow: hidden;

  .modal {
    overflow-x: hidden;
    overflow-y: auto;
  }
}

// Modal background
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $zindex-modal-backdrop;
  width: 100vw;
  height: 100vh;
  background-color: $modal-backdrop-bg;

  // Fade for backdrop
  &.fade { opacity: 0; }
  &.show { opacity: $modal-backdrop-opacity; }
}


// Measure scrollbar width for padding body during modal show/hide
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

```
