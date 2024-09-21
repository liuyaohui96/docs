[0.0]: #Collapse
[1.0]: #basic-collapse
[2.0]: #accordion-example
[3.0]: #accessibility
[4.0]: #JavaScript-method
[5.0]: #JavaScript-events

[1]: https://823406519.github.io/Bootstrap/Appendix/3Components-7-Collapse.html
[2]: ../Appendix/3Components-7-Collapse.html

# Collapse
See rendering result [collapse.html][1]

See source code [collapse.html][2]

Collapse(折叠组件) is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle.

Collapsing an element will animate the height from its current value to 0.
1. [basic collapse][1.0]
2. [accordion example][2.0]
3. [accessibility][3.0]
4. [JavaScript method][4.0]
5. [JavaScript events][5.0]


## basic collapse
**:exclamation: Note:** Use `.collapse` and set its id, so that the `<a>` and `<button>` can control it.
For `<a>`, set `data-toggle="toggle`, the `href` attribute value should be the `.collapse` element's id, set `role="button alia-expanded="false" aria-controls=".collapse-id-name" `; For `<button>`, set `data-toggle="collapse`, `data-target=#.collapse-id`, set`aria-expanded="false" aria-controls=".collapse-id-name"`

* `.collapse:not(.show)` set `display: none` to hides the content.

* `.collapse.show` shows the content

* `.collapsing` set `postion: relative`, `height:0`, `overflow: hidden`, `transition` is to added when the transition starts, and removed when it finishes.
  
```SCSS
.collapse {
  &:not(.show) {
    display: none;
  }
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;

  // hegiht .35s ease
  @include transition($transition-collapse);
}

----------------
// variablses
$transition-collapse:         height .35s ease !default;
```
#### [⬆ Back to top][0.0]


## accordion example
* Use `.accordion` to the wrapper, and set its id

* Use the basic collapse, add `data-parent=".accordion-id` to collpase element(not the control element) so that only show one and collapse others.

#### [⬆ Back to top][0.0]


## accessibility
* `aria-expanded` to the control element is to conveys the current state of the collapsible element tied to the control to screen readers. `aria-expanded="false"`  indicates that  the collapsible element is closed.

*  If you’ve set the collapsible element to be open by default **using the show class**, set `aria-expanded="true"` on the control instead.

* If the control element’s HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button" ` should be added to the element

* the `data-target` attribute is pointing to an **id selector** – you should add the `aria-controls` attribute to the control element, **containing the id of the collapsible element**.

* To add accordion-like group management to a collapsible area, add the data attribute `data-parent="#selector"`
#### [⬆ Back to top][0.0]


### JavaScript method
```JavaScript
$().collapse()
```

| Name        | Default | Description                                                                                                                        |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| data-parent | false   | If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown |
| data-toggle | ture    | Toggles the collapsible element on invocation                                                                                      |

Always set `data-parent=.accordion-id-` to collapse element to set a accordion-like group, set `data-toggle="collapse"` to control element.

```JavaScript
`$('#toggle`).collapse({
    toggle: false
})

.collapse('toggle') // Toggles a collapsible element to shown or hidden

.collapse('show') // Shows a collapsible element

.collapse('hide') // Hides a collapsible element

.collapse('disponse') // Destroys an element’s collapse
```
#### [⬆ Back to top][0.0]


## JavaScript events
| Event type         | Descripton                                                      |
| ------------------ | --------------------------------------------------------------- | 
| show.bs.collapse   | fires immediately when the **show** instance method is called   |
| shown.bs.collapse  | fired when a collapse element has been made visible to the user |
| hide.bs.collapse   | fired immediately when the hide method has been called          |
| hidden.bs.collapse | fired when a collapse element has been hidden from the user     |


```JavaScript
$().on('show.bs.collapse', function(){
    // do something
})
```
#### [⬆ Back to top][0.0]