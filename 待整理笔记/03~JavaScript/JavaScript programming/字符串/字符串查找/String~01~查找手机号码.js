/**
 * @description find phone number
 * @param {string} str
 * @return {string} ret
 */

function findPhoneNumebr(str) {
  let ret = '';
  return str.match(/1\d{10}|0\d{2,3}-\d{7,8}/g);
}
console.log(
  findPhoneNumebr('我的手机号码是13416390073, 020-12345678是我的电话号码')
);
// [ '13416390073', '020-12345678' ]
