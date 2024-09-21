[0.0]: #Figure

[1]:https://823406519.github.io/Bootstrap/Appendix/2Content-4-Figure.html
[2]:..//Appendix/2Content-4-Figure.html
# Figure
See rendering result [figure.html][1]

See source code [figure.html][2]


* `.figure` set `display: inline-block`
* `.figure-img` set to `<img>` in the `<figure>`, reset `margin-bottom` of img and the `line-height:1`.
* `.figure-caption` set to `<figcation>`, set the `font-size` and `color`
```SCSS

.figure {
  // Ensures the caption's text aligns with the image.
  display: inline-block;
}

.figure-img {
  margin-bottom: ($spacer / 2);
  line-height: 1;
}

.figure-caption {
  font-size: $figure-caption-font-size; // 90%
  color: $figure-caption-color; // #gray-600
}

------------
// variables
$figure-caption-font-size:          90% !default;
$figure-caption-color:              $gray-600 !default;

```
#### [⬆ Back to top][0.0]