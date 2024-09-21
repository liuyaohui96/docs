window.addEventListener('popstate', event => {
  console.log(
    'location: ' + document.location + ', state: ' + JSON.stringify(event.state)
  );
});
history.pushState({ page: 1 }, 'title 1', '?page=1');
history.pushState({ page: 2 }, 'title 2', '?page=2');
history.replaceState({ page: 3 }, 'title 3', '?page=3');
history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Logs "location: http://example.com/example.html, state: null"
history.go(2); // Logs "location: http://example.com/example.html?page=3, state: {"page":3}"
