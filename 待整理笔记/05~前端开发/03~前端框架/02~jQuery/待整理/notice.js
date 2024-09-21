var unusualPropertyNames = {
    '': 'An empty string',
    '!': 'Bang!'
  }
  console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
  console.log(unusualPropertyNames['']);  // An empty string
  console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
  console.log(unusualPropertyNames['!']); // Bang!