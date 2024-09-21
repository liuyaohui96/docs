// Truncate(截断) a string (first argument)
// if it is longer than the given maximum string length.
// Return the truncated string with a `...` ending.
function truncateString(str, num) {
  if (str.length > num) return str.slice(num) + '...';
  return str;
}
