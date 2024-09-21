[0.0]: #Modal
[1.0]: #How-it-work
[2.0]: #basic-modal
[3.0]: #modal-dialog
[4.0]: #modal-dialog-centered
[5.0]: #modal-content
[6.0]: #modal-header
[7.0]: #modal-title
[8.0]: #modal-body
[9.0]: #modal-footer
[10.0]: #size-of-modal
[11.0]: #accessibility
[12.0]: #JavaScript-methods
[13.0]: #JavaScript-events

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-D-Modal.html
[02]: ../Appendix/3Components-D-Modal.html

# Modal
Use Modal to add dialogs to your site for lightboxes, user notifications, or completely custom content

* Use `.modal` in `<div>`, set modal id. 
* Use `.modal-dialog` in`<div>`. If you want to add `.modal-dialog-centered`. If you want to change dialog size, add `.modal-sm`, `.modal-xl`
* Use `.modal-content` in`<div>`
* Use `.modal-header` in `<div>`. In `<div>` , use `.modal-tittle` in `<h*>` and `.close`, attribute `data-dismiss=modal` in `<button>`. In `<button>` set `<span>&times</span>`
* Use `.modal-body` in `<div>`
* Use `.modal-footer` in `<div>`. Usually, set attribute `data-dismiss: modal` in `<button>`.

See rendering result [modal.html][01]

See source code [modal.html][02]

1. [How it work][1.0]
2. [basic modal][2.0]
3. [modal dialog][3.0]
4. [modal dialog centered][4.0]
5. [modal content][5.0]
6. [modal header][6.0]
7. [modal title][7.0]
8. [modal body][8.0]
9. [modal footer][9.0]
10. [size of modal][10.0]
11. [accessibility][11.0]
12. [JavaScript methods][12.0]
13. [JavaScript events][13.0]


## How it work
* modal are positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead

* Clicking on the modal “backdrop” will automatically close the modal(点击modal外的区域会自动关闭modal)

* Bootstrap only supports one modal window at a time

* Modals use `position: fixed`, which can sometimes be a bit particular about its rendering.
#### [⬆ Back to top][0.0]


## basic modal
* `.modal`
```SCSS
// Container that the modal scrolls within
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $zindex-modal;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  // Prevent Chrome on Windows from adding a focus outline. For details, see
  // https://github.com/twbs/bootstrap/pull/10951.
  outline: 0;
  // We deliberately don't use `-webkit-overflow-scrolling: touch;` due to a
  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342
  // See also https://github.com/twbs/bootstrap/issues/17695
}
```
#### [⬆ Back to top][0.0]


## modal dialog
* `.modal-dialog`

* `.modal.fade .modal-dialog`

* `.modal.show .modal-dialog`

```SCSS
// Shell div to position the modal with bottom padding
.modal-dialog {
  position: relative;
  width: auto;
  margin: $modal-dialog-margin;
  // allow clicks to pass through for custom click handling to close modal
  pointer-events: none;

  // When fading in the modal, animate it to slide down
  .modal.fade & {
    @include transition($modal-transition);
    transform: $modal-fade-transform;
  }
  .modal.show & {
    transform: $modal-show-transform;
  }
}

```
#### [⬆ Back to top][0.0]


## modal dialog centered
* `.modal-dialog-centered`

* `.modal-dialog-centered::before`(Ensure `modal-dialog-centered` extends the full height of the view (IE10/11))
```SCSS
.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - (#{$modal-dialog-margin} * 2));

  // Ensure `modal-dialog-centered` extends the full height of the view (IE10/11)
  &::before {
    display: block; // IE10
    height: calc(100vh - (#{$modal-dialog-margin} * 2));
    content: "";
  }
}
```
#### [⬆ Back to top][0.0]


## modal content
* `.modal-content`
```SCSS
// Actual modal
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`
  // counteract the pointer-events: none; in the .modal-dialog
  pointer-events: auto;
  background-color: $modal-content-bg;
  background-clip: padding-box;
  border: $modal-content-border-width solid $modal-content-border-color;
  @include border-radius($modal-content-border-radius);
  @include box-shadow($modal-content-box-shadow-xs);
  // Remove focus outline from opened modal
  outline: 0;
}
```
#### [⬆ Back to top][0.0]


## modal header
* `.modal-header`

* `.modal-header .close`
```SCSS
// Modal header
// Top section of the modal w/ title and dismiss
.modal-header {
  display: flex;
  align-items: flex-start; // so the close btn always stays on the upper right corner
  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends
  padding: $modal-header-padding;
  border-bottom: $modal-header-border-width solid $modal-header-border-color;
  @include border-top-radius($modal-content-border-radius);

  .close {
    padding: $modal-header-padding;
    // auto on the left force icon to the right even when there is no .modal-title
    margin: (-$modal-header-padding-y) (-$modal-header-padding-x) (-$modal-header-padding-y) auto;
  }
}
```
#### [⬆ Back to top][0.0]


## modal title
* `.modal-title`
```SCSS
// Title text within header
.modal-title {
  margin-bottom: 0;
  line-height: $modal-title-line-height;
}

