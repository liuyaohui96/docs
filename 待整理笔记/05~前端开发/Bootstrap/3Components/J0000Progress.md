[0.0]: #Progress
[1.0]: #basic-progeress
[2.0]: #progress-bar
[3.0]: #progress-bar-striped
[4.0]: #animated-stried-progress
[5.0]: #utilities


[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-I-Progress.html
[02]: ../Appendix/3Components-I-Progress.html

[1]: ../4Utilities/D0000Sizing.md
[2]: ../4Utilities/40000Color.md#background-color

* Firstly, set `<div>` a `progress`
* Set `.progress-bar` in `<div>`. If you want to change progerss bar background, add `bg-*`. If you want a striped progress bar, set `.progress-bar-striped`, or add `.progress-bar-animated` to set striped progress bar animation.

# Progress

See rendering result [progress.html][01]

See source code [progress.html][02]

1. [basic progeress][1.0]
2. [progress bar][2.0]
3. [progress bar striped][3.0]
4. [animated stried progress][4.0]
5. [utilities][5.0]

## basic progeress
* `.progress`
```SCSS
.progress {
  display: flex;
  height: $progress-height;
  overflow: hidden; // force rounded corners by cropping it
  font-size: $progress-font-size;
  background-color: $progress-bg;
  @include border-radius($progress-border-radius);
  @include box-shadow($progress-box-shadow);
}
```
#### [⬆ Back to top][0.0]


## progress bar
* `.progress-bar`
```SCSS
.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $progress-bar-color;
  text-align: center;
  white-space: nowrap;
  background-color: $progress-bar-bg;
  @include transition($progress-bar-transition);
}
```
#### [⬆ Back to top][0.0]


## progress bar striped
* `.progress-bar-striped`   
```SCSS
.progress-bar-striped {
  @include gradient-striped();
  background-size: $progress-height $progress-height;
}
```
#### [⬆ Back to top][0.0]

## animated stried progress
* Firstly, use `.progress-bar-striped`, add `progress-bar-animated`
* `progress-bar-animated`
```SCSS
.progress-bar-animated {
  animation: progress-bar-stripes $progress-bar-animation-timing;
}
```
#### [⬆ Back to top][0.0]

## utilities

* Set `style="height:..."` to progress(**not progress bar**)
  
* Set progress bar's witdh, add `style= "width: ..."`, or [sizing utilities][1](e.g `w-50`)

* set progress bar background color, use [background utilities][2]

#### [⬆ Back to top][0.0]