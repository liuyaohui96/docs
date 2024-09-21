[0.0]: #Spinners
[1.0]: #spinner-border
[2.0]: #growing-spinner
[3.0]: #utilities
[4.0]: #

[1]: ../4Utilities/40000Color.md#text-color


[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-K-Spinners.html
[02]: ..//Appendix/3Components-K-Spinners.html

* `<div>` set `spinner-border` or `spinner-grow`,  includes attribute `role="status"` and a nested `<span class="sr-only">Loading...</span>`. If want a smaller spinner-border, add `.spinner-border-sm`
or `.spinner-grow-sm`

## Spinners
Indicate the loading state of a component or page

See rendering result [spinners.html][01]

See source code [spinners.html][02]



1. [spinner border][1.0]
2. [growing spinner][2.0]
3. [utilities][3.0]


## spinner border
* `.spinner-border`

* `.spinner-border-sm`
```SCSS
@keyframes spinner-border {
  to { transform: rotate(360deg); }
}

.spinner-border {
  display: inline-block;
  width: $spinner-width;
  height: $spinner-height;
  vertical-align: text-bottom;
  border: $spinner-border-width solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border .75s linear infinite;
}

.spinner-border-sm {
  width: $spinner-width-sm;
  height: $spinner-height-sm;
  border-width: $spinner-border-width-sm;
}
```
#### [⬆ Back to top][0.0]


## growing spinner
* `.spinner-grow`

* `.spinner-grow-sm`
```SCSS
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
  }
}

.spinner-grow {
  display: inline-block;
  width: $spinner-width;
  height: $spinner-height;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  animation: spinner-grow .75s linear infinite;
}

.spinner-grow-sm {
  width: $spinner-width-sm;
  height: $spinner-height-sm;
}
```
#### [⬆ Back to top][0.0]


## utilities
* text color, use [color utilities][1]
* etc.

#### [⬆ Back to top][0.0]