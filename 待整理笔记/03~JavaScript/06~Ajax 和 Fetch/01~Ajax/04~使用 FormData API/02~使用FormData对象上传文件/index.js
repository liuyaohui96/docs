let form = document.forms.namedItem('fileinfo');
form.addEventListener(
  'submit',
  function(ev) {
    let oOutput = document.querySelector('div'),
      oData = new FormData(form);

    oData.append('CustomField', 'This is some extra data');

    let oReq = new XMLHttpRequest();
    oReq.open('POST', 'stash.php', true);
    oReq.onload = function(oEvent) {
      if (oReq.status == 200) {
        oOutput.innerHTML = 'Uploaded!';
      } else {
        oOutput.innerHTML =
          'Error ' +
          oReq.status +
          ' occurred when trying to upload your file.<br />';
      }
    };

    oReq.send(oData);
    ev.preventDefault();
  },
  false
);
