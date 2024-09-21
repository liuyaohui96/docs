[0.0]: #Media-object


[1]: ../4Utilities/E0000Spacing.md
[2]: ../4Utilities/70000Flex.md
[3]: https://823406519.github.io/Bootstrap/Appendix/1Layout-5-media-object.html
[4]: ..//Appendix/1Layout-5-media-object.html


# Media object
Media object help build componet that media is alongside content. Only use `.media` & `.medai-body ` , we can build a simple medai object. Also we can use **[space utilities][1]** to update padding and margin. We can use [flex utililies][2] set `align-self...-*`. To set the media 's order, we can set `order...-[0-12]`  or change its HTML order directly.

See rendering result [media-object.html][3]

See source code [media-object.html][4]


## SCSS
```SCSS
.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}
```

#### [⬆ Back to top][0.0]