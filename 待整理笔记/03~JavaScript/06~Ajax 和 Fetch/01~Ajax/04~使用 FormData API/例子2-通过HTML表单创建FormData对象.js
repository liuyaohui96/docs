let formElement = document.querySelector('form');
let request = new XMLHttpRequest();
request.open('POST', 'submitform.php');
request.send(new FormData(formElement));

let formElement = document.querySelector('form');
let formData = new FormData(formElement);
let request = new XMLHttpRequest();
request.open('POST', 'submitform.php');
formData.append('serialnumber', serialNumber++);
request.send(formData);
