function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.body.style.backgroundColor = 'yellow';
  } else {
    document.body.style.backgroundColor = 'pink';
  }
}

let x = window.matchMedia('(max-width: 700px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
