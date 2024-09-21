fetch(url).then(response => {
  response.text().then(text => {
    poemDisplay.textContent = text;
  });
});

fetch(url)
  .then(response => response.text())
  .then(text => {
    poemDisplay.textContent = text;
  });
