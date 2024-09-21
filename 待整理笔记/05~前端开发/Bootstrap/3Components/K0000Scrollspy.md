[0.0]: #Scrollspy
[1.0]: #JavaScript-method
[2.0]: #JavaScript-events


[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-J-Scrollspy.html
[02]: ../Appendix/3Components-J-Scrollspy.html

* Set a navabar, nav or list-group

* The content set in `<div>`, set attribute `data-spy="scroll" data-target="nav-id" data-offset="0"`. When spying on elements other than the `<body>`, be sure to have a `height` set and `overflow-y: scroll` applied.

# Scrollspy

See rendering result [scrollspy.html][01]

See source code [scrollspy.html][02]

1. [JavaScript method][1.0]
2. [JavaScript events][2.0]
## JavaScript method
```JavaScript
$().scrollspy()
```

|Name| Default| Description|
|----| ----| ---|
|data-offset| 10 | Pixels to offset from top when calculating position of scroll|
|data-method| auto | Finds which section the spied element is in. `auto` will choose the best method get scroll coordinates. `offset` will use jQuery offset method to get scroll coordinates. `position` will use jQuery position method to get scroll coordinates. |
|data-target|"" | Specifies element to apply Scrollspy plugin.

#### [⬆ Back to top][0.0]


## JavaScript events

```JavaScript
// fires on the scroll element whenever a new item becomes activated by the scrollspy
activate.bs.scrollspy

$().on('activate.bs.scrollspy', function(){
    // do something
})
```
#### [⬆ Back to top][0.0]




