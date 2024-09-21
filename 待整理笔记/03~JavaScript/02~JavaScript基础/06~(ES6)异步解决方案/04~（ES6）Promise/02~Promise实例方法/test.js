fetch('https://www.google.com')
  .then(response => {
    console.log(response.status);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    document.querySelector('#spinner').style.display = 'none';
  });
