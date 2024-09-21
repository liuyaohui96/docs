// 两个字符串，如果A字符串中的每一个字符都可以在B字符串中找到唯一对应，
// 并且顺序一一对应；如果存在这样的函数，那么A和B同态

isIsomorphic('egg', 'add'); // true
isIsomorphic('paper', 'title'); // true
isIsomorphic('kick', 'side'); // false

function isIsomorphic(firstString, secondString) {
  // Check if the same length. If not, they cannot be isomorphic
  if (firstString.length !== secondString.length) return false;

  var letterMap = {};

  for (var i = 0; i < firstString.length; i++) {
    var letterA = firstString[i],
      letterB = secondString[i];

    // If the letter does not exist, create a map and map it to the value
    // of the second letter
    if (letterMap[letterA] === undefined) {
      letterMap[letterA] = letterB;
    } else if (letterMap[letterA] !== letterB) {
      // Eles if letterA already exists in the map, but it does not map to
      // letterB, that means that A is mapping to more than one letter.
      return false;
    }
  }
  // If after iterating through and conditions are satisfied, return true.
  // They are isomorphic
  return true;
}
