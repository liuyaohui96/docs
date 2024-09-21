## reboot.css
```SCSS
// _reboot.scss

// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.
// 5. Setting @viewport causes scrollbars to overlap content in IE11 and Edge, so
//    we force a non-overlapping, non-auto-hiding scrollbar to counteract.
// 6. Change the default tap highlight to be completely transparent in iOS.
html {
  -webkit-text-size-adjust: 100%; // 4
  -ms-text-size-adjust: 100%; // 4
  -ms-overflow-style: scrollbar; // 5
  -webkit-tap-highlight-color: rgba($black, 0); // 6
}

// IE10+ doesn't honor `<meta name="viewport">` in some cases.
@at-root {
  @-ms-viewport {
    width: device-width;
  }
}
```

```SCSS
// Suppress the focus outline on elements that cannot be accessed via keyboard.
// This prevents an unwanted focus outline from appearing around elements that
// might still respond to pointer events.
//
// Credit: https://github.com/suitcss/base
[tabindex="-1"]:focus {
  outline: 0 !important;
}

```


## Float
These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. !important is included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware float utilities have no affect on flex items.

