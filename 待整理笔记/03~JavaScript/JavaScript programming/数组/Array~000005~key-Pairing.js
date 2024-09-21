/**
 * @description According to the keys get the key pair
 * @argument {array} keysArr
 * @return {array} key pair
 */

function getKeyPair(keysArr) {
  let pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };
  return keysArr.map(key => [key, pairs[key]]);
}

console.log(getKeyPair(['A', 'G', 'C', 'T']));
