[0.0]: #Toasts
[1.0]: #basic-toast
[2.0]: #toast-header
[3.0]: #toast-body
[4.0]: #accessibility
[5.0]: #JavaScript-method
[6.0]: #JavaScript-events

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-L-Toasts.html
[02]: ../Appendix/3Components-L-Toasts.html


* Awayst set `.toast` parent container to `style="positon: absolute...:`

* Set `<div>` to `.toast`, add attribute `role="" aria-live="" aria-atomic="" data-autohide="true|false`

* To toast header, add `.toast-header` to `<div>`, always has `<image>`, `<strong>`text, `<button>` with `.close` etc.

* To toast body, add `.toast-body`

# Toasts
Push notifications to your visitors with a toast

See rendering result [toast.html][01]

See source code [toast.html][02]

1. [basic toast][1.0]
2. [toast header][2.0]
3. [toast-body][3.0]
4. [accessibility][4.0]
5. [JavaScript method][5.0]
6. [JavaScript events][6.0]

## basic toast
* `.toast`

* `.toast:not(:last-child)`

* `.toast.showing`

* `.toast.show`

* `.toast.hide`
```SCSS
.toast {
  max-width: $toast-max-width;
  overflow: hidden; // cheap rounded corners on nested items
  font-size: $toast-font-size; // knock it down to 14px
  background-color: $toast-background-color;
  background-clip: padding-box;
  border: $toast-border-width solid $toast-border-color;
  border-radius: $toast-border-radius;
  box-shadow: $toast-box-shadow;
  backdrop-filter: blur(10px);
  opacity: 0;

  &:not(:last-child) {
    margin-bottom: $toast-padding-x;
  }

  &.showing {
    opacity: 1;
  }

  &.show {
    display: block;
    opacity: 1;
  }

  &.hide {
    display: none;
  }
}
```
#### [⬆ Back to top][0.0]


## toast header
* `.toast-header`
```SCSS
.toast-header {
  display: flex;
  align-items: center;
  padding: $toast-padding-y $toast-padding-x;
  color: $toast-header-color;
  background-color: $toast-header-background-color;
  background-clip: padding-box;
  border-bottom: $toast-border-width solid $toast-header-border-color;
}
```
#### [⬆ Back to top][0.0]


## toast body
* `.toast-body`
```SCSS
.toast-body {
  padding: $toast-padding-x; // apply to both vertical and horizontal
}
```
#### [⬆ Back to top][0.0]


## accessibility
* `aria-atomic="true"` to  `<div>` that has `.toast` , ensure that the entire toast is always announced as a single (atomic) unit. `data-autohide= true|false` to set whether auto hide the toast.

* adapt the role and aria-live level depending on the content. If it’s an important message like an error, use `role="alert" aria-live="assertive"`, otherwise use `role="status" aria-live="polite" ` attributes to  `<div>` that has `.toast`.

#### [⬆ Back to top][0.0]


## JavaScript method
```JavaScript
$().toast();
```
| Name           | Default | Description                              |
| -------------- | ------- | ---------------------------------------- |
| data-animation | true    | Apply a CSS fade transition to the toast |
| data-autohide  | true    | Auto hide the toast                      |
| data-delay     | 500     | Delay hiding the toast (ms)              |

```JavaScript
$().toast('show') 
$().toast('hide')
$().toast('dispose')
```
#### [⬆ Back to top][0.0]


## JavaScript events

```SCSS
show.bs.toast // fires immediately when the show instance method is called

shown.bs.toast // fired when the toast has been made visible to the user

hide.bs.toast // fired immediately when the hide instance method has been called

hidden.bs.toast // This event is fired when the toast has finished being hidden from the user.

$().on('show.bs.toast`, function(){
    // do something
})
```
#### [⬆ Back to top][0.0]

