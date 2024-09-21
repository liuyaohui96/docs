function mySetInterval(count, milliseconds) {
  for (let i = 0; i < count; i++) {
    setTimeout(function() {
      // ...
    }, milliseconds);
  }
}
