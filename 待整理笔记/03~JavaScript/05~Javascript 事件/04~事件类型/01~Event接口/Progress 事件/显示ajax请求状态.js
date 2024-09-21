var progressBar = document.getElementById('p'),
  client = new XMLHttpRequest();
client.open('GET', 'magical-unicorns');
client.onprogress = function(pe) {
  if (pe.lengthComputable) {
    progressBar.max = pe.total;
    progressBar.value = pe.loaded;
  }
};
client.onloadend = function(pe) {
  progressBar.value = pe.loaded;
};
client.send();