```
#### [⬆ Back to top][0.0]


## modal body
* `.modal-body`
```SCSS
// Modal body
// Where all modal content resides (sibling of .modal-header and .modal-footer)
.modal-body {
  position: relative;
  // Enable `flex-grow: 1` so that the body take up as much space as possible
  // when should there be a fixed height on `.modal-dialog`.
  flex: 1 1 auto;
  padding: $modal-inner-padding;
}
```
#### [⬆ Back to top][0.0]


## modal footer
* `modal-footer`

* `modal-footer > :not(:first-child)`

* `modal-footer > :not(:last-child)`

```SCSS
// Footer (for actions)
.modal-footer {
  display: flex;
  align-items: center; // vertically center
  justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items
  padding: $modal-inner-padding;
  border-top: $modal-footer-border-width solid $modal-footer-border-color;
  @include border-bottom-radius($modal-content-border-radius);

  // Easily place margin between footer elements
  > :not(:first-child) { margin-left: .25rem; }
  > :not(:last-child) { margin-right: .25rem; }
}
```
#### [⬆ Back to top][0.0]


## size of modal
* @media(min-width: 576px){...}
    * `.modal-dialog`
    * `.modal-dialog-centered`
    * `.modal-dialog-centered::before`
    * `.modal-content`
    * `.modal-sm`

* @media(min-width: 992px){...}
    * `.modal-lg`
    * `.modal-xl`

* #media(min-width: 1200px){...}
    * `.modal-xl`
  
```SCSS
// Scale up the modal
@include media-breakpoint-up(sm) {
  // Automatically set modal's width for larger viewports
  .modal-dialog {
    max-width: $modal-md;
    margin: $modal-dialog-margin-y-sm-up auto;
  }

  .modal-dialog-centered {
    min-height: calc(100% - (#{$modal-dialog-margin-y-sm-up} * 2));

    &::before {
      height: calc(100vh - (#{$modal-dialog-margin-y-sm-up} * 2));
    }
  }

  .modal-content {
    @include box-shadow($modal-content-box-shadow-sm-up);
  }

  .modal-sm { max-width: $modal-sm; }
}

@include media-breakpoint-up(lg) {
  .modal-lg,
  .modal-xl {
    max-width: $modal-lg;
  }
}

@include media-breakpoint-up(xl) {
  .modal-xl { max-width: $modal-xl; }
}
```
#### [⬆ Back to top][0.0]


## accessibility
* set `role="dialog"`, and `aria-labelledby="idreference"`(referencing the modal title), `aira-hidden="true` to `<div>` that has `.modal`
* set `role="document"` to `<div>` that has `.modal-dialog`
#### [⬆ Back to top][0.0]


## JavaScript methods
```JavaScript
$().modal()
```

|Name|Default|Description|
|---|----|---|
|data-backdrop|true|Includes a modal-backdrop element.specify `static` for a backdrop which doesn't close the modal on click|
|data-keyboard|true|Closes the modal when escape key is pressed|
|data-focus|true|Puts the focus on the modal when initialized|
|data-show|true|Shows the modal when initialized|

```SCSS
$().modal('toggle')
$().modal('show`)
$().modal('hide')
$().modal('handleUpdate')

/* Manually readjust the modal’s position if the height of a modal changes while it is open 
 * (i.e. in case a scrollbar appears)
 */

$().modal('dispose') 
```
#### [⬆ Back to top][0.0]


## JavaScript events

```SCSS
show.bs.modal // fires immediately when the show instance method is called

shown.bs.modal // fired when the modal has been made visible to the use

hide.bs.modal // fired immediately when the hide instance method has been called

hiden.bs.modal // fired when the modal has finished being hidden from the user

$().on('show.bs.modal', function(e){
    // do something
})
```
#### [⬆ Back to top][0.0]