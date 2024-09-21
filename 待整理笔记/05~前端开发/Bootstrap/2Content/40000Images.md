[1]: ../4Utilities/80000Float.md
[2]: ../4Utilities/F0000Text.md
[3]: ../4Utilities/50000Display.md
[4]: ../4Utilities/E0000Spacing.md

[0.0]: #Images
[1.0]: #responsive-images
[2.0]: #image-thumbnail
[3.0]: #align-image

[01]:https://823406519.github.io/Bootstrap/Appendix/2Content-2-Images.html
[02]:../Appendix/2Content-2-Images.html

# Images
See rendering result [images.html][01]

See source code [images.html][02]

1. [responsive images][1.0]
2. [image thumbnail][2.0]
3. [align image][3.0]
   
## responsive images
* `.img-fluid` apply to image, making it scale with parent element.
```SCSS
.img-fluid {
  @include img-fluid;
}

@mixin img-fluid {
  // Set a maximum relative to the parent
  max-width: 100%;
  
  /* Set the height to auto, otherwise images will be stretched
   * when setting a width and height attribute on the img element.
   */
  height: auto;
}
```
#### [⬆ Back to top][0.0]



# image thumbnail
* `img-thumnail` set a `padding`, `background-color`, `border`, `border-raduis` so that give an image a rounded border.

```SCSS
.img-thumbnail {
  padding: $thumbnail-padding; // .25rem
  background-color: $thumbnail-bg; // white

  // 1px solid $gray-300
  border: $thumbnail-border-width solid $thumbnail-border-color;
  
  @include border-radius($thumbnail-border-radius); // .25rem
  @include box-shadow($thumbnail-box-shadow); // $enable-shadow: flase

  // Keep them at most 100% wide
  @include img-fluid;
}

----------------
// variables
$thumbnail-padding:                 .25rem !default;
$thumbnail-bg:                      $body-bg !default;
$thumbnail-border-width:            $border-width !default;
$thumbnail-border-color:            $gray-300 !default;
$thumbnail-border-radius:           $border-radius !default;
$thumbnail-box-shadow:              0 1px 2px rgba($black, .075) !default;

$body-bg:                   $white !default;
$border-width:                1px !default;
$border-radius:               .25rem !default;

```
#### [⬆ Back to top][0.0]


## align image
1. Use float utilities, see [float utilities][1]
2. Use text utilities, see [text utilities][2]
3. Use `d-block` and `mx-auto`
    
    `d-block` is in[display utilities][3]
    `mx-auto` is in [spacing utilites][4]

#### [⬆ Back to top][0.0]
